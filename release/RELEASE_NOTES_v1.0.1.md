# Luz Extremadura 1.0.1

**Precio de la luz hoy en Extremadura (Badajoz y Cáceres) hora a hora, tarifa regulada PVPC 2.0TD y semáforo energético.**

Release `v1.0.1` de consolidación de navegación global multiruta, menú móvil, unificación tipográfica responsiva de encabezados y activos visuales PWA optimizados.

---

## ⚡ Cambios y Mejoras en la v1.0.1

1. **Navegación Global Multiruta:**
   - Enlaces de cabecera y pie con prefijo absoluto (`/#horas-hoy`, `/#calculadora`, `/#extremadura-energia`, `/#faqs`) que permiten navegar a cualquier sección tanto desde la portada como desde páginas secundarias (como `/cookies/`).
   - Desplazamiento suave (*smooth scroll*) en la portada sin recargas completas.
   - Menú móvil desplegable con acceso directo a todas las secciones.
2. **Jerarquía Tipográfica Unificada (`<h2>`):**
   - Estandarización de tamaño en las cinco secciones principales: `text-xl` en móvil, `sm:text-2xl` en tablet y `lg:text-3xl` en desktop con `leading-snug` y `font-black`.
3. **Optimización del Badge de Navegación:**
   - Badge `PVPC REE` protegido con `whitespace-nowrap` y tamaño adaptativo para no caer nunca a doble línea en pantallas reducidas.
4. **Activos de Marca PWA:**
   - [`logo.svg`](public/assets/logo.svg) con viewBox amplio (`500x100`) sin recortes.
   - [`og-image.png`](public/assets/og-image.png) (1200x630 px) con márgenes seguros y rotulación en español **«Tramos horarios €/kWh»**.

---

## 📦 Archivos del Paquete de Release

- **Código y Build Estático:** `luz-extremadura-v1.0.1.zip`
- **Verificación:** `luz-extremadura-v1.0.1.zip.sha256`

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
