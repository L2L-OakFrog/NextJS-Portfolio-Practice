"use client";
import { BentoGrid } from "@/components/ui/BentoGrid2";
import { BentoGridItem } from "@/components/ui/BentoGridItem";
import MagicButton from "@/components/ui/MagicButton";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { FaArrowRight, FaRegStar, FaChartLine, FaHome, FaTools, FaHospital, FaCrown } from "react-icons/fa";
import { IoMdRocket, IoMdFlash } from "react-icons/io";
import { GiMechanicGarage, GiWindyStripes } from "react-icons/gi";
import { GiAirBalloon } from "react-icons/gi";

const campaigns = [
  // Featured Campaign (MCA Financing - your highest performer)
  {
    title: "MCA Financing",
    description: "6 years specializing in merchant cash advance lead conversion",
    stats: [
      { value: "94%", label: "Conv. Rate" },
      { value: "$5.8M", label: "Funded" },
      { value: "7+", label: "Deals/Mo" }
    ],
    className: "md:col-span-2 col-span-3",
    icon: <FaCrown className="text-yellow-400" size={24} />,
    action: () => window.open("/campaigns/mca", "_blank"),
    featured: true
  },
  // Air Duct Cleaning (Jamon)
  {
    title: "Air Duct Cleaning",
    description: "Central AC cleaning campaign with rapid results",
    stats: [
      { value: "3-4", label: "Sales/Day" },
      { value: "1wk", label: "First Results" }
    ],
    className: "md:col-span-1 col-span-3",
    icon: <GiAirBalloon className="text-blue-400" size={20} />,
    action: () => window.open("/campaigns/air-duct", "_blank")
  },
  // Solar Energy
  {
    title: "Solar Energy",
    description: "B2B solar solutions for Australian government initiatives",
    stats: [
      { value: "78%", label: "Conv. Rate" },
      { value: "450+", label: "Leads" }
    ],
    className: "md:col-span-1 col-span-3",
    icon: <IoMdRocket className="text-yellow-400" size={20} />,
    action: () => window.open("/campaigns/solar", "_blank")
  },
  // LED Lighting
  {
    title: "LED Lighting",
    description: "Australian government energy-saving program",
    stats: [
      { value: "85%", label: "Adoption" },
      { value: "1.2K", label: "Installs" }
    ],
    className: "md:col-span-1 col-span-3",
    icon: <IoMdFlash className="text-blue-400" size={20} />,
    action: () => window.open("/campaigns/led", "_blank")
  },
  // Home Improvement
  {
    title: "Home Improvement",
    description: "Specialized home remodeling campaigns",
    stats: [
      { value: "65%", label: "Conv. Rate" },
      { value: "320+", label: "Projects" }
    ],
    className: "md:col-span-1 col-span-3",
    icon: <FaHome className="text-green-400" size={20} />,
    action: () => window.open("/campaigns/home-improvement", "_blank")
  },
  // MEP Services
  {
    title: "MEP Services",
    description: "Mechanical, electrical & plumbing B2B solutions",
    stats: [
      { value: "7+", label: "Designs/Mo" },
      { value: "89%", label: "Satisfaction" }
    ],
    className: "md:col-span-1 col-span-3",
    icon: <GiMechanicGarage className="text-orange-400" size={20} />,
    action: () => window.open("/campaigns/mep", "_blank")
  },
  // Medicaid Services
  {
    title: "Medicaid Services",
    description: "Inbound rehab center admissions coordination",
    stats: [
      { value: "95%", label: "Accuracy" },
      { value: "200+", label: "Placements" }
    ],
    className: "md:col-span-1 col-span-3",
    icon: <FaHospital className="text-red-400" size={20} />,
    action: () => window.open("/campaigns/medicaid", "_blank")
  },
  // Exhaust Fans
  {
    title: "Exhaust Fans",
    description: "Australian government energy efficiency program",
    stats: [
      { value: "82%", label: "Conv. Rate" },
      { value: "500+", label: "Installs" }
    ],
    className: "md:col-span-1 col-span-3",
    icon: <GiWindyStripes className="text-teal-400" size={20} />,
    action: () => window.open("/campaigns/exhaust-fans", "_blank")
  }
];

export default function CampaignsPage() {
  const featuredCampaign = campaigns.find(campaign => campaign.featured);
  const regularCampaigns = campaigns.filter(campaign => !campaign.featured);

  return (
    <main>
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      
      <div className="w-full pt-12 sm:pt-16 pb-6 sm:pb-8">
        <TextGenerateEffect 
          words="My Campaign Portfolio" 
          className="text-center mb-8 sm:mb-12 text-2xl sm:text-3xl"
        />
        
        {/* <div className="text-center mb-12 max-w-2xl mx-auto text-sm sm:text-base text-neutral-300">
          <p>With 8 years of telemarketing excellence across multiple industries, I've delivered exceptional results in merchant cash advance, solar energy, home improvement, and Australian government initiatives.</p>
        </div> */}
        
        <BentoGrid className="auto-rows-[25rem]">
          {/* Featured Campaign */}
          {featuredCampaign && (
            <BentoGridItem
              title={featuredCampaign.title}
              description={featuredCampaign.description}
              className={featuredCampaign.className}
              header={
                <div className="relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/50 rounded-xl md:rounded-3xl" />
                  <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <FaCrown className="text-yellow-400" />
                      <span className="px-2 py-1 bg-white/10 rounded-full text-xs">TOP PERFORMER</span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between gap-4">
                      <div className="space-y-2">
                        <h3 className="text-xl sm:text-2xl font-bold">{featuredCampaign.title}</h3>
                        <p className="text-sm">{featuredCampaign.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl sm:text-4xl font-bold">94%</p>
                        <p className="text-xs sm:text-sm">Conversion Rate</p>
                      </div>
                    </div>
                    <div className="mt-auto grid grid-cols-3 gap-2 sm:gap-4">
                      {featuredCampaign.stats.map((stat, index) => (
                        <div key={index} className="bg-black/20 p-2 sm:p-3 rounded-lg">
                          <p className="text-lg sm:text-2xl font-bold">{stat.value}</p>
                          <p className="text-xs sm:text-sm">{stat.label}</p>
                        </div>
                      ))}
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
          )}

          {/* Regular Campaigns */}
          {regularCampaigns.map((campaign, i) => (
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
        </BentoGrid>
      </div>
    </main>
  );
}