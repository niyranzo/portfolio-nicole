import type { Dictionary } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";
import { Reveal } from "@/components/ui/Reveal";

/** 03 · Experiencia (timeline editorial) */
export function Experience({ t }: { t: Dictionary["experience"] }) {
  return (
    <Section id="experiencia" labelledBy="experience-title" tone="light">
      <SectionHeading id="experience-title" number={t.number} label={t.label}>
        {t.titleA}
        <em>{t.titleB}</em>
      </SectionHeading>

      <ol className="relative mt-14 lg:mt-20">
        {/* Línea de tiempo */}
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-[0.4rem] top-2 w-px bg-ink/20 lg:left-[calc(33.333%-0.6rem)]"
        />

        {t.entries.map((entry) => (
          <li
            key={entry.company}
            className="relative grid gap-6 pl-8 lg:grid-cols-12 lg:gap-10 lg:pl-0"
          >
            <span
              aria-hidden="true"
              className="absolute left-0 top-2 size-[0.85rem] rounded-full border border-ink bg-rose lg:left-[calc(33.333%-1.05rem)]"
            />

            <Reveal className="lg:col-span-4 lg:pr-12">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink/60">
                {entry.period}
              </p>
              <h3 className="mt-4 font-serif text-4xl font-medium leading-none tracking-tight sm:text-5xl">
                {entry.company}
              </h3>
              <p className="mt-3 inline-block bg-blush px-3 py-1 font-serif text-xl italic">
                {entry.role}
              </p>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-8 lg:pl-8">
              <ul className="space-y-4 border-t border-ink/15 pt-6">
                {entry.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="grid grid-cols-[2.25rem_1fr] gap-2 text-base leading-relaxed text-ink/80"
                  >
                    <span className="pt-1 font-mono text-xs text-ink/50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 font-mono text-xs uppercase tracking-[0.18em] text-ink/60">
                {t.stackLabel}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {entry.technologies.map((tech) => (
                  <li key={tech}>
                    <TechBadge tone="light">{tech}</TechBadge>
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
