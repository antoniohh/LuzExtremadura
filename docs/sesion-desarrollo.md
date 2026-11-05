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
- Cron diario a las **21:30 CET** (20:30 UTC en invierno) para capturar los precios del día siguiente recién emitidos por REE.
- Cron diario de respaldo a las **06:00 CET** (05:00 UTC en invierno).
- Despliegue automático en GitHub Pages bajo el dominio personalizado `luz.antoniohorrillo.com`.

### 2.5. Ciclo de Releases y Control de Distribución
- Flujo de empaquetado y publicación automática mediante `.github/workflows/release.yml` en etiquetas `v*`.
- Consolidación de paquetes locales precompilados y sumas SHA-256 en la carpeta `release/` (`v1.0.0`, `v1.0.1`, `v1.0.2`, `v1.0.3`, `v1.1.0` y `v1.1.1`).
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
