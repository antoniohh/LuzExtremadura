export interface FaqItem {
  pregunta: string;
  respuesta: string;
}

export const FAQS_SEO: FaqItem[] = [
  {
    pregunta: "¿A qué hora se publican los precios de la luz de mañana?",
    respuesta:
      "Red Eléctrica de España (REE / e·sios) publica los precios horarios definitivos del PVPC para el día siguiente todos los días entre las 20:15 y las 20:30 horas. En Luz Extremadura se actualizan de forma automática en cuanto se emiten.",
  },
  {
    pregunta: "¿Qué diferencia hay entre la tarifa PVPC y el mercado libre en Extremadura?",
    respuesta:
      "El PVPC (Precio Voluntario para el Pequeño Consumidor) es la tarifa regulada por el Gobierno de España donde el precio del kWh varía cada hora según el coste real en el mercado mayorista. En el mercado libre, se pacta un precio fijo o indexado con una comercializadora privada mediante contrato anual.",
  },
  {
    pregunta: "¿Cuáles son los tramos horarios oficiales de la luz (Valle, Llano y Punta)?",
    respuesta:
      "El tramo Valle (más económico) va de 00:00 a 08:00 h en días laborables y las 24 horas en fines de semana y festivos. El tramo Llano (precio medio) va de 08:00 a 10:00 h, de 14:00 a 18:00 h y de 22:00 a 24:00 h. El tramo Punta (más caro) va de 10:00 a 14:00 h y de 18:00 a 22:00 h de lunes a viernes.",
  },
  {
    pregunta: "¿Por qué hay horas con precios de la luz negativos o cercanos a cero?",
    respuesta:
      "Ocurre en las horas centrales del día (11:00 a 16:00 h) cuando la generación de energía renovable, especialmente la fotovoltaica en regiones líderes como Extremadura y la eólica, supera la demanda eléctrica peninsular, provocando que el coste mayorista baje a mínimos históricos.",
  },
  {
    pregunta: "¿El precio mostrado incluye impuestos (IVA e Impuesto Eléctrico)?",
    respuesta:
      "El PVPC de Red Eléctrica refleja el término de energía activo íntegro (coste horario mayorista + peajes regulados de transporte y distribución + margen de comercialización). En la factura mensual se añaden el término de potencia contratada (kW fijos), el alquiler del contador y los impuestos vigentes (IVA e Impuesto sobre la Electricidad).",
  },
];
