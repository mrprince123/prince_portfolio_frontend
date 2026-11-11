import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { mockProjects } from "@/data/portfolioData";
import { useResource } from "@/hooks/useResource";
import { ProjectCard, type ProjectCardData } from "@/components/cards/ProjectCard";
import { Skeleton } from "@/components/ui/primitives/Skeleton";
import { Layers, ArrowRight, Sparkles, Filter } from "lucide-react";

const CATEGORIES = [
  { id: "all", label: "All Systems" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "cloud", label: "Cloud & APIs" },
  { id: "mobile", label: "Mobile & Apps" },
];

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const { data: projects = mockProjects, isLoading } = useResource<ProjectCardData[]>(
    ["projects"],
    import.meta.env.VITE_PROJECT_URL,
    { fallback: mockProjects, timeoutMs: 3000 },
  );

  const filtered = useMemo(() => {
    if (selectedCategory === "all") return projects;
    return projects.filter((p) => {
      const cat = (p.category || "").toLowerCase();
      if (selectedCategory === "fullstack") return cat.includes("full") || cat.includes("web");
      if (selectedCategory === "cloud") return cat.includes("cloud") || cat.includes("api") || cat.includes("node");
      if (selectedCategory === "mobile") return cat.includes("mobile") || cat.includes("android");
      return true;
    });
  }, [projects, selectedCategory]);

  return (
    <section id="systems" className="container mx-auto px-4 sm:px-6 py-20 max-w-7xl">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-border">
        <div>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#4361ee]/30 bg-[#4361ee]/10 px-3 py-1 font-mono text-xs text-[#4895ef] mb-2">
            <Layers className="h-3.5 w-3.5 text-[#4895ef]" />
            <span>FLAGSHIP SYSTEMS & LAB</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Featured Systems & Engineering Work
          </h2>
          <p className="mt-1 font-mono text-xs text-muted-foreground">
            Every product is designed with production-grade reliability, measurable performance, and clean modular code.
          </p>
        </div>

        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-[#4895ef] hover:text-[#4895ef] transition-colors font-medium"
        >
          <span>See all {projects.length} systems</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Category Filter Pills */}
      <div className="mt-8 flex flex-wrap items-center gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`rounded-full px-4 py-1.5 font-mono text-xs transition-all ${
              selectedCategory === cat.id
                ? "bg-[#4361ee] text-white font-medium shadow-md shadow-purple-600/20"
                : "border border-border bg-card/60 text-muted-foreground hover:border-[#4361ee]/30 hover:text-foreground"
            }`}
          >
            {cat.label}
          </button>
        ))}
        <span className="ml-auto font-mono text-xs text-muted-foreground hidden sm:inline">
          Showing {filtered.length} systems
        </span>
      </div>

      {/* Systems Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          <Skeleton variant="card" count={6} />
        ) : (
          filtered.slice(0, 6).map((project, i) => (
            <ProjectCard key={project.id ?? i} project={project} index={i} />
          ))
        )}
      </div>

      {/* Bottom CTA Bar */}
      <div className="mt-12 rounded-2xl border border-[#4361ee]/20 bg-gradient-to-r from-[#4361ee]/20 via-card to-black/40 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-[#4361ee]/20 p-2.5 text-[#4895ef] border border-[#4361ee]/30">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-display text-sm font-bold text-foreground">Have a complex distributed problem?</h4>
            <p className="text-xs text-muted-foreground">From microservices migrations to high-concurrency real-time apps.</p>
          </div>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-xl bg-[#4361ee] px-4 py-2 font-mono text-xs font-semibold text-white hover:bg-[#4361ee] transition-all shrink-0"
        >
          Let's discuss architecture →
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
