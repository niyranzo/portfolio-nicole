import { ArrowDown, DownloadIcon } from "lucide-react";
import { site } from "@/data/site";
import type { Dictionary } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Marquee } from "@/components/ui/Marquee";
import { FadeUp } from "@/components/ui/FadeUp";
import { Cat } from "@/components/ui/Cat";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

const socialClass =
  "inline-flex size-11 items-center justify-center rounded-full border border-ink/30 transition-colors duration-300 hover:border-rose hover:bg-rose";

/** 01 · Presentación */
export function Hero({ t }: { t: Dictionary["hero"] }) {
  return (
    <Section
      id="inicio"
      labelledBy="hero-title"
      tone="light"
      className="pb-0 pt-28 sm:pb-10 sm:pt-16 sm:mt-15 "
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Titular */}
        <div className="lg:col-span-8 xl:col-span-7">
          <FadeUp>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs uppercase tracking-[0.18em] text-ink/70">
              <span>{t.eyebrow}</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-3 py-1">
                <span
                  aria-hidden="true"
                  className="pulse-line size-1.5 rounded-full bg-sage"
                />
                {t.availability}
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <p className="mt-8 font-serif text-3xl font-medium tracking-tight sm:text-4xl">
              {t.name}
            </p>
            <h1
              id="hero-title"
              className="mt-2 font-serif text-[3.5rem] font-semibold leading-[0.88] tracking-tight sm:text-8xl lg:text-[8.5rem] xl:text-[10rem]"
            >
              <span className="sr-only">{site.name} — </span>
              <span className="block">{t.headlineA}</span>
              <span className="relative mt-1 inline-block bg-blush px-3 italic sm:px-5">
                {t.headlineB}
                {/* Tiradores de selección, guiño a la referencia */}
                <span
                  aria-hidden="true"
                  className="absolute -left-1 -top-1 size-2 border border-ink bg-paper"
                />
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 -right-1 size-2 border border-ink bg-paper"
                />
              </span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.16}>
            <p className="mt-10 max-w-xl font-serif text-2xl italic leading-snug text-ink sm:text-3xl">
              {t.tagline}
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/70">
              {t.intro}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="#proyectos" variant="solid" arrow>
                {t.ctaProjects}
              </Button>
              <Button href="#contacto" variant="outline">
                {t.ctaContact}
              </Button>
              <span aria-hidden="true" className="mx-1 hidden h-6 w-px bg-ink/20 sm:block" />
              <a
                href={site.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.social.github}
                className={socialClass}
              >
                <GithubIcon className="size-5" />
              </a>
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.social.linkedin}
                className={socialClass}
              >
                <LinkedinIcon className="size-5" />
              </a>
              <a
                href="/cv/Nicole_Yranzo_CV.pdf"
                download="Nicole_Yranzo_CV.pdf"
                aria-label="Descargar CV"
                className={`${socialClass} !w-auto gap-2 px-4`}
              >
                <DownloadIcon className="size-4" />
                <span className="text-sm font-medium">Descargar CV</span>
              </a>
            </div>
          </FadeUp>
        </div>

        {/* Personaje ilustrado: gato SVG animado + sello giratorio */}
        <FadeUp
          delay={0.24}
          className="relative lg:col-span-4 lg:self-end xl:col-span-5"
        >
          {/* En portátil el gato invade un poco el margen para ganar presencia */}
          <div className="mx-auto w-full max-w-[16rem] sm:max-w-[20rem] lg:-ml-4 lg:-mr-10 lg:w-auto lg:max-w-none xl:mx-0">
            <Cat label={t.catAlt} className="block h-auto w-full" />
          </div>

        </FadeUp>
      </div>
    </Section>
  );
}
