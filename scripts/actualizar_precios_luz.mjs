#!/usr/bin/env node

/**
 * Script para descargar y procesar los precios horarios del PVPC (Tarifa 2.0TD)
 * desde el archivo oficial de Red Eléctrica de España (e·sios archive 70).
 *
 * Descarga los precios de hoy y, si ya están disponibles (a partir de las ~20:20 h),
 * los precios de mañana.
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");
const OUTPUT_FILE = path.join(ROOT_DIR, "public", "datos", "precios_luz_hoy.json");

/**
 * Obtiene la fecha en formato YYYY-MM-DD para la zona horaria de España (Europe/Madrid)
 */
function getFechaLocal(offsetDias = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDias);
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Madrid",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return formatter.format(d);
}

/**
 * Descarga y parsea el PVPC de una fecha concreta
 */
async function descargarPVPC(fechaISO) {
  const url = `https://api.esios.ree.es/archives/70/download_json?date=${fechaISO}&locale=es`;
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "LuzExtremadura/1.0 (+https://luz.antoniohorrillo.com)",
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      console.warn(`[WARN] Respuesta no OK (${res.status}) para ${fechaISO}`);
      return null;
    }

    const data = await res.json();
    const lista = data.PVPC;
    if (!Array.isArray(lista) || lista.length === 0) {
      return null;
    }

    // Procesar las horas (habitualmente 24, o 23/25 en cambio de hora)
    // PCB es el precio peninsular en €/MWh
    const horas = lista.map((reg) => {
      const horaStr = reg.Hora; // Ej: "00-01", "08-09"
      const horaInicio = parseInt(horaStr.split("-")[0], 10);
      const pcbMwh = parseFloat(reg.PCB.replace(",", "."));
      const precioKwh = pcbMwh / 1000; // €/kWh
      const precioKwhCentimos = precioKwh * 100; // céntimos €/kWh

      // Determinación de tramo regulado 2.0TD (hora peninsular de lunes a viernes no festivos):
      // Valle (P3): 00:00 a 08:00
      // Llano (P2): 08:00 a 10:00, 14:00 a 18:00, 22:00 a 24:00
      // Punta (P1): 10:00 a 14:00, 18:00 a 22:00
      let tramo = "valle";
      if (
        (horaInicio >= 10 && horaInicio < 14) ||
        (horaInicio >= 18 && horaInicio < 22)
      ) {
        tramo = "punta";
      } else if (
        (horaInicio >= 8 && horaInicio < 10) ||
        (horaInicio >= 14 && horaInicio < 18) ||
        (horaInicio >= 22 && horaInicio < 24)
      ) {
        tramo = "llano";
      }

      return {
        hora: horaInicio,
        rango: horaStr,
        precioMwh: Number(pcbMwh.toFixed(2)),
        precioKwh: Number(precioKwh.toFixed(5)),
        precioCentimos: Number(precioKwhCentimos.toFixed(2)),
        tramo,
      };
    });

    // Calcular estadísticas del día
    const precios = horas.map((h) => h.precioKwh);
    const min = Math.min(...precios);
    const max = Math.max(...precios);
    const avg = precios.reduce((acc, v) => acc + v, 0) / precios.length;

    const horaMinima = horas.find((h) => h.precioKwh === min);
    const horaMaxima = horas.find((h) => h.precioKwh === max);

    // Clasificar nivel de precio respecto al día: barato / normal / caro
    const rangoPrecios = max - min;
    horas.forEach((h) => {
      if (rangoPrecios === 0) {
        h.nivel = "medio";
      } else {
        const ratio = (h.precioKwh - min) / rangoPrecios;
        if (ratio <= 0.33) h.nivel = "barato";
        else if (ratio <= 0.66) h.nivel = "medio";
        else h.nivel = "caro";
      }
    });

    return {
      fecha: fechaISO,
      actualizado: new Date().toISOString(),
      estadisticas: {
        precioMinimo: {
          kwh: Number(min.toFixed(5)),
          centimos: Number((min * 100).toFixed(2)),
          hora: horaMinima.hora,
          rango: horaMinima.rango,
        },
        precioMaximo: {
          kwh: Number(max.toFixed(5)),
          centimos: Number((max * 100).toFixed(2)),
          hora: horaMaxima.hora,
          rango: horaMaxima.rango,
        },
        precioMedio: {
          kwh: Number(avg.toFixed(5)),
          centimos: Number((avg * 100).toFixed(2)),
        },
      },
      horas,
    };
  } catch (err) {
    console.error(`[ERROR] Descarga fallida para ${fechaISO}:`, err.message);
    return null;
  }
}

async function main() {
  console.log("⚡ [LuzExtremadura] Actualizando precios del PVPC...");

  const fechaHoy = getFechaLocal(0);
  const fechaManana = getFechaLocal(1);

  console.log(`📅 Consultando día de hoy: ${fechaHoy}`);
  const datosHoy = await descargarPVPC(fechaHoy);

  console.log(`📅 Consultando día de mañana: ${fechaManana}`);
  const datosManana = await descargarPVPC(fechaManana);

  if (!datosHoy && !datosManana) {
    throw new Error("No se ha podido descargar los datos de ningún día.");
  }

  const payload = {
    generadoEl: new Date().toISOString(),
    fuente: "Red Eléctrica de España (REE / e·sios)",
    hoy: datosHoy,
    manana: datosManana,
  };

  await fs.mkdir(path.dirname(OUTPUT_FILE), { recursive: true });
  await fs.writeFile(OUTPUT_FILE, JSON.stringify(payload, null, 2), "utf8");

  console.log(`✅ Archivo guardado con éxito en: ${OUTPUT_FILE}`);
  if (datosHoy) {
    console.log(
      `   Hoy: Min ${datosHoy.estadisticas.precioMinimo.centimos} c€/kWh (h:${datosHoy.estadisticas.precioMinimo.rango}) | Max ${datosHoy.estadisticas.precioMaximo.centimos} c€/kWh | Med ${datosHoy.estadisticas.precioMedio.centimos} c€/kWh`
    );
  }
  if (datosManana) {
    console.log(
      `   Mañana disponible: Min ${datosManana.estadisticas.precioMinimo.centimos} c€/kWh | Max ${datosManana.estadisticas.precioMaximo.centimos} c€/kWh`
    );
  } else {
    console.log("   Mañana: Aún no disponible (se publicará sobre las 20:20 h).");
  }
}

main().catch((err) => {
  console.error("❌ Error ejecutando actualizar_precios_luz.mjs:", err);
  process.exit(1);
});
