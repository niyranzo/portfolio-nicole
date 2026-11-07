type Tone = "light" | "dark" | "rose";

interface TechBadgeProps {
  children: string;
  /** light = sobre fondo claro · dark = sobre fondo oscuro · rose = sobre rosa */
  tone?: Tone;
  className?: string;
}

const tones: Record<Tone, string> = {
  light: "border-ink/25 text-ink",
  dark: "border-paper/25 text-paper",
  rose: "border-ink/40 text-ink",
};

const dots: Record<Tone, string> = {
  light: "bg-rose",
  dark: "bg-rose",
  rose: "bg-ink",
};

/** Etiqueta técnica con estética editorial: mono, borde fino y punto de acento. */
export function TechBadge({
  children,
  tone = "light",
  className = "",
}: TechBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[0.7rem] leading-5 tracking-wide ${tones[tone]} ${className}`}
    >
      <span
        aria-hidden="true"
        className={`size-1.5 shrink-0 rounded-full ${dots[tone]}`}
      />
      {children}
    </span>
  );
}
