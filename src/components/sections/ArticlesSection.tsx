import { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Calendar,
  Clock,
} from "lucide-react";
import { Reveal } from "@/components/ui/primitives/Reveal";
import { personalInfo, mockArticles } from "@/data/portfolioData";
import { useResource } from "@/hooks/useResource";

interface ArticleData {
  _id?: string;
  id?: string | number;
  title: string;
  description: string;
  publishedAt: string;
  readTime?: string;
  articleLink: string;
  coverImage?: string;
  tags?: string[];
  featured?: boolean;
}

export const ArticlesSection = () => {
  const { data: rawArticles } = useResource<ArticleData[]>(
    ["articles", "home"],
    import.meta.env.VITE_ARTICLE_URL,
    { fallback: mockArticles, timeoutMs: 3000 }
  );

  // Filter ONLY Prince's real Medium articles
  const mediumArticles = useMemo(() => {
    const list = Array.isArray(rawArticles) && rawArticles.length > 0 ? rawArticles : mockArticles;
    const filtered = list.filter(
      (a) => a.articleLink && a.articleLink.includes("medium.com")
    );
    return filtered.length > 0 ? filtered : mockArticles;
  }, [rawArticles]);

  const featured = useMemo(() => {
    return mediumArticles.find((a) => a.featured) || mediumArticles[0] || mockArticles[0];
  }, [mediumArticles]);

  const recents = useMemo(() => {
    const others = mediumArticles.filter(
      (a) => (a._id && a._id !== featured._id) || (a.id && a.id !== featured.id)
    );
    return others.slice(0, 4);
  }, [mediumArticles, featured]);

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
              <span>10+ Medium posts</span>
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
            <a
              href={personalInfo.medium}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-soft hover:text-foreground transition-colors"
            >
              <span className="font-bold text-foreground">M</span> Medium • Since 2023
            </a>

            <Link
              to="/articles"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold text-foreground shadow-soft transition-all hover:bg-accent hover:border-primary/40"
            >
              Browse all
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr] items-start">
          {/* Left Column: Featured Story Card */}
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:shadow-md hover:border-primary/40 group">
              {/* Graphic Banner Area with real Medium thumbnail */}
              <a
                href={featured.articleLink}
                target="_blank"
                rel="noreferrer"
                className="relative block aspect-[16/9] w-full overflow-hidden bg-muted"
              >
                {featured.coverImage ? (
                  <img
                    src={featured.coverImage}
                    alt={featured.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-purple-700/30 to-indigo-700/30 flex items-center justify-center">
                    <BookOpen className="h-12 w-12 text-primary" />
                  </div>
                )}

                {/* Badges on Thumbnail */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-background/90 backdrop-blur-md px-3.5 py-1 text-[11px] font-bold text-foreground border border-border/60 shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 animate-pulse" />
                    FEATURED STORY
                  </span>
                </div>

                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center gap-1 rounded-full bg-background/90 backdrop-blur-md px-3 py-1 text-xs font-semibold text-foreground border border-border/60 shadow-sm">
                    <Clock className="h-3 w-3 text-primary" />
                    {featured.readTime || "5 min read"}
                  </span>
                </div>
              </a>

              {/* Bottom Card Content Container */}
              <div className="p-6 sm:p-8 bg-card">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2.5">
                  <span className="font-bold text-foreground">M Medium</span>
                  <span>•</span>
                  <span>{featured.publishedAt}</span>
                  {featured.tags && featured.tags.length > 0 && (
                    <>
                      <span>•</span>
                      <span className="text-primary font-medium">{featured.tags[0]}</span>
                    </>
                  )}
                </div>

                <h4 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-foreground hover:text-primary transition-colors">
                  <a href={featured.articleLink} target="_blank" rel="noreferrer">
                    {featured.title}
                  </a>
                </h4>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {featured.description}
                </p>

                {/* Footer: Author info + Read -> Button */}
                <div className="mt-6 flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-purple-700 text-xs font-bold text-white shadow-sm">
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
                    href={featured.articleLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-500 px-4 py-1.5 text-xs font-bold text-white shadow-soft transition-all hover:shadow-md hover:-translate-y-px active:scale-95"
                  >
                    Read on Medium
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Stack of Article Cards with Real Thumbnails */}
          <div className="space-y-3.5">
            {recents.map((article, index) => (
              <Reveal key={article._id || article.id || index} delay={index * 0.05}>
                <a
                  href={article.articleLink}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex gap-4 rounded-2xl border border-border bg-card p-3.5 sm:p-4 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md items-center"
                >
                  {/* Left Thumbnail */}
                  {article.coverImage ? (
                    <div className="h-20 w-24 sm:h-24 sm:w-28 shrink-0 overflow-hidden rounded-xl border border-border bg-muted">
                      <img
                        src={article.coverImage}
                        alt={article.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary font-mono text-xs font-bold text-muted-foreground">
                      0{index + 2}
                    </div>
                  )}

                  {/* Right Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-primary" />
                        {article.publishedAt} • {article.readTime || "5 min read"}
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
                View all {mediumArticles.length}+ Medium articles
              </span>

              <Link
                to="/articles"
                className="font-semibold text-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
              >
                Browse all
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
