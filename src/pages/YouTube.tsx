import { useState, useMemo } from "react";
import { Seo } from "@/components/seo";
import { youtubeVideos as fallbackVideos } from "@/data/portfolioData";
import { useResource } from "@/hooks/useResource";
import { Youtube as YoutubeIcon, Play, ExternalLink, Video, Sparkles, Filter, CheckCircle2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface VideoItem {
  id?: string;
  _id?: string;
  name?: string;
  title?: string;
  description: string;
  thumbnail: string;
  link?: string;
  url?: string;
  channel?: string;
  channelUrl?: string;
  category?: string;
  duration?: string;
  views?: string;
  likes?: string;
}

export const YouTube = () => {
  const [activeChannel, setActiveChannel] = useState<string>("all");
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  // Dynamic fetch from backend MongoDB API with fallback
  const { data: apiData, isLoading } = useResource<{ data: VideoItem[] } | VideoItem[]>(
    ["youtubes", activeChannel],
    activeChannel === "all" ? "/api/youtube/get?limit=50" : `/api/youtube/get?limit=50&channel=${encodeURIComponent(activeChannel)}`,
    { fallback: fallbackVideos as VideoItem[] }
  );

  // Normalize API or fallback response
  const videos: VideoItem[] = useMemo(() => {
    let list: VideoItem[] = [];
    if (Array.isArray(apiData)) {
      list = apiData;
    } else if (apiData && Array.isArray((apiData as any).data)) {
      list = (apiData as any).data;
    } else {
      list = fallbackVideos as VideoItem[];
    }

    if (activeChannel === "all") return list;
    return list.filter((v) =>
      (v.channel || "").toLowerCase().includes(activeChannel.toLowerCase())
    );
  }, [apiData, activeChannel]);

  return (
    <>
      <Seo
        title="YouTube Channels | Prince Kumar Sahni - @PrinceUnframed & @mr.codesigner"
        description="Official YouTube video directory of Prince Kumar Sahni covering cinematography, camera lighting, Nikon Z50 II tutorials on @PrinceUnframed and full-stack system design on @mr.codesigner."
        url="https://princesahni.com/youtube"
      />

      <section className="container mx-auto px-4 sm:px-6 py-12 max-w-7xl space-y-10">
        {/* Header Strip */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#4361ee]/30 bg-[#4361ee]/10 px-3.5 py-1 font-mono text-xs text-[#4895ef] mb-3">
              <YoutubeIcon className="h-4 w-4 text-red-500" />
              <span>OFFICIAL CHANNELS · DUAL CREATOR HUB</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-black text-foreground tracking-tight">
              YouTube <span className="text-theme-gradient">Channels &amp; Videos</span>
            </h1>
            <p className="mt-2 font-mono text-xs text-muted-foreground max-w-2xl leading-relaxed">
              Live database feed of all engineering walkthroughs, system design architectures, and cinematic photography tutorials across both official channels.
            </p>
          </div>

          {/* Quick Subscribe Links */}
          <div className="flex flex-wrap items-center gap-3 shrink-0 font-mono text-xs">
            <a
              href="https://www.youtube.com/@PrinceUnframed"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-red-600/90 hover:bg-red-600 px-4 py-2.5 font-semibold text-white shadow-lg shadow-red-600/20 transition-all hover:scale-[1.02]"
            >
              <YoutubeIcon className="h-4 w-4" />
              <span>@PrinceUnframed</span>
              <ExternalLink className="h-3 w-3" />
            </a>

            <a
              href="https://www.youtube.com/@mr.codesigner"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#4361ee] hover:bg-[#3a56d4] px-4 py-2.5 font-semibold text-white shadow-lg shadow-[#4361ee]/25 transition-all hover:scale-[1.02]"
            >
              <YoutubeIcon className="h-4 w-4" />
              <span>@mr.codesigner</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Channel Cards Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 font-mono text-xs">
          {/* Channel 1 */}
          <div className="rounded-2xl border border-border bg-card p-5 space-y-3 relative overflow-hidden">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] text-muted-foreground/80 uppercase tracking-widest block font-bold">
                  CHANNEL 01
                </span>
                <h3 className="font-display text-xl font-bold text-foreground mt-0.5">Prince Unframed</h3>
                <span className="text-[#4895ef] text-[11px]">@PrinceUnframed</span>
              </div>
              <span className="rounded-full bg-red-500/15 border border-red-500/30 px-2.5 py-0.5 text-[10px] text-red-400 font-bold">
                Cinematography &amp; Gear
              </span>
            </div>
            <p className="text-muted-foreground font-sans text-xs leading-relaxed">
              Hands-on tutorials for mirrorless cameras, Nikon Z50 II, studio 3-point lighting setup (key, fill, back light), and visual storytelling fundamentals.
            </p>
            <div className="pt-2 flex items-center justify-between border-t border-border text-[11px] text-muted-foreground/80">
              <span>Nikon Z50 II · 4K 60p</span>
              <a
                href="https://www.youtube.com/@PrinceUnframed"
                target="_blank"
                rel="noreferrer"
                className="text-[#4895ef] hover:underline flex items-center gap-1"
              >
                <span>Visit Channel</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Channel 2 */}
          <div className="rounded-2xl border border-border bg-card p-5 space-y-3 relative overflow-hidden">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] text-muted-foreground/80 uppercase tracking-widest block font-bold">
                  CHANNEL 02
                </span>
                <h3 className="font-display text-xl font-bold text-foreground mt-0.5">Mr. CoDesigner</h3>
                <span className="text-[#4895ef] text-[11px]">@mr.codesigner</span>
              </div>
              <span className="rounded-full bg-[#4361ee]/20 border border-[#4361ee]/40 px-2.5 py-0.5 text-[10px] text-[#4895ef] font-bold">
                Coding &amp; System Design
              </span>
            </div>
            <p className="text-muted-foreground font-sans text-xs leading-relaxed">
              MERN stack architectural reviews, Android Studio &amp; Arduino Bluetooth applications, Heroku cloud alternatives, DSA books, and ChatGPT live demos.
            </p>
            <div className="pt-2 flex items-center justify-between border-t border-border text-[11px] text-muted-foreground/80">
              <span>Full-Stack · Cloud · Android</span>
              <a
                href="https://www.youtube.com/@mr.codesigner"
                target="_blank"
                rel="noreferrer"
                className="text-[#4895ef] hover:underline flex items-center gap-1"
              >
                <span>Visit Channel</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Channel Filter Tabs */}
        <div className="flex items-center gap-2 border-b border-border pb-4 overflow-x-auto no-scrollbar font-mono text-xs">
          <button
            onClick={() => setActiveChannel("all")}
            className={`px-4 py-2 rounded-xl transition-all ${
              activeChannel === "all"
                ? "bg-[#4361ee] text-white font-bold shadow-md shadow-[#4361ee]/30"
                : "text-muted-foreground hover:text-white hover:bg-muted"
            }`}
          >
            All Videos ({videos.length})
          </button>

          <button
            onClick={() => setActiveChannel("Prince Unframed")}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
              activeChannel === "Prince Unframed"
                ? "bg-[#4361ee] text-white font-bold shadow-md shadow-[#4361ee]/30"
                : "text-muted-foreground hover:text-white hover:bg-muted"
            }`}
          >
            <span>@PrinceUnframed</span>
          </button>

          <button
            onClick={() => setActiveChannel("Mr. CoDesigner")}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
              activeChannel === "Mr. CoDesigner"
                ? "bg-[#4361ee] text-white font-bold shadow-md shadow-[#4361ee]/30"
                : "text-muted-foreground hover:text-white hover:bg-muted"
            }`}
          >
            <span>@mr.codesigner</span>
          </button>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, idx) => {
            const videoTitle = video.name || video.title || "Untitled Video";
            const videoUrl = video.link || video.url || "https://www.youtube.com";
            const isUnframed = (video.channel || "").toLowerCase().includes("unframed");

            return (
              <div
                key={video.id || video._id || idx}
                className="group rounded-2xl border border-border bg-card border-border overflow-hidden hover:border-[#4361ee]/50 hover:shadow-xl hover:shadow-[#4361ee]/10 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Thumbnail with hover play overlay */}
                  <div
                    onClick={() => setSelectedVideo(video)}
                    className="relative aspect-video w-full overflow-hidden bg-black cursor-pointer"
                  >
                    <img
                      src={video.thumbnail}
                      alt={videoTitle}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Channel Pill Badge */}
                    <div className="absolute top-2.5 left-2.5 z-10">
                      <span
                        className={`rounded-full px-2 py-0.5 text-[9px] font-mono font-bold border ${
                          isUnframed
                            ? "bg-red-500/20 text-red-300 border-red-500/30"
                            : "bg-[#4361ee]/25 text-[#4895ef] border-[#4361ee]/40"
                        }`}
                      >
                        {video.channel || (isUnframed ? "@PrinceUnframed" : "@mr.codesigner")}
                      </span>
                    </div>

                    {video.category && (
                      <div className="absolute top-2.5 right-2.5 z-10">
                        <span className="rounded-full bg-black/70 backdrop-blur-md px-2 py-0.5 text-[9px] font-mono text-muted-foreground border border-border">
                          {video.category}
                        </span>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="h-12 w-12 rounded-full bg-[#4361ee] text-white flex items-center justify-center shadow-lg shadow-[#4361ee]/50 group-hover:scale-110 transition-transform">
                        <Play className="h-5 w-5 fill-current ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 space-y-2">
                    <h3
                      onClick={() => setSelectedVideo(video)}
                      className="font-display text-sm font-bold text-foreground line-clamp-2 cursor-pointer hover:text-[#4361ee] dark:hover:text-[#4895ef] transition-colors"
                    >
                      {videoTitle}
                    </h3>
                    <p className="font-sans text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-4 pt-0 border-t border-border mt-3 flex items-center justify-between font-mono text-[11px] text-muted-foreground">
                  <span className="text-muted-foreground/80">{video.duration || "Full Video"}</span>

                  <a
                    href={videoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[#4361ee] dark:text-[#4895ef] hover:underline"
                  >
                    <span>Watch</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Video Modal Player */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-3xl bg-card border-border text-foreground p-6">
          <DialogHeader>
            <DialogTitle className="font-display text-lg font-bold text-foreground">
              {selectedVideo?.name || selectedVideo?.title}
            </DialogTitle>
          </DialogHeader>

          {selectedVideo && (
            <div className="space-y-4 pt-2">
              <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black border border-border">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${
                    (selectedVideo.link || selectedVideo.url || "").split("v=")[1] ||
                    (selectedVideo.link || selectedVideo.url || "").split("/").pop()
                  }?autoplay=1`}
                  title={selectedVideo.name || selectedVideo.title}
                  className="h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="font-mono text-xs flex items-center justify-between text-muted-foreground">
                <span className="text-[#4895ef] font-semibold">{selectedVideo.channel}</span>

                <a
                  href={selectedVideo.link || selectedVideo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#4361ee] px-3 py-1.5 font-bold text-white hover:bg-[#3a56d4] transition-colors"
                >
                  <span>Open on YouTube</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default YouTube;
