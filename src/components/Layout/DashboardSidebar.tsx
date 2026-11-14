import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronDown,
  LayoutDashboard,
  Bot,
  Layers,
  Cpu,
  Boxes,
  User,
  Award,
  FileText,
  Target,
  Grid,
  Users,
  GitBranch,
  Camera,
  Share2,
  BookOpen,
  GraduationCap,
  Youtube,
  PanelLeft,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface DashboardSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  mobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  collapsed,
  onToggle,
  mobileOpen = false,
  onCloseMobile,
}) => {
  const location = useLocation();

  // Collapsible category groups state
  const [openGroups, setOpenGroups] = useState({
    overview: true,
    build: true,
    career: true,
    practice: true,
    media: true,
    community: true,
  });

  const toggleGroup = (key: keyof typeof openGroups) => {
    setOpenGroups((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const isActive = (path: string) => {
    if (path === "/dashboard" && location.pathname === "/dashboard") return true;
    if (path !== "/" && path !== "/dashboard" && location.pathname.startsWith(path.split("#")[0])) {
      if (path.includes("#")) {
        return location.hash === path.substring(path.indexOf("#"));
      }
      return true;
    }
    return false;
  };

  const handleLinkClick = () => {
    if (onCloseMobile) onCloseMobile();
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden transition-opacity"
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed top-0 left-0 bottom-0 z-50 flex flex-col justify-between border-r border-border bg-card text-card-foreground transition-all duration-300 ${
          mobileOpen ? "translate-x-0 w-64" : "-translate-x-full lg:translate-x-0"
        } ${collapsed ? "lg:w-16" : "lg:w-64"}`}
        aria-label="Sidebar Navigation"
      >
        {/* 1. Sidebar Header: Elegant Handwritten Signature & Panel Toggle */}
        <div className="flex h-14 items-center justify-between px-4 border-b border-border">
          {(!collapsed || mobileOpen) && (
            <Link
              to="/"
              onClick={handleLinkClick}
              className="flex items-center gap-1 overflow-hidden group"
              aria-label="Prince Sahni Home"
            >
              <span className="font-signature text-2xl font-bold tracking-wide whitespace-nowrap transition-transform group-hover:scale-105">
                <span className="text-foreground">Prince</span>{" "}
                <span className="text-[#4361ee] glow-theme-sm">Sahni</span>
              </span>
            </Link>
          )}

          <button
            onClick={onToggle}
            className={`rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors ${
              collapsed && !mobileOpen ? "mx-auto" : ""
            }`}
            title="Toggle sidebar (Alt+B)"
            aria-label="Toggle sidebar"
          >
            <PanelLeft className="h-4 w-4" />
          </button>
        </div>

        {/* 2. Navigation Scroll Area */}
        <nav className="flex-1 overflow-y-auto px-2.5 py-3 space-y-4 text-xs font-sans scrollbar-none">
          {/* GROUP 1: OVERVIEW */}
          <div className="border-b border-border pb-2">
            {(!collapsed || mobileOpen) && (
              <button
                onClick={() => toggleGroup("overview")}
                className="w-full flex items-center justify-between text-[11px] uppercase font-semibold text-muted-foreground/70 tracking-wider px-2 py-1 hover:text-card-foreground transition-colors"
              >
                <span>OVERVIEW</span>
                <ChevronDown
                  className={`h-3 w-3 transition-transform ${openGroups.overview ? "" : "-rotate-90"}`}
                />
              </button>
            )}

            {openGroups.overview && (
              <div className="mt-1 space-y-0.5">
                <Link
                  to="/dashboard"
                  onClick={handleLinkClick}
                  className={`relative flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                    isActive("/dashboard")
                      ? "bg-[#4361ee]/15 text-[#4361ee] dark:text-white font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  title="Overview / Dashboard"
                >
                  {isActive("/dashboard") && (
                    <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r bg-[#4361ee] shadow-[0_0_8px_rgba(67,97,238,0.8)]" />
                  )}
                  <LayoutDashboard
                    className={`h-4 w-4 shrink-0 ${
                      isActive("/dashboard") ? "text-[#4895ef]" : "text-muted-foreground"
                    }`}
                  />
                  {(!collapsed || mobileOpen) && <span>Overview</span>}
                </Link>

                {/* Replaced Kurukshetr AI with Thor AI as requested */}
                <Link
                  to="/projects/thor-ai"
                  onClick={handleLinkClick}
                  className={`relative flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                    location.pathname.includes("thor-ai") || location.search.includes("cat=ai")
                      ? "bg-[#4361ee]/15 text-[#4361ee] dark:text-white font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  title="Thor AI – Full-Stack RAG Assistant"
                >
                  {(location.pathname.includes("thor-ai") || location.search.includes("cat=ai")) && (
                    <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r bg-[#4361ee] shadow-[0_0_8px_rgba(67,97,238,0.8)]" />
                  )}
                  <Bot
                    className={`h-4 w-4 shrink-0 ${location.pathname.includes("thor-ai") || location.search.includes("cat=ai") ? "text-[#4895ef]" : "text-muted-foreground"}`}
                  />
                  {(!collapsed || mobileOpen) && (
                    <span className="flex items-center justify-between flex-1">
                      <span>Thor AI</span>
                      <span className="rounded bg-[#4361ee]/25 px-1.5 py-0.5 text-[9px] font-mono text-[#4895ef] border border-[#4361ee]/30">
                        RAG
                      </span>
                    </span>
                  )}
                </Link>
              </div>
            )}
          </div>

          {/* GROUP 2: BUILD */}
          <div className="border-b border-border pb-2">
            {(!collapsed || mobileOpen) && (
              <button
                onClick={() => toggleGroup("build")}
                className="w-full flex items-center justify-between text-[11px] uppercase font-semibold text-muted-foreground/70 tracking-wider px-2 py-1 hover:text-card-foreground transition-colors"
              >
                <span>BUILD</span>
                <ChevronDown
                  className={`h-3 w-3 transition-transform ${openGroups.build ? "" : "-rotate-90"}`}
                />
              </button>
            )}

            {openGroups.build && (
              <div className="mt-1 space-y-0.5">
                <Link
                  to="/projects"
                  onClick={handleLinkClick}
                  className={`relative flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                    isActive("/projects") && !location.search.includes("cat=ai")
                      ? "bg-[#4361ee]/15 text-[#4361ee] dark:text-white font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  title="AI Lab"
                >
                  {isActive("/projects") && !location.search.includes("cat=ai") && (
                    <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r bg-[#4361ee] shadow-[0_0_8px_rgba(67,97,238,0.8)]" />
                  )}
                  <Layers
                    className={`h-4 w-4 shrink-0 ${
                      isActive("/projects") && !location.search.includes("cat=ai") ? "text-[#4895ef]" : "text-muted-foreground"
                    }`}
                  />
                  {(!collapsed || mobileOpen) && <span>AI Lab</span>}
                </Link>

                <Link
                  to="/projects?cat=ai"
                  onClick={handleLinkClick}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                  title="AI Systems"
                >
                  <Cpu className="h-4 w-4 shrink-0 text-muted-foreground" />
                  {(!collapsed || mobileOpen) && <span>AI Systems</span>}
                </Link>

                <Link
                  to="/projects?cat=cloud"
                  onClick={handleLinkClick}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                  title="Engineering Systems"
                >
                  <Boxes className="h-4 w-4 shrink-0 text-muted-foreground" />
                  {(!collapsed || mobileOpen) && <span>Engineering Systems</span>}
                </Link>
              </div>
            )}
          </div>

          {/* GROUP 3: CAREER */}
          <div className="border-b border-border pb-2">
            {(!collapsed || mobileOpen) && (
              <button
                onClick={() => toggleGroup("career")}
                className="w-full flex items-center justify-between text-[11px] uppercase font-semibold text-muted-foreground/70 tracking-wider px-2 py-1 hover:text-card-foreground transition-colors"
              >
                <span>CAREER</span>
                <ChevronDown
                  className={`h-3 w-3 transition-transform ${openGroups.career ? "" : "-rotate-90"}`}
                />
              </button>
            )}

            {openGroups.career && (
              <div className="mt-1 space-y-0.5">
                <Link
                  to="/about"
                  onClick={handleLinkClick}
                  className={`relative flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                    isActive("/about")
                      ? "bg-[#4361ee]/15 text-[#4361ee] dark:text-white font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  title="Founder (About)"
                >
                  {isActive("/about") && (
                    <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r bg-[#4361ee] shadow-[0_0_8px_rgba(67,97,238,0.8)]" />
                  )}
                  <User
                    className={`h-4 w-4 shrink-0 ${isActive("/about") ? "text-[#4895ef]" : "text-muted-foreground"}`}
                  />
                  {(!collapsed || mobileOpen) && <span>Founder (About)</span>}
                </Link>

                <Link
                  to="/certificates"
                  onClick={handleLinkClick}
                  className={`relative flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                    isActive("/certificates")
                      ? "bg-[#4361ee]/15 text-[#4361ee] dark:text-white font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  title="Certificates"
                >
                  {isActive("/certificates") && (
                    <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r bg-[#4361ee] shadow-[0_0_8px_rgba(67,97,238,0.8)]" />
                  )}
                  <Award
                    className={`h-4 w-4 shrink-0 ${
                      isActive("/certificates") ? "text-[#4895ef]" : "text-muted-foreground"
                    }`}
                  />
                  {(!collapsed || mobileOpen) && <span>Certificates</span>}
                </Link>

                <Link
                  to="/resume"
                  onClick={handleLinkClick}
                  className={`relative flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                    isActive("/resume")
                      ? "bg-[#4361ee]/15 text-[#4361ee] dark:text-white font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  title="Resume"
                >
                  {isActive("/resume") && (
                    <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r bg-[#4361ee] shadow-[0_0_8px_rgba(67,97,238,0.8)]" />
                  )}
                  <FileText
                    className={`h-4 w-4 shrink-0 ${isActive("/resume") ? "text-[#4895ef]" : "text-muted-foreground"}`}
                  />
                  {(!collapsed || mobileOpen) && <span>Resume</span>}
                </Link>
              </div>
            )}
          </div>

          {/* GROUP 4: PRACTICE */}
          <div className="border-b border-border pb-2">
            {(!collapsed || mobileOpen) && (
              <button
                onClick={() => toggleGroup("practice")}
                className="w-full flex items-center justify-between text-[11px] uppercase font-semibold text-muted-foreground/70 tracking-wider px-2 py-1 hover:text-card-foreground transition-colors"
              >
                <span>PRACTICE</span>
                <ChevronDown
                  className={`h-3 w-3 transition-transform ${openGroups.practice ? "" : "-rotate-90"}`}
                />
              </button>
            )}

            {openGroups.practice && (
              <div className="mt-1 space-y-0.5">
                <Link
                  to="/about#impact"
                  onClick={handleLinkClick}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                  title="DSA Lab"
                >
                  <Target className="h-4 w-4 shrink-0 text-[#4895ef]" />
                  {(!collapsed || mobileOpen) && <span>DSA Lab</span>}
                </Link>

                <Link
                  to="/skills"
                  onClick={handleLinkClick}
                  className={`relative flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                    isActive("/skills")
                      ? "bg-[#4361ee]/15 text-[#4361ee] dark:text-white font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  title="Tech Stack"
                >
                  {isActive("/skills") && (
                    <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r bg-[#4361ee] shadow-[0_0_8px_rgba(67,97,238,0.8)]" />
                  )}
                  <Grid
                    className={`h-4 w-4 shrink-0 ${isActive("/skills") ? "text-[#4895ef]" : "text-muted-foreground"}`}
                  />
                  {(!collapsed || mobileOpen) && <span>Tech Stack</span>}
                </Link>
              </div>
            )}
          </div>

          {/* GROUP 5: MEDIA & LEARNING (User 12 Menu Items) */}
          <div className="border-b border-border pb-2">
            {(!collapsed || mobileOpen) && (
              <button
                onClick={() => toggleGroup("media")}
                className="w-full flex items-center justify-between text-[11px] uppercase font-semibold text-muted-foreground/70 tracking-wider px-2 py-1 hover:text-card-foreground transition-colors"
              >
                <span>MEDIA &amp; LEARNING</span>
                <ChevronDown
                  className={`h-3 w-3 transition-transform ${openGroups.media ? "" : "-rotate-90"}`}
                />
              </button>
            )}

            {openGroups.media && (
              <div className="mt-1 space-y-0.5">
                <Link
                  to="/articles"
                  onClick={handleLinkClick}
                  className={`relative flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                    isActive("/articles")
                      ? "bg-[#4361ee]/15 text-[#4361ee] dark:text-white font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  title="Articles"
                >
                  {isActive("/articles") && (
                    <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r bg-[#4361ee] shadow-[0_0_8px_rgba(67,97,238,0.8)]" />
                  )}
                  <BookOpen
                    className={`h-4 w-4 shrink-0 ${
                      isActive("/articles") ? "text-[#4895ef]" : "text-muted-foreground"
                    }`}
                  />
                  {(!collapsed || mobileOpen) && <span>Articles</span>}
                </Link>

                <Link
                  to="/courses"
                  onClick={handleLinkClick}
                  className={`relative flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                    isActive("/courses")
                      ? "bg-[#4361ee]/15 text-[#4361ee] dark:text-white font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  title="Courses"
                >
                  {isActive("/courses") && (
                    <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r bg-[#4361ee] shadow-[0_0_8px_rgba(67,97,238,0.8)]" />
                  )}
                  <GraduationCap
                    className={`h-4 w-4 shrink-0 ${
                      isActive("/courses") ? "text-[#4895ef]" : "text-muted-foreground"
                    }`}
                  />
                  {(!collapsed || mobileOpen) && <span>Courses</span>}
                </Link>

                <Link
                  to="/blog"
                  onClick={handleLinkClick}
                  className={`relative flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                    isActive("/blog")
                      ? "bg-[#4361ee]/15 text-[#4361ee] dark:text-white font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  title="Blogs"
                >
                  {isActive("/blog") && (
                    <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r bg-[#4361ee] shadow-[0_0_8px_rgba(67,97,238,0.8)]" />
                  )}
                  <FileText
                    className={`h-4 w-4 shrink-0 ${isActive("/blog") ? "text-[#4895ef]" : "text-muted-foreground"}`}
                  />
                  {(!collapsed || mobileOpen) && <span>Blogs</span>}
                </Link>

                <Link
                  to="/youtube"
                  onClick={handleLinkClick}
                  className={`relative flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                    isActive("/youtube")
                      ? "bg-[#4361ee]/15 text-[#4361ee] dark:text-white font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  title="YouTube"
                >
                  {isActive("/youtube") && (
                    <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r bg-[#4361ee] shadow-[0_0_8px_rgba(67,97,238,0.8)]" />
                  )}
                  <Youtube
                    className={`h-4 w-4 shrink-0 ${
                      isActive("/youtube") ? "text-red-500" : "text-muted-foreground"
                    }`}
                  />
                  {(!collapsed || mobileOpen) && <span>YouTube</span>}
                </Link>

                <Link
                  to="/photography"
                  onClick={handleLinkClick}
                  className={`relative flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                    isActive("/photography")
                      ? "bg-[#4361ee]/15 text-[#4361ee] dark:text-white font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  title="Photography"
                >
                  {isActive("/photography") && (
                    <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r bg-[#4361ee] shadow-[0_0_8px_rgba(67,97,238,0.8)]" />
                  )}
                  <Camera
                    className={`h-4 w-4 shrink-0 ${
                      isActive("/photography") ? "text-[#4895ef]" : "text-muted-foreground"
                    }`}
                  />
                  {(!collapsed || mobileOpen) && <span>Photography</span>}
                </Link>

                <Link
                  to="/social"
                  onClick={handleLinkClick}
                  className={`relative flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                    isActive("/social")
                      ? "bg-[#4361ee]/15 text-[#4361ee] dark:text-white font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  title="Social Media Overview"
                >
                  {isActive("/social") && (
                    <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r bg-[#4361ee] shadow-[0_0_8px_rgba(67,97,238,0.8)]" />
                  )}
                  <Share2
                    className={`h-4 w-4 shrink-0 ${isActive("/social") ? "text-[#4895ef]" : "text-muted-foreground"}`}
                  />
                  {(!collapsed || mobileOpen) && <span>Social Media</span>}
                </Link>
              </div>
            )}
          </div>

          {/* GROUP 6: COMMUNITY & OPENSOURCE */}
          <div>
            {(!collapsed || mobileOpen) && (
              <button
                onClick={() => toggleGroup("community")}
                className="w-full flex items-center justify-between text-[11px] uppercase font-semibold text-muted-foreground/70 tracking-wider px-2 py-1 hover:text-card-foreground transition-colors"
              >
                <span>COMMUNITY</span>
                <ChevronDown
                  className={`h-3 w-3 transition-transform ${openGroups.community ? "" : "-rotate-90"}`}
                />
              </button>
            )}

            {openGroups.community && (
              <div className="mt-1 space-y-0.5">
                <Link
                  to="/opensource"
                  onClick={handleLinkClick}
                  className={`relative flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                    isActive("/opensource")
                      ? "bg-[#4361ee]/15 text-[#4361ee] dark:text-white font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  title="Open Source"
                >
                  {isActive("/opensource") && (
                    <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r bg-[#4361ee] shadow-[0_0_8px_rgba(67,97,238,0.8)]" />
                  )}
                  <GitBranch
                    className={`h-4 w-4 shrink-0 ${
                      isActive("/opensource") ? "text-[#4895ef]" : "text-[#4895ef]"
                    }`}
                  />
                  {(!collapsed || mobileOpen) && (
                    <span className="flex items-center justify-between flex-1">
                      <span>Open Source</span>
                      <span className="rounded bg-[#4361ee]/20 px-1.5 py-0.5 text-[9px] font-mono text-[#4895ef]">
                        COCKPIT
                      </span>
                    </span>
                  )}
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* 3. Sidebar Footer (ACCOUNT REMOVED AS REQUESTED) */}
        <div className="p-3 border-t border-border">
          <Link
            to="/contact"
            onClick={handleLinkClick}
            className={`flex items-center justify-center gap-2 rounded-xl bg-[#4361ee] py-2.5 text-xs font-semibold text-white hover:bg-[#3a56d4] transition-all shadow-md shadow-[#4361ee]/20 ${
              collapsed && !mobileOpen ? "px-0" : "px-3"
            }`}
            title="Hire Prince"
          >
            <ArrowRight className="h-4 w-4 shrink-0" />
            {(!collapsed || mobileOpen) && <span>Hire Prince</span>}
          </Link>
        </div>
      </aside>
    </>
  );
};
