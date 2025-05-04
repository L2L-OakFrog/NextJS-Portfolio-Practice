// components/ui/Box.tsx
'use client';
import React from 'react';
import { cn } from "@/utils/cn";

type BoxProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

const Box = <T extends React.ElementType = 'div'>({
  as,
  className,
  children,
  ...props
}: BoxProps<T>) => {
  const Component = as || 'div';
  
  return (
    <Component className={cn(className)} {...props}>
      {children}
    </Component>
  );
};

export default Box;
export type { BoxProps };