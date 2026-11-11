import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Flame, Target, Crown, Briefcase, Menu, PanelLeft } from "lucide-react";
import { ThemeToggle } from "@/components/ui/primitives/ThemeToggle";

interface DashboardTopBarProps {
  collapsed: boolean;
  onToggleSidebar?: () => void;
  onOpenMobile?: () => void;
}

export const DashboardTopBar: React.FC<DashboardTopBarProps> = ({
  collapsed,
  onToggleSidebar,
  onOpenMobile,
}) => {
  // Live countdown timer matching screenshot "Data updates in 00:49:48"
  const [secondsLeft, setSecondsLeft] = useState(2988);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 3600));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = (totalSeconds: number) => {
    const hrs = Math.floor(totalSeconds / 3600).toString().padStart(2, "0");
    const mins = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, "0");
    const secs = (totalSeconds % 60).toString().padStart(2, "0");
    return { hrs, mins, secs };
  };

  const { hrs, mins, secs } = formatTimer(secondsLeft);

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-border bg-background/95 px-3 sm:px-4 backdrop-blur-xl transition-all duration-300 font-mono text-xs text-foreground shrink-0">
      {/* Left: Mobile Toggle + Brand (when collapsed) + Announcement Ticker */}
      <div className="flex items-center gap-2 overflow-hidden">
        {/* Mobile Hamburger / Toggle */}
        <button
          onClick={onOpenMobile}
          className="lg:hidden p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          aria-label="Open sidebar"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* If desktop sidebar is collapsed, show signature wordmark in Topbar */}
        {collapsed && (
          <div className="hidden lg:flex items-center gap-2 pr-3 border-r border-border">
            <Link to="/" className="font-signature text-xl font-bold tracking-wide">
              <span className="text-foreground">Prince</span>{" "}
              <span className="text-[#4361ee]">Sahni</span>
            </Link>
            <button
              onClick={onToggleSidebar}
              className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              title="Expand sidebar"
            >
              <PanelLeft className="h-3.5 w-3.5" />
            </button>
          </div>
        )}

        {/* Live Announcement Pill */}
        <div className="flex items-center gap-2 text-muted-foreground text-[11px] whitespace-nowrap overflow-hidden">
          <Link
            to="/about"
            className="flex items-center gap-1.5 hover:opacity-90 transition-opacity"
          >
            <strong className="font-bold text-[#4895ef]">TRISHUL · FTM is Live</strong>
            <span className="hidden sm:inline text-muted-foreground/80 font-normal">
              Learn more. Build more.
            </span>
          </Link>

          <span className="hidden md:inline text-muted-foreground/40">|</span>

          <span className="hidden md:inline text-muted-foreground text-[11px]">
            Industrial Paradox Preparation
          </span>

          <Link
            to="/about"
            className="rounded bg-emerald-500/20 border border-emerald-500/40 px-2 py-0.5 text-[10px] font-bold text-emerald-400 hover:bg-emerald-500/30 transition-colors"
          >
            Explore
          </Link>
        </div>

        {/* Live countdown timer blocks */}
        <div className="hidden 2xl:flex items-center gap-1 text-[11px] text-muted-foreground ml-2">
          <span className="text-muted-foreground/50">|</span>
          <span className="text-muted-foreground pl-1">Data updates in</span>
          <div className="flex items-center gap-0.5">
            <span className="rounded bg-card border border-border px-1.5 py-0.5 text-[10px] text-foreground font-bold shadow-sm">
              {hrs} <i className="text-[8px] text-muted-foreground not-italic">HRS</i>
            </span>
            <span className="rounded bg-card border border-border px-1.5 py-0.5 text-[10px] text-foreground font-bold shadow-sm">
              {mins} <i className="text-[8px] text-muted-foreground not-italic">MINS</i>
            </span>
            <span className="rounded bg-card border border-border px-1.5 py-0.5 text-[10px] text-foreground font-bold shadow-sm">
              {secs} <i className="text-[8px] text-muted-foreground not-italic">SECS</i>
            </span>
          </div>
        </div>
      </div>

      {/* Right: Streak, Problems, Pro, Hire, Theme (NO SIGN IN / NO MULTI-USER ACCOUNT) */}
      <div className="flex items-center gap-2 sm:gap-3 shrink-0 text-muted-foreground">
        {/* Streak Pill */}
        <Link
          to="/about#experience"
          className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-full text-amber-400 bg-amber-500/10 border border-amber-500/25 text-[11px] hover:bg-amber-500/20 transition-colors"
          title="Daily coding streak: 1710+ days"
        >
          <Flame className="h-3.5 w-3.5 fill-current" />
          <span className="font-bold">1710+</span>
        </Link>

        {/* Problems Solved Pill */}
        <Link
          to="/about#experience"
          className="hidden md:flex items-center gap-1 px-2.5 py-1 rounded-full text-[#4895ef] bg-[#4361ee]/10 border border-[#4361ee]/30 text-[11px] hover:bg-[#4361ee]/20 transition-colors"
          title="5000+ problems solved"
        >
          <Target className="h-3.5 w-3.5 text-[#4895ef]" />
          <span className="font-bold">5000+</span>
        </Link>

        {/* Pro Pill */}
        <Link
          to="/about"
          className="flex items-center gap-1 px-2.5 py-1 rounded-full text-amber-300 bg-amber-500/15 border border-amber-500/30 text-[11px] hover:bg-amber-500/25 transition-colors"
        >
          <Crown className="h-3.5 w-3.5 fill-current" />
          <span className="font-bold">Pro</span>
        </Link>

        {/* Hire Button */}
        <Link
          to="/contact"
          className="flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#4361ee] hover:bg-[#3a56d4] text-white font-semibold text-[11px] shadow-sm shadow-[#4361ee]/30 transition-colors"
        >
          <Briefcase className="h-3.5 w-3.5" />
          <span>Hire</span>
        </Link>

        <ThemeToggle />
      </div>
    </header>
  );
};
