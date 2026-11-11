import * as React from "react";

import { cn } from "@/lib/utils";

export type ChipProps = React.HTMLAttributes<HTMLSpanElement>;

const Chip = React.forwardRef<HTMLSpanElement, ChipProps>(({ className, children, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "inline-flex items-center rounded-lg border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground transition-all hover:border-[#4361ee]/40 hover:text-[#4361ee] dark:hover:text-[#4895ef]",
      className,
    )}
    {...props}
  >
    {children}
  </span>
));
Chip.displayName = "Chip";

export { Chip };
