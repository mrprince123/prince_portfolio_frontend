import { lazy, Suspense, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { personalInfo, stats } from "@/data/portfolioData";
import { Button } from "@/components/ui/primitives/Button";
import { StatStrip } from "@/components/ui/primitives/StatStrip";
import { useIsMobile } from "@/hooks/use-mobile";
import { LayoutDashboard, ArrowRight, FileDown } from "lucide-react";

const HeroCanvas = lazy(() => import("@/components/hero/HeroCanvas"));

const TAGLINES = personalInfo.taglines;

const useTypewriter = (words: string[]) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const done = !deleting && text === current;
    const cleared = deleting && text === "";
    const delay = done ? 1600 : cleared ? 200 : deleting ? 40 : 70;

    const timer = setTimeout(() => {
      if (done) setDeleting(true);
      else if (cleared) {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else {
        setText(current.slice(0, deleting ? text.length - 1 : text.length + 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return text;
};

// Staggered entrance for the hero copy.
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export const HeroSection = () => {
  const typed = useTypewriter(TAGLINES);
  const reduced = useReducedMotion();
  const isMobile = useIsMobile();

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      {/* Ambient hero backdrop: 3D wireframe canvas + grid overlay */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_10%,hsl(var(--primary)/0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-grid opacity-60" />
        {!reduced && !isMobile && (
          <Suspense fallback={null}>
            <HeroCanvas />
          </Suspense>
        )}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 gap-0 md:grid-cols-[44px_1fr] md:gap-8">
          <div className="hidden md:block">
            <span className="mt-1 inline-block rotate-180 font-mono text-[11px] tracking-[0.14em] text-[#4895ef] [writing-mode:vertical-rl]">
              PORTFOLIO / 2026
            </span>
          </div>

          <motion.div
            variants={container}
            initial={reduced ? false : "hidden"}
            animate="show"
            className="max-w-3xl"
          >
            <motion.div
              variants={item}
              className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.12em] text-[#4895ef]"
            >
              <span>Software Engineer — {personalInfo.location}</span>
              <span className="h-px w-14 bg-[#4361ee]/40" />
            </motion.div>

            <motion.h1
              variants={item}
              className="text-balance font-display text-4xl sm:text-5xl md:text-7xl font-black leading-[1.02] tracking-tight text-foreground"
            >
              I build software that{" "}
              <em className="not-italic text-purple-gradient">solves the problem</em> first, then writes
              clean code.
            </motion.h1>

            <motion.p variants={item} className="mt-6 font-mono text-sm sm:text-base text-zinc-400">
              <span className="text-[#4895ef] font-bold">$</span> {typed}
              <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-[#4361ee] align-middle motion-reduce:animate-none" />
            </motion.p>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-zinc-300 font-sans"
            >
              {personalInfo.bio}
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild variant="primary" className="bg-[#4361ee] hover:bg-[#3a56d4] text-white shadow-lg shadow-[#4361ee]/30 font-bold">
                <Link to="/dashboard" className="flex items-center gap-2">
                  <LayoutDashboard className="h-4 w-4" />
                  <span>Open Cockpit Dashboard</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button asChild variant="secondary">
                <Link to="/about">About &amp; Work Portfolio</Link>
              </Button>

              <Button asChild variant="link">
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5"
                >
                  <FileDown className="h-4 w-4 text-[#4895ef]" />
                  <span>Download résumé →</span>
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-16">
          <StatStrip items={stats.map((s) => ({ value: s.number, label: s.label }))} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
