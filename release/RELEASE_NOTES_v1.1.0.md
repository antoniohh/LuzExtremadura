# Luz Extremadura 1.1.0

**Precio de la luz hoy en Extremadura (Badajoz y Cáceres) hora a hora, tarifa regulada PVPC 2.0TD y semáforo energético.**

Release `v1.1.0` que incorpora el cartel interactivo de instalación como Progressive Web App (PWA) en Google Chrome móvil, la arquitectura oficial de Google Consent Mode v2 delimitado por región y la actualización técnica de la política de privacidad y cookies.

---

## ⚡ Novedades y Mejoras en la versión 1.1.0

### 1. Cartel de Instalación como Aplicación PWA en Chrome Móvil
- **Componente nativo (`InstallPrompt.astro`):** banner responsivo flotante que escucha el evento `beforeinstallprompt` en dispositivos móviles Chrome/Chromium.
- **Diseño acorde a la identidad:** fondo `slate-900/95` con desenfoque de cristal (`backdrop-blur-md`), icono oficial de 192px y botón de acción en acento ambarino corporativo (`bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold`).
- **Control de estado inteligente:** comprobación de `(display-mode: standalone)` para no mostrarse si la aplicación ya está instalada y persistencia de descarte en `sessionStorage` para no interrumpir al usuario.
- **Registro temprano:** registro de Service Worker (`/sw.js`) trasladado al `<head>` de `BaseLayout.astro`.

### 2. Google Consent Mode v2 Delimitado por Región
- **Bloqueo estricto inicial en el EEE:** para los 30 países del Espacio Económico Europeo, Reino Unido y Suiza, todas las señales (`analytics_storage`, `ad_storage`, `ad_user_data` y `ad_personalization`) nacen en `denied`.
- **Compatibilidad con tráfico internacional:** consentimiento concedido por defecto fuera del EEE conforme a las directrices de GA4 para prevenir advertencias de tasa de consentimiento del 0 %.
- **Sincronización síncrona en `<head>`:** actualización inmediata del estado previo guardado en `localStorage` antes de ejecutar `gtag('config')`.

### 3. Ajuste de Aviso y Política de Cookies
- **Banner de cookies:** clarificación textual de que solo se guardan cookies con permiso previo y que el sitio no realiza publicidad personalizada.
- **Página de política (`/cookies/`):** desglose técnico del funcionamiento de Consent Mode v2, el procesamiento estadístico agregado y la navegación sin cookies ante la negativa.

---

## 📦 Archivos del Paquete de Release

- **Código y Build Estático:** `luz-extremadura-v1.1.0.zip`
- **Verificación SHA-256:** `c1d73bdcf8a12b04b633f434c99a79b170a348dae79964ea34e983b66080dec2`
- **Suma de verificación:** Consultar `luz-extremadura-v1.1.0.zip.sha256`

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
