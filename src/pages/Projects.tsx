import { Seo } from "@/components/seo";
import { useResource } from "@/hooks/useResource";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { EmptyState } from "@/components/ui/primitives/EmptyState";
import { Skeleton } from "@/components/ui/primitives/Skeleton";
import { Reveal } from "@/components/ui/primitives/Reveal";
import { AnimatedNumber } from "@/components/ui/primitives/AnimatedNumber";
import { ProjectCard, type ProjectCardData } from "@/components/cards/ProjectCard";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

type PageProject = ProjectCardData & { category?: string };

const fallback: PageProject[] = [
  {
    id: 1,
    title: "Thor AI – Full-Stack RAG System",
    description:
      "A full-stack chat application with Retrieval-Augmented Generation (RAG) capabilities, built with FastAPI (Python backend) and Next.js (TypeScript frontend). Enables users to upload documents, engage in intelligent conversations with AI, and retrieve information with sub-second vector search.",
    category: "ai",
    technologies: ["Python", "FastAPI", "Next.js", "TypeScript", "RAG", "Vector DB", "LangChain"],
    liveUrl: "https://github.com/mrprince123/thor-ai",
    githubUrl: "https://github.com/mrprince123/thor-ai",
    featured: true,
  },
  {
    id: 2,
    title: "Claude CLI UI – Agent Browser Control",
    description:
      "A clean, claude.ai-style browser UI for your local Claude Code agent — chat, file edits, shell, and all of its tools, without the terminal. Provides real-time bidirectional WebSocket orchestration.",
    category: "ai",
    technologies: ["TypeScript", "React", "Node.js", "WebSockets", "Claude Code", "Tailwind CSS"],
    liveUrl: "https://github.com/mrprince123/claude_cli_ui",
    githubUrl: "https://github.com/mrprince123/claude_cli_ui",
    featured: true,
  },
  {
    id: 3,
    title: "Code Rev – AI Code Review Platform",
    description:
      "An AI-powered platform that reviews code, detects security vulnerabilities, and provides best-practice recommendations instantly across GitHub pull requests.",
    category: "ai",
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Gemini API"],
    liveUrl: "https://github.com/mrprince123/Code-Rev-Front",
    githubUrl: "https://github.com/mrprince123/Code-Rev-Front",
    featured: true,
  },
  {
    id: 7,
    title: "AI Image Generator",
    description:
      "A web app that allows users to generate stunning AI-powered images using text prompts. Includes image history, download options, and category-based organization.",
    category: "web",
    technologies: ["Next.js", "Node.js", "Cloudinary", "OpenAI API", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 8,
    title: "Fitness Tracker App",
    description:
      "Native Android fitness tracking app with daily goals, activity insights, and progress analytics using Jetpack Compose and Room Database.",
    category: "android",
    technologies: ["Kotlin", "Jetpack Compose", "Room DB", "Firebase", "MVVM"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 9,
    title: "DevLink – Developer Directory",
    description:
      "A platform to explore and connect with developers worldwide. Features profile creation, project showcase, and skill-based filtering.",
    category: "web",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 11,
    title: "Blogify – Modern Blogging Platform",
    description:
      "A sleek blogging platform with markdown editor, image uploads, and SEO optimization. Built for creators to publish and grow their audience.",
    category: "web",
    technologies: ["Next.js", "MongoDB", "JWT", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 12,
    title: "YouTune – Endless YouTube Playlist Player",
    description:
      "An Android app for uninterrupted YouTube playlist playback, allowing users to loop, shuffle, and enjoy continuous music or podcasts.",
    category: "android",
    technologies: ["Kotlin", "Jetpack Compose", "YouTube API", "Coroutines"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
];

const categories = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI Systems", badge: "FLAGSHIP" },
  { id: "web", label: "Full-Stack Web" },
  { id: "android", label: "Android" },
  { id: "cloud", label: "Cloud & Systems" },
];

const Projects = () => {
  const [searchParams] = useSearchParams();
  const catParam = searchParams.get("cat");
  const [selectedCategory, setSelectedCategory] = useState(catParam || "all");

  useEffect(() => {
    if (catParam) {
      setSelectedCategory(catParam);
    }
  }, [catParam]);

  const { data, isLoading } = useResource<PageProject[]>(
    ["projects"],
    import.meta.env.VITE_PROJECT_URL,
    { fallback, timeoutMs: 3000 },
  );

  const projectData = data ?? [];
  const filteredProjects =
    selectedCategory === "all"
      ? projectData
      : projectData.filter((project) => project.category === selectedCategory);

  return (
    <>
      <Seo
        title="Projects & AI Systems | Prince Kumar Sahni - Software Engineer"
        description="Explore production systems and AI projects built by Prince Kumar Sahni including Thor AI, Claude CLI UI, and CodeRev AI."
        url="https://princesahni.com/projects"
        image="https://princesahni.com/og-images/princesahni-logo.png"
      />

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#4895ef]">
              PRODUCTION SYSTEMS &amp; AI
            </span>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              Things I've <span className="text-theme-gradient">built</span>.
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground font-sans">
              Real-world systems and AI tools including Thor AI RAG assistant and Claude CLI UI, each built for scale, performance, and craft.
            </p>
            <p className="mt-4 font-mono text-sm text-muted-foreground">
              <AnimatedNumber value={`${projectData.length}`} className="text-foreground" /> systems ·{" "}
              <AnimatedNumber value={`${projectData.filter((p) => p.featured).length}`} className="text-foreground" /> featured
            </p>
          </div>
        </div>

        <div className="container mx-auto mt-10 px-6">
          {/* Animated filter tabs */}
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            {categories.map((category) => {
              const active = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSelectedCategory(category.id)}
                  className={cn(
                    "relative rounded-full px-4 py-2 transition-all flex items-center gap-1.5",
                    active
                      ? "text-white font-bold bg-[#4361ee] shadow-md shadow-[#4361ee]/25"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted",
                  )}
                >
                  {category.badge && (
                    <Sparkles className="h-3 w-3 text-[#4cc9f0]" />
                  )}
                  <span>{category.label}</span>
                  {category.badge && (
                    <span className="rounded bg-card/80 border border-border px-1.5 py-0.2 text-[9px] font-bold text-[#4cc9f0]">
                      {category.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <div className="mt-10">
            {isLoading && projectData.length === 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="rounded-2xl border border-border p-6">
                    <Skeleton className="aspect-video w-full rounded-xl" />
                    <Skeleton className="mt-4 h-6 w-3/4" />
                    <Skeleton className="mt-2 h-4 w-full" />
                    <Skeleton className="mt-1 h-4 w-2/3" />
                  </div>
                ))}
              </div>
            ) : filteredProjects.length === 0 ? (
              <EmptyState
                title="No projects in this category"
                description="Try selecting another category or check back soon."
                action={{
                  label: "Show all systems",
                  onClick: () => setSelectedCategory("all"),
                }}
              />
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project, index) => (
                  <Reveal key={project.id} delay={index * 0.05}>
                    <ProjectCard project={project} index={index} />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
