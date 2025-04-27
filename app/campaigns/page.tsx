"use client";
import { BentoGrid } from "@/components/ui/BentoGrid2";
import { BentoGridItem } from "@/components/ui/BentoGridItem";
import MagicButton from "@/components/ui/MagicButton";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { FaArrowRight, FaRegStar, FaChartLine } from "react-icons/fa";
import { IoMdRocket } from "react-icons/io";

const campaigns = [
  {
    title: "Solar Energy Push",
    description: "Generated 450+ qualified solar leads in 2023",
    stats: [
      { value: "78%", label: "Conv. Rate" },
      { value: "$2.4M", label: "Revenue" }
    ],
    className: "md:col-span-2 col-span-3",
    icon: <IoMdRocket className="text-yellow-400" size={20} />,
    action: () => window.open("/campaigns/solar", "_blank")
  },
  {
    title: "Insurance Expansion",
    description: "Multi-channel lead generation campaign",
    stats: [
      { value: "62%", label: "Conv. Rate" },
      { value: "1.2K", label: "New Policies" }
    ],
    className: "md:col-span-1 col-span-3",
    icon: <FaRegStar className="text-blue-400" size={18} />,
    action: () => window.open("/campaigns/insurance", "_blank")
  },
  {
    title: "Real Estate Webinars",
    description: "Virtual event series for high-value connections",
    stats: [
      { value: "320+", label: "Attendees" },
      { value: "89%", label: "Satisfaction" }
    ],
    className: "md:col-span-1 col-span-3",
    icon: <FaChartLine className="text-green-400" size={18} />,
    action: () => window.open("/campaigns/real-estate", "_blank")
  },
  /* {
    title: "MCA Success",
    description: "Record-breaking merchant cash advance program",
    stats: [
      { value: "94%", label: "Conv. Rate" },
      { value: "$5.8M", label: "Funded" }
    ],
    className: "md:col-span-2 col-span-3",
    icon: <FaChartLine className="text-purple-400" size={20} />,
    action: () => window.open("/campaigns/mca", "_blank")
  } */
];

export default function CampaignsPage() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      
      <div className="w-full max-w-6xl mx-auto">
        <TextGenerateEffect 
          words="Our Successful Campaigns" 
          className="text-center mb-8 sm:mb-12 text-2xl sm:text-3xl"
        />
        
        <BentoGrid className="md:auto-rows-[18rem] auto-rows-[16rem]">
          {campaigns.map((campaign, i) => (
            <BentoGridItem
              key={i}
              title={campaign.title}
              description={campaign.description}
              className={campaign.className}
              header={
                <div className="flex flex-col h-full p-3 sm:p-4">
                  <div className="flex justify-between items-start gap-2">
                    <div className="flex-shrink-0">
                      {campaign.icon}
                    </div>
                    <div className="flex flex-wrap gap-1 justify-end">
                      {campaign.stats.map((stat, j) => (
                        <div key={j} className="px-2 py-1 bg-black/30 rounded-full text-xs sm:text-sm">
                          <span className="font-bold">{stat.value}</span> {stat.label}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-auto pt-2">
                    <MagicButton
                      title="View Details"
                      icon={<FaArrowRight />}
                      position="right"
                      otherClasses="bg-[#161A31] hover:bg-[#161A31]/80 w-full text-sm"
                      handleClick={campaign.action}
                    />
                  </div>
                </div>
              }
              style={{
                background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
                borderColor: "rgba(255,255,255,0.1)"
              }}
              titleClassName="text-lg sm:text-xl"
              descriptionClassName="text-sm"
            />
          ))}
          {/* Featured Campaign */}
<BentoGridItem
  title="2024 MCA Campaign"
  description="Record-breaking merchant cash advance program"
  className="md:col-span-2 col-span-3"
  header={
    <div className="relative h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/50 rounded-xl md:rounded-3xl" />
      <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="space-y-2">
            <span className="px-2 py-1 bg-white/10 rounded-full text-xs inline-block">FEATURED</span>
            <h3 className="text-xl sm:text-2xl font-bold">Record Performance</h3>
          </div>
          <div className="text-right">
            <p className="text-3xl sm:text-4xl font-bold">94%</p>
            <p className="text-xs sm:text-sm">Conversion</p>
          </div>
        </div>
        <div className="mt-auto grid grid-cols-3 gap-2 sm:gap-4">
          <div className="bg-black/20 p-2 sm:p-3 rounded-lg">
            <p className="text-lg sm:text-2xl font-bold">$5.8M</p>
            <p className="text-xs sm:text-sm">Funded</p>
          </div>
          <div className="bg-black/20 p-2 sm:p-3 rounded-lg">
            <p className="text-lg sm:text-2xl font-bold">320+</p>
            <p className="text-xs sm:text-sm">Businesses</p>
          </div>
          <div className="bg-black/20 p-2 sm:p-3 rounded-lg">
            <p className="text-lg sm:text-2xl font-bold">4.9★</p>
            <p className="text-xs sm:text-sm">Rating</p>
          </div>
        </div>
      </div>
    </div>
  }
  style={{
    background: "linear-gradient(135deg, #4c1d95 0%, #701a75 100%)",
    borderColor: "rgba(255,255,255,0.1)"
  }}
  titleClassName="text-lg sm:text-xl"
  descriptionClassName="text-sm"
/>
        </BentoGrid>
      </div>
    </main>
  );
}