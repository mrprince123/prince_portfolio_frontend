import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { RouteFallback } from "@/components/ui/primitives/RouteFallback";
import { AdminAuthProvider } from "./admin/context/AdminAuthContext";
import { ProtectedRoute } from "./admin/components/ProtectedRoute";

const Home = lazy(() => import("./pages/Home"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const About = lazy(() => import("./pages/About"));
const Skills = lazy(() => import("./pages/Skills"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const Courses = lazy(() => import("./pages/Courses"));
const CourseDetails = lazy(() => import("./pages/CourseDetails"));
const Resume = lazy(() => import("./pages/Resume"));
const Articles = lazy(() => import("./pages/Article"));
const BlogDetail = lazy(() => import("./pages/BlogDetails"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Expanded Pages matching User Sidebar & References
const YouTube = lazy(() => import("./pages/YouTube"));
const Photography = lazy(() => import("./pages/Photography"));
const SocialOverview = lazy(() => import("./pages/SocialOverview"));
const Certificates = lazy(() => import("./pages/Certificates"));
const Opensource = lazy(() => import("./pages/Opensource"));

// Admin Dashboard Components
const AdminLogin = lazy(() =>
  import("./admin/pages/AdminLogin").then((m) => ({ default: m.AdminLogin }))
);
const AdminLayout = lazy(() =>
  import("./admin/components/AdminLayout").then((m) => ({ default: m.AdminLayout }))
);
const OverviewPage = lazy(() =>
  import("./admin/pages/OverviewPage").then((m) => ({ default: m.OverviewPage }))
);
const ContactsPage = lazy(() =>
  import("./admin/pages/ContactsPage").then((m) => ({ default: m.ContactsPage }))
);
const ProjectsPage = lazy(() =>
  import("./admin/pages/ProjectsPage").then((m) => ({ default: m.ProjectsPage }))
);
const BlogsPage = lazy(() =>
  import("./admin/pages/BlogsPage").then((m) => ({ default: m.BlogsPage }))
);
const CoursesPage = lazy(() =>
  import("./admin/pages/CoursesPage").then((m) => ({ default: m.CoursesPage }))
);
const SkillsPage = lazy(() =>
  import("./admin/pages/SkillsPage").then((m) => ({ default: m.SkillsPage }))
);
const ArticlesPage = lazy(() =>
  import("./admin/pages/ArticlesPage").then((m) => ({ default: m.ArticlesPage }))
);
const TestimonialsPage = lazy(() =>
  import("./admin/pages/TestimonialsPage").then((m) => ({ default: m.TestimonialsPage }))
);
const YoutubePage = lazy(() =>
  import("./admin/pages/YoutubePage").then((m) => ({ default: m.YoutubePage }))
);
const SettingsPage = lazy(() =>
  import("./admin/pages/SettingsPage").then((m) => ({ default: m.SettingsPage }))
);
const PublishingStudioPage = lazy(() =>
  import("./admin/pages/PublishingStudioPage").then((m) => ({ default: m.PublishingStudioPage }))
);
const IdeasLibraryPage = lazy(() =>
  import("./admin/pages/IdeasLibraryPage").then((m) => ({ default: m.IdeasLibraryPage }))
);
const PublishingCalendarPage = lazy(() =>
  import("./admin/pages/PublishingCalendarPage").then((m) => ({ default: m.PublishingCalendarPage }))
);
const PlatformConnectionsPage = lazy(() =>
  import("./admin/pages/PlatformConnectionsPage").then((m) => ({ default: m.PlatformConnectionsPage }))
);
const PublishingLogsPage = lazy(() =>
  import("./admin/pages/PublishingLogsPage").then((m) => ({ default: m.PublishingLogsPage }))
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AdminAuthProvider>
            <Layout>
              <Suspense fallback={<RouteFallback />}>
                <Routes>
                  {/* Public Portfolio Routes (12 Sidebar Items + Work Tab) */}
                  <Route path="/" element={<Home />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/articles" element={<Articles />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/courses/:slug" element={<CourseDetails />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogDetail />} />
                  <Route path="/youtube" element={<YouTube />} />
                  <Route path="/photography" element={<Photography />} />
                  <Route path="/social" element={<SocialOverview />} />
                  <Route path="/social-overview" element={<SocialOverview />} />
                  <Route path="/resume" element={<Resume />} />
                  <Route path="/certificates" element={<Certificates />} />
                  <Route path="/opensource" element={<Opensource />} />
                  <Route path="/work" element={<Navigate to="/about" replace />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privacy" element={<PrivacyPolicy />} />

                  {/* Admin Auth Route */}
                  <Route path="/admin/login" element={<AdminLogin />} />

                  {/* Protected Admin Routes */}
                  <Route
                    path="/admin"
                    element={
                      <ProtectedRoute>
                        <AdminLayout />
                      </ProtectedRoute>
                    }
                  >
                    <Route index element={<Navigate to="/admin/overview" replace />} />
                    <Route path="overview" element={<OverviewPage />} />
                    <Route path="contacts" element={<ContactsPage />} />
                    <Route path="projects" element={<ProjectsPage />} />
                    <Route path="blogs" element={<BlogsPage />} />
                    <Route path="courses" element={<CoursesPage />} />
                    <Route path="skills" element={<SkillsPage />} />
                    <Route path="articles" element={<ArticlesPage />} />
                    <Route path="testimonials" element={<TestimonialsPage />} />
                    <Route path="youtube" element={<YoutubePage />} />
                    <Route path="settings" element={<SettingsPage />} />

                    {/* AI Publishing Studio Routes */}
                    <Route path="publishing">
                      <Route index element={<Navigate to="/admin/publishing/studio" replace />} />
                      <Route path="studio" element={<PublishingStudioPage />} />
                      <Route path="ideas" element={<IdeasLibraryPage />} />
                      <Route path="calendar" element={<PublishingCalendarPage />} />
                      <Route path="platforms" element={<PlatformConnectionsPage />} />
                      <Route path="logs" element={<PublishingLogsPage />} />
                    </Route>
                    <Route path="publishing/studio" element={<PublishingStudioPage />} />
                    <Route path="publishing/ideas" element={<IdeasLibraryPage />} />
                    <Route path="publishing/calendar" element={<PublishingCalendarPage />} />
                    <Route path="publishing/platforms" element={<PlatformConnectionsPage />} />
                    <Route path="publishing/logs" element={<PublishingLogsPage />} />
                  </Route>

                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </Layout>
          </AdminAuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
