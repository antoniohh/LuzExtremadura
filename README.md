# Luz Extremadura

[![Versión](https://img.shields.io/badge/versi%C3%B3n-1.0.1-047857?style=for-the-badge)](CHANGELOG.md)
[![Astro](https://img.shields.io/badge/Astro-7.4.2-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3.3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Licencia MIT](https://img.shields.io/badge/Licencia-MIT-green?style=for-the-badge)](LICENSE)
[![Deploy](https://img.shields.io/badge/Deploy-GitHub_Pages-0f172a?style=for-the-badge&logo=github&logoColor=white)](https://luz.antoniohorrillo.com/)

Aplicación web estática para la consulta diaria y en tiempo real del **precio regulado de la electricidad (PVPC tarifa 2.0TD)** hora a hora enfocado a **Extremadura (Badajoz y Cáceres)**.

- **Sitio web en producción:** [https://luz.antoniohorrillo.com](https://luz.antoniohorrillo.com)
- **Repositorio:** [https://github.com/antoniohh/LuzExtremadura](https://github.com/antoniohh/LuzExtremadura)
- **Autor:** Antonio Horrillo ([antoniohorrillo.com](https://antoniohorrillo.com))

---

## 🎯 Características Principales

1. **Termómetro en Vivo & Curva Horaria 24h:**
   - Precio de la hora actual en euros por kilovatio hora (`€/kWh`), hora más barata del día y hora más cara.
   - Curva horaria completa (00:00 a 23:00 h) con semáforo energético limpio (**Barata**, **Media**, **Cara**) y tramos oficiales (**Valle**, **Llano** y **Punta**).
   - Publicación automática de los **precios de mañana** cada día a partir de las **20:20 h**.
2. **Calculadora Real para el Hogar Extremeño:**
   - Estimación del coste por hora o por ciclo en los aparatos clave para el clima de Badajoz y Cáceres:
     - **Aire Acondicionado:** Split Inverter en las olas de calor extremeñas.
     - **Termo Eléctrico (80L):** Ahorro crítico en poblaciones rurales sin gas natural canalizado.
     - **Lavadora Eco/60ºC:** Comparativa inmediata entre ponerla en hora punta vs. hora valle.
     - **Vehículo Eléctrico:** Coste para 100 km en carga nocturna doméstica.
3. **Dossier «Extremadura, potencia limpia»:**
   - Análisis y contexto sobre la generación fotovoltaica, hidroeléctrica y nuclear en la región, su balance exportador (+400%) y el funcionamiento del mercado marginalista peninsular.
4. **Privacidad Estricta y Rendimiento:**
   - Sin publicidad abusiva ni rastreo invasivo.
   - **Google Consent Mode v2** integrado de fábrica con denegación previa regional para RGPD y medición anónima con `G-HEKMQY6G5E`.
5. **Automatización:**
   - Extracción directa desde la fuente oficial de **Red Eléctrica de España (REE / e·sios archive 70)** y despliegue continuo mediante GitHub Actions.

---

## 🛠️ Comandos de Desarrollo

```bash
# Instalar dependencias (requiere Node.js >= 22.0.0)
npm install

# Descargar precios de hoy y mañana desde Red Eléctrica
npm run actualizar:hoy

# Iniciar servidor local de desarrollo
npm run dev

# Compilar para producción (actualiza datos + genera dist/)
npm run build

# Previsualizar el sitio compilado localmente
npm run preview
```

---

## 📁 Estructura del Proyecto

```text
LuzExtremadura/
├── .github/
│   └── workflows/
│       ├── deploy.yml               # Despliegue diario a las 20:30 h y 06:00 h en GitHub Pages
│       └── release.yml              # Empaquetado ZIP y publicación de release en tags v*
├── docs/
│   ├── guia-api-esios-ree.md        # Documentación técnica de la API oficial de Red Eléctrica
│   └── sesion-desarrollo.md         # Registro de decisiones y arquitectura
├── public/
│   ├── assets/
│   │   ├── apple-touch-icon.png
│   │   ├── favicon.svg
│   │   ├── icon-192.png
│   │   ├── icon-512.png
│   │   ├── logo.svg
│   │   └── og-image.png             # Tarjeta social de 1200x630 px
│   ├── datos/
│   │   └── precios_luz_hoy.json     # Precios horarios de hoy y mañana (REE PVPC)
│   ├── .nojekyll
│   ├── CNAME                        # Dominio: luz.antoniohorrillo.com
│   ├── favicon.ico
│   ├── robots.txt
│   ├── site.webmanifest             # PWA Manifest
│   └── sitemap.xml
├── release/
│   ├── RELEASE_NOTES_v1.0.1.md      # Notas detalladas de la release v1.0.1
│   ├── luz-extremadura-v1.0.1.zip   # Paquete comprimido de producción
│   └── luz-extremadura-v1.0.1.zip.sha256
├── scripts/
│   └── actualizar_precios_luz.mjs   # Extractor del PVPC desde e·sios archive 70
├── src/
│   ├── components/
│   │   ├── CookieBanner.astro       # Banner y modal de privacidad Consent Mode v2
│   │   ├── Footer.astro             # Pie de página y créditos
│   │   └── Header.astro             # Cabecera sticky con badge 'PVPC REE'
│   ├── data/
│   │   └── faqs.ts                  # Preguntas frecuentes con marcado Schema.org
│   ├── layouts/
│   │   └── BaseLayout.astro         # Layout base con SEO, Analytics y Schema
│   ├── lib/
│   │   └── site.ts                  # Constantes y utilidades de URL del sitio
│   ├── pages/
│   │   ├── cookies.astro            # Política de cookies y privacidad
│   │   └── index.astro              # Portada principal con semáforo y calculadora
│   └── styles/
│       ├── base.css                 # Tokens semánticos de diseño
│       └── global.css
├── .nvmrc
├── astro.config.mjs
├── CHANGELOG.md                     # Historial de versiones del proyecto
├── LICENSE                          # Licencia MIT
├── package.json
└── tsconfig.json
```

---

## 🌐 Despliegue en GitHub Pages (`luz.antoniohorrillo.com`)

El repositorio está configurado para desplegarse automáticamente bajo el dominio personalizado `https://luz.antoniohorrillo.com/`:

1. Sube los cambios a la rama `main`.
2. En GitHub, entra en **Settings → Pages** y en **Build and deployment** selecciona **GitHub Actions**.
3. Configura un registro DNS `CNAME` para `luz.antoniohorrillo.com` apuntando a `antoniohh.github.io`.
4. El workflow `.github/workflows/deploy.yml` se ejecuta automáticamente en cada `push` a `main` y todos los días a las **20:30 CET (19:30 UTC)** para publicar los precios del día siguiente y a las **06:00 CET** como refresco matinal.

---

## 📦 Control de Versiones

Versión actual: **1.0.1** · [Historial completo en CHANGELOG.md](CHANGELOG.md)

| Versión | Fecha | Cambios principales |
|---|---|---|
| **1.0.1** | 2026-11-02 | Navegación global multiruta (`/#`), menú móvil desplegable, unificación tipográfica responsiva de encabezados `<h2>`, protección de badge `PVPC REE` en móvil y workflow de GitHub Releases |
| 1.0.0 | 2026-11-02 | Lanzamiento inicial: precios diarios y de mañana desde Red Eléctrica (e·sios archive 70), semáforo 24h, tramos valle/llano/punta, calculadora de consumo extremeño, dossier solar y Consent Mode v2 |

El workflow `.github/workflows/release.yml` compila el sitio y adjunta automáticamente el paquete `luz-extremadura-v1.0.1.zip` al publicar una etiqueta `v*` en GitHub.

---

## 📄 Licencia y Autoría

Desarrollado por **[Antonio Horrillo](https://antoniohorrillo.com)** ([github.com/antoniohh](https://github.com/antoniohh)).

Este proyecto se distribuye bajo la Licencia **MIT**. Consulta el archivo [LICENSE](LICENSE) para más detalles. Los datos de precios de la electricidad proceden del archivo oficial de datos abiertos de Red Eléctrica de España (REE / e·sios).
