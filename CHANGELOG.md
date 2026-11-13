# Changelog

Todas las versiones relevantes de **Luz Extremadura**. El proyecto sigue [Versionado Semántico](https://semver.org/lang/es/).

## [1.2.1] — 2026-11-13

Renovación integral de la identidad visual, isotipo vectorial, familia de iconos PWA/móvil y tarjeta social Open Graph generados con Nano Banana y trazado vectorial de alta precisión, alineando el diseño con el ecosistema de observatorios de datos (*Combustible Extremadura* y *Embalses de Extremadura*).

### Añadido y Mejorado

- **Nuevo Isotipo Vectorial e Identidad de Marca ([`src/components/Logo.astro`](src/components/Logo.astro), [`public/favicon.svg`](public/favicon.svg), [`public/assets/favicon.svg`](public/assets/favicon.svg), [`public/assets/logo.svg`](public/assets/logo.svg) y [`public/assets/logo.png`](public/assets/logo.png))**:
  - Rediseño completo del icono SVG en contenedor *squircle* con degradado radial oscuro (`#14293a` → `#030711`), reborde luminoso bicolor esmeralda y ámbar, arcos concéntricos de energía esmeralda, ondas de pulso horario PVPC y rayo eléctrico volumétrico dorado con faceta biselada y brillo especular.
  - Creación del componente reutilizable `Logo.astro` con identificadores únicos por instancia e integración directa en [`src/components/Header.astro`](src/components/Header.astro) y [`src/components/Footer.astro`](src/components/Footer.astro).
- **Familia de Iconos de Alta Resolución y PWA ([`public/assets/`](public/assets/) y [`public/favicon.ico`](public/favicon.ico))**:
  - Nuevos iconos `icon-512.png` (`512×512` px), `icon-192.png` (`192×192` px), `apple-touch-icon.png` (`180×180` px) y `favicon.ico` multirresolución (`16×16`, `32×32`, `48×48` px) con recorte transparente sobre la silueta *squircle*.
  - Enlace explícito a `favicon.ico` en [`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro).
- **Nueva Tarjeta Social Open Graph (`1200×630` px) ([`public/assets/og-image.png`](public/assets/og-image.png))**:
  - Creatividad social con estética oscura de observatorio de datos, tarjeta 3D con el mapa energético de Extremadura (Badajoz y Cáceres), nodos luminosos, gráfico horario de 24 horas en colores de semáforo PVPC y distintivo oficial REE.

## [1.2.0] — 2026-11-12

Versión de interconexión del ecosistema digital que incorpora la barra de navegación transversal 100% responsiva (`NetworkBar.astro`) y un módulo SEO de red en el pie de página (`Footer.astro`), enlazando los proyectos de datos abiertos y utilidades de Antonio Horrillo (*Luz*, *Combustible*, *Embalses* y *GlucoLuna*).

### Añadido y Mejorado

- **Barra de Navegación de Red Responsive ([`src/components/NetworkBar.astro`](src/components/NetworkBar.astro), [`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro))**:
  - Mini topbar de 36px de alto sobre el encabezado con diseño oscuro `bg-slate-950` y borde inferior sutil.
  - Indicador de proyecto actual con píldora activa (`bg-amber-400/15 text-amber-300 border-amber-400/30`) y badge «Actual» en resoluciones de escritorio.
  - Comportamiento móvil optimizado: fila única con scroll horizontal táctil y sin barra de desplazamiento (`scrollbar-width: none`), títulos cortos y diana táctil cómoda que no incrementa la altura de la página.
  - Enlace corporativo a `https://antoniohorrillo.com/` con indicador visual dinámico.
  - Exclusión de impresión (`print:hidden`).
- **Módulo de Enlazado de Red en Pie de Página ([`src/components/Footer.astro`](src/components/Footer.astro))**:
  - Reestructuración del grid a 4 columnas responsivas (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`).
  - Incorporación de la columna «Red de Proyectos» con enlaces limpios `dofollow` y textos de ancla orientados a SEO hacia *Combustible Extremadura*, *Embalses de Extremadura*, *GlucoLuna* y el portafolio personal.

## [1.1.4] — 2026-11-08

Versión de optimización SEO y metadatos sociales que desvincula fechas fijas de las etiquetas `<title>` y `<meta name="description">` para evitar desactualizaciones en las SERPs de Google, sincroniza las tarjetas Open Graph y dinamiza el `<lastmod>` del sitemap.

### Corregido y Optimizado

- **Desacoplamiento de Fechas Fijas en Metadatos SEO ([`src/pages/index.astro`](src/pages/index.astro))**:
  - Eliminación de la inyección de fecha fija `(${fechaHoyLegible})` y precios volátiles en `<title>` y `<meta name="description">`.
  - Adopción de un título atemporal de alta relevancia: `Precio de la Luz Hoy en Extremadura (Badajoz y Cáceres) | Horas y PVPC`.
  - Redacción de una meta-descripción orientada a intención de búsqueda y maximización de CTR sin riesgo de quedar obsoleta entre ciclos de rastreo de Googlebot.
  - La fecha viva del día (`{fechaHoyLegible}`) se mantiene prominente en el `<h1>`, subtítulo y módulos interactivos dentro de la aplicación para el usuario final.
- **Sincronización Limpia de Open Graph y Twitter Cards ([`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro))**:
  - Las etiquetas `og:title`, `twitter:title`, `og:description` y `twitter:description` quedan limpias de fechas o datos caducados al heredar los nuevos valores consolidados.
- **Automatización de `<lastmod>` en Sitemap ([`scripts/actualizar_precios_luz.mjs`](scripts/actualizar_precios_luz.mjs), [`public/sitemap.xml`](public/sitemap.xml))**:
  - Inclusión de actualización programada de la etiqueta `<lastmod>` con la fecha del día en curso en cada ejecución de la GitHub Action (dos veces al día), ofreciendo una señal activa de frescura de contenido a los rastreadores de motores de búsqueda.

## [1.1.3] — 2026-11-06

Versión de ajuste en la automatización CI/CD que retrasa una hora el cron de GitHub Actions para la obtención y publicación de la previsión de precios del día siguiente.

### Modificado y Mejorado

- **Ajuste del Cron de Previsión en GitHub Actions ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml))**:
  - Retraso de una hora en la tarea programada de obtención de precios del día siguiente, pasando de las 14:51 UTC a las **15:51 UTC** (**16:51 CET** en invierno / **17:51 CEST** en verano).
  - Adaptación del margen de ejecución frente al retardo de colas en runners de GitHub Actions, situando la publicación efectiva en producción alrededor de las **21:45 CET** (9:45 PM).
  - Se mantiene intacto el refresco de seguridad diario a las **00:24 UTC** (**01:24 CET**).

## [1.1.2] — 2026-11-05

Versión de infraestructura y automatización CI/CD que recalibra el cron de GitHub Actions para la previsión de precios del día siguiente, compensando el retardo real de colas registrado en la plataforma.

### Modificado y Mejorado

- **Recalibración de Cron de GitHub Actions ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml))**:
  - Reajuste de la tarea de obtención de precios del día siguiente a **14:51 UTC** (**15:51 CET** invierno / **16:51 CEST** verano).
  - Compensación proactiva del retardo medido en las colas de runners de GitHub Actions (~4 h y 54 min), garantizando que el despliegue automático de la previsión de precios de Red Eléctrica (REE) salte y se publique en el entorno de producción alrededor de las **20:45 CET** (8:45 PM).
  - Mantenimiento del refresco nocturno/matinal a las **00:24 UTC** (**01:24 CET**) como red de seguridad y sincronización diaria continua.

## [1.1.1] — 2026-11-05

Versión de mantenimiento estético y optimización de metadatos sociales que corrige y limpia la imagen corporativa Open Graph.

### Modificado y Mejorado

- **Optimización y Limpieza de Imagen Social Open Graph ([`public/assets/og-image.png`](public/assets/og-image.png))**:
  - Eliminación completa de los bordes negros laterales (pillarbox) presentes en los márgenes exteriores.
  - Reencuadre y escalado proporcional nítido a la resolución estándar exacta de 1200 × 630 px recomendada para previsualizaciones en redes sociales (WhatsApp, Telegram, X / Twitter, Facebook y LinkedIn).
  - Integración tonal limpia con la paleta oscura corporativa del proyecto sin distorsión de aspecto en tipografías, logotipos o métricas.

## [1.1.0] — 2026-11-03

Nueva versión que introduce el prompt nativo de instalación PWA en Chrome móvil, sincronización completa de Google Consent Mode v2 delimitado por región y actualización de la política de privacidad y cookies.

### Añadido

- **Prompt e Instalación PWA en Chrome Móvil ([`InstallPrompt.astro`](src/components/InstallPrompt.astro))**:
  - Banner estilizado flotante inferior que detecta el evento nativo `beforeinstallprompt` en dispositivos móviles Chrome/Chromium.
  - Diseño responsivo en paleta oscura `slate-900/95` con desenfoque de fondo, icono corporativo de 192px y botón de acción en acento ambarino (`bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold`).
  - Persistencia de descarte en `sessionStorage` para no resultar invasivo en la misma sesión y detección automática de modo `standalone` para evitar mostrar el banner si la aplicación ya está instalada.
  - Registro de Service Worker (`/sw.js`) trasladado al `<head>` para una inicialización temprana y ordenada.

### Modificado y Mejorado

- **Google Consent Mode v2 Delimitado por Región ([`BaseLayout.astro`](src/layouts/BaseLayout.astro))**:
  - Restricción estricta de consentimiento inicial (`denied` en `analytics_storage`, `ad_storage`, `ad_user_data`, `ad_personalization`) delimitada a los 30 territorios del EEE, Reino Unido y Suiza.
  - Habilitación por defecto para visitantes internacionales fuera del EEE conforme a las especificaciones de Google Analytics 4, evitando la advertencia de tasa de consentimiento del 0 %.
  - Sincronización inmediata de decisión guardada en `localStorage` antes de `gtag('config')`.
- **Aviso y Política de Cookies ([`CookieBanner.astro`](src/components/CookieBanner.astro), [`cookies.astro`](src/pages/cookies.astro))**:
  - Texto del banner ajustado para aclarar que solo se guardan cookies y recopilan métricas con permiso expreso, sin anuncios personalizados.
  - Sección técnica dedicada en la página de política explicando el funcionamiento de Consent Mode v2, la navegación anónima sin cookies en caso de rechazo y el almacenamiento local de preferencias.

## [1.0.3] — 2026-11-03

Versión centrada en la experiencia de usuario móvil, dinamización en tiempo real del tramo horario, compatibilidad completa como Progressive Web App (PWA) en Google Chrome y ampliación del intervalo de actualización automática.

### Añadido

- **Instalabilidad PWA Completa y Service Worker** ([`public/sw.js`](public/sw.js), [`public/site.webmanifest`](public/site.webmanifest), [`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro)):
  - Incorporación de Service Worker con gestión de ciclo de vida (`install`, `activate`, `fetch`) con estrategia network-first para datos de precios y caché offline para activos de interfaz.
  - Vinculación del manifiesto web `<link rel="manifest" href="/site.webmanifest">` con identificador único (`id: "/"`), `scope: "/"` y soporte para iconos adaptativos (`any maskable`).
  - Habilitación oficial de la insignia de «Instalar aplicación» en la barra de direcciones de Google Chrome (Android y Escritorio).
- **Dinamización en Tiempo Real del Tramo Actual («AHORA»)** ([`src/pages/index.astro`](src/pages/index.astro)):
  - Detección precisa de la hora oficial en España (`Europe/Madrid`) mediante JavaScript cliente.
  - Sincronización instantánea y periódica (cada 60 segundos y al reactivar la pestaña con `visibilitychange`) del tramo horario actual, precio en €/kWh, precio mayorista de referencia, semáforo y tramo regulado en el bloque Hero.
  - Desplazamiento reactivo de la insignia `AHORA` sobre la rejilla de 24 horas sin depender de la hora estática de compilación.
  - Detección automática de cambio de jornada para actualizar datos tras la medianoche.

### Modificado y Corregido

- **Eliminación Total del Scroll Horizontal en Móvil** ([`src/styles/base.css`](src/styles/base.css), [`src/components/Header.astro`](src/components/Header.astro), [`src/pages/index.astro`](src/pages/index.astro)):
  - Restricción estricta `overflow-x: hidden; max-width: 100%; width: 100%;` en `html`, `body` y `main`.
  - Contracción fluida de la cabecera en pantallas menores a 390px ocultando el subtítulo largo y protegiendo el badge `PVPC REE` y el botón de menú con `min-w-0`.
  - Reemplazo de `scale-[1.03]` en tarjetas horarias por resaltado con `ring-3 ring-slate-900 shadow-lg` para evitar desbordamientos de columnas en cuadrículas móviles de dos columnas.
  - Flexibilización con `flex-wrap` de las insignias de precios máximos y mínimos de mañana.
- **Ajuste del Horario de Actualización Nocturna** ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)):
  - Horario de captura diaria de tarifas del día siguiente aplazado a las **21:30 CET** (20:30 UTC en invierno: cron `'30 20 * * *'`) para garantizar que Red Eléctrica haya finalizado la publicación del archivo 70 de e·sios (~20:20 CET), manteniendo el refresco matinal a las **06:00 CET**.

## [1.0.2] — 2026-11-02

Versión que integra la infraestructura formal de releases, licencia legal MIT, directrices de ingeniería `AGENTS.md` y paquetes precompilados de distribución (`v1.0.0`, `v1.0.1` y `v1.0.2`).

### Añadido

- **Directorio de Releases Integrado (`release/`):**
  - Incorporación de paquetes ZIP precompilados y notas de versión detalladas para `v1.0.0`, `v1.0.1` y `v1.0.2` junto con sus sumas de verificación SHA-256.
- **Workflow de Publicación Automatizada (`.github/workflows/release.yml`):**
  - Acción de GitHub Actions disparada por etiquetas `v*` que genera el archivo comprimido `luz-extremadura-${GITHUB_REF_NAME}.zip` y publica la release automáticamente en GitHub Releases.
- **Licencia Legal de Código Abierto ([`LICENSE`](LICENSE)):**
  - Publicación formal bajo licencia **MIT** y atribución a [Antonio Horrillo](https://antoniohorrillo.com).
- **Directrices Operativas del Repositorio ([`AGENTS.md`](AGENTS.md)):**
  - Normas de arquitectura de software, accesibilidad WCAG AA/AAA, privacidad estricta y protocolo para agentes y contribuidores.
- **Configuración de Entorno ([`.nvmrc`](.nvmrc)):**
  - Fijación de Node.js a versión LTS `22.23.4`.

## [1.0.1] — 2026-11-02

Versión de consolidación de diseño responsive, accesibilidad tipográfica, navegación global y optimización de activos PWA.

### Añadido

- **Navegación Global Multiruta y Menú Móvil Desplegable** ([`src/components/Header.astro`](src/components/Header.astro)):
  - Enlaces absolutos con ancla (`/#horas-hoy`, `/#calculadora`, `/#extremadura-energia`, `/#faqs`) que garantizan la navegación correcta tanto desde la portada como desde páginas secundarias (como `/cookies/`).
  - Detección de ruta activa con desplazamiento suave (*smooth scroll*) en la portada sin recarga de página.
  - Nuevo menú hamburguesa móvil desplegable con acceso a todas las secciones del portal.
- **Unificación Tipográfica Responsiva de Encabezados `<h2>`** ([`src/pages/index.astro`](src/pages/index.astro)):
  - Escala homogénea en todas las secciones principales: `text-xl` en móvil (1.25rem), `sm:text-2xl` en tablet (1.5rem) y `lg:text-3xl` en escritorio (1.875rem) con interlineado ceñido `leading-snug`.

### Corregido

- **Badge 'PVPC REE' en Cabecera Móvil:** Prevención de fractura a doble línea mediante `whitespace-nowrap`, escala de fuente ceñida `text-[10px] sm:text-xs` y punto de pulso adaptado.
- **Identidad de Marca sin Recortes:**
  - Ampliación del `viewBox` de [`logo.svg`](public/assets/logo.svg) a `500x100` para garantizar márgenes holgados a la derecha y evitar cortes en cualquier pantalla.
  - Regeneración completa de [`og-image.png`](public/assets/og-image.png) (1200x630 px) con márgenes de seguridad ampliados (>120 px) y rótulo oficial en español **«Tramos horarios €/kWh»**.

## [1.0.0] — 2026-11-02

Primera release oficial de producción de **Luz Extremadura** (`https://luz.antoniohorrillo.com/`), portal web estático y de alto rendimiento para la consulta en tiempo real del precio regulado de la electricidad (**PVPC tarifa 2.0TD**) en **Badajoz, Cáceres y toda la comunidad autónoma de Extremadura**.

### Añadido

- **Conexión Directa con Red Eléctrica de España (REE / e·sios)** ([`scripts/actualizar_precios_luz.mjs`](scripts/actualizar_precios_luz.mjs)).
- **Termómetro en Vivo & Curva Horaria 24h** ([`src/pages/index.astro`](src/pages/index.astro)).
- **Calculadora Extremeña de Consumos Reales** ([`src/pages/index.astro`](src/pages/index.astro)).
- **Dossier «Extremadura, potencia limpia»** ([`src/pages/index.astro`](src/pages/index.astro)).
- **Sección de Preguntas Frecuentes (FAQS) & SEO Enriquecido** ([`src/data/faqs.ts`](src/data/faqs.ts), [`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro)).
- **Privacidad y Google Consent Mode v2** ([`src/components/CookieBanner.astro`](src/components/CookieBanner.astro), [`src/pages/cookies.astro`](src/pages/cookies.astro)).
- **Identidad Gráfica y PWA Completa** ([`public/assets/`](public/assets/)).
- **Automatización CI/CD con GitHub Actions** ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)).
