"use client";
import React from "react";
import { cn } from "@/lib/utils";

export function MovingBorderCard({
  borderRadius = "1.75rem",
  children,
  as: Component = "div",
  containerClassName,
  borderClassName,
  duration = 4000,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: any;
}) {
  return (
    <Component
      className={cn(
        "relative overflow-hidden bg-transparent p-[2px]",
        containerClassName,
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      {/* Simple animated border */}
      <div 
        className="absolute inset-0 rounded-inherit opacity-75"
        style={{
          background: `conic-gradient(from 0deg, transparent, #3b82f6, #8b5cf6, transparent)`,
          animation: `spin ${duration}ms linear infinite`,
        }}
      />

      {/* Clean content area */}
      <div
        className={cn(
          "relative h-full w-full backdrop-blur-xl border border-white/10",
          "bg-gradient-to-br from-white/5 to-white/[0.02]",
          className,
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.9)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}