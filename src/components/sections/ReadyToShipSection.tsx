import { Link } from "react-router-dom";
import { ArrowRight, Linkedin } from "lucide-react";
import { Reveal } from "@/components/ui/primitives/Reveal";
import { personalInfo } from "@/data/portfolioData";

export const ReadyToShipSection = () => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden border-t border-border/80">
      <div className="container-page relative z-10 text-center">
        {/* Availability Status Badge: • Available for new projects */}
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-xs font-semibold text-muted-foreground shadow-soft backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
            <span>Available for new projects</span>
          </div>
        </Reveal>

        {/* Headline (100% Matching Screenshot 4) */}
        <Reveal delay={0.08}>
          <h2 className="mt-8 font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            Ready to ship something{" "}
            <span className="text-purple-600 dark:text-purple-400">
              great
            </span>{" "}
            <br />
            <span className="bg-gradient-to-r from-[#b47334] via-[#d99042] to-[#d47828] dark:from-[#dca052] dark:via-[#eab308] dark:to-[#f59e0b] bg-clip-text text-transparent">
              together?
            </span>
          </h2>
        </Reveal>

        {/* Subtitle */}
        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            Clean architecture, thoughtful UX, and systems that scale — let&apos;s make your next product the one teams love to maintain.
          </p>
        </Reveal>

        {/* CTA Buttons */}
        <Reveal delay={0.24}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-500 px-7 py-3 text-sm font-semibold text-white shadow-soft transition-all hover:shadow-md hover:-translate-y-px active:scale-95"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold text-foreground shadow-soft transition-all hover:bg-accent hover:border-primary/40 active:scale-95"
            >
              <Linkedin className="h-4 w-4 text-[#0077b5]" />
              Connect on LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ReadyToShipSection;
