"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

/**
 * Aparición progresiva al hacer scroll. Solo anima opacidad y desplazamiento
 * (propiedades baratas).
 *
 * `prefers-reduced-motion` lo gestiona <MotionProvider> (reducedMotion="user"):
 * con esa preferencia se elimina el desplazamiento y solo queda un fundido suave.
 * No hay ramas distintas entre servidor y cliente, así que no hay desajustes de hidratación.
 * El atributo `data-reveal` permite mostrar el contenido si JavaScript está desactivado
 * (ver <noscript> en el layout).
 */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: RevealProps) {
  return (
    <motion.div
      data-reveal
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
