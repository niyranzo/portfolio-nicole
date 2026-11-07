"use client";

import { useEffect, useRef, useState } from "react";
import { Check, X } from "lucide-react";
import { getProjectCopy, type Project } from "@/data/projects";
import type { Dictionary, Locale } from "@/lib/i18n";
import { getProjectName, getTechLabel } from "@/lib/localize";
import { Button } from "@/components/ui/Button";
import { TechBadge } from "@/components/ui/TechBadge";
import { ProjectImage } from "./ProjectImage";
import { linkLabel } from "./ProjectCard";

interface ProjectDetailProps {
  project: Project | null;
  onClose: () => void;
  t: Dictionary["projects"];
  locale: Locale;
}

/**
 * Ficha ampliada de un proyecto en un <dialog> nativo:
 * foco atrapado, cierre con Escape y devolución del foco al cerrar, sin dependencias.
 */
export function ProjectDetail({
  project,
  onClose,
  t,
  locale,
}: ProjectDetailProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
  }, [project]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => {
        // Clic en el fondo (backdrop) = cerrar
        if (e.target === ref.current) ref.current?.close();
      }}
      aria-labelledby={project ? `detalle-${project.slug}` : undefined}
      className="m-auto max-h-[92dvh] w-[min(68rem,calc(100%-1.5rem))] overflow-hidden rounded-[1.75rem] bg-paper p-0 text-ink sm:rounded-[2.25rem]"
    >
      {project && (
        <DetailBody
          key={project.slug}
          project={project}
          onClose={() => ref.current?.close()}
          t={t}
          locale={locale}
        />
      )}
    </dialog>
  );
}

function DetailBody({
  project,
  onClose,
  t,
  locale,
}: {
  project: Project;
  onClose: () => void;
  t: Dictionary["projects"];
  locale: Locale;
}) {
  const copy = getProjectCopy(project, locale);
  const name = getProjectName(project, t);
  const [current, setCurrent] = useState(0);
  const blocks = [
    { label: t.problem, text: copy.problem },
    { label: t.solution, text: copy.solution },
    { label: t.result, text: copy.result },
  ].filter((b): b is { label: string; text: string } => Boolean(b.text));

  return (
    <div className="max-h-[92dvh] overflow-y-auto">
      <div className="sticky top-0 z-10 flex justify-end p-3 sm:p-4">
        <button
          type="button"
          onClick={onClose}
          aria-label={t.close}
          className="inline-flex size-11 items-center justify-center rounded-full border border-ink/25 bg-paper transition-colors hover:border-rose hover:bg-rose"
        >
          <X aria-hidden="true" className="size-5" />
        </button>
      </div>

      <div className="-mt-14 grid gap-8 px-5 pb-8 pt-14 sm:px-8 sm:pb-10 md:grid-cols-12 md:gap-10 md:pt-4">
        {/* Imagen / galería */}
        <div className="md:col-span-6">
          <div className="overflow-hidden rounded-3xl">
            <ProjectImage
              project={project}
              t={t}
              name={name}
              index={current}
              aspect="landscape"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>

          {project.images.length > 1 && (
            <ul
              aria-label={t.gallery}
              className="mt-3 grid grid-cols-4 gap-2"
            >
              {project.images.map((img, i) => (
                <li key={img.src}>
                  <button
                    type="button"
                    onClick={() => setCurrent(i)}
                    aria-label={`${t.imageOf} ${i + 1}`}
                    aria-current={i === current}
                    className={`block w-full overflow-hidden rounded-xl border-2 transition-colors ${
                      i === current ? "border-rose" : "border-transparent"
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt=""
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Información */}
        <div className="md:col-span-6">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink/60">
            <span aria-hidden="true">{project.number} · </span>
            {copy.category}
          </p>
          <h3
            id={`detalle-${project.slug}`}
            className="mt-3 font-serif text-4xl font-medium leading-[1.02] tracking-tight text-balance sm:text-5xl"
          >
            {name}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-ink/75">
            {copy.description}
          </p>

          {blocks.length > 0 && (
            <dl className="mt-6 divide-y divide-ink/15 border-y border-ink/15">
              {blocks.map((b) => (
                <div
                  key={b.label}
                  className="grid gap-1 py-4 sm:grid-cols-[7rem_1fr] sm:gap-4"
                >
                  <dt className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink/60">
                    {b.label}
                  </dt>
                  <dd className="text-sm leading-relaxed">{b.text}</dd>
                </div>
              ))}
            </dl>
          )}

          {copy.features && (
            <div className="mt-6">
              <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink/60">
                {t.features}
              </h4>
              <ul className="mt-3 space-y-2 text-sm">
                {copy.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 text-ink"
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <h4 className="mt-6 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink/60">
            {t.technologies}
          </h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li key={tech}>
                <TechBadge tone="light">{getTechLabel(tech, t)}</TechBadge>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.url ? (
              <Button href={project.url} variant="solid" arrow>
                {linkLabel(project, t)}
              </Button>
            ) : (
              <Button variant="outline" disabled>
                {t.linkSoon}
              </Button>
            )}
            <Button variant="outline" onClick={onClose}>
              {t.close}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
