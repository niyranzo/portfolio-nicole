/**
 * Textos del sitio en español (idioma principal).
 *
 * La versión en inglés está en `dictionary.en.ts` y debe tener exactamente las
 * mismas claves (TypeScript avisa si falta alguna). Ambas se registran en `src/lib/i18n.ts`.
 */
export const es = {
  nav: {
    brand: "NY",
    brandAria: "Nicole Yranzo — Inicio",
    skip: "Saltar al contenido",
    language: { label: "Idioma", es: "Español", en: "English" },
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
    ariaLabel: "Navegación principal",
    links: [
      { label: "Inicio", href: "#inicio" },
      { label: "Sobre mí", href: "#sobre-mi" },
      { label: "Experiencia", href: "#experiencia" },
      { label: "Proyectos", href: "#proyectos" },
      { label: "IA", href: "#ia" },
      { label: "Contacto", href: "#contacto" },
    ],
    cta: "Contactar",
  },

  hero: {
    eyebrow: "Portfolio · Granada, España",
    name: "Nicole Yranzo",
    headlineA: "Full-Stack",
    headlineB: "Developer",
    tagline: "Del desarrollo web a las aplicaciones inteligentes.",
    intro:
      "Desarrollo productos web completos, del frontend a la base de datos, y estoy orientando mi carrera hacia la integración de modelos de Inteligencia Artificial en aplicaciones reales.",
    ctaProjects: "Explorar proyectos",
    ctaContact: "Contactar",
    availability: "Disponibilidad inmediata",
    badge: "Ver proyectos",
    catAlt:
      "Ilustración de un gato negro sentado que sigue el cursor con la mirada",
    marquee: [
      "Full-Stack Developer",
      "React",
      "Next.js",
      "Node.js",
      "Inteligencia Artificial",
      "Google Gemini",
      "OpenAI",
      "APIs REST",
    ],
    social: { github: "GitHub", linkedin: "LinkedIn" },
    cv: {
      label: "Descargar CV",
      file: "/cv/Nicole_Yranzo_CV.pdf",
      fileName: "Nicole_Yranzo_CV.pdf",
    },
  },

  about: {
    number: "02",
    label: "Sobre mí",
    titleA: "Del código de siempre a las ",
    titleB: "aplicaciones inteligentes",
    paragraphs: [
      "Soy Nicole, desarrolladora web Full-Stack de Granada. Me formé en Desarrollo de Aplicaciones Web y trabajo en los dos lados de la pantalla: interfaces con React y Angular, y APIs REST con Node.js conectadas a bases de datos SQL y NoSQL.",
      "En Cubicup Design Home trabajé en un equipo Agile/Scrum, y allí he visto de cerca que un producto se sostiene con colaboración, mantenimiento y mejora continua, no solo con código que funciona.",
      "Ahora mi curiosidad apunta a la Inteligencia Artificial: integrar modelos como Gemini u OpenAI mediante APIs, construir chatbots con respuestas en streaming y llevar esa capa inteligente a aplicaciones web completas. Sigo aprendiendo, y busco un entorno orientado a producto y transformación digital donde seguir creciendo.",
    ],
    photoAlt: "Fotografía de Nicole Yranzo",
    photoPlaceholder: "Tu foto aquí",
    photoPlaceholderHint: "Guárdala en public/images/profile/ y actualiza site.ts",
    photoCaption: "Granada, España",
    modules: [
      {
        number: "01",
        title: "Full-Stack",
        text: "React, Angular y Node.js: de la interfaz a la API.",
      },
      {
        number: "02",
        title: "DAW",
        text: "FP en Desarrollo de Aplicaciones Web (2023–2025).",
      },
      {
        number: "03",
        title: "IA",
        text: "Gemini, OpenAI, prompting y chatbots con streaming.",
      },
      {
        number: "04",
        title: "Aprender",
        text: "Cursos de IA y Prompting y de Analista de Datos con IA.",
      },
    ],
  },

  experience: {
    number: "03",
    label: "Experiencia",
    titleA: "Dónde he ",
    titleB: "construido",
    entries: [
      {
        company: "Cubicup Design Home",
        role: "Desarrolladora Full-Stack",
        period: "Marzo 2025 — Junio 2025",
        technologies: [
          "Angular",
          "Node.js",
          "MongoDB",
          "APIs REST",
          "Jira",
          "GitHub",
          "Docker",
        ],
        bullets: [
          "Desarrollo de nuevas funcionalidades Full-Stack para una plataforma web corporativa con Angular, Node.js y MongoDB.",
          "Implementación de APIs REST para la gestión e integración de datos entre frontend y backend.",
          "Optimización de consultas y estructuras de datos en MongoDB.",
          "Trabajo en entorno Agile/Scrum con Jira, GitHub y Docker.",
          "Colaboración con otros desarrolladores en mantenimiento, testing y mejora continua.",
        ],
      },
    ],
    stackLabel: "Tecnologías",
  },

  skills: {
    number: "04",
    label: "Tecnologías",
    titleA: "Full-Stack ",
    titleB: "× Inteligencia Artificial",
    intro:
      "Un stack completo, de la interfaz a la base de datos, con la IA como capa en la que me estoy especializando.",
    aiTag: "En especialización",
  },

  projects: {
    number: "05",
    label: "Proyectos",
    titleA: "Proyectos ",
    titleB: "destacados",
    intro:
      "Trabajos reales, con el problema que resuelven y la solución que construí. Abre cualquier proyecto para ver el detalle.",
    viewDetail: "Ver detalle",
    visitWeb: "Visitar web",
    viewCode: "Ver código",
    viewProject: "Ver proyecto",
    linkSoon: "Enlace próximamente",
    close: "Cerrar",
    problem: "Problema",
    solution: "Solución",
    result: "Resultado",
    features: "Funcionalidades",
    technologies: "Tecnologías",
    placeholderTitle: "Imagen pendiente",
    placeholderHint: "Sustituir por",
    featuredLabel: "Proyecto destacado · IA",
    gallery: "Galería del proyecto",
    imageOf: "Imagen",
    /**
     * Traducciones opcionales de lo que vive en `projects.ts`.
     * En español no hace falta nada: se usa el texto original del proyecto.
     */
    names: {} as Record<string, string>,
    techLabels: {} as Record<string, string>,
  },

  aiFocus: {
    number: "06",
    label: "AI Focus",
    titleA: "Hacia dónde voy: ",
    titleB: "aplicaciones inteligentes",
    intro:
      "No me presento como experta en IA: es la especialización que estoy construyendo y la que más me motiva. Estos son los frentes en los que me estoy formando y practicando.",
    interests: [
      "Integración de modelos de lenguaje mediante APIs",
      "Desarrollo de aplicaciones con IA",
      "Google Gemini y OpenAI",
      "Prompt Engineering",
      "Chatbots inteligentes",
      "Streaming de respuestas",
      "Integración de IA en aplicaciones Full-Stack",
      "Análisis de datos con Inteligencia Artificial",
    ],
    trainingLabel: "Formación",
    training: [
      "Programación con IA y Prompting · 210 h",
      "Analista de Datos con IA · 160 h",
    ],
    cta: "Ver el proyecto AI Chat",
    terminalTitle: "streaming.ts",
    terminalNote: "Ejemplo ilustrativo del concepto, no es código del proyecto.",
  },

  education: {
    number: "07",
    label: "Formación",
    titleA: "Cómo ",
    titleB: "aprendo",
    degrees: [
      {
        title: "FP Desarrollo de Aplicaciones Web (DAW)",
        place: "IES Politécnico Hermenegildo Lanz · Granada",
        period: "2023 — 2025",
      },
      {
        title: "Bachillerato en Ciencias Tecnológicas",
        place: "IES Virgen de las Nieves · Granada",
        period: "2021 — 2023",
      },
    ],
    coursesLabel: "Cursos",
    courses: [
      {
        title: "Programación con IA y Prompting",
        place: "Academia Teba",
        detail: "210 horas",
      },
      {
        title: "Analista de Datos con IA",
        place: "BEJOBS",
        detail: "160 horas",
      },
    ],
    extra: "DIGEMP: Young Women’s Digital Empowerment",
    languageLabel: "Idiomas",
    language: "Inglés · B1/B2 · nivel profesional de lectura técnica",
  },

  contact: {
    number: "08",
    label: "Contacto",
    titleA: "¿Hablamos de tu ",
    titleB: "próximo proyecto",
    titleC: "?",
    availability:
      "Estoy disponible para oportunidades profesionales y colaboraciones. Disponibilidad inmediata y geográfica.",
    emailLabel: "Email",
    formTitle: "Escríbeme",
    fields: {
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      email: "Email",
      emailPlaceholder: "tu@email.com",
      message: "Mensaje",
      messagePlaceholder: "Cuéntame sobre tu proyecto...",
    },
    submit: "Enviar mensaje",
    sending: "Enviando…",
    success: "¡Mensaje enviado! Te responderé lo antes posible.",
    error:
      "No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme directamente por email.",
    errors: {
      name: "Escribe tu nombre.",
      email: "Introduce un email válido.",
      message: "Cuéntame un poco más (mínimo 10 caracteres).",
    },
  },

  footer: {
    closing:
      "Gracias por pasarte. Si algo de lo que has visto encaja con lo que buscas, escríbeme.",
    rights: "Todos los derechos reservados",
    location: "Granada, España",
    nav: "Enlaces del pie de página",
  },

  /** Metadatos SEO / Open Graph de esta versión del sitio. */
  meta: {
    title: "Nicole Yranzo — Portfolio",
    description:
      "Portfolio de Nicole Yranzo, desarrolladora web Full-Stack en Granada con React, Node.js y Next.js, orientada a la integración de Inteligencia Artificial en aplicaciones web.",
    keywords: [
      "Nicole Yranzo",
      "desarrolladora Full-Stack",
      "desarrolladora web Granada",
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Inteligencia Artificial",
      "Google Gemini",
      "OpenAI",
      "portfolio",
    ],
    siteName: "Nicole Yranzo — Portfolio",
    ogLocale: "es_ES",
  },
};

export type Dictionary = typeof es;
