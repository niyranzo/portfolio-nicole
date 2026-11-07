import { ArrowUpRight, Check } from "lucide-react";
import { getProjectCopy, type Project } from "@/data/projects";
import type { Dictionary, Locale } from "@/lib/i18n";
import { getProjectName, getTechLabel } from "@/lib/localize";
import { Button } from "@/components/ui/Button";
import { TechBadge } from "@/components/ui/TechBadge";
import { ProjectImage } from "./ProjectImage";

interface ProjectCardProps {
  project: Project;
  /** Posición en la lista; alterna la composición izquierda/derecha. */
  position: number;
  onOpen: (project: Project) => void;
  t: Dictionary["projects"];
  locale: Locale;
}

const columnSpans: Record<
  Project["aspect"],
  { image: string; text: string }
> = {
  landscape: { image: "lg:col-span-7", text: "lg:col-span-5" },
  square: { image: "lg:col-span-6", text: "lg:col-span-6" },
  portrait: { image: "lg:col-span-5", text: "lg:col-span-7" },
};

export function linkLabel(project: Project, t: Dictionary["projects"]) {
  if (project.kind === "code") return t.viewCode;
  if (project.kind === "ai") return t.viewProject;
  return t.visitWeb;
}

/** Tarjeta editorial de proyecto: numeración, imagen, etiquetas y acciones. */
export function ProjectCard({
  project,
  position,
  onOpen,
  t,
  locale,
}: ProjectCardProps) {
  const copy = getProjectCopy(project, locale);
  const name = getProjectName(project, t);
  const reverse = position % 2 === 1;
  const featured = project.featured;

  const imageButton = (
    <button
      type="button"
      onClick={() => onOpen(project)}
      aria-haspopup="dialog"
      aria-label={`${t.viewDetail}: ${name}`}
      className="group/image relative block w-full overflow-hidden rounded-3xl text-left"
    >
      <ProjectImage
        project={project}
        t={t}
        name={name}
        sizes="(min-width: 1024px) 55vw, 100vw"
        tone={featured ? "dark" : "light"}
        className="rounded-3xl"
      />
      <span
        aria-hidden="true"
        className="absolute right-4 top-4 flex size-12 items-center justify-center rounded-full bg-rose text-ink opacity-100 transition-transform duration-300 group-hover/image:scale-110 group-hover/image:-rotate-12 lg:opacity-0 lg:group-hover/image:opacity-100"
      >
        <ArrowUpRight className="size-5" />
      </span>
    </button>
  );

  const text = (
    <div className="flex flex-col justify-center">
      <div className="flex items-baseline gap-4">
        <span
          aria-hidden="true"
          className={`font-serif text-6xl font-medium leading-none sm:text-7xl ${
            featured ? "text-rose" : "text-ink/25"
          }`}
        >
          {project.number}
        </span>
        <p
          className={`font-mono text-[0.7rem] uppercase leading-5 tracking-[0.16em] ${
            featured ? "text-paper/70" : "text-ink/60"
          }`}
        >
          {featured && (
            <span className="mb-1 block text-rose">{t.featuredLabel}</span>
          )}
          {copy.category}
        </p>
      </div>

      <h3 className="mt-6 font-serif text-4xl font-medium leading-[1.02] tracking-tight text-balance sm:text-5xl">
        {name}
      </h3>

      <p
        className={`mt-4 max-w-md text-base leading-relaxed ${
          featured ? "text-paper/75" : "text-ink/70"
        }`}
      >
        {copy.description}
      </p>

      {featured && copy.features && (
        <ul className="mt-6 grid gap-x-6 gap-y-2 text-sm text-paper/85 sm:grid-cols-2">
          {copy.features.map((f) => (
            <li key={f} className="flex gap-2">
              <Check
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 text-rose"
              />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      )}

      <ul className="mt-6 flex flex-wrap gap-2" aria-label={t.technologies}>
        {project.technologies.map((tech) => (
          <li key={tech}>
            <TechBadge tone={featured ? "dark" : "light"}>
              {getTechLabel(tech, t)}
            </TechBadge>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button
          variant={featured ? "rose" : "solid"}
          onClick={() => onOpen(project)}
          ariaHasPopup="dialog"
        >
          {t.viewDetail}
        </Button>
        {project.url ? (
          <Button
            href={project.url}
            variant={featured ? "paper" : "outline"}
            arrow
          >
            {linkLabel(project, t)}
          </Button>
        ) : (
          <Button variant="outline" disabled>
            {t.linkSoon}
          </Button>
        )}
      </div>
    </div>
  );

  // Composición asimétrica: el reparto de columnas depende de la proporción
  // de la imagen y el lado de la imagen alterna entre proyectos.
  const spans = columnSpans[project.aspect];
  const body = (
    <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
      <div className={`${spans.image} ${reverse ? "lg:order-2" : ""}`}>
        {imageButton}
      </div>
      <div className={`${spans.text} ${reverse ? "lg:order-1" : ""}`}>
        {text}
      </div>
    </div>
  );

  return (
    <article
      id={`proyecto-${project.slug}`}
      className={`scroll-mt-24 ${
        featured
          ? "rounded-[1.75rem] bg-ink p-5 text-paper sm:rounded-[2.25rem] sm:p-10"
          : ""
      }`}
    >
      {body}
    </article>
  );
}
