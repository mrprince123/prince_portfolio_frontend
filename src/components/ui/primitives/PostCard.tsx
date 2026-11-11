import { cn } from "@/lib/utils";
import { Tag } from "./Tag";
import { SmartLink } from "./SmartLink";
import { ArrowUpRight } from "lucide-react";

export interface PostCardProps {
  kind: string;
  readTime: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  image?: string;
}

export function PostCard({ kind, readTime, title, description, tags, href, image }: PostCardProps) {
  return (
    <SmartLink
      href={href}
      className={cn(
        "group flex flex-col justify-between rounded-2xl border border-purple-500/20 bg-card/75 p-6 backdrop-blur-xl no-underline transition-all duration-300",
        "hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-[0_15px_35px_-10px_rgba(168,85,247,0.3)] motion-reduce:transition-colors motion-reduce:hover:translate-y-0",
      )}
    >
      <div>
        {image && (
          <div className="aspect-video w-full overflow-hidden rounded-xl bg-muted mb-4">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}
        <div className="flex items-center justify-between font-mono text-xs">
          <span className="rounded-md border border-purple-500/30 bg-purple-500/10 px-2 py-0.5 text-purple-300 font-medium">
            {kind}
          </span>
          <span className="text-muted-foreground">{readTime}</span>
        </div>
        <h3 className="mt-3 font-display text-lg sm:text-xl font-bold text-foreground group-hover:text-purple-300 transition-colors flex items-center justify-between">
          <span>{title}</span>
          <ArrowUpRight className="h-4 w-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
        </h3>
        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {description}
        </p>
      </div>

      {tags.length > 0 && (
        <div className="mt-5 pt-3 border-t border-border flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-border bg-black/30 px-2 py-0.5 font-mono text-[11px] text-zinc-400 group-hover:border-purple-500/30 group-hover:text-purple-200 transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </SmartLink>
  );
}
