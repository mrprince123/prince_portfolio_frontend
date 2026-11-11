import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-mono text-[13px] px-4 py-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "rounded-xl bg-[#4361ee] text-white font-semibold shadow-lg shadow-[#4361ee]/25 hover:bg-[#3a56d4] hover:shadow-[#4361ee]/40",
        purple:
          "rounded-xl bg-gradient-to-r from-[#4361ee] to-[#3a56d4] text-white font-semibold shadow-lg shadow-[#4361ee]/30 hover:from-[#3a56d4] hover:to-[#4361ee]",
        link: "rounded-none border-b-2 border-[#4361ee] px-0 py-0.5 text-[#4361ee] dark:text-[#4895ef] hover:opacity-80",
        ghost:
          "rounded-xl border border-[#4361ee]/30 bg-[#4361ee]/10 text-[#4361ee] dark:text-[#4895ef] hover:bg-[#4361ee]/20",
        outline:
          "rounded-xl border border-border bg-card/60 text-foreground hover:border-[#4361ee]/40 hover:text-[#4361ee] dark:hover:text-[#4895ef]",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

type ConflictingMotionProps =
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onAnimationIteration";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, ConflictingMotionProps>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, children, ...props }, ref) => {
    const prefersReducedMotion = useReducedMotion();

    if (asChild) {
      return (
        <Slot className={cn(buttonVariants({ variant, className }))} ref={ref} {...props}>
          {children}
        </Slot>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={cn(buttonVariants({ variant, className }))}
        whileHover={prefersReducedMotion ? undefined : { y: -2 }}
        whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
