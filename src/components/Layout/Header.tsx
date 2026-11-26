import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight, FileText } from "lucide-react";
import { ThemeToggle } from "@/components/ui/primitives/ThemeToggle";
import { personalInfo } from "@/data/portfolioData";

const NAV_LINKS = [
  { label: "About",      href: "/about" },
  { label: "Apps",       href: "/apps" },
  { label: "Articles",   href: "/articles" },
  { label: "Experience", href: "/experience" },
  { label: "Skills",     href: "/skills" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change & scroll to top
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const isActive = (href: string) => {
    if (href === "/" && location.pathname === "/") return true;
    if (href !== "/" && location.pathname.startsWith(href)) return true;
    if (href === "/apps" && location.pathname === "/projects") return true;
    if (href === "/experience" && location.pathname === "/work-experience") return true;
    return false;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/95 shadow-sm backdrop-blur-md"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 sm:px-8 lg:px-10 py-3.5">
        {/* Brand: Tara-inspired circular avatar + stacked title */}
        <Link
          to="/"
          className="group flex items-center gap-2.5 text-foreground"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-purple-700 dark:bg-purple-600 text-sm font-bold text-white shadow-sm">
            P
          </span>
          <div className="hidden sm:flex flex-col text-left">
            <span className="text-sm font-bold tracking-tight text-foreground leading-tight group-hover:text-primary transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[9.5px] font-semibold uppercase tracking-wider text-muted-foreground leading-tight">
              SOFTWARE ENGINEER · BACKEND &amp; FULL-STACK
            </span>
          </div>
        </Link>

        {/* Center Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                to={link.href}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                  active
                    ? "bg-muted font-bold text-foreground shadow-inner"
                    : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side: ThemeToggle + Resume + Connect -> */}
        <div className="flex items-center gap-2.5">
          <ThemeToggle />

          {/* Resume Pill Button (Tara-style with pulsing dot) */}
          <Link
            to="/resume"
            className={`hidden sm:inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold transition-all hover:border-primary/50 hover:bg-accent shadow-soft ${
              location.pathname === "/resume"
                ? "border-primary/60 bg-accent text-primary"
                : "text-foreground"
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-purple-500 animate-pulse" />
            Resume
          </Link>

          {/* Connect -> Purple Button */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-500 px-4 py-1.5 text-xs font-bold text-white shadow-soft transition-all hover:shadow-md hover:-translate-y-px active:scale-95"
          >
            Connect
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>

          {/* Mobile burger button */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="border-t border-border bg-background/98 backdrop-blur-md md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
          >
            <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 sm:px-8 py-4">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`rounded-md px-3.5 py-2.5 text-base font-medium transition-colors ${
                      active
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-foreground/80 hover:bg-accent hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="mt-2 flex flex-col gap-2 border-t border-border pt-3">
                <Link
                  to="/resume"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground shadow-soft"
                >
                  <FileText className="h-4 w-4 text-primary" />
                  View Resume
                </Link>

                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground"
                >
                  Open PDF on Google Drive ↗
                </a>

                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-purple-700 hover:bg-purple-800 py-2.5 text-sm font-bold text-white shadow-soft"
                >
                  Connect With Me
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
