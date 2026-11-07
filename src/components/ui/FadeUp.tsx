import type { CSSProperties, ReactNode } from "react";

interface FadeUpProps {
  children: ReactNode;
  /** Retraso en segundos. */
  delay?: number;
  className?: string;
}

/**
 * Entrada con CSS puro para el contenido que ya está en pantalla al cargar (hero).
 * Se ve desde el primer pintado, no depende de JavaScript y se desactiva con
 * `prefers-reduced-motion` (ver globals.css).
 */
export function FadeUp({ children, delay = 0, className = "" }: FadeUpProps) {
  return (
    <div
      className={`fade-up ${className}`}
      style={{ "--d": `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  );
}
