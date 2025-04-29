/* import { FaCrown, FaHome, FaHospital } from "react-icons/fa";
import { IoMdRocket, IoMdFlash } from "react-icons/io";
import { GiMechanicGarage, GiWindyStripes, GiAirBalloon } from "react-icons/gi";
import { Campaign } from "./types";
import { useRouter } from "next/navigation";
import React from "react";

// Properly typed icon creator function
const createIcon = (
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
  color: string,
  size: number = 20
): React.ReactElement => (
  <Icon className={`text-${color}-400`} size={size} />
);

export const useCampaigns = () => {
  const router = useRouter();

  const navigateToCampaign = (title: string) => () => {
    router.push(`/campaigns/${title.toLowerCase().replace(/\s+/g, '-')}`);
  };

  const campaigns: Campaign[] = [
    {
      title: "MCA Financing",
      description: "6 years specializing in merchant cash advance lead conversion",
      stats: [
        { value: "94%", label: "Conv. Rate" },
        { value: "$5.8M", label: "Funded" },
        { value: "7+", label: "Deals/Mo" }
      ],
      className: "md:col-span-2 col-span-3",
      icon: createIcon(FaCrown, "yellow", 24),
      action: navigateToCampaign("MCA Financing"),
      featured: true,
      details: {
        overview: "This campaign focuses on providing merchant cash advances...",
        strategies: [
          "Targeted outreach to small business owners",
          "Customized funding solutions"
        ],
        timeline: "Clients typically see funding within 48 hours..."
      }
    },
    {
      title: "Air Duct Cleaning",
      description: "Central AC cleaning campaign with rapid results",
      stats: [
        { value: "3-4", label: "Sales/Day" },
        { value: "1wk", label: "First Results" }
      ],
      className: "md:col-span-1 col-span-3",
      icon: createIcon(GiAirBalloon, "blue"),
      action: navigateToCampaign("Air Duct Cleaning"),
      details: {
        overview: "Specialized campaign targeting homeowners...",
        strategies: [
          "Seasonal targeting before peak AC usage",
          "Educational content on air quality"
        ],
        timeline: "Most conversions happen within the first week..."
      }
    },
    // ... other campaigns
  ];

  const getCampaignBySlug = (slug: string): Campaign | undefined => {
    return campaigns.find(c => 
      c.title.toLowerCase().replace(/\s+/g, '-') === slug
    );
  };

  return { campaigns, getCampaignBySlug };
}; */