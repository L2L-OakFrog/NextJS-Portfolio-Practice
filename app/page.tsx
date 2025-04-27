import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { StatsSection } from "@/components/StatsSection";
import { FloatingNav } from "@/components/ui/FloatingNav";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "450+", label: "Active Clients" },
  { value: "35%", label: "Average Conversion Boost" },
  { value: "10+", label: "Daily Deals Closed" },
];

export default function Home() {
  return (
    <div className="w-full">
        <Hero />
        {/* <div className="bg-gradient-to-br from-black/60 to-green-900/30 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10"> */}
        <StatsSection stats={stats} className="" />
                    
        {/* </div> */}
        {/* <Grid /> */}
      </div>
  );
}