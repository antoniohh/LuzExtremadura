# Luz Extremadura 1.0.3

**Precio de la luz hoy en Extremadura (Badajoz y Cáceres) hora a hora, tarifa regulada PVPC 2.0TD y semáforo energético.**

Release `v1.0.3` de optimización móvil, dinamización del tramo actual («AHORA») en tiempo real con JavaScript cliente, soporte completo como Progressive Web App (PWA) instalable en Google Chrome y ampliación del intervalo de actualización automática.

---

## ⚡ Novedades y Mejoras en la v1.0.3

1. **Soporte PWA Completo e Instalabilidad en Google Chrome:**
   - Creación del Service Worker oficial [`public/sw.js`](../public/sw.js) con estrategia network-first para datos de precios y caché offline para activos de interfaz.
   - Vinculación del manifiesto web `<link rel="manifest" href="/site.webmanifest">` con identificador único (`id: "/"`), `scope: "/"` y soporte para iconos adaptativos (`any maskable`).
   - Habilitación de la insignia de «Instalar app» en la barra de direcciones de Google Chrome (tanto en Android como en escritorio).
2. **Dinamización en Tiempo Real del Tramo Actual («AHORA»):**
   - Detección precisa de la hora oficial en España (`Europe/Madrid`) mediante JavaScript reactivo en el cliente.
   - Sincronización continua (cada 60 segundos y al cambiar visibilidad de pestaña con `visibilitychange`) de las cifras del bloque Hero (precio €/kWh, precio mayorista de referencia en €/MWh, tramo y color del semáforo).
   - Movimiento reactivo de la insignia `AHORA` sobre la cuadrícula de 24 horas sin depender de la hora estática de compilación.
   - Verificación de cambio de día para refrescar automáticamente los datos tras la medianoche.
3. **Eliminación Total del Scroll Horizontal en Móvil:**
   - Reglas estrictas de contención `overflow-x: hidden; max-width: 100%; width: 100%;` en `html`, `body` y `main`.
   - Contracción responsiva del encabezado en pantallas inferiores a 390px, protegiendo el badge `PVPC REE` y el botón de menú con `min-w-0`.
   - Sustitución de `scale-[1.03]` por `ring-3 ring-slate-900 shadow-lg` en las tarjetas horarias para evitar que desborden lateralmente en móviles.
   - Flexibilización con `flex-wrap` de las insignias de precios máximos y mínimos de mañana.
4. **Horario Nocturno de Actualización Automatizada:**
   - Desplazamiento del cron de captura diaria de los precios de mañana a las **21:30 CET** (20:30 UTC en invierno) para asegurar que Red Eléctrica haya finalizado la publicación del archivo 70 de e·sios (~20:20 CET), manteniendo el respaldo a las **06:00 CET**.

---

## 📦 Archivos del Paquete de Release

- **Código y Build Estático:** `luz-extremadura-v1.0.3.zip`
- **Verificación SHA-256:** `89049a36443c761e248093d70ec6e9a6f2d83f88d82e7f9d080edd3758f0a360`
- **Suma de verificación:** Consultar `luz-extremadura-v1.0.3.zip.sha256`

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
