# Luz Extremadura 1.2.0

**Precio de la luz hoy en Extremadura (Badajoz y Cáceres) hora a hora, tarifa regulada PVPC 2.0TD y semáforo energético.**

Release `v1.2.0` que implementa la integración del ecosistema digital de Antonio Horrillo mediante la nueva barra superior transversal 100% responsiva (`NetworkBar.astro`) y la columna de enlaces semánticos en el pie de página (`Footer.astro`), interconectando *Luz Extremadura*, *Combustible Extremadura*, *Embalses de Extremadura* y *GlucoLuna*.

---

## ⚡ Novedades y Mejoras en la versión 1.2.0

### 1. Barra de Navegación de Red Responsive (`src/components/NetworkBar.astro`)
- **Diseño unificado y estilizado:** Barra superior ultra compacta (36px) con fondo oscuro `bg-slate-950` y borde inferior sutil, ubicada por encima del encabezado principal.
- **Identidad de red y autor:** Enlace directo a `https://antoniohorrillo.com/` con punto de estado activo esmeralda.
- **Navegación 100% responsiva para móviles:** En dispositivos estrechos (< 640px) se muestra en una sola fila con desplazamiento horizontal táctil fluido y sin barra de scroll visible (`scrollbar-width: none`), manteniendo los botones táctiles y los títulos cortos (`⚡ Luz`, `⛽ Combustible`, `💧 Embalses`, `🌙 GlucoLuna`).
- **Estado actual destacado:** El proyecto actual se muestra como indicador visual (`Actual`) con borde y fondo contrastados, evitando recargas innecesarias.
- **Soporte de impresión:** Excluida automáticamente de la salida de impresión (`print:hidden`).

### 2. Módulo SEO de Red en el Pie de Página (`src/components/Footer.astro`)
- **Estructura ampliada a 4 columnas:** Reorganización del layout de pie de página (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`).
- **Traspaso de autoridad (*Link Equity*):** Enlaces directos `dofollow` con textos de ancla descriptivos (*anchor texts* orientados a búsqueda):
  - *Combustible Extremadura* — Gasolina 95 y diésel diarios en Extremadura.
  - *Embalses Extremadura* — Capacidad y reservas hídricas oficiales.
  - *GlucoLuna* — Control y diario de glucosa en el hogar.
  - *antoniohorrillo.com* — Portafolio y proyectos de datos abiertos.

---

## 📦 Verificación del Paquete

- **Artefacto:** `luz-extremadura-v1.2.0.zip`
- **Generado:** `2026-11-12`
- **Hash SHA-256:** Consultar `release/luz-extremadura-v1.2.0.zip.sha256`
