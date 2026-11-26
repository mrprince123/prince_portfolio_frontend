import { useState, useMemo } from "react";
import { Search, Calendar, Clock, ArrowUpRight, BookOpen, X } from "lucide-react";
import { Seo } from "@/components/seo";
import { useResource } from "@/hooks/useResource";
import { personalInfo } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/primitives/SectionHeader";
import { Reveal } from "@/components/ui/primitives/Reveal";

interface ArticleItem {
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

const fallbackArticles: ArticleItem[] = [
  {
    id: 1,
    title: "The Future of React: Server Components and Concurrent Features",
    description:
      "Exploring how React Server Components (RSC), Suspense boundaries, and concurrent rendering are redefining full-stack mental models.",
    publishedAt: "2024-02-20",
    articleLink: `${personalInfo.medium}`,
    tags: ["React", "JavaScript", "Frontend"],
    featured: true,
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Mastering Node.js Streams for Efficient High-Throughput Data Handling",
    description:
      "A deep dive into Node.js streams, pipeline utilities, backpressure handling, and memory-safe processing without blocking the event loop.",
    publishedAt: "2024-01-15",
    articleLink: `${personalInfo.medium}`,
    tags: ["Node.js", "Backend", "Performance"],
    featured: true,
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Microservices Architecture: Pragmatic Boundaries & Event Logs",
    description:
      "Understanding service boundaries, event-driven decoupling with Kafka/RabbitMQ, and operational trade-offs for scalable backends.",
    publishedAt: "2023-12-10",
    articleLink: `${personalInfo.medium}`,
    tags: ["Microservices", "System Design", "Backend"],
    featured: true,
    readTime: "8 min read",
  },
  {
    id: 4,
    title: "Mastering TypeScript: Advanced Type Gymnastics & Strict Clean Code",
    description:
      "Conditional types, mapped types, template literal types, and enterprise patterns for building maintainable large-scale applications.",
    publishedAt: "2023-11-28",
    articleLink: `${personalInfo.medium}`,
    tags: ["TypeScript", "Frontend", "Clean Code"],
    featured: false,
    readTime: "6 min read",
  },
  {
    id: 5,
    title: "Python FastAPI: Designing Production-Grade Async REST APIs",
    description:
      "How to leverage Pydantic models, async event loops, automatic OpenAPI docs, and dependency injection in FastAPI.",
    publishedAt: "2023-10-15",
    articleLink: `${personalInfo.medium}`,
    tags: ["Python", "FastAPI", "APIs"],
    featured: false,
    readTime: "6 min read",
  },
  {
    id: 6,
    title: "Redis Caching Strategies: Eliminating Stampedes & Invalidation Bugs",
    description:
      "Cache-aside vs write-through, probabilistic early expiration (XFetch), and Redis clustering under peak production traffic.",
    publishedAt: "2023-09-02",
    articleLink: `${personalInfo.medium}`,
    tags: ["Redis", "Caching", "Databases"],
    featured: true,
    readTime: "7 min read",
  },
];

const FILTER_TAGS = ["All", "React", "TypeScript", "Node.js", "Backend", "Microservices"];

const Articles = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  const { data: rawArticles } = useResource<ArticleItem[]>(
    ["articles"],
    import.meta.env.VITE_ARTICLE_URL,
    { fallback: fallbackArticles, timeoutMs: 3000 }
  );

  const articles = Array.isArray(rawArticles) && rawArticles.length > 0 ? rawArticles : fallbackArticles;

  // Filtered by Tag + Search Query
  const filtered = useMemo(() => {
    return articles.filter((article) => {
      const matchesTag =
        selectedTag === "All" ||
        article.tags?.some((t) => t.toLowerCase() === selectedTag.toLowerCase());

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
        title="Articles | Prince Kumar Sahni - Software Engineer"
        description="Technical essays, system design guides, and software engineering deep dives by Prince Kumar Sahni."
        url="https://princesahni.com/articles"
        image="https://princesahni.com/og-images/princesahni-logo.png"
      />

      <div className="py-16 md:py-24">
        <div className="container-page">
          {/* Page Header */}
          <SectionHeader
            eyebrow="Articles &amp; Essays"
            title="Technical writing &amp;"
            highlight="engineering guides"
            subtitle="Deep dives into web performance, distributed systems, modern TypeScript, and pragmatic AI engineering."
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

          {/* Articles Grid */}
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
                  <Reveal key={article.id ?? index} delay={index * 0.06}>
                    <a
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
                    >
                      <div>
                        {/* Meta */}
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5 text-primary" />
                            {article.publishedAt || "Recent"}
                          </span>
                          <span className="flex items-center gap-1 rounded-full bg-secondary px-2.5 py-0.5 font-medium">
                            <Clock className="h-3 w-3" />
                            {article.readTime || "5 min read"}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
                          {article.title}
                        </h3>

                        {/* Description */}
                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                          {article.description}
                        </p>
                      </div>

                      {/* Card Bottom: Tags + Arrow */}
                      <div className="mt-6 border-t border-border pt-4">
                        <div className="flex items-center justify-between">
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
