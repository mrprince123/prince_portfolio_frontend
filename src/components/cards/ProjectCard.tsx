import { useState } from "react";
import { ExternalLink, Github, Layers, ArrowUpRight, CheckCircle2, Cpu, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export interface ProjectCardData {
  id?: number | string;
  title: string;
  description: string;
  technologies?: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  coverImage?: string;
  category?: string;
  impact?: string;
  architectureNotes?: string;
}

export function ProjectCard({ project, index }: { project: ProjectCardData; index: number }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const hasLive = project.liveUrl && project.liveUrl !== "#";
  const hasGithub = project.githubUrl && project.githubUrl !== "#";

  return (
    <>
      <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#4361ee]/20 bg-card/80 p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#4361ee]/50 hover:shadow-[0_15px_40px_-15px_rgba(67,97,238,0.35)]">
        {/* Top Header: System Code & Status Badges */}
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-border">
            <span className="font-mono text-xs font-semibold text-[#4895ef]">
              SYS-{String(index + 1).padStart(2, "0")}
            </span>
            <div className="flex items-center gap-2">
              {project.featured && (
                <span className="inline-flex items-center gap-1 rounded-full border border-[#4361ee]/30 bg-[#4361ee]/15 px-2 py-0.5 font-mono text-[10px] text-[#4895ef] font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#4895ef] animate-pulse" />
                  Featured System
                </span>
              )}
              <span className="rounded-full border border-border bg-muted/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                {project.category || "Full-Stack"}
              </span>
            </div>
          </div>

          {/* Title & Description */}
          <div className="mt-4">
            <h3 className="font-display text-lg sm:text-xl font-bold text-foreground group-hover:text-[#4895ef] transition-colors flex items-center justify-between">
              <span>{project.title}</span>
              <ArrowUpRight className="h-4 w-4 text-[#4895ef] opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Key Impact Metric Callout */}
          <div className="mt-4 rounded-xl border border-[#4361ee]/20 bg-[#4361ee]/5 dark:bg-[#4361ee]/10 p-2.5 font-mono text-xs text-foreground flex items-center gap-2">
            <CheckCircle2 className="h-3.5 w-3.5 text-[#4895ef] shrink-0" />
            <span className="truncate">
              {project.impact || "Production-grade architecture with real-time responsive workflows"}
            </span>
          </div>

          {/* Technologies Stack Tags */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {(project.technologies ?? []).slice(0, 5).map((t) => (
              <span
                key={t}
                className="rounded-lg border border-border bg-muted/60 dark:bg-muted/30 px-2 py-0.5 font-mono text-[11px] text-muted-foreground group-hover:border-[#4361ee]/40 group-hover:text-[#4361ee] dark:group-hover:text-white transition-colors"
              >
                {t}
              </span>
            ))}
            {(project.technologies?.length ?? 0) > 5 && (
              <span className="font-mono text-[11px] text-muted-foreground py-0.5 px-1">
                +{(project.technologies?.length ?? 0) - 5}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 pt-4 border-t border-border flex items-center justify-between gap-2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-[#4361ee]/30 bg-[#4361ee]/10 px-3 py-1.5 font-mono text-xs font-medium text-[#4895ef] hover:bg-[#4361ee]/20 transition-all"
          >
            <Layers className="h-3.5 w-3.5 text-[#4895ef]" />
            <span>Architecture</span>
          </button>

          <div className="flex items-center gap-2">
            {hasGithub && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-border p-1.5 text-muted-foreground hover:text-foreground hover:border-[#4361ee]/40 transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {hasLive ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#4361ee] px-3 py-1.5 font-mono text-xs font-semibold text-white hover:bg-[#3a56d4] transition-all shadow-sm"
              >
                <span>Live System</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            ) : (
              <span className="font-mono text-[11px] text-muted-foreground italic px-2 py-1">
                Internal Architecture
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Architecture Breakdown Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl border-[#4361ee]/30 bg-card/95 backdrop-blur-2xl">
          <DialogHeader>
            <div className="flex items-center gap-2 font-mono text-xs text-[#4895ef] mb-1">
              <Cpu className="h-4 w-4" /> System Architecture & Specifications
            </div>
            <DialogTitle className="font-display text-2xl font-bold text-foreground">
              {project.title}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-2 text-xs sm:text-sm">
            <div>
              <h4 className="font-mono text-xs font-semibold uppercase text-[#4895ef] mb-1">Problem & Impact</h4>
              <p className="text-muted-foreground leading-relaxed">{project.description}</p>
            </div>

            <div className="rounded-xl border border-border bg-muted/40 p-3.5">
              <h4 className="font-mono text-xs font-semibold uppercase text-[#4895ef] mb-2">Technical Highlights</h4>
              <ul className="space-y-1.5 text-foreground font-mono text-xs">
                <li className="flex items-start gap-2">
                  <span className="text-[#4895ef] font-bold">▸</span>
                  <span>Impact: {project.impact || "High throughput, sub-second latency, zero downtime deploys"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4895ef] font-bold">▸</span>
                  <span>Stack: {(project.technologies ?? []).join(" · ")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4895ef] font-bold">▸</span>
                  <span>Fault tolerance: Decoupled service boundaries, automated CI/CD verification & graceful error fallbacks.</span>
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-border">
              {hasGithub && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3.5 py-1.5 font-mono text-xs text-muted-foreground hover:text-foreground"
                >
                  <Github className="h-3.5 w-3.5" /> Source Code
                </a>
              )}
              {hasLive && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#4361ee] px-4 py-1.5 font-mono text-xs font-semibold text-white hover:bg-[#3a56d4]"
                >
                  Open Live System <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
