# Luz Extremadura

[![Astro](https://img.shields.io/badge/Astro-7.4.2-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3.3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Licencia MIT](https://img.shields.io/badge/Licencia-MIT-green?style=for-the-badge)](LICENSE)
[![Deploy](https://img.shields.io/badge/Deploy-GitHub_Pages-0f172a?style=for-the-badge&logo=github&logoColor=white)](https://luz.antoniohorrillo.com/)

Aplicación web estática para la consulta diaria y en tiempo real del **precio regulado de la electricidad (PVPC tarifa 2.0TD)** enfocado a **Extremadura (Badajoz y Cáceres)**.

- **Sitio web en producción:** [https://luz.antoniohorrillo.com](https://luz.antoniohorrillo.com)
- **Repositorio:** [https://github.com/antoniohh/LuzExtremadura](https://github.com/antoniohh/LuzExtremadura)
- **Autor:** Antonio Horrillo ([antoniohorrillo.com](https://antoniohorrillo.com))

---

## 🎯 Características Principales

1. **Termómetro en Vivo & Curva Horaria:**
   - Precio de la hora actual en céntimos de euro por kWh (`c€/kWh`), hora más barata del día y hora más cara.
   - Curva horaria completa (00:00 a 23:00 h) con código de semáforo (Verde / Amarillo / Rojo) y tramos regulados (Valle, Llano y Punta).
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
   - **Google Consent Mode v2** integrado de fábrica con denegación previa regional para RGPD.
5. **Automatización:**
   - Extracción directa desde la fuente oficial de **Red Eléctrica de España (e·sios)** y despliegue continuo mediante GitHub Actions.

---

## 🛠️ Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Descargar precios de hoy y mañana desde Red Eléctrica
npm run actualizar:hoy

# Iniciar servidor local de desarrollo
npm run dev

# Compilar para producción (actualiza datos + genera dist/)
npm run build
```
