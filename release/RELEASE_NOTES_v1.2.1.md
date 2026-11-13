# Luz Extremadura 1.2.1

**Renovación integral de recursos gráficos, isotipo vectorial SVG, familia de iconos PWA/móvil de alta resolución y nueva tarjeta social Open Graph estilo observatorio de datos.**

Versión de producción de **Luz Extremadura**, disponible en `https://luz.antoniohorrillo.com/`.

---

## ⚡ Novedades y Mejoras en la versión 1.2.1

### 1. Nuevo Isotipo Vectorial e Identidad de Marca (`src/components/Logo.astro`, `public/favicon.svg`, `public/assets/favicon.svg`, `public/assets/logo.svg` y `public/assets/logo.png`)
- **Rediseño vectorial completo:** Nuevo isotipo sobre contenedor *squircle* con degradado radial oscuro (`#14293a` → `#030711`), reborde luminoso bicolor esmeralda y ámbar, arcos concéntricos de energía esmeralda, ondas de pulso horario PVPC y rayo eléctrico volumétrico dorado con faceta biselada y brillo especular.
- **Componente reutilizable `Logo.astro`:** Integración directa en cabecera (`Header.astro`) y pie de página (`Footer.astro`) con identificadores únicos por instancia.

### 2. Familia de Iconos de Alta Resolución y PWA (`public/assets/` y `public/favicon.ico`)
- Generación de la familia completa de iconos con recorte transparente sobre la silueta *squircle*:
  - `public/assets/icon-512.png` (`512×512` px)
  - `public/assets/icon-192.png` (`192×192` px)
  - `public/assets/apple-touch-icon.png` (`180×180` px)
  - `public/favicon.ico` (multirresolución `16×16`, `32×32` y `48×48` px)
- Enlace explícito a `favicon.ico` en `src/layouts/BaseLayout.astro`.

### 3. Nueva Tarjeta Social Open Graph (`1200×630` px) (`public/assets/og-image.png`)
- Nueva creatividad social con estética oscura de observatorio de datos, tarjeta 3D con el mapa energético de Extremadura (Badajoz y Cáceres), nodos luminosos de red, gráfico horario de 24 horas en colores de semáforo PVPC y distintivo oficial REE.

---

## 📦 Verificación del Paquete

- **Artefacto:** `luz-extremadura-v1.2.1.zip`
- **Generado:** `2026-11-13`
- **Hash SHA-256:** `9d87b1f5583193ccc2678a21a78357eebcc33d8755325aff6d08dd1b8387f0f5`
