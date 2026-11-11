import { useState, useMemo } from "react";
import { Seo } from "@/components/seo";
import {
  Github,
  Star,
  GitFork,
  ExternalLink,
  Search,
  Sparkles,
  Code2,
  Calendar,
  Layers,
  Activity,
  Flame,
  CheckCircle2,
  Cpu,
  Boxes,
} from "lucide-react";

interface TopRepo {
  name: string;
  fullName: string;
  description: string;
  language: string;
  languageColor: string;
  category: "ai" | "fullstack" | "mobile" | "cloud";
  stars: number;
  forks: number;
  url: string;
  tags: string[];
  metrics: string;
}

const TOP_REPOSITORIES: TopRepo[] = [
  {
    name: "thor-ai",
    fullName: "mrprince123/thor-ai",
    description:
      "A full-stack chat application with Retrieval-Augmented Generation (RAG) capabilities, built with FastAPI (Python backend) and Next.js (TypeScript frontend). Enables users to upload documents, engage in intelligent conversations with AI, and retrieve information with sub-second vector search.",
    language: "Python",
    languageColor: "#3572A5",
    category: "ai",
    stars: 12,
    forks: 4,
    url: "https://github.com/mrprince123/thor-ai",
    tags: ["FastAPI", "Next.js", "RAG", "Vector DB", "LangChain"],
    metrics: "Sub-second RAG query latency",
  },
  {
    name: "claude_cli_ui",
    fullName: "mrprince123/claude_cli_ui",
    description:
      "A clean, claude.ai-style browser UI for your local Claude Code agent — chat, file edits, shell, and all of its tools, without the terminal. Provides real-time bidirectional WebSocket orchestration.",
    language: "TypeScript",
    languageColor: "#3178c6",
    category: "ai",
    stars: 9,
    forks: 3,
    url: "https://github.com/mrprince123/claude_cli_ui",
    tags: ["React", "WebSockets", "Claude Code", "Agent UI"],
    metrics: "Bidirectional WebSocket streaming",
  },
  {
    name: "Code-Rev-Front",
    fullName: "mrprince123/Code-Rev-Front",
    description:
      "Frontend of an AI-powered automated code review platform delivering instant static security analysis, code smell detection, and optimization recommendations across GitHub pull requests.",
    language: "TypeScript",
    languageColor: "#3178c6",
    category: "ai",
    stars: 7,
    forks: 2,
    url: "https://github.com/mrprince123/Code-Rev-Front",
    tags: ["React", "Gemini API", "Tailwind CSS", "Code Review"],
    metrics: "Automated PR vulnerability audit",
  },
  {
    name: "camera-monitor-nikon-z50-ii",
    fullName: "mrprince123/camera-monitor-nikon-z50-ii",
    description:
      "Camera monitoring and exposure telemetry controller companion app for the Nikon Z50 II mirrorless system. Built with real-time frame buffering and camera parameter control.",
    language: "Kotlin",
    languageColor: "#A97BFF",
    category: "mobile",
    stars: 8,
    forks: 2,
    url: "https://github.com/mrprince123/camera-monitor-nikon-z50-ii",
    tags: ["Kotlin", "Jetpack Compose", "CameraX", "Nikon Z50 II"],
    metrics: "Low-latency frame telemetry",
  },
  {
    name: "ai-music-pro-back",
    fullName: "mrprince123/ai-music-pro-back",
    description:
      "Scalable, real-time audio pipeline backend with recommendation algorithms, distributed caching, and WebSocket event distribution for music streaming.",
    language: "TypeScript",
    languageColor: "#3178c6",
    category: "cloud",
    stars: 6,
    forks: 1,
    url: "https://github.com/mrprince123/ai-music-pro-back",
    tags: ["Node.js", "Express", "Redis", "Audio Pipeline"],
    metrics: "10K+ concurrent WebSocket capacity",
  },
  {
    name: "prince_portfolio_frontend",
    fullName: "mrprince123/prince_portfolio_frontend",
    description:
      "High-density engineering portfolio cockpit featuring 3-column dashboard telemetry, 3D Three.js canvas wireframes, and multimodal content management.",
    language: "TypeScript",
    languageColor: "#3178c6",
    category: "fullstack",
    stars: 15,
    forks: 5,
    url: "https://github.com/mrprince123/prince_portfolio_frontend",
    tags: ["React", "Vite", "Tailwind CSS", "Three.js"],
    metrics: "100 Lighthouse Performance",
  },
];

const LANGUAGE_BREAKDOWN = [
  { name: "TypeScript", percentage: 38, color: "#3178c6", repos: 32 },
  { name: "Python", percentage: 24, color: "#3572A5", repos: 18 },
  { name: "JavaScript", percentage: 16, color: "#f7df1e", repos: 12 },
  { name: "Kotlin", percentage: 12, color: "#A97BFF", repos: 8 },
  { name: "Java", percentage: 6, color: "#b07219", repos: 5 },
  { name: "C++ / Shell / Others", percentage: 4, color: "#f34b7d", repos: 3 },
];

const ANNUAL_ACTIVITY = [
  {
    year: "2026",
    totalContributions: "840+",
    highlights: "Thor AI RAG system, Claude Code Agent web UI, Nikon Z50 II camera controller.",
    focus: "Applied AI, Vector Search & Mirrorless Cinematography Tools",
  },
  {
    year: "2025",
    totalContributions: "1,120+",
    highlights: "Microservices refactoring at Webkul, Redis caching layer, Docker automated CI/CD.",
    focus: "Distributed Cloud Architecture, High-Concurrency APIs",
  },
  {
    year: "2024",
    totalContributions: "980+",
    highlights: "5000+ DSA algorithmic milestone, Android Arduino Pro, MVP Series A chat infrastructure.",
    focus: "Data Structures, Algorithms & Real-Time WebSockets",
  },
  {
    year: "2023",
    totalContributions: "640+",
    highlights: "Open-source frontend component libraries, full-stack client deliverables, BPUT graduation projects.",
    focus: "MERN Stack Foundations, Reusable UI Patterns",
  },
];

export const Opensource = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredRepos = useMemo(() => {
    return TOP_REPOSITORIES.filter((repo) => {
      const matchesCategory =
        selectedCategory === "all" || repo.category === selectedCategory;
      const matchesSearch =
        repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        repo.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        repo.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <>
      <Seo
        title="Open Source & GitHub Cockpit | Prince Kumar Sahni (@mrprince123)"
        description="Curated open source engineering highlights of Prince Kumar Sahni. Explore top repositories including Thor AI, Claude CLI UI, annual contribution breakdown, and tech stack telemetry."
        url="https://princesahni.com/opensource"
      />

      <section className="container mx-auto px-4 sm:px-6 py-12 max-w-7xl space-y-12">
        {/* Header Hero */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#4361ee]/30 bg-[#4361ee]/10 px-3.5 py-1 font-mono text-xs text-[#4895ef] mb-3">
              <Github className="h-4 w-4" />
              <span>GITHUB COCKPIT · @mrprince123</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-black text-foreground tracking-tight">
              Open Source <span className="text-purple-gradient">&amp; Architecture</span>
            </h1>
            <p className="mt-2 font-mono text-xs text-zinc-400 max-w-2xl leading-relaxed">
              Curated telemetry covering flagship repositories, annual contribution cadence, language distributions, and production tools built in public.
            </p>
          </div>

          <a
            href="https://github.com/mrprince123"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#4361ee] hover:bg-[#3a56d4] px-5 py-2.5 font-mono text-xs font-semibold text-white shadow-lg shadow-[#4361ee]/25 transition-all hover:scale-[1.02] shrink-0"
          >
            <Github className="h-4 w-4" />
            <span>Follow @mrprince123</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* 4 Metric Telemetry Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
          <div className="rounded-2xl border border-white/10 bg-[#0d0f1a] p-4 space-y-1">
            <span className="font-display text-3xl font-black text-[#4895ef]">78</span>
            <div className="text-white font-bold">Public Repositories</div>
            <div className="text-zinc-500 text-[11px]">Across AI, Full-Stack, Android</div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0d0f1a] p-4 space-y-1">
            <span className="font-display text-3xl font-black text-[#4895ef]">3,000+</span>
            <div className="text-white font-bold">Total Contributions</div>
            <div className="text-zinc-500 text-[11px]">Verified GitHub commits &amp; PRs</div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0d0f1a] p-4 space-y-1">
            <span className="font-display text-3xl font-black text-[#4895ef]">5+ Yrs</span>
            <div className="text-white font-bold">Open Source History</div>
            <div className="text-zinc-500 text-[11px]">Continuous building since 2020</div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0d0f1a] p-4 space-y-1">
            <span className="font-display text-3xl font-black text-emerald-400">100%</span>
            <div className="text-white font-bold">Free &amp; Open Access</div>
            <div className="text-zinc-500 text-[11px]">MIT / Apache 2.0 licensed code</div>
          </div>
        </div>

        {/* Tech Stack & Language Distribution */}
        <div className="rounded-3xl border border-white/10 bg-[#0d0f1a] p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-display text-xl font-bold text-white flex items-center gap-2">
                <Code2 className="h-5 w-5 text-[#4895ef]" />
                <span>Open Source Language Ecosystem</span>
              </h2>
              <p className="font-mono text-xs text-zinc-400 mt-1">
                Distribution across 78 public repositories on GitHub
              </p>
            </div>
            <span className="font-mono text-xs text-zinc-500">6 Core Languages</span>
          </div>

          {/* Visual Percentage Bar */}
          <div className="h-3 w-full rounded-full overflow-hidden flex bg-white/5">
            {LANGUAGE_BREAKDOWN.map((lang) => (
              <div
                key={lang.name}
                style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                className="h-full transition-all duration-500 hover:opacity-80"
                title={`${lang.name}: ${lang.percentage}%`}
              />
            ))}
          </div>

          {/* Language Breakdown Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 font-mono text-xs">
            {LANGUAGE_BREAKDOWN.map((lang) => (
              <div
                key={lang.name}
                className="rounded-xl border border-white/5 bg-black/40 p-3 flex flex-col justify-between"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: lang.color }}
                  />
                  <span className="font-bold text-white truncate">{lang.name}</span>
                </div>
                <div className="mt-2 text-zinc-400 text-[11px] flex items-center justify-between">
                  <span>{lang.percentage}%</span>
                  <span className="text-zinc-500">{lang.repos} repos</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Annual Activity Telemetry */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl font-bold text-white flex items-center gap-2">
              <Activity className="h-5 w-5 text-[#4895ef]" />
              <span>Annual Activity &amp; Milestones</span>
            </h2>
            <span className="font-mono text-xs text-zinc-500">Year-over-Year Track Record</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
            {ANNUAL_ACTIVITY.map((act) => (
              <div
                key={act.year}
                className="rounded-2xl border border-white/10 bg-[#0d0f1a] p-5 space-y-3 relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl font-black text-white">{act.year}</span>
                    <span className="rounded-full bg-[#4361ee]/20 text-[#4895ef] border border-[#4361ee]/40 px-2 py-0.5 text-[10px] font-bold">
                      {act.totalContributions} commits
                    </span>
                  </div>

                  <p className="mt-3 font-sans text-xs text-zinc-300 leading-relaxed">
                    {act.highlights}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 text-[11px] text-zinc-400">
                  <span className="text-zinc-500 block uppercase text-[9px]">Focus Area:</span>
                  <span className="text-[#4895ef] font-semibold">{act.focus}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Flagship Repositories */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="font-display text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-[#4895ef]" />
                <span>Top Repositories &amp; Flagship Code</span>
              </h2>
              <p className="font-mono text-xs text-zinc-400 mt-1">
                High-impact open-source architectures built and maintained by Prince
              </p>
            </div>

            {/* Search Box */}
            <div className="relative w-full sm:w-64 font-mono text-xs">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500" />
              <input
                type="text"
                placeholder="Search repos or tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-black/60 pl-9 pr-4 py-2 text-white placeholder:text-zinc-600 focus:border-[#4361ee] focus:outline-none"
              />
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar font-mono text-xs">
            {[
              { id: "all", label: "All Flagship Repos" },
              { id: "ai", label: "AI & RAG" },
              { id: "fullstack", label: "Full-Stack Web" },
              { id: "mobile", label: "Mobile & Telemetry" },
              { id: "cloud", label: "Cloud & Audio Pipeline" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl whitespace-nowrap transition-all ${
                  selectedCategory === tab.id
                    ? "bg-[#4361ee] text-white font-bold shadow-md shadow-[#4361ee]/20"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Repositories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
            {filteredRepos.map((repo) => (
              <div
                key={repo.name}
                className="group rounded-2xl border border-white/10 bg-[#0d0f1a] p-5 hover:border-[#4361ee]/50 hover:shadow-xl hover:shadow-[#4361ee]/10 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  {/* Title & Links */}
                  <div className="flex items-start justify-between gap-2">
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noreferrer"
                      className="font-display text-base font-bold text-white hover:text-[#4895ef] transition-colors flex items-center gap-1.5"
                    >
                      <span>{repo.name}</span>
                      <ExternalLink className="h-3.5 w-3.5 text-zinc-500 group-hover:text-[#4895ef]" />
                    </a>

                    <div className="flex items-center gap-2 text-zinc-400 text-[11px] shrink-0">
                      <span className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                        {repo.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="h-3 w-3" />
                        {repo.forks}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-xs text-zinc-400 line-clamp-3 leading-relaxed">
                    {repo.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {repo.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-zinc-300 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Metric */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-1.5 text-zinc-400">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: repo.languageColor }}
                    />
                    <span>{repo.language}</span>
                  </div>

                  <span className="text-[#4895ef] font-semibold text-[10px]">
                    {repo.metrics}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Opensource;
