import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/lib/i18n";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { AIFocus } from "@/components/sections/AIFocus";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-rose focus:px-4 focus:py-2 focus:text-ink"
      >
        {dict.nav.skip}
      </a>
      <Navbar t={dict.nav} locale={lang} />
      <main
        id="contenido"
        className="mx-auto flex max-w-[1400px] flex-col gap-3 p-3 sm:gap-4 sm:p-4"
      >
        <Hero t={dict.hero} />
        <About t={dict.about} />
        <Experience t={dict.experience} />
        <Skills t={dict.skills} locale={lang} />
        <Projects t={dict.projects} locale={lang} />
        <AIFocus t={dict.aiFocus} />
        <Education t={dict.education} />
        <Contact t={dict.contact} />
      </main>
      <Footer t={dict.footer} />
    </>
  );
}
