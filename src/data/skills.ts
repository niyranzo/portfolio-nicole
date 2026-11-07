/**
 * Habilidades técnicas por categoría (fuente: CV).
 * Sin porcentajes ni barras de nivel: solo lo que se conoce y se ha usado.
 *
 * Cada elemento puede ser un texto único ("React") o uno por idioma
 * ({ es: "...", en: "..." }). Los nombres de marcas y tecnologías no se traducen.
 */
import type { Localized } from "@/lib/localize";

export interface SkillCategory {
  id: "frontend" | "backend" | "databases" | "ai" | "tools";
  index: string;
  label: string;
  items: Localized[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    index: "A",
    label: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Angular",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    id: "backend",
    index: "B",
    label: "Backend",
    items: ["Node.js", "Express", { es: "APIs REST", en: "REST APIs" }],
  },
  {
    id: "databases",
    index: "C",
    label: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "SQL / NoSQL"],
  },
  {
    id: "ai",
    index: "D",
    label: "Artificial Intelligence",
    items: [
      {
        es: "Integración de modelos de IA vía API",
        en: "AI model integration via API",
      },
      "Google Gemini",
      "OpenAI API",
      "Chatbots",
      { es: "Streaming de respuestas", en: "Response streaming" },
      "Prompt Engineering",
      { es: "IA en aplicaciones web", en: "AI in web applications" },
    ],
  },
  {
    id: "tools",
    index: "E",
    label: "Tools & Workflow",
    items: [{ es: "Git y GitHub", en: "Git and GitHub" }, "Docker", "Jira", "NPM", "Agile", "Scrum"],
  },
];
