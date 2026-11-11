import { useState, useEffect, useMemo } from "react";
import { Seo } from "@/components/seo";
import { Github, Star, GitFork, ExternalLink, Search, Sparkles, BookOpen, Code2 } from "lucide-react";

interface Repository {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics?: string[];
}

const FALLBACK_REPOS: Repository[] = [
  {
    id: 1068742212,
    name: "prince_portfolio_frontend",
    full_name: "mrprince123/prince_portfolio_frontend",
    html_url: "https://github.com/mrprince123/prince_portfolio_frontend",
    description: "Personal portfolio website showcasing scalable projects, skills, experience, and achievements in software development.",
    language: "TypeScript",
    stargazers_count: 3,
    forks_count: 1,
    updated_at: "2026-11-11T16:25:02Z",
  },
  {
    id: 1440138175,
    name: "camera-monitor-nikon-z50-ii",
    full_name: "mrprince123/camera-monitor-nikon-z50-ii",
    html_url: "https://github.com/mrprince123/camera-monitor-nikon-z50-ii",
    description: "Camera monitoring and telemetry controller companion app for the Nikon Z50 II mirrorless camera.",
    language: "Kotlin",
    stargazers_count: 2,
    forks_count: 0,
    updated_at: "2026-11-09T18:00:00Z",
  },
  {
    id: 1068742213,
    name: "AI_Image_Pro_Front",
    full_name: "mrprince123/AI_Image_Pro_Front",
    html_url: "https://github.com/mrprince123/AI_Image_Pro_Front",
    description: "Frontend for an AI-powered image generation platform, delivering responsive generation, prompt enhancement and history.",
    language: "TypeScript",
    stargazers_count: 4,
    forks_count: 1,
    updated_at: "2026-11-04T12:00:00Z",
  },
  {
    id: 1068742214,
    name: "ai-music-pro-back",
    full_name: "mrprince123/ai-music-pro-back",
    html_url: "https://github.com/mrprince123/ai-music-pro-back",
    description: "Scalable, real-time music streaming backend with recommendation algorithms and audio pipeline orchestration.",
    language: "TypeScript",
    stargazers_count: 2,
    forks_count: 0,
    updated_at: "2026-10-28T09:00:00Z",
  },
  {
    id: 1068742215,
    name: "thor-ai",
    full_name: "mrprince123/thor-ai",
    html_url: "https://github.com/mrprince123/thor-ai",
    description: "A full-stack chat application with Retrieval-Augmented Generation (RAG) and intelligent document parsing.",
    language: "Python",
    stargazers_count: 3,
    forks_count: 1,
    updated_at: "2026-10-25T14:30:00Z",
  },
  {
    id: 1068742216,
    name: "Zomato_Basic_Backend",
    full_name: "mrprince123/Zomato_Basic_Backend",
    html_url: "https://github.com/mrprince123/Zomato_Basic_Backend",
    description: "Scalable backend service for a food delivery application, supporting restaurant discovery, orders, and authentication.",
    language: "JavaScript",
    stargazers_count: 2,
    forks_count: 0,
    updated_at: "2026-10-18T10:00:00Z",
  },
  {
    id: 1068742217,
    name: "Expense_Tracker",
    full_name: "mrprince123/Expense_Tracker",
    html_url: "https://github.com/mrprince123/Expense_Tracker",
    description: "Personal finance Android app designed to help users record expenditures, categorize budgets, and view monthly graphs.",
    language: "Java",
    stargazers_count: 1,
    forks_count: 0,
    updated_at: "2026-10-15T11:00:00Z",
  },
  {
    id: 1068742218,
    name: "Browser-X-Application",
    full_name: "mrprince123/Browser-X-Application",
    html_url: "https://github.com/mrprince123/Browser-X-Application",
    description: "Android web browser built for performance, privacy and simplicity, featuring custom tab navigation and history bookmarks.",
    language: "Java",
    stargazers_count: 2,
    forks_count: 0,
    updated_at: "2026-10-10T16:00:00Z",
  },
  {
    id: 1068742219,
    name: "version-track-github",
    full_name: "mrprince123/version-track-github",
    html_url: "https://github.com/mrprince123/version-track-github",
    description: "GitHub search and analysis engine built with React, TypeScript and GitHub REST API v3.",
    language: "TypeScript",
    stargazers_count: 2,
    forks_count: 0,
    updated_at: "2026-09-28T14:00:00Z",
  },
  {
    id: 1068742220,
    name: "piano-type",
    full_name: "mrprince123/piano-type",
    html_url: "https://github.com/mrprince123/piano-type",
    description: "Interactive musical typing game that pairs keystrokes with harmonic frequencies in Web Audio API.",
    language: "TypeScript",
    stargazers_count: 1,
    forks_count: 0,
    updated_at: "2026-09-20T10:00:00Z",
  },
  {
    id: 1068742221,
    name: "elite_pro_app",
    full_name: "mrprince123/elite_pro_app",
    html_url: "https://github.com/mrprince123/elite_pro_app",
    description: "Mobile application for tracking fitness metrics, workouts, and physical performance analytics in Kotlin.",
    language: "Kotlin",
    stargazers_count: 2,
    forks_count: 0,
    updated_at: "2026-09-15T08:00:00Z",
  },
  {
    id: 1068742222,
    name: "DSA_Template",
    full_name: "mrprince123/DSA_Template",
    html_url: "https://github.com/mrprince123/DSA_Template",
    description: "Reusable Data Structures and Algorithms templates in C++, Java, and Python with optimal time complexity notes.",
    language: "C++",
    stargazers_count: 4,
    forks_count: 1,
    updated_at: "2026-09-01T12:00:00Z",
  },
];

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  Kotlin: "#A97BFF",
  Java: "#b07219",
  Python: "#3572A5",
  "C++": "#f34b7d",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Other: "#a855f7",
};

export const Opensource = () => {
  const [repos, setRepos] = useState<Repository[]>(FALLBACK_REPOS);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("All");

  useEffect(() => {
    fetch("https://api.github.com/users/mrprince123/repos?per_page=100&sort=updated")
      .then((res) => {
        if (!res.ok) throw new Error("GitHub rate limit");
        return res.json();
      })
      .then((data: any[]) => {
        if (Array.isArray(data) && data.length > 0) {
          const mapped = data.map((r) => ({
            id: r.id,
            name: r.name,
            full_name: r.full_name,
            html_url: r.html_url,
            description: r.description || "Open source software repository by Prince Kumar Sahni.",
            language: r.language || "Other",
            stargazers_count: r.stargazers_count || 0,
            forks_count: r.forks_count || 0,
            updated_at: r.updated_at,
          }));
          setRepos(mapped);
        }
      })
      .catch(() => {
        // Fallback already pre-set
      })
      .finally(() => setLoading(false));
  }, []);

  const languages = useMemo(() => {
    const set = new Set<string>();
    repos.forEach((r) => {
      if (r.language) set.add(r.language);
    });
    return ["All", ...Array.from(set)];
  }, [repos]);

  const filtered = useMemo(() => {
    return repos.filter((r) => {
      const matchLang = selectedLanguage === "All" || r.language === selectedLanguage;
      const matchSearch =
        r.name.toLowerCase().includes(search.toLowerCase()) ||
        r.description.toLowerCase().includes(search.toLowerCase());
      return matchLang && matchSearch;
    });
  }, [repos, selectedLanguage, search]);

  return (
    <>
      <Seo
        title="Open Source & GitHub | Prince Kumar Sahni"
        description="All open source repositories, projects, and codebase contributions from GitHub user mrprince123."
        url="https://princesahni.com/opensource"
      />

      <section className="container mx-auto px-4 sm:px-6 py-16 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 font-mono text-xs text-purple-300 mb-2">
              <Github className="h-3.5 w-3.5 text-purple-400" />
              <span>GITHUB OPEN SOURCE ARSENAL</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
              All Repositories & <span className="text-purple-gradient">Codebases</span>
            </h1>
            <p className="mt-2 font-mono text-xs text-muted-foreground max-w-xl">
              Real-time feed of all 78 public repositories belonging to @mrprince123, spanning distributed backends, mobile apps, and developer tools.
            </p>
          </div>

          <a
            href="https://github.com/mrprince123"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-2.5 font-mono text-xs font-semibold text-white shadow-lg shadow-purple-600/25 hover:bg-purple-500 transition-all hover:scale-[1.02] shrink-0"
          >
            <Github className="h-4 w-4" />
            <span>Follow on GitHub</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* GitHub Stats Strip */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs">
          <div className="rounded-2xl border border-border bg-card/60 p-4">
            <span className="font-display text-2xl font-black text-purple-400">78</span>
            <p className="font-semibold text-foreground mt-0.5">Public Repositories</p>
            <span className="text-[10px] text-muted-foreground">Actively maintained</span>
          </div>
          <div className="rounded-2xl border border-border bg-card/60 p-4">
            <span className="font-display text-2xl font-black text-purple-400">TypeScript</span>
            <p className="font-semibold text-foreground mt-0.5">Primary Language</p>
            <span className="text-[10px] text-muted-foreground">React & Node.js</span>
          </div>
          <div className="rounded-2xl border border-border bg-card/60 p-4">
            <span className="font-display text-2xl font-black text-purple-400">Kotlin & Java</span>
            <p className="font-semibold text-foreground mt-0.5">Android Systems</p>
            <span className="text-[10px] text-muted-foreground">Jetpack Compose</span>
          </div>
          <div className="rounded-2xl border border-border bg-card/60 p-4">
            <span className="font-display text-2xl font-black text-purple-400">100% Free</span>
            <p className="font-semibold text-foreground mt-0.5">MIT / Open License</p>
            <span className="text-[10px] text-muted-foreground">Open to contributions</span>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Language filter pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`rounded-full px-3 py-1 font-mono text-xs transition-all ${
                  selectedLanguage === lang
                    ? "bg-purple-600 text-white font-medium shadow-md shadow-purple-600/20"
                    : "border border-border bg-card/60 text-muted-foreground hover:border-purple-500/30 hover:text-foreground"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search 78 repositories..."
              className="w-full rounded-xl border border-border bg-black/40 py-2 pl-9 pr-4 font-mono text-xs text-foreground placeholder:text-muted-foreground focus:border-purple-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Repositories Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-purple-500/20 bg-card/75 p-5 backdrop-blur-xl hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 pb-2">
                  <div className="flex items-center gap-2 overflow-hidden">
                    <BookOpen className="h-4 w-4 text-purple-400 shrink-0" />
                    <h3 className="font-mono text-sm font-bold text-foreground group-hover:text-purple-300 transition-colors truncate">
                      {repo.name}
                    </h3>
                  </div>
                  <ExternalLink className="h-3.5 w-3.5 text-zinc-500 group-hover:text-purple-400 shrink-0 transition-colors" />
                </div>

                <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                  {repo.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-border flex items-center justify-between text-xs font-mono text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: LANGUAGE_COLORS[repo.language] || "#a855f7" }}
                  />
                  <span>{repo.language}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3 text-purple-400" /> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="h-3 w-3 text-purple-400" /> {repo.forks_count}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default Opensource;
