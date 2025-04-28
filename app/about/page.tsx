'use client';
import { BentoGrid } from "@/components/ui/BentoGrid2";
import { BentoGridItem } from "@/components/ui/BentoGridItem";
import dynamic from "next/dynamic";
import MagicButton from "@/components/ui/MagicButton";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { IoCopyOutline } from "react-icons/io5";
import { FaLocationArrow, FaCommentAlt } from "react-icons/fa";
import Link from "next/link";
import { IoMdMegaphone } from "react-icons/io";

// Dynamically import GlobeDemo with SSR disabled
const GlobeDemo = dynamic(
  () => import("@/components/ui/GridGlobe").then((mod) => mod.GlobeDemo as React.ComponentType<any>),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center w-full h-full bg-gray-800/50">
        <div className="animate-pulse text-white">Loading globe...</div>
      </div>
    )
  }
);

type AboutItem = {
  title: string;
  description: string;
  className: string;
  style: React.CSSProperties;
  header?: React.ReactNode;
  children?: React.ReactNode;
};

const aboutItems: AboutItem[] = [
  {
    title: "Who We Are",
    description: "TechConnect provides expert telemarketing services for solar, MCA, insurance, and real estate industries. With 8 years of telemarketing excellence across multiple industries, We've delivered exceptional results in merchant cash advance, solar energy, home improvement, and Australian government initiatives.",
    className: "md:col-span-2 col-span-3",
    style: {
      background: "linear-gradient(135deg, #1e3a8a 0%, #7e22ce 100%)",
    },
  },
  {
    title: "Our Method",
    description: "Data-driven strategies with human expertise:",
    className: "md:col-span-1 col-span-3",
    style: {
      background: "linear-gradient(135deg, #047857 0%, #0ea5e9 100%)",
    },
    children: (
      <ul className="mt-2 space-y-2 text-sm">
        <li className="flex items-start gap-2">
          <span className="text-blue-400">•</span> Targeted lead sourcing
        </li>
        <li className="flex items-start gap-2">
          <span className="text-blue-400">•</span> Multi-channel outreach
        </li>
      </ul>
    ),
  },
  {
    title: "Success Metrics",
    description: "Documented campaign results:",
    className: "md:col-span-3 col-span-3",
    style: {
      background: "linear-gradient(135deg, #4c1d95 0%, #701a75 100%)",
    },
    children: (
      <div className="flex flex-col h-full p-2">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
          <div className="bg-black/30 p-3 rounded-lg">
            <h4 className="font-bold text-blue-400 text-sm sm:text-base">Solar Campaign</h4>
            <p className="text-xs sm:text-sm mt-1">45% increase in qualified leads</p>
          </div>
          <div className="bg-black/30 p-3 rounded-lg">
            <h4 className="font-bold text-blue-400 text-sm sm:text-base">MCA Campaign</h4>
            <p className="text-xs sm:text-sm mt-1">35% improvement in approvals</p>
          </div>
          <div className="bg-black/30 p-3 rounded-lg">
            <h4 className="font-bold text-blue-400 text-sm sm:text-base">Real Estate</h4>
            <p className="text-xs sm:text-sm mt-1">50% higher conversion rate</p>
          </div>
        </div>
        <div className="mt-auto">
          <Link href="/campaigns" className="block w-full">
            {/* <MagicButton
              title="View Campaigns"
              icon={<IoMdMegaphone />}
              position="right"
              otherClasses="w-full text-sm"
            /> */}
          </Link>
        </div>
      </div>
    ),
  },
  {
    title: "Global Reach",
    description: "Serving clients worldwide with our expert network across 25+ countries",
    className: "md:col-span-2 col-span-3 relative",
    style: {
      background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
    },
    header: (
      <div className="absolute inset-0 z-0">
        <GlobeDemo />
      </div>
    ),
  },
  {
    title: "Get Started",
    description: "Contact us today:",
    className: "md:col-span-1 col-span-3",
    style: {
      background: "linear-gradient(135deg, #1e3a8a 0%, #0ea5e9 100%)",
    },
    children: (
      <div className="flex flex-col h-full justify-end p-4">
        <Link href="/contact" className="flex items-center justify-center gap-2 text-white hover:text-blue-300 transition-colors">
          <FaCommentAlt size={18} />
          <span className="text-sm sm:text-base">Contact Form</span>
        </Link>
      </div>
    ),
  },
];

export default function AboutPage() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto px-4 sm:px-6">
      <div className="w-full pt-12 sm:pt-16 pb-6 sm:pb-8">
        <TextGenerateEffect 
          words="About TechConnect" 
          className="text-center text-2xl sm:text-3xl md:text-4xl font-bold"
        />
        
        <div className="max-w-6xl mx-auto mt-4 sm:mt-8 w-full">
          <BentoGrid 
            cols={3} 
            gap="md" 
            className="auto-rows-[26rem]"
          >
            {aboutItems.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                className={`${item.className} p-3 sm:p-4`}
                style={item.style}
                header={item.header}
                titleClassName="text-lg sm:text-xl"
                descriptionClassName="text-xs sm:text-sm"
              >
                {item.children}
              </BentoGridItem>
            ))}
          </BentoGrid>
        </div>
      </div>
    </main>
  );
}