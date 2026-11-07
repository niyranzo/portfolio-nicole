import { cacheLife } from "next/cache";
import { Mail } from "lucide-react";
import { site } from "@/data/site";
import type { Dictionary } from "@/lib/i18n";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

/**
 * El año se calcula dentro de una función cacheada: con Cache Components
 * no se puede leer la fecha actual durante el prerender sin declararlo.
 * Se revalida a diario, así que cambia solo al llegar enero.
 */
async function getCurrentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

const linkClass =
  "inline-flex items-center gap-2 rounded-full border border-paper/20 px-4 py-2 text-sm text-paper/80 transition-colors hover:border-rose hover:bg-rose hover:text-ink";

export async function Footer({ t }: { t: Dictionary["footer"] }) {
  const year = await getCurrentYear();

  return (
    <footer className="px-5 pb-10 pt-16 text-paper sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-md">
          <p className="font-serif text-4xl font-medium tracking-tight">
            {site.name}
          </p>
          <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-rose">
            {site.role}
          </p>
          <p className="mt-5 text-sm leading-relaxed text-paper/70">
            {t.closing}
          </p>
        </div>

        <nav aria-label={t.nav}>
          <ul className="flex flex-wrap gap-2">
            <li>
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
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
                className={linkClass}
              >
                <GithubIcon className="size-4" />
                GitHub
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className={linkClass}>
                <Mail aria-hidden="true" className="size-4" />
                {site.email}
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mx-auto mt-12 flex max-w-[1400px] flex-col gap-2 border-t border-paper/15 pt-6 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-stone sm:flex-row sm:justify-between">
        <span>
          © {year} {site.name} · {t.rights}
        </span>
        <span>{t.location}</span>
      </div>
    </footer>
  );
}
