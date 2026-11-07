import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import localFont from "next/font/local";
import "../globals.css";
import { site } from "@/data/site";
import { MotionProvider } from "@/components/ui/MotionProvider";
import {
  getDictionary,
  hasLocale,
  locales,
  otherLocale,
} from "@/lib/i18n";

/*
  Fuentes autoalojadas (next/font/local): sin peticiones externas a Google
  y sin depender de la red en el build. Archivos en src/fonts.
*/
const cormorant = localFont({
  src: [
    {
      path: "../../fonts/CormorantGaramond-normal.woff2",
      style: "normal",
      weight: "300 700",
    },
    {
      path: "../../fonts/CormorantGaramond-italic.woff2",
      style: "italic",
      weight: "300 700",
    },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = localFont({
  src: "../../fonts/DMSans-normal.woff2",
  variable: "--font-dm-sans",
  weight: "100 1000",
  display: "swap",
});

const robotoMono = localFont({
  src: "../../fonts/RobotoMono-normal.woff2",
  variable: "--font-roboto-mono",
  weight: "100 700",
  display: "swap",
});

/** Se generan /es y /en en el build. */
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};

  const t = getDictionary(lang).meta;

  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    ),
    title: { default: t.title, template: `%s · ${site.name}` },
    description: t.description,
    applicationName: t.siteName,
    authors: [{ name: site.name, url: site.links.github }],
    keywords: t.keywords,
    icons: {
      icon: "/favicon.png", // O la ruta de tu favicon en la carpeta public
    },
    alternates: {
      canonical: `/${lang}`,
      // hreflang: cada versión apunta a la otra; /es es la predeterminada.
      languages: { es: "/es", en: "/en", "x-default": "/es" },
    },
    openGraph: {
      type: "website",
      locale: t.ogLocale,
      alternateLocale: getDictionary(otherLocale(lang)).meta.ogLocale,
      siteName: t.siteName,
      title: t.title,
      description: t.description,
      url: `/${lang}`,
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#191817",
  colorScheme: "dark light",
};

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      className={`${cormorant.variable} ${dmSans.variable} ${robotoMono.variable}`}
    >
      <head>
        {/* Sin JavaScript no hay animaciones de aparición: el contenido debe verse igualmente */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-screen">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
