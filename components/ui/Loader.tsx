// components/ui/Loader.tsx
'use client';

import { cn } from "@/utils/cn";

export type LoaderType = 
  | 'spinner' 
  | 'dots' 
  | 'bar' 
  | 'pulse' 
  | 'gradient' 
  | 'circle-progress'
  | 'ripple';

interface LoaderProps {
  type?: LoaderType;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  className?: string;
}

const Loader = ({
  type = 'spinner',
  size = 'md',
  color = 'currentColor',
  className,
}: LoaderProps) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16',
  };

  const loaderClasses = cn(
    'flex items-center justify-center',
    sizeClasses[size],
    className
  );

  const renderLoader = () => {
    switch (type) {
      case 'spinner':
        return (
          <div 
            className={cn(
              'border-2 border-transparent rounded-full animate-spin',
              loaderClasses
            )}
            style={{ borderTopColor: color }}
          />
        );

      case 'dots':
        return (
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={cn(
                  'rounded-full bg-current animate-bounce',
                  size === 'sm' ? 'h-2 w-2' :
                  size === 'md' ? 'h-3 w-3' :
                  size === 'lg' ? 'h-4 w-4' : 'h-5 w-5'
                )}
                style={{
                  animationDelay: `${i * 0.2}s`,
                  backgroundColor: color,
                }}
              />
            ))}
          </div>
        );

      case 'bar':
        return (
          <div className="w-full max-w-[200px]">
            <div 
              className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden"
              style={{ backgroundColor: `${color}20` }}
            >
              <div 
                className="h-full rounded-full animate-progress"
                style={{ 
                  backgroundColor: color,
                  width: '60%',
                  animation: 'progress 2s ease-in-out infinite',
                }}
              />
            </div>
          </div>
        );

      case 'pulse':
        return (
          <div 
            className={cn(
              'rounded-full animate-pulse',
              loaderClasses
            )}
            style={{ backgroundColor: color }}
          />
        );

      case 'gradient':
        return (
          <div className={cn('relative', loaderClasses)}>
            <div 
              className="absolute inset-0 rounded-full border-4 border-transparent border-t-current animate-spin"
              style={{ borderTopColor: color }}
            />
            <div 
              className="absolute inset-1 rounded-full border-4 border-transparent border-b-current animate-spin"
              style={{ 
                borderBottomColor: color,
                animationDelay: '-0.5s',
              }}
            />
          </div>
        );

      case 'circle-progress':
        return (
          <div className={cn('relative', loaderClasses)}>
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path
                className="opacity-20"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeDasharray="100, 100"
                style={{ stroke: color }}
              />
              <path
                className="animate-dash"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeDasharray="30, 100"
                style={{ 
                  stroke: color,
                  animation: 'dash 1.5s ease-in-out infinite',
                }}
              />
            </svg>
          </div>
        );

      case 'ripple':
        return (
          <div className={cn('relative', loaderClasses)}>
            <div 
              className="absolute inset-0 rounded-full border-2 border-current opacity-20 animate-ripple"
              style={{ borderColor: color }}
            />
            <div 
              className="absolute inset-0 rounded-full border-2 border-current opacity-40 animate-ripple"
              style={{ 
                borderColor: color,
                animationDelay: '-0.5s',
              }}
            />
          </div>
        );

      default:
        return <div className={loaderClasses} />;
    }
  };

  return <div className={loaderClasses}>{renderLoader()}</div>;
};

export { Loader };
export default Loader;