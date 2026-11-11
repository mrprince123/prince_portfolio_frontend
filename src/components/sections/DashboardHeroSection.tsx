import { useState } from "react";
import { Link } from "react-router-dom";
import { Flame, ArrowRight, Bot, Sparkles, Layers, Cpu, Boxes, Briefcase, ExternalLink, Activity } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export const DashboardHeroSection = () => {
  return (
    <section className="p-4 sm:p-6 lg:p-8 space-y-8 max-w-6xl">
      {/* 1. Top Alert Pill matching screenshot */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-2xl border border-[#4361ee]/20 bg-[#4361ee]/10 px-4 py-2.5 font-mono text-xs text-muted-foreground backdrop-blur-xl">
        <div className="flex items-center gap-2">
          <Flame className="h-4 w-4 text-[#4895ef] shrink-0 fill-current" />
          <span>
            <strong className="text-[#4895ef] font-bold">1710+ day streak</strong> 5000+ DSA problems solved across 10+ platforms, LeetCode Knight
          </span>
        </div>

        <Link
          to="/about#experience"
          className="inline-flex items-center gap-1 text-[#4895ef] hover:text-[#4cc9f0] font-semibold whitespace-nowrap text-[11px]"
        >
          <span>Open DSA Lab</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* 2. Mood & Greeting */}
      <div>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
          <span>Long day?</span>
          <span className="text-xl">🕊️</span>
        </h2>
        <p className="font-mono text-xs text-muted-foreground mt-1">
          One last push before calling it a day.
        </p>
      </div>

      {/* 3. Hero Cockpit Card */}
      <div className="rounded-3xl border border-[#4361ee]/30 bg-gradient-to-r from-card/90 via-card/75 to-[#4361ee]/15 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden shadow-2xl">
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#4361ee]/15 blur-3xl" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#4361ee]/30 bg-[#4361ee]/10 px-3 py-1 font-mono text-[11px] text-[#4895ef]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4895ef] animate-pulse" />
              <span>Prince AI Labs · Production-driven</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-[1.08]">
              An AI lab that <span className="text-theme-gradient">explains itself</span>
            </h1>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans max-w-xl">
              Live AI products and production systems, orchestrated across frontier models.
              Ask Thor AI how any of them was built and get the answer from the real architecture.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-xs">
              <Link
                to="/projects?cat=ai"
                className="inline-flex items-center gap-2 rounded-xl bg-[#4361ee] px-5 py-2.5 font-bold text-white shadow-lg shadow-[#4361ee]/30 hover:bg-[#3a56d4] transition-all hover:scale-[1.02]"
              >
                <span>Thor AI</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-muted/40 px-4 py-2.5 text-muted-foreground hover:text-foreground hover:bg-muted hover:border-[#4361ee]/40 transition-colors"
              >
                <span>Know more</span>
              </Link>
            </div>
          </div>

          {/* Right Interactive Constellation Box */}
          <div className="lg:col-span-5 rounded-2xl border border-[#4361ee]/20 bg-gradient-to-br from-[#4361ee]/5 via-background to-card dark:from-[#4361ee]/10 dark:via-card dark:to-card border-border p-6 flex flex-col justify-center items-center text-center relative overflow-hidden min-h-[220px]">
            {/* Constellation grid background with connecting lines */}
            <svg
              className="absolute inset-0 h-full w-full opacity-40 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="20%" y1="30%" x2="50%" y2="55%" stroke="#4361ee" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="50%" y1="55%" x2="80%" y2="25%" stroke="#4361ee" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="50%" y1="55%" x2="65%" y2="85%" stroke="#4cc9f0" strokeWidth="1" />
              <circle cx="20%" cy="30%" r="3" fill="#4361ee" />
              <circle cx="80%" cy="25%" r="4" fill="#4895ef" />
              <circle cx="65%" cy="85%" r="3" fill="#4cc9f0" />
            </svg>

            <div className="relative z-10 space-y-3">
              <div className="flex justify-center items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#4895ef] animate-ping" />
                <span className="h-3.5 w-3.5 rounded-full bg-[#4361ee] shadow-[0_0_12px_#4361ee]" />
              </div>

              <div className="font-mono text-xs font-bold text-foreground">
                Ask about my <span className="text-[#4361ee] dark:text-[#4895ef] underline decoration-[#4361ee]/50">experience</span>
              </div>

              <p className="text-[11px] font-mono text-muted-foreground max-w-[220px]">
                Grounded in <span className="text-foreground font-semibold bg-muted px-1.5 py-0.5 rounded">real work</span>, streamed in real time
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Six Metric Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 font-mono">
        <div className="rounded-2xl border border-border bg-card p-3.5 hover:border-[#4361ee]/40 transition-all shadow-xs">
          <div className="font-display text-2xl font-black text-[#4361ee] dark:text-[#4895ef]">600K+</div>
          <div className="text-[10px] text-muted-foreground mt-0.5 uppercase tracking-wide">users on features built</div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-3.5 hover:border-[#4361ee]/40 transition-all shadow-xs">
          <div className="font-display text-2xl font-black text-[#4361ee] dark:text-[#4895ef]">6</div>
          <div className="text-[10px] text-muted-foreground mt-0.5 uppercase tracking-wide">live AI products</div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-3.5 hover:border-[#4361ee]/40 transition-all shadow-xs">
          <div className="font-display text-2xl font-black text-[#4361ee] dark:text-[#4895ef]">15</div>
          <div className="text-[10px] text-muted-foreground mt-0.5 uppercase tracking-wide">systems in production</div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-3.5 hover:border-[#4361ee]/40 transition-all shadow-xs">
          <div className="font-display text-2xl font-black text-[#4361ee] dark:text-[#4895ef]">5000+</div>
          <div className="text-[10px] text-muted-foreground mt-0.5 uppercase tracking-wide">DSA problems</div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-3.5 hover:border-[#4361ee]/40 transition-all shadow-xs">
          <div className="font-display text-2xl font-black text-[#4361ee] dark:text-[#4895ef]">40,000+</div>
          <div className="text-[10px] text-muted-foreground mt-0.5 uppercase tracking-wide">engineers mentored</div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-3.5 hover:border-[#4361ee]/40 transition-all shadow-xs">
          <div className="font-display text-2xl font-black text-[#4361ee] dark:text-[#4895ef]">3000</div>
          <div className="text-[10px] text-muted-foreground mt-0.5 uppercase tracking-wide">GitHub contributions</div>
        </div>
      </div>

      {/* 5. "Explore product lines" matching screenshot */}
      <div className="space-y-4">
        <div className="flex items-center justify-between font-mono text-xs">
          <h3 className="font-bold text-foreground flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[#4895ef]" />
            Explore product lines
          </h3>
          <span className="text-muted-foreground/80">9 lines</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: AI Lab */}
          <Link
            to="/projects?cat=ai"
            className="group rounded-2xl border border-[#4361ee]/25 bg-card/75 p-5 backdrop-blur-xl hover:border-[#4361ee]/60 hover:shadow-xl hover:shadow-[#4361ee]/10 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="h-8 w-8 rounded-lg bg-[#4361ee]/20 text-[#4895ef] flex items-center justify-center font-bold text-xs mb-3">
                AI Lab
              </div>
              <span className="font-mono text-[9px] uppercase tracking-wider text-[#4895ef] font-semibold block">
                FLAGSHIP PRODUCTS
              </span>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-3">
                Thor AI and standalone intelligent agents, live and open to try. Each one has its own page with architecture, stack and GitHub code.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-border font-mono text-[10px] text-muted-foreground/80 space-y-0.5">
              <div>• 6 products • 143 key concepts</div>
              <div>• 169 technologies</div>
            </div>
          </Link>

          {/* Card 2: AI Systems */}
          <Link
            to="/projects?cat=ai"
            className="group rounded-2xl border border-[#4361ee]/25 bg-card/75 p-5 backdrop-blur-xl hover:border-[#4361ee]/60 hover:shadow-xl hover:shadow-[#4361ee]/10 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="h-8 w-8 rounded-lg bg-[#4361ee]/20 text-[#4895ef] flex items-center justify-center font-bold text-xs mb-3">
                AI Sys
              </div>
              <span className="font-mono text-[9px] uppercase tracking-wider text-[#4895ef] font-semibold block">
                THOR AI &amp; CLAUDE CLI
              </span>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-3">
                FastAPI RAG pipelines and local agent browser interfaces designed with real-time streaming and vector retrieval.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-border font-mono text-[10px] text-muted-foreground/80 space-y-0.5">
              <div>• 6 AI systems • 50 impact points</div>
              <div>• 92 technologies</div>
            </div>
          </Link>

          {/* Card 3: Production Systems */}
          <Link
            to="/about#impact"
            className="group rounded-2xl border border-[#4361ee]/25 bg-card/75 p-5 backdrop-blur-xl hover:border-[#4361ee]/60 hover:shadow-xl hover:shadow-[#4361ee]/10 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="h-8 w-8 rounded-lg bg-[#4361ee]/20 text-[#4895ef] flex items-center justify-center font-bold text-xs mb-3">
                Prod Sys
              </div>
              <span className="font-mono text-[9px] uppercase tracking-wider text-[#4895ef] font-semibold block">
                MAJOR CONTRIBUTIONS
              </span>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-3">
                The full set of major contributions: microservices refactoring, Dockerized AWS infrastructure, Redis caching, and APIs.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-border font-mono text-[10px] text-muted-foreground/80 space-y-0.5">
              <div>• 9 systems • 69 impact points</div>
              <div>• 105 technologies</div>
            </div>
          </Link>

          {/* Card 4: Company History */}
          <Link
            to="/about"
            className="group rounded-2xl border border-[#4361ee]/25 bg-card/75 p-5 backdrop-blur-xl hover:border-[#4361ee]/60 hover:shadow-xl hover:shadow-[#4361ee]/10 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="h-8 w-8 rounded-lg bg-[#4361ee]/20 text-[#4895ef] flex items-center justify-center font-bold text-xs mb-3">
                Exp Lab
              </div>
              <span className="font-mono text-[9px] uppercase tracking-wider text-[#4895ef] font-semibold block">
                COMPANY HISTORY
              </span>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-3">
                Every company and role with the complete list of achievements, newest first: Webkul, Chetu, and Webbocket.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-border font-mono text-[10px] text-muted-foreground/80 space-y-0.5">
              <div>• 3 companies • 40 achievements</div>
              <div>• 5 years production experience</div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default DashboardHeroSection;
