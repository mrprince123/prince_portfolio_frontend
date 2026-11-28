import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Sparkles, Terminal, Cloud } from "lucide-react";
import { Link } from "react-router-dom";
import princeCutout from "@/assets/prince-cutout.png";

export const HeroSection: React.FC = () => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Interactive 3D mouse parallax calculation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 md:pt-40 md:pb-24 overflow-hidden select-none"
    >
      {/* ── Background Mesh & Aurora Lighting (Matching Reference) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft violet top glow */}
        <div className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-purple-600/15 dark:bg-purple-900/25 rounded-full blur-[120px]" />
        {/* Radiant Emerald / Teal central glow behind Prince */}
        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[650px] h-[550px] bg-teal-400/20 dark:bg-teal-500/20 rounded-full blur-[130px]" />
        {/* Subtle cyan accent glow */}
        <div className="absolute top-[48%] left-[45%] -translate-x-1/2 w-[450px] h-[350px] bg-cyan-400/15 dark:bg-cyan-500/15 rounded-full blur-[100px]" />
      </div>

      <div className="container-page relative z-10">
        
        {/* Top Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-card/60 backdrop-blur-md px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500 animate-pulse" />
            AI-Driven Architecture
          </span>
        </motion.div>

        {/* ── Headline: "Software Engineer for [ AI + Python ]" matching reference ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold tracking-tight text-foreground leading-[1.08]">
            Software Engineer for <br />
            <span className="inline-block mt-2 sm:mt-3">
              <span className="relative inline-flex items-center px-5 sm:px-7 py-1.5 sm:py-2 rounded-2xl sm:rounded-3xl border border-teal-500/30 dark:border-teal-400/30 bg-teal-500/10 dark:bg-teal-400/10 backdrop-blur-xl shadow-lg shadow-teal-500/5 text-teal-600 dark:text-teal-300">
                AI + Python
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-5 sm:mt-6 max-w-2xl text-center text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground">
            Specializing in autonomous AI agents, retrieval-augmented generation (RAG) architectures, and production-ready distributed backends.
          </p>

          {/* CTA Pill Buttons */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => handleScroll("apps")}
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3 text-sm font-semibold hover:opacity-90 transition-all shadow-md active:scale-95 group"
            >
              Explore Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-border/80 bg-card/60 backdrop-blur-md px-7 py-3 text-sm font-semibold text-foreground hover:bg-accent transition-all shadow-xs active:scale-95"
            >
              Get in touch
            </Link>
          </div>
        </motion.div>

        {/* ── Central 3D Portrait with Halftone Mesh & Floating Pills ── */}
        <div className="relative mt-8 sm:mt-12 flex justify-center items-end min-h-[360px] sm:min-h-[440px] md:min-h-[490px] max-w-3xl mx-auto">
          
          {/* Halftone / Dot Matrix AI Facial Scan Overlay */}
          <div
            className="absolute top-[6%] left-1/2 -translate-x-1/2 w-[280px] h-[320px] sm:w-[350px] sm:h-[400px] pointer-events-none z-10 opacity-35 dark:opacity-45"
            style={{
              backgroundImage: "radial-gradient(circle, currentColor 1.5px, transparent 1.5px)",
              backgroundSize: "14px 14px",
              WebkitMaskImage: "radial-gradient(ellipse at 60% 40%, black 25%, transparent 65%)",
              maskImage: "radial-gradient(ellipse at 60% 40%, black 25%, transparent 65%)",
              transform: `perspective(1000px) rotateY(${mousePos.x * 6}deg) rotateX(${-mousePos.y * 6}deg)`,
              transition: "transform 0.15s ease-out",
            }}
          />

          {/* ── 4 Floating 3D Frosted Glass Badges Orbiting Prince's Head ── */}
          
          {/* Badge 1: Top Right (AI Agents) */}
          <div
            className="absolute top-[8%] right-[2%] sm:right-[10%] lg:right-[14%] z-20 animate-hero-float-1"
            style={{
              transform: `perspective(1000px) translate3d(${mousePos.x * 22}px, ${mousePos.y * 22}px, 30px)`,
              transition: "transform 0.12s ease-out",
            }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 dark:border-white/15 bg-card/75 dark:bg-black/45 backdrop-blur-xl px-4 py-2 text-xs sm:text-sm font-semibold text-foreground shadow-2xl hover:scale-105 transition-transform">
              <Bot className="h-4 w-4 text-teal-500" />
              <span>AI Agents</span>
            </div>
          </div>

          {/* Badge 2: Middle Left (RAG Architecture) */}
          <div
            className="absolute top-[28%] left-[2%] sm:left-[8%] lg:left-[12%] z-20 animate-hero-float-2"
            style={{
              transform: `perspective(1000px) translate3d(${mousePos.x * 18}px, ${mousePos.y * 18}px, 20px)`,
              transition: "transform 0.12s ease-out",
            }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 dark:border-white/15 bg-card/75 dark:bg-black/45 backdrop-blur-xl px-4 py-2 text-xs sm:text-sm font-semibold text-foreground shadow-2xl hover:scale-105 transition-transform">
              <Sparkles className="h-4 w-4 text-purple-500" />
              <span>RAG Architecture</span>
            </div>
          </div>

          {/* Badge 3: Middle Right (Python & FastAPI) */}
          <div
            className="absolute top-[48%] right-[0%] sm:right-[4%] lg:right-[8%] z-20 animate-hero-float-1"
            style={{
              transform: `perspective(1000px) translate3d(${mousePos.x * 24}px, ${mousePos.y * 24}px, 35px)`,
              transition: "transform 0.12s ease-out",
            }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 dark:border-white/15 bg-card/75 dark:bg-black/45 backdrop-blur-xl px-4 py-2 text-xs sm:text-sm font-semibold text-foreground shadow-2xl hover:scale-105 transition-transform">
              <Terminal className="h-4 w-4 text-emerald-500" />
              <span>Python &amp; FastAPI</span>
            </div>
          </div>

          {/* Badge 4: Lower Left (AWS & Scalable Systems) */}
          <div
            className="absolute top-[64%] left-[4%] sm:left-[10%] lg:left-[14%] z-20 animate-hero-float-2"
            style={{
              transform: `perspective(1000px) translate3d(${mousePos.x * 16}px, ${mousePos.y * 16}px, 15px)`,
              transition: "transform 0.12s ease-out",
            }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 dark:border-white/15 bg-card/75 dark:bg-black/45 backdrop-blur-xl px-4 py-2 text-xs sm:text-sm font-semibold text-foreground shadow-2xl hover:scale-105 transition-transform">
              <Cloud className="h-4 w-4 text-cyan-500" />
              <span>AWS &amp; Scalable Systems</span>
            </div>
          </div>

          {/* ── Prince's Transparent Cutout Portrait with 3D Depth & Bottom Fade ── */}
          <div
            className="relative z-10 max-w-[300px] sm:max-w-[390px] md:max-w-[440px] lg:max-w-[480px] overflow-visible [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
            style={{
              transform: `perspective(1200px) rotateY(${mousePos.x * 10}deg) rotateX(${-mousePos.y * 8}deg)`,
              transition: "transform 0.15s ease-out",
            }}
          >
            <img
              src={princeCutout}
              alt="Prince Kumar Sahni - Software Engineer"
              className="w-full h-auto object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)] dark:drop-shadow-[0_20px_45px_rgba(45,212,191,0.2)]"
              loading="eager"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;
