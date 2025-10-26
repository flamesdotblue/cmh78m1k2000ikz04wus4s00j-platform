import Spline from '@splinetool/react-spline';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 pt-12 lg:pt-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
              <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
              Backend Developer • 8 months
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              I build reliable, modern backend services
            </h1>
            <p className="mt-5 text-slate-300 text-base sm:text-lg leading-relaxed">
              Focused on clean APIs, robust data models, and practical observability. I turn requirements into production-ready services with security and performance in mind.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-cyan-500/90 px-4 py-2.5 font-medium text-slate-900 hover:bg-cyan-400 transition shadow shadow-cyan-500/25">
                View Projects
                <ArrowRight className="size-4" />
              </a>
              <a href="mailto:hello@backend.dev" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 font-medium text-white hover:bg-white/10 transition">
                <Mail className="size-4" />
                Contact
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 font-medium text-white hover:bg-white/10 transition">
                <Github className="size-4" />
                GitHub
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 font-medium text-white hover:bg-white/10 transition">
                <Linkedin className="size-4" />
                LinkedIn
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                <dt className="text-xs text-slate-400">Prod services</dt>
                <dd className="mt-1 text-2xl font-semibold text-white">5+</dd>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                <dt className="text-xs text-slate-400">APIs shipped</dt>
                <dd className="mt-1 text-2xl font-semibold text-white">12+</dd>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                <dt className="text-xs text-slate-400">Uptime</dt>
                <dd className="mt-1 text-2xl font-semibold text-white">99.9%</dd>
              </div>
            </dl>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[620px] w-full">
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden border border-cyan-400/20 shadow-[0_0_60px_-15px_rgba(34,211,238,0.35)] bg-gradient-to-b from-white/5 to-white/0">
              <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
