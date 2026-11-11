import { useState, useMemo } from "react";
import { skillCategories, learningTech } from "@/data/portfolioData";
import { useResource } from "@/hooks/useResource";
import { Cpu, Search, Sparkles, Code2, Server, Cloud, Database, Wrench } from "lucide-react";

interface RawSkill {
  name: string;
  color?: string;
}
interface RawCategory {
  name: string;
  description?: string;
  skills?: RawSkill[];
  skillsList?: RawSkill[];
}

const normalize = (categories: RawCategory[]) =>
  categories.map((c) => ({
    name: c.name,
    description: c.description ?? "",
    skills: (c.skills ?? c.skillsList ?? []).map((s) => ({ name: s.name, color: s.color })),
  }));

const SkillsSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const { data = skillCategories } = useResource<RawCategory[]>(
    ["skills"],
    import.meta.env.VITE_SKILL_URL,
    { fallback: skillCategories, timeoutMs: 2000 },
  );

  const categories = normalize(data);

  const filteredCategories = useMemo(() => {
    return categories
      .filter((cat) => {
        if (activeCategory === "all") return true;
        return cat.name.toLowerCase().includes(activeCategory.toLowerCase());
      })
      .map((cat) => ({
        ...cat,
        skills: cat.skills.filter((s) =>
          s.name.toLowerCase().includes(searchQuery.toLowerCase().trim()),
        ),
      }))
      .filter((cat) => cat.skills.length > 0);
  }, [categories, activeCategory, searchQuery]);

  return (
    <section id="skills" className="container mx-auto px-4 sm:px-6 py-20 max-w-7xl">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-border">
        <div>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#4361ee]/30 bg-[#4361ee]/10 px-3 py-1 font-mono text-xs text-[#4895ef] mb-2">
            <Cpu className="h-3.5 w-3.5 text-[#4895ef]" />
            <span>TECH STACK MATRIX · PRODUCTION ARSENAL</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Technologies & Tools in Production
          </h2>
          <p className="mt-1 font-mono text-xs text-muted-foreground">
            Every language, framework, database, and cloud tool used to build scalable architectures.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search skills (e.g. Docker, React)..."
            className="w-full rounded-xl border border-border bg-black/30 py-2 pl-9 pr-4 font-mono text-xs text-foreground placeholder:text-muted-foreground focus:border-[#4361ee] focus:outline-none"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="mt-8 flex flex-wrap items-center gap-2">
        {[
          { id: "all", label: "All Stack" },
          { id: "frontend", label: "Frontend" },
          { id: "backend", label: "Backend" },
          { id: "cloud", label: "Cloud & DevOps" },
          { id: "database", label: "Databases" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveCategory(tab.id)}
            className={`rounded-full px-4 py-1.5 font-mono text-xs transition-all ${
              activeCategory === tab.id
                ? "bg-[#4361ee] text-white font-medium shadow-md shadow-purple-600/20"
                : "border border-border bg-card/60 text-muted-foreground hover:border-[#4361ee]/30 hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCategories.map((cat) => (
          <div
            key={cat.name}
            className="rounded-2xl border border-[#4361ee]/20 bg-card/70 p-6 backdrop-blur-xl hover:border-[#4361ee]/40 transition-all shadow-md shadow-purple-500/5"
          >
            <div className="flex items-center justify-between pb-3 border-b border-border">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#4895ef]">
                {cat.name}
              </h3>
              <span className="font-mono text-[10px] text-muted-foreground">
                {cat.skills.length} technologies
              </span>
            </div>
            {cat.description && (
              <p className="mt-2 text-xs text-muted-foreground">{cat.description}</p>
            )}

            <div className="mt-4 flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group flex items-center gap-2 rounded-xl border border-border bg-black/40 px-3 py-1.5 font-mono text-xs text-zinc-200 transition-all hover:border-[#4361ee]/50 hover:bg-[#4361ee]/10 hover:text-white"
                >
                  <span
                    className="h-2 w-2 rounded-full shrink-0"
                    style={{ backgroundColor: skill.color || "#a855f7" }}
                  />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Currently Exploring / Next Horizon */}
      <div className="mt-10 rounded-2xl border border-[#4361ee]/20 bg-black/40 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 font-mono text-xs text-[#4895ef]">
          <Sparkles className="h-4 w-4 text-[#4895ef] animate-pulse" />
          <span className="font-semibold uppercase tracking-wider">Active Explorations:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {learningTech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[#4361ee]/30 bg-[#4361ee]/15 px-3 py-0.5 font-mono text-xs text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
