import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "../components/Projects";

export default function Home() {

  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <div className="flex flex-col gap-y-20">
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
      <footer className="py-10 text-center border-t border-white/5 text-foreground/40 font-mono text-xs">
        <p>© {new Date().getFullYear()} willtechcode. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}