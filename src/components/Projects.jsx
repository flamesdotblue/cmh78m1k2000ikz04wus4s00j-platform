import { ExternalLink, Github, Server } from 'lucide-react';

const projects = [
  {
    title: 'Payment Orchestration API',
    description:
      'Unified payments layer that routes to multiple PSPs with idempotency and retries. Built and tested in a small team; focused on clean contracts and safe error handling.',
    stack: ['Node.js', 'PostgreSQL', 'Redis', 'Kafka', 'AWS'],
    links: {
      demo: '#',
      code: '#'
    }
  },
  {
    title: 'Event-driven Microservices',
    description:
      'Domain-oriented services communicating via Kafka with an outbox pattern and SAGA for consistency. Emphasis on schemas, versioning, and consumer resilience.',
    stack: ['Java', 'Spring Boot', 'Kafka', 'MongoDB', 'Kubernetes'],
    links: {
      demo: '#',
      code: '#'
    }
  },
  {
    title: 'Observability Pipeline',
    description:
      'Centralized logs, metrics, and traces using OpenTelemetry collectors and dashboards. Helped cut mean time to detect issues by surfacing actionable signals.',
    stack: ['OpenTelemetry', 'Elastic', 'Prometheus', 'Grafana', 'Golang'],
    links: {
      demo: '#',
      code: '#'
    }
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(32rem_16rem_at_80%_60%,rgba(14,165,233,0.12),transparent)] pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Highlighted projects</h2>
          <p className="mt-3 text-slate-300">A few builds that showcase API design, data modeling, and platform reliability.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-cyan-400/40 transition">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-cyan-400/10 p-2 border border-cyan-400/30">
                  <Server className="size-5 text-cyan-300" />
                </div>
                <h3 className="font-semibold text-white group-hover:text-cyan-300 transition">{p.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">{p.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((tag) => (
                  <li key={tag} className="text-xs text-cyan-300/90 border border-cyan-400/30 bg-cyan-400/10 px-2 py-1 rounded-md">
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center gap-3">
                <a href={p.links.demo} className="inline-flex items-center gap-1.5 text-sm text-white/90 hover:text-white transition">
                  <ExternalLink className="size-4" />
                  Demo
                </a>
                <a href={p.links.code} className="inline-flex items-center gap-1.5 text-sm text-white/90 hover:text-white transition">
                  <Github className="size-4" />
                  Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
