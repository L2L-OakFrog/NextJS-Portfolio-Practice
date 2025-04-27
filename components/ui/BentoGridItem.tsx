"use client";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import React from "react";

interface BentoGridItemProps {
  className?: string;
  title?: string | React.ReactNode;
  titleClassName?: string;
  description?: string | React.ReactNode;
  descriptionClassName?: string;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  img?: string;
  id?: number;
  onClick?: () => void;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const BentoGridItem = ({
  className,
  title,
  titleClassName,
  description,
  descriptionClassName,
  header,
  icon,
  img,
  id,
  onClick,
  style,
  children,
}: BentoGridItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={cn(
        "row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none flex flex-col space-y-4 border border-white/[0.1] overflow-hidden",
        className
      )}
      style={style}
      onClick={onClick}
    >
      {header && <div className="w-full h-full">{header}</div>}
      <div className="group-hover/bento:translate-x-2 transition duration-200 p-4 flex flex-col h-full">
        {icon && <div className="mb-4">{icon}</div>}
        {title && (
          <div className={cn("font-bold text-lg mb-2", titleClassName)}>
            {title}
          </div>
        )}
        {description && (
          <div className={cn("text-sm font-light", descriptionClassName)}>
            {description}
          </div>
        )}
        {children}
      </div>
    </motion.div>
  );
};