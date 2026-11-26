import * as React from "react";

export interface SectionHeaderProps {
  index?: string;
  eyebrow?: string;
  eyebrowIcon?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  action?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  index,
  eyebrow,
  eyebrowIcon,
  title,
  highlight,
  subtitle,
  action,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";
  const displayEyebrow = eyebrow || (index ? `Section ${index}` : undefined);

  return (
    <div
      className={`mb-12 ${
        isCenter ? "text-center mx-auto max-w-3xl" : "text-left max-w-4xl"
      } ${className}`}
    >
      {/* Eyebrow Pill */}
      {displayEyebrow && (
        <div
          className={`inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 shadow-soft mb-4 ${
            isCenter ? "justify-center" : ""
          }`}
        >
          {eyebrowIcon ? (
            <span className="text-primary text-xs">{eyebrowIcon}</span>
          ) : (
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          )}
          <span className="text-xs font-bold tracking-[0.14em] uppercase text-primary">
            {displayEyebrow}
          </span>
        </div>
      )}

      {/* Main Heading & Action */}
      <div
        className={`flex flex-col sm:flex-row ${
          isCenter
            ? "items-center justify-center"
            : "items-start sm:items-baseline justify-between"
        } gap-4`}
      >
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
          {title}{" "}
          {highlight && <span className="display-gradient">{highlight}</span>}
        </h2>
        {action && (
          <div className="shrink-0 text-sm font-medium text-primary hover:underline">
            {action}
          </div>
        )}
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
