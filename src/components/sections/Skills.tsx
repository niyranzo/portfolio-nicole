import { skillCategories, type SkillCategory } from "@/data/skills";
import type { Dictionary, Locale } from "@/lib/i18n";
import { localize } from "@/lib/localize";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";
import { Reveal } from "@/components/ui/Reveal";

/** Distribución asimétrica en cuadrícula de 12 columnas (escritorio). */
const spans: Record<SkillCategory["id"], string> = {
  frontend: "lg:col-span-7",
  backend: "lg:col-span-5",
  databases: "lg:col-span-5",
  ai: "lg:col-span-7",
  tools: "lg:col-span-12",
};

/** 04 · Tecnologías */
export function Skills({
  t,
  locale,
}: {
  t: Dictionary["skills"];
  locale: Locale;
}) {
  return (
    <Section id="tecnologias" labelledBy="skills-title" tone="dark">
      <SectionHeading id="skills-title" number={t.number} label={t.label} tone="dark">
        {t.titleA}
        <em className="text-rose">{t.titleB}</em>
      </SectionHeading>

      <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/70">
        {t.intro}
      </p>

      <ul className="mt-12 grid gap-3 lg:mt-16 lg:grid-cols-12">
        {skillCategories.map((cat, i) => {
          const isAI = cat.id === "ai";
          return (
            <li key={cat.id} className={spans[cat.id]}>
              <Reveal delay={(i % 2) * 0.08} className="h-full">
                <article
                  className={`relative flex h-full flex-col rounded-3xl p-6 sm:p-8 ${
                    isAI
                      ? "bg-rose text-ink"
                      : "border border-paper/25 text-paper"
                  }`}
                >
                  <header className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
                      {cat.label}
                    </h3>
                    <span
                      className={`shrink-0 font-mono text-xs tracking-widest ${
                        isAI ? "text-ink/70" : "text-stone"
                      }`}
                    >
                      {cat.index}
                    </span>
                  </header>

                  {isAI && (
                    <p className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-ink/40 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.16em]">
                      <span
                        aria-hidden="true"
                        className="pulse-line size-1.5 rounded-full bg-ink"
                      />
                      {t.aiTag}
                    </p>
                  )}

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {cat.items.map((item) => {
                      const label = localize(item, locale);
                      return (
                        <li key={label}>
                          <TechBadge tone={isAI ? "rose" : "dark"}>{label}</TechBadge>
                        </li>
                      );
                    })}
                  </ul>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
