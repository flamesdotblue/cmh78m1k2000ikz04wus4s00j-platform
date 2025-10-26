import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-cyan-400 selection:text-slate-900">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-slate-100">dev<span className="text-cyan-400">.backend</span></a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <a href="#contact" className="ml-2 inline-flex items-center rounded-lg bg-cyan-500/90 px-3 py-1.5 text-sm font-medium text-slate-900 hover:bg-cyan-400 transition shadow shadow-cyan-500/25">Hire me</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-white/10 mt-16">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Backend Developer Portfolio</p>
          <p>Built with React, Tailwind CSS, and Spline</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
