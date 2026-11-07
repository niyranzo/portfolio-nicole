"use client";

import { useEffect, useId, useRef } from "react";

interface CatProps {
  /** Descripción accesible de la ilustración. */
  label: string;
  className?: string;
}

const clamp = (n: number, min: number, max: number) =>
  Math.min(max, Math.max(min, n));

/** Centro de la cabeza dentro del viewBox (420 × 480), para calcular hacia dónde mirar. */
const HEAD_CENTER = { x: 200 / 420, y: 150 / 480 };

const LOOK_VARS = ["--look-x", "--look-y", "--head-x", "--head-y", "--head-r"];

/**
 * Gato negro ilustrado en SVG vectorial (sin imágenes ni vídeo).
 *
 * Cada parte es un grupo independiente con su propia clase de animación
 * (ver "Gato del hero" en globals.css):
 *   cola (2 segmentos) · cuerpo (respiración) · cabeza (balanceo + inclinaciones)
 *   orejas · ojos (parpadeo, pupilas) · hocico y bigotes.
 *
 * Interacción: las pupilas y la cabeza siguen al cursor mediante variables CSS
 * (sin re-renderizar React). Con `prefers-reduced-motion` no hay animaciones
 * ni seguimiento: el gato queda quieto.
 */
export function Cat({ label, className = "" }: CatProps) {
  const ref = useRef<SVGSVGElement>(null);
  // useId devuelve ":r1:"; se limpia para usarlo con seguridad en url(#…)
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const clipLeft = `cat-eye-l-${uid}`;
  const clipRight = `cat-eye-r-${uid}`;

  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let pending: PointerEvent | null = null;

    const reset = () => {
      LOOK_VARS.forEach((name) => svg.style.removeProperty(name));
    };

    const update = () => {
      frame = 0;
      const event = pending;
      pending = null;
      if (!event || reduced.matches) return;

      const rect = svg.getBoundingClientRect();
      if (rect.width === 0) return;

      const cx = rect.left + rect.width * HEAD_CENTER.x;
      const cy = rect.top + rect.height * HEAD_CENTER.y;
      const reach = Math.max(rect.width, 280);
      const nx = clamp((event.clientX - cx) / reach, -1, 1);
      const ny = clamp((event.clientY - cy) / reach, -1, 1);

      // Más reacción cuando el cursor está sobre el gato; más discreta fuera.
      const k = svg.dataset.hover === "true" ? 1 : 0.6;

      svg.style.setProperty("--look-x", (nx * 6).toFixed(2));
      svg.style.setProperty("--look-y", (ny * 4.5).toFixed(2));
      svg.style.setProperty("--head-x", (nx * 5 * k).toFixed(2));
      svg.style.setProperty("--head-y", (ny * 3 * k).toFixed(2));
      svg.style.setProperty("--head-r", (nx * 7 * k).toFixed(2));
    };

    const onMove = (event: PointerEvent) => {
      pending = event;
      if (!frame) frame = requestAnimationFrame(update);
    };

    const onReducedChange = () => {
      if (reduced.matches) reset();
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", reset);
    reduced.addEventListener("change", onReducedChange);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", reset);
      reduced.removeEventListener("change", onReducedChange);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 420 480"
      role="img"
      aria-label={label}
      focusable="false"
      className={`cat ${className}`}
      onPointerEnter={(e) => {
        e.currentTarget.dataset.hover = "true";
      }}
      onPointerLeave={(e) => {
        e.currentTarget.dataset.hover = "false";
      }}
    >
      <defs>
        {/* Recortes para que las pupilas nunca se salgan del ojo */}
        <clipPath id={clipLeft}>
          <ellipse cx="163" cy="150" rx="19" ry="16" transform="rotate(10 163 150)" />
        </clipPath>
        <clipPath id={clipRight}>
          <ellipse cx="237" cy="150" rx="19" ry="16" transform="rotate(-10 237 150)" />
        </clipPath>
      </defs>

      {/* Sombra de apoyo */}
      <ellipse cx="200" cy="469" rx="118" ry="8" className="fill-ink" opacity="0.09" />

      {/* ───── Cola: base + punta, cada una con su propio movimiento ───── */}
      <g className="cat-tail">
        <path
          d="M 268 440 C 330 448, 390 420, 390 370 C 390 332, 376 310, 350 310"
          className="fill-none stroke-ink"
          strokeWidth="20"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* ───── Cuerpo (respira) ───── */}
      <g className="cat-breathe">
        <path
          className="fill-ink"
          d="M 152 190 L 248 190 C 270 250, 296 330, 297 410 C 298 446, 270 464, 200 464 C 130 464, 102 446, 103 410 C 104 330, 130 250, 152 190 Z"
        />
        {/* Patas delanteras */}
        <ellipse cx="166" cy="455" rx="32" ry="14" className="fill-ink" />
        <ellipse cx="234" cy="455" rx="32" ry="14" className="fill-ink" />
        <g
          fill="none"
          stroke="#34312f"
          strokeWidth="2.4"
          strokeLinecap="round"
        >
          <path d="M 200 336 L 200 448" />
          <path d="M 146 330 C 144 380, 150 420, 152 444" />
          <path d="M 254 330 C 256 380, 250 420, 248 444" />
          <path d="M 157 450 L 157 462 M 175 450 L 175 462" />
          <path d="M 225 450 L 225 462 M 243 450 L 243 462" />
        </g>
      </g>

      {/* ───── Cabeza ───── */}
      <g className="cat-head-follow">
        <g className="cat-head-bob">
          <g className="cat-head-idle">
            {/* Orejas */}
            <g className="cat-ear-l-perk">
              <g className="cat-ear-l">
                <path
                  d="M 130 128 L 124 52 L 186 92 Z"
                  className="fill-ink stroke-ink"
                  strokeWidth="10"
                  strokeLinejoin="round"
                />
                <path
                  d="M 139 112 L 135 71 L 168 94 Z"
                  className="fill-rose stroke-rose"
                  fillOpacity="0.38"
                  strokeOpacity="0.38"
                  strokeWidth="4"
                  strokeLinejoin="round"
                />
              </g>
            </g>
            <g className="cat-ear-r-perk">
              <g className="cat-ear-r">
                <path
                  d="M 270 128 L 276 52 L 214 92 Z"
                  className="fill-ink stroke-ink"
                  strokeWidth="10"
                  strokeLinejoin="round"
                />
                <path
                  d="M 261 112 L 265 71 L 232 94 Z"
                  className="fill-rose stroke-rose"
                  fillOpacity="0.38"
                  strokeOpacity="0.38"
                  strokeWidth="4"
                  strokeLinejoin="round"
                />
              </g>
            </g>

            {/* Cráneo */}
            <path
              className="fill-ink"
              d="M 122 142 C 122 98, 158 80, 200 80 C 242 80, 278 98, 278 142 C 278 190, 246 220, 200 220 C 154 220, 122 190, 122 142 Z"
            />
            {/* Hocico: un tono más claro da volumen a la silueta */}
            <ellipse cx="200" cy="184" rx="30" ry="18" fill="#262423" />

            {/* Ojos */}
            <g className="cat-blink cat-blink-l">
              <g clipPath={`url(#${clipLeft})`}>
                <ellipse
                  cx="163"
                  cy="150"
                  rx="19"
                  ry="16"
                  transform="rotate(10 163 150)"
                  className="fill-blush"
                />
                <g className="cat-look">
                  <g className="cat-glance">
                    <ellipse cx="163" cy="150" rx="5.5" ry="13" className="fill-ink" />
                    <circle cx="167" cy="144" r="3" className="fill-paper" />
                  </g>
                </g>
              </g>
            </g>
            <g className="cat-blink cat-blink-r">
              <g clipPath={`url(#${clipRight})`}>
                <ellipse
                  cx="237"
                  cy="150"
                  rx="19"
                  ry="16"
                  transform="rotate(-10 237 150)"
                  className="fill-blush"
                />
                <g className="cat-look">
                  <g className="cat-glance">
                    <ellipse cx="237" cy="150" rx="5.5" ry="13" className="fill-ink" />
                    <circle cx="241" cy="144" r="3" className="fill-paper" />
                  </g>
                </g>
              </g>
            </g>

            {/* Nariz y boca */}
            <path
              d="M 191 171 L 209 171 L 200 182 Z"
              className="fill-rose stroke-rose"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <path
              d="M 200 183 L 200 190 M 200 190 C 195 197, 186 197, 181 192 M 200 190 C 205 197, 214 197, 219 192"
              className="fill-none stroke-stone"
              strokeWidth="1.8"
              strokeLinecap="round"
              opacity="0.75"
            />

            {/* Bigotes */}
            <g
              className="cat-whiskers fill-none stroke-stone"
              strokeWidth="1.4"
              strokeLinecap="round"
              opacity="0.85"
            >
              <path d="M 158 182 L 92 170 M 156 188 L 88 190 M 160 194 L 98 212" />
              <path d="M 242 182 L 308 170 M 244 188 L 312 190 M 240 194 L 302 212" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
