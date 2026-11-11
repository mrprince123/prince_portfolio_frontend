import React from "react";
import { Link } from "react-router-dom";
import { Crown, Flame, ArrowRight, ChevronRight, Code2 } from "lucide-react";

export const DashboardRightRail: React.FC = () => {
  return (
    <aside className="hidden xl:flex flex-col w-80 shrink-0 p-4 space-y-4 border-l border-white/5 bg-[#0a0a0f] text-zinc-300 font-mono text-xs">
      {/* 1. TRISHUL & FTM Mentorship Card */}
      <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-950/30 via-[#100e17] to-[#0a0a0f] p-4 relative overflow-hidden shadow-xl">
        <div className="flex items-start justify-between">
          <div>
            <h4 className="font-display text-2xl font-black text-amber-400 tracking-tight">
              TRISHUL <br />
              <span className="text-zinc-400 font-light text-base">&amp;</span> FTM
            </h4>
          </div>

          <div className="rounded-lg bg-amber-500/15 border border-amber-500/30 px-2.5 py-1 text-center">
            <span className="block text-[9px] font-bold text-amber-300 uppercase tracking-wider">
              TRISHUL
            </span>
            <span className="block text-[8px] text-zinc-400">SELF PACED</span>
          </div>
        </div>

        <div className="mt-5 pt-3 border-t border-amber-500/20 flex items-end justify-between">
          <div>
            <span className="font-display text-2xl font-black text-white tracking-tight">
              40,000+
            </span>
            <span className="block text-[10px] text-amber-300/80 font-bold uppercase tracking-wider">
              MENTORED
            </span>
          </div>

          <Link
            to="/work"
            className="inline-flex items-center gap-1 rounded-xl bg-amber-500 hover:bg-amber-400 px-4 py-2 text-black font-bold text-xs transition-colors shadow-lg shadow-amber-500/20"
          >
            <span>Join FTM</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* 2. Prince Pro Membership Pill */}
      <Link
        to="/work"
        className="group block rounded-2xl border border-purple-500/30 bg-purple-950/20 p-3.5 hover:border-purple-500/60 transition-all hover:bg-purple-950/30"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-purple-500/20 p-2 text-purple-400 shrink-0">
              <Crown className="h-4 w-4" />
            </div>
            <div>
              <div className="font-bold text-white flex items-center gap-1.5 text-xs">
                <span>Prince Pro</span>
                <span className="text-[9px] text-purple-400 uppercase font-semibold">MEMBERSHIP</span>
              </div>
              <div className="text-[11px] text-zinc-400 mt-0.5 font-sans">
                Every paid feature, unlimited. 1, 6 or 12 months
              </div>
            </div>
          </div>
          <ChevronRight className="h-4 w-4 text-purple-400 group-hover:translate-x-1 transition-transform shrink-0" />
        </div>
      </Link>

      {/* 3. DSA Highlights Card */}
      <div className="rounded-2xl border border-white/5 bg-[#12121a]/80 p-4 space-y-3 shadow-lg">
        <div className="flex items-center justify-between pb-2 border-b border-white/5">
          <span className="font-bold text-foreground font-sans text-sm">DSA Highlights</span>
          <span className="flex items-center gap-1 text-[11px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
            <Flame className="h-3 w-3 fill-current" /> 1710+ days
          </span>
        </div>

        <p className="text-[11px] text-zinc-400 font-sans">
          5000+ problems solved across 10+ platforms
        </p>

        {/* Platform items */}
        <div className="space-y-1.5 pt-1 text-[11px]">
          {/* LeetCode */}
          <div className="flex items-center justify-between p-2 rounded-xl bg-black/50 border border-white/5 hover:border-purple-500/30 transition-colors">
            <div className="flex items-center gap-2">
              <span className="h-6 w-6 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-xs shrink-0">
                LC
              </span>
              <div>
                <div className="font-bold text-white font-sans">LeetCode</div>
                <div className="text-[10px] text-zinc-500">Knight · Top 5% worldwide</div>
              </div>
            </div>
            <span className="font-bold text-purple-400">1879+</span>
          </div>

          {/* CodeStudio */}
          <div className="flex items-center justify-between p-2 rounded-xl bg-black/50 border border-white/5 hover:border-purple-500/30 transition-colors">
            <div className="flex items-center gap-2">
              <span className="h-6 w-6 rounded-lg bg-orange-500/10 text-orange-400 flex items-center justify-center font-bold text-xs shrink-0">
                CS
              </span>
              <div>
                <div className="font-bold text-white font-sans">CodeStudio</div>
                <div className="text-[10px] text-zinc-500">Specialist · Global Rank 130</div>
              </div>
            </div>
            <span className="font-bold text-purple-400">1854+</span>
          </div>

          {/* InterviewBit */}
          <div className="flex items-center justify-between p-2 rounded-xl bg-black/50 border border-white/5 hover:border-purple-500/30 transition-colors">
            <div className="flex items-center gap-2">
              <span className="h-6 w-6 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold text-xs shrink-0">
                IB
              </span>
              <div>
                <div className="font-bold text-white font-sans">InterviewBit</div>
                <div className="text-[10px] text-zinc-500">Master · Global Rank 13</div>
              </div>
            </div>
            <span className="font-bold text-purple-400">1854+</span>
          </div>

          {/* GeeksforGeeks */}
          <div className="flex items-center justify-between p-2 rounded-xl bg-black/50 border border-white/5 hover:border-purple-500/30 transition-colors">
            <div className="flex items-center gap-2">
              <span className="h-6 w-6 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0">
                GFG
              </span>
              <div>
                <div className="font-bold text-white font-sans">GeeksforGeeks</div>
                <div className="text-[10px] text-zinc-500">Institute · Global Rank 98</div>
              </div>
            </div>
            <span className="font-bold text-emerald-400">Rank 1</span>
          </div>
        </div>

        {/* Action Button */}
        <Link
          to="/work#dsa"
          className="w-full flex items-center justify-center gap-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 py-2.5 text-white font-bold transition-all text-xs shadow-lg shadow-purple-600/20"
        >
          <span>Open DSA Lab</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* 4. Lab News Card */}
      <div className="rounded-2xl border border-white/5 bg-[#12121a]/80 p-4 space-y-2.5 shadow-lg">
        <div className="flex items-center justify-between">
          <span className="font-bold text-foreground flex items-center gap-2 font-sans text-xs">
            <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            Lab News
          </span>
          <span className="text-[10px] text-zinc-500">16 stories</span>
        </div>

        <div className="rounded-xl border border-purple-500/20 bg-purple-950/15 p-2.5">
          <div className="flex items-center gap-1.5 text-[10px] text-purple-300 font-semibold mb-1">
            <span className="bg-purple-500/30 px-1.5 py-0.2 rounded text-[9px]">★ PINNED</span>
            <span>LAUNCH</span>
          </div>
          <p className="text-[11px] text-zinc-300 font-sans leading-relaxed">
            Preparation Street launched with TRISHUL &amp; Full-Time Mentorship.
          </p>
        </div>
      </div>
    </aside>
  );
};
