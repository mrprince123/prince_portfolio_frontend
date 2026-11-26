import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Calendar,
  Clock,
  ExternalLink,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/ui/primitives/Reveal";
import { personalInfo } from "@/data/portfolioData";

interface ArticleData {
  id: string | number;
  title: string;
  description: string;
  publishedAt: string;
  readTime: string;
  articleLink: string;
  tag?: string;
  number?: string;
}

const featuredArticle: ArticleData = {
  id: "featured-1",
  title: "Building Resilient Microservices with Python FastAPI, Celery & Redis",
  description:
    "Architectural decisions, task queues, and caching patterns that separate robust production backends from brittle prototypes, with real-world case studies.",
  publishedAt: "October 21, 2026",
  readTime: "3 min read",
  articleLink: `${personalInfo.medium}`,
  tag: "Microservices & Python",
};

const recentArticles: ArticleData[] = [
  {
    id: "art-1",
    number: "02",
    title: "CVE-2026-99999 (PwnEscape): The Linux Kernel Bug That Lets a VM Escape to the Host",
    description: "Who's affected, how the flaw works, and whether containerized hypervisors are safe.",
    publishedAt: "Oct 20, 2026",
    readTime: "3 min",
    articleLink: `${personalInfo.medium}`,
  },
  {
    id: "art-2",
    number: "03",
    title: "Software Archaeology: How to Excavate and Understand Legacy Codebases",
    description: "A field guide to decoding undocumented Python and JavaScript services with confidence.",
    publishedAt: "Sep 17, 2026",
    readTime: "3 min",
    articleLink: `${personalInfo.medium}`,
  },
  {
    id: "art-3",
    number: "04",
    title: "The RESTful API Blueprint: Designing for Security, Scale, and Sanity",
    description: "The architectural decisions that separate robust production backends from fragile ones.",
    publishedAt: "Sep 16, 2026",
    readTime: "3 min",
    articleLink: `${personalInfo.medium}`,
  },
  {
    id: "art-4",
    number: "05",
    title: "Crow's Foot Notation Explained: A Complete Guide to Database Relationships",
    description: "Master ER diagrams once and for all with clear relational schema and indexing patterns.",
    publishedAt: "Sep 12, 2026",
    readTime: "3 min",
    articleLink: `${personalInfo.medium}`,
  },
];

export const ArticlesSection = () => {
  return (
    <section id="articles" className="relative py-20 md:py-28 overflow-hidden border-t border-border/80">
      <div className="container-page relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3.5 py-1 text-xs font-semibold text-muted-foreground shadow-soft backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500 animate-pulse" />
              <span className="tracking-wider uppercase text-[10.5px] font-bold text-foreground">
                WRITING
              </span>
              <span className="text-muted-foreground/40">•</span>
              <span>15+ posts</span>
            </div>

            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Latest{" "}
              <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-600 dark:from-amber-400 dark:via-amber-300 dark:to-yellow-500 bg-clip-text text-transparent">
                articles
              </span>
            </h2>

            <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed">
              On engineering, product, and the craft of building software that lasts — from system design to pragmatic AI.
            </p>
          </div>

          {/* Right side Medium Badge & Browse Button */}
          <div className="flex items-center gap-2.5 shrink-0">
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-soft">
              <span className="font-bold text-foreground">M</span> Medium • Since 2023
            </span>

            <Link
              to="/articles"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold text-foreground shadow-soft transition-all hover:bg-accent hover:border-primary/40"
            >
              Browse all
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* 2-Column Grid Layout (Matching Screenshot 3) */}
        <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr] items-start">
          {/* Left Column: Featured Story Card */}
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:shadow-md">
              {/* Graphic Banner Area */}
              <div className="relative min-h-[270px] bg-gradient-to-br from-[#1d4ed8] via-[#2563eb] to-[#0f172a] p-7 sm:p-9 text-white flex flex-col justify-between overflow-hidden">
                {/* Subtle background glow */}
                <div className="absolute -right-8 -top-8 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" />

                {/* Top Row: Tag + Read time */}
                <div className="flex items-center justify-between relative z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-md px-3.5 py-1 text-[11px] font-semibold text-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                    FEATURED STORY
                  </span>
                  <span className="flex items-center gap-1 text-xs text-white/80 font-medium">
                    <Clock className="h-3.5 w-3.5" />
                    3 min
                  </span>
                </div>

                {/* Center Content: Headline & 3D Shield graphic */}
                <div className="my-6 grid grid-cols-[1fr_auto] items-center gap-6 relative z-10">
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                    {featuredArticle.title}
                  </h3>

                  <div className="hidden sm:flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
                    <ShieldCheck className="h-12 w-12 text-cyan-300" />
                  </div>
                </div>

                {/* Bottom author credit strip */}
                <div className="text-[11px] text-white/70 font-mono relative z-10 border-t border-white/10 pt-3">
                  Author: Prince Kumar Sahni | princesahni.com | medium.com/@mrprince123
                </div>
              </div>

              {/* Bottom White/Card Content Container */}
              <div className="p-6 sm:p-8 bg-card">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <span className="font-bold text-foreground">M Medium</span>
                  <span>•</span>
                  <span>{featuredArticle.publishedAt}</span>
                  <span>•</span>
                  <span>{featuredArticle.readTime}</span>
                </div>

                <h4 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-foreground hover:text-primary transition-colors">
                  <a href={featuredArticle.articleLink} target="_blank" rel="noreferrer">
                    {featuredArticle.title}
                  </a>
                </h4>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {featuredArticle.description}
                </p>

                {/* Footer: Author info + Read -> Button */}
                <div className="mt-6 flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-purple-700 text-xs font-bold text-white">
                      P
                    </span>
                    <div className="flex flex-col text-left">
                      <span className="text-xs font-bold text-foreground">
                        {personalInfo.name}
                      </span>
                      <span className="text-[10.5px] text-muted-foreground">
                        Software Engineer · Backend
                      </span>
                    </div>
                  </div>

                  <a
                    href={featuredArticle.articleLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-500 px-4 py-1.5 text-xs font-bold text-white shadow-soft transition-all hover:shadow-md hover:-translate-y-px active:scale-95"
                  >
                    Read
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Stack of 4 Article Cards */}
          <div className="space-y-3.5">
            {recentArticles.map((article, index) => (
              <Reveal key={article.id} delay={index * 0.05}>
                <a
                  href={article.articleLink}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex gap-4 rounded-2xl border border-border bg-card p-4 sm:p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
                >
                  {/* Left Number/Code Badge */}
                  <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary/80 font-mono text-xs font-bold text-muted-foreground group-hover:text-primary group-hover:border-primary/30 transition-colors">
                    {article.number}
                  </div>

                  {/* Right Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {article.publishedAt} • {article.readTime}
                      </span>
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                    </div>

                    <h5 className="font-display text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h5>

                    <p className="mt-1 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                      {article.description}
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}

            {/* Bottom Bar: View all articles / Browse */}
            <div className="flex items-center justify-between rounded-xl border border-border bg-card/60 px-4 py-3 text-xs shadow-soft">
              <span className="flex items-center gap-1.5 font-medium text-muted-foreground">
                <BookOpen className="h-4 w-4 text-primary" />
                View 15+ articles
              </span>

              <Link
                to="/articles"
                className="font-semibold text-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
              >
                Browse
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
