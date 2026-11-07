"use client";

import { useState } from "react";
import { projects, type Project } from "@/data/projects";
import type { Dictionary, Locale } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectDetail } from "@/components/projects/ProjectDetail";

/** 05 · Proyectos destacados */
export function Projects({
  t,
  locale,
}: {
  t: Dictionary["projects"];
  locale: Locale;
}) {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <Section id="proyectos" labelledBy="projects-title" tone="light">
      <SectionHeading id="projects-title" number={t.number} label={t.label}>
        {t.titleA}
        <em>{t.titleB}</em>
      </SectionHeading>

      <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70">
        {t.intro}
      </p>

      <ol className="mt-14 space-y-20 lg:mt-20 lg:space-y-28">
        {projects.map((project, i) => (
          <li key={project.slug}>
            <Reveal>
              <ProjectCard
                project={project}
                position={i}
                onOpen={setSelected}
                t={t}
                locale={locale}
              />
            </Reveal>
          </li>
        ))}
      </ol>

      <ProjectDetail
        project={selected}
        onClose={() => setSelected(null)}
        t={t}
        locale={locale}
      />
    </Section>
  );
}
