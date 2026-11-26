import { Seo } from "@/components/seo";
import HeroSection from "@/components/sections/HeroSection";
import AppsSection from "@/components/sections/AppsSection";
import ArticlesSection from "@/components/sections/ArticlesSection";
import ReadyToShipSection from "@/components/sections/ReadyToShipSection";

const Home = () => (
  <>
    <Seo
      title="Prince Kumar Sahni | Software Engineer"
      description="Portfolio of Prince Kumar Sahni — Software Engineer building scalable backend systems, enterprise e-commerce solutions, and pragmatic AI workflows."
      url="https://princesahni.com"
      image="https://princesahni.com/og-images/princesahni-logo.png"
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
