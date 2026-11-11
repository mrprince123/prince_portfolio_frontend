import { Seo } from "@/components/seo";
import HeroSection from "@/components/sections/HeroSection";
import { TrustSection } from "@/components/sections/TrustSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import { ResumeAnalyserSection } from "@/components/sections/ResumeAnalyserSection";
import SkillsSection from "@/components/sections/SkillsSection";
import WritingSection from "@/components/sections/WritingSection";
import AboutSection from "@/components/sections/AboutSection";
import CtaSection from "@/components/sections/CtaSection";

const Home = () => (
  <>
    <Seo
      title="Prince Kumar Sahni | Software Engineer | Microservices & Cloud Systems"
      description="Software Engineer at Webkul Software architecting microservices, cloud systems, and high-performance full-stack web applications serving 100k+ users."
      url="https://princesahni.com"
      image="https://princesahni.com/og-images/princesahni-logo.png"
    />

    <HeroSection />
    <TrustSection />
    <ProjectsSection />
    <ExperienceSection />
    <ResumeAnalyserSection />
    <SkillsSection />
    <WritingSection />
    <AboutSection />
    <CtaSection />
  </>
);

export default Home;
