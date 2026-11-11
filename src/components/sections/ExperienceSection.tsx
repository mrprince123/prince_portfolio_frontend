import { useState } from "react";
import { experiences } from "@/data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Award } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="w-full px-4 sm:px-6 lg:px-8 py-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-border">
        <div>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#4361ee]/30 bg-[#4361ee]/10 px-3 py-1 font-mono text-xs text-[#4895ef] mb-2">
            <Briefcase className="h-3.5 w-3.5 text-[#4895ef]" />
            <span>EXPERIENCE LAB · 3 ORGANIZATIONS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Where I've built & shipped software
          </h2>
          <p className="mt-1 font-mono text-xs text-muted-foreground">
            A track record of driving measurable business impact, scaling systems, and mentoring teams.
          </p>
        </div>

        <div className="font-mono text-xs text-[#4895ef] bg-[#4361ee]/10 border border-[#4361ee]/20 rounded-xl px-4 py-2">
          ⚡ 2+ Years Production Experience
        </div>
      </div>

      {/* Timeline Stream */}
      <div className="mt-12 space-y-8 relative before:absolute before:inset-0 before:left-3.5 sm:before:left-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#4361ee] before:via-[#4361ee]/30 before:to-transparent">
        {experiences.map((exp, i) => (
          <div key={exp.company} className="relative flex items-start gap-4 sm:gap-8 group">
            {/* Timeline Node Icon */}
            <div className="relative z-10 flex h-7 w-7 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#4361ee] bg-background text-[#4895ef] shadow-md shadow-[#4361ee]/30 group-hover:scale-110 group-hover:border-[#4895ef] transition-all">
              <span className="h-2.5 w-2.5 rounded-full bg-[#4895ef] group-hover:animate-ping" />
            </div>

            {/* Content Card */}
            <div className="flex-1 rounded-2xl border border-[#4361ee]/20 bg-card/75 p-6 backdrop-blur-xl transition-all duration-300 hover:border-[#4361ee]/40 hover:shadow-xl hover:shadow-[#4361ee]/10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-border">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground group-hover:text-[#4895ef] transition-colors">
                    {exp.title}
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-2 font-mono text-xs">
                    <span className="font-semibold text-[#4895ef]">{exp.company}</span>
                    <span className="text-muted-foreground">·</span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="h-3 w-3 text-muted-foreground" /> {exp.location}
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 rounded-lg border border-[#4361ee]/20 bg-[#4361ee]/10 px-3 py-1 font-mono text-xs text-[#4895ef] w-fit">
                  <Calendar className="h-3 w-3" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Role Summary */}
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                {exp.description}
              </p>

              {/* Achievements Checklist */}
              <div className="mt-5 space-y-2">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#4895ef] flex items-center gap-1.5">
                  <Award className="h-3.5 w-3.5 text-[#4895ef]" /> Key Engineering Accomplishments:
                </span>
                <ul className="space-y-2 mt-2">
                  {exp.achievements.map((ach) => (
                    <li key={ach} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
                      <CheckCircle2 className="h-4 w-4 text-[#4895ef] shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div className="mt-6 pt-4 border-t border-border flex flex-wrap items-center gap-2">
                <span className="font-mono text-[11px] text-muted-foreground mr-1">Stack:</span>
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-border bg-background px-2.5 py-1 font-mono text-xs text-muted-foreground group-hover:border-[#4361ee]/40 group-hover:text-[#4361ee] dark:group-hover:text-white transition-colors shadow-2xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
