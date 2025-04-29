import { ReactElement } from "react";

export interface CampaignStat {
  value: string;
  label: string;
}

export interface CampaignDetails {
  overview: string;
  strategies: string[];
  timeline: string;
}

export interface Campaign {
  title: string;
  description: string;
  stats: CampaignStat[];
  className: string;
  icon: ReactElement;
  action?: () => void;
  featured?: boolean;
  details?: CampaignDetails;
}