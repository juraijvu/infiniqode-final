import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl p-6 backdrop-blur-xl",
        "bg-gradient-to-br from-white/10 to-white/5",
        "border border-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20",
        "shadow-[0_8px_32px_rgba(0,0,0,0.3)] shadow-xl",
        "transform-gpu transition-all duration-300",
        hover && "hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] hover:scale-[1.02] hover:from-white/15 hover:to-white/8",
        className
      )}
      style={{
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
      }}
    >
      {children}
    </div>
  );
}
