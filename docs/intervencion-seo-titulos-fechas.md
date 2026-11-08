# Informe Técnico de Intervención: Optimización SEO y Metadatos Sociales (v1.1.4)

- **Fecha:** 8 de noviembre de 2026
- **Proyecto:** Luz Extremadura (`luz-extremadura`)
- **Dominio:** `https://luz.antoniohorrillo.com`
- **Motivo de la intervención:** Caída en Google Analytics provocada por indexación de títulos con fecha fija desfasada en las SERPs de Google (`Precio de la Luz Hoy en Extremadura (3 de noviembre de...`).

---

## 1. Diagnóstico del Problema y Causa Raíz

### 1.1. Inyección de Fecha Estática en Etiquetas de Cabecera
En la versión anterior de `src/pages/index.astro`, las etiquetas `<title>` y `<meta name="description">` se construían dinámicamente durante el build inyectando variables con formato de fecha cerrada:

```astro
<BaseLayout
  title={`Precio de la Luz Hoy en Extremadura (${fechaHoyLegible}) | Hora a Hora PVPC`}
  description={`Consulta el precio de la luz hoy en Badajoz y Cáceres (${fechaHoyLegible}): precio actual ${fmtKwh(horaActualData?.precioKwh)} €/kWh, hora más barata (${hoy?.estadisticas?.precioMinimo?.rango} a ${fmtKwh(hoy?.estadisticas?.precioMinimo?.kwh)} €/kWh) y tramos valle, llano y punta.`}
>
```

### 1.2. Ciclo Asíncrono de Rastreo de Googlebot (*Crawl Budget*)
1. Cuando se compiló y desplegó el sitio el 3 de noviembre, el HTML estático resultante incorporó a fuego la cadena `Precio de la Luz Hoy en Extremadura (3 de noviembre de 2026) | Hora a Hora PVPC`.
2. Googlebot rastreó e indexó la portada ese mismo día, guardando dicho título en el índice de Google.
3. Al tratarse de un sitio con arquitectura estática y relativamente joven, el re-rastreo de Googlebot no ocurre minuto a minuto ni todos los días de forma inmediata.
4. Como resultado, los días posteriores (4, 5, 6, 7, 8 de noviembre), las búsquedas orgánicas en Google siguieron mostrando el snippet con la fecha congelada en el 3 de noviembre.

### 1.3. Impacto en Métricas de Rendimiento y Posicionamiento
- **Desplome del CTR (Click-Through Rate):** Un usuario que busca información en tiempo real descarta automáticamente un resultado que anuncia datos de hace varios días, optando por resultados competidores cuya promesa sea *"Hoy"*.
- **Pérdida de Rankings:** El algoritmo de Google evalúa el comportamiento de los usuarios (interacción, CTR y tasa de rebote o retorno a las SERPs). La caída del CTR provocó una devaluación gradual de la posición media y el volumen de impresiones orgánicas reportadas en Google Analytics.
- **Tarjetas Sociales Desactualizadas:** Las etiquetas `og:title`, `og:description`, `twitter:title` y `twitter:description` heredaban los mismos valores, mostrando información caducada al compartir el enlace en aplicaciones de mensajería (WhatsApp, Telegram) o redes sociales (X / Twitter, LinkedIn, Facebook).

---

## 2. Modificaciones Implementadas

### 2.1. Desacoplamiento de Metadatos hacia una Estrategia *Evergreen*
En `src/pages/index.astro`, se sustituyeron el título y la descripción por definiciones optimizadas para intención de búsqueda sin obsolescencia temporal:

- **`<title>`:** `Precio de la Luz Hoy en Extremadura (Badajoz y Cáceres) | Horas y PVPC`
  - Longitud óptima (~71 caracteres) para visualización íntegra en pantallas de escritorio y móvil.
  - Integra las palabras clave principales: *"Precio de la Luz Hoy Extremadura"*, *"Badajoz"*, *"Cáceres"*, *"Horas"* y *"PVPC"*.
  - El término **"Hoy"** garantiza relevancia continua cualquier día del año sin riesgo de quedar desfasado ante demoras de rastreo.
- **`<meta name="description">`:** `Consulta el precio de la luz hoy en Extremadura (Badajoz y Cáceres) hora a hora. Descubre la hora más barata del día, tramos valle, llano y punta, y ahorra con la tarifa regulada PVPC.`
  - Redacción persuasiva orientada al clic, eliminando cifras y horas volátiles que puedan inducir a error.

### 2.2. Preservación de la Fecha en el Contenido Visual
La fecha del día en curso (`{fechaHoyLegible}`) se mantiene plenamente visible para el usuario dentro del contenido del portal:
- Encabezado editorial y subtítulo del Hero: *"Valores oficiales de Red Eléctrica para hoy..."*.
- Selectores interactivos *"Hoy / Mañana"*.
- Reloj de hora actual (*"Ahora mismo"*).
- Encabezado de la curva horaria completa de 24 horas.

### 2.3. Saneamiento de Tarjetas Open Graph y Twitter Cards
Al heredar los nuevos valores de `title` y `description` en `src/layouts/BaseLayout.astro`, las tarjetas sociales quedan protegidas frente a información caducada. Asimismo, se comprobó que `public/assets/og-image.png` es una imagen institucional limpia sin texto de fechas.

### 2.4. Señal de Frescura Automatizada en Sitemap (`<lastmod>`)
Se modificó `scripts/actualizar_precios_luz.mjs` para actualizar automáticamente la etiqueta `<lastmod>` con la fecha en curso (`YYYY-MM-DD`) en `public/sitemap.xml` cada vez que se ejecute la tarea de captura y despliegue (dos veces al día). Esto informa explícitamente a los motores de búsqueda de la renovación de contenido para acelerar los ciclos de rastreo.

---

## 3. Protocolo de Verificación y Purgado de Caché

### 3.1. Google Search Console (Actualización Inmediata en SERPs)
1. Acceder a [Google Search Console](https://search.google.com/search-console).
2. Introducir `https://luz.antoniohorrillo.com/` en la herramienta **Inspección de URLs**.
3. Hacer clic en **Solicitar indexación**.
4. Reenviar el sitemap en la sección **Sitemaps** (`https://luz.antoniohorrillo.com/sitemap.xml`).
*Efecto esperado:* Googlebot re-visita la URL entre 2 y 24 horas y sustituye el título obsoleto por el nuevo formato atemporal.

### 3.2. Depuradores de Caché Social
- **Facebook / WhatsApp:** Usar el [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) e introducir la URL para forzar *"Scrape Again"*.
- **LinkedIn:** Inspeccionar la URL en [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/).
- **X / Twitter:** Validar o publicar con parámetro neutro si se requiere refresco instantáneo.

---

## 4. Estado Final del Repositorio
- Versión actualizada a **`1.1.4`** en `package.json`, `CHANGELOG.md`, `README.md`, `docs/sesion-desarrollo.md` y notas de versión.
- Paquete ZIP compilado en `release/luz-extremadura-v1.1.4.zip` con su correspondiente suma SHA-256 en `release/luz-extremadura-v1.1.4.zip.sha256`.
- Directriz de Git cumplida: **sin crear ni manipular etiquetas `git tag`**.
