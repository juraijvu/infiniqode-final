import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
  icon?: ReactNode;
  glassEffect?: boolean;
}

export function SectionHeader({ 
  title, 
  subtitle, 
  className, 
  centered = true, 
  icon,
  glassEffect = false 
}: SectionHeaderProps) {
  const headerClasses = cn(
    "mb-16",
    centered && "text-center",
    glassEffect && "glass-card p-8 border-2 bg-gradient-to-br from-purple-500/10 to-purple-700/5 border-purple-400/20 backdrop-blur-lg",
    className
  );

  return (
    <div className={headerClasses}>
      {icon && (
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-purple-500/25">
            {icon}
          </div>
        </div>
      )}
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}