import { Seo } from "@/components/seo";
import HeroSection from "@/components/sections/HeroSection";
import AppsSection from "@/components/sections/AppsSection";
import ArticlesSection from "@/components/sections/ArticlesSection";
import ReadyToShipSection from "@/components/sections/ReadyToShipSection";

const Home = () => (
  <>
    <Seo
      title="Prince Kumar Sahni | Software Engineer & Systems Architect"
      description="Official portfolio of Prince Kumar Sahni — Software Engineer building scalable distributed backends, high-performance web applications, and pragmatic AI workflows."
      url="https://princesahni.com"
      image="https://princesahni.com/og-images/princesahni-logo.png"
      keywords={[
        "Prince Kumar Sahni",
        "Prince Sahni",
        "mrprince123",
        "Software Engineer",
        "Full Stack Developer",
        "Backend Architect",
        "Distributed Systems",
        "TypeScript",
        "Node.js",
        "Python",
        "FastAPI",
        "React",
        "Docker",
        "New Delhi",
      ]}
      breadcrumbs={[{ name: "Home", path: "/" }]}
    />

    {/* Section 1: Hero */}
    <HeroSection />

    {/* Section 2: Selected Work (Apps shipped with intent) */}
    <AppsSection />

    {/* Section 3: Latest Articles */}
    <ArticlesSection />

    {/* Section 4: Call to Action (Ready to ship something great together?) */}
    <ReadyToShipSection />
  </>
);

export default Home;
