import { Seo } from "@/components/seo";
import { socialMediaOverviewData, personalInfo } from "@/data/portfolioData";
import { Share2, ExternalLink, Sparkles, CheckCircle2, MessageSquare, ArrowRight } from "lucide-react";

export const SocialOverview = () => {
  return (
    <>
      <Seo
        title="Social Media Overview | Prince Kumar Sahni"
        description="Connect with Prince Kumar Sahni across GitHub, LinkedIn, YouTube, Medium, Twitter, and Google Maps."
        url="https://princesahni.com/social"
      />

      <section className="container mx-auto px-4 sm:px-6 py-16 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#4361ee]/30 bg-[#4361ee]/10 px-3 py-1 font-mono text-xs text-[#4895ef] mb-2">
              <Share2 className="h-3.5 w-3.5 text-[#4895ef]" />
              <span>DIGITAL FOOTPRINT & CHANNELS</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
              Social Media <span className="text-purple-gradient">Overview</span>
            </h1>
            <p className="mt-2 font-mono text-xs text-muted-foreground max-w-xl">
              Where I publish technical deep dives, open source systems, visual stories, and engineering thought leadership.
            </p>
          </div>

          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 rounded-xl bg-[#4361ee] px-5 py-2.5 font-mono text-xs font-semibold text-white shadow-lg shadow-[#4361ee]/25 hover:bg-[#4361ee] transition-all hover:scale-[1.02] shrink-0"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Direct Email Transmission</span>
          </a>
        </div>

        {/* Global Impact Grid */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs">
          <div className="rounded-2xl border border-border bg-card/60 p-4">
            <span className="font-display text-2xl font-black text-[#4895ef]">600K+</span>
            <p className="font-semibold text-foreground mt-0.5">Google Maps Views</p>
            <span className="text-[10px] text-muted-foreground">Local Guide Level 7</span>
          </div>
          <div className="rounded-2xl border border-border bg-card/60 p-4">
            <span className="font-display text-2xl font-black text-[#4895ef]">78</span>
            <p className="font-semibold text-foreground mt-0.5">GitHub Repositories</p>
            <span className="text-[10px] text-muted-foreground">Open source codebases</span>
          </div>
          <div className="rounded-2xl border border-border bg-card/60 p-4">
            <span className="font-display text-2xl font-black text-[#4895ef]">2,500+</span>
            <p className="font-semibold text-foreground mt-0.5">LinkedIn Connections</p>
            <span className="text-[10px] text-muted-foreground">Industry network</span>
          </div>
          <div className="rounded-2xl border border-border bg-card/60 p-4">
            <span className="font-display text-2xl font-black text-[#4895ef]">15+</span>
            <p className="font-semibold text-foreground mt-0.5">Medium Publications</p>
            <span className="text-[10px] text-muted-foreground">Technical articles</span>
          </div>
        </div>

        {/* Social Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialMediaOverviewData.map((channel) => (
            <a
              key={channel.platform}
              href={channel.url}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-[#4361ee]/20 bg-card/80 p-6 backdrop-blur-xl hover:border-[#4361ee]/50 hover:shadow-xl hover:shadow-[#4361ee]/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-border">
                  <div className="flex items-center gap-2">
                    <span
                      className="h-3 w-3 rounded-full shrink-0"
                      style={{ backgroundColor: channel.color }}
                    />
                    <h3 className="font-display text-lg font-bold text-foreground group-hover:text-[#4895ef] transition-colors">
                      {channel.platform}
                    </h3>
                  </div>
                  <ExternalLink className="h-4 w-4 text-[#4895ef] opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>

                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  {channel.role}
                </p>

                <div className="mt-4 rounded-xl border border-border bg-black/40 p-3 flex items-center justify-between font-mono text-xs">
                  <span className="text-muted-foreground text-[11px]">{channel.metric}</span>
                  <span className="text-[#4895ef] font-bold">{channel.value}</span>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-border flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-500">@{channel.handle}</span>
                <span className="text-[#4895ef] group-hover:underline flex items-center gap-1 font-medium">
                  Connect <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default SocialOverview;
