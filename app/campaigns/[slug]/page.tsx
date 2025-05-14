"use client";
import { FaArrowLeft, FaCrown, FaChartLine } from "react-icons/fa";
import MagicButton from "@/components/ui/MagicButton";
import { useRouter } from "next/navigation";
import campaignData from '../../../data/campaign-data.json';

type CampaignStat = {
  value: string;
  label: string;
};

type CampaignDetails = {
  slug: string;
  title: string;
  description: string;
  stats: CampaignStat[];
  overview: string;
  strategies: string[];
  timeline: string;
  featured?: boolean;
};

export default function CampaignDetails({ params }: { params: { slug: string } }) {
  const router = useRouter();

  const campaign = campaignData.campaigns.find(c => c.slug === params.slug);

  if (!campaign) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Campaign Not Found</h1>
          <MagicButton
            title="Back to Campaigns"
            icon={<FaArrowLeft />}
            position="left"
            handleClick={() => router.push('/campaigns')}
          />
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen py-8 sm:py-12">
      <div className="mx-auto">
        <div className="mb-6 sm:mb-8">
          <MagicButton
            title="Back to Campaigns"
            icon={<FaArrowLeft />}
            position="left"
            handleClick={() => router.push('/campaigns')}
            otherClasses="text-sm sm:text-base"
          />
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl md:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            <div className="lg:w-1/3">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 sm:mb-6">
                <div className="text-3xl sm:text-4xl">
                  {campaign.featured ? (
                    <FaCrown className="text-yellow-400" size={28} />
                  ) : (
                    <FaChartLine className="text-blue-400" size={28} />
                  )}
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold">{campaign.title}</h1>
                  {campaign.featured && (
                    <span className="inline-flex items-center gap-1 mt-2 px-2 py-1 bg-yellow-400/20 rounded-full text-xs sm:text-sm text-yellow-400">
                      <FaCrown size={12} /> TOP PERFORMER
                    </span>
                  )}
                </div>
              </div>
              
              <p className="text-base sm:text-lg text-slate-300 mb-6">{campaign.description}</p>
              
              <div className="bg-black/30 rounded-lg sm:rounded-xl p-4 sm:p-6 mb-6">
                <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
                  <FaChartLine size={18} /> Campaign Performance
                </h2>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {campaign.stats.map((stat, index) => (
                    <div key={index} className="bg-slate-800/50 p-3 sm:p-4 rounded-lg">
                      <p className="text-xl sm:text-2xl font-bold">{stat.value}</p>
                      <p className="text-xs sm:text-sm text-slate-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 bg-slate-800/50 rounded-lg sm:rounded-xl p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Campaign Details</h2>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-2">Overview</h3>
                  <p className="text-sm sm:text-base text-slate-300">
                    {campaign.overview}
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-2">Key Strategies</h3>
                  <ul className="list-disc pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base text-slate-300">
                    {campaign.strategies.map((strategy, index) => (
                      <li key={index}>{strategy}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-2">Results Timeline</h3>
                  <p className="text-sm sm:text-base text-slate-300">
                    {campaign.timeline}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}