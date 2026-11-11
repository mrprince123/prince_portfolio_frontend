import { Seo } from "@/components/seo";
import DashboardHeroSection from "@/components/sections/DashboardHeroSection";
import { TrustSection } from "@/components/sections/TrustSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import { ResumeAnalyserSection } from "@/components/sections/ResumeAnalyserSection";
import SkillsSection from "@/components/sections/SkillsSection";

export const Dashboard = () => {
  return (
    <>
      <Seo
        title="Dashboard Cockpit | Prince Kumar Sahni - AI Lab & Production Systems"
        description="High-density engineering cockpit of Prince Kumar Sahni. Explore live AI products, microservices systems, DSA highlights, and architecture telemetry."
        url="https://princesahni.com/dashboard"
      />

      <div className="space-y-6">
        {/* Cockpit Dashboard Hero with streak pill, greeting, constellation card, metric cards, product lines */}
        <DashboardHeroSection />

        {/* Telemetry and Production Trust */}
        <TrustSection />

        {/* System Cards with Technical Architecture Modal Dialogs */}
        <ProjectsSection />

        {/* 2026 Hiring Demand Scoring Benchmark */}
        <ResumeAnalyserSection />

        {/* Production Systems Timeline */}
        <ExperienceSection />
      </div>
    </>
  );
};

export default Dashboard;
