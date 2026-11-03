interface AuroraProps {
  className?: string;
}

/** Soft animated aurora glow used as ambient section backdrop. */
export function Aurora({ className = "" }: AuroraProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute left-1/4 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-secondary/20 blur-[140px] animate-aurora-slow" />
      <div className="absolute right-0 top-1/3 h-[34rem] w-[34rem] translate-x-1/3 rounded-full bg-primary/15 blur-[130px] animate-aurora-slow [animation-delay:-6s]" />
      <div className="absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-[120px] animate-aurora-slow [animation-delay:-12s]" />
    </div>
  );
}
