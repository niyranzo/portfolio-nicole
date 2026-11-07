
/**
 * Portfolio projects.
 *
 * Editing:
 * - Text: inside copy.es and copy.en.
 * - Images: add files to public/images/projects/ and update images.
 * - Links: url (null = link coming soon).
 */

export type Locale = "es" | "en";

export type ProjectKind = "web" | "code" | "ai";

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectCopy {
  category: string;
  description: string;
  problem?: string;
  solution?: string;
  result?: string;
  /** Implemented features (only when detailed by the project). */
  features?: string[];
}

export interface Project {
  slug: string;
  number: string;
  name: string;
  kind: ProjectKind;
  technologies: string[];
  /** Website or repository link. null = not available yet. */
  url: string | null;
  /** Image paths in /public (empty = placeholder). */
  images: ProjectImage[];
  /** Suggested path to replace the placeholder. */
  imageHint: string;
  /** Image aspect ratio for asymmetric layouts. */
  aspect: "landscape" | "square" | "portrait";
  featured?: boolean;
  copy: Record<"es", ProjectCopy> &
    Partial<Record<"en", ProjectCopy>>;
}

export const projects: Project[] = [
  {
    slug: "isabel-restaurante",
    number: "01",
    name: "Web para restaurante en Nerja",
    kind: "web",
    technologies: ["HTML", "Tailwind CSS", "JavaScript"],
    url: "https://isabelrestaurante.netlify.app/",
    images: [
      {
        src: "/images/projects/isabel.png",
        alt: "Imagen del proyecto Isabel",
      },
    ],
    imageHint: "/images/projects/isabel.png",
    aspect: "landscape",
    copy: {
      es: {
        category: "Restaurante · Negocio local",
        description:
          "Desarrollo de una web orientada a mejorar la presencia online y facilitar la captación de clientes.",
        problem:
          "El negocio no tenía presencia online ni generaba reservas desde internet.",
        solution:
          "Web responsive optimizada para SEO local y experiencia de usuario.",
        result:
          "Base digital preparada para aumentar la visibilidad y captar clientes.",
      },
      en: {
        category: "Restaurant · Local Business",
        description:
          "Website development focused on improving online presence and helping attract new customers.",
        problem:
          "The business had no online presence or way to generate reservations online.",
        solution:
          "Responsive website optimised for local SEO and user experience.",
        result:
          "A digital foundation designed to increase visibility and attract customers.",
      },
    },
  },

  {
    slug: "casa-todah",
    number: "02",
    name: "Web publicitaria Método Zenner",
    kind: "web",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Contenido visual",
    ],
    url: "https://www.metodozenner.com/",
    images: [
      {
        src: "/images/projects/zenner.png",
        alt: "Imagen del proyecto Método Zenner",
      },
    ],
    imageHint: "/images/projects/zenner.png",
    aspect: "portrait",
    copy: {
      es: {
        category: "Curso online IA · Negocio digital",
        description:
          "Desarrollo de una landing para mejorar la presencia online y ventas de su curso.",
        problem: "No tenía una web propia.",
        solution:
          "Web promocionando tanto el curso como su marca propia.",
        result:
          "Base digital preparada para aumentar la visibilidad y captar clientes.",
      },
      en: {
        category: "Online AI Course · Digital Business",
        description:
          "Landing page development aimed at improving online presence and increasing course sales.",
        problem:
          "The business did not have its own website.",
        solution:
          "Website promoting both the course and its personal brand.",
        result:
          "A digital foundation designed to increase visibility and attract customers.",
      },
    },
  },

  {
    slug: "qivet",
    number: "03",
    name: "QIVET · Sistema veterinario",
    kind: "code",
    technologies: ["Node.js", "MongoDB", "PostgreSQL", "React"],
    url: "https://github.com/niyranzo/qivetProyectoFinal",
    images: [
      {
        src: "/images/projects/qivet.png",
        alt: "Imagen del proyecto QIVET",
      },
    ],
    imageHint: "/images/projects/qivet.png",
    aspect: "square",
    copy: {
      es: {
        category: "Aplicación Full-Stack · Clínica veterinaria",
        description:
          "Sistema para optimizar la gestión de clínicas veterinarias.",
        problem: "Gestión manual ineficiente.",
        solution:
          "Sistema de gestión con funcionalidades CRUD para administrar clientes, citas y consultas veterinarias.",
        result:
          "Mejora organizativa y optimización de la gestión diaria.",
      },
      en: {
        category: "Full-Stack Application · Veterinary Clinic",
        description:
          "A system designed to streamline veterinary clinic management.",
        problem:
          "Inefficient manual management processes.",
        solution:
          "Management system featuring CRUD functionality to handle clients, appointments and veterinary consultations.",
        result:
          "Improved organisation and more efficient day-to-day management.",
      },
    },
  },

  {
    slug: "neopc-admin",
    number: "04",
    name: "NeoPc Admin",
    kind: "code",
    technologies: ["Electron", "SQLite"],
    url: null,
    images: [
      {
        src: "/images/projects/neopc.jpg",
        alt: "Imagen del proyecto NeoPc Admin",
      },
    ],
    imageHint: "/images/projects/neopc.jpg",
    aspect: "landscape",
    copy: {
      es: {
        category: "Aplicación de escritorio · Gestión de usuarios",
        description:
          "Aplicación para gestionar usuarios y suscripciones.",
        problem: "Errores derivados de la gestión manual.",
        solution:
          "Sistema automatizado para optimizar los procesos de gestión.",
        result: "Procesos más organizados y eficientes.",
      },
      en: {
        category: "Desktop Application · User Management",
        description:
          "Desktop application for managing users and subscriptions.",
        problem:
          "Errors caused by manual management processes.",
        solution:
          "Automated system designed to streamline management processes.",
        result:
          "More organised and efficient workflows.",
      },
    },
  },

  {
    slug: "ai-chat",
    number: "05",
    name: "AI Chat",
    kind: "ai",
    technologies: [
      "Next.js",
      "TypeScript",
      "Google Gemini API",
      "OpenAI API",
    ],
    url: "https://github.com/niyranzo/ai-chat-nextjs",
    images: [
      {
        src: "/images/projects/chat.png",
        alt: "Imagen del proyecto AI Chat",
      },
    ],
    imageHint: "/images/projects/chat.png",
    aspect: "landscape",
    featured: true,
    copy: {
      es: {
        category: "Inteligencia Artificial · Aplicación web",
        description:
          "Desarrollo de una aplicación de chat que permite interactuar con modelos de Inteligencia Artificial desde una interfaz web propia.",
        features: [
          "Integración con APIs de modelos de IA",
          "Integración de Google Gemini",
          "Integración de OpenAI",
          "Comunicación entre frontend y backend",
          "Generación de respuestas mediante streaming",
          "Visualización progresiva de las respuestas del modelo",
          "Interfaz de conversación interactiva",
        ],
      },
      en: {
        category: "Artificial Intelligence · Web Application",
        description:
          "Development of a chat application that allows users to interact with Artificial Intelligence models through a custom web interface.",
        features: [
          "Integration with AI model APIs",
          "Google Gemini integration",
          "OpenAI integration",
          "Frontend and backend communication",
          "Streaming response generation",
          "Progressive display of model responses",
          "Interactive conversational interface",
        ],
      },
    },
  },
];

/**
 * Returns project content in the requested language,
 * falling back to Spanish when a translation is unavailable.
 */
export function getProjectCopy(
  project: Project,
  locale: Locale = "es",
): ProjectCopy {
  return project.copy[locale] ?? project.copy.es;
}
