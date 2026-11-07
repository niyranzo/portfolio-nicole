/**
 * Utilidades de traducción ligeras, seguras para componentes de cliente.
 *
 * Importan solo tipos (se borran al compilar), de modo que no arrastran los
 * diccionarios completos al JavaScript del navegador.
 */
import type { Dictionary } from "@/data/dictionary.es";
import type { Locale, Project } from "@/data/projects";

/** Texto con una única forma ("React") o una por idioma. */
export type Localized = string | Record<Locale, string>;

export function localize(value: Localized, locale: Locale): string {
  return typeof value === "string" ? value : value[locale];
}

/** Nombre del proyecto: traducido en el diccionario si existe; si no, el de `projects.ts`. */
export function getProjectName(
  project: Project,
  t: Dictionary["projects"],
): string {
  return t.names[project.slug] ?? project.name;
}

/** Etiqueta de tecnología: traducida si existe en el diccionario; si no, tal cual. */
export function getTechLabel(tech: string, t: Dictionary["projects"]): string {
  return t.techLabels[tech] ?? tech;
}
