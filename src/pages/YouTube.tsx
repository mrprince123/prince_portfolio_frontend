import { useState } from "react";
import { Seo } from "@/components/seo";
import { youtubeVideos, personalInfo } from "@/data/portfolioData";
import { Youtube, Play, ExternalLink, Eye, ThumbsUp, Clock, Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export const YouTube = () => {
  const [selectedVideo, setSelectedVideo] = useState<(typeof youtubeVideos)[0] | null>(null);

  return (
    <>
      <Seo
        title="YouTube | Prince Kumar Sahni - System Design & Engineering Tutorials"
        description="Watch in-depth software engineering, microservices, Docker CI/CD, and full-stack tutorials by Prince Kumar Sahni."
        url="https://princesahni.com/youtube"
      />

      <section className="container mx-auto px-4 sm:px-6 py-16 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 font-mono text-xs text-purple-300 mb-2">
              <Youtube className="h-3.5 w-3.5 text-red-500" />
              <span>YOUTUBE CHANNEL · @PrinceSinghCSE</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
              Engineering <span className="text-purple-gradient">Tutorials & Videos</span>
            </h1>
            <p className="mt-2 font-mono text-xs text-muted-foreground max-w-xl">
              Practical guides on microservices architecture, Docker, AWS deployments, and scalable full-stack development.
            </p>
          </div>

          <a
            href="https://www.youtube.com/@PrinceSinghCSE"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-2.5 font-mono text-xs font-semibold text-white shadow-lg shadow-red-600/25 hover:bg-red-500 transition-all hover:scale-[1.02] shrink-0"
          >
            <Youtube className="h-4 w-4" />
            <span>Subscribe on YouTube</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Channel Stat Highlights */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-2xl border border-border bg-card/60 p-4">
            <span className="font-display text-2xl font-black text-red-500">65K+</span>
            <p className="font-mono text-xs text-foreground mt-0.5">Total Video Views</p>
            <span className="text-[10px] text-muted-foreground">Across engineering series</span>
          </div>
          <div className="rounded-2xl border border-border bg-card/60 p-4">
            <span className="font-display text-2xl font-black text-purple-400">4+ Series</span>
            <p className="font-mono text-xs text-foreground mt-0.5">Curated Playlists</p>
            <span className="text-[10px] text-muted-foreground">Full-Stack, DevOps & Microservices</span>
          </div>
          <div className="rounded-2xl border border-border bg-card/60 p-4">
            <span className="font-display text-2xl font-black text-purple-400">100% Free</span>
            <p className="font-mono text-xs text-foreground mt-0.5">Open Access</p>
            <span className="text-[10px] text-muted-foreground">Knowledge shared with the community</span>
          </div>
          <div className="rounded-2xl border border-border bg-card/60 p-4">
            <span className="font-display text-2xl font-black text-purple-400">4K HD</span>
            <p className="font-mono text-xs text-foreground mt-0.5">Production Quality</p>
            <span className="text-[10px] text-muted-foreground">Clean code walkthroughs</span>
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {youtubeVideos.map((video) => (
            <div
              key={video.id}
              className="group rounded-2xl border border-purple-500/20 bg-card/80 overflow-hidden backdrop-blur-xl hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail Container */}
                <div
                  className="relative aspect-video w-full overflow-hidden bg-black cursor-pointer"
                  onClick={() => setSelectedVideo(video)}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600/90 text-white shadow-xl group-hover:scale-110 group-hover:bg-red-500 transition-all">
                      <Play className="h-6 w-6 fill-current ml-1" />
                    </div>
                  </div>

                  {/* Badges on Thumbnail */}
                  <span className="absolute bottom-3 right-3 rounded-md bg-black/80 px-2 py-0.5 font-mono text-[10px] text-white backdrop-blur-md">
                    {video.duration}
                  </span>
                  <span className="absolute top-3 left-3 rounded-md bg-purple-500/30 border border-purple-500/40 px-2 py-0.5 font-mono text-[10px] text-purple-200 backdrop-blur-md">
                    {video.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-foreground group-hover:text-purple-300 transition-colors">
                    {video.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </div>

              {/* Footer Meta & Action */}
              <div className="px-5 pb-5 pt-2 border-t border-border flex items-center justify-between text-xs font-mono text-muted-foreground">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Eye className="h-3.5 w-3.5 text-purple-400" /> {video.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <ThumbsUp className="h-3.5 w-3.5 text-purple-400" /> {video.likes}
                  </span>
                </div>

                <a
                  href={video.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 font-medium"
                >
                  Watch <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Details Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-2xl border-purple-500/30 bg-card/95 backdrop-blur-2xl">
          {selectedVideo && (
            <div>
              <DialogHeader>
                <DialogTitle className="font-display text-xl font-bold text-foreground">
                  {selectedVideo.title}
                </DialogTitle>
              </DialogHeader>
              <div className="mt-4 aspect-video w-full rounded-xl overflow-hidden bg-black flex items-center justify-center relative">
                <img
                  src={selectedVideo.thumbnail}
                  alt={selectedVideo.title}
                  className="h-full w-full object-cover opacity-60"
                />
                <div className="absolute text-center p-6">
                  <p className="text-sm font-mono text-white mb-4">Click below to watch this masterclass on YouTube:</p>
                  <a
                    href={selectedVideo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-2.5 font-mono text-xs font-semibold text-white shadow-lg hover:bg-red-500"
                  >
                    <Play className="h-4 w-4 fill-current" /> Open Video on YouTube
                  </a>
                </div>
              </div>
              <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
                {selectedVideo.description}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default YouTube;
