// Hero.tsx
'use client';
import React from 'react';
import { Spotlight } from './Spotlight';
import { TextGenerateEffect } from "./TextGenerateEffect";
import MagicButton from "./MagicButton";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdMegaphone } from "react-icons/io";
import { StatsSection } from "./StatsSection";
import Image from 'next/image';
import { MetricsDashboard } from "./MetricsDashboard";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "450+", label: "Active Clients" },
  { value: "35%", label: "Average Conversion Boost" },
  { value: "10+", label: "Daily Deals Closed" },
];

const telemarketingMetrics = [
  {
    service: "Conversion Rates",
    chartType: "bar" as const,
    metrics: [
      { name: "Inbound", value: 35, unit: "%", color: "#0088FE" },
      { name: "Outbound", value: 28, unit: "%", color: "#00C49F" },
      { name: "Follow-up", value: 42, unit: "%", color: "#FFBB28" },
    ]
  },
  {
    service: "Call Performance",
    chartType: "line" as const,
    metrics: [
      { name: "Mon", value: 120 },
      { name: "Tue", value: 145 },
      { name: "Wed", value: 98 },
      { name: "Thu", value: 167 },
      { name: "Fri", value: 132 },
    ]
  },
  {
    service: "Lead Sources",
    chartType: "pie" as const,
    metrics: [
      { name: "Website", value: 35, color: "#0088FE" },
      { name: "Referrals", value: 25, color: "#00C49F" },
      { name: "Social Media", value: 20, color: "#FFBB28" },
      { name: "Direct Mail", value: 15, color: "#FF8042" },
      { name: "Other", value: 5, color: "#8884D8" },
    ]
  }
];

const Hero = () => {
  return (
    <div className='py-6'>
      {/* Spotlight Background */}
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>
      </div>

      {/* Grid Background */}
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left Column - Main Content */}
        <div className="max-w-2xl flex flex-col items-center lg:items-start">
          <h2 className='uppercase tracking-widest text-blue-100 text-sm mb-4'>
            RING CENTER SOLUTIONS
          </h2>

          <TextGenerateEffect
            words="Maximize Your Business Potential"
            className="text-center lg:text-left text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-4"
          />

          <p className="text-center lg:text-left text-lg md:text-xl text-gray-300 mb-8">
            Your Trusted Partner for Efficient and Cost Effective Lead Conversion
          </p>
          
          <div className="flex flex-col lg:items-start items-center gap-4 mb-8 w-full">
            <p className="text-xl font-semibold text-center">
              Get Your Conversion Rates Climbing
            </p>
            <a href="/contact" className="w-full flex justify-center lg:justify-start">
              <MagicButton
                title="Contact Us Today"
                icon={<IoMdMegaphone />}
                position="right"
              />
            </a>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="max-w-md w-full">
          {/* <div className="relative rounded-2xl shadow-xl border border-white/20 overflow-hidden" style={{ height: '400px' }}> */}
          <div className="relative rounded-2xl shadow-xl overflow-hidden" style={{ height: '400px' }}>
            <Image 
              src="/ChatGPT Image May 5, 2025, 09_03_21 AM.png"
              alt="Business Growth Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent my-8" />
      </div>

      {/* Video Section */}
      <div className="relative z-10 pb-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Video on Left */}
          <div className="flex-1">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl border border-white/20">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/mlmqmxvVAQI" 
                title="What is Telemarketing?" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
          </div>
          
          {/* Text on Right */}
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white text-center lg:text-left">
              What is Telemarketing?
            </h3>
            <p className="text-lg text-gray-300 mb-6 text-center lg:text-left">
              Telemarketing is a direct marketing strategy where sales representatives contact potential customers via phone to generate leads, make sales, or conduct market research.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Direct communication with potential customers",
                "Cost-effective way to reach large audiences",
                "Immediate feedback and response tracking",
                "Personalized approach to sales and marketing",
                "Flexible for B2B and B2C applications"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-3 text-green-400 flex-shrink-0 text-xl" />
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-center lg:justify-start">
              <a href="/contact">
                <MagicButton
                  title="Learn More"
                  icon={<IoMdMegaphone />}
                  position="right"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Dashboard Section */}
      <div className="relative z-10 py-6">
        <MetricsDashboard 
          services={telemarketingMetrics}
          title="Telemarketing Performance Metrics"
          description="Key indicators showing our campaign effectiveness"
        />
      </div>

      {/* Stats Section */}
      <div className="relative z-10">
        <StatsSection stats={stats} />
      </div>
    </div>
  );
};

export default Hero;