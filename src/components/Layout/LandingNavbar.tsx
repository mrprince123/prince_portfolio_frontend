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
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 text-foreground backdrop-blur-xl">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Left: Brand Signature */}
        <Link
          to="/"
          className="group flex items-center gap-2 transition-transform hover:scale-105"
          aria-label="Prince Sahni Home"
        >
          <span className="font-signature text-2xl sm:text-3xl font-bold tracking-wide">
            <span className="text-foreground">Prince</span>{" "}
            <span className="text-[#4361ee] glow-theme-sm">Sahni</span>
          </span>
        </Link>

        {/* Center: Requested Navbar Links (Dashboard, About) */}
        <nav className="hidden md:flex items-center gap-2">
          {/* Dashboard Link */}
          <Link
            to="/dashboard"
            className={`group flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs transition-all ${
              isActive("/dashboard")
                ? "bg-[#4361ee]/20 text-white border border-[#4361ee]/40 font-semibold shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            <LayoutDashboard className="h-4 w-4 text-[#4895ef] group-hover:rotate-12 transition-transform" />
            <span>Dashboard</span>
            <span className="rounded-full bg-[#4361ee]/20 px-1.5 py-0.2 text-[9px] font-mono text-[#4895ef] border border-[#4361ee]/30">
              COCKPIT
            </span>
          </Link>

          {/* About Link */}
          <Link
            to="/about"
            className={`flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs transition-all ${
              isActive("/about")
                ? "bg-[#4361ee]/20 text-white border border-[#4361ee]/40 font-semibold shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            <User className="h-4 w-4 text-[#4895ef]" />
            <span>About</span>
          </Link>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 font-mono text-xs text-muted-foreground hover:border-[#4361ee]/40 hover:text-[#4361ee] dark:hover:text-[#4895ef] transition-all bg-card"
          >
            <FileDown className="h-3.5 w-3.5 text-[#4895ef]" />
            <span>résumé</span>
          </a>

          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#4361ee] to-[#3a56d4] px-4 py-1.5 font-mono text-xs font-semibold text-white shadow-md shadow-[#4361ee]/25 hover:from-[#3a56d4] hover:to-[#4361ee] transition-all hover:scale-[1.02]"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Let's talk</span>
          </Link>

          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted"
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
            className="md:hidden border-t border-border bg-background text-foreground px-4 py-4 space-y-2 font-mono text-xs"
          >
            <Link
              to="/dashboard"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl bg-[#4361ee]/10 text-foreground border border-[#4361ee]/30"
            >
              <div className="flex items-center gap-2">
                <LayoutDashboard className="h-4 w-4 text-[#4895ef]" />
                <span>Dashboard</span>
              </div>
              <span className="text-[10px] bg-[#4361ee]/20 text-[#4895ef] px-1.5 py-0.5 rounded">
                COCKPIT
              </span>
            </Link>

            <Link
              to="/about"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 p-3 rounded-xl text-muted-foreground hover:bg-muted"
            >
              <User className="h-4 w-4 text-[#4895ef]" />
              <span>About</span>
            </Link>

            <div className="pt-2 flex items-center justify-between border-t border-border">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
              >
                <FileDown className="h-3.5 w-3.5 text-[#4895ef]" />
                <span>Download Résumé</span>
              </a>

              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="text-[#4895ef] hover:underline flex items-center gap-1"
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
