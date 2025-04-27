import { BentoGrid } from "@/components/ui/BentoGrid2";
import { BentoGridItem } from "@/components/ui/BentoGridItem";
import { GlobeDemo } from "@/components/ui/GridGlobe";
import MagicButton from "@/components/ui/MagicButton";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { IoCopyOutline } from "react-icons/io5";
import { FaLocationArrow, FaCommentAlt } from "react-icons/fa";
import Link from "next/link";
import { IoMdMegaphone } from "react-icons/io";

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
    description: "TechConnect Solutions provides expert telemarketing services for solar energy providers, financial services (MCA), insurance agencies, and real estate firms. We deliver targeted outreach with measurable ROI through strategic initiatives.",
    className: "md:col-span-2 col-span-3",
    style: {
      background: "linear-gradient(135deg, #1e3a8a 0%, #7e22ce 100%)",
    },
  },
  {
    title: "Our Method",
    description: "The TechConnect approach combines data-driven strategies with human expertise:",
    className: "md:col-span-1 col-span-3",
    style: {
      background: "linear-gradient(135deg, #047857 0%, #0ea5e9 100%)",
    },
    children: (
      <ul className="mt-4 space-y-2 text-sm">
        <li className="flex items-start gap-2">
          <span className="text-blue-400">•</span> Targeted lead sourcing
        </li>
        <li className="flex items-start gap-2">
          <span className="text-blue-400">•</span> Multi-channel outreach
        </li>
        <li className="flex items-start gap-2">
          <span className="text-blue-400">•</span> Performance tracking
        </li>
      </ul>
    ),
  },
  /* {
    title: "Our Services",
    description: "Industry-specific solutions:",
    className: "md:col-span-1 col-span-3",
    style: {
      background: "linear-gradient(135deg, #b45309 0%, #b91c1c 100%)",
    },
    children: (
      <div className="mt-4 grid grid-cols-2 gap-2">
        {['Solar Energy', 'MCA Financing', 'Insurance', 'Real Estate'].map((service) => (
          <span 
            key={service} 
            className="px-2 py-1 text-xs sm:text-sm rounded-full bg-black/30 text-white text-center"
          >
            {service}
          </span>
        ))}
      </div>
    ),
  }, */
  {
    title: "Success Metrics",
    description: "Documented results from our campaigns:",
    className: "md:col-span-3 col-span-6",
    style: {
      background: "linear-gradient(135deg, #4c1d95 0%, #701a75 100%)",
    },
    children: (
      <div className="flex flex-col h-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 m-4">
          <div className="bg-black/30 p-4 rounded-lg">
            <h4 className="font-bold text-blue-400">Solar Campaign</h4>
            <p className="text-sm mt-2">45% increase in qualified leads</p>
          </div>
          <div className="bg-black/30 p-4 rounded-lg">
            <h4 className="font-bold text-blue-400">MCA Campaign</h4>
            <p className="text-sm mt-2">35% improvement in approvals</p>
          </div>
          <div className="bg-black/30 p-4 rounded-lg">
            <h4 className="font-bold text-blue-400">MCA Campaign</h4>
            <p className="text-sm mt-2">35% improvement in approvals</p>
          </div>
        </div>
        <div className="">
          <Link href="/campaigns">
            <MagicButton
              title="Check Past Campaigns"
              icon={<IoMdMegaphone />}
              position="right"
              // otherClasses="w-full sm:w-auto"
            />
          </Link>
        </div>
      </div>
    ),
  },
  {
    title: "Global Reach",
    description: "Serving clients worldwide with our expert network across 25+ countries",
    className: "md:col-span-2 col-span-3 relative", // Added relative
    style: {
      background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
    },
    header: (
      <div className="absolute inset-0 z-0">
        <GlobeDemo />
      </div>
    ),
    /* children: (
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div className="bg-black/30 p-4 rounded-lg backdrop-blur-sm">
          <h3 className="font-bold text-lg text-blue-400">Our Global Presence</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-blue-400">•</span> North America
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">•</span> Europe
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">•</span> Asia Pacific
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">•</span> Middle East
            </li>
          </ul>
        </div>
        <div className="mt-4 bg-black/30 p-4 rounded-lg backdrop-blur-sm">
          <p className="text-sm">
            With offices in 8 major cities and partners in 17 more, we deliver 
            localized solutions with global expertise.
          </p>
        </div>
      </div>
    ), */
  },
  {
    title: "Get Started",
    description: "Contact us today to discuss your campaign:",
    className: "md:col-span-1 col-span-3",
    style: {
      background: "linear-gradient(135deg, #1e3a8a 0%, #0ea5e9 100%)",
    },
    children: (
      <div className="flex flex-col h-full">
        {/* <div className="flex flex-col gap-3 mb-4">
          <MagicButton
            title="Call (929) 655-9561"
            icon={<IoCopyOutline />}
            position="left"
            otherClasses="bg-[#161A31] hover:bg-[#161A31]/90 w-full"
            copyText="(929) 655-9561"
          />
          <MagicButton
            title="Email Us"
            icon={<IoCopyOutline />}
            position="left"
            otherClasses="bg-[#161A31] hover:bg-[#161A31]/90 w-full"
            copyText="Sharifanim66@gmail.com"
          />
        </div> */}
        <div className="mt-auto flex justify-center">
          <Link href="/contact" className="flex items-center gap-2 text-white hover:text-blue-300 transition-colors">
            <FaCommentAlt size={20} />
            <span>Contact Form</span>
          </Link>
        </div>
      </div>
    ),
  },
];

export default function AboutPage() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto px-4 sm:px-6 lg:px-8">
      <div className="w-full pt-16 sm:pt-20 pb-8 sm:pb-12">
        <TextGenerateEffect 
          words="About TechConnect" 
          className="text-center text-3xl sm:text-4xl md:text-5xl font-bold"
        />
        
        <div className="max-w-7xl mx-auto mt-6 sm:mt-10 md:mt-16 w-full">
          <BentoGrid 
            cols={3} 
            gap="lg" 
            className="md:auto-rows-[20rem] auto-rows-[16rem] sm:auto-rows-[18rem]"
          >
            {aboutItems.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                className={`${item.className} p-3 sm:p-4 md:p-6`}
                style={item.style}
                header={item.header}
                titleClassName="text-lg sm:text-xl md:text-2xl"
                descriptionClassName="text-xs sm:text-sm md:text-base"
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