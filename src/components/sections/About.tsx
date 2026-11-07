import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { site } from "@/data/site";
import type { Dictionary } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/** 02 · Sobre mí */
export function About({ t }: { t: Dictionary["about"] }) {
  return (
    <Section id="sobre-mi" labelledBy="about-title" tone="dark">
      <SectionHeading id="about-title" number={t.number} label={t.label} tone="dark">
        {t.titleA}
        <em className="text-rose">{t.titleB}</em>
      </SectionHeading>

      <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-10">
        {/* Fotografía */}
        <Reveal className="lg:col-span-4">
          <figure className="relative mx-auto max-w-sm lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-rose">
              {site.profilePhoto ? (
                <Image
                  src={site.profilePhoto}
                  alt={t.photoAlt}
                  fill
                  sizes="(min-width: 1024px) 28vw, (min-width: 640px) 384px, 90vw"
                  className="object-cover"
                />
              ) : (
                <div className="flex size-full flex-col items-center justify-center gap-3 border-2 border-dashed border-ink/40 p-6 text-center text-ink">
                  <ImageIcon aria-hidden="true" className="size-8" />
                  <p className="font-serif text-2xl">{t.photoPlaceholder}</p>
                  <p className="font-mono text-[0.65rem] uppercase leading-5 tracking-wider">
                    {t.photoPlaceholderHint}
                  </p>
                </div>
              )}
            </div>
            <figcaption className="absolute -bottom-4 right-4 rounded-full border border-paper/20 bg-ink px-4 py-2 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-paper sm:-right-4">
              {t.photoCaption}
            </figcaption>
          </figure>
        </Reveal>

        {/* Texto y módulos */}
        <div className="lg:col-span-8">
          <div className="max-w-2xl space-y-5 text-base leading-relaxed text-paper/80 sm:text-lg">
            {t.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <ul className="mt-12 grid gap-3 sm:grid-cols-2">
            {t.modules.map((m, i) => (
              <li key={m.number}>
                <Reveal delay={i * 0.06} className="h-full">
                  <div
                    className={`group flex h-full min-h-40 flex-col justify-between rounded-3xl border p-5 transition-colors duration-300 ${
                      i === 1
                        ? "border-transparent bg-paper text-ink hover:bg-rose"
                        : "border-paper/25 hover:border-rose"
                    }`}
                  >
                    <span className="font-mono text-xs tracking-widest opacity-70">
                      {m.number}
                    </span>
                    <div>
                      <h3 className="font-serif text-3xl font-medium">
                        {m.title}
                      </h3>
                      <p
                        className={`mt-1 text-sm leading-relaxed ${
                          i === 1 ? "text-ink/75" : "text-paper/70"
                        }`}
                      >
                        {m.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
