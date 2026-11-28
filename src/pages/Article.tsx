import { useState, useMemo } from "react";
import { Search, Calendar, Clock, ArrowUpRight, BookOpen, X } from "lucide-react";
import { Seo } from "@/components/seo";
import { useResource } from "@/hooks/useResource";
import { personalInfo, mockArticles } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/primitives/SectionHeader";
import { Reveal } from "@/components/ui/primitives/Reveal";

interface ArticleItem {
  _id?: string;
  id?: number | string;
  title: string;
  description: string;
  coverImage?: string;
  publishedAt?: string;
  articleLink: string;
  tags?: string[];
  featured?: boolean;
  readTime?: string;
}

const FILTER_TAGS = ["All", "AI", "Docker", "System Design", "Microservices", "Android"];

const Articles = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  const { data: rawArticles } = useResource<ArticleItem[]>(
    ["articles"],
    import.meta.env.VITE_ARTICLE_URL,
    { fallback: mockArticles, timeoutMs: 3000 }
  );

  // Filter ONLY Prince's real Medium articles
  const articles = useMemo(() => {
    const list = Array.isArray(rawArticles) && rawArticles.length > 0 ? rawArticles : mockArticles;
    const mediumOnly = list.filter((a) => a.articleLink && a.articleLink.includes("medium.com"));
    return mediumOnly.length > 0 ? mediumOnly : mockArticles;
  }, [rawArticles]);

  // Filtered by Tag + Search Query
  const filtered = useMemo(() => {
    return articles.filter((article) => {
      const matchesTag =
        selectedTag === "All" ||
        article.tags?.some((t) => t.toLowerCase().includes(selectedTag.toLowerCase()));

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.description.toLowerCase().includes(query) ||
        article.tags?.some((t) => t.toLowerCase().includes(query));

      return matchesTag && matchesSearch;
    });
  }, [articles, selectedTag, searchQuery]);

  return (
    <>
      <Seo
        title="Technical Articles & Medium Publications | Prince Kumar Sahni"
        description="Deep-dive technical essays and system design breakdowns by Prince Kumar Sahni on Medium, covering AI engineering, Docker, microservices, and system architecture."
        url="https://princesahni.com/articles"
        image="https://princesahni.com/og-images/princesahni-logo.png"
        keywords={[
          "Prince Kumar Sahni Articles",
          "Prince Sahni Medium",
          "mrprince123 medium",
          "System Design Articles",
          "Docker Made Simple",
          "Microservices vs Monolith",
          "Vibe Coding",
          "Android Jetpack Compose",
        ]}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Articles", path: "/articles" },
        ]}
      />

      <div className="py-16 md:py-24">
        <div className="container-page">
          {/* Page Header */}
          <SectionHeader
            eyebrow="Articles &amp; Essays"
            title="Medium articles &amp;"
            highlight="engineering guides"
            subtitle="Deep dives into AI workflows, system architecture, microservices, Linux tools, and Android development published on Medium."
          />

          {/* Search & Tag Filter Bar */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Search Input */}
            <div className="relative max-w-sm flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles or topics..."
                className="w-full rounded-full border border-border bg-card pl-10 pr-10 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 shadow-soft focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Tag Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {FILTER_TAGS.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                    selectedTag === tag
                      ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                      : "border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Results Counter */}
          <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground border-b border-border pb-3">
            <span>
              Showing <strong className="text-foreground">{filtered.length}</strong> {filtered.length === 1 ? "article" : "articles"}
            </span>
            {searchQuery && (
              <span>Filtered by &ldquo;{searchQuery}&rdquo;</span>
            )}
          </div>

          {/* Articles Grid with Visible Thumbnails */}
          {filtered.length === 0 ? (
            <div className="mt-16 text-center py-16 rounded-2xl border border-dashed border-border bg-card/40">
              <p className="font-display text-lg font-bold text-foreground">
                No articles found
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Try searching for another topic or resetting your filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTag("All");
                }}
                className="btn-primary rounded-full px-5 py-2 text-xs font-semibold mt-4"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="mt-8 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((article, index) => {
                const link = article.articleLink || personalInfo.medium;

                return (
                  <Reveal key={article._id ?? article.id ?? index} delay={index * 0.05}>
                    <a
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
                    >
                      <div>
                        {/* Article Thumbnail Image */}
                        {article.coverImage && (
                          <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
                            <img
                              src={article.coverImage}
                              alt={article.title}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                              loading="lazy"
                            />
                            <div className="absolute top-3 right-3">
                              <span className="flex items-center gap-1 rounded-full bg-background/90 backdrop-blur-md px-2.5 py-1 text-[11px] font-semibold text-foreground border border-border/60 shadow-sm">
                                <Clock className="h-3 w-3 text-primary" />
                                {article.readTime || "5 min read"}
                              </span>
                            </div>
                          </div>
                        )}

                        <div className="p-5 sm:p-6">
                          {/* Meta */}
                          <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3.5 w-3.5 text-primary" />
                              {article.publishedAt || "Recent"}
                            </span>
                            <span className="font-bold text-foreground flex items-center gap-1">
                              <span className="text-primary font-black">M</span> Medium
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
                            {article.title}
                          </h3>

                          {/* Description */}
                          <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                            {article.description}
                          </p>
                        </div>
                      </div>

                      {/* Card Bottom: Tags + Arrow */}
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
                        <div className="border-t border-border pt-3.5 flex items-center justify-between">
                          <div className="flex flex-wrap gap-1.5">
                            {article.tags?.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full border border-border/80 bg-secondary/80 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-border bg-secondary text-muted-foreground transition-transform duration-200 group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-45">
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </span>
                        </div>
                      </div>
                    </a>
                  </Reveal>
                );
              })}
            </div>
          )}

          {/* Medium Profile Banner */}
          <div className="mt-20 rounded-2xl border border-border bg-card/60 p-8 shadow-soft flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary shrink-0">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-display text-lg font-bold text-foreground">
                  Read more on Medium
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                  I regularly publish technical insights, system design breakdowns, and developer guides.
                </p>
              </div>
            </div>

            <a
              href={personalInfo.medium}
              target="_blank"
              rel="noreferrer"
              className="btn-primary rounded-full px-6 py-2.5 text-sm font-semibold shrink-0"
            >
              Follow on Medium →
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Articles;
