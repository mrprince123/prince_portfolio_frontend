import { useState } from "react";
import { Seo } from "@/components/seo";
import { personalInfo, experiences, mockProjects, stats } from "@/data/portfolioData";
import {
  ShieldCheck,
  Zap,
  ArrowRight,
  ExternalLink,
  Layers,
  Cpu,
  Users,
  CheckCircle2,
  Calendar,
  Star,
  Award,
  Clock,
  Activity,
  FileDown,
  Mail,
  Send,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import portrait from "@/assets/princesahni2.jpg";

const BADGES = [
  { title: "100K+ Users", subtitle: "Served in production at scale" },
  { title: "$2M Series A", subtitle: "MVP real-time chat infrastructure" },
  { title: "40% Latency Cut", subtitle: "Through Redis & code optimization" },
  { title: "60% CI/CD Speedup", subtitle: "Docker & AWS automation" },
  { title: "600K+ Photo Views", subtitle: "Google Maps Local Guide Level 7" },
  { title: "6-Star Problem Solver", subtitle: "HackerRank Algorithms" },
  { title: "78 Open Source Repos", subtitle: "Public GitHub contributions" },
  { title: "BPUT CSE 8.4 GPA", subtitle: "B.Sc. in Computer Science" },
];

const IMPACT_METRICS = [
  { metric: "2.2s → 300ms", label: "API Optimization", desc: "Cut backend p95 response time via indexing and caching" },
  { metric: "4.4s → 990ms", label: "Core Web Vitals", desc: "Sub-second first paint achieved via asset tree-shaking" },
  { metric: "-25% Spend", label: "Cloud FinOps", desc: "Right-sized Dockerized AWS VMs without performance degradation" },
  { metric: "25m → 10m", label: "Deployment Cycle", desc: "-60% reduction in GitHub Actions CI/CD release duration" },
  { metric: "99.9% Uptime", label: "Zero Downtime", desc: "Blue-green container deployments with automated health checks" },
  { metric: "100K+ Users", label: "Concurrent Traffic", desc: "Orchestrated distributed microservices handling peak load" },
];

const SKILL_LAYERS = [
  { layer: "Layer 1", name: "Frontend", skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "HTML5/CSS3"] },
  { layer: "Layer 2", name: "Backend", skills: ["Node.js", "Express.js", "FastAPI", "RESTful APIs", "GraphQL", "WebSockets"] },
  { layer: "Layer 3", name: "Cloud & DevOps", skills: ["AWS (EC2, S3)", "Docker", "CI/CD Pipelines", "GitHub Actions", "Nginx"] },
  { layer: "Layer 4", name: "Databases & Caching", skills: ["PostgreSQL", "MongoDB", "Redis", "Mongoose", "Database Indexing"] },
  { layer: "Layer 5", name: "Mobile Development", skills: ["Kotlin", "Jetpack Compose", "Room DB", "Android Studio", "Coroutines"] },
  { layer: "Layer 6", name: "Languages", skills: ["TypeScript", "JavaScript", "Python", "Java", "C++", "SQL"] },
  { layer: "Layer 7", name: "System Architecture", skills: ["Microservices", "Event-Driven", "Caching Strategies", "Load Balancing"] },
  { layer: "Layer 8", name: "Developer Tools", skills: ["Git", "Postman", "Linux", "Docker Compose", "Vite", "Vitest"] },
];

const REVIEWS = [
  {
    author: "Engineering Director",
    role: "Webkul Software",
    text: "Prince demonstrates rare technical maturity. His work on microservices refactoring reduced system latency by 40% and stabilized peak user loads without incident.",
    rating: 5,
  },
  {
    author: "Product Lead",
    role: "Chetu Inc Client Project",
    text: "Delivered a rock-solid real-time chat architecture on an aggressive timeline. His engineering was key to our product raising its $2M seed round.",
    rating: 5,
  },
  {
    author: "Senior Software Architect",
    role: "Webbocket Tech Team",
    text: "Exceptionally diligent engineer. He wrote reusable frontend components that cut development time across our next three client deliverables.",
    rating: 5,
  },
];

export const Work = () => {
  return (
    <>
      <Seo
        title="Work Portfolio | Prince Kumar Sahni - Experience, Impact & Production Systems"
        description="Comprehensive work portfolio of Prince Kumar Sahni matching princesingh.work/#about. Details on career timeline, infrastructure impact, systems built, and engineering reviews."
        url="https://princesahni.com/work"
      />

      {/* Sticky Secondary Sub-Nav matching princesingh.work */}
      <div className="sticky top-[72px] z-40 border-y border-[#4361ee]/20 bg-background/90 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between py-2.5 max-w-7xl overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1 sm:gap-2 font-mono text-xs text-muted-foreground whitespace-nowrap">
            <a href="#about" className="px-2.5 py-1 rounded-md hover:text-[#4895ef] hover:bg-[#4361ee]/10 transition-colors">
              About
            </a>
            <a href="#experience" className="px-2.5 py-1 rounded-md hover:text-[#4895ef] hover:bg-[#4361ee]/10 transition-colors">
              Experience
            </a>
            <a href="#impact" className="px-2.5 py-1 rounded-md hover:text-[#4895ef] hover:bg-[#4361ee]/10 transition-colors">
              Impact
            </a>
            <a href="#products" className="px-2.5 py-1 rounded-md hover:text-[#4895ef] hover:bg-[#4361ee]/10 transition-colors">
              Products
            </a>
            <a href="#skills" className="px-2.5 py-1 rounded-md hover:text-[#4895ef] hover:bg-[#4361ee]/10 transition-colors">
              Skills
            </a>
            <a href="#reviews" className="px-2.5 py-1 rounded-md hover:text-[#4895ef] hover:bg-[#4361ee]/10 transition-colors">
              Reviews
            </a>
            <a href="#contact" className="px-2.5 py-1 rounded-md hover:text-[#4895ef] hover:bg-[#4361ee]/10 transition-colors">
              Contact
            </a>
          </div>

          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#4361ee] px-3.5 py-1 font-mono text-xs font-semibold text-white hover:bg-[#3a56d4] transition-colors shrink-0"
          >
            <FileDown className="h-3 w-3" /> Résumé
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 max-w-7xl space-y-24">
        {/* Top Hero Section */}
        <section id="top" className="pt-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#4361ee]/30 bg-[#4361ee]/10 px-3 py-1 font-mono text-xs text-[#4895ef]">
                <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
                <span>BUILDING PRODUCTION SOFTWARE THAT SHIPS</span>
              </div>
              <h1 className="font-display text-4xl sm:text-6xl font-black text-foreground tracking-tight leading-[1.05]">
                {personalInfo.name}
              </h1>
              <p className="font-mono text-base text-[#4895ef]">
                Software Engineer @ Webkul Software · 2+ Years Production Experience
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Architecting microservices, cloud systems, and high-performance full-stack web applications.
                Specialized in distributed systems, real-time architectures, and cutting-edge frontend engineering.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#4361ee] px-5 py-3 font-mono text-xs font-semibold text-white shadow-lg shadow-[#4361ee]/30 hover:bg-[#3a56d4] transition-all"
              >
                <span>Book a Technical Discussion</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#4361ee]/30 bg-card px-5 py-3 font-mono text-xs font-semibold text-[#4895ef] hover:bg-[#4361ee]/10 transition-all"
              >
                <FileDown className="h-4 w-4" /> Download Official CV
              </a>
            </div>
          </div>

          {/* The Badge Wall (8 earned badges matching princesingh.work) */}
          <div className="mt-12">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#4895ef] flex items-center gap-2">
                <Award className="h-4 w-4 text-[#4895ef]" /> The Badge Wall · 8 Earned Validations
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {BADGES.map((b) => (
                <div
                  key={b.title}
                  className="rounded-2xl border border-[#4361ee]/20 bg-card/75 p-3.5 backdrop-blur-xl hover:border-[#4361ee]/40 transition-all"
                >
                  <div className="font-mono text-xs font-bold text-[#4895ef]">{b.title}</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">{b.subtitle}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section #about (Full Story matching princesingh.work/#about) */}
        <section id="about" className="scroll-mt-32 pt-8 border-t border-border">
          <div className="flex items-center gap-2 font-mono text-xs text-[#4895ef] mb-2">
            <Users className="h-4 w-4" /> § 01 · ABOUT ME
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            The Full Story
          </h2>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
              <p className="text-foreground font-medium text-lg leading-relaxed">
                I came from a Tier 3 college with no senior network and no predefined roadmap — just an obsessive hunger to build and figure it out.
              </p>
              <p>
                I cracked high-impact software engineering roles not by chasing trends, but by mastering fundamentals:
                how memory works, how to design database schemas that don't choke under load, and how to write clean,
                maintainable code that can scale safely to over 100k+ active users.
              </p>
              <p>
                At <strong className="text-foreground">Webkul Software</strong>, I architect microservices and optimize bottlenecks,
                producing a measured 40% latency reduction. Previously at <strong className="text-foreground">Chetu Inc</strong>,
                I engineered the real-time chat infrastructure handling 10k+ concurrent connections that helped our client close a $2M Series A round.
              </p>
              <p>
                Beyond code, I am an active creator, audiophile, and Google Maps Local Guide where my photos and reviews have crossed
                over <span className="text-[#4895ef] font-semibold">600K+ views</span>.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs pt-4 border-t border-border">
                <div className="rounded-xl border border-border bg-black/30 p-3">
                  <div className="text-[#4895ef] font-bold">1. Impact First</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">Solve the business problem before writing code.</div>
                </div>
                <div className="rounded-xl border border-border bg-black/30 p-3">
                  <div className="text-[#4895ef] font-bold">2. Resilient Scale</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">Architect with isolation, timeouts and caching.</div>
                </div>
                <div className="rounded-xl border border-border bg-black/30 p-3">
                  <div className="text-[#4895ef] font-bold">3. Pure Craft</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">Clean architecture and zero tech debt.</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 rounded-2xl border border-[#4361ee]/25 bg-card/80 overflow-hidden shadow-xl">
              <img src={portrait} alt={personalInfo.name} className="aspect-[4/5] w-full object-cover" />
              <div className="p-4 font-mono text-xs text-center border-t border-border">
                <span className="text-foreground font-bold">{personalInfo.name}</span>
                <span className="block text-[11px] text-[#4895ef]">Software Engineer · New Delhi, India</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section #experience */}
        <section id="experience" className="scroll-mt-32 pt-8 border-t border-border">
          <div className="flex items-center gap-2 font-mono text-xs text-[#4895ef] mb-2">
            <Calendar className="h-4 w-4" /> § 02 · CAREER TIMELINE
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Production Experience
          </h2>

          <div className="mt-8 space-y-6">
            {experiences.map((exp) => (
              <div
                key={exp.company}
                className="rounded-2xl border border-[#4361ee]/20 bg-card/75 p-6 backdrop-blur-xl hover:border-[#4361ee]/40 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-border">
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">{exp.title}</h3>
                    <p className="font-mono text-xs text-[#4895ef]">{exp.company} · {exp.location}</p>
                  </div>
                  <span className="rounded-md border border-[#4361ee]/30 bg-[#4361ee]/10 px-3 py-1 font-mono text-xs text-[#4895ef] w-fit">
                    {exp.period}
                  </span>
                </div>

                <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">{exp.description}</p>

                <ul className="mt-4 space-y-1.5 text-xs sm:text-sm text-foreground/90">
                  {exp.achievements.map((ach) => (
                    <li key={ach} className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#4895ef] shrink-0 mt-1" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 pt-3 border-t border-border flex flex-wrap gap-1.5 font-mono text-xs text-zinc-400">
                  {exp.technologies.map((t) => (
                    <span key={t} className="rounded-md bg-black/40 px-2 py-0.5 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section #impact (Infrastructure & Impact matching princesingh.work) */}
        <section id="impact" className="scroll-mt-32 pt-8 border-t border-border">
          <div className="flex items-center gap-2 font-mono text-xs text-[#4895ef] mb-2">
            <Activity className="h-4 w-4" /> § 03 · INFRASTRUCTURE & IMPACT
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Measurable Production Benchmarks
          </h2>
          <p className="mt-1 font-mono text-xs text-muted-foreground">
            Every optimization backed by empirical production telemetry.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {IMPACT_METRICS.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-[#4361ee]/20 bg-card/75 p-5 backdrop-blur-xl hover:border-[#4361ee]/50 transition-all"
              >
                <div className="font-display text-2xl font-black text-[#4895ef]">{item.metric}</div>
                <div className="font-mono text-xs font-bold text-foreground mt-1">{item.label}</div>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section #products (Products built and run) */}
        <section id="products" className="scroll-mt-32 pt-8 border-t border-border">
          <div className="flex items-center gap-2 font-mono text-xs text-[#4895ef] mb-2">
            <Layers className="h-4 w-4" /> § 04 · PRODUCTS I BUILT & RUN
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Flagship Systems
          </h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProjects.slice(0, 6).map((project, i) => (
              <div
                key={project.id ?? i}
                className="rounded-2xl border border-[#4361ee]/20 bg-card/80 p-5 backdrop-blur-xl hover:border-[#4361ee]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-[#4895ef] pb-2 border-b border-border">
                    <span>SYS-0{i + 1}</span>
                    <span className="text-[10px] uppercase text-muted-foreground">{project.category}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mt-3">{project.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-border flex flex-wrap gap-1">
                  {project.technologies.slice(0, 4).map((t) => (
                    <span key={t} className="rounded bg-black/40 px-2 py-0.5 font-mono text-[10px] text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section #skills (Layered Production Stack) */}
        <section id="skills" className="scroll-mt-32 pt-8 border-t border-border">
          <div className="flex items-center gap-2 font-mono text-xs text-[#4895ef] mb-2">
            <Cpu className="h-4 w-4" /> § 05 · PRODUCTION ARSENAL
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            8-Layer Engineering Stack
          </h2>

          <div className="mt-8 space-y-3 font-mono text-xs">
            {SKILL_LAYERS.map((layer) => (
              <div
                key={layer.name}
                className="rounded-xl border border-border bg-card/70 p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-[#4361ee]/30 transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="rounded bg-[#4361ee]/15 text-[#4895ef] px-2 py-0.5 font-bold text-[11px]">
                    {layer.layer}
                  </span>
                  <span className="font-bold text-foreground">{layer.name}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {layer.skills.map((s) => (
                    <span key={s} className="rounded bg-black/30 border border-white/5 px-2 py-0.5 text-zinc-300 text-[11px]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section #reviews (Reviews & Feedback matching princesingh.work) */}
        <section id="reviews" className="scroll-mt-32 pt-8 border-t border-border">
          <div className="flex items-center gap-2 font-mono text-xs text-[#4895ef] mb-2">
            <Star className="h-4 w-4" /> § 06 · VALIDATION & REVIEWS
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Peer & Leadership Feedback
          </h2>
          <div className="mt-2 font-mono text-xs text-[#4895ef]">
            ★ 4.9 / 5.0 Average Satisfaction across production deliveries
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((rev) => (
              <div
                key={rev.author}
                className="rounded-2xl border border-[#4361ee]/20 bg-card/80 p-5 backdrop-blur-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/90 italic leading-relaxed">
                    "{rev.text}"
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-border font-mono text-xs">
                  <div className="font-bold text-[#4895ef]">{rev.author}</div>
                  <div className="text-[11px] text-muted-foreground">{rev.role}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section #contact */}
        <section id="contact" className="scroll-mt-32 pt-8 border-t border-border">
          <div className="rounded-3xl border border-[#4361ee]/30 bg-gradient-to-r from-[#4361ee]/20 via-card to-black/60 p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#4895ef]">
              LET'S SOLVE PROBLEMS
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-foreground mt-3">
              You bring the problem. <br />
              <span className="text-purple-gradient">I bring production code.</span>
            </h2>
            <p className="mt-4 font-mono text-xs sm:text-sm text-muted-foreground max-w-lg mx-auto">
              Open to high-impact software engineering roles, microservices architecture, and scalable system consulting.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-[#4361ee] px-6 py-3 font-mono text-xs font-semibold text-white shadow-lg shadow-[#4361ee]/30 hover:bg-[#3a56d4] transition-all hover:scale-[1.02]"
              >
                <Mail className="h-4 w-4" />
                <span>Transmit Email</span>
              </a>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 font-mono text-xs text-foreground hover:border-[#4361ee]/40 hover:text-[#4895ef] transition-all"
              >
                <FileDown className="h-4 w-4" /> Download Official Résumé
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Work;
