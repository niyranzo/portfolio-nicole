import type { Dictionary } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { TechBadge } from "@/components/ui/TechBadge";
import { Reveal } from "@/components/ui/Reveal";

/** 06 · Inteligencia Artificial */
export function AIFocus({ t }: { t: Dictionary["aiFocus"] }) {
  return (
    <Section id="ia" labelledBy="ai-title" tone="dark">
      <SectionHeading id="ai-title" number={t.number} label={t.label} tone="dark">
        {t.titleA}
        <em className="text-rose">{t.titleB}</em>
      </SectionHeading>

      <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="max-w-xl text-base leading-relaxed text-paper/75 sm:text-lg">
              {t.intro}
            </p>
          </Reveal>

          <ol className="mt-10 grid gap-3 sm:grid-cols-2">
            {t.interests.map((item, i) => (
              <li key={item}>
                <Reveal delay={(i % 2) * 0.06} className="h-full">
                  <div className="flex h-full gap-4 rounded-2xl border border-paper/20 p-4 transition-colors duration-300 hover:border-rose">
                    <span className="font-mono text-xs tracking-widest text-rose">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm leading-relaxed text-paper/90">
                      {item}
                    </span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <Reveal delay={0.1} className="lg:col-span-5">
          <div className="flex h-full flex-col gap-6">
            {/* Fragmento de código ilustrativo */}
            <figure className="rounded-3xl bg-rose p-5 font-mono text-[0.72rem] leading-6 text-ink sm:p-6 sm:text-xs">
              <div
                aria-hidden="true"
                className="mb-4 flex items-center justify-between border-b border-ink/25 pb-3 text-[0.65rem] uppercase tracking-[0.16em]"
              >
                <span>{t.terminalTitle}</span>
                <span>AI</span>
              </div>
              <pre
                aria-hidden="true"
                className="overflow-x-auto whitespace-pre font-mono"
              >
                {`const stream = await model
  .generateStream(prompt);

for await (const chunk of stream) {
  appendToMessage(chunk.text);
}`}
                <span className="caret ml-0.5 inline-block h-3.5 w-1.5 translate-y-0.5 bg-ink" />
              </pre>
              <figcaption className="mt-4 border-t border-ink/25 pt-3 text-[0.65rem] leading-5 tracking-wide">
                {t.terminalNote}
              </figcaption>
            </figure>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-paper/60">
                {t.trainingLabel}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {t.training.map((item) => (
                  <li key={item}>
                    <TechBadge tone="dark">{item}</TechBadge>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Button href="#proyecto-ai-chat" variant="rose" arrow>
                {t.cta}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
