'use client';
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from "./ui/TextGenerateEffect"
import MagicButton from "./ui/MagicButton"
import { FaLocationArrow } from "react-icons/fa6"
import { IoMdMegaphone } from "react-icons/io"

const Hero = () => {
  return (
    <div className='pb-10 pt-20'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
            TechConnect Solutions 
          </h2>

          <TextGenerateEffect
            words="Professional telemarketing company specializing in lead conversion for various industries, including solar, MCA, insurance, and real estate."
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            {/* Hi! I&apos;m Rafiq Ahamed Tanim, a Next.js Developer based in Bangladesh. */}
            To maximize your campaign success by delivering high-quality leads and closing deals effectively
          </p>
          
          <a href="/campaigns">
            <MagicButton
              /* information={{
                title: "See My Works"
              }} */
              // title="See My Works"
              title="Check Past Campaigns"
              icon={<IoMdMegaphone />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero