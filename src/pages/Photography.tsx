import { useState, useEffect } from "react";
import { Seo } from "@/components/seo";
import { photographyData } from "@/data/portfolioData";
import {
  Camera,
  MapPin,
  Eye,
  Aperture,
  Layers,
  Sparkles,
  Sliders,
  Instagram,
  Heart,
  MessageCircle,
  ExternalLink,
  Share2,
  Bookmark,
  CheckCircle2,
} from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  commentsCount: number;
  location: string;
  date: string;
  tags: string[];
  postUrl: string;
}

const DEFAULT_INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "ig-1",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1080&q=80",
    caption: "Urban geometry & concrete shadows through Connaught Place arches. Shot on Nikon Z50 II with 50mm f/1.8 prime lens.",
    likes: 342,
    commentsCount: 24,
    location: "Connaught Place, New Delhi",
    date: "2 days ago",
    tags: ["#streetphotography", "#nikonz50ii", "#architecture", "#newdelhi"],
    postUrl: "https://www.instagram.com/_mrprince123_/",
  },
  {
    id: "ig-2",
    imageUrl: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1080&q=80",
    caption: "Night reflections in obsidian glass & vertical corporate towers. Cyber City nightscape under cool neon tones.",
    likes: 518,
    commentsCount: 39,
    location: "Cyber City, Gurugram",
    date: "5 days ago",
    tags: ["#nightphotography", "#cybercity", "#architecturelovers", "#nikoncreators"],
    postUrl: "https://www.instagram.com/_mrprince123_/",
  },
  {
    id: "ig-3",
    imageUrl: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=1080&q=80",
    caption: "Engineering workspace & mechanical soundscape. Where system architecture meets high-precision prime glass.",
    likes: 429,
    commentsCount: 31,
    location: "Home Studio, New Delhi",
    date: "1 week ago",
    tags: ["#desksetup", "#softwareengineer", "#developerlife", "#nikonz50ii"],
    postUrl: "https://www.instagram.com/_mrprince123_/",
  },
  {
    id: "ig-4",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1080&q=80",
    caption: "Golden hour horizon fading across village terraces. Warm dusk spectrum captured at f/5.6 aperture.",
    likes: 614,
    commentsCount: 47,
    location: "Dalsingsarai, Bihar",
    date: "2 weeks ago",
    tags: ["#goldenhour", "#landscape", "#ruralindia", "#naturephotography"],
    postUrl: "https://www.instagram.com/_mrprince123_/",
  },
  {
    id: "ig-5",
    imageUrl: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?w=1080&q=80",
    caption: "Monochrome alleyway shadows in Old Delhi. High-contrast street geometry with deep black textural separation.",
    likes: 388,
    commentsCount: 19,
    location: "Old Delhi, India",
    date: "3 weeks ago",
    tags: ["#bnwphotography", "#blackandwhite", "#streetgeometry", "#delhi"],
    postUrl: "https://www.instagram.com/_mrprince123_/",
  },
  {
    id: "ig-6",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1080&q=80",
    caption: "Minimalist architectural curves & skylight geometry. Modernist concrete lines against clear azure skies.",
    likes: 475,
    commentsCount: 33,
    location: "Lotus Temple Precinct, New Delhi",
    date: "1 month ago",
    tags: ["#minimalism", "#geometricarchitecture", "#lensculture", "#nikon"],
    postUrl: "https://www.instagram.com/_mrprince123_/",
  },
];

export const Photography = () => {
  const [activeView, setActiveView] = useState<"instagram" | "gallery">("instagram");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof photographyData.gallery)[0] | null>(null);
  const [selectedIgPost, setSelectedIgPost] = useState<InstagramPost | null>(null);
  const [instagramPosts, setInstagramPosts] = useState<InstagramPost[]>(DEFAULT_INSTAGRAM_POSTS);

  useEffect(() => {
    // Attempt to fetch fresh posts from backend if available
    fetch("/api/v1/platforms/instagram/feed")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && Array.isArray(data.posts) && data.posts.length > 0) {
          setInstagramPosts(data.posts);
        }
      })
      .catch(() => {
        // Fall back gracefully to DEFAULT_INSTAGRAM_POSTS
      });
  }, []);

  const filteredGallery =
    activeCategory === "All"
      ? photographyData.gallery
      : photographyData.gallery.filter((p) => p.category === activeCategory);

  return (
    <>
      <Seo
        title="Photography & Instagram Feed | Prince Kumar Sahni (@_mrprince123_)"
        description="Explore the photography portfolio and Instagram feed of Prince Kumar Sahni (@_mrprince123_). Shot with Nikon Z50 II, featuring street geometry, urban architecture, and quiet landscapes."
        url="https://princesahni.com/photography"
      />

      <section className="container mx-auto px-4 sm:px-6 py-12 max-w-7xl">
        {/* Instagram Profile Header Banner */}
        <div className="rounded-3xl border border-[#4361ee]/25 bg-gradient-to-r from-card via-card to-[#4361ee]/10 p-6 sm:p-8 backdrop-blur-xl shadow-xl relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] opacity-15 blur-3xl"
          />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              {/* Instagram Gradient Ring Avatar */}
              <div className="relative p-1 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-lg shrink-0">
                <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-card p-1 flex items-center justify-center">
                  <Camera className="h-8 w-8 text-[#4361ee]" />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    @_mrprince123_
                  </h2>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#4361ee]/15 text-[#4895ef] text-[10px] font-mono font-bold border border-[#4361ee]/30">
                    <CheckCircle2 className="h-3 w-3" />
                    Verified Creator
                  </span>
                </div>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground font-sans">
                  Prince Sahni · Visual storytelling with Nikon Z50 II & prime optics
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-4 font-mono text-xs text-muted-foreground">
                  <span>
                    <strong className="text-foreground">85+</strong> posts
                  </span>
                  <span>
                    <strong className="text-foreground">1.2K+</strong> followers
                  </span>
                  <span>
                    <strong className="text-foreground">600K+</strong> views on Google Maps
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://www.instagram.com/_mrprince123_/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] px-5 py-2.5 font-mono text-xs font-bold text-white shadow-lg hover:opacity-95 transition-all hover:scale-[1.02]"
              >
                <Instagram className="h-4 w-4" />
                <span>Follow on Instagram</span>
                <ExternalLink className="h-3 w-3" />
              </a>

              <a
                href="https://www.instagram.com/_mrprince123_/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card/80 px-4 py-2.5 font-mono text-xs text-muted-foreground hover:text-foreground hover:border-[#4361ee]/40 transition-colors"
              >
                <span>View Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-border">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveView("instagram")}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 font-mono text-xs transition-all ${
                activeView === "instagram"
                  ? "bg-[#4361ee] text-white font-bold shadow-md shadow-[#4361ee]/20"
                  : "border border-border bg-card/60 text-muted-foreground hover:text-foreground hover:border-[#4361ee]/30"
              }`}
            >
              <Instagram className="h-3.5 w-3.5" />
              <span>Instagram Posts (@_mrprince123_)</span>
              <span className="rounded-full bg-white/20 px-1.5 py-0.2 text-[10px]">
                {instagramPosts.length}
              </span>
            </button>

            <button
              onClick={() => setActiveView("gallery")}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 font-mono text-xs transition-all ${
                activeView === "gallery"
                  ? "bg-[#4361ee] text-white font-bold shadow-md shadow-[#4361ee]/20"
                  : "border border-border bg-card/60 text-muted-foreground hover:text-foreground hover:border-[#4361ee]/30"
              }`}
            >
              <Camera className="h-3.5 w-3.5" />
              <span>Curated Optics Exhibition</span>
            </button>
          </div>

          <div className="font-mono text-xs text-muted-foreground hidden sm:flex items-center gap-2">
            <Aperture className="h-3.5 w-3.5 text-[#4895ef]" />
            <span>Nikon Z50 II · NIKKOR Z 50mm f/1.8 S</span>
          </div>
        </div>

        {/* View 1: Instagram Posts Feed Grid */}
        {activeView === "instagram" && (
          <div className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {instagramPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => setSelectedIgPost(post)}
                  className="group cursor-pointer rounded-2xl border border-[#4361ee]/20 bg-card/75 overflow-hidden backdrop-blur-xl hover:border-[#4361ee]/50 hover:shadow-2xl hover:shadow-[#4361ee]/10 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Instagram Post Header */}
                  <div className="p-3.5 border-b border-border/60 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="p-0.5 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]">
                        <div className="h-7 w-7 rounded-full bg-card flex items-center justify-center">
                          <Camera className="h-3.5 w-3.5 text-[#4361ee]" />
                        </div>
                      </div>
                      <div>
                        <span className="font-display font-bold text-xs text-foreground block leading-tight">
                          _mrprince123_
                        </span>
                        <span className="font-mono text-[10px] text-muted-foreground flex items-center gap-1">
                          <MapPin className="h-2.5 w-2.5 text-[#4895ef]" />
                          {post.location}
                        </span>
                      </div>
                    </div>

                    <a
                      href={post.postUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-muted-foreground hover:text-[#4361ee] transition-colors p-1"
                      title="Open on Instagram"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                  </div>

                  {/* Post Image with Hover Overlay */}
                  <div className="relative aspect-square w-full overflow-hidden bg-black">
                    <img
                      src={post.imageUrl}
                      alt={post.caption}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Instagram Stats Hover Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 text-white font-mono text-sm font-bold">
                      <span className="flex items-center gap-1.5">
                        <Heart className="h-5 w-5 fill-red-500 text-red-500" />
                        {post.likes}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MessageCircle className="h-5 w-5 fill-white text-white" />
                        {post.commentsCount}
                      </span>
                    </div>
                  </div>

                  {/* Post Actions & Caption */}
                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between text-foreground">
                      <div className="flex items-center gap-3">
                        <Heart className="h-4 w-4 text-red-500 fill-red-500" />
                        <MessageCircle className="h-4 w-4 text-muted-foreground" />
                        <Share2 className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <Bookmark className="h-4 w-4 text-muted-foreground" />
                    </div>

                    <span className="font-mono text-[11px] font-bold text-foreground block">
                      {post.likes.toLocaleString()} likes
                    </span>

                    <p className="text-xs text-muted-foreground font-sans line-clamp-2 leading-relaxed">
                      <strong className="text-foreground font-mono mr-1">_mrprince123_</strong>
                      {post.caption}
                    </p>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="font-mono text-[10px] text-[#4895ef]">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span className="font-mono text-[9px] text-muted-foreground/80 uppercase block pt-1">
                      {post.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* View 2: High-Res Curated Gallery */}
        {activeView === "gallery" && (
          <div className="mt-8 space-y-8">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {photographyData.categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-1.5 font-mono text-xs transition-all ${
                    activeCategory === cat
                      ? "bg-[#4361ee] text-white font-medium shadow-md shadow-[#4361ee]/20"
                      : "border border-border bg-card/60 text-muted-foreground hover:border-[#4361ee]/30 hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
              <span className="ml-auto font-mono text-xs text-muted-foreground hidden sm:inline">
                Showing {filteredGallery.length} curated frames
              </span>
            </div>

            {/* Photography Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGallery.map((photo) => (
                <div
                  key={photo.id}
                  onClick={() => setSelectedPhoto(photo)}
                  className="group cursor-pointer rounded-2xl border border-[#4361ee]/20 bg-card/75 overflow-hidden backdrop-blur-xl hover:border-[#4361ee]/50 hover:shadow-2xl hover:shadow-[#4361ee]/10 transition-all duration-500 flex flex-col justify-between"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                    <img
                      src={photo.imageUrl}
                      alt={photo.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    <span className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-md bg-black/70 px-2 py-0.5 font-mono text-[10px] text-[#4895ef] backdrop-blur-md">
                      <MapPin className="h-3 w-3 text-[#4895ef]" /> {photo.location}
                    </span>

                    <span className="absolute top-3 right-3 rounded-md bg-black/70 px-2 py-0.5 font-mono text-[10px] text-zinc-300 backdrop-blur-md">
                      {photo.views}
                    </span>
                  </div>

                  <div className="p-4">
                    <h3 className="font-display text-base font-bold text-foreground group-hover:text-[#4895ef] transition-colors">
                      {photo.title}
                    </h3>
                    <p className="mt-1 font-mono text-[11px] text-[#4895ef] flex items-center gap-1">
                      <Aperture className="h-3 w-3" /> {photo.camera}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Instagram Post Detail Modal */}
      <Dialog open={!!selectedIgPost} onOpenChange={() => setSelectedIgPost(null)}>
        <DialogContent className="max-w-2xl border-border bg-card p-4 overflow-hidden text-foreground">
          {selectedIgPost && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-border">
                <div className="flex items-center gap-2">
                  <div className="p-0.5 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]">
                    <div className="h-6 w-6 rounded-full bg-card flex items-center justify-center">
                      <Camera className="h-3 w-3 text-[#4361ee]" />
                    </div>
                  </div>
                  <span className="font-display font-bold text-sm text-foreground">_mrprince123_</span>
                  <span className="text-muted-foreground text-xs">• {selectedIgPost.date}</span>
                </div>

                <a
                  href={selectedIgPost.postUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#4361ee] px-3 py-1 font-mono text-xs text-white hover:bg-[#3a56d4]"
                >
                  <Instagram className="h-3.5 w-3.5" />
                  <span>Open on Instagram</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              <div className="aspect-square w-full overflow-hidden rounded-xl bg-black">
                <img
                  src={selectedIgPost.imageUrl}
                  alt={selectedIgPost.caption}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="space-y-2 font-mono text-xs">
                <div className="flex items-center justify-between text-muted-foreground">
                  <span className="flex items-center gap-1 text-red-500 font-bold">
                    <Heart className="h-4 w-4 fill-red-500" /> {selectedIgPost.likes} likes
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-[#4895ef]" /> {selectedIgPost.location}
                  </span>
                </div>

                <p className="font-sans text-sm text-foreground leading-relaxed">
                  {selectedIgPost.caption}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {selectedIgPost.tags.map((tag) => (
                    <span key={tag} className="text-[#4895ef] text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* High-Res Photo Modal */}
      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-4xl border-border bg-card p-2 overflow-hidden text-foreground">
          {selectedPhoto && (
            <div>
              <div className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-black">
                <img
                  src={selectedPhoto.imageUrl}
                  alt={selectedPhoto.title}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
                <div>
                  <h4 className="font-display text-base font-bold text-foreground">
                    {selectedPhoto.title}
                  </h4>
                  <p className="text-muted-foreground flex items-center gap-1 mt-0.5">
                    <MapPin className="h-3 w-3 text-[#4895ef]" /> {selectedPhoto.location}
                  </p>
                </div>
                <div className="text-[#4895ef] sm:text-right">
                  <span className="block">{selectedPhoto.camera}</span>
                  <span className="text-[11px] text-muted-foreground">
                    {selectedPhoto.views} on Google Maps
                  </span>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Photography;
