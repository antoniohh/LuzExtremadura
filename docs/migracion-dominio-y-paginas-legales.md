# Migración al Dominio `luzextremadura.es` y Páginas Legales (LSSI-CE / RGPD / AEPD)

- **Fecha:** 15–16 de noviembre de 2026
- **Proyecto:** Luz Extremadura (`luz-extremadura`)
- **Nuevo dominio oficial:** `https://luzextremadura.es` (`luzextremadura.es`)
- **Dominio anterior:** `https://luz.antoniohorrillo.com`

---

## 1. Resumen de Cambios Realizados

### 1.1. Configuración del Dominio Propio (`luzextremadura.es`)
Se ha actualizado toda la infraestructura del proyecto para operar bajo el dominio propio `https://luzextremadura.es`:

- **`public/CNAME`:** Actualizado a `luzextremadura.es` para la vinculación personalizada en GitHub Pages.
- **`astro.config.mjs`:** Propiedad `site` configurada en `"https://luzextremadura.es"`.
- **`src/lib/site.ts`:**
  - `SITE = "https://luzextremadura.es"`
  - `SITE_DOMAIN = "luzextremadura.es"`
  - Actualización automática de URLs canónicas (`<link rel="canonical">`), etiquetas Open Graph (`og:url`, `og:image`), Twitter Cards y el grafo estructurado JSON-LD (`WebSite`, `WebPage`, `Dataset`, `FAQPage`, `BreadcrumbList`) en `src/layouts/BaseLayout.astro`.
- **`src/components/NetworkBar.astro`:** Actualizado el enlace del proyecto `luz` a `https://luzextremadura.es/`.
- **`public/robots.txt`:** Apunta a `Sitemap: https://luzextremadura.es/sitemap.xml`.
- **`public/sitemap.xml` y `scripts/actualizar_precios_luz.mjs`:**
  - Actualizado el `User-Agent` de consulta a e·sios: `LuzExtremadura/1.0 (+https://luzextremadura.es)`.
  - Generación automática del sitemap con las 5 rutas públicas bajo `https://luzextremadura.es/`:
    1. `https://luzextremadura.es/`
    2. `https://luzextremadura.es/aviso-legal/`
    3. `https://luzextremadura.es/privacidad/`
    4. `https://luzextremadura.es/cookies/`
    5. `https://luzextremadura.es/contacto/`
- **`public/sw.js`:** Actualizada la caché del Service Worker a `luz-extremadura-v2` e incorporadas las rutas `/aviso-legal/`, `/privacidad/`, `/cookies/` y `/contacto/` en `STATIC_ASSETS`.
- **`package.json`, `AGENTS.md` y `README.md`:** Documentación y metadatos del repositorio sincronizados con `https://luzextremadura.es`.

---

### 1.2. Creación y Adecuación de Páginas Legales y Contacto
Se ha completado el bloque legal y de transparencia exigido por la normativa española (**Ley 34/2002 LSSI-CE**, **RGPD UE 2016/679**, **LOPDGDD 3/2018** y **Guía de Cookies de la AEPD**), así como las señales de confianza SEO (**Google E-E-A-T**):

1. **Aviso Legal y Condiciones de Uso (`src/pages/aviso-legal.astro` → `/aviso-legal/`):**
   - Identificación del titular conforme al art. 10 LSSI-CE (Antonio Horrillo, `info@antoniohorrillo.com`, `luzextremadura.es`, `antoniohorrillo.com` y repositorio oficial).
   - Objeto del portal, condiciones de acceso y uso gratuito.
   - Origen público de los datos (Red Eléctrica de España / e·sios `archive 70`), carácter orientativo de los precios y calculadoras, e independencia institucional respecto a comercializadoras u organismos.
   - Propiedad intelectual (código bajo Licencia MIT y reutilización de datos abiertos) y legislación aplicable.
2. **Política de Privacidad (`src/pages/privacidad.astro` → `/privacidad/`):**
   - Información completa de protección de datos (RGPD y LOPDGDD).
   - Principio de privacidad desde el diseño: sin registro de usuarios, sin formularios de captación ni perfiles comerciales.
   - Detalle de datos técnicos de conexión (GitHub Pages), almacenamiento local en el navegador (`localStorage` / `sessionStorage`) y analítica estadística opcional (Google Analytics 4 con IP anonimizada y Consent Mode v2).
   - Base jurídica, encargados del tratamiento, plazos de conservación y ejercicio de derechos con botón interactivo de gestión de consentimiento y referencia a la AEPD (`www.aepd.es`).
3. **Política de Cookies (`src/pages/cookies.astro` → `/cookies/`):**
   - Tabla técnica detallada de cookies y claves de almacenamiento local (`luz_extremadura_cookie_consent`, `luz_pwa_prompt_dismissed`, `_ga` y `_ga_HEKMQY6G5E`).
   - Explicación del funcionamiento de **Google Consent Mode v2** (señales `denied` por defecto en el EEE).
   - Botón interactivo para configurar o revocar el consentimiento en cualquier momento.
4. **Contacto y Soporte (`src/pages/contacto.astro` → `/contacto/`):**
   - Tarjetas de contacto directo con el titular (`info@antoniohorrillo.com` y `antoniohorrillo.com`) y canal de soporte técnico / mejoras vía GitHub Issues.
   - Aviso destacado de orientación al consumidor aclarando que `luzextremadura.es` no es una compañía eléctrica y facilitando los enlaces oficiales de la **CNMC**, **INCOEX (Junta de Extremadura)** y **Red Eléctrica (e·sios)** para reclamaciones de facturas o suministro.
   - Garantía de privacidad en las comunicaciones sin almacenamiento en bases de datos intermedias.
5. **Interconexión en Interfaz (`src/components/Footer.astro` y `src/components/CookieBanner.astro`):**
   - Enlaces directos en el pie de página a las 4 páginas (`/aviso-legal/`, `/privacidad/`, `/cookies/`, `/contacto/`) y al configurador de cookies.
   - Barra de navegación rápida en la cabecera de las 4 páginas legales para alternar entre ellas cómodamente.

---

## 2. Estado de Publicación (Release `v1.3.0`)

1. **Correo electrónico de contacto integrado:** `info@antoniohorrillo.com` incorporado en `src/lib/site.ts`, `/contacto/`, `/aviso-legal/` y `/privacidad/`.
2. **Versión `1.3.0` compilada y empaquetada:** Actualizados `package.json`, `CHANGELOG.md`, `README.md`, `docs/sesion-desarrollo.md` y generados los artefactos en `release/` (`luz-extremadura-v1.3.0.zip`, `.sha256` y `RELEASE_NOTES_v1.3.0.md`).
3. **Configuración DNS y GitHub Pages del dominio `luzextremadura.es`:**
   - Configurar los registros DNS `A` / `AAAA` del dominio raíz `luzextremadura.es` apuntando a los servidores de GitHub Pages (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`) y el registro `CNAME` de `www` apuntando a `antoniohh.github.io`.
   - Verificar la activación de HTTPS (`Enforce HTTPS`) en **Settings → Pages** de GitHub.
