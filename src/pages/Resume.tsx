import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Globe,
  Linkedin,
  Github,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Award,
  Code2,
  FileText,
  Eye,
  CheckCircle2,
  Sparkles,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import { Seo } from "@/components/seo";
import { Reveal } from "@/components/ui/primitives/Reveal";
import {
  personalInfo,
  experiences,
  education,
  skillCategories,
  resumeProjects,
  resumeCertifications,
} from "@/data/portfolioData";

const Resume = () => {
  const [showPreview, setShowPreview] = useState(true);

  return (
    <>
      <Seo
        title="Resume & Technical CV | Prince Kumar Sahni - Software Engineer"
        description="Official resume and CV of Prince Kumar Sahni. View professional experience, education, system architecture credentials, technical skills, and certifications."
        url="https://princesahni.com/resume"
        image="https://princesahni.com/og-images/princesahni-logo.png"
        keywords={[
          "Prince Kumar Sahni Resume",
          "Prince Sahni CV",
          "Software Engineer Resume",
          "Hire Prince Sahni",
          "Backend Engineer Resume PDF",
        ]}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Resume", path: "/resume" },
        ]}
      />

      <div className="relative min-h-screen py-16 md:py-24 overflow-hidden">
        {/* Faint Watermark Text */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute right-4 top-10 -z-10 font-display text-[120px] font-black tracking-widest text-foreground/[0.03] dark:text-foreground/[0.04] sm:text-[180px] lg:text-[230px]"
        >
          RESUME
        </div>

        <div className="container-page relative z-10">
          {/* Header Area */}
          <div className="text-center">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-xs font-semibold text-muted-foreground shadow-soft backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
              <span className="tracking-wider uppercase text-[11px] font-bold text-foreground">
                CURRICULUM VITAE
              </span>
              <span className="text-muted-foreground/40">•</span>
              <span>Updated 2026</span>
            </div>

            {/* Title */}
            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
              Prince Kumar Sahni <br />
              <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-600 dark:from-amber-400 dark:via-amber-300 dark:to-yellow-500 bg-clip-text text-transparent">
                Software Engineer
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground">
              Software Engineer with 2+ years of experience building Python-based backend systems, enterprise e-commerce solutions, and Product Information Management (PIM) systems.
            </p>

            {/* Direct Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-500 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all hover:shadow-md hover:-translate-y-0.5 active:scale-95"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-accent"
              >
                <ExternalLink className="h-4 w-4" />
                Open on Google Drive
              </a>

              <button
                onClick={() => setShowPreview((v) => !v)}
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-accent"
              >
                <Eye className="h-4 w-4" />
                {showPreview ? "Hide PDF Viewer" : "Show PDF Viewer"}
              </button>
            </div>

            {/* Contact Strip */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-y border-border py-4 text-xs font-medium text-muted-foreground">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-primary" />
                {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-primary" />
                {personalInfo.phone}
              </a>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                {personalInfo.location}
              </span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
              >
                <Linkedin className="h-3.5 w-3.5 text-primary" />
                LinkedIn
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
              >
                <Github className="h-3.5 w-3.5 text-primary" />
                GitHub
              </a>
            </div>
          </div>

          {/* Embedded Google Drive PDF Previewer */}
          {showPreview && (
            <Reveal delay={0.1}>
              <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
                {/* Browser Title Bar */}
                <div className="flex items-center justify-between border-b border-border/80 bg-muted/40 px-5 sm:px-6 py-3">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="h-3 w-3 rounded-full bg-red-400/80" />
                      <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                      <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                    </div>
                    <span className="ml-3 font-mono text-xs text-muted-foreground">
                      Prince-resume.pdf (Google Drive Preview)
                    </span>
                  </div>
                  <a
                    href={personalInfo.resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                  >
                    Pop out
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                {/* PDF Frame */}
                <div className="relative w-full bg-muted/20" style={{ height: "650px" }}>
                  <iframe
                    src={personalInfo.resumePreviewUrl}
                    title="Prince Kumar Sahni Resume Preview"
                    className="h-full w-full border-0"
                    allow="autoplay"
                  />
                </div>
              </div>
            </Reveal>
          )}

          {/* Structured Resume Content */}
          <div className="mt-16 space-y-14">
            {/* 1. Professional Summary */}
            <Reveal>
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-soft">
                <div className="flex items-center gap-2.5 text-primary mb-3">
                  <Sparkles className="h-5 w-5" />
                  <h2 className="font-display text-lg font-bold uppercase tracking-wider text-foreground">
                    Professional Summary
                  </h2>
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                  {personalInfo.bio}
                </p>
                <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  {personalInfo.bioExtended}
                </p>
              </div>
            </Reveal>

            {/* 2. Professional Experience */}
            <Reveal delay={0.05}>
              <div>
                <div className="flex items-center gap-2.5 mb-6">
                  <Briefcase className="h-5 w-5 text-primary" />
                  <h2 className="font-display text-xl font-bold uppercase tracking-wider text-foreground">
                    Work Experience
                  </h2>
                </div>

                <div className="space-y-8">
                  {experiences.map((exp) => (
                    <div
                      key={`${exp.title}-${exp.company}`}
                      className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-soft transition-all hover:border-primary/40 hover:shadow-md"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-border pb-4">
                        <div>
                          <h3 className="font-display text-xl font-bold text-foreground">
                            {exp.title}
                          </h3>
                          <p className="text-sm font-semibold text-primary mt-0.5">
                            {exp.company} · {exp.location}
                          </p>
                        </div>
                        <span className="font-mono text-xs font-semibold text-muted-foreground">
                          {exp.period}
                        </span>
                      </div>

                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                        {exp.description}
                      </p>

                      <div className="mt-4 space-y-2">
                        {exp.achievements.map((ach) => (
                          <div key={ach} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-5 flex flex-wrap gap-1.5 pt-4 border-t border-border">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-border bg-secondary/80 px-2.5 py-1 text-xs font-medium text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* 3. Technical Skills */}
            <Reveal delay={0.1}>
              <div>
                <div className="flex items-center gap-2.5 mb-6">
                  <Code2 className="h-5 w-5 text-primary" />
                  <h2 className="font-display text-xl font-bold uppercase tracking-wider text-foreground">
                    Technical Skills
                  </h2>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {skillCategories.map((cat) => (
                    <div
                      key={cat.name}
                      className="rounded-2xl border border-border bg-card p-6 shadow-soft"
                    >
                      <h3 className="font-display text-base font-bold text-foreground">
                        {cat.name}
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {cat.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {cat.skills.map((s) => (
                          <span
                            key={s.name}
                            className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 text-xs font-medium text-foreground"
                          >
                            {s.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* 4. Education */}
            <Reveal delay={0.15}>
              <div>
                <div className="flex items-center gap-2.5 mb-6">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <h2 className="font-display text-xl font-bold uppercase tracking-wider text-foreground">
                    Education
                  </h2>
                </div>

                <div className="space-y-6">
                  {education.map((edu) => (
                    <div
                      key={edu.degree}
                      className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-soft"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                        <div>
                          <h3 className="font-display text-lg font-bold text-foreground">
                            {edu.degree}
                          </h3>
                          <p className="text-sm font-semibold text-primary mt-0.5">
                            {edu.institution}
                          </p>
                        </div>
                        <span className="font-mono text-xs text-muted-foreground">
                          {edu.period} · {edu.gpa}
                        </span>
                      </div>

                      {edu.relevant && (
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {edu.relevant.map((course) => (
                            <span
                              key={course}
                              className="rounded-md border border-border bg-secondary/60 px-2 py-0.5 text-xs text-muted-foreground"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* 5. Certifications */}
            <Reveal delay={0.2}>
              <div>
                <div className="flex items-center gap-2.5 mb-6">
                  <Award className="h-5 w-5 text-primary" />
                  <h2 className="font-display text-xl font-bold uppercase tracking-wider text-foreground">
                    Certifications
                  </h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {resumeCertifications.map((cert) => (
                    <div
                      key={cert.name}
                      className="rounded-2xl border border-border bg-card p-5 shadow-soft"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                          {cert.issuer}
                        </span>
                        <span className="font-mono text-xs text-muted-foreground">
                          {cert.date}
                        </span>
                      </div>
                      <h3 className="mt-2 font-display text-base font-bold text-foreground">
                        {cert.name}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* 6. Key Projects */}
            <Reveal delay={0.25}>
              <div>
                <div className="flex items-center gap-2.5 mb-6">
                  <Layers className="h-5 w-5 text-primary" />
                  <h2 className="font-display text-xl font-bold uppercase tracking-wider text-foreground">
                    Selected Engineering Projects
                  </h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {resumeProjects.map((proj) => (
                    <div
                      key={proj.name}
                      className="rounded-2xl border border-border bg-card p-6 shadow-soft"
                    >
                      <h3 className="font-display text-lg font-bold text-foreground">
                        {proj.name}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                        {proj.description}
                      </p>
                      <p className="mt-3 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                        ⚡ Impact: {proj.impact}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {proj.technologies.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-border bg-secondary/60 px-2 py-0.5 text-xs text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
