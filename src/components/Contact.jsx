import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-16 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(26rem_12rem_at_20%_80%,rgba(59,130,246,0.12),transparent)] pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 md:p-12 overflow-hidden relative">
          <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="max-w-2xl relative">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Let’s build your backend</h2>
            <p className="mt-3 text-slate-300">Available for freelance and full-time roles. I can help with greenfield services, migrations, performance tuning, and platform hardening.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a href="mailto:hello@backend.dev" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-medium text-white hover:bg-white/10 transition">
                <Mail className="size-4" />
                hello@backend.dev
              </a>
              <a href="tel:+10000000000" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-medium text-white hover:bg-white/10 transition">
                <Phone className="size-4" />
                +1 (000) 000-0000
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-medium text-white hover:bg-white/10 transition">
                <Github className="size-4" />
                GitHub
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-medium text-white hover:bg-white/10 transition">
                <Linkedin className="size-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
