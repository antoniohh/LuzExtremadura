# Luz Extremadura 1.1.1

**Precio de la luz hoy en Extremadura (Badajoz y Cáceres) hora a hora, tarifa regulada PVPC 2.0TD y semáforo energético.**

Release `v1.1.1` de optimización de presentación visual y metadatos sociales que limpia la imagen corporativa Open Graph (`og-image.png`), eliminando las franjas negras laterales y ajustándola limpiamente a la proporción estándar de 1200 × 630 px.

---

## ⚡ Novedades y Mejoras en la versión 1.1.1

### 1. Limpieza y Reencuadre de la Imagen Open Graph (`public/assets/og-image.png`)
- **Eliminación de barras negras (pillarboxing):** se han retirado los bordes negros laterales de 35px y 36px que aparecían en las bandas izquierda y derecha de la previsualización original.
- **Ajuste limpio a 1200 × 630 px:** reencuadre proporcional nítido a la resolución exacta estándar recomendada para metadatos Open Graph y Twitter Cards (`summary_large_image`), garantizando una presentación visual limpia al compartir enlaces en WhatsApp, Telegram, X / Twitter, LinkedIn y Facebook.
- **Preservación tipográfica y estética:** mantenida la relación de aspecto sin distorsión horizontal en logotipos, tarjetas ni tipografías, integrada de forma fluida sobre la paleta de fondo oscuro `slate-900`/`slate-950`.

---

## 📦 Archivos del Paquete de Release

- **Código y Build Estático:** `luz-extremadura-v1.1.1.zip`
- **Verificación SHA-256:** `f496cebe826bc6016404964f5616e13d1ee99c61d665553ad41a77f7cdd9480c`
- **Suma de verificación:** Consultar `luz-extremadura-v1.1.1.zip.sha256`

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
