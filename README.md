# Portfolio · Nicole Yranzo

Portfolio web personal de **Nicole Yranzo — Full-Stack Developer | AI Enthusiast**.
Una sola página, bilingüe (español / inglés), con diseño editorial y un gato ilustrado en SVG que sigue el cursor.

> 🤖 **Cómo se hizo:** este proyecto se ha creado con la ayuda de **Claude** (Anthropic) junto con **ChatGPT** (OpenAI), bajo la dirección y revisión de Nicole Yranzo.

---

## Tecnologías

| Categoría | Tecnología |
| --- | --- |
| Framework | [Next.js](https://nextjs.org) 16 (App Router, Cache Components) |
| UI | [React](https://react.dev) 19 |
| Lenguaje | [TypeScript](https://www.typescriptlang.org) 5 |
| Estilos | [Tailwind CSS](https://tailwindcss.com) 4 |
| Animación | [Motion](https://motion.dev) (Framer Motion) + CSS |
| Iconos | [Lucide React](https://lucide.dev) + SVG propios para GitHub y LinkedIn |
| Fuentes | Cormorant Garamond, DM Sans y Roboto Mono (autoalojadas con `next/font/local`) |
| Formulario | [Web3Forms](https://web3forms.com) |
| Calidad | ESLint 9 + `tsc` |
| Entorno | Node.js 20 o superior |

---

## Qué incluye

- **Una sola página** con navegación por anclas y 8 secciones: Hero, Sobre mí, Experiencia, Tecnologías, Proyectos, IA, Formación y Contacto, más footer.
- **Bilingüe** (`/es` y `/en`) con selector de idioma que conserva la sección. Metadatos, Open Graph y `hreflang` por idioma.
- **Proyectos** en composición editorial, con ficha ampliada (problema, solución, resultado, tecnologías y galería).
- **Gato ilustrado en SVG**, con parpadeo, cola, respiración, orejas e inclinaciones de cabeza, y que mira hacia el cursor.
- **Formulario de contacto** funcional con Web3Forms: validación, estados de envío, éxito y error, y protección anti-spam.
- **Accesibilidad:** HTML semántico, enlace para saltar al contenido, foco visible, `aria-*` y respeto a `prefers-reduced-motion`.
- **Responsive** de móvil a escritorio, sin desbordamientos.
- **SEO:** metadata de Next.js, Open Graph, `canonical` y `hreflang`.
- **Sin dependencias de red en el build:** las fuentes van incluidas en el repositorio.

---

## Identidad visual

| Color | Valor | Uso |
| --- | --- | --- |
| Negro carbón | `#191817` | Fondos oscuros y texto |
| Blanco cálido | `#F5F3F0` | Fondos claros |
| Rosa suave | `#E8A0B9` | Acento: detalles, enlaces e interacciones |
| Rosa pálido | `#F3DCE5` | Resaltados y superficies |
| Gris neutro | `#A5A19F` | Textos secundarios |

Tipografía: **Cormorant Garamond** (titulares), **DM Sans** (texto y navegación) y **Roboto Mono** (etiquetas técnicas y numeración).

---

## Puesta en marcha

Requiere **Node.js 20 o superior**.

```bash
npm install
npm run dev      # desarrollo en http://localhost:3000 (redirige a /es)
npm run build    # compilación de producción
npm start        # servir el build
npm run lint     # ESLint
npx tsc --noEmit # comprobación de tipos
```

---

## Estructura

```text
src/
├── app/
│   ├── [lang]/
│   │   ├── layout.tsx        # <html lang>, fuentes, metadatos por idioma
│   │   └── page.tsx          # compone todas las secciones
│   └── globals.css           # paleta, fondo, animaciones y gato
├── components/
│   ├── layout/               # Navbar (con selector de idioma) y Footer
│   ├── sections/             # Hero, About, Experience, Skills, Projects, AIFocus, Education, Contact, ContactForm
│   ├── projects/             # ProjectCard, ProjectDetail (modal), ProjectImage
│   └── ui/                   # Button, TechBadge, Section, SectionHeading, Reveal, Marquee, Cat…
├── data/
│   ├── site.ts               # nombre, email, enlaces y foto de perfil
│   ├── projects.ts           # proyectos (textos ES/EN, tecnologías, enlaces, imágenes)
│   ├── skills.ts             # habilidades por categoría
│   ├── dictionary.es.ts      # textos del sitio en español
│   └── dictionary.en.ts      # textos del sitio en inglés
├── fonts/                    # fuentes autoalojadas (.woff2)
└── lib/
    ├── i18n.ts               # idiomas, diccionarios y utilidades
    └── localize.ts           # traducción de nombres y etiquetas de proyectos
public/
└── cv/
└── icon/
└── images/
    ├── profile/              # foto.jpg
    └── projects/             # capturas de los proyectos
```

---


## Formulario de contacto

`ContactForm.tsx` envía los datos por `fetch` a `https://api.web3forms.com/submit` y, sin JavaScript, funciona con el envío HTML normal. Incluye validación, indicador de carga, mensajes de éxito y error, y prevención de envíos repetidos. El asunto del correo que se recibe es «Nuevo mensaje desde el portfolio de Nicole».

---

## Despliegue

Pensado para **Vercel**, **Netlify** (con soporte de Next.js) o cualquier servidor Node.

> La redirección de `/` a `/es` necesita servidor, así que el proyecto **no** funciona como exportación estática (por ejemplo, GitHub Pages).

---

## Créditos

- **Autora, dirección y contenido:** Nicole Yranzo.
- **Desarrollo asistido por IA:** Claude (Anthropic) y ChatGPT (OpenAI).
- Ilustración del gato, componentes y código creados específicamente para este proyecto.

© Nicole Yranzo. Todos los derechos reservados.