import { Seo } from "@/components/seo";
import { Link } from "react-router-dom";
import {
  MapPin,
  Briefcase,
  Sparkles,
  Download,
  GraduationCap,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Layers,
  Heart,
  Camera,
  BookText,
} from "lucide-react";
import {
  personalInfo,
  experiences,
  education,
  interests,
  stats,
} from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/primitives/SectionHeader";
import { Reveal } from "@/components/ui/primitives/Reveal";
import portrait from "@/assets/princesahni.jpg";
import portrait2 from "@/assets/princesahni2.jpg";

const OPTIMIZE_FOR = [
  {
    icon: ShieldCheck,
    title: "System Reliability & Uptime",
    desc: "Build scalable microservices and APIs with smart caching (Redis), graceful fallbacks, and connection pooling that survive traffic surges.",
  },
  {
    icon: Zap,
    title: "Speed, Performance & UX",
    desc: "Zero layout shifts, sub-second API responses, and lightweight frontend bundles designed for seamless mobile and desktop interactions.",
  },
  {
    icon: Sparkles,
    title: "Pragmatic AI & Automation",
    desc: "Incorporate LLM APIs, multi-agent pipelines, and intelligent tools to give users real superpower leverage without fragile hype.",
  },
  {
    icon: Layers,
    title: "Clean DX & Maintainable Code",
    desc: "Strict TypeScript types, modular architecture, and predictable state that makes onboarding and scaling effortless for team members.",
  },
];

const About = () => (
  <>
    <Seo
      title="About | Prince Kumar Sahni - Software Engineer"
      description="Learn more about Prince Kumar Sahni, a passionate Software Engineer dedicated to building scalable, secure, and high-performing applications."
      url="https://princesahni.com/about"
      image="https://princesahni.com/og-images/princesahni-logo.png"
    />

    <div className="py-16 md:py-24">
      <div className="container-page">
        {/* Page Header */}
        <SectionHeader
          eyebrow="About Me"
          title="About"
          highlight={personalInfo.name}
          subtitle="Software Engineer focused on building scalable web products, resilient APIs, and intuitive user experiences."
        />

        {/* Hero Profile Grid */}
        <div className="mt-14 grid gap-14 lg:grid-cols-[1.15fr_0.85fr] items-start">
          {/* Left Column: Narrative */}
          <div className="space-y-6">
            <Reveal>
              <div className="space-y-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
                <p>
                  Hello! I&apos;m{" "}
                  <span className="font-semibold text-foreground">
                    {personalInfo.name}
                  </span>
                  , a Software Engineer based in {personalInfo.location}. Over the past few years,
                  I&apos;ve engineered everything from Android mobile applications to
                  production full-stack platforms, always prioritizing performance, reliability, and usability.
                </p>
                <p>
                  {personalInfo.bioExtended}
                </p>
                <p>
                  {personalInfo.bioCreative}
                </p>
              </div>
            </Reveal>

            {/* Quick Facts Strip */}
            <Reveal delay={0.1}>
              <div className="grid gap-3 sm:grid-cols-3 pt-2">
                <div className="rounded-xl border border-border bg-card p-4 shadow-soft">
                  <MapPin className="h-4 w-4 text-primary" />
                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Location
                  </p>
                  <p className="mt-0.5 text-sm font-bold text-foreground">
                    {personalInfo.location}
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-card p-4 shadow-soft">
                  <Briefcase className="h-4 w-4 text-primary" />
                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Role
                  </p>
                  <p className="mt-0.5 text-sm font-bold text-foreground">
                    {personalInfo.title}
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-card p-4 shadow-soft">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Focus
                  </p>
                  <p className="mt-0.5 text-sm font-bold text-foreground">
                    Full-Stack · Cloud
                  </p>
                </div>
              </div>
            </Reveal>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary rounded-full px-6 py-2.5 text-sm font-semibold shadow-md shadow-primary/20"
              >
                <Download className="h-4 w-4" />
                Download Résumé
              </a>
              <Link
                to="/contact"
                className="btn-ghost rounded-full px-6 py-2.5 text-sm font-semibold"
              >
                Get In Touch →
              </Link>
            </div>
          </div>

          {/* Right Column: Photo Card */}
          <div className="lg:sticky lg:top-24">
            <Reveal delay={0.15}>
              <div className="rounded-2xl border border-border bg-card p-3 shadow-soft">
                <div className="aspect-[4/5] overflow-hidden rounded-xl bg-muted">
                  <img
                    src={portrait}
                    alt={personalInfo.name}
                    width={500}
                    height={625}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-display text-base font-bold text-foreground">
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {personalInfo.title} · Webkul Software
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ── What I Optimize For (Tara routray signature section) ── */}
        <div className="mt-20 border-t border-border pt-16">
          <SectionHeader
            eyebrow="Core Principles"
            title="What I optimize for in"
            highlight="production"
            subtitle="Software engineering values that keep applications resilient, maintainable, and fast."
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {OPTIMIZE_FOR.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={idx * 0.08}>
                  <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:border-primary/40 hover:shadow-md">
                    <div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h4 className="font-display text-base font-bold text-foreground">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* ── Career & Experience Highlights ── */}
        <div className="mt-20 border-t border-border pt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <SectionHeader
              eyebrow="Work History"
              title="Recent engineering"
              highlight="experience"
              subtitle="Where I've delivered scalable features and contributed to team milestones."
              className="mb-0"
            />
            <Link
              to="/experience"
              className="btn-ghost rounded-full px-5 py-2 text-xs font-semibold shrink-0"
            >
              Full Work History →
            </Link>
          </div>

          <div className="space-y-4">
            {experiences.map((exp, idx) => (
              <Reveal key={exp.company} delay={idx * 0.08}>
                <div className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:border-primary/40">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border pb-3">
                    <div>
                      <h4 className="font-display text-base font-bold text-foreground">
                        {exp.title}{" "}
                        <span className="text-primary font-medium">@ {exp.company}</span>
                      </h4>
                    </div>
                    <span className="text-xs font-semibold text-muted-foreground">
                      {exp.period} · {exp.location}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {exp.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border bg-secondary px-2 py-0.5 text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── Education & Beyond Code ── */}
        <div className="mt-20 border-t border-border pt-16 grid gap-10 lg:grid-cols-2">
          {/* Education */}
          <div>
            <SectionHeader
              eyebrow="Academics"
              title="Formal"
              highlight="education"
              subtitle="Foundations in computer science, software engineering, and algorithms."
            />

            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.institution}
                  className="rounded-2xl border border-border bg-card p-6 shadow-soft"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-primary">
                      {edu.period}
                    </span>
                    <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                      GPA {edu.gpa}
                    </span>
                  </div>
                  <h4 className="mt-2 font-display text-base font-bold text-foreground">
                    {edu.degree}
                  </h4>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {edu.institution} · {edu.location}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Beyond Code / Interests */}
          <div>
            <SectionHeader
              eyebrow="Beyond The Screen"
              title="Passions &amp;"
              highlight="creativity"
              subtitle="Knowledge sharing, photography, and community contribution."
            />

            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft space-y-4">
              <div className="flex items-start gap-3">
                <BookText className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-sm font-bold text-foreground">Technical Writing on Medium</h5>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                    Authoring in-depth articles on modern JavaScript, distributed systems, and backend frameworks.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-border pt-3">
                <Camera className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-sm font-bold text-foreground">Photography &amp; Visual Arts</h5>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                    Capturing perspectives and urban street life; contributing as a Google Maps Local Guide with over 600K+ views.
                  </p>
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  All Interests &amp; Hobbies
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {interests.map((interest) => (
                    <span
                      key={interest}
                      className="rounded-full border border-border bg-secondary/80 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-2xl border border-border bg-card/60 p-8 text-center shadow-soft">
          <h3 className="font-display text-2xl font-bold text-foreground">
            Interested in working together?
          </h3>
          <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
            I&apos;m open to discussing full-time software engineering roles, high-impact products, and consulting.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary rounded-full px-6 py-2.5 text-sm font-semibold">
              Send a Message
            </Link>
            <Link to="/apps" className="btn-ghost rounded-full px-6 py-2.5 text-sm font-semibold">
              Explore My Apps
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default About;
