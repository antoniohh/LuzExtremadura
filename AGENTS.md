# Directrices para Agentes (AGENTS.md) — Luz Extremadura

Este documento define las reglas operativas, de arquitectura y de publicación de versiones que cualquier agente de IA debe cumplir estrictamente al trabajar en este repositorio.

---

## 1. Regla Inviolable: NO TOCAR TAGS NUNCA

> **ESTRICTAMENTE PROHIBIDO TOCAR TAGS DE GIT (`git tag`).**
> - **NUNCA** crees, borres, renombres, listes para manipular ni toques etiquetas de Git (`git tag`).
> - **NUNCA** ejecutes `git push --tags`.
> - Las etiquetas y releases en GitHub las gestiona exclusivamente el usuario de forma manual.
> - Cuando el usuario pida preparar una nueva release (ej. `v1.0.2`), el agente debe:
>   1. Actualizar la versión en `package.json`.
>   2. Documentar la versión en `CHANGELOG.md`, `README.md` y `docs/`.
>   3. Compilar el proyecto (`npm run build`).
>   4. Generar en la carpeta `release/`:
>      - `release/luz-extremadura-vX.Y.Z.zip`
>      - `release/luz-extremadura-vX.Y.Z.zip.sha256`
>      - `release/RELEASE_NOTES_vX.Y.Z.md`
>   5. Hacer **únicamente** `git add` y `git commit` en la rama `main` sin tocar absolutamente ningún tag.

---

## 2. Identidad y Configuración del Proyecto

- **Nombre:** Luz Extremadura (`luz-extremadura`)
- **Dominio de producción:** `https://luz.antoniohorrillo.com` (configurado en `public/CNAME`, `astro.config.mjs` y `src/lib/site.ts`)
- **Repositorio:** `https://github.com/antoniohh/LuzExtremadura`
- **Autor:** Antonio Horrillo (`https://antoniohorrillo.com`)
- **Stack:** Astro 7 (`output: "static"`, `trailingSlash: "always"`), Tailwind CSS v4 (`@tailwindcss/vite`), `@lucide/astro` y TypeScript estricto sobre Node.js `>= 22.23.4` (`.nvmrc`).

---

## 3. Arquitectura de Datos y Actualización Diaria

- Los datos diarios y de mañana provienen del archivo oficial `archive 70` de Red Eléctrica de España (REE / e·sios: `https://api.esios.ree.es/archives/70/download_json?locale=es`).
- `scripts/actualizar_precios_luz.mjs` (`npm run actualizar:hoy`) descarga los precios horarios del PVPC (término de facturación `PCB`), calcula estadísticas horarias (mínimo, máximo, media), categoriza semáforos (Barata, Media, Cara) y tramos (Punta, Llano, Valle), y guarda el resultado en `public/datos/precios_luz_hoy.json`.
- El workflow `.github/workflows/deploy.yml` se ejecuta automáticamente todos los días a las **15:51 UTC (16:51 CET)** (para compensar el retardo de colas y publicar sobre las **21:45 CET** la previsión de mañana) y a las **00:24 UTC (01:24 CET)** como refresco de seguridad, así como en cada `push` a `main`.

---

## 4. Estándares de Interfaz, Accesibilidad y Privacidad

- **Contraste y legibilidad:** Cumplir siempre ratios WCAG AA/AAA, especialmente en cabeceras oscuras (`bg-slate-900` / `bg-slate-950`) y tablas numéricas (`font-variant-numeric: tabular-nums`).
- **Privacidad (RGPD / AEPD):** Mantener Google Consent Mode v2 con `analytics_storage: 'denied'` por defecto en `src/layouts/BaseLayout.astro`, gestión mediante `src/components/CookieBanner.astro` y detalle completo en `src/pages/cookies.astro`.

---

## 5. Ecosistema de Red y Enlazado Inter-Dominio

- **Componente `NetworkBar.astro`:** Barra superior unificada de 36px que enlaza los proyectos del ecosistema (*Luz*, *Combustible*, *Embalses*, *GlucoLuna* y `antoniohorrillo.com`). Debe mantenerse 100% responsiva (scroll horizontal táctil en viewport móvil sin alterar la altura del viewport ni provocar desbordamientos horizontales).
- **Enlazado en `Footer.astro`:** Columna dedicada a la Red de Proyectos con enlaces semánticos y textos de ancla descriptivos (*anchor text* SEO) para la transmisión limpia de autoridad de dominio (*link equity*).
