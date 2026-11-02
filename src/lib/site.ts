export const SITE = "https://luz.antoniohorrillo.com";
export const SITE_NAME = "Luz Extremadura";
export const SITE_SHORT_NAME = "LuzExtremadura";
export const SITE_DESCRIPTION =
  "Precio de la luz hoy en Extremadura (Badajoz y Cáceres) hora a hora. Consulta el precio regulado PVPC (Tarifa 2.0TD), tramos valle, llano y punta, la hora más barata del día y calculadoras de ahorro energético adaptadas al clima extremeño.";

export const SITE_KEYWORDS = [
  "precio de la luz hoy extremadura",
  "precio luz badajoz",
  "precio luz caceres",
  "hora mas barata luz hoy",
  "tarifa pvpc extremadura",
  "precio kwh hoy espana",
  "tramos de la luz extremadura",
  "ahorro luz extremadura",
  "coste aire acondicionado extremadura",
  "coste termo electrico extremadura",
  "luz merida plasencia don benito"
];

export const AUTHOR_NAME = "Antonio Horrillo";
export const AUTHOR_URL = "https://antoniohorrillo.com";

export function absoluteUrl(path: string = ""): string {
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return cleanPath ? `${SITE}/${cleanPath}` : `${SITE}/`;
}

export function withBase(path: string = ""): string {
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `/${cleanPath}`;
}
