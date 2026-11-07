import { Mail } from "lucide-react";
import { site } from "@/data/site";
import type { Dictionary } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { ContactForm } from "./ContactForm";

const socialClass =
  "inline-flex items-center gap-2 rounded-full border border-paper/25 px-4 py-2.5 text-sm transition-colors duration-300 hover:border-rose hover:bg-rose hover:text-ink";

/** 08 · Contacto */
export function Contact({ t }: { t: Dictionary["contact"] }) {
  return (
    <Section id="contacto" labelledBy="contact-title" tone="dark">
      <SectionHeading id="contact-title" number={t.number} label={t.label} tone="dark">
        {t.titleA}
        <em className="text-rose">{t.titleB}</em>
        {t.titleC}
      </SectionHeading>

      <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-5">
          <p className="max-w-md text-base leading-relaxed text-paper/75 sm:text-lg">
            {t.availability}
          </p>

          <p className="mt-10 font-mono text-xs uppercase tracking-[0.18em] text-paper/60">
            {t.emailLabel}
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-2 inline-block break-all font-serif text-3xl font-medium tracking-tight underline decoration-rose decoration-2 underline-offset-8 transition-colors hover:text-rose sm:text-4xl"
          >
            {site.email}
          </a>

          <ul className="mt-8 flex flex-wrap gap-3">
            <li>
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={socialClass}
              >
                <LinkedinIcon className="size-4" />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={site.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={socialClass}
              >
                <GithubIcon className="size-4" />
                GitHub
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className={socialClass}>
                <Mail aria-hidden="true" className="size-4" />
                Email
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <div className="rounded-3xl bg-paper p-6 text-ink sm:p-10">
            <h3 className="mb-8 font-serif text-3xl font-medium tracking-tight">
              {t.formTitle}
            </h3>
            <ContactForm t={t} />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
