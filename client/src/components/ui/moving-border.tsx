"use client";
import React from "react";
import {
  motion,
} from "framer-motion";
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
        "relative overflow-hidden bg-transparent p-[1px]",
        containerClassName,
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      {/* Animated border */}
      <div className="absolute inset-0 rounded-inherit">
        <div 
          className="absolute inset-0 rounded-inherit"
          style={{
            background: `conic-gradient(from 0deg, transparent, rgb(59, 130, 246), rgb(139, 92, 246), transparent)`,
            animation: `spin ${duration}ms linear infinite`,
          }}
        />
        <div 
          className="absolute inset-[1px] rounded-inherit backdrop-blur-xl border border-white/10"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div
        className={cn(
          "relative flex h-full w-full backdrop-blur-xl border border-white/10",
          "bg-gradient-to-br from-white/5 to-white/[0.02]",
          className,
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}