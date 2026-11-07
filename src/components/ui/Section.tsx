import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  /** id del <h2> que titula la sección (accesibilidad). */
  labelledBy: string;
  tone?: "light" | "dark";
  className?: string;
  children: ReactNode;
}

/** Panel de sección con esquinas redondeadas. Alterna fondos claros y oscuros. */
export function Section({
  id,
  labelledBy,
  tone = "light",
  className = "",
  children,
}: SectionProps) {
  const tones =
    tone === "light"
      ? "bg-paper text-ink"
      : "bg-ink text-paper border border-paper/15";

  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`relative scroll-mt-20 overflow-hidden rounded-[1.75rem] px-5 py-16 sm:rounded-[2.25rem] sm:px-10 sm:py-24 lg:px-16 ${tones} ${className}`}
    >
      {children}
    </section>
  );
}
