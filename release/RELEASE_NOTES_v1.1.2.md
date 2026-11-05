# Luz Extremadura 1.1.2

**Precio de la luz hoy en Extremadura (Badajoz y Cáceres) hora a hora, tarifa regulada PVPC 2.0TD y semáforo energético.**

Release `v1.1.2` de sincronización y automatización de infraestructura CI/CD que recalibra el cron de GitHub Actions para compensar el retardo de colas en runners y asegurar la publicación de la previsión de precios del día siguiente a las 20:45 CET (8:45 PM).

---

## ⚡ Novedades y Mejoras en la versión 1.1.2

### 1. Recalibración del Cron de Despliegue (`.github/workflows/deploy.yml`)
- **Compensación del retardo de colas:** a partir de la métrica real observada en las colas de runners de GitHub Actions (~4 h y 54 min de retraso en horario vespertino), se reajusta el disparo programado a las **14:51 UTC** (**15:51 CET** en horario de invierno / **16:51 CEST** en verano).
- **Publicación efectiva a las 20:45 CET (8:45 PM):** al compensar la latencia de los servidores de GitHub, la compilación y despliegue del avance oficial de precios de Red Eléctrica de España (REE / e·sios) se hace efectivo en producción en el horario idóneo para la toma de decisiones energéticas de los hogares y empresas extremeñas.
- **Doble barrera de seguridad horaria:** se preserva el refresco nocturno/matinal a las **00:24 UTC** (**01:24 CET**) para garantizar que la web amanezca siempre con el día en curso actualizado.

---

## 📦 Archivos del Paquete de Release

- **Código y Build Estático:** `luz-extremadura-v1.1.2.zip`
- **Verificación SHA-256:** `4b972288b1098392eea932ba34e0fd8778bc67faf4d0c9ad0fa934ea2ca8e0ba`
- **Suma de verificación:** Consultar `luz-extremadura-v1.1.2.zip.sha256`

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
