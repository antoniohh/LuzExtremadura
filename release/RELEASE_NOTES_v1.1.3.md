# Luz Extremadura 1.1.3

**Precio de la luz hoy en Extremadura (Badajoz y Cáceres) hora a hora, tarifa regulada PVPC 2.0TD y semáforo energético.**

Release `v1.1.3` de sincronización y automatización de infraestructura CI/CD que retrasa una hora el cron de GitHub Actions para compensar el retardo de colas en runners y optimizar la ventana de publicación de la previsión de precios del día siguiente a las 21:45 CET (9:45 PM).

---

## ⚡ Novedades y Mejoras en la versión 1.1.3

### 1. Retraso de una Hora en el Cron de Previsión (`.github/workflows/deploy.yml`)
- **Ajuste del disparo programado:** se desplaza una hora el cron vespertino pasando de 14:51 UTC a las **15:51 UTC** (**16:51 CET** en horario de invierno / **17:51 CEST** en verano).
- **Publicación efectiva a las 21:45 CET (9:45 PM):** al computar la latencia de colas en los runners de GitHub Actions (~4 h y 54 min), se optimiza el momento de despliegue una vez que los datos de Red Eléctrica de España (REE / e·sios) se encuentran totalmente consolidados.
- **Doble barrera de seguridad horaria:** se preserva el refresco nocturno/matinal a las **00:24 UTC** (**01:24 CET**) para garantizar que el portal amanezca siempre con los precios del día en curso.

---

## 📦 Archivos del Paquete de Release

- **Código y Build Estático:** `luz-extremadura-v1.1.3.zip`
- **Verificación SHA-256:** `89a64c697cf2c3bcebf39ff85d2007dd58ed0dcbb00fc19de1e5de4c37484b00`
- **Suma de verificación:** Consultar `luz-extremadura-v1.1.3.zip.sha256`

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
