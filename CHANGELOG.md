# Changelog

Todas las versiones relevantes de **Luz Extremadura**. El proyecto sigue [Versionado Semántico](https://semver.org/lang/es/).

## [1.0.0] — 2026-11-02

Primera release oficial de producción de **Luz Extremadura** (`https://luz.antoniohorrillo.com/`), portal web estático y de alto rendimiento para la consulta en tiempo real del precio regulado de la electricidad (**PVPC tarifa 2.0TD**) en **Badajoz, Cáceres y toda la comunidad autónoma de Extremadura**.

### Añadido

- **Conexión Directa con Red Eléctrica de España (REE / e·sios)** ([`scripts/actualizar_precios_luz.mjs`](scripts/actualizar_precios_luz.mjs)):
  - Descarga horaria sin dependencias ni intermediarios desde el archivo oficial `archive 70` de e·sios.
  - Conversión del precio peninsular regulado (`PCB`) a euros por kilovatio hora (`€/kWh`) y cálculo de estadísticas clave (precio mínimo, máximo y medio).
  - Publicación automatizada de los precios del día siguiente todos los días a partir de las **20:20 h**.
- **Termómetro en Vivo & Curva Horaria 24h** ([`src/pages/index.astro`](src/pages/index.astro)):
  - Detección automática de la hora en curso con semáforo de estado y precio en tiempo real.
  - Rejilla de 24 horas con código de color optimizado: **Barata** (Verde), **Media** (Amarillo) y **Cara** (Rojo).
  - Tramos regulados oficiales (**Valle**, **Llano** y **Punta**) identificados hora a hora.
  - Bloque condicional de **Precios de Mañana** para programar electrodomésticos antes de salir de casa o dormir.
- **Calculadora Extremeña de Consumos Reales** ([`src/pages/index.astro`](src/pages/index.astro)):
  - Estimación del coste por ciclo o por hora para hábitos y climatización en Extremadura:
    - *Aire Acondicionado Inverter* (1,2 kW) para olas de calor veraniegas.
    - *Termo Eléctrico 80L* (2,5 kWh) esencial en zonas rurales y municipios sin gas natural.
    - *Lavadora Eco / 60ºC* (1,4 kWh) con comparativa directa de coste punta vs. valle.
    - *Coche Eléctrico* (15 kWh para 100 km) frente al gasto equivalente en gasolina o diésel.
- **Dossier «Extremadura, potencia limpia»** ([`src/pages/index.astro`](src/pages/index.astro)):
  - Explicación divulgativa sobre la generación fotovoltaica, hidroeléctrica y nuclear regional (+400% sobre la demanda) y el funcionamiento marginalista peninsular.
- **Sección de Preguntas Frecuentes (FAQS) & SEO Enriquecido** ([`src/data/faqs.ts`](src/data/faqs.ts), [`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro)):
  - Respuestas claras sobre publicación de horarios, PVPC vs. mercado libre, tramos horarios, precios negativos en horas solares e impuestos en la factura.
  - Marcado estructurado Schema.org (`WebSite`, `WebPage`, `Dataset`, `FAQPage`, `BreadcrumbList`).
  - Metadatos geográficos específicos de Extremadura (`geo.region: ES-EX`, coordenadas de Badajoz y Cáceres).
- **Privacidad y Google Consent Mode v2** ([`src/components/CookieBanner.astro`](src/components/CookieBanner.astro), [`src/pages/cookies.astro`](src/pages/cookies.astro)):
  - Cumplimiento de la AEPD y RGPD con denegación preventiva regional para visitantes del EEE.
  - Banner no invasivo y modal de preferencias con interruptor estilizado.
  - Integración de Google Analytics 4 (`G-HEKMQY6G5E`) con IP anonimizada.
- **Identidad Gráfica y PWA Completa** ([`public/assets/`](public/assets/)):
  - Tarjeta social Open Graph ([`og-image.png`](public/assets/og-image.png), 1200×630 px) con márgenes seguros y gráfica de tramos horarios en €/kWh.
  - Logo vectorial escalable ([`logo.svg`](public/assets/logo.svg)), `site.webmanifest`, `favicon.ico`, `favicon.svg`, `icon-192.png`, `icon-512.png` y `apple-touch-icon.png`.
- **Automatización CI/CD con GitHub Actions** ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)):
  - Despliegue diario programado a las 20:30 h y a las 06:00 h peninsulares hacia GitHub Pages bajo el dominio `luz.antoniohorrillo.com`.
