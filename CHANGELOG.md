# Changelog

Todas las versiones relevantes de **Luz Extremadura**. El proyecto sigue [Versionado Semántico](https://semver.org/lang/es/).

## [1.0.1] — 2026-11-02

Versión de consolidación de diseño responsive, accesibilidad tipográfica, navegación global y optimización de activos PWA.

### Añadido

- **Navegación Global Multiruta y Menú Móvil Desplegable** ([`src/components/Header.astro`](src/components/Header.astro)):
  - Enlaces absolutos con ancla (`/#horas-hoy`, `/#calculadora`, `/#extremadura-energia`, `/#faqs`) que garantizan la navegación correcta tanto desde la portada como desde páginas secundarias (como `/cookies/`).
  - Detección de ruta activa con desplazamiento suave (*smooth scroll*) en la portada sin recarga de página.
  - Nuevo menú hamburguesa móvil desplegable con acceso a todas las secciones del portal.
- **Unificación Tipográfica Responsiva de Encabezados `<h2>`** ([`src/pages/index.astro`](src/pages/index.astro)):
  - Escala homogénea en todas las secciones principales: `text-xl` en móvil (1.25rem), `sm:text-2xl` en tablet (1.5rem) y `lg:text-3xl` en escritorio (1.875rem) con interlineado ceñido `leading-snug`.

### Corregido

- **Badge 'PVPC REE' en Cabecera Móvil:** Prevención de fractura a doble línea mediante `whitespace-nowrap`, escala de fuente ceñida `text-[10px] sm:text-xs` y punto de pulso adaptado.
- **Identidad de Marca sin Recortes:**
  - Ampliación del `viewBox` de [`logo.svg`](public/assets/logo.svg) a `500x100` para garantizar márgenes holgados a la derecha y evitar cortes en cualquier pantalla.
  - Regeneración completa de [`og-image.png`](public/assets/og-image.png) (1200x630 px) con márgenes de seguridad ampliados (>120 px) y rótulo oficial en español **«Tramos horarios €/kWh»**.

## [1.0.0] — 2026-11-02

Primera release oficial de producción de **Luz Extremadura** (`https://luz.antoniohorrillo.com/`), portal web estático y de alto rendimiento para la consulta en tiempo real del precio regulado de la electricidad (**PVPC tarifa 2.0TD**) en **Badajoz, Cáceres y toda la comunidad autónoma de Extremadura**.

### Añadido

- **Conexión Directa con Red Eléctrica de España (REE / e·sios)** ([`scripts/actualizar_precios_luz.mjs`](scripts/actualizar_precios_luz.mjs)).
- **Termómetro en Vivo & Curva Horaria 24h** ([`src/pages/index.astro`](src/pages/index.astro)).
- **Calculadora Extremeña de Consumos Reales** ([`src/pages/index.astro`](src/pages/index.astro)).
- **Dossier «Extremadura, potencia limpia»** ([`src/pages/index.astro`](src/pages/index.astro)).
- **Sección de Preguntas Frecuentes (FAQS) & SEO Enriquecido** ([`src/data/faqs.ts`](src/data/faqs.ts), [`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro)).
- **Privacidad y Google Consent Mode v2** ([`src/components/CookieBanner.astro`](src/components/CookieBanner.astro), [`src/pages/cookies.astro`](src/pages/cookies.astro)).
- **Identidad Gráfica y PWA Completa** ([`public/assets/`](public/assets/)).
- **Automatización CI/CD con GitHub Actions** ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)).
