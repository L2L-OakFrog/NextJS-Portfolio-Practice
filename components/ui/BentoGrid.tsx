"use client";
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import Image from 'next/image';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  titleClassName,
  description,
  img,
  imgClassName,
  spareImg,
}:
  {
    id?: number;
    className?: string;
    title?: string | React.ReactNode;
    titleClassName?: string;
    description?: string | React.ReactNode;
    img?: string;
    imgClassName?: string;
    spareImg?: string;
  }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    debugger
    try {
      // Read the current clipboard content
      const clipboardContent = await navigator.clipboard.readText();

      // Check if the clipboard already contains the email
      if (clipboardContent === 'rafiqahamed.tanim@gmail.com') {
        alert('Email is already copied to your clipboard!');
      } else {
        // Copy the email to the clipboard
        await navigator.clipboard.writeText('rafiqahamed.tanim@gmail.com');
        setCopied(true);

        // Reset the copied state after 2 seconds
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      }
    } catch (error) {
      console.error('Failed to copy email: ', error);
    }
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            // {/* <img
            //   src={img}
            //   alt={img}
            //   className={cn(imgClassName, 'object-cover, object-center')}
            // /> */}
            <Image
              src={img} // or spareImg
              alt={img} // or spareImg
              className={cn(imgClassName, 'object-cover, object-center')}
              fill // This makes it behave like the original img with full width/height
            />
          )}
        </div>

        <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"} `}>
          {spareImg && (
            // <img
            //   src={spareImg}
            //   alt={spareImg}
            //   className={"object-cover object-center w-full h-full"}
            // />
            <Image
              src={spareImg} // or spareImg
              alt={spareImg} // or spareImg
              className={"object-cover object-center w-full h-full"}
              fill // This makes it behave like the original img with full width/height
            />
          )}
        </div>

        {id === 6 && (
          // add background animation , remove the p tag
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold"></div>
          </BackgroundGradientAnimation>
        )}

        <div className={cn(titleClassName, "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10")}>
          <div className="font-sans font-extralight md:max-w-32 text-[#C1C2D3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className={`font-sans font-bold text-lg lg:text-3xl max-w-96 z-10`}>
            {title}
          </div>

          {id === 2 && <GlobeDemo />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:right-2">
              <div className="flex flex-col gap-3">
                {['React.js', 'Next.js', 'Typescript'].map((item) => (
                  <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]"></span>
                {['Vue.js', 'AWS', 'MongoDB'].map((item) => (
                  <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className={"absolute -bottom-5 right-0"}>
                <Lottie options={{
                  loop: copied,
                  autoplay: copied,
                  animationData,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice'
                  }
                }} />
              </div>

              {/* <MagicButton
                title={copied ? 'Email Copied' : 'Copy email'}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161A31]"
                handleClick={handleCopy}
              /> */}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
