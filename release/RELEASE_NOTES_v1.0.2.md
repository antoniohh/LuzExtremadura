# Luz Extremadura 1.0.2

**Precio de la luz hoy en Extremadura (Badajoz y Cáceres) hora a hora, tarifa regulada PVPC 2.0TD y semáforo energético.**

Release `v1.0.2` que incorpora la licencia formal MIT, la armonización completa del repositorio con los estándares de *Combustible Extremadura*, directrices operativas `AGENTS.md`, automatización de releases en GitHub Actions y la consolidación del historial de paquetes precompilados de distribución (`v1.0.0`, `v1.0.1` y `v1.0.2`).

---

## ⚡ Novedades y Mejoras en la v1.0.2

1. **Estructura de Releases Integrada (`release/`):**
   - Creación y consolidación del directorio `release/` integrando todas las versiones históricas (`v1.0.0`, `v1.0.1` y `v1.0.2`) con sus correspondientes notas de publicación, paquetes ZIP de producción y sumas de verificación SHA-256.
2. **Automatización de Releases (`.github/workflows/release.yml`):**
   - Workflow en GitHub Actions activado con etiquetas `v*` que compila el proyecto estático con Astro, empaqueta el archivo ZIP `luz-extremadura-${GITHUB_REF_NAME}.zip` y publica la release automáticamente en GitHub con notas generadas.
3. **Licencia MIT y Atribución Legal:**
   - Incorporación formal del archivo [`LICENSE`](../LICENSE) bajo licencia de código abierto MIT y secciones de autoría ([Antonio Horrillo](https://antoniohorrillo.com)).
4. **Directrices de Desarrollo y Mantenimiento (`AGENTS.md`):**
   - Especificación detallada de principios de diseño accesible, estándares WCAG AA/AAA, privacidad RGPD/AEPD con Google Consent Mode v2 y protocolos para agentes y desarrolladores.
5. **Configuración de Entorno (`.nvmrc`):**
   - Fijación de la versión LTS de Node.js `22.23.4` para ejecuciones reproducibles tanto en entornos locales como en CI/CD.

---

## 📦 Archivos del Paquete de Release

- **Código y Build Estático:** `luz-extremadura-v1.0.2.zip`
- **Verificación SHA-256:** `8a314848db9fb37d64f3536a3deb275cac2f8c6a77f87e516780f0f07082180a`
- **Suma de verificación:** Consultar `luz-extremadura-v1.0.2.zip.sha256`

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
