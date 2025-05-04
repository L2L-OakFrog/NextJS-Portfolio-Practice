// components/ui/DynamicBox.tsx
'use client';
import React from 'react';
import { cn } from "@/utils/cn";

type DynamicBoxProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

const DynamicBox = <T extends React.ElementType = 'div'>({
  as,
  className,
  children,
  ...props
}: DynamicBoxProps<T>) => {
  const Component = as || 'div';
  
  return (
    <Component className={cn(className)} {...props}>
      {children}
    </Component>
  );
};

export default DynamicBox;
export type { DynamicBoxProps };