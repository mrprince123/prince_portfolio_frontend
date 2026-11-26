import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { experiences } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/primitives/SectionHeader";
import { Reveal } from "@/components/ui/primitives/Reveal";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 md:py-32 border-t border-border">
      <div className="container-page">
        <SectionHeader
          eyebrow="Work Experience"
          title="Where I've delivered &amp;"
          highlight="scaled systems"
          subtitle="Track record of engineering robust web platforms, microservices, and leading team best practices."
        />

        <div className="relative mt-14 space-y-10 before:absolute before:inset-0 before:left-4 before:h-full before:w-0.5 before:bg-border md:before:left-32">
          {experiences.map((exp, index) => (
            <Reveal key={exp.company} delay={index * 0.08}>
              <div className="relative flex flex-col md:flex-row gap-6 md:gap-14 items-start group">
                {/* Timeline node */}
                <div className="hidden md:flex flex-col items-end w-32 shrink-0 pt-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    {exp.period.split(" - ")[0]}
                  </span>
                  <span className="text-[11px] text-muted-foreground mt-0.5">
                    {exp.period.split(" - ")[1] || "Present"}
                  </span>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-4 -translate-x-1/2 md:left-32 mt-6 flex h-4 w-4 items-center justify-center rounded-full border-2 border-background bg-primary shadow-sm group-hover:scale-125 transition-transform" />

                {/* Main Card */}
                <div className="ml-8 md:ml-0 flex-1 rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-soft transition-all duration-300 hover:border-primary/40 hover:shadow-md">
                  {/* Header info */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border pb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-primary" />
                        <h3 className="font-display text-xl font-bold text-foreground">
                          {exp.title}
                        </h3>
                      </div>
                      <p className="text-sm font-semibold text-primary mt-1">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1 md:hidden">
                        <Calendar className="h-3.5 w-3.5" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>

                  {/* Key Achievements */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="mt-5 space-y-2.5">
                      {exp.achievements.map((item) => (
                        <div key={item} className="flex items-start gap-2.5">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technologies Used */}
                  <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-border">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
