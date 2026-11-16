# Luz Extremadura 1.3.0

**Migración al dominio propio oficial `https://luzextremadura.es` e incorporación del bloque legal, de privacidad y de contacto completo (LSSI-CE, RGPD, LOPDGDD, Guía de Cookies de la AEPD y Google E-E-A-T).**

Versión de producción de **Luz Extremadura**, disponible en `https://luzextremadura.es/`.

---

## ⚡ Novedades y Mejoras en la versión 1.3.0

### 1. Migración al Dominio Propio Oficial `https://luzextremadura.es`
- **Configuración canónica integral (`public/CNAME`, `astro.config.mjs`, `src/lib/site.ts`, `src/components/NetworkBar.astro`):** Actualización de dominio principal, URLs canónicas, etiquetas Open Graph, Twitter Cards y el grafo estructurado Schema.org (`WebSite`, `WebPage`, `Dataset`, `FAQPage`, `BreadcrumbList`).
- **Indexación y Sitemap (`public/robots.txt`, `public/sitemap.xml`, `scripts/actualizar_precios_luz.mjs`):** Generación automática de las 5 rutas públicas bajo `https://luzextremadura.es/` y cabeceras `User-Agent` hacia e·sios actualizadas.
- **Service Worker PWA (`public/sw.js`):** Caché actualizada a `luz-extremadura-v2` incluyendo precarga de las páginas legales y de contacto.

### 2. Bloque Legal, de Privacidad y de Contacto Completo
- **Aviso Legal y Condiciones de Uso (`src/pages/aviso-legal.astro` → `/aviso-legal/`):** Identificación del titular conforme al art. 10 LSSI-CE (`info@antoniohorrillo.com`, `antoniohorrillo.com`), condiciones de acceso, origen público de los datos (Red Eléctrica de España / e·sios `archive 70`), carácter orientativo y licencia MIT.
- **Política de Privacidad (`src/pages/privacidad.astro` → `/privacidad/`):** Cumplimiento del RGPD y LOPDGDD bajo el principio de privacidad desde el diseño, detalle de datos técnicos y analítica opcional con Google Consent Mode v2, plazos de conservación y ejercicio de derechos.
- **Política de Cookies (`src/pages/cookies.astro` → `/cookies/`):** Tabla técnica detallada de almacenamiento local (`localStorage` / `sessionStorage`) y cookies opcionales de Google Analytics 4 (`_ga`, `_ga_HEKMQY6G5E`), con acceso directo al configurador de consentimiento.
- **Contacto y Soporte (`src/pages/contacto.astro` → `/contacto/`):** Canal de contacto directo con el titular (`info@antoniohorrillo.com` y `antoniohorrillo.com`), soporte técnico en GitHub Issues y orientación al consumidor eléctrico en Extremadura con enlaces a CNMC, INCOEX y REE.
- **Interconexión en Interfaz (`src/components/Footer.astro`, `src/components/CookieBanner.astro`):** Enlaces directos en pie de página, en el banner de cookies y barra de navegación rápida entre las 4 páginas legales.

---

## 📦 Verificación del Paquete

- **Artefacto:** `luz-extremadura-v1.3.0.zip`
- **Generado:** `2026-11-16`
- **Hash SHA-256:** `6c58ca715c99e2e9b481ec9433a2f908017b33dce9b5a3cee9dd4e45afc5da35`
