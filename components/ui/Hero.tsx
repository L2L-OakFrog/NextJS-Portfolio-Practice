'use client';
import React from 'react'
import { Spotlight } from './Spotlight'
import { TextGenerateEffect } from "./TextGenerateEffect"
import MagicButton from "./MagicButton"
import { FaLocationArrow } from "react-icons/fa6"
import { IoMdMegaphone } from "react-icons/io"
import { StatsSection } from "./StatsSection";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "450+", label: "Active Clients" },
  { value: "35%", label: "Average Conversion Boost" },
  { value: "10+", label: "Daily Deals Closed" },
];

const Hero = () => {
  return (
    <div className='py-6'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[89vw] flex flex-col items-center justify-center">
          <h2 className='uppercase tracking-widest text-center text-blue-100 max-w-80'>
            RingCenter Solutions 
          </h2>

          <TextGenerateEffect
            words="Professional telemarketing company specializing in lead conversion for various industries, including solar, MCA, insurance, and real estate."
            className="text-center text-[40px] md:text-5xl lg:text-5xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            {/* Hi! I&apos;m Rafiq Ahamed Tanim, a Next.js Developer based in Bangladesh. */}
            To maximize your campaign success by delivering high-quality leads and closing deals effectively
          </p>
          
          <a href="/contact">
            <MagicButton
              // information={{
              //   title: "See My Works"
              // }}
              // title="See My Works"
              title="Connect with us"
              icon={<IoMdMegaphone />}
              position="right"
            />
          </a>
          
          <StatsSection stats={stats} className="" />
        </div>
      </div>
    </div>
  )
}

export default Hero

// // Hero.tsx
// 'use client';
// import React from 'react';
// import { Spotlight } from './Spotlight';
// import { TextGenerateEffect } from "./TextGenerateEffect";
// import MagicButton from "./MagicButton";
// import { FaCheckCircle } from "react-icons/fa";
// import { IoMdMegaphone } from "react-icons/io";
// import { StatsSection } from "./StatsSection";

// const stats = [
//   { value: "10+", label: "Years Experience" },
//   { value: "450+", label: "Active Clients" },
//   { value: "35%", label: "Average Conversion Boost" },
//   { value: "10+", label: "Daily Deals Closed" },
// ];

// const Hero = () => {
//   return (
//     <div className='pb-10 pt-20'>
//       {/* Spotlight Background */}
//       <div>
//         <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
//         <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
//         <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>
//       </div>

//       {/* Grid Background */}
//       <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
//         <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
//       </div>

//       {/* Main Content */}
//       <div className="flex justify-center relative z-10">
//         <div className="max-w-[89vw] md:max-w-6xl lg:max-w-[90vw] flex flex-col lg:flex-row items-center justify-between gap-12 px-4">
//           {/* Left Column - Main Content */}
//           <div className="max-w-2xl flex flex-col items-center lg:items-start">
//             <h2 className='uppercase tracking-widest text-blue-100 text-sm mb-4'>
//               RING CENTER SOLUTIONS
//             </h2>

//             <TextGenerateEffect
//               words="Maximize Your Business Potential"
//               className="text-center lg:text-left text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-4"
//             />

//             <p className="text-center lg:text-left text-lg md:text-xl text-gray-300 mb-8">
//               Your Trusted Partner for Efficient and Cost Effective Lead Conversion
//             </p>
            
//             <div className="flex flex-col items-center lg:items-start gap-4 mb-8">
//               <p className="text-xl font-semibold text-center lg:text-left">
//                 Get Your Conversion Rates Climbing
//               </p>
//               <a href="/contact" className="w-full lg:w-auto">
//                 <MagicButton
//                   title="Contact Us Today"
//                   icon={<IoMdMegaphone />}
//                   position="right"
//                   // className="w-full lg:w-auto px-8 py-3"
//                 />
//               </a>
//             </div>
//           </div>

//           {/* Right Column - Why Choose Us */}
//           <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-lg p-8 rounded-2xl border border-white/20 max-w-md w-full shadow-xl">
//             <h3 className="text-2xl font-bold mb-6 text-center lg:text-left text-white">
//               Why Choose Us?
//             </h3>
//             <ul className="space-y-4">
//               {[
//                 "Expert Agents with industry-specific knowledge",
//                 "Proven High Conversion Rates",
//                 "Customized Strategies tailored to your business",
//                 "Transparent Reporting with real-time analytics",
//                 "Cost Effective Solutions with measurable ROI"
//               ].map((item, index) => (
//                 <li key={index} className="flex items-start">
//                   <FaCheckCircle className="mt-1 mr-3 text-green-400 flex-shrink-0 text-xl" />
//                   <span className="text-gray-200">{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="relative z-10 md:mt-14">
//         <StatsSection stats={stats} />
//       </div>
//     </div>
//   );
// };

// export default Hero;