import type { Dictionary } from "./dictionary.es";

/**
 * English version of the site copy.
 *
 * It must have exactly the same keys as `dictionary.es.ts`: the `Dictionary`
 * type makes TypeScript complain if a key is missing or misspelled.
 * Section anchors (#sobre-mi, #proyectos…) are kept identical in both languages
 * so the language switcher can keep the visitor in the same section.
 */
export const en: Dictionary = {
  nav: {
    brand: "NY",
    brandAria: "Nicole Yranzo — Home",
    skip: "Skip to content",
    language: { label: "Language", es: "Español", en: "English" },
    menuOpen: "Open menu",
    menuClose: "Close menu",
    ariaLabel: "Main navigation",
    links: [
      { label: "Home", href: "#inicio" },
      { label: "About", href: "#sobre-mi" },
      { label: "Experience", href: "#experiencia" },
      { label: "Projects", href: "#proyectos" },
      { label: "AI", href: "#ia" },
      { label: "Contact", href: "#contacto" },
    ],
    cta: "Get in touch",
  },

  hero: {
    eyebrow: "Portfolio · Granada, Spain",
    name: "Nicole Yranzo",
    headlineA: "Full-Stack",
    headlineB: "Developer",
    tagline: "From web development to intelligent applications.",
    intro:
      "I build complete web products, from the frontend to the database, and I'm steering my career towards integrating Artificial Intelligence models into real applications.",
    ctaProjects: "Explore projects",
    ctaContact: "Get in touch",
    availability: "Available immediately",
    badge: "View projects",
    catAlt:
      "Illustration of a black cat sitting down that follows the cursor with its gaze",
    marquee: [
      "Full-Stack Developer",
      "React",
      "Next.js",
      "Node.js",
      "Artificial Intelligence",
      "Google Gemini",
      "OpenAI",
      "REST APIs",
    ],
    social: { github: "GitHub", linkedin: "LinkedIn" },
  },

  about: {
    number: "02",
    label: "About me",
    titleA: "From classic code to ",
    titleB: "intelligent applications",
    paragraphs: [
      "I'm Nicole, a Full-Stack web developer from Granada. I trained in Web Application Development and I work on both sides of the screen: interfaces with React and Angular, and REST APIs with Node.js connected to SQL and NoSQL databases.",
      "At Cubicup Design Home I worked in an Agile/Scrum team, and there I saw first-hand that a product is sustained by collaboration, maintenance and continuous improvement, not just by code that works.",
      "Now my curiosity points towards Artificial Intelligence: integrating models such as Gemini or OpenAI through APIs, building chatbots with streaming responses and bringing that intelligent layer into complete web applications. I'm still learning, and I'm looking for a product-oriented, digital-transformation environment where I can keep growing.",
    ],
    photoAlt: "Photograph of Nicole Yranzo",
    photoPlaceholder: "Your photo here",
    photoPlaceholderHint: "Save it in public/images/profile/ and update site.ts",
    photoCaption: "Granada, Spain",
    modules: [
      {
        number: "01",
        title: "Full-Stack",
        text: "React, Angular and Node.js: from the interface to the API.",
      },
      {
        number: "02",
        title: "DAW",
        text: "Vocational degree in Web Application Development (2023–2025).",
      },
      {
        number: "03",
        title: "AI",
        text: "Gemini, OpenAI, prompting and chatbots with streaming.",
      },
      {
        number: "04",
        title: "Learning",
        text: "Courses in AI & Prompting and AI Data Analysis.",
      },
    ],
  },

  experience: {
    number: "03",
    label: "Experience",
    titleA: "Where I've ",
    titleB: "built",
    entries: [
      {
        company: "Cubicup Design Home",
        role: "Full-Stack Developer",
        period: "March 2025 — June 2025",
        technologies: [
          "Angular",
          "Node.js",
          "MongoDB",
          "REST APIs",
          "Jira",
          "GitHub",
          "Docker",
        ],
        bullets: [
          "Developed new Full-Stack features for a corporate web platform using Angular, Node.js and MongoDB.",
          "Implemented REST APIs to manage and integrate data between frontend and backend.",
          "Optimised queries and data structures in MongoDB.",
          "Worked in an Agile/Scrum environment with Jira, GitHub and Docker.",
          "Collaborated with other developers on maintenance, testing and continuous improvement.",
        ],
      },
    ],
    stackLabel: "Technologies",
  },

  skills: {
    number: "04",
    label: "Technologies",
    titleA: "Full-Stack ",
    titleB: "× Artificial Intelligence",
    intro:
      "A complete stack, from the interface to the database, with AI as the layer I'm specialising in.",
    aiTag: "Specialising",
  },

  projects: {
    number: "05",
    label: "Projects",
    titleA: "Featured ",
    titleB: "projects",
    intro:
      "Real work, with the problem it solves and the solution I built. Open any project to see the details.",
    viewDetail: "View details",
    visitWeb: "Visit website",
    viewCode: "View code",
    viewProject: "View project",
    linkSoon: "Link coming soon",
    close: "Close",
    problem: "Problem",
    solution: "Solution",
    result: "Result",
    features: "Features",
    technologies: "Technologies",
    placeholderTitle: "Image pending",
    placeholderHint: "Replace with",
    featuredLabel: "Featured project · AI",
    gallery: "Project gallery",
    imageOf: "Image",
    // Project names and tech labels live in projects.ts (Spanish);
    // these entries translate them. Key = project slug / original label.
    names: {
      "isabel-restaurante": "Restaurant website in Nerja",
      "casa-todah": "Método Zenner promotional website",
      qivet: "QIVET · Veterinary system",
    },
    techLabels: {
      "Contenido visual": "Visual content",
    },
  },

  aiFocus: {
    number: "06",
    label: "AI Focus",
    titleA: "Where I'm heading: ",
    titleB: "intelligent applications",
    intro:
      "I don't present myself as an AI expert: it's the specialisation I'm building and the one that motivates me most. These are the areas I'm training and practising in.",
    interests: [
      "Integrating language models through APIs",
      "Building AI-powered applications",
      "Google Gemini and OpenAI",
      "Prompt Engineering",
      "Intelligent chatbots",
      "Streaming responses",
      "AI integration in Full-Stack applications",
      "Data analysis with Artificial Intelligence",
    ],
    trainingLabel: "Training",
    training: [
      "AI Programming and Prompting · 210 h",
      "AI Data Analyst · 160 h",
    ],
    cta: "See the AI Chat project",
    terminalTitle: "streaming.ts",
    terminalNote:
      "Illustrative example of the concept, not code from the project.",
  },

  education: {
    number: "07",
    label: "Education",
    titleA: "How I ",
    titleB: "learn",
    degrees: [
      {
        title: "Vocational degree in Web Application Development (DAW)",
        place: "IES Politécnico Hermenegildo Lanz · Granada",
        period: "2023 — 2025",
      },
      {
        title: "Baccalaureate in Technology Sciences",
        place: "IES Virgen de las Nieves · Granada",
        period: "2021 — 2023",
      },
    ],
    coursesLabel: "Courses",
    courses: [
      {
        title: "AI Programming and Prompting",
        place: "Academia Teba",
        detail: "210 hours",
      },
      {
        title: "AI Data Analyst",
        place: "BEJOBS",
        detail: "160 hours",
      },
    ],
    extra: "DIGEMP: Young Women’s Digital Empowerment",
    languageLabel: "Languages",
    language: "English · B1/B2 · professional level for technical reading",
  },

  contact: {
    number: "08",
    label: "Contact",
    titleA: "Shall we talk about your ",
    titleB: "next project",
    titleC: "?",
    availability:
      "I'm available for professional opportunities and collaborations. Immediate availability and geographic flexibility.",
    emailLabel: "Email",
    formTitle: "Write to me",
    fields: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@email.com",
      message: "Message",
      messagePlaceholder: "Tell me about your project...",
    },
    submit: "Send message",
    sending: "Sending…",
    success: "Message sent! I'll get back to you as soon as possible.",
    error:
      "The message couldn't be sent. Please try again or email me directly.",
    errors: {
      name: "Please enter your name.",
      email: "Enter a valid email address.",
      message: "Tell me a bit more (at least 10 characters).",
    },
  },

  footer: {
    closing:
      "Thanks for stopping by. If anything you've seen fits what you're looking for, write to me.",
    rights: "All rights reserved",
    nav: "Footer links",
    location: "Granada, Spain",
  },

  meta: {
    title: "Nicole Yranzo — Portfolio",
    description:
      "Portfolio of Nicole Yranzo, a Full-Stack web developer based in Granada, Spain, working with React, Node.js and Next.js and focused on integrating Artificial Intelligence into web applications.",
    keywords: [
      "Nicole Yranzo",
      "Full-Stack developer",
      "web developer Granada",
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Artificial Intelligence",
      "Google Gemini",
      "OpenAI",
      "portfolio",
    ],
    siteName: "Nicole Yranzo — Portfolio",
    ogLocale: "en_US",
  },
};
