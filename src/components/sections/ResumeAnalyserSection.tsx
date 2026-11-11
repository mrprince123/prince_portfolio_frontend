import { useState } from "react";
import { personalInfo } from "@/data/portfolioData";
import { FileDown, ExternalLink, CheckCircle2, TrendingUp, Award, BarChart3, ShieldCheck } from "lucide-react";

export const ResumeAnalyserSection = () => {
  const [activeTab, setActiveTab] = useState<"mnc" | "startup">("startup");

  return (
    <section id="resume-analyser" className="container mx-auto px-4 sm:px-6 py-20 max-w-7xl">
      <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-b from-card via-card to-purple-950/20 p-6 sm:p-10 shadow-2xl overflow-hidden relative">
        <div aria-hidden="true" className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-purple-600/15 blur-3xl" />

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-border">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 font-mono text-xs text-purple-300 mb-2">
              <Award className="h-3.5 w-3.5 text-purple-400" />
              <span>2026 HIRING DEMAND BENCHMARK</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
              Resume Analyser & Demand Score
            </h2>
            <p className="mt-1 font-mono text-xs text-muted-foreground">
              MNC and high-growth startup profiles scored against 2026 engineering market demand.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-4 py-2 font-mono text-xs font-semibold text-white shadow-md shadow-purple-600/20 hover:bg-purple-500 transition-all"
            >
              <FileDown className="h-4 w-4" />
              <span>Download Official Résumé</span>
            </a>
          </div>
        </div>

        {/* Scores & Comparison Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Cards: MNC vs Startup Score (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Startup Card */}
            <div
              onClick={() => setActiveTab("startup")}
              className={`rounded-2xl border p-5 cursor-pointer transition-all ${
                activeTab === "startup"
                  ? "border-purple-500 bg-purple-500/10 shadow-lg shadow-purple-500/10"
                  : "border-border bg-black/20 hover:border-purple-500/30"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-purple-300 font-medium">Startup Velocity & Ownership</span>
                <span className="font-display text-3xl font-black text-purple-400">95 / 100</span>
              </div>
              <p className="mt-2 text-xs text-foreground/90">
                Best Fit: <strong className="text-purple-300">Founding Engineer / Full-Stack Product Builder</strong>
              </p>
              <div className="mt-3 space-y-2 font-mono text-xs">
                <div>
                  <div className="flex justify-between text-[11px] text-muted-foreground">
                    <span>Fast Shipping & Delivery</span>
                    <span className="text-purple-400">98%</span>
                  </div>
                  <div className="mt-1 h-1.5 w-full rounded-full bg-black/40 overflow-hidden">
                    <div className="h-full rounded-full bg-purple-500" style={{ width: "98%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[11px] text-muted-foreground">
                    <span>End-to-End Ownership</span>
                    <span className="text-purple-400">95%</span>
                  </div>
                  <div className="mt-1 h-1.5 w-full rounded-full bg-black/40 overflow-hidden">
                    <div className="h-full rounded-full bg-purple-500" style={{ width: "95%" }} />
                  </div>
                </div>
              </div>
            </div>

            {/* MNC Card */}
            <div
              onClick={() => setActiveTab("mnc")}
              className={`rounded-2xl border p-5 cursor-pointer transition-all ${
                activeTab === "mnc"
                  ? "border-purple-500 bg-purple-500/10 shadow-lg shadow-purple-500/10"
                  : "border-border bg-black/20 hover:border-purple-500/30"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-purple-300 font-medium">Enterprise & MNC Standards</span>
                <span className="font-display text-3xl font-black text-purple-400">92 / 100</span>
              </div>
              <p className="mt-2 text-xs text-foreground/90">
                Best Fit: <strong className="text-purple-300">Software Engineer (Microservices & Cloud)</strong>
              </p>
              <div className="mt-3 space-y-2 font-mono text-xs">
                <div>
                  <div className="flex justify-between text-[11px] text-muted-foreground">
                    <span>CS Fundamentals & Architecture</span>
                    <span className="text-purple-400">94%</span>
                  </div>
                  <div className="mt-1 h-1.5 w-full rounded-full bg-black/40 overflow-hidden">
                    <div className="h-full rounded-full bg-purple-500" style={{ width: "94%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[11px] text-muted-foreground">
                    <span>Distributed Systems & Scaling</span>
                    <span className="text-purple-400">90%</span>
                  </div>
                  <div className="mt-1 h-1.5 w-full rounded-full bg-black/40 overflow-hidden">
                    <div className="h-full rounded-full bg-purple-500" style={{ width: "90%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Cards: Skills Demand Radar & Role Fit (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="rounded-2xl border border-border bg-black/30 p-5">
              <h3 className="font-mono text-xs font-semibold text-purple-300 uppercase tracking-wider mb-4 flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-purple-400" /> Evidence vs Hiring Demand (2026 Core Skills)
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs">
                {[
                  { skill: "Full-Stack (React/TS)", score: "98%", status: "High Demand" },
                  { skill: "Microservices & Node", score: "95%", status: "Production Grade" },
                  { skill: "Docker & AWS CI/CD", score: "92%", status: "Cloud Native" },
                  { skill: "Redis & DB Caching", score: "90%", status: "40% Latency Cut" },
                  { skill: "System Architecture", score: "94%", status: "Zero Downtime" },
                  { skill: "High-Throughput APIs", score: "96%", status: "100k+ Users" },
                ].map((item) => (
                  <div key={item.skill} className="rounded-xl border border-border bg-black/40 p-3">
                    <div className="text-purple-400 font-bold text-base">{item.score}</div>
                    <div className="font-semibold text-foreground text-xs mt-0.5">{item.skill}</div>
                    <div className="text-[10px] text-muted-foreground mt-1">{item.status}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Role Fit Matches */}
            <div className="rounded-2xl border border-border bg-black/30 p-5">
              <h3 className="font-mono text-xs font-semibold text-purple-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-purple-400" /> Highest Confidence Role Matches
              </h3>
              <div className="space-y-2">
                {[
                  { role: "Software Engineer (Full-Stack / Systems)", match: "96% Match", tag: "Enterprise / Webkul" },
                  { role: "Backend & Cloud Engineer (Node/AWS/Docker)", match: "94% Match", tag: "High Scale" },
                  { role: "Founding Engineer / Product SDE", match: "92% Match", tag: "Fast Shippable MVP" },
                ].map((r) => (
                  <div
                    key={r.role}
                    className="flex items-center justify-between rounded-xl border border-white/5 bg-black/40 px-3.5 py-2.5 text-xs font-mono"
                  >
                    <span className="text-zinc-200 font-medium">{r.role}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-muted-foreground hidden sm:inline">{r.tag}</span>
                      <span className="rounded-md bg-purple-500/20 px-2 py-0.5 text-purple-300 font-bold">
                        {r.match}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
