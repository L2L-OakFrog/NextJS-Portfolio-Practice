"use client";
import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import animationData from '@/data/confetti.json';

interface MagicButtonProps {
  title: string;
  icon?: React.ReactNode;
  position?: 'left' | 'right';
  handleClick?: () => void;
  otherClasses?: string;
  copyText?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  showConfetti?: boolean;
  size?: 'sm' | 'md' | 'lg'; // New size prop
}

const MagicButton = ({
  title,
  icon,
  position = 'right',
  handleClick,
  otherClasses,
  copyText,
  type = 'button',
  disabled = false,
  showConfetti = false,
  size = 'md' // Default size
}: MagicButtonProps) => {
  const [copied, setCopied] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleCopy = async (text: string) => {
    if (!isMounted) return;
    
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy text: ', error);
    }
  };

  const handleButtonClick = () => {
    if (copyText) {
      handleCopy(copyText);
    } else if (handleClick) {
      handleClick();
    }
  };

  // Size classes
  const sizeClasses = {
    sm: 'h-10 text-xs px-4',
    md: 'h-12 text-sm px-7',
    lg: 'h-14 text-base px-8'
  };

  const containerSizeClasses = {
    sm: 'w-32',
    md: 'w-60',
    lg: 'w-72'
  };

  return (
    <div className="relative">
      <button 
        className={`relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${containerSizeClasses[size]}`}
        onClick={handleButtonClick}
        type={type}
        disabled={disabled}
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses} ${sizeClasses[size]}`}>
          {position === 'left' && icon}
          {copied && copyText ? 'Copied!' : title}
          {position === 'right' && icon}
        </span>
      </button>
    </div>
  );
};

export default MagicButton;