import { Briefcase, Calendar, MapPin, CheckCircle2, Download, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Seo } from "@/components/seo";
import { experiences, personalInfo, stats } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/primitives/SectionHeader";
import { Reveal } from "@/components/ui/primitives/Reveal";

const Experience = () => {
  return (
    <>
      <Seo
        title="Work Experience & Engineering Career | Prince Kumar Sahni"
        description="Career history, engineering leadership, and production deliverables of Prince Kumar Sahni across distributed backend architectures and scalable full-stack applications."
        url="https://princesahni.com/experience"
        image="https://princesahni.com/og-images/princesahni-logo.png"
        keywords={[
          "Prince Kumar Sahni Experience",
          "Prince Sahni Career",
          "Software Engineer Experience",
          "Backend Lead",
          "Webkul Software",
          "Chetu Inc",
          "Software Engineering Track Record",
        ]}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Experience", path: "/experience" },
        ]}
      />

      <div className="py-16 md:py-24">
        <div className="container-page">
          {/* Page Header */}
          <SectionHeader
            eyebrow="Career &amp; Track Record"
            title="Work experience &amp;"
            highlight="engineering history"
            subtitle="Products delivered, systems scaled, and architecture milestones achieved across fast-paced teams."
          />

          {/* Quick Metrics Bar */}
          <div className="mt-8 grid grid-cols-2 gap-6 rounded-2xl border border-border bg-card/60 p-6 sm:p-8 shadow-soft sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                  {stat.number}
                </p>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Detailed Timeline */}
          <div className="relative mt-16 space-y-12 before:absolute before:inset-0 before:left-4 before:h-full before:w-0.5 before:bg-border md:before:left-32">
            {experiences.map((exp, index) => (
              <Reveal key={exp.company} delay={index * 0.08}>
                <div className="relative flex flex-col md:flex-row gap-6 md:gap-12 items-start group">
                  {/* Timeline Period on Left */}
                  <div className="hidden md:flex flex-col items-end w-32 shrink-0 pt-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      {exp.period.split(" - ")[0]}
                    </span>
                    <span className="text-[11px] text-muted-foreground mt-0.5">
                      {exp.period.split(" - ")[1] || "Present"}
                    </span>
                  </div>

                  {/* Dot Node */}
                  <div className="absolute left-4 -translate-x-1/2 md:left-32 mt-6 flex h-4 w-4 items-center justify-center rounded-full border-2 border-background bg-primary shadow-sm group-hover:scale-125 transition-transform" />

                  {/* Experience Card */}
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

                    {/* Overview */}
                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>

                    {/* Key Contributions & Achievements */}
                    {exp.achievements && exp.achievements.length > 0 && (
                      <div className="mt-6 space-y-2.5">
                        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                          Key Contributions &amp; Impact:
                        </p>
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

                    {/* Tech Stack */}
                    <div className="mt-6 pt-4 border-t border-border">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                        Technologies &amp; Tools:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
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
                </div>
              </Reveal>
            ))}
          </div>

          {/* Bottom Resume CTA */}
          <div className="mt-20 rounded-2xl border border-border bg-card/60 p-8 text-center shadow-soft">
            <h3 className="font-display text-2xl font-bold text-foreground">
              Need a full chronological curriculum vitae?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
              Download a complete PDF copy of my resume, or reach out directly to discuss upcoming opportunities.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary rounded-full px-6 py-2.5 text-sm font-semibold shadow-md shadow-primary/20"
              >
                <Download className="h-4 w-4" />
                Download Complete CV (PDF)
              </a>
              <Link to="/contact" className="btn-ghost rounded-full px-6 py-2.5 text-sm font-semibold">
                Get In Touch →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
