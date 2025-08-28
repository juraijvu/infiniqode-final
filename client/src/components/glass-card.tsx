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
        "glass-card rounded-xl transition-all duration-300",
        hover && "hover:scale-105 hover:shadow-2xl",
        className
      )}
    >
      {children}
    </div>
  );
}
