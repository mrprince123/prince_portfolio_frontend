import { CheckCircle2, Download, GraduationCap, MapPin, Sparkles } from "lucide-react";
import { personalInfo, education, interests } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/primitives/SectionHeader";
import { Reveal } from "@/components/ui/primitives/Reveal";
import portrait from "@/assets/princesahni2.jpg";

const OPTIMIZE_FOR = [
  {
    title: "Reliability & Scalability",
    desc: "Architect systems that stay stable under traffic spikes with smart caching, connection pooling, and resilient fallbacks.",
  },
  {
    title: "Pragmatic AI & Modern Tooling",
    desc: "Leverage LLM APIs, agents, and automated workflows where they add measurable user leverage, not just novelty.",
  },
  {
    title: "Speed, DX & Maintainability",
    desc: "Write typed, modular, self-documenting code with comprehensive error handling and minimal cognitive overhead for teams.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-border">
      <div className="container-page">
        <SectionHeader
          eyebrow="About Me"
          title="Background & engineering"
          highlight="philosophy"
          subtitle="Writing clean code, designing resilient systems, and solving real problems from end to end."
        />

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.15fr_0.85fr] items-start">
          {/* Left Column: Story + What I Optimize For */}
          <div>
            <Reveal>
              <div className="space-y-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
                <p>
                  I&apos;m a Software Engineer based in{" "}
                  <span className="font-semibold text-foreground">
                    {personalInfo.location}
                  </span>
                  . Over the past few years, I&apos;ve engineered everything from
                  high-volume web applications to mobile experiences and full-stack
                  cloud microservices.
                </p>
                <p>
                  {personalInfo.bioExtended}
                </p>
                <p className="text-sm">
                  {personalInfo.bioCreative}
                </p>
              </div>
            </Reveal>

            {/* "What I Optimize For" Box (Signature Tara style) */}
            <Reveal delay={0.1}>
              <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <h3 className="font-display text-base font-bold text-foreground">
                    What I optimize for
                  </h3>
                </div>

                <div className="space-y-4">
                  {OPTIMIZE_FOR.map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-1" />
                      <div>
                        <h4 className="text-sm font-semibold text-foreground">
                          {item.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Education */}
            <Reveal delay={0.2}>
              <div className="mt-8">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="h-4 w-4 text-primary" />
                  <h3 className="font-display text-base font-bold text-foreground">
                    Education
                  </h3>
                </div>

                <div className="space-y-3">
                  {education.map((edu) => (
                    <div
                      key={edu.institution}
                      className="rounded-xl border border-border bg-card/60 p-4 transition-colors hover:border-primary/40"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-primary">
                          {edu.period}
                        </span>
                        <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                          GPA: {edu.gpa}
                        </span>
                      </div>
                      <h4 className="mt-1 font-display text-sm font-bold text-foreground">
                        {edu.degree}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {edu.institution} · {edu.location}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Download Resume Button */}
            <div className="mt-8">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary rounded-full px-6 py-2.5 text-sm font-medium shadow-sm"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Column: Photo & Badges */}
          <div className="lg:sticky lg:top-24">
            <Reveal delay={0.15}>
              <div className="relative mx-auto max-w-md rounded-2xl border border-border bg-card p-4 shadow-soft">
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

                {/* Floating summary card below photo */}
                <div className="mt-4 p-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-display text-base font-bold text-foreground">
                        {personalInfo.name}
                      </h4>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                        <MapPin className="h-3 w-3 text-primary" />
                        {personalInfo.location}
                      </p>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {personalInfo.title}
                    </span>
                  </div>

                  {/* Interests tags */}
                  <div className="mt-4 border-t border-border pt-3">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Passions &amp; Interests
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {interests.map((interest) => (
                        <span
                          key={interest}
                          className="rounded-full border border-border bg-secondary/80 px-2.5 py-0.5 text-xs text-muted-foreground"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
