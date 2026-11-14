import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutDashboard, FileDown, Menu, X } from "lucide-react";
import { navLinks, personalInfo } from "@/data/portfolioData";
import { ThemeToggle } from "@/components/ui/primitives/ThemeToggle";
import princelogo from "@/assets/princesahni-logo.png";

export const LandingNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-7xl items-center gap-6 px-4 sm:px-6">
        {/* Wordmark matching live princesahni.com */}
        <Link to="/" className="flex items-center gap-2.5 group shrink-0" aria-label="Prince Sahni Home">
          <img
            src={princelogo}
            alt="Prince Kumar Sahni"
            className="h-8 w-8 rounded-md object-cover transition-transform group-hover:scale-105"
          />
          <span className="font-display text-lg font-bold tracking-tight text-foreground">
            Prince Sahni<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop Nav Links matching live princesahni.com */}
        <nav className="ml-2 hidden items-center gap-1 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`relative rounded-md px-3 py-2 font-mono text-[13px] transition-colors ${
                isActive(item.href)
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.name.toLowerCase()}
              {isActive(item.href) && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-x-2 -bottom-px h-px bg-primary"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </Link>
          ))}

          <Link
            to="/dashboard"
            className={`ml-2 inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-xs transition-all ${
              isActive("/dashboard")
                ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                : "border border-border text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            <LayoutDashboard className="h-3.5 w-3.5" />
            <span>dashboard</span>
          </Link>
        </nav>

        {/* Right Actions matching live princesahni.com */}
        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <span className="mr-1 hidden items-center gap-2 font-mono text-[11px] text-muted-foreground lg:inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_0_3px_rgba(16,185,129,0.18)]" />
            available for work
          </span>

          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1.5 rounded-md px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground sm:flex"
          >
            <FileDown className="h-3.5 w-3.5" />
            <span>résumé</span>
          </a>

          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="overflow-hidden border-t border-border md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="container mx-auto flex flex-col gap-1 px-6 py-4">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-md px-3 py-2.5 font-mono text-sm transition-colors ${
                    isActive(item.href)
                      ? "bg-accent text-foreground font-semibold"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  }`}
                >
                  {item.name.toLowerCase()}
                </Link>
              ))}

              <Link
                to="/dashboard"
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-2 rounded-md px-3 py-2.5 font-mono text-sm transition-colors ${
                  isActive("/dashboard")
                    ? "bg-accent text-foreground font-semibold"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
              >
                <LayoutDashboard className="h-4 w-4" />
                <span>dashboard (cockpit)</span>
              </Link>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 rounded-md px-3 py-2.5 font-mono text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
              >
                <FileDown className="h-4 w-4" />
                <span>résumé</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
