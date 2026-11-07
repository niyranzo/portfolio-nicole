"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import type { Dictionary, Locale } from "@/lib/i18n";

interface NavbarProps {
  t: Dictionary["nav"];
  locale: Locale;
}

const LANGUAGES: readonly Locale[] = ["es", "en"];

/**
 * Selector de idioma ES | EN. Al cambiar, conserva la sección en la que está
 * la persona (las anclas son iguales en ambos idiomas).
 */
function LanguageSwitch({
  t,
  locale,
  hash,
}: NavbarProps & { hash: string }) {
  return (
    <div
      role="group"
      aria-label={t.language.label}
      className="flex items-center rounded-full border border-paper/25 p-0.5 font-mono text-xs uppercase tracking-widest"
    >
      {LANGUAGES.map((code) =>
        code === locale ? (
          <span
            key={code}
            lang={code}
            aria-current="true"
            className="rounded-full bg-rose px-2.5 py-1.5 text-ink"
          >
            <span aria-hidden="true">{code}</span>
            <span className="sr-only">{t.language[code]}</span>
          </span>
        ) : (
          <Link
            key={code}
            href={`/${code}${hash}`}
            hrefLang={code}
            lang={code}
            aria-label={t.language[code]}
            className="rounded-full px-2.5 py-1.5 text-paper/75 transition-colors duration-300 hover:text-rose"
          >
            {code}
          </Link>
        ),
      )}
    </div>
  );
}

/** Navegación fija en forma de píldora. Marca la sección activa y se pliega en móvil. */
export function Navbar({ t, locale }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#inicio");

  // Sección activa según el scroll
  useEffect(() => {
    const ids = t.links.map((l) => l.href.slice(1));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [t.links]);

  // Cerrar el menú móvil con Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-4">
      <nav
        aria-label={t.ariaLabel}
        className={`relative w-full max-w-4xl border border-paper/20 bg-ink px-2 py-2 text-paper ${
          open ? "rounded-[2rem]" : "rounded-full"
        }`}
      >
        <div className="flex items-center justify-center gap-2">

          {/* Escritorio */}
          <ul className="hidden items-center gap-1 md:flex">
            {t.links.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "location" : undefined}
                    className={`rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                      isActive
                        ? "bg-rose text-ink"
                        : "text-paper/75 hover:text-rose"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <LanguageSwitch t={t} locale={locale} hash={active} />

            {/* Móvil */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-movil"
              aria-label={open ? t.menuClose : t.menuOpen}
              className="inline-flex size-10 items-center justify-center rounded-full border border-paper/30 transition-colors hover:border-rose hover:text-rose md:hidden"
            >
              {open ? (
                <X aria-hidden="true" className="size-5" />
              ) : (
                <Menu aria-hidden="true" className="size-5" />
              )}
            </button>
          </div>
        </div>

        {open && (
          <ul
            id="menu-movil"
                className="mt-3 grid gap-1 border-t border-paper/15 px-2 pb-3 pt-4 md:hidden"
          >
            {t.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active === link.href ? "location" : undefined}
                  className={`block rounded-2xl px-4 py-3 font-serif text-2xl ${
                    active === link.href ? "bg-rose text-ink" : "text-paper"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
