import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Writing } from "@/components/sections/Writing";

export default function Home() {
  return (
    <main id="main">
      <div id="top" />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Writing />
      <Skills />
      <Contact />
    </main>
  );
}
