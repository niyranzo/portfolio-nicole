import Image from "next/image";
import type { Project } from "@/data/projects";
import type { Dictionary } from "@/lib/i18n";

export const aspectClass: Record<Project["aspect"], string> = {
  landscape: "aspect-[4/3]",
  square: "aspect-square",
  portrait: "aspect-[4/5]",
};

interface ProjectImageProps {
  project: Project;
  /** Textos del diccionario (sección proyectos) y nombre ya traducido del proyecto. */
  t: Dictionary["projects"];
  name: string;
  /** Índice de la imagen de la galería a mostrar. */
  index?: number;
  sizes: string;
  /** Fuerza la proporción (en el modal se usa una fija). */
  aspect?: Project["aspect"];
  /** Variante para fondos oscuros (tarjeta destacada). */
  tone?: "light" | "dark";
  priority?: boolean;
  className?: string;
}

/**
 * Imagen del proyecto con espacio reservado elegante cuando todavía no hay captura real.
 * El espacio reservado indica claramente la ruta donde colocar el recurso,
 * para que nunca se confunda con una captura real.
 */
export function ProjectImage({
  project,
  t,
  name,
  index = 0,
  sizes,
  aspect,
  tone = "light",
  priority = false,
  className = "",
}: ProjectImageProps) {
  const image = project.images[index];
  const ratio = aspectClass[aspect ?? project.aspect];

  if (image) {
    return (
      <div className={`relative overflow-hidden ${ratio} ${className}`}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out group-hover/image:scale-[1.04]"
        />
      </div>
    );
  }

  const dark = tone === "dark";

  return (
    <div
      role="img"
      aria-label={`${t.placeholderTitle}: ${name}`}
      className={`relative flex flex-col justify-between overflow-hidden p-5 sm:p-6 ${ratio} ${
        dark ? "bg-paper/[0.06] text-paper" : "bg-blush text-ink"
      } ${className}`}
      style={{
        backgroundImage: `linear-gradient(to right, ${
          dark ? "rgb(245 243 240 / 0.08)" : "rgb(25 24 23 / 0.07)"
        } 1px, transparent 1px), linear-gradient(to bottom, ${
          dark ? "rgb(245 243 240 / 0.08)" : "rgb(25 24 23 / 0.07)"
        } 1px, transparent 1px)`,
        backgroundSize: "32px 32px",
      }}
    >
      <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] opacity-70">
        {t.placeholderTitle}
      </span>

      {dark ? (
        /* Líneas abstractas de "respuesta en streaming" (decorativas) */
        <div aria-hidden="true" className="space-y-3">
          <span className="pulse-line block h-2.5 w-3/4 rounded-full bg-rose" />
          <span
            className="pulse-line block h-2.5 w-1/2 rounded-full bg-paper/40"
            style={{ animationDelay: "0.4s" }}
          />
          <span
            className="pulse-line block h-2.5 w-2/3 rounded-full bg-paper/25"
            style={{ animationDelay: "0.8s" }}
          />
        </div>
      ) : (
        <span
          aria-hidden="true"
          className="font-serif text-7xl font-medium leading-none opacity-90 sm:text-8xl"
        >
          {project.number}
        </span>
      )}

      <p className="font-mono text-[0.65rem] leading-5 tracking-wide opacity-70">
        {t.placeholderHint}
        <br />
        <span className="break-all font-medium opacity-100">
          public{project.imageHint}
        </span>
      </p>
    </div>
  );
}
