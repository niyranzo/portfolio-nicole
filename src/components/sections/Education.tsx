import type { Dictionary } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/** 07 · Formación (compacta) */
export function Education({ t }: { t: Dictionary["education"] }) {
  return (
    <Section id="formacion" labelledBy="education-title" tone="light">
      <SectionHeading id="education-title" number={t.number} label={t.label}>
        {t.titleA}
        <em>{t.titleB}</em>
      </SectionHeading>

      <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-12">
        {/* Titulaciones */}
        <Reveal className="lg:col-span-7">
          <ul className="divide-y divide-ink/15 border-y border-ink/15">
            {t.degrees.map((d) => (
              <li
                key={d.title}
                className="grid gap-2 py-6 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6"
              >
                <div>
                  <h3 className="font-serif text-3xl font-medium leading-tight tracking-tight">
                    {d.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink/70">{d.place}</p>
                </div>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink/60">
                  {d.period}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Cursos e idiomas */}
        <Reveal delay={0.1} className="lg:col-span-5">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink/60">
            {t.coursesLabel}
          </p>
          <ul className="mt-4 grid gap-3">
            {t.courses.map((c, i) => (
              <li
                key={c.title}
                className={`rounded-2xl border p-5 ${
                  i === 0 ? "border-transparent bg-blush" : "border-ink/20"
                }`}
              >
                <h3 className="font-serif text-2xl font-medium leading-tight">
                  {c.title}
                </h3>
                <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink/70">
                  {c.place} · {c.detail}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-4 text-sm text-ink/70">{t.extra}</p>

          <div className="mt-8 border-t border-ink/15 pt-5">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink/60">
              {t.languageLabel}
            </p>
            <p className="mt-2 text-sm">{t.language}</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
