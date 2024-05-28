"use client"
import { Element } from 'react-scroll';
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Experience from "./pages/Experience/Experience";
import Skills from "./pages/Skills/Skills";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-cyan-400 from-10% via-sky-500 via-30% to-emerald-300 to-90% bg-repeat-y">
      <Element name='about'>
        <About />
      </Element>
      <Element name='skills'>
        <Skills />
      </Element>
      <Element name='experience'>
        <Experience />
      </Element>
      <Element name='contact'>
        <Contact />
      </Element>
    </main>
  );
}
