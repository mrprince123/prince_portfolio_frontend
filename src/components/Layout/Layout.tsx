import { lazy, ReactNode, Suspense, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardTopBar } from "./DashboardTopBar";
import { DashboardRightRail } from "./DashboardRightRail";
import { LandingNavbar } from "./LandingNavbar";
import Footer from "./Footer";
import { PageTransition } from "@/components/ui/primitives/PageTransition";

const AIChatbot = lazy(() => import("@/components/AIChatbot"));

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isAdmin = location.pathname.startsWith("/admin");
  const isDashboardView =
    location.pathname.startsWith("/dashboard") ||
    location.pathname.startsWith("/projects") ||
    location.pathname.startsWith("/skills") ||
    location.pathname.startsWith("/articles") ||
    location.pathname.startsWith("/courses") ||
    location.pathname.startsWith("/blog") ||
    location.pathname.startsWith("/youtube") ||
    location.pathname.startsWith("/photography") ||
    location.pathname.startsWith("/social") ||
    location.pathname.startsWith("/resume") ||
    location.pathname.startsWith("/certificates") ||
    location.pathname.startsWith("/opensource");

  if (isAdmin) {
    return <div className="min-h-screen bg-[#0a0a0f] text-foreground">{children}</div>;
  }

  // 1. Landing View for Homepage (/) and About (/about, /work)
  // Has top Navbar with (Dashboard, About), NO sidebars
  if (!isDashboardView) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] text-foreground flex flex-col overflow-x-hidden">
        {/* Landing Top Navbar with (Dashboard, About) links */}
        <LandingNavbar />

        {/* Main Content Area */}
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <PageTransition key={location.pathname}>{children}</PageTransition>
          </AnimatePresence>
        </main>

        <Footer />

        {/* Floating AI Assistant */}
        {import.meta.env.VITE_GEMINI_API_KEY ? (
          <Suspense fallback={null}>
            <AIChatbot />
          </Suspense>
        ) : null}
      </div>
    );
  }

  // 2. Dashboard Cockpit View (/dashboard and dashboard subpages)
  // Has Left Persistent Sidebar, Top Bar HUD, and Right Rail on /dashboard
  const isCockpitHome = location.pathname === "/dashboard";

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-foreground flex overflow-x-hidden">
      {/* 1. Left Persistent Sidebar with all 12 items & collapsible categories */}
      <DashboardSidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed(!collapsed)}
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
      />

      {/* 2. Main Center & Right Container */}
      <div
        className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ml-0 ${
          collapsed ? "lg:ml-16" : "lg:ml-64"
        }`}
      >
        {/* Top Header Bar HUD */}
        <DashboardTopBar
          collapsed={collapsed}
          onToggleSidebar={() => setCollapsed(!collapsed)}
          onOpenMobile={() => setMobileOpen(true)}
        />

        {/* Middle Area: Page Content + Right Rail (on /dashboard) */}
        <div className="flex-1 flex min-w-0">
          <main className="flex-1 min-w-0 overflow-y-auto">
            <AnimatePresence mode="wait">
              <PageTransition key={location.pathname}>{children}</PageTransition>
            </AnimatePresence>
            <Footer />
          </main>

          {/* Right Rail only on Dashboard Cockpit */}
          {isCockpitHome && <DashboardRightRail />}
        </div>
      </div>

      {/* Floating AI Assistant */}
      {import.meta.env.VITE_GEMINI_API_KEY ? (
        <Suspense fallback={null}>
          <AIChatbot />
        </Suspense>
      ) : null}
    </div>
  );
};

export default Layout;
