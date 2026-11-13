# Sesión de Desarrollo — Luz Extremadura v1.0.0

Registro técnico de arquitectura, diseño, decisiones y despliegue del portal **Luz Extremadura**.

---

## 1. Contexto y Objetivos

El proyecto nace con el propósito de trasladar el modelo de éxito, rendimiento y servicio público de **Combustible Extremadura** al sector energético eléctrico:
- Ofrecer el precio oficial de la luz (**tarifa regulada PVPC 2.0TD**) hora a hora.
- Enfocar la herramienta en las necesidades y clima de **Extremadura** (Badajoz y Cáceres).
- Eliminar la publicidad abusiva, pop-ups y rastreo invasivo habituales en los portales nacionales.
- Crear una interfaz limpia, accesible y veloz basada en **Astro** y **Tailwind CSS**.

---

## 2. Decisiones Técnicas

### 2.1. Conexión de Datos Directa con Red Eléctrica (REE)
- Se utiliza el archivo abierto `archive 70` de e·sios (`https://api.esios.ree.es/archives/70/download_json?locale=es`).
- No requiere tokens API ni pasarelas comerciales de terceros.
- Descarga los precios de hoy y mañana en un único JSON local (`public/datos/precios_luz_hoy.json`), permitiendo generar un sitio 100% estático ultrarrápido.

### 2.2. Diseño de Semáforo y Tramos
- Tres niveles semánticos de claridad inmediata:
  - **Barata:** Fondo esmeralda suave con bordes y tipografía de alto contraste.
  - **Media:** Fondo ámbar dorado.
  - **Cara:** Fondo carmín suave para desaconsejar consumos intensivos.
- Detección en vivo de la hora en curso en la zona horaria `Europe/Madrid`.

### 2.3. Privacidad Estricta (RGPD / AEPD)
- Implementación de **Google Consent Mode v2** en `<head>`.
- Denegación previa de señales (`denied`) para visitantes del EEE hasta que interactúan con el banner de cookies.
- Etiqueta de Google Analytics 4: **`G-HEKMQY6G5E`** con anonimización de IP activa.

### 2.4. Automatización con GitHub Actions
- Cron diario a las **15:51 UTC** (16:51 CET en invierno) para capturar los precios del día siguiente, compensando el retardo de colas (~4h 54m) para desplegar sobre las **21:45 CET**.
- Cron diario de respaldo y refresco matinal a las **00:24 UTC** (01:24 CET en invierno).
- Despliegue automático en GitHub Pages bajo el dominio personalizado `luz.antoniohorrillo.com`.

### 2.5. Ciclo de Releases y Control de Distribución
- Flujo de empaquetado y publicación automática mediante `.github/workflows/release.yml` en etiquetas `v*`.
- Consolidación de paquetes locales precompilados y sumas SHA-256 en la carpeta `release/` (`v1.0.0`, `v1.0.1`, `v1.0.2`, `v1.0.3`, `v1.1.0`, `v1.1.1`, `v1.1.2`, `v1.1.3` y `v1.1.4`).
- Licencia formal MIT y directrices operativas documentadas en `AGENTS.md`.

---

## 3. Registro de Versiones Recientes

### 3.1. Versión 1.1.0 (2026-11-03)
- Incorporación del banner responsivo nativo de instalación PWA en Chrome móvil (`InstallPrompt.astro`).
- Configuración de Google Consent Mode v2 delimitado por región (bloqueo estricto por defecto en el EEE).
- Actualización de la política de privacidad y cookies (`/cookies/`).

### 3.2. Versión 1.1.1 (2026-11-05)
- Limpieza y reencuadre completo del activo corporativo Open Graph (`public/assets/og-image.png`).
- Eliminación de franjas negras laterales (pillarbox) y ajuste limpio y proporcional a la relación estándar 1200 × 630 px.
- Optimización de metadatos sociales para previsualizaciones en plataformas de mensajería y redes sociales.

### 3.3. Versión 1.1.2 (2026-11-05)
- Recalibración del cron de GitHub Actions de previsión del día siguiente a `14:51 UTC` (`51 14 * * *`).
- Compensación del retardo medido en las colas de GitHub Actions (~4 h 54 min) para asegurar la publicación efectiva de la previsión de precios a las 20:45 CET (8:45 PM).
- Sincronización del paquete de distribución local y notas de versión `v1.1.2`.

### 3.4. Versión 1.1.3 (2026-11-06)
- Retraso de una hora en el cron de GitHub Actions de previsión del día siguiente a `15:51 UTC` (`51 15 * * *`).
- Ajuste del tiempo de despliegue efectivo a las 21:45 CET tras compensar la latencia de colas.
- Sincronización del paquete de distribución local y notas de versión `v1.1.3`.

### 3.5. Versión 1.1.4 (2026-11-08)
- Desacoplamiento de fechas estáticas en las etiquetas `<title>` y `<meta name="description">` en `src/pages/index.astro`.
- Resolución de pérdida de CTR en Google SERP provocada por snippets desfasados guardados en caché por Googlebot.
- Saneamiento y coherencia de tarjetas sociales Open Graph y Twitter Cards sin variables temporales caducables.
- Automatización de la señal de frescura de contenido mediante actualización diaria de `<lastmod>` en `public/sitemap.xml` vía `scripts/actualizar_precios_luz.mjs`.
- Sincronización del paquete de distribución local y notas de versión `v1.1.4`.

### 3.6. Versión 1.2.0 (2026-11-12)
- Incorporación de la barra superior transversal `NetworkBar.astro` 100% responsiva y módulo de enlazado SEO en `Footer.astro` para interconectar *Luz*, *Combustible*, *Embalses* y *GlucoLuna*.

### 3.7. Versión 1.2.1 (2026-11-13)
- Renovación completa de la identidad visual y activos de marca con Nano Banana y trazado vectorial de alta precisión (`Logo.astro`, `favicon.svg`, `logo.svg`, `logo.png`, `icon-512.png`, `icon-192.png`, `apple-touch-icon.png`, `favicon.ico` y `og-image.png` de 1200×630 px).
