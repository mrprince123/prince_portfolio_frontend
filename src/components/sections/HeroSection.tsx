import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { personalInfo } from "@/data/portfolioData";

export const HeroSection = () => {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container-page relative z-10">
        {/* Top Accent Eyebrow: —— FULL-STACK & BACKEND ENGINEER —— */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center gap-3"
        >
          <span className="h-px w-10 sm:w-16 bg-border/80" />
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-muted-foreground/80">
            SOFTWARE ENGINEER
          </span>
          <span className="h-px w-10 sm:w-16 bg-border/80" />
        </motion.div>

        {/* Hero Headline (100% Matching Reference Typography) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-6 text-center"
        >
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold tracking-tight text-foreground leading-[1.08]">
            Building scalable <br />
            products with{" "}
            <span className="text-purple-600 dark:text-purple-400">
              clean
            </span>{" "}
            <br />
            <span className="bg-gradient-to-r from-[#b47334] via-[#d99042] to-[#d47828] dark:from-[#dca052] dark:via-[#eab308] dark:to-[#f59e0b] bg-clip-text text-transparent">
              architecture
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-2xl text-center text-base sm:text-lg leading-relaxed text-muted-foreground">
            I craft modern web applications, robust backend systems, seamless integrations, and pragmatic AI workflows that deliver real business value.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3.5"
        >
          <button
            onClick={() => handleScroll("apps")}
            className="inline-flex items-center gap-2 rounded-full bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-500 px-7 py-3 text-sm font-semibold text-white shadow-soft transition-all hover:shadow-md hover:-translate-y-px active:scale-95"
          >
            View my work
            <ArrowRight className="h-4 w-4" />
          </button>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold text-foreground shadow-soft transition-all hover:bg-accent hover:border-primary/40 active:scale-95"
          >
            Get in touch
          </Link>
        </motion.div>

        {/* Three Pill Badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-2.5"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 backdrop-blur-sm px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-500 animate-pulse" />
            2+ years shipping
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/70 backdrop-blur-sm px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-soft">
            📦 Design → Deploy
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/70 backdrop-blur-sm px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-soft">
            ⚡ Pragmatic AI
          </span>
        </motion.div>

        {/* Scroll Indicator (Tara Routray Signature) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 sm:mt-20 flex flex-col items-center justify-center gap-2 text-muted-foreground/60"
        >
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70">
            SCROLL
          </span>
          <div className="h-7 w-4 rounded-full border-2 border-muted-foreground/30 p-1 flex justify-center">
            <div className="h-1.5 w-1 rounded-full bg-muted-foreground/60 animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
