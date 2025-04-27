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
    description: "2023 campaign generating 450+ qualified solar leads",
    stats: [
      { value: "78%", label: "Conversion Rate" },
      { value: "$2.4M", label: "Revenue Generated" }
    ],
    className: "md:col-span-2",
    icon: <IoMdRocket className="text-yellow-400" size={24} />,
    action: () => window.open("/campaigns/solar", "_blank")
  },
  {
    title: "Insurance Expansion",
    description: "Multi-channel insurance lead generation campaign",
    stats: [
      { value: "62%", label: "Conversion Rate" },
      { value: "1.2K", label: "New Policies" }
    ],
    className: "md:col-span-1",
    icon: <FaRegStar className="text-blue-400" size={20} />,
    action: () => window.open("/campaigns/insurance", "_blank")
  },
  {
    title: "Real Estate Webinars",
    description: "Virtual event series driving high-value connections",
    stats: [
      { value: "320+", label: "Attendees" },
      { value: "89%", label: "Satisfaction" }
    ],
    className: "md:col-span-1",
    icon: <FaChartLine className="text-green-400" size={20} />,
    action: () => window.open("/campaigns/real-estate", "_blank")
  }
];

export default function CampaignsPage() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto px-5 sm:px-10 py-20">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      
      <div className="w-full max-w-7xl mx-auto">
        <TextGenerateEffect 
          words="Our Successful Campaigns" 
          className="text-center mb-16"
        />
        
        <BentoGrid className="md:auto-rows-[20rem]">
          {campaigns.map((campaign, i) => (
            <BentoGridItem
              key={i}
              title={campaign.title}
              description={campaign.description}
              className={campaign.className}
              header={
                <div className="flex flex-col h-full p-4">
                  <div className="flex justify-between items-start">
                    {campaign.icon}
                    <div className="flex gap-2">
                      {campaign.stats.map((stat, j) => (
                        <div key={j} className="px-3 py-1 bg-black/30 rounded-full">
                          <span className="font-bold">{stat.value}</span> {stat.label}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-auto">
                    <MagicButton
                      title="View Case Study"
                      icon={<FaArrowRight />}
                      position="right"
                      otherClasses="bg-[#161A31] hover:bg-[#161A31]/80"
                      // handleClick={campaign.action}
                    />
                  </div>
                </div>
              }
              style={{
                background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
                borderColor: "rgba(255,255,255,0.1)"
              }}
            />
          ))}
          
          {/* Featured Campaign */}
          <BentoGridItem
            title="2024 MCA Campaign"
            description="Our most successful merchant cash advance program"
            className="md:col-span-2"
            header={
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/50 rounded-3xl" />
                <div className="relative z-10 p-6 h-full flex flex-col">
                  <div className="flex justify-between">
                    <div className="space-y-2">
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs">FEATURED</span>
                      <h3 className="text-2xl font-bold">Record Breaking Performance</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-4xl font-bold">94%</p>
                      <p className="text-sm">Conversion Rate</p>
                    </div>
                  </div>
                  <div className="mt-auto grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-2xl font-bold">$5.8M</p>
                      <p className="text-sm">Funded</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">320+</p>
                      <p className="text-sm">Businesses</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">4.9★</p>
                      <p className="text-sm">Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
            }
            style={{
              background: "linear-gradient(135deg, #4c1d95 0%, #701a75 100%)"
            }}
          />
        </BentoGrid>
      </div>
    </main>
  );
}