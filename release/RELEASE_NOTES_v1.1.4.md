# Luz Extremadura 1.1.4

**Precio de la luz hoy en Extremadura (Badajoz y Cáceres) hora a hora, tarifa regulada PVPC 2.0TD y semáforo energético.**

Release `v1.1.4` de optimización SEO y metadatos sociales que desacopla fechas fijas y precios volátiles de los títulos y descripciones HTML, erradica el problema de desactualización en snippets de Google SERP, sanea las tarjetas Open Graph y dinamiza el `<lastmod>` del sitemap.

---

## ⚡ Novedades y Mejoras en la versión 1.1.4

### 1. Desacoplamiento de Fechas en Metadatos SEO (`src/pages/index.astro`)
- **Eliminación de fecha estática en `<title>`:** se sustituye la interpolación de fechas cerradas por el título perenne de máxima relevancia `Precio de la Luz Hoy en Extremadura (Badajoz y Cáceres) | Horas y PVPC`.
- **Prevención de desactualización en SERPs:** elimina la vulnerabilidad por la cual Googlebot indexaba fechas pasadas (ej. *"3 de noviembre"*), provocando caídas de CTR y tráfico orgánico durante los ciclos entre rastreos.
- **Meta-descripción evergreen:** redacción optimizada para intención de búsqueda sin cifras monetarias ni fechas caducables.
- **Relevancia visual intacta:** la fecha en curso (`{fechaHoyLegible}`) se mantiene plenamente destacada en el Hero, reloj en vivo y curva horaria para los visitantes del portal.

### 2. Saneamiento de Tarjetas Open Graph y Twitter Cards (`src/layouts/BaseLayout.astro`)
- Al heredar los metadatos atemporales, las previsualizaciones al compartir en WhatsApp, Telegram, X / Twitter, LinkedIn y Facebook se muestran siempre actualizadas.
- Se preserva el activo gráfico `public/assets/og-image.png` de 1200 × 630 px.

### 3. Señal de Frescura Automatizada en Sitemap (`scripts/actualizar_precios_luz.mjs` y `public/sitemap.xml`)
- Actualización programada de `<lastmod>` con la fecha del día en cada compilación dos veces al día.
- Señal técnica activa que incita a los motores de búsqueda a re-rastrear la portada con mayor frecuencia.

---

## 📦 Archivos del Paquete de Release

- **Código y Build Estático:** `luz-extremadura-v1.1.4.zip`
- **Verificación SHA-256:** `5ccce7526b4dd726d06dccb14a99d4dc1b88e4f792f8977d2b06a90f36f26c22`
- **Suma de verificación:** Consultar `luz-extremadura-v1.1.4.zip.sha256`

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
