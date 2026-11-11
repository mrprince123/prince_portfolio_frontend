import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileDown, ArrowRight, Sparkles, LayoutGrid, Briefcase } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { ThemeToggle } from "@/components/ui/primitives/ThemeToggle";
import princelogo from "@/assets/princesahni-logo.png";

interface HeaderProps {
  onOpenSidebar?: () => void;
}

const PRIMARY_LINKS = [
  { name: "About", href: "/about" },
  { name: "Work", href: "/work", badge: "princesingh.work" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Articles", href: "/articles" },
  { name: "Courses", href: "/courses" },
];

const Header = ({ onOpenSidebar }: HeaderProps) => {
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
            to="/work"
            className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors font-medium underline underline-offset-2"
          >
            Explore Work Portfolio (/work) <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>

      {/* Floating Capsule Nav */}
      <div className="container mx-auto px-4 py-3">
        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-purple-500/20 bg-background/85 px-4 py-2.5 backdrop-blur-xl shadow-lg shadow-purple-500/5">
          {/* Brand Wordmark & Sidebar Trigger */}
          <div className="flex items-center gap-3">
            {onOpenSidebar && (
              <button
                onClick={onOpenSidebar}
                className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-2.5 py-1 font-mono text-[11px] text-purple-300 hover:bg-purple-500/25 transition-all"
                title="Open 12-item Sidebar Menu"
              >
                <LayoutGrid className="h-3.5 w-3.5 text-purple-400" />
                <span className="hidden sm:inline">Menu</span>
              </button>
            )}

            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="relative">
                <img
                  src={princelogo}
                  alt={personalInfo.name}
                  className="h-8 w-8 rounded-full object-cover ring-2 ring-purple-500/30 group-hover:ring-purple-500 transition-all"
                />
                <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-purple-500 ring-2 ring-background" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-sm font-bold tracking-tight text-foreground group-hover:text-purple-400 transition-colors flex items-center gap-1">
                  Prince Sahni<span className="text-purple-500 font-black">.</span>
                </span>
                <span className="font-mono text-[10px] text-muted-foreground hidden lg:inline">
                  Software Engineer
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden items-center gap-1 md:flex">
            {PRIMARY_LINKS.map((item) => {
              const active = isActive(item.href);
              const isWork = item.href === "/work";

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative rounded-full px-3.5 py-1.5 font-mono text-[12px] transition-all flex items-center gap-1.5 ${
                    active
                      ? "text-purple-200 bg-purple-500/20 border border-purple-500/40 font-semibold shadow-sm"
                      : isWork
                      ? "text-purple-300 bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  {isWork && <Briefcase className="h-3 w-3 text-purple-400" />}
                  <span>{item.name}</span>
                  {isWork && (
                    <span className="rounded bg-purple-500/30 text-purple-200 px-1 py-0.2 text-[9px] font-bold">
                      TAB
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground hover:border-purple-500/40 hover:text-purple-300 transition-all"
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

            {/* Mobile Hamburger / Sidebar button */}
            <button
              onClick={() => {
                if (onOpenSidebar) {
                  onOpenSidebar();
                } else {
                  setIsMenuOpen((v) => !v);
                }
              }}
              className="rounded-full p-2 text-muted-foreground hover:text-foreground md:hidden border border-border"
              aria-label="Toggle menu"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav fallback if sidebar not triggered */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="overflow-hidden border-b border-purple-500/20 bg-background/95 backdrop-blur-2xl md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="container mx-auto flex flex-col gap-1.5 px-6 py-4 font-mono text-sm">
              {PRIMARY_LINKS.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-lg px-3.5 py-2 transition-colors flex items-center justify-between ${
                    isActive(item.href)
                      ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                      : "text-muted-foreground hover:bg-purple-500/10 hover:text-foreground"
                  }`}
                >
                  <span>{item.name}</span>
                  {item.href === "/work" && (
                    <span className="text-[10px] text-purple-400 bg-purple-500/20 px-1.5 py-0.5 rounded">
                      NEW TAB
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
