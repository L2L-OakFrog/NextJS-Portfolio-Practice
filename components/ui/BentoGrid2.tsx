"use client";
import { cn } from "@/utils/cn";
import React from "react";

interface BentoGridProps {
  className?: string;
  children?: React.ReactNode;
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
  rows?: number;
  gap?: "sm" | "md" | "lg";
}

export const BentoGrid = ({
  className,
  children,
  cols = 3,
  rows,
  gap = "md",
}: BentoGridProps) => {
  const colClasses = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6",
  };

  const gapClasses = {
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
  };

  return (
    <div
      className={cn(
        "grid w-full mx-auto",
        colClasses[cols],
        gapClasses[gap],
        className
      )}
      style={{
        gridTemplateRows: rows ? `repeat(${rows}, minmax(0, 1fr))` : undefined,
      }}
    >
      {children}
    </div>
  );
};