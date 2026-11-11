import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Terminal,
  Send,
  Cpu,
  Layers,
  ArrowRight,
  CheckCircle2,
  FileDown,
  Activity,
  Bot,
  Zap,
  ShieldCheck,
  Server,
  Database,
  ExternalLink,
} from "lucide-react";
import { personalInfo, stats } from "@/data/portfolioData";
import portrait from "@/assets/princesahni2.jpg";
import portraitBack from "@/assets/princesahni.jpg";

const TAGLINES = [
  "building microservices that serve 100k+ active users.",
  "optimizing backend APIs and cutting cloud latencies by 40%.",
  "architecting Docker & AWS CI/CD pipelines with 60% faster deploys.",
  "crafting high-performance React & TypeScript web experiences.",
  "transforming complex distributed systems into clean, maintainable code.",
];

const PRESET_QUESTIONS = [
  {
    q: "Why hire Prince over other engineers?",
    a: "I bring production-proven experience delivering scalable systems that serve 100k+ users. At Webkul, I improved system performance by 40% and cut deployment cycle time by 60% via CI/CD automation. At Chetu, I engineered the real-time chat infrastructure handling 10k+ concurrent users that helped our client close a $2M Series A. I focus on business impact and clean architecture first.",
  },
  {
    q: "Explain your Microservices Architecture at Webkul",
    a: "I led the decomposition of monolithic services into lightweight containerized microservices orchestrated with Docker and AWS. We introduced centralized API routing, decoupled authentication, event-driven async workflows, and Redis caching layers. Result: 40% drop in p95 latency and zero downtime rollouts.",
  },
  {
    q: "How do you handle Cloud & DevOps?",
    a: "I design cloud-native systems with Docker, AWS (EC2, S3, RDS), and automated GitHub Actions CI/CD. By containerizing workloads and introducing multi-stage caching, we reduced pipeline deployment turnaround from 25 minutes down to under 10 minutes (60% reduction).",
  },
  {
    q: "What is your primary tech stack?",
    a: "Full-Stack & Cloud: React, TypeScript, Next.js, Node.js, Express, PostgreSQL, MongoDB, Redis, AWS, Docker, REST/GraphQL APIs, and Tailwind CSS. I also have deep hands-on background in Android (Kotlin/Jetpack Compose) and Python FastAPI.",
  },
];

const ARCHITECTURE_ARENA = [
  {
    title: "Microservices vs Monolithic Architecture",
    winner: "Microservices for High-Velocity Teams",
    desc: "At Webkul, moving decoupled domains (auth, billing, notifications) into independent Dockerized services allowed parallel team releases and isolated failure domains.",
    metrics: { latency: "40% lower p95", scalability: "Independent VM scaling", deployment: "Zero downtime" },
  },
  {
    title: "Redis Distributed Caching vs Raw DB Queries",
    winner: "Redis Multi-Tier Caching",
    desc: "Implementing a write-through & TTL-eviction cache layer reduced direct PostgreSQL/MongoDB queries by 72% for frequently requested catalogs.",
    metrics: { latency: "< 5ms response", dbLoad: "-72% query stress", throughput: "3.5x higher RPS" },
  },
  {
    title: "Vite + React SPA vs Traditional SSR",
    winner: "Vite SPA with Edge Pre-rendering",
    desc: "Lightning fast sub-second HMR, optimized tree-shaking, minimal bundle chunks, and global CDN delivery without server cold starts.",
    metrics: { buildTime: "3.3s build", fcp: "0.4s First Paint", lighthouse: "98+ Performance" },
  },
];

const useTypewriter = (words: string[]) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const done = !deleting && text === current;
    const cleared = deleting && text === "";
    const delay = done ? 1800 : cleared ? 250 : deleting ? 30 : 60;

    const timer = setTimeout(() => {
      if (done) setDeleting(true);
      else if (cleared) {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else {
        setText(current.slice(0, deleting ? text.length - 1 : text.length + 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return text;
};

const HeroSection = () => {
  const typed = useTypewriter(TAGLINES);
  const [mode, setMode] = useState<"chat" | "arena" | "specs">("chat");
  const [activeQuestion, setActiveQuestion] = useState(PRESET_QUESTIONS[0]);
  const [customInput, setCustomInput] = useState("");
  const [displayedAnswer, setDisplayedAnswer] = useState(PRESET_QUESTIONS[0].a);
  const [isTyping, setIsTyping] = useState(false);
  const [selectedArena, setSelectedArena] = useState(0);

  // Typewriter effect for answers
  const triggerAnswer = (text: string) => {
    setIsTyping(true);
    setDisplayedAnswer("");
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedAnswer(text.slice(0, i + 3));
        i += 3;
      } else {
        setDisplayedAnswer(text);
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 12);
  };

  const handleSelectQuestion = (item: (typeof PRESET_QUESTIONS)[0]) => {
    setActiveQuestion(item);
    triggerAnswer(item.a);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    const q = customInput.trim();
    setCustomInput("");

    // Smart semantic matching against Prince's portfolio knowledge
    const lower = q.toLowerCase();
    let reply = "";
    if (lower.includes("hire") || lower.includes("why") || lower.includes("fit")) {
      reply = PRESET_QUESTIONS[0].a;
    } else if (lower.includes("microservice") || lower.includes("webkul") || lower.includes("architecture")) {
      reply = PRESET_QUESTIONS[1].a;
    } else if (lower.includes("cloud") || lower.includes("aws") || lower.includes("docker") || lower.includes("ci/cd")) {
      reply = PRESET_QUESTIONS[2].a;
    } else if (lower.includes("stack") || lower.includes("tech") || lower.includes("skills") || lower.includes("languages")) {
      reply = PRESET_QUESTIONS[3].a;
    } else if (lower.includes("experience") || lower.includes("background") || lower.includes("chetu")) {
      reply =
        "Prince has 2+ years of production experience across Webkul Software, Chetu Inc, and Webbocket. He has architected systems serving 100k+ users, built $2M seed-stage MVPs, and solved hundreds of complex distributed systems and performance problems.";
    } else if (lower.includes("contact") || lower.includes("email") || lower.includes("phone")) {
      reply = `You can reach Prince directly at ${personalInfo.email} or via WhatsApp/Phone at ${personalInfo.phone}. He responds in less than 24 hours.`;
    } else {
      reply = `Prince is a Software Engineer specializing in scalable full-stack web and cloud systems. He builds production-ready architectures with React, TypeScript, Node.js, Express, Docker, and AWS. Check out his 10+ shipped systems in the Flagship Systems section below!`;
    }

    setActiveQuestion({ q, a: reply });
    triggerAnswer(reply);
  };

  return (
    <section id="overview" className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Ambience: Subtle Purple Glow & Grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.18),rgba(124,58,237,0.06)_50%,transparent_80%)] blur-2xl" />
        <div className="absolute inset-0 bg-grid opacity-60" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Top Badges & Live Status */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 font-mono text-xs text-purple-300">
            <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
            <span>SOFTWARE ENGINEER · {personalInfo.location.toUpperCase()}</span>
            <span className="text-purple-500/60">|</span>
            <span className="text-purple-200 font-semibold">100K+ USERS IMPACTED</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <Activity className="h-3.5 w-3.5 text-purple-400" />
            <span>All systems nominal</span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </div>
        </div>

        {/* Main Grid: Cockpit & Interactive Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Hero Copy, Bio & Identity (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.08]">
              Engineering resilient systems that{" "}
              <span className="text-purple-gradient underline decoration-purple-500/30 decoration-wavy underline-offset-4">
                scale to 100K+ users
              </span>
              .
            </h1>

            {/* Terminal typewriter command prompt */}
            <div className="flex items-center gap-2 rounded-lg border border-purple-500/20 bg-black/40 px-3.5 py-2 font-mono text-xs text-purple-300">
              <span className="text-purple-400 font-bold">$</span>
              <span className="text-zinc-200">{typed}</span>
              <span className="inline-block h-3.5 w-1.5 bg-purple-400 animate-pulse" />
            </div>

            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-2xl">
              Hi, I'm <strong className="text-foreground font-semibold">{personalInfo.name}</strong> — a Software Engineer
              at <strong className="text-purple-400 font-semibold">Webkul Software</strong>. I specialize in designing
              high-throughput microservices, cloud-native architectures, and robust web applications with zero downtime.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#systems"
                className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-2.5 font-mono text-xs font-semibold text-white shadow-lg shadow-purple-600/30 hover:bg-purple-500 hover:shadow-purple-500/40 transition-all hover:scale-[1.02]"
              >
                <span>Explore 10+ Systems</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>

              <a
                href="#resume-analyser"
                className="inline-flex items-center gap-2 rounded-xl border border-purple-500/30 bg-purple-500/10 px-4 py-2.5 font-mono text-xs font-medium text-purple-300 hover:bg-purple-500/20 transition-all"
              >
                <Cpu className="h-3.5 w-3.5 text-purple-400" />
                <span>Resume Benchmark</span>
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-border px-4 py-2.5 font-mono text-xs text-muted-foreground hover:text-foreground hover:border-purple-500/40 transition-all"
              >
                <FileDown className="h-3.5 w-3.5" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Profile Capsule Card with 3D Flip Coin */}
            <div className="relative mt-4 overflow-hidden rounded-2xl border border-purple-500/20 bg-gradient-to-br from-card via-card to-purple-950/20 p-5 shadow-xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                {/* 3D Flip Avatar */}
                <div className="coin-container h-20 w-20 shrink-0 cursor-pointer group" title="Hover to flip">
                  <div className="coin-inner">
                    {/* Front */}
                    <div className="coin-front overflow-hidden rounded-full ring-2 ring-purple-500 shadow-md shadow-purple-500/30">
                      <img src={portrait} alt={personalInfo.name} className="h-full w-full object-cover" />
                    </div>
                    {/* Back */}
                    <div className="coin-back overflow-hidden rounded-full ring-2 ring-indigo-400 shadow-md">
                      <img src={portraitBack} alt={personalInfo.name} className="h-full w-full object-cover" />
                    </div>
                  </div>
                </div>

                {/* Identity Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-display text-base font-bold text-foreground">{personalInfo.name}</h3>
                    <span className="inline-flex items-center gap-1 rounded-full bg-purple-500/15 px-2 py-0.5 font-mono text-[10px] font-semibold text-purple-300 border border-purple-500/30">
                      <CheckCircle2 className="h-3 w-3 text-purple-400" /> Verified Engineer
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Software Engineer @ <span className="text-purple-400 font-medium">Webkul</span> · Ex-Chetu Inc · Ex-Webbocket
                  </p>

                  {/* Highlights Tags */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    <span className="rounded-md border border-purple-500/20 bg-purple-500/10 px-2 py-0.5 font-mono text-[10px] text-purple-300">
                      ⚡ 40% Perf Boost
                    </span>
                    <span className="rounded-md border border-border bg-black/30 px-2 py-0.5 font-mono text-[10px] text-zinc-300">
                      🐳 Docker & AWS CI/CD
                    </span>
                    <span className="rounded-md border border-border bg-black/30 px-2 py-0.5 font-mono text-[10px] text-zinc-300">
                      🚀 $2M Series A MVP
                    </span>
                    <span className="rounded-md border border-border bg-black/30 px-2 py-0.5 font-mono text-[10px] text-zinc-300">
                      👥 100k+ Users
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive "Ask the Engineer" Cockpit (5 Columns) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-purple-500/30 bg-card/95 backdrop-blur-xl shadow-2xl shadow-purple-500/10 overflow-hidden">
              {/* Header: Mode Switcher */}
              <div className="border-b border-border bg-black/40 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-purple-500 animate-pulse" />
                  <span className="font-mono text-xs font-semibold text-foreground flex items-center gap-1.5">
                    <Bot className="h-3.5 w-3.5 text-purple-400" />
                    Ask the Engineer · 3 Modes
                  </span>
                </div>
                <span className="rounded bg-purple-500/20 px-1.5 py-0.5 font-mono text-[10px] text-purple-300 uppercase">
                  Live
                </span>
              </div>

              {/* Segmented Mode Selector */}
              <div className="grid grid-cols-3 gap-1 p-2 bg-black/20 border-b border-border text-xs font-mono">
                <button
                  onClick={() => setMode("chat")}
                  className={`py-1.5 px-2 rounded-lg text-center transition-all ${
                    mode === "chat"
                      ? "bg-purple-600 text-white font-medium shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  💬 Chat
                </button>
                <button
                  onClick={() => setMode("arena")}
                  className={`py-1.5 px-2 rounded-lg text-center transition-all ${
                    mode === "arena"
                      ? "bg-purple-600 text-white font-medium shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  ⚡ Arena
                </button>
                <button
                  onClick={() => setMode("specs")}
                  className={`py-1.5 px-2 rounded-lg text-center transition-all ${
                    mode === "specs"
                      ? "bg-purple-600 text-white font-medium shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  📊 Specs
                </button>
              </div>

              {/* Mode 1: Interactive Chat */}
              {mode === "chat" && (
                <div className="p-4 space-y-4">
                  {/* Preset Questions Chips */}
                  <div>
                    <p className="font-mono text-[11px] text-muted-foreground mb-2 flex items-center gap-1">
                      <Sparkles className="h-3 w-3 text-purple-400" />
                      Try asking:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {PRESET_QUESTIONS.map((item) => (
                        <button
                          key={item.q}
                          onClick={() => handleSelectQuestion(item)}
                          className={`rounded-lg border px-2.5 py-1 text-left font-mono text-[11px] transition-all ${
                            activeQuestion.q === item.q
                              ? "border-purple-500 bg-purple-500/20 text-purple-200"
                              : "border-border bg-black/20 text-muted-foreground hover:border-purple-500/40 hover:text-foreground"
                          }`}
                        >
                          {item.q}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Terminal Answer Box */}
                  <div className="rounded-xl border border-purple-500/20 bg-black/60 p-3.5 min-h-[140px] flex flex-col justify-between font-mono text-xs">
                    <div>
                      <div className="flex items-center justify-between text-[10px] text-purple-400/80 pb-1.5 mb-2 border-b border-white/5">
                        <span className="flex items-center gap-1 font-semibold">
                          <Terminal className="h-3 w-3" /> Q: {activeQuestion.q}
                        </span>
                        <span>princesahni.ai</span>
                      </div>
                      <p className="text-zinc-200 leading-relaxed font-sans text-xs">
                        {displayedAnswer}
                        {isTyping && <span className="inline-block h-3 w-1.5 bg-purple-400 ml-1 animate-pulse" />}
                      </p>
                    </div>
                  </div>

                  {/* Custom Question Input Form */}
                  <form onSubmit={handleCustomSubmit} className="relative flex items-center">
                    <input
                      type="text"
                      value={customInput}
                      onChange={(e) => setCustomInput(e.target.value)}
                      placeholder="Ask any question about Prince's engineering..."
                      className="w-full rounded-xl border border-border bg-black/30 py-2.5 pl-3.5 pr-10 font-mono text-xs text-foreground placeholder:text-muted-foreground focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    />
                    <button
                      type="submit"
                      disabled={!customInput.trim()}
                      className="absolute right-1.5 rounded-lg bg-purple-600 p-1.5 text-white disabled:opacity-40 hover:bg-purple-500 transition-colors"
                      aria-label="Send query"
                    >
                      <Send className="h-3.5 w-3.5" />
                    </button>
                  </form>
                </div>
              )}

              {/* Mode 2: Architecture Arena */}
              {mode === "arena" && (
                <div className="p-4 space-y-3">
                  <p className="font-mono text-[11px] text-muted-foreground">
                    Empirical Architectural Trade-offs in Production:
                  </p>

                  <div className="space-y-2">
                    {ARCHITECTURE_ARENA.map((arena, i) => (
                      <div
                        key={arena.title}
                        onClick={() => setSelectedArena(i)}
                        className={`rounded-xl border p-3 cursor-pointer transition-all ${
                          selectedArena === i
                            ? "border-purple-500 bg-purple-500/15"
                            : "border-border bg-black/20 hover:border-purple-500/30"
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs font-semibold text-foreground">
                          <span>{arena.title}</span>
                          <span className="font-mono text-[10px] text-purple-400">{arena.winner}</span>
                        </div>
                        {selectedArena === i && (
                          <div className="mt-2 pt-2 border-t border-purple-500/20 text-xs">
                            <p className="text-zinc-300 leading-relaxed text-[11px]">{arena.desc}</p>
                            <div className="mt-2 grid grid-cols-3 gap-2 font-mono text-[10px] text-center">
                              {Object.entries(arena.metrics).map(([k, v]) => (
                                <div key={k} className="rounded bg-black/40 p-1 border border-white/5">
                                  <div className="text-purple-400 font-bold">{v}</div>
                                  <div className="text-zinc-500 uppercase text-[9px]">{k}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Mode 3: Quick Specs */}
              {mode === "specs" && (
                <div className="p-4 space-y-3 text-xs">
                  <p className="font-mono text-[11px] text-muted-foreground">Engineering Specs & Architecture:</p>
                  <div className="grid grid-cols-2 gap-2 font-mono text-[11px]">
                    <div className="rounded-lg border border-border bg-black/30 p-2.5">
                      <div className="text-purple-400 font-bold">100k+ Users</div>
                      <div className="text-zinc-400 text-[10px]">Production Traffic Handled</div>
                    </div>
                    <div className="rounded-lg border border-border bg-black/30 p-2.5">
                      <div className="text-purple-400 font-bold">40% Latency Cut</div>
                      <div className="text-zinc-400 text-[10px]">Via Code & Cache Tuning</div>
                    </div>
                    <div className="rounded-lg border border-border bg-black/30 p-2.5">
                      <div className="text-purple-400 font-bold">60% CI/CD Boost</div>
                      <div className="text-zinc-400 text-[10px]">Docker + AWS Automation</div>
                    </div>
                    <div className="rounded-lg border border-border bg-black/30 p-2.5">
                      <div className="text-purple-400 font-bold">10+ Systems</div>
                      <div className="text-zinc-400 text-[10px]">Shipped End-to-End</div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-purple-500/20 bg-purple-500/10 p-3 text-[11px] leading-relaxed text-zinc-300 font-sans">
                    <strong className="text-purple-300 font-semibold">Core Philosophy:</strong> Clean architectural
                    separation, resilient error boundaries, and high observable metrics over hype.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Stat Strip */}
        <div className="mt-14 pt-8 border-t border-purple-500/15">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-border bg-card/60 p-4 hover:border-purple-500/40 transition-colors"
              >
                <div className="font-display text-3xl font-black text-purple-400">{s.number}</div>
                <div className="mt-1 font-mono text-xs font-semibold text-foreground">{s.label}</div>
                <div className="mt-0.5 text-[11px] text-muted-foreground">{s.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
