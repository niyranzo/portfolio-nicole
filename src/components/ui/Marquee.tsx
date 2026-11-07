interface MarqueeProps {
  items: string[];
  tone?: "light" | "dark";
}

/**
 * Cinta de texto en bucle (como la de la referencia).
 * Decorativa: se oculta a lectores de pantalla y se detiene con `prefers-reduced-motion`.
 */
export function Marquee({ items, tone = "light" }: MarqueeProps) {
  const border = tone === "light" ? "border-ink/15" : "border-paper/15";
  const loop = [...items, ...items];

  return (
    <div
      aria-hidden="true"
      className={`overflow-hidden border-t py-4 font-mono text-[0.7rem] uppercase tracking-[0.2em] ${border}`}
    >
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex gap-10">
            {loop.map((item, i) => (
              <span key={`${copy}-${i}`} className="flex items-center gap-10">
                {item}
                <span className="size-1 rounded-full bg-rose" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
