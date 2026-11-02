# Guía de la API Oficial de Red Eléctrica (e·sios) — PVPC

Documentación técnica sobre la extracción, estructura y cálculo del **Precio Voluntario para el Pequeño Consumidor (PVPC tarifa 2.0TD)** empleada en **Luz Extremadura**.

---

## 1. Fuente Oficial

Red Eléctrica de España (REE), a través de su sistema de información del operador del sistema (**e·sios**), publica diariamente los precios horarios del PVPC aplicables a los consumidores acogidos a la tarifa regulada 2.0TD.

* **Endpoint directo JSON:**
  ```text
  https://api.esios.ree.es/archives/70/download_json?locale=es
  ```
* **Consulta por fecha específica (`YYYY-MM-DD`):**
  ```text
  https://api.esios.ree.es/archives/70/download_json?date=YYYY-MM-DD&locale=es
  ```

---

## 2. Horarios de Publicación

* **Día en curso:** Disponible las 24 horas.
* **Día siguiente:** Red Eléctrica publica los precios definitivos entre las **20:15 y las 20:25 horas** peninsulares de cada día tras la casación de los mercados mayoristas y de ajuste.

---

## 3. Estructura de Datos del Archivo 70

El endpoint devuelve un objeto JSON con una matriz `"PVPC"` que contiene las 24 horas del día (`"Hora": "00-01"` hasta `"Hora": "23-24"`).

### Campos clave:
* **`PCB`**: Término de facturación de energía activa para la **Península, Baleares y Canarias** en **€/MWh** (con coma decimal, ej. `"207,25"`). Es el precio final que se le factura al usuario por kilovatio hora.
* **`CYM`**: Término de facturación para **Ceuta y Melilla**.
* **`TEUPCB`**: Término de peajes de acceso y cargos del sistema regulados por el Gobierno y la CNMC (los que marcan los escalones Valle, Llano y Punta).
* **`PMHPCB`**: Precio medio del mercado diario en la hora correspondiente.
* **`CCVPCB`**: Coste de comercialización regulado.

---

## 4. Transformación de Unidades en Luz Extremadura

Para ofrecer la máxima claridad al consumidor doméstico, la aplicación transforma los valores en `scripts/actualizar_precios_luz.mjs`:

$$\text{Precio en } €/\text{kWh} = \frac{\text{PCB (€/MWh)}}{1000}$$

*Ejemplo:* Un valor `PCB` de `228,10 €/MWh` equivale exactamente a **`0.2281 €/kWh`**.
