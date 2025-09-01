import { cn } from "@/lib/utils";
import { MovingBorderCard } from "@/components/ui/moving-border";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = false }: GlassCardProps) {
  return (
    <MovingBorderCard
      className={cn("p-6", className)}
      containerClassName="rounded-xl"
      borderRadius="0.75rem"
      duration={3000}
    >
      {children}
    </MovingBorderCard>
  );
}
