import { lazy, ReactNode, Suspense } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import { PageTransition } from "@/components/ui/primitives/PageTransition";
import BackgroundElements from "@/components/ui/primitives/BackgroundElements";

const AIChatbot = lazy(() => import("@/components/AIChatbot"));

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isAdmin = location.pathname.startsWith("/admin");

  if (isAdmin) {
    return <div className="min-h-screen bg-background text-foreground">{children}</div>;
  }

  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground">
      {/* Minimal background elements: subtle engineering grid, soft purple/gold aurora flares, crosshairs, depth arcs */}
      <BackgroundElements />

      <Header />
      <main className={`relative z-10 flex-1 ${isHome ? "" : "pt-28"}`}>
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>{children}</PageTransition>
        </AnimatePresence>
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
      {import.meta.env.VITE_GEMINI_API_KEY ? (
        <Suspense fallback={null}>
          <AIChatbot />
        </Suspense>
      ) : null}
    </div>
  );
};

export default Layout;
