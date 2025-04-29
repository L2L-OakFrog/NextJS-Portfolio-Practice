"use client";
import { FaArrowLeft, FaCrown, FaChartLine } from "react-icons/fa";
import MagicButton from "@/components/ui/MagicButton";
import { useRouter } from "next/navigation";

type CampaignStat = {
  value: string;
  label: string;
};

type CampaignDetails = {
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

  // Campaign data for details page
  const campaignData: Record<string, CampaignDetails> = {
  "mca-financing": {
    title: "MCA Financing",
    description: "6 years specializing in merchant cash advance lead conversion",
    stats: [
      { value: "94%", label: "Conv. Rate" },
      { value: "$5.8M", label: "Funded" },
      { value: "7+", label: "Deals/Mo" }
    ],
    overview: "This campaign focuses on providing merchant cash advances to small businesses with quick approval processes and flexible repayment terms. With 6 years of specialization, we've perfected the art of converting leads into funded deals.",
    strategies: [
      "Targeted outreach to small business owners in specific industries",
      "Customized funding solutions based on daily credit card receipts",
      "Quick approval process with minimal paperwork",
      "Flexible repayment terms tied to business revenue"
    ],
    timeline: "Clients typically see funding within 48 hours of approval, with repayment structured as a percentage of daily credit card sales. The average campaign runs for 6-12 months with weekly reconciliation.",
    featured: true
  },
  "air-duct-cleaning": {
    title: "Air Duct Cleaning",
    description: "Central AC cleaning campaign with rapid results",
    stats: [
      { value: "3-4", label: "Sales/Day" },
      { value: "1wk", label: "First Results" }
    ],
    overview: "Specialized campaign targeting homeowners with central air conditioning systems in need of cleaning and maintenance. Focused on health benefits and energy efficiency improvements.",
    strategies: [
      "Seasonal targeting before peak AC usage months",
      "Educational content on indoor air quality benefits",
      "Bundle discounts for multiple services",
      "Follow-up sequence for non-converters"
    ],
    timeline: "Most conversions happen within the first week of contact, with services typically scheduled within 2-3 weeks. The average customer sees a 15-20% improvement in AC efficiency post-cleaning."
  },
  "solar-energy": {
    title: "Solar Energy",
    description: "B2B solar solutions for Australian government initiatives",
    stats: [
      { value: "78%", label: "Conv. Rate" },
      { value: "450+", label: "Leads" }
    ],
    overview: "Business-to-business solar energy solutions targeting government initiatives and commercial properties in Australia. Specializing in large-scale installations with government rebates.",
    strategies: [
      "Government incentive education programs",
      "ROI-focused financial modeling",
      "Commercial property targeting strategy",
      "Long-term maintenance packages"
    ],
    timeline: "Sales cycle typically 60-90 days with installation occurring 30-45 days after contract signing. Most clients see ROI within 3-5 years depending on energy usage."
  },
  "led-lighting": {
    title: "LED Lighting",
    description: "Australian government energy-saving program",
    stats: [
      { value: "85%", label: "Adoption" },
      { value: "1.2K", label: "Installs" }
    ],
    overview: "Energy efficiency program promoting LED lighting upgrades for businesses and government facilities across Australia. Focused on long-term cost savings and sustainability.",
    strategies: [
      "Energy savings calculator with real-time projections",
      "Government rebate assistance programs",
      "Case studies from similar businesses",
      "Free lighting audit offer"
    ],
    timeline: "Most projects completed within 2-4 weeks of initial contact, with immediate energy savings. Average business sees 40-60% reduction in lighting energy costs."
  },
  "home-improvement": {
    title: "Home Improvement",
    description: "Specialized home remodeling campaigns",
    stats: [
      { value: "65%", label: "Conv. Rate" },
      { value: "320+", label: "Projects" }
    ],
    overview: "Targeted campaigns for homeowners looking to remodel or upgrade their living spaces. Specializing in kitchen and bathroom renovations with premium materials.",
    strategies: [
      "Before/after visualizations with 3D modeling",
      "Flexible financing options",
      "Local contractor network with verified reviews",
      "Seasonal promotion timing"
    ],
    timeline: "Projects typically begin 4-6 weeks after initial contact, with completion times varying by scope. Average kitchen remodel takes 6-8 weeks from contract signing."
  },
  "mep-services": {
    title: "MEP Services",
    description: "Mechanical, electrical & plumbing B2B solutions",
    stats: [
      { value: "7+", label: "Designs/Mo" },
      { value: "89%", label: "Satisfaction" }
    ],
    overview: "Comprehensive mechanical, electrical, and plumbing services for commercial properties. Specializing in energy-efficient designs for office buildings and retail spaces.",
    strategies: [
      "Preventative maintenance programs with IoT monitoring",
      "24/7 emergency service guarantees",
      "Energy efficiency audits with actionable reports",
      "Custom design solutions for unique spaces"
    ],
    timeline: "Design phase typically 2-4 weeks, with implementation varying based on project complexity. Most commercial projects complete within 3-6 months."
  },
  "medicaid-services": {
    title: "Medicaid Services",
    description: "Inbound rehab center admissions coordination",
    stats: [
      { value: "95%", label: "Accuracy" },
      { value: "200+", label: "Placements" }
    ],
    overview: "Coordination service for rehab center admissions through Medicaid programs. Specializing in substance abuse treatment placements with high success rates.",
    strategies: [
      "Family education sessions with certified counselors",
      "Insurance navigation assistance",
      "Personalized treatment matching algorithm",
      "Post-placement follow-up support"
    ],
    timeline: "Placements typically occur within 72 hours of initial contact, with treatment starting immediately. Average program duration 30-90 days depending on needs."
  },
  "exhaust-fans": {
    title: "Exhaust Fans",
    description: "Australian government energy efficiency program",
    stats: [
      { value: "82%", label: "Conv. Rate" },
      { value: "500+", label: "Installs" }
    ],
    overview: "Energy efficiency program focused on commercial exhaust fan upgrades for improved ventilation and energy savings. Targeting restaurants, factories, and commercial kitchens.",
    strategies: [
      "Energy savings projections with payback timelines",
      "Government rebate processing assistance",
      "Installation financing options",
      "Preventative maintenance packages"
    ],
    timeline: "Installations typically completed within 2 weeks of contract signing, with immediate energy savings. Most clients see 30-50% reduction in ventilation energy costs."
  }
};

  const campaign = campaignData[params.slug];

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
    <main className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
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
            {/* Left Column - Campaign Info */}
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

            {/* Right Column - Campaign Details */}
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