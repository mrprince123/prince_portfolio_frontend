import { useState, useMemo } from "react";
import {
  Search,
  ExternalLink,
  Github,
  ArrowUpRight,
  Layers,
  Sparkles,
  X,
  Lock,
  Bot,
  Zap,
  Globe,
  Star,
  CheckCircle2,
} from "lucide-react";
import { Seo } from "@/components/seo";
import { useResource } from "@/hooks/useResource";
import { Reveal } from "@/components/ui/primitives/Reveal";
import { personalInfo, mockProjects } from "@/data/portfolioData";

export interface AppProject {
  id?: number | string;
  title: string;
  description: string;
  coverImage?: string;
  category?: string;
  technologies?: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI & ML" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "web", label: "Web Apps" },
];

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const { data: rawProjects } = useResource<AppProject[]>(
    ["projects"],
    import.meta.env.VITE_PROJECT_URL,
    { fallback: mockProjects, timeoutMs: 3000 }
  );

  const projects =
    Array.isArray(rawProjects) && rawProjects.length > 0
      ? rawProjects
      : mockProjects;

  // Filtered list
  const filtered = useMemo(() => {
    return projects.filter((app) => {
      const matchesCategory =
        selectedCategory === "all" ||
        app.category?.toLowerCase() === selectedCategory.toLowerCase() ||
        app.technologies?.some((t) =>
          t.toLowerCase().includes(selectedCategory.toLowerCase())
        );

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        app.title.toLowerCase().includes(query) ||
        app.description.toLowerCase().includes(query) ||
        app.technologies?.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  // Spotlight App (first featured project or first project)
  const spotlightApp = useMemo(() => {
    return projects.find((p) => p.featured) || projects[0];
  }, [projects]);

  const featuredCount = useMemo(() => {
    return projects.filter((p) => p.featured).length;
  }, [projects]);

  return (
    <>
      <Seo
        title="Software Projects & Apps | Prince Kumar Sahni"
        description="Production applications, developer tools, AI workflows, and cloud backends engineered by Prince Kumar Sahni. Explore codebases, tech stacks, and live deployments."
        url="https://princesahni.com/projects"
        image="https://princesahni.com/og-images/princesahni-logo.png"
        keywords={[
          "Prince Kumar Sahni Projects",
          "Prince Sahni Apps",
          "Software Engineering Portfolio",
          "Thor AI",
          "CodeRev",
          "Fine Browser",
          "Full Stack Projects",
          "React",
          "Node.js",
        ]}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ]}
      />

      <div className="relative min-h-screen py-16 md:py-24 overflow-hidden">
        {/* Tara-inspired Large Watermark Text in Top Right */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute right-4 top-10 -z-10 font-display text-[120px] font-black tracking-widest text-foreground/[0.03] dark:text-foreground/[0.04] sm:text-[180px] lg:text-[230px]"
        >
          APPS
        </div>

        <div className="container-page relative z-10">
          {/* Header Section */}
          <div className="text-center">
            {/* Pill Tag: • APPLICATIONS  X apps */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-xs font-semibold text-muted-foreground shadow-soft backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
              <span className="tracking-wider uppercase text-[11px] font-bold text-foreground">
                APPLICATIONS
              </span>
              <span className="text-muted-foreground/40">•</span>
              <span>{projects.length} apps</span>
            </div>

            {/* Shipped with intent */}
            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
              Shipped <br />
              <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-600 dark:from-amber-400 dark:via-amber-300 dark:to-yellow-500 bg-clip-text text-transparent">
                with intent
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground">
              Every app here was built to solve a real problem — designed for usability, performance, and clean architecture.
            </p>

            {/* Pill Search Bar */}
            <div className="mx-auto mt-8 max-w-xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search apps — e.g. Thor AI, Celery, FastAPI, PIM"
                  className="w-full rounded-full border border-border bg-card/80 backdrop-blur-sm pl-11 pr-11 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 shadow-soft focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    aria-label="Clear search"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              {/* Stats pill below search bar */}
              <div className="mt-3.5 flex items-center justify-center gap-3 text-xs text-muted-foreground">
                <span>{projects.length} total</span>
                <span className="text-muted-foreground/40">•</span>
                <span>{featuredCount} featured</span>
              </div>
            </div>
          </div>

          {/* Spotlight / Featured Application Card (Tara-inspired Mac Window Card) */}
          {spotlightApp && !searchQuery && selectedCategory === "all" && (
            <Reveal delay={0.1}>
              <div className="mt-14 overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:shadow-md">
                {/* macOS Window Top Bar */}
                <div className="flex items-center justify-between border-b border-border/80 bg-muted/40 px-5 sm:px-6 py-3.5">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex items-center gap-1.5">
                      <span className="h-3 w-3 rounded-full bg-red-400/80" />
                      <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                      <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                    </div>
                    <div className="flex items-center gap-1.5 rounded-md border border-border bg-card/70 px-3 py-1 font-mono text-[11px] text-muted-foreground">
                      <Lock className="h-3 w-3 text-muted-foreground/70" />
                      <span className="truncate max-w-[200px] sm:max-w-xs">
                        {spotlightApp.liveUrl
                          ? spotlightApp.liveUrl.replace(/^https?:\/\//, "")
                          : "thor-ai.princesahni.com"}
                      </span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    <Star className="h-3 w-3 fill-primary" />
                    Featured
                  </span>
                </div>

                {/* Spotlight Body */}
                <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[280px_1fr] items-center">
                  {/* Left Column: App Icon Container */}
                  <div className="flex h-56 sm:h-64 w-full items-center justify-center rounded-2xl border border-border bg-gradient-to-br from-card to-accent/40 p-8 shadow-inner">
                    <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-primary/10 border border-primary/20 shadow-md">
                      {spotlightApp.category === "ai" ? (
                        <Bot className="h-14 w-14 text-primary" />
                      ) : (
                        <Zap className="h-14 w-14 text-primary" />
                      )}
                    </div>
                  </div>

                  {/* Right Column: App Details */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold uppercase tracking-widest text-primary">
                          ★ SPOTLIGHT
                        </span>
                        <span className="text-xs text-muted-foreground/60">•</span>
                        <span className="text-xs font-medium text-muted-foreground uppercase">
                          {spotlightApp.category || "Full-Stack"}
                        </span>
                      </div>

                      <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                        {spotlightApp.title}
                      </h2>

                      <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                        {spotlightApp.description}
                      </p>

                      {/* Tech Pills */}
                      {spotlightApp.technologies && (
                        <div className="mt-5 flex flex-wrap gap-2">
                          {spotlightApp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-border bg-secondary/80 px-3 py-1 text-xs font-medium text-muted-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      <a
                        href={spotlightApp.liveUrl || personalInfo.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-500 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all hover:shadow-md hover:-translate-y-0.5 active:scale-95"
                      >
                        Visit app
                        <ArrowUpRight className="h-4 w-4" />
                      </a>

                      {spotlightApp.githubUrl && (
                        <a
                          href={spotlightApp.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-accent"
                        >
                          <Github className="h-4 w-4" />
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          )}

          {/* Category Filter Pills & Results */}
          <div className="mt-14 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                    selectedCategory === cat.id
                      ? "bg-primary text-primary-foreground shadow-sm shadow-primary/25"
                      : "border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="text-xs text-muted-foreground">
              Showing <strong className="text-foreground">{filtered.length}</strong>{" "}
              {filtered.length === 1 ? "application" : "applications"}
            </div>
          </div>

          {/* All Apps Grid */}
          {filtered.length === 0 ? (
            <div className="mt-12 text-center py-16 rounded-2xl border border-dashed border-border bg-card/40">
              <p className="font-display text-lg font-bold text-foreground">
                No applications found
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Try searching for a different keyword or resetting your filter.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="mt-4 rounded-full bg-primary px-5 py-2 text-xs font-semibold text-primary-foreground"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {filtered.map((app, index) => {
                const hasLive = app.liveUrl && app.liveUrl !== "#";
                const hasGithub = app.githubUrl && app.githubUrl !== "#";
                const targetLive = hasLive ? app.liveUrl : personalInfo.github;
                const targetGithub = hasGithub ? app.githubUrl : personalInfo.github;

                return (
                  <Reveal key={app.id ?? index} delay={(index % 2) * 0.08}>
                    <div className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-7 sm:p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md h-full">
                      <div>
                        {/* Top Meta: Category + Featured badge */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                            <Layers className="h-3 w-3 text-primary" />
                            {app.category?.toUpperCase() || "WEB"}
                          </span>

                          {app.featured && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-500 dark:text-amber-400">
                              <Sparkles className="h-3 w-3" />
                              Featured
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="font-display text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                          {app.title}
                        </h3>

                        {/* Description */}
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {app.description}
                        </p>

                        {/* Tech tags */}
                        {app.technologies && app.technologies.length > 0 && (
                          <div className="mt-4 flex flex-wrap gap-1.5">
                            {app.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 text-xs font-medium text-muted-foreground"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Card Action Links */}
                      <div className="mt-6 flex items-center gap-4 pt-4 border-t border-border text-xs font-semibold">
                        {hasLive && (
                          <a
                            href={targetLive}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-primary hover:underline"
                          >
                            Live Demo
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </a>
                        )}

                        {hasGithub && (
                          <a
                            href={targetGithub}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
                          >
                            <Github className="h-3.5 w-3.5" />
                            Source Code
                          </a>
                        )}
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
