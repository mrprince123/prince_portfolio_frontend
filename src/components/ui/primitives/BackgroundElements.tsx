export const BackgroundElements = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none select-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* 1. Crisp Engineering Dot Grid (Clearly Visible in Light & Dark Mode) */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(147,51,234,0.14)_1.5px,transparent_1.5px)] dark:bg-[radial-gradient(rgba(192,132,252,0.20)_1.5px,transparent_1.5px)] [background-size:32px_32px]" />

      {/* 2. Concentric Geometric Orbital Rings (Blueprint Depth in Hero) */}
      <div className="absolute left-1/2 top-[-80px] -translate-x-1/2 flex items-center justify-center">
        {/* Outer subtle orbital ring */}
        <div className="h-[950px] w-[950px] sm:h-[1100px] sm:w-[1100px] rounded-full border border-dashed border-purple-500/20 dark:border-purple-400/25 animate-[spin_240s_linear_infinite]" />
        {/* Middle continuous ring */}
        <div className="absolute h-[680px] w-[680px] sm:h-[780px] sm:w-[780px] rounded-full border border-purple-500/25 dark:border-purple-400/30" />
        {/* Inner warm amber dashed accent ring */}
        <div className="absolute h-[420px] w-[420px] sm:h-[500px] sm:w-[500px] rounded-full border border-dashed border-amber-500/25 dark:border-amber-400/30" />
      </div>

      {/* 3. Vibrant Atmospheric Aurora Flares (Purple & Gold Glows) */}
      {/* Upper-left Violet/Purple Flare */}
      <div className="absolute -top-32 left-1/2 -translate-x-[75%] h-[580px] w-[800px] rounded-full bg-gradient-to-tr from-purple-600/25 to-indigo-600/20 dark:from-purple-500/30 dark:to-indigo-500/25 blur-[120px]" />

      {/* Upper-right Warm Amber Gold Flare */}
      <div className="absolute top-10 right-[-10%] h-[450px] w-[550px] rounded-full bg-gradient-to-bl from-amber-500/20 to-yellow-500/15 dark:from-amber-400/25 dark:to-yellow-400/20 blur-[130px]" />

      {/* Mid-page Soft Purple Bloom */}
      <div className="absolute top-[800px] left-[-15%] h-[650px] w-[650px] rounded-full bg-purple-700/15 dark:bg-purple-600/22 blur-[140px]" />

      {/* Lower Section Purple & Gold Ambient */}
      <div className="absolute bottom-[-80px] right-[-8%] h-[550px] w-[750px] rounded-full bg-gradient-to-r from-purple-600/20 to-amber-500/15 dark:from-purple-600/25 dark:to-amber-500/20 blur-[130px]" />

      {/* 4. Architectural Crosshairs (+) with Tech Coordinates */}
      <div className="absolute left-6 sm:left-12 top-28 font-mono text-xs font-semibold text-purple-600/40 dark:text-purple-400/50 flex items-center gap-1.5">
        <span>+</span>
        <span className="text-[10px] tracking-wider text-muted-foreground/60 hidden sm:inline">01.SYS</span>
      </div>
      <div className="absolute right-6 sm:right-14 top-40 font-mono text-xs font-semibold text-amber-500/50 dark:text-amber-400/60 flex items-center gap-1.5">
        <span>+</span>
        <span className="text-[10px] tracking-wider text-muted-foreground/60 hidden sm:inline">02.DEV</span>
      </div>
      <div className="hidden md:flex absolute left-8 lg:left-16 top-[780px] font-mono text-xs font-semibold text-purple-600/40 dark:text-purple-400/50 items-center gap-1.5">
        <span>+</span>
        <span className="text-[10px] tracking-wider text-muted-foreground/60">03.ARCH</span>
      </div>
      <div className="hidden md:flex absolute right-8 lg:right-16 top-[1320px] font-mono text-xs font-semibold text-amber-500/50 dark:text-amber-400/60 items-center gap-1.5">
        <span>+</span>
        <span className="text-[10px] tracking-wider text-muted-foreground/60">04.DATA</span>
      </div>
      <div className="absolute left-6 sm:left-14 bottom-32 font-mono text-xs font-semibold text-purple-600/40 dark:text-purple-400/50 flex items-center gap-1.5">
        <span>+</span>
        <span className="text-[10px] tracking-wider text-muted-foreground/60 hidden sm:inline">05.PROD</span>
      </div>
      <div className="absolute right-6 sm:right-14 bottom-24 font-mono text-xs font-semibold text-purple-600/40 dark:text-purple-400/50 flex items-center gap-1.5">
        <span>+</span>
        <span className="text-[10px] tracking-wider text-muted-foreground/60 hidden sm:inline">06.LIVE</span>
      </div>

      {/* 5. Precision Corner Brackets on Screen Edges */}
      <div className="absolute left-4 top-24 font-mono text-sm text-purple-500/30 dark:text-purple-400/40 select-none">
        ┌
      </div>
      <div className="absolute right-4 top-24 font-mono text-sm text-purple-500/30 dark:text-purple-400/40 select-none">
        ┐
      </div>
      <div className="absolute left-4 bottom-6 font-mono text-sm text-purple-500/30 dark:text-purple-400/40 select-none">
        └
      </div>
      <div className="absolute right-4 bottom-6 font-mono text-sm text-purple-500/30 dark:text-purple-400/40 select-none">
        ┘
      </div>
    </div>
  );
};

export default BackgroundElements;
