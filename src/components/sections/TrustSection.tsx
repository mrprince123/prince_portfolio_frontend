import { ShieldCheck, Zap, Building2, CheckCircle2, TrendingUp, Users } from "lucide-react";

export const TrustSection = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 py-16 max-w-7xl">
      <div className="rounded-3xl border border-purple-500/20 bg-card/70 p-6 sm:p-10 backdrop-blur-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-border">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 font-mono text-xs text-purple-300 mb-2">
              <ShieldCheck className="h-3.5 w-3.5 text-purple-400" />
              <span>PRODUCTION VALIDATION</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
              Trusted in production. Built to last.
            </h2>
          </div>
          <p className="font-mono text-xs text-muted-foreground max-w-md">
            Proven engineering discipline across fast-paced environments and enterprise scale — shipping robust software that doesn't break under load.
          </p>
        </div>

        {/* 3 Pillar Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-border bg-black/30 p-5 hover:border-purple-500/40 transition-all">
            <div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-semibold uppercase">
              <Users className="h-4 w-4" /> 100K+ Users Served
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mt-2">Scale & Performance</h3>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
              Architected microservices infrastructure and optimized bottlenecks to comfortably support 100k+ concurrent active users with sub-second response times.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-black/30 p-5 hover:border-purple-500/40 transition-all">
            <div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-semibold uppercase">
              <Zap className="h-4 w-4" /> 40% Latency Reduction
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mt-2">Measurable Impact</h3>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
              Applied Redis caching, database indexing, and query restructuring, yielding a 40% boost in overall application speed and 60% faster CI/CD pipelines.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-black/30 p-5 hover:border-purple-500/40 transition-all">
            <div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-semibold uppercase">
              <Building2 className="h-4 w-4" /> $2M Seed MVP
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mt-2">Founder & Product Velocity</h3>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
              Engineered production MVPs with real-time WebSockets and automated pipelines that directly assisted early-stage products in raising $2M Series A funding.
            </p>
          </div>
        </div>

        {/* Company logos / badges bar */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
          <span className="text-zinc-400 uppercase text-[11px] tracking-wider">Organizations:</span>
          <div className="flex flex-wrap items-center gap-4 sm:gap-8">
            <span className="font-semibold text-foreground hover:text-purple-400 transition-colors">
              Webkul Software Pvt Ltd
            </span>
            <span>·</span>
            <span className="font-semibold text-foreground hover:text-purple-400 transition-colors">
              Chetu Inc
            </span>
            <span>·</span>
            <span className="font-semibold text-foreground hover:text-purple-400 transition-colors">
              Webbocket Pvt Ltd
            </span>
            <span>·</span>
            <span className="text-muted-foreground">
              Biju Patnaik University of Tech (CSE)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
