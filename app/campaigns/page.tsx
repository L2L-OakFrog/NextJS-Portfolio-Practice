"use client";
import { BentoGrid } from "@/components/ui/BentoGrid2";
import { BentoGridItem } from "@/components/ui/BentoGridItem";
import MagicButton from "@/components/ui/MagicButton";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { FaArrowRight, FaCrown, FaHome, FaHospital } from "react-icons/fa";
import { IoMdRocket, IoMdFlash } from "react-icons/io";
import { GiMechanicGarage, GiWindyStripes, GiAirBalloon } from "react-icons/gi";
import { useRouter } from "next/navigation";
import campaignData from '../../data/campaign-data.json';

type CampaignStat = {
  value: string;
  label: string;
};

type Campaign = {
  slug: string;
  title: string;
  description: string;
  stats: CampaignStat[];
  className: string;
  icon: string;
  featured?: boolean;
  overview?: string;
  strategies?: string[];
  timeline?: string;
};

type CampaignWithIconComponent = Campaign & {
  iconComponent: React.ReactNode;
};

export default function CampaignsPage() {
  const router = useRouter();

  const iconMap: Record<string, React.ReactNode> = {
    "crown": <FaCrown className="text-yellow-400" size={24} />,
    "air-balloon": <GiAirBalloon className="text-blue-400" size={20} />,
    "rocket": <IoMdRocket className="text-yellow-400" size={20} />,
    "flash": <IoMdFlash className="text-blue-400" size={20} />,
    "home": <FaHome className="text-green-400" size={20} />,
    "mechanic": <GiMechanicGarage className="text-orange-400" size={20} />,
    "hospital": <FaHospital className="text-red-400" size={20} />,
    "windy": <GiWindyStripes className="text-teal-400" size={20} />
  };

  const campaigns: CampaignWithIconComponent[] = campaignData.campaigns.map(campaign => ({
    ...campaign,
    iconComponent: iconMap[campaign.icon] || null
  }));

  const featuredCampaign = campaigns.find(c => c.featured);
  const regularCampaigns = campaigns.filter(c => !c.featured);

  const navigateToCampaign = (slug: string) => {
    router.push(`/campaigns/${slug}`);
  };

  return (
    <main className="w-full">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      
      <div className="py-6">
        <TextGenerateEffect 
          words="Campaign Portfolio" 
          className="text-center text-2xl sm:text-3xl md:text-4xl font-bold"
        />
        <div className="mt-6">
          <BentoGrid className="">
            {featuredCampaign && (
              <BentoGridItem
                title={featuredCampaign.title}
                description={featuredCampaign.description}
                className={`${featuredCampaign.className} min-h-[20rem]`}
                header={
                  <div className="relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/50 rounded-xl md:rounded-3xl" />
                    <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col">
                      <div className="flex items-center gap-2 mb-2">
                        {featuredCampaign.iconComponent}
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
                      <div className="mt-4">
                        <MagicButton
                          title="View Details"
                          icon={<FaArrowRight />}
                          position="right"
                          otherClasses="bg-[#161A31] hover:bg-[#161A31]/80 w-full text-sm"
                          handleClick={() => navigateToCampaign(featuredCampaign.slug)}
                        />
                      </div>
                    </div>
                  </div>
                }
                style={{
                  background: "linear-gradient(135deg, #4c1d95 0%, #701a75 100%)",
                  borderColor: "rgba(255,255,255,0.1)"
                }}
              />
            )}

            {regularCampaigns.map((campaign, i) => (
              <BentoGridItem
                key={i}
                title=''
                description=''
                className=''
                header={
                  <div className="flex flex-col h-full p-4">
                    <div className="flex justify-between items-start gap-2">
                      <div className="flex-shrink-0">
                        {campaign.iconComponent}
                      </div>
                      <div className="flex flex-wrap gap-1 justify-end">
                        {campaign.stats.map((stat, j) => (
                          <div key={j} className="px-2 py-1 bg-black/30 rounded-full text-xs sm:text-sm">
                            <span className="font-bold">{stat.value}</span> {stat.label}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-2">
                      <h3 className="text-lg font-bold">{campaign.title}</h3>
                      <p className="text-sm text-gray-300">{campaign.description}</p>
                    </div>
                    <div className="mt-auto pt-4">
                      <MagicButton
                        title="View Details"
                        icon={<FaArrowRight />}
                        position="right"
                        otherClasses="bg-[#161A31] hover:bg-[#161A31]/80 w-full text-sm"
                        handleClick={() => navigateToCampaign(campaign.slug)}
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
          </BentoGrid>
        </div>
      </div>
    </main>
  );
}