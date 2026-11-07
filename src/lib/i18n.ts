import { es, type Dictionary } from "@/data/dictionary.es";
import { en } from "@/data/dictionary.en";
import type { Locale } from "@/data/projects";

export type { Dictionary, Locale };

export const locales: readonly Locale[] = ["es", "en"];
export const defaultLocale: Locale = "es";

const dictionaries: Record<Locale, Dictionary> = { es, en };

/** Comprueba (y acota el tipo de) un segmento de URL como idioma válido. */
export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getDictionary(locale: Locale = defaultLocale): Dictionary {
  return dictionaries[locale];
}

export function otherLocale(locale: Locale): Locale {
  return locale === "es" ? "en" : "es";
}

/**
 * Para añadir un tercer idioma:
 *   1. Crea src/data/dictionary.<xx>.ts con la forma de `Dictionary`.
 *   2. Amplía `Locale` en src/data/projects.ts y añádelo a `locales` y `dictionaries` aquí.
 *   3. Añade `copy.<xx>` a cada proyecto y un caso a `localize` en src/data/skills.ts.
 */
