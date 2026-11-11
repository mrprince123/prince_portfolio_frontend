import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Cpu,
  Layers,
  BookOpen,
  GraduationCap,
  FileText,
  Youtube,
  Camera,
  Share2,
  FileDown,
  Award,
  Github,
  X,
  Briefcase,
  Sparkles,
  ChevronRight,
  Activity,
  ExternalLink,
} from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import princelogo from "@/assets/princesahni-logo.png";

export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MENU_ITEMS = [
  { id: "about", name: "About", href: "/about", icon: User, badge: "Story" },
  { id: "skills", name: "Skill", href: "/skills", icon: Cpu, badge: "20+ Stack" },
  { id: "projects", name: "Projects", href: "/projects", icon: Layers, badge: "10+ Systems" },
  { id: "articles", name: "Articles", href: "/articles", icon: BookOpen, badge: "Essays" },
  { id: "courses", name: "Course", href: "/courses", icon: GraduationCap, badge: "Learning" },
  { id: "blogs", name: "Blogs", href: "/blog", icon: FileText, badge: "Deep Dives" },
  { id: "youtube", name: "YouTube", href: "/youtube", icon: Youtube, badge: "Videos" },
  { id: "photography", name: "Photography", href: "/photography", icon: Camera, badge: "600K+ Views" },
  { id: "social", name: "Social media page overview", href: "/social", icon: Share2, badge: "Hub" },
  { id: "resume", name: "Resume", href: "/resume", icon: FileDown, badge: "CV" },
  { id: "certificates", name: "Certificates", href: "/certificates", icon: Award, badge: "Verified" },
  { id: "opensource", name: "Opensource - show all data of my github", href: "/opensource", icon: Github, badge: "78 Repos" },
];

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer Sidebar */}
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed top-0 left-0 bottom-0 z-50 w-80 sm:w-96 border-r border-[#4361ee]/20 bg-background/95 backdrop-blur-2xl shadow-2xl flex flex-col justify-between overflow-hidden"
          >
            {/* Top Header */}
            <div>
              <div className="flex items-center justify-between p-5 border-b border-border">
                <Link to="/" onClick={onClose} className="flex items-center gap-3">
                  <img
                    src={princelogo}
                    alt={personalInfo.name}
                    className="h-9 w-9 rounded-full object-cover ring-2 ring-[#4361ee]/40"
                  />
                  <div>
                    <h3 className="font-display text-base font-bold text-foreground">
                      Prince Sahni<span className="text-[#4361ee]">.</span>
                    </h3>
                    <p className="font-mono text-[10px] text-muted-foreground">
                      Software Engineer @ Webkul
                    </p>
                  </div>
                </Link>

                <button
                  onClick={onClose}
                  className="rounded-full p-1.5 text-muted-foreground hover:bg-white/5 hover:text-foreground transition-colors"
                  aria-label="Close sidebar"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Special Featured Tab: /work */}
              <div className="p-4 border-b border-[#4361ee]/15 bg-gradient-to-r from-purple-950/30 to-card/50">
                <div className="font-mono text-[10px] uppercase text-[#4895ef] font-semibold tracking-wider mb-1.5 flex items-center gap-1">
                  <Sparkles className="h-3 w-3 text-[#4895ef] animate-pulse" />
                  <span>Featured Work Experience</span>
                </div>
                <Link
                  to="/work"
                  onClick={onClose}
                  className={`flex items-center justify-between rounded-xl border p-3 font-mono text-xs transition-all ${
                    location.pathname === "/work"
                      ? "border-[#4361ee] bg-[#4361ee]/20 text-white shadow-md shadow-purple-500/15"
                      : "border-[#4361ee]/30 bg-[#4361ee]/10 text-white hover:border-[#4361ee]/60 hover:bg-[#4361ee]/20"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Briefcase className="h-4 w-4 text-[#4895ef] shrink-0" />
                    <div>
                      <div className="font-bold text-foreground flex items-center gap-1.5">
                        Work Portfolio (/work)
                        <span className="rounded bg-[#4361ee]/30 text-[#4895ef] px-1 py-0.2 text-[9px]">NEW</span>
                      </div>
                      <div className="text-[10px] text-muted-foreground">Same as princesingh.work/#about</div>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-[#4895ef]" />
                </Link>
              </div>

              {/* 12 Menu Items */}
              <div className="p-3 max-h-[calc(100vh-280px)] overflow-y-auto space-y-1">
                <div className="px-3 py-1 font-mono text-[10px] uppercase text-zinc-500 font-semibold tracking-wider">
                  Menu Navigation (12 Sections)
                </div>

                {MENU_ITEMS.map((item, idx) => {
                  const Icon = item.icon;
                  const active = isActive(item.href);

                  return (
                    <Link
                      key={item.id}
                      to={item.href}
                      onClick={onClose}
                      className={`flex items-center justify-between rounded-xl px-3 py-2 font-mono text-xs transition-all ${
                        active
                          ? "bg-[#4361ee]/20 text-white border border-[#4361ee]/30 font-semibold shadow-sm"
                          : "text-muted-foreground hover:bg-[#4361ee]/10 hover:text-foreground border border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[10px] text-zinc-500 w-4">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <Icon className={`h-4 w-4 ${active ? "text-[#4895ef]" : "text-zinc-400"}`} />
                        <span className="truncate max-w-[170px]">{item.name}</span>
                      </div>

                      <span
                        className={`rounded px-1.5 py-0.5 text-[10px] font-mono ${
                          active
                            ? "bg-[#4361ee]/30 text-white"
                            : "bg-black/30 text-zinc-500 border border-white/5"
                        }`}
                      >
                        {item.badge}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Bottom Status & Actions */}
            <div className="p-4 border-t border-border bg-black/40">
              <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground mb-3">
                <span className="flex items-center gap-1.5">
                  <Activity className="h-3 w-3 text-emerald-400" />
                  Systems Nominal
                </span>
                <span className="text-[#4895ef]">New Delhi, IN</span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg border border-[#4361ee]/30 bg-[#4361ee]/10 py-2 font-mono text-xs text-[#4895ef] hover:bg-[#4361ee]/20 transition-colors"
                >
                  <FileDown className="h-3.5 w-3.5" /> Résumé PDF
                </a>
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#4361ee] py-2 font-mono text-xs font-semibold text-white hover:bg-[#4361ee] transition-colors"
                >
                  Contact →
                </Link>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};
