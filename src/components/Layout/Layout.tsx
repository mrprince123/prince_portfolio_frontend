import { lazy, ReactNode, Suspense, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardTopBar } from "./DashboardTopBar";
import { DashboardRightRail } from "./DashboardRightRail";
import Footer from "./Footer";
import { PageTransition } from "@/components/ui/primitives/PageTransition";

const AIChatbot = lazy(() => import("@/components/AIChatbot"));

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");
  const isHome = location.pathname === "/";

  if (isAdmin) {
    return <div className="min-h-screen bg-[#0a0a0f] text-foreground">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-foreground flex overflow-x-hidden">
      {/* 1. Left Persistent Sidebar (with Mobile Drawer Support) */}
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
        {/* Top Header Bar */}
        <DashboardTopBar
          collapsed={collapsed}
          onToggleSidebar={() => setCollapsed(!collapsed)}
          onOpenMobile={() => setMobileOpen(true)}
        />

        {/* Middle Area: Page Content + Optional Right Rail */}
        <div className="flex-1 flex min-w-0">
          <main className="flex-1 min-w-0 overflow-y-auto">
            <AnimatePresence mode="wait">
              <PageTransition key={location.pathname}>{children}</PageTransition>
            </AnimatePresence>
            <Footer />
          </main>

          {/* Right Rail only on Home dashboard cockpit */}
          {isHome && <DashboardRightRail />}
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
