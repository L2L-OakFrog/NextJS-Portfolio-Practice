"use client";
import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';

interface SimpleSubmitButtonProps {
  title: string;
  icon: React.ReactNode;
  position: 'left' | 'right';
  otherClasses?: string;
  disabled?: boolean;
}

const SimpleSubmitButton = ({
  title,
  icon,
  position,
  otherClasses,
  disabled = false,
}: SimpleSubmitButtonProps) => {
  return (
    <button 
      className={`relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      type="submit"
      disabled={disabled}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}>
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </span>
    </button>
  );
};

export default SimpleSubmitButton;