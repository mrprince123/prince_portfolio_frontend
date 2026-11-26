import { useState, useMemo } from "react";
import {
  Code2,
  Server,
  Database,
  Cloud,
  Wrench,
  Sparkles,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Cpu,
  Layers,
  Globe,
  ShoppingBag,
  CreditCard,
  Bot,
  Search,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Seo } from "@/components/seo";
import { useResource } from "@/hooks/useResource";
import { skillCategories, stats, learningTech } from "@/data/portfolioData";
import { Reveal } from "@/components/ui/primitives/Reveal";

interface RawSkill {
  name: string;
  icon?: string;
  color?: string;
}

interface RawCategory {
  _id?: string;
  name: string;
  description?: string;
  skills?: RawSkill[];
  skillsList?: RawSkill[];
}

const CATEGORY_ICONS: Record<string, any> = {
  "Programming Languages": Code2,
  "Frameworks & Platforms": Layers,
  "APIs & Integrations": Globe,
  "Databases & In-Memory": Database,
  "Message Brokers & Queues": Cpu,
  "AI & Automation": Bot,
  "PIM & E-Commerce Platforms": ShoppingBag,
  "Cloud, DevOps & Tools": Cloud,
  "Payment Gateways": CreditCard,
  "Frontend Development": Code2,
  "Backend Development": Server,
  "Database Technologies": Database,
  "DevOps & Cloud": Cloud,
  "Tools & Development": Wrench,
};

const ARCHITECTURE_DEFAULTS = [
  {
    title: "TypeScript by Default",
    desc: "Strict type safety across API boundaries, state stores, and utility modules to prevent runtime regressions.",
  },
  {
    title: "Decoupled Microservices",
    desc: "Clear separation of concerns, containerized services with Docker, and clean async messaging patterns.",
  },
  {
    title: "Multi-Tier Caching",
    desc: "In-memory Redis caching, HTTP cache headers, and CDN edge optimization to protect primary databases.",
  },
  {
    title: "Automated CI/CD Verification",
    desc: "GitHub Actions pipelines running linter, automated tests, and Docker builds before every production rollout.",
  },
];

const Skills = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Safely attempt fetching from API if configured, falling back to static resume data
  const { data: rawApiData } = useResource<RawCategory[]>(
    ["skills"],
    import.meta.env.VITE_SKILL_URL,
    { fallback: undefined, timeoutMs: 2500 }
  );

  // Normalize categories
  const categories = useMemo(() => {
    if (Array.isArray(rawApiData) && rawApiData.length > 0) {
      return rawApiData.map((cat, i) => ({
        name: cat.name,
        description: cat.description || "",
        skills: (cat.skills || cat.skillsList || []).map((s) => ({
          name: s.name,
          icon: s.icon || "Code2",
          color: s.color || "#0d9488",
        })),
      }));
    }
    return skillCategories;
  }, [rawApiData]);

  // Total skills count
  const totalSkillsCount = useMemo(() => {
    return categories.reduce((sum, cat) => sum + (cat.skills?.length || 0), 0);
  }, [categories]);

  // Filtered categories
  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return categories;

    return categories
      .map((cat) => {
        const matchesCategory =
          cat.name.toLowerCase().includes(query) ||
          cat.description.toLowerCase().includes(query);

        const matchingSkills = cat.skills.filter((s) =>
          s.name.toLowerCase().includes(query)
        );

        if (matchesCategory) return cat;
        if (matchingSkills.length > 0) {
          return { ...cat, skills: matchingSkills };
        }
        return null;
      })
      .filter(Boolean) as typeof categories;
  }, [categories, searchQuery]);

  return (
    <>
      <Seo
        title="Skills | Prince Kumar Sahni - Software Engineer"
        description="Comprehensive technical skills, programming languages, frameworks, and architecture defaults utilized by Prince Kumar Sahni."
        url="https://princesahni.com/skills"
        image="https://princesahni.com/og-images/princesahni-logo.png"
      />

      <div className="relative min-h-screen py-16 md:py-24 overflow-hidden">
        {/* Tara-inspired Large Watermark in Top Right */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute right-4 top-10 -z-10 font-display text-[120px] font-black tracking-widest text-foreground/[0.03] dark:text-foreground/[0.04] sm:text-[180px] lg:text-[230px]"
        >
          SKILLS
        </div>

        <div className="container-page relative z-10">
          {/* Header Section */}
          <div className="text-center">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-xs font-semibold text-muted-foreground shadow-soft backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
              <span className="tracking-wider uppercase text-[11px] font-bold text-foreground">
                TECHNICAL STACK
              </span>
              <span className="text-muted-foreground/40">•</span>
              <span>{totalSkillsCount}+ technologies</span>
            </div>

            {/* Headline */}
            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
              Skills, languages &amp; <br />
              <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-600 dark:from-amber-400 dark:via-amber-300 dark:to-yellow-500 bg-clip-text text-transparent">
                architecture defaults
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground">
              The production toolkit, databases, and engineering principles I rely on to build scalable and maintainable applications.
            </p>

            {/* Search Filter Bar */}
            <div className="mx-auto mt-8 max-w-md">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter by skill or category (e.g. Python, Celery, Docker)..."
                  className="w-full rounded-full border border-border bg-card/80 backdrop-blur-sm pl-11 pr-11 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 shadow-soft focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
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
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="mt-12 grid grid-cols-2 gap-4 rounded-2xl border border-border bg-card/60 p-6 sm:p-8 shadow-soft sm:grid-cols-4">
            <div className="text-center sm:text-left">
              <p className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                {totalSkillsCount}+
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-0.5">
                Technologies
              </p>
            </div>
            <div className="text-center sm:text-left">
              <p className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                2+
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-0.5">
                Years Experience
              </p>
            </div>
            <div className="text-center sm:text-left">
              <p className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                {categories.length}
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-0.5">
                Core Domains
              </p>
            </div>
            <div className="text-center sm:text-left">
              <p className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                15+
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-0.5">
                Client Modules
              </p>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredCategories.map((category, index) => {
              const Icon = CATEGORY_ICONS[category.name] || Code2;

              return (
                <Reveal key={category.name} delay={index * 0.05}>
                  <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:border-primary/40 hover:shadow-md">
                    <div>
                      {/* Category Header */}
                      <div className="flex items-center gap-2.5 border-b border-border pb-4 mb-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-display text-base font-bold text-foreground">
                            {category.name}
                          </h3>
                          <p className="text-[11px] text-muted-foreground truncate">
                            {category.description}
                          </p>
                        </div>
                      </div>

                      {/* Skill Pills */}
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <div
                            key={skill.name}
                            className="group inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/60 px-3 py-1.5 text-xs font-medium text-foreground transition-all hover:border-primary/40 hover:bg-card"
                          >
                            <span
                              className="h-1.5 w-1.5 rounded-full transition-transform group-hover:scale-125"
                              style={{
                                backgroundColor:
                                  skill.color || "hsl(var(--primary))",
                              }}
                            />
                            <span>{skill.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Currently Exploring Strip */}
          {Array.isArray(learningTech) && learningTech.length > 0 && (
            <Reveal delay={0.15}>
              <div className="mt-12 rounded-2xl border border-border bg-card/60 p-6 shadow-soft">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-purple-500" />
                    </span>
                    <span className="font-display text-sm font-bold text-foreground flex items-center gap-1.5">
                      <Sparkles className="h-4 w-4 text-amber-500" />
                      Currently Exploring &amp; Leveling Up
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {learningTech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-purple-500/20 bg-purple-500/5 px-3 py-1 text-xs font-semibold text-purple-700 dark:text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          )}

          {/* Architecture Defaults / System Philosophy */}
          <div className="mt-20 border-t border-border pt-16">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Methodology
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-foreground">
                Architecture defaults &amp; standards
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Standards I enforce across codebases to ensure stability, testability, and fast shipping velocity.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {ARCHITECTURE_DEFAULTS.map((def, idx) => (
                <Reveal key={def.title} delay={idx * 0.08}>
                  <div className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:border-primary/40">
                    <div className="flex items-center gap-2.5 mb-2">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-400 shrink-0" />
                      <h4 className="font-display text-base font-bold text-foreground">
                        {def.title}
                      </h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pl-7">
                      {def.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 rounded-2xl border border-border bg-card/60 p-8 text-center shadow-soft">
            <h3 className="font-display text-2xl font-bold text-foreground">
              Looking for an engineer with this exact stack?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
              I can hit the ground running with your team and start delivering scalable, well-tested code from day one.
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-500 px-7 py-3 text-sm font-semibold text-white shadow-soft transition-all hover:shadow-md hover:-translate-y-px active:scale-95"
              >
                Get In Touch →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
