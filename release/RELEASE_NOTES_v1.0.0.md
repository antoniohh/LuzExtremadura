# Luz Extremadura 1.0.0

**Precio de la luz hoy en Extremadura (Badajoz y Cáceres) hora a hora, tarifa regulada PVPC 2.0TD y semáforo energético.**

Primera release oficial de producción de **Luz Extremadura**, disponible en [https://luz.antoniohorrillo.com/](https://luz.antoniohorrillo.com/).

---

## ⚡ Novedades y Características

### 1. Precios Oficiales y Curva Horaria 24h
- Conexión sin intermediarios con el archivo oficial del PVPC de **Red Eléctrica de España (REE / e·sios archive 70)**.
- Consulta en vivo de la hora en curso con semáforo energético de 3 colores (**Barata**, **Media**, **Cara**) y tramos oficiales (**Valle**, **Llano** y **Punta**).
- Publicación automática de los precios de mañana cada día a partir de las **20:20 h**.

### 2. Calculadora Adaptada al Clima y Hogar Extremeño
- Estimaciones en euros de coste real por ciclo/hora para:
  - **Aire Acondicionado Inverter:** Gasto en olas de calor veraniegas.
  - **Termo Eléctrico 80L:** Ahorro programado en localidades sin gas natural.
  - **Lavadora Eco/60ºC:** Comparativa entre hora punta y hora valle.
  - **Coche Eléctrico (100 km):** Coste en carga nocturna vs. diurna.

### 3. Divulgación: «Extremadura, potencia limpia»
- Análisis sobre la generación fotovoltaica, hidroeléctrica y nuclear regional (+400% sobre la demanda) y explicación del mercado marginalista peninsular.

### 4. SEO Técnico, Privacidad y Rendimiento
- Marcado estructurado Schema.org (`WebSite`, `WebPage`, `Dataset`, `FAQPage`, `BreadcrumbList`).
- Cumplimiento de RGPD / AEPD con **Google Consent Mode v2** y medición anónima con `G-HEKMQY6G5E`.
- PWA completa con `site.webmanifest`, `og-image.png` (1200x630 px) y familia de iconos de alta resolución.
- Despliegue continuo en GitHub Pages mediante GitHub Actions programado a las 20:30 h y 06:00 h.

---

## 📦 Archivos del Paquete de Release

- **Código y Build Estático:** `luz-extremadura-v1.0.0.zip`
- **Verificación:** `luz-extremadura-v1.0.0.zip.sha256`

## 🚀 Despliegue e Instalación Local

```bash
# Clonar y entrar al repositorio
cd LuzExtremadura

# Instalar dependencias
npm ci

# Descargar precios y arrancar servidor local
npm run actualizar:hoy
npm run dev

# Compilar para producción
npm run build
```
