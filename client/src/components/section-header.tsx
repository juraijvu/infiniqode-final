import { MovingBorderCard } from "@/components/ui/moving-border";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeader({ title, subtitle, className, centered = true }: SectionHeaderProps) {
  return (
    <div className={cn("mb-16", centered && "text-center", className)}>
      <MovingBorderCard 
        className="inline-block px-8 py-4 mb-6"
        borderClassName="from-blue-500 to-purple-500"
        containerClassName="rounded-2xl"
        borderRadius="1rem"
        duration={6000}
      >
        <h2 className="text-4xl md:text-5xl font-bold gradient-text">
          {title}
        </h2>
      </MovingBorderCard>
      {subtitle && (
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}