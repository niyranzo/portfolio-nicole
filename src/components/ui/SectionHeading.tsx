import type { ReactNode } from "react";

interface SectionHeadingProps {
  id: string;
  number: string;
  label: string;
  /** Título: usa <em> dentro para la parte expresiva en cursiva. */
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}

/**
 * Cabecera de sección: numeración y etiqueta en mono + titular serif de gran tamaño.
 * El <h2> lleva el `id` para `aria-labelledby` de la sección.
 */
export function SectionHeading({
  id,
  number,
  label,
  children,
  tone = "light",
  className = "",
}: SectionHeadingProps) {
  const muted = tone === "dark" ? "text-paper/60" : "text-ink/60";
  const rule = tone === "dark" ? "bg-paper/20" : "bg-ink/15";

  return (
    <header className={className}>
      <div
        className={`flex items-center gap-4 font-mono text-xs uppercase tracking-[0.18em] ${muted}`}
      >
        <span>({number})</span>
        <span>{label}</span>
        <span aria-hidden="true" className={`h-px flex-1 ${rule}`} />
      </div>
      <h2
        id={id}
        className="mt-6 max-w-4xl font-serif text-[2.6rem] font-medium leading-[0.98] tracking-tight text-balance sm:text-6xl lg:text-7xl [&_em]:italic"
      >
        {children}
      </h2>
    </header>
  );
}
