import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  ExternalLink,
  Lock,
  Shield,
  Sparkles,
  Terminal,
  Video,
  Zap,
} from "lucide-react";
import { Reveal } from "@/components/ui/primitives/Reveal";
import { mockProjects, personalInfo } from "@/data/portfolioData";

export const AppsSection = () => {
  const spotlight = mockProjects[0];
  const miniApps = mockProjects.slice(1, 5);

  return (
    <section id="apps" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Watermark Text (Tara Routray Signature) */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute left-0 right-0 top-12 -z-10 text-center font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground/[0.035] dark:text-foreground/[0.045]"
      >
        Apps shipped with intent
      </div>

      <div className="container-page relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3.5 py-1 text-xs font-semibold text-muted-foreground shadow-soft backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500 animate-pulse" />
              <span className="tracking-wider uppercase text-[10.5px] font-bold text-foreground">
                SELECTED WORK
              </span>
            </div>

            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Apps shipped{" "}
              <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-600 dark:from-amber-400 dark:via-amber-300 dark:to-yellow-500 bg-clip-text text-transparent">
                with intent
              </span>
            </h2>

            <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed">
              Production-ready, thoughtfully crafted — each app solves a real problem with clean architecture.
            </p>
          </div>

          <Link
            to="/apps"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors shrink-0"
          >
            Explore all
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Spotlight Featured Application (Mac Window Frame) */}
        {spotlight && (
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:shadow-md">
              {/* macOS Window Top Bar */}
              <div className="flex items-center justify-between border-b border-border/80 bg-muted/40 px-5 sm:px-6 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-red-400/80" />
                    <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                  </div>
                  <div className="flex items-center gap-1.5 rounded-md border border-border bg-card/70 px-3 py-0.5 font-mono text-[11px] text-muted-foreground">
                    <Lock className="h-3 w-3 text-muted-foreground/70" />
                    <span>thor-ai.princesahni.com</span>
                  </div>
                </div>

                <span className="font-mono text-xs text-muted-foreground">
                  #1 · Spotlight
                </span>
              </div>

              {/* Spotlight Body */}
              <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[280px_1fr] items-center">
                {/* Left: Graphic Icon Container */}
                <div className="flex h-56 sm:h-64 w-full items-center justify-center rounded-2xl border border-border bg-gradient-to-br from-card via-accent/30 to-card p-6 shadow-inner">
                  <div className="relative flex h-28 w-28 items-center justify-center rounded-3xl bg-purple-500/10 border border-purple-500/20 shadow-md">
                    <Shield className="h-16 w-16 text-purple-600 dark:text-purple-400" />
                    <Sparkles className="absolute -top-1 -right-1 h-5 w-5 text-amber-500 animate-pulse" />
                  </div>
                </div>

                {/* Right: Details */}
                <div className="flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-primary">
                      ★ SPOTLIGHT
                    </span>

                    <h3 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                      {spotlight.title}
                    </h3>

                    <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                      {spotlight.description}
                    </p>
                  </div>

                  {/* Actions & Subtext */}
                  <div className="mt-6 pt-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={spotlight.liveUrl || personalInfo.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-500 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all hover:shadow-md hover:-translate-y-px active:scale-95"
                      >
                        Visit app
                        <ArrowUpRight className="h-4 w-4" />
                      </a>

                      <a
                        href={spotlight.githubUrl || personalInfo.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-accent"
                      >
                        External link
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>

                    <p className="mt-3 text-xs text-muted-foreground">
                      Opens in a new tab · thor-ai.princesahni.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom bar of Mac Window */}
              <div className="flex items-center justify-between border-t border-border/80 bg-muted/20 px-6 py-2.5 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                  Featured
                </span>
                <span className="font-mono text-[11px]">
                  thor-ai.princesahni.com
                </span>
              </div>
            </div>
          </Reveal>
        )}

        {/* Four Mini App Cards Row */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {miniApps.map((app, index) => {
            const icons = [Bot, Terminal, Zap, Video];
            const IconComponent = icons[index % icons.length];

            return (
              <Reveal key={app.title} delay={index * 0.06}>
                <div className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md h-full">
                  <div>
                    {/* Top Row: Icon Container + Meta */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 shrink-0">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-display text-sm font-bold text-foreground truncate group-hover:text-primary transition-colors">
                          {app.title}
                        </h4>
                        <span className="text-[10.5px] font-medium text-muted-foreground">
                          Featured
                        </span>
                      </div>
                    </div>

                    {/* Excerpt */}
                    <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                      {app.description}
                    </p>
                  </div>

                  {/* Open Link */}
                  <div className="mt-4 pt-3 border-t border-border/80">
                    <a
                      href={app.liveUrl || app.githubUrl || personalInfo.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-foreground group-hover:text-primary transition-colors"
                    >
                      Open
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom Status Bar */}
        <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground border-t border-border/80 pt-4">
          <span className="font-mono text-[11px]">{`</> 5/5 featured`}</span>
          <span className="inline-flex items-center gap-1 font-medium">
            🛡 Production grade
          </span>
        </div>
      </div>
    </section>
  );
};

export default AppsSection;
