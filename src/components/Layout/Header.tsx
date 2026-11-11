import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileDown, ArrowRight, Sparkles } from "lucide-react";
import { navLinks, personalInfo } from "@/data/portfolioData";
import { ThemeToggle } from "@/components/ui/primitives/ThemeToggle";
import princelogo from "@/assets/princesahni-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top Announcement Ticker */}
      <div className="border-b border-purple-500/20 bg-black/60 backdrop-blur-md text-[11px] font-mono py-1.5 px-4 text-center text-muted-foreground">
        <div className="container mx-auto flex items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-400 border border-purple-500/30 font-semibold text-[10px]">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-ping" />
            LIVE
          </span>
          <span className="hidden sm:inline text-zinc-300">
            Software Engineer @ Webkul · Scalable Microservices & Cloud Systems
          </span>
          <span className="sm:hidden text-zinc-300">Software Engineer @ Webkul</span>
          <span className="text-zinc-500">·</span>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors font-medium underline underline-offset-2"
          >
            Explore Systems <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>

      {/* Floating Capsule Nav */}
      <div className="container mx-auto px-4 py-3">
        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-purple-500/20 bg-background/85 px-4 py-2.5 backdrop-blur-xl shadow-lg shadow-purple-500/5">
          {/* Brand Wordmark */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <img
                src={princelogo}
                alt="Prince Kumar Sahni"
                className="h-8 w-8 rounded-full object-cover ring-2 ring-purple-500/30 group-hover:ring-purple-500 transition-all"
              />
              <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-purple-500 ring-2 ring-background" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-sm font-bold tracking-tight text-foreground group-hover:text-purple-400 transition-colors flex items-center gap-1">
                Prince Sahni<span className="text-purple-500 font-black">.</span>
              </span>
              <span className="font-mono text-[10px] text-muted-foreground hidden sm:inline">
                Software Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative rounded-full px-3.5 py-1.5 font-mono text-[12px] transition-all ${
                    active
                      ? "text-purple-300 bg-purple-500/15 border border-purple-500/30 font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2.5">
            <span className="hidden items-center gap-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 px-2.5 py-1 font-mono text-[11px] text-purple-300 lg:inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
              open to roles
            </span>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground hover:border-purple-500/40 hover:text-purple-300 transition-all"
            >
              <FileDown className="h-3.5 w-3.5 text-purple-400" />
              résumé
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-3.5 py-1.5 font-mono text-xs font-medium text-white shadow-md shadow-purple-500/20 hover:from-purple-500 hover:to-indigo-500 transition-all hover:scale-[1.02]"
            >
              <Sparkles className="h-3 w-3" />
              <span>Let's talk</span>
            </Link>

            <ThemeToggle />

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className="rounded-full p-2 text-muted-foreground hover:text-foreground md:hidden border border-border"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="overflow-hidden border-b border-purple-500/20 bg-background/95 backdrop-blur-2xl md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="container mx-auto flex flex-col gap-1.5 px-6 py-4">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-lg px-3.5 py-2 font-mono text-sm transition-colors ${
                    isActive(item.href)
                      ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                      : "text-muted-foreground hover:bg-purple-500/10 hover:text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-2 pt-2 border-t border-border flex items-center justify-between">
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 font-mono text-sm text-purple-400 hover:bg-purple-500/10"
                >
                  <FileDown className="h-4 w-4" /> Download Résumé
                </a>
                <span className="font-mono text-xs text-muted-foreground">New Delhi, IN</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
