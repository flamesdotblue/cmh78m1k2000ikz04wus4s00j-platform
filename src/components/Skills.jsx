import { Cloud, Database, Lock, Server, Shield } from 'lucide-react';

const skills = [
  {
    title: 'API & Services',
    icon: Server,
    items: ['Node.js (Express/Fastify)', 'Java (Spring Boot)', 'Python (FastAPI)', 'REST, GraphQL, gRPC']
  },
  {
    title: 'Data Layer',
    icon: Database,
    items: ['PostgreSQL, MySQL', 'MongoDB, Redis', 'Kafka, RabbitMQ', 'Elasticsearch']
  },
  {
    title: 'Cloud & Platform',
    icon: Cloud,
    items: ['AWS, GCP', 'Docker, Kubernetes', 'Terraform', 'CI/CD (GitHub Actions)']
  },
  {
    title: 'Security & Reliability',
    icon: Shield,
    items: ['JWT, OAuth2/OIDC', 'OWASP basics', 'Rate limiting, retries', 'Logging, metrics, tracing']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(40rem_20rem_at_20%_40%,rgba(34,211,238,0.12),transparent),radial-gradient(30rem_18rem_at_80%_20%,rgba(59,130,246,0.12),transparent)] pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Core skills</h2>
          <p className="mt-3 text-slate-300">Production-minded backends with clear boundaries, robust data flows, and practical observability.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map(({ title, icon: Icon, items }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-cyan-400/40 transition">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-cyan-400/10 p-2 border border-cyan-400/30">
                  <Icon className="size-5 text-cyan-300" />
                </div>
                <h3 className="font-semibold text-white">{title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 inline-block size-1.5 rounded-full bg-cyan-400/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-emerald-400/10 p-2 border border-emerald-400/30">
                <Lock className="size-5 text-emerald-300" />
              </div>
              <h3 className="font-semibold text-white">Secure by default</h3>
            </div>
            <p className="mt-3 text-slate-300 text-sm">Secrets hygiene, least-privilege IAM, input validation, and encryption in transit/at rest.</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-indigo-400/10 p-2 border border-indigo-400/30">
                <Server className="size-5 text-indigo-300" />
              </div>
              <h3 className="font-semibold text-white">Performance-first</h3>
            </div>
            <p className="mt-3 text-slate-300 text-sm">Caching, async pipelines, and tuned DB queries for low latency and solid throughput.</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-pink-400/10 p-2 border border-pink-400/30">
                <Database className="size-5 text-pink-300" />
              </div>
              <h3 className="font-semibold text-white">Observability</h3>
            </div>
            <p className="mt-3 text-slate-300 text-sm">Structured logs, metrics, and traces (OpenTelemetry) with clear SLOs and alerting.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
