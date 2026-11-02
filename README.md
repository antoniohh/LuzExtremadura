# Luz Extremadura

[![Versión](https://img.shields.io/badge/versi%C3%B3n-1.0.1-047857?style=for-the-badge)](CHANGELOG.md)
[![Astro](https://img.shields.io/badge/Astro-7.4.2-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3.3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Licencia MIT](https://img.shields.io/badge/Licencia-MIT-green?style=for-the-badge)](LICENSE)
[![Deploy](https://img.shields.io/badge/Deploy-GitHub_Pages-0f172a?style=for-the-badge&logo=github&logoColor=white)](https://luz.antoniohorrillo.com/)

Aplicación web estática (SPA) para la consulta diaria y en tiempo real del **precio de la luz regulado en Extremadura (Tarifa PVPC 2.0TD)** en las provincias de Badajoz y Cáceres, con semáforo energético por horas, avance de mañana y calculadora de ahorro.

- **Sitio web en producción:** [https://luz.antoniohorrillo.com](https://luz.antoniohorrillo.com)
- **Repositorio:** [https://github.com/antoniohh/LuzExtremadura](https://github.com/antoniohh/LuzExtremadura)
- **Autor:** Antonio Horrillo ([antoniohorrillo.com](https://antoniohorrillo.com))

---

## 🎯 Características Principales

1. **Termómetro en Vivo (Hora Actual) y Curva Horaria 24h:**
   - Captura diaria de los precios horarios oficiales desde el archivo de **Red Eléctrica de España (REE / e·sios archive 70)**.
   - Compilación y publicación automática todos los días a las **20:30 CET (19:30 UTC)** mediante GitHub Actions (`.github/workflows/deploy.yml`) para publicar los precios de mañana recién emitidos por REE, con refresco de seguridad diario a las **06:00 CET**.
   - Semáforo energético de 3 colores con alto contraste: **Barata** (Verde), **Media** (Amarillo) y **Cara** (Rojo).
   - Tramos regulados oficiales (**Valle**, **Llano** y **Punta**) identificados hora a hora con precios en **€/kWh**.
2. **Precios para Mañana (Anticipación Diaria):**
   - Módulo interactivo disponible desde las 20:20 h de la tarde anterior para que los hogares y empresas puedan planificar sus consumos (lavadoras, termos, climatización o carga de vehículo).
3. **Calculadora Extremeña de Consumos Reales:**
   - Estimación en euros del coste por ciclo o por hora adaptado a la climatología y hogares de Badajoz y Cáceres:
     - **Aire Acondicionado:** Split Inverter (1,2 kW) en las olas de calor veraniegas.
     - **Termo Eléctrico (80L):** Ahorro crítico en poblaciones rurales y municipios sin gas natural canalizado.
     - **Lavadora Eco/60ºC:** Comparativa inmediata entre ponerla en hora punta vs. hora valle.
     - **Vehículo Eléctrico:** Coste para 100 km en carga nocturna doméstica vs. combustible tradicional.
4. **Dossier «Extremadura, potencia limpia»:**
   - Contexto editorial y técnico sobre la generación fotovoltaica, hidroeléctrica y nuclear en la región, su balance exportador (+400% respecto a la demanda) y el funcionamiento marginalista peninsular.
5. **SEO Técnico y Privacidad (RGPD / AEPD):**
   - Marcado estructurado Schema.org (`WebSite`, `WebPage`, `Dataset`, `FAQPage` y `BreadcrumbList`).
   - Activos vectoriales y Open Graph (`favicon.svg`, `favicon.ico`, `apple-touch-icon.png`, `logo.svg`, `og-image.png`, `robots.txt`, `sitemap.xml`, `site.webmanifest` y `CNAME`).
   - Cumplimiento estricto de privacidad con **Google Consent Mode v2** (bloqueo analítico previo por defecto para RGPD), banner y modal de configuración (`CookieBanner.astro`) y página de [Política de Cookies](/cookies/) (`src/pages/cookies.astro`) con Google Analytics 4 (`G-HEKMQY6G5E`).

---

## 🛠️ Comandos de Desarrollo y Scripts de Datos

```bash
# Instalar dependencias (requiere Node.js >= 22.23.4)
npm install

# Actualizar los precios de hoy y mañana desde la API de Red Eléctrica
npm run actualizar:hoy

# Iniciar servidor de desarrollo local
npm run dev

# Compilar para producción (actualiza precios de hoy + genera dist/)
npm run build

# Compilar rápidamente usando los JSON actuales en disco
npm run build:fast

# Previsualizar el sitio compilado localmente
npm run preview
```

---

## 📁 Estructura del Proyecto

```text
LuzExtremadura/
├── .github/
│   └── workflows/
│       ├── deploy.yml                             # Build diario a las 20:30 h y 06:00 h y deploy en Pages
│       └── release.yml                            # Empaquetado ZIP y publicación de release en tags v*
├── docs/
│   ├── guia-api-esios-ree.md                      # Documentación técnica de la API oficial de Red Eléctrica
│   └── sesion-desarrollo.md                       # Registro técnico del desarrollo y arquitectura
├── public/
│   ├── assets/
│   │   ├── apple-touch-icon.png
│   │   ├── favicon.svg
│   │   ├── icon-192.png
│   │   ├── icon-512.png
│   │   ├── logo.svg
│   │   └── og-image.png                           # Tarjeta social de 1200x630 px
│   ├── datos/
│   │   └── precios_luz_hoy.json                   # Precios del día y de mañana de REE (archive 70)
│   ├── .nojekyll
│   ├── CNAME                                      # Dominio personalizado: luz.antoniohorrillo.com
│   ├── favicon.ico
│   ├── robots.txt
│   ├── site.webmanifest                           # PWA Webmanifest
│   └── sitemap.xml
├── release/
│   ├── RELEASE_NOTES_v1.0.0.md
│   ├── RELEASE_NOTES_v1.0.1.md                    # Notas de la release v1.0.1
│   ├── luz-extremadura-v1.0.1.zip                 # Paquete precompilado de distribución
│   └── luz-extremadura-v1.0.1.zip.sha256
├── scripts/
│   └── actualizar_precios_luz.mjs                 # Extracción y cálculo horario del PVPC desde e·sios
├── src/
│   ├── components/
│   │   ├── CookieBanner.astro                     # Aviso y configuración de cookies (Consent Mode v2)
│   │   ├── Footer.astro
│   │   └── Header.astro                           # Cabecera sticky con menú móvil y badge 'PVPC REE'
│   ├── data/
│   │   └── faqs.ts                                # Preguntas frecuentes con Schema.org
│   ├── layouts/
│   │   └── BaseLayout.astro                       # SEO, Open Graph, Consent Mode v2 y JSON-LD Schema.org
│   ├── lib/
│   │   └── site.ts                                # Constantes canónicas y dominio
│   ├── pages/
│   │   ├── cookies.astro                          # Página de Política de Cookies y Privacidad (/cookies/)
│   │   └── index.astro                            # SPA principal
│   └── styles/
│       ├── base.css
│       └── global.css
├── .gitignore
├── .nvmrc
├── AGENTS.md
├── CHANGELOG.md
├── LICENSE
├── README.md
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## 🌐 Despliegue en GitHub Pages (`luz.antoniohorrillo.com`)

El repositorio está configurado para desplegarse automáticamente bajo el dominio personalizado `https://luz.antoniohorrillo.com/`:

1. Sube los cambios a la rama `main`.
2. En GitHub, entra en **Settings → Pages** y en **Build and deployment** selecciona **GitHub Actions**.
3. Configura un registro DNS `CNAME` para `luz.antoniohorrillo.com` apuntando a `antoniohh.github.io`.
4. El workflow `.github/workflows/deploy.yml` se ejecuta automáticamente en cada `push` a `main` y todos los días a las **20:30 CET (19:30 UTC)** para capturar los precios de mañana recién publicados por REE, más una ejecución de respaldo a las **06:00 CET**, publicando `dist/` con el archivo `CNAME` incluido.

Si necesitas cambiar el dominio en el futuro, actualiza `src/lib/site.ts`, `astro.config.mjs`, `public/CNAME`, `public/robots.txt` y `public/sitemap.xml`.

---

## 📦 Control de Versiones

Versión actual: **1.0.1** · [Historial completo en CHANGELOG.md](CHANGELOG.md)

| Versión | Fecha | Cambios principales |
|---|---|---|
| **1.0.1** | 2026-11-02 | Navegación global multiruta (`/#`), menú móvil desplegable, unificación tipográfica responsiva de encabezados `<h2>`, protección de badge `PVPC REE` en móvil, workflow de GitHub Releases y `AGENTS.md` |
| 1.0.0 | 2026-11-02 | Lanzamiento inicial en `luz.antoniohorrillo.com`: precios diarios y de mañana desde Red Eléctrica (e·sios archive 70), semáforo 24h, tramos valle/llano/punta, calculadora de consumo extremeño, dossier solar y Consent Mode v2 |

El workflow `.github/workflows/release.yml` compila el sitio y adjunta automáticamente `luz-extremadura-v1.0.1.zip` al publicar una etiqueta `v*` en GitHub. Además, el paquete precompilado local se encuentra disponible en `release/luz-extremadura-v1.0.1.zip`.

---

## 📄 Licencia y Autoría

Desarrollado por **[Antonio Horrillo](https://antoniohorrillo.com)** ([github.com/antoniohh](https://github.com/antoniohh)).

Este proyecto se distribuye bajo la Licencia **MIT**. Consulta el archivo [LICENSE](LICENSE) para más detalles. Los datos de precios de la electricidad proceden del catálogo oficial de datos abiertos de Red Eléctrica de España (REE / e·sios).
