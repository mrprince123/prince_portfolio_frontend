import { useState } from "react";
import { Seo } from "@/components/seo";
import { photographyData } from "@/data/portfolioData";
import { Camera, MapPin, Eye, Aperture, Layers, Sparkles, Sliders } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export const Photography = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof photographyData.gallery)[0] | null>(null);

  const filtered = activeCategory === "All"
    ? photographyData.gallery
    : photographyData.gallery.filter((p) => p.category === activeCategory);

  return (
    <>
      <Seo
        title="Photography | Prince Kumar Sahni - 600K+ Views on Google Maps"
        description="Explore the photography portfolio of Prince Kumar Sahni. Shot with Nikon Z50 II, featuring street, architectural, and landscape photography with 600K+ views."
        url="https://princesahni.com/photography"
      />

      <section className="container mx-auto px-4 sm:px-6 py-16 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#4361ee]/30 bg-[#4361ee]/10 px-3 py-1 font-mono text-xs text-[#4895ef] mb-2">
              <Camera className="h-3.5 w-3.5 text-[#4895ef]" />
              <span>VISUAL CRAFT · 600K+ PHOTO VIEWS</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
              Through the <span className="text-purple-gradient">Lens</span>
            </h1>
            <p className="mt-2 font-mono text-xs text-muted-foreground max-w-xl">
              Exploring urban architecture, street geometry, and quiet landscapes through high-precision mirrorless optics.
            </p>
          </div>

          <div className="rounded-2xl border border-[#4361ee]/20 bg-black/40 p-3.5 font-mono text-xs text-muted-foreground">
            <span className="text-[#4895ef] font-semibold block">Primary Rig:</span>
            <span className="text-zinc-200">{photographyData.stats.camera}</span>
          </div>
        </div>

        {/* Gear & Stats Strip */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-2xl border border-border bg-card/60 p-4">
            <span className="font-display text-2xl font-black text-[#4895ef]">{photographyData.stats.views}</span>
            <p className="font-mono text-xs text-foreground mt-0.5">Google Maps Views</p>
            <span className="text-[10px] text-muted-foreground">Community verified</span>
          </div>
          <div className="rounded-2xl border border-border bg-card/60 p-4">
            <span className="font-display text-2xl font-black text-[#4895ef]">{photographyData.stats.level}</span>
            <p className="font-mono text-xs text-foreground mt-0.5">Contributor Status</p>
            <span className="text-[10px] text-muted-foreground">Top tier local guide</span>
          </div>
          <div className="rounded-2xl border border-border bg-card/60 p-4">
            <span className="font-display text-2xl font-black text-[#4895ef]">150+</span>
            <p className="font-mono text-xs text-foreground mt-0.5">Published Frames</p>
            <span className="text-[10px] text-muted-foreground">Architectural & Street</span>
          </div>
          <div className="rounded-2xl border border-border bg-card/60 p-4">
            <span className="font-display text-2xl font-black text-[#4895ef]">f/1.8 Prime</span>
            <p className="font-mono text-xs text-foreground mt-0.5">Fast Glass Optics</p>
            <span className="text-[10px] text-muted-foreground">NIKKOR Z 50mm S</span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {photographyData.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-1.5 font-mono text-xs transition-all ${
                activeCategory === cat
                  ? "bg-[#4361ee] text-white font-medium shadow-md shadow-purple-600/20"
                  : "border border-border bg-card/60 text-muted-foreground hover:border-[#4361ee]/30 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto font-mono text-xs text-muted-foreground hidden sm:inline">
            Showing {filtered.length} curated frames
          </span>
        </div>

        {/* Photography Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((photo) => (
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
      </section>

      {/* Full-view Modal */}
      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-4xl border-[#4361ee]/30 bg-black/95 p-2 overflow-hidden">
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
                  <h4 className="font-display text-base font-bold text-white">{selectedPhoto.title}</h4>
                  <p className="text-zinc-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="h-3 w-3 text-[#4895ef]" /> {selectedPhoto.location}
                  </p>
                </div>
                <div className="text-[#4895ef] sm:text-right">
                  <span className="block">{selectedPhoto.camera}</span>
                  <span className="text-[11px] text-zinc-500">{selectedPhoto.views} on Google Maps</span>
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
