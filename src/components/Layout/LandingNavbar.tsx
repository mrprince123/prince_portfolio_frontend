import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutDashboard, User, FileDown, Sparkles, Menu, X, ArrowRight } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { ThemeToggle } from "@/components/ui/primitives/ThemeToggle";

export const LandingNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0a0a0f]/90 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Left: Brand Signature */}
        <Link
          to="/"
          className="group flex items-center gap-2 transition-transform hover:scale-105"
          aria-label="Prince Singh Home"
        >
          <span className="font-signature text-2xl sm:text-3xl font-bold tracking-wide">
            <span className="text-white">Prince</span>{" "}
            <span className="text-[#a855f7] glow-purple-sm">Singh</span>
          </span>
        </Link>

        {/* Center: Requested Navbar Links (Dashboard, About) */}
        <nav className="hidden md:flex items-center gap-2">
          {/* Dashboard Link */}
          <Link
            to="/dashboard"
            className={`group flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs transition-all ${
              isActive("/dashboard")
                ? "bg-purple-600/20 text-white border border-purple-500/40 font-semibold shadow-sm"
                : "text-zinc-300 hover:text-white hover:bg-white/5"
            }`}
          >
            <LayoutDashboard className="h-4 w-4 text-purple-400 group-hover:rotate-12 transition-transform" />
            <span>Dashboard</span>
            <span className="rounded-full bg-purple-500/20 px-1.5 py-0.2 text-[9px] font-mono text-purple-300 border border-purple-500/30">
              COCKPIT
            </span>
          </Link>

          {/* About Link */}
          <Link
            to="/about"
            className={`flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs transition-all ${
              isActive("/about") || isActive("/work")
                ? "bg-purple-600/20 text-white border border-purple-500/40 font-semibold shadow-sm"
                : "text-zinc-300 hover:text-white hover:bg-white/5"
            }`}
          >
            <User className="h-4 w-4 text-purple-400" />
            <span>About</span>
          </Link>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3.5 py-1.5 font-mono text-xs text-zinc-300 hover:border-purple-500/40 hover:text-purple-300 transition-all bg-white/[0.02]"
          >
            <FileDown className="h-3.5 w-3.5 text-purple-400" />
            <span>résumé</span>
          </a>

          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-1.5 font-mono text-xs font-semibold text-white shadow-md shadow-purple-500/20 hover:from-purple-500 hover:to-indigo-500 transition-all hover:scale-[1.02]"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Let's talk</span>
          </Link>

          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5"
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/5 bg-[#0a0a0f] px-4 py-4 space-y-2 font-mono text-xs"
          >
            <Link
              to="/dashboard"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl bg-purple-500/10 text-purple-200 border border-purple-500/30"
            >
              <div className="flex items-center gap-2">
                <LayoutDashboard className="h-4 w-4 text-purple-400" />
                <span>Dashboard</span>
              </div>
              <span className="text-[10px] bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded">
                COCKPIT
              </span>
            </Link>

            <Link
              to="/about"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 p-3 rounded-xl text-zinc-300 hover:bg-white/5"
            >
              <User className="h-4 w-4 text-purple-400" />
              <span>About</span>
            </Link>

            <div className="pt-2 flex items-center justify-between border-t border-white/5">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-zinc-400 hover:text-white"
              >
                <FileDown className="h-3.5 w-3.5 text-purple-400" />
                <span>Download Résumé</span>
              </a>

              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="text-purple-400 hover:underline flex items-center gap-1"
              >
                <span>Contact</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
