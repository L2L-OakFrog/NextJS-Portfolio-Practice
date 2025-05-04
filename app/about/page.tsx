// AboutPage.tsx
'use client';
import { BentoGrid } from "@/components/ui/BentoGrid2";
import { BentoGridItem } from "@/components/ui/BentoGridItem";
import dynamic from "next/dynamic";
import MagicButton from "@/components/ui/MagicButton";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { FaCommentAlt, FaCrown, FaHome, FaHospital, FaLightbulb, FaBullseye, FaEye, FaChartLine } from "react-icons/fa";
import { GiAirBalloon, GiMechanicGarage, GiWindyStripes } from "react-icons/gi";
import { IoMdRocket, IoMdFlash } from "react-icons/io";
import Link from "next/link";
import { IoMdMegaphone } from "react-icons/io";
import { useRouter } from "next/navigation";
import { SuccessMetrics } from "@/components/ui/SuccessMetrics";
import CoreValues from "@/components/ui/CoreValues";
import VideoGallery from "@/components/ui/VideoGallery";

const GlobeDemo = dynamic(
  () => import("@/components/ui/GridGlobe").then((mod) => mod.GlobeDemo as React.ComponentType<any>),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center w-full h-full bg-gray-800/50">
        <div className="animate-pulse text-white">Loading globe...</div>
      </div>
    )
  }
);

type AboutItem = {
  title: string;
  description: string;
  className: string;
  style: React.CSSProperties;
  header?: React.ReactNode;
  children?: React.ReactNode;
  minHeight?: string;
};

const StatBadge = ({ value, label }: { value: string; label: string }) => (
  <div className="bg-black/40 p-2 rounded text-center">
    <div className="font-bold text-sm">{value}</div>
    <div className="text-xs opacity-80">{label}</div>
  </div>
);

export default function AboutPage() {
  const router = useRouter();

  const aboutItems: AboutItem[] = [
    // Vision Section
    {
      title: "Our Vision",
      description: "Redefining telemarketing excellence globally",
      className: "md:col-span-1 col-span-3",
      style: {
        background: "linear-gradient(135deg, #1e40af 0%, #7c3aed 100%)",
      },
      minHeight: "min-h-[20rem]",
      children: (
        <div className="p-4">
          <div className="flex items-center gap-3 mb-4">
            <FaEye className="text-yellow-300 text-xl" />
            <h3 className="text-lg font-bold">Vision Statement</h3>
          </div>
          <p className="text-sm">
            Our vision at RingCenter Solutions is to become a global leader in telemarketing and lead conversion services, 
            renowned for our excellence, reliability, and innovation. We aspire to redefine the telemarketing industry by 
            setting new standards of efficiency, transparency, and customer satisfaction.
          </p>
        </div>
      ),
    },

    // Mission Section
    {
      title: "Our Mission",
      description: "Empowering businesses through exceptional telemarketing",
      className: "md:col-span-1 col-span-3",
      style: {
        background: "linear-gradient(135deg, #065f46 0%, #0d9488 100%)",
      },
      minHeight: "min-h-[20rem]",
      children: (
        <div className="p-4">
          <div className="flex items-center gap-3 mb-4">
            <FaBullseye className="text-blue-300 text-xl" />
            <h3 className="text-lg font-bold">Mission Statement</h3>
          </div>
          <p className="text-sm">
            At RingCenter Solutions, our mission is to empower businesses with seamless and cost-effective telemarketing 
            services that drive measurable results. We strive to bridge the gap between potential and success by converting 
            leads into loyal customers through tailored strategies and exceptional service.
          </p>
        </div>
      ),
    },

    // Core Values
    {
      title: "Core Values",
      description: "The principles that guide our work",
      className: "md:col-span-1 col-span-3",
      style: {
        background: "linear-gradient(135deg, #7e22ce 0%, #c026d3 100%)",
      },
      minHeight: "min-h-[20rem]",
      children: <CoreValues />,
    },

    // Our Story
    {
      title: "Our Story",
      description: "From humble beginnings to industry leaders",
      className: "md:col-span-3 col-span-3",
      style: {
        background: "linear-gradient(135deg, #1e3a8a 0%, #7e22ce 100%)",
      },
      minHeight: "min-h-[16rem]",
      children: (
        <div className="p-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-black/20 p-4 rounded-lg">
              <h4 className="font-bold flex items-center gap-2 mb-2">
                <FaLightbulb className="text-yellow-400" />
                Founded
              </h4>
              <p className="text-sm">
                Established in 2015 with a small team of passionate telemarketing professionals.
              </p>
            </div>
            <div className="bg-black/20 p-4 rounded-lg">
              <h4 className="font-bold flex items-center gap-2 mb-2">
                <FaChartLine className="text-green-400" />
                Growth
              </h4>
              <p className="text-sm">
                Expanded to serve 450+ clients across multiple industries worldwide.
              </p>
            </div>
            <div className="bg-black/20 p-4 rounded-lg">
              <h4 className="font-bold flex items-center gap-2 mb-2">
                <IoMdRocket className="text-blue-400" />
                Today
              </h4>
              <p className="text-sm">
                Recognized as a trusted partner for lead conversion with 35% average conversion boost.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    /* {
      title: "Success Metrics",
      description: "Documented campaign results:",
      className: "md:col-span-3 col-span-3",
      style: {
        background: "linear-gradient(135deg, #4c1d95 0%, #701a75 100%)",
      },
      minHeight: "min-h-[20rem] md:min-h-[24rem]",
      children: (
        <div className="flex flex-col h-full p-2">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
            <div className="bg-black/30 p-3 rounded-lg">
              <h4 className="font-bold text-blue-400 text-sm sm:text-base">Solar Campaign</h4>
              <p className="text-xs sm:text-sm mt-1">45% increase in qualified leads</p>
            </div>
            <div className="bg-black/30 p-3 rounded-lg">
              <h4 className="font-bold text-blue-400 text-sm sm:text-base">MCA Campaign</h4>
              <p className="text-xs sm:text-sm mt-1">35% improvement in approvals</p>
            </div>
            <div className="bg-black/30 p-3 rounded-lg">
              <h4 className="font-bold text-blue-400 text-sm sm:text-base">Real Estate</h4>
              <p className="text-xs sm:text-sm mt-1">50% higher conversion rate</p>
            </div>
          </div>
        </div>
      ),
    }, */

    // Success Metrics
    {
      title: "Success Metrics",
      description: "Documented campaign results across our specialties:",
      className: "md:col-span-3 col-span-3",
      style: {
        background: "linear-gradient(135deg, #4c1d95 0%, #701a75 100%)",
      },
      minHeight: "min-h-[24rem]",
      children: (
        <div className="flex flex-col h-full p-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-4">
            {/* MCA Financing */}
            <div className="bg-black/30 p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <FaCrown className="text-yellow-400" size={18} />
                <h4 className="font-bold text-blue-400 text-sm sm:text-base">MCA Financing</h4>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <StatBadge value="94%" label="Conv. Rate" />
                <StatBadge value="$5.8M" label="Funded" />
                <StatBadge value="7+" label="Deals/Mo" />
              </div>
            </div>

            {/* Air Duct Cleaning */}
            <div className="bg-black/30 p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <GiAirBalloon className="text-blue-400" size={18} />
                <h4 className="font-bold text-blue-400 text-sm sm:text-base">Air Duct Cleaning</h4>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <StatBadge value="3-4" label="Sales/Day" />
                <StatBadge value="1wk" label="First Results" />
              </div>
            </div>

            {/* Solar Energy */}
            <div className="bg-black/30 p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <IoMdRocket className="text-yellow-400" size={18} />
                <h4 className="font-bold text-blue-400 text-sm sm:text-base">Solar Energy</h4>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <StatBadge value="78%" label="Conv. Rate" />
                <StatBadge value="450+" label="Leads" />
              </div>
            </div>

            {/* LED Lighting */}
            <div className="bg-black/30 p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <IoMdFlash className="text-blue-400" size={18} />
                <h4 className="font-bold text-blue-400 text-sm sm:text-base">LED Lighting</h4>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <StatBadge value="85%" label="Adoption" />
                <StatBadge value="1.2K" label="Installs" />
              </div>
            </div>

            {/* Home Improvement */}
            <div className="bg-black/30 p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <FaHome className="text-green-400" size={18} />
                <h4 className="font-bold text-blue-400 text-sm sm:text-base">Home Improvement</h4>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <StatBadge value="65%" label="Conv. Rate" />
                <StatBadge value="320+" label="Projects" />
              </div>
            </div>

            {/* MEP Services */}
            <div className="bg-black/30 p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <GiMechanicGarage className="text-orange-400" size={18} />
                <h4 className="font-bold text-blue-400 text-sm sm:text-base">MEP Services</h4>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <StatBadge value="7+" label="Designs/Mo" />
                <StatBadge value="89%" label="Satisfaction" />
              </div>
            </div>
          </div>
          {/* <div className="mt-auto">
            <MagicButton
              title="View All Campaigns"
              icon={<IoMdMegaphone />}
              position="right"
              otherClasses="bg-[#161A31] hover:bg-[#161A31]/80 w-full text-sm"
              handleClick={() => router.push('/campaigns')}
            />
          </div> */}
        </div>
      ),
    },

    // Video Gallery
    {
      title: "In Action",
      description: "See our work and client testimonials",
      className: "md:col-span-3 col-span-3",
      style: {
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
      },
      minHeight: "min-h-[24rem]",
      children: <VideoGallery />,
    },
    /* {
      title: "Performance Metrics",
      description: "Detailed metrics across all services",
      className: "md:col-span-3 col-span-3",
      style: {
        background: "linear-gradient(135deg, #4c1d95 0%, #701a75 100%)",
      },
      minHeight: "min-h-[24rem] md:min-h-[28rem]",
      children: (
        <div className="flex flex-col h-full p-4">
          <MetricsDashboard
            title="Service Performance"
            description="Key metrics across all our service offerings"
            services={[
              {
                service: "MCA Financing",
                chartType: "",
                metrics: [
                  { name: "Finance Amount", value: 100, unit: "K" },
                  { name: "Approval Rate", value: 94, unit: "%" },
                  { name: "Deals/Month", value: 7 },
                  { name: "Avg. Funding", value: 58, unit: "K" },
                ],
              },{
            service: "Business Loans",
            chartType: "bar",
            metrics: [
              { name: "Funded Amount", value: 75, unit: "K" },
              { name: "Deals/Month", value: 5 },
              { name: "Approval Rate", value: 82, unit: "%" },
              { name: "Avg. Funding", value: 42, unit: "K" },
            ],
          },
              {
                service: "Solar Energy",
                chartType: "line",
                metrics: [
                  { name: "Loss in Generation", value: 450 },
                  { name: "Installations", value: 120 },
                  { name: "Conversion", value: 78, unit: "%" },
                  { name: "Avg. Savings", value: 150, unit: "/mo" },
                ],
              },
              {
                service: "Home Improvement",
                chartType: "pie",
                metrics: [
                  { name: "Projects", value: 320 },
                  { name: "Conversion", value: 65, unit: "%" },
                  { name: "Avg. Value", value: 45, unit: "K" },
                  { name: "Repeat Clients", value: 42, unit: "%" },
                ],
              },
            ]}
          />
        </div>
      ),
    }, */

    //Global Reach
    {
      title: "Global Reach",
      description: "Serving clients worldwide with our expert network across 25+ countries",
      className: "md:col-span-2 col-span-3 relative",
      style: {
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
      },
      minHeight: "min-h-[24rem] md:min-h-[28rem]",
      header: (
        <div className="absolute inset-0 z-0">
          <GlobeDemo />
        </div>
      ),
    },

    // Get Started
    {
      title: "Get Started",
      description: "Contact us today:",
      className: "md:col-span-1 col-span-3",
      style: {
        background: "linear-gradient(135deg, #1e3a8a 0%, #0ea5e9 100%)",
      },
      minHeight: "min-h-[12rem] md:min-h-[16rem]",
      children: (
        <div className="flex flex-col h-full justify-end p-4">
          {/* <MagicButton
            title="Contact Us"
            icon={<FaCommentAlt size={18} />}
            position="right"
            handleClick={() => router.push('/contact')}
            otherClasses="w-full"
          /> */}
          <Link href="/contact" className="flex items-center justify-center gap-2 text-white hover:text-blue-300 transition-colors">
            <FaCommentAlt size={18} />
            <span className="text-sm sm:text-base">Contact Form</span>
          </Link>
        </div>
      ),
    },
  ];

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto px-4 sm:px-6">
      <div className="w-full pt-12 sm:pt-16 pb-6 sm:pb-8">
        <TextGenerateEffect 
          words="About RingCenter Solutions" 
          className="text-center text-2xl sm:text-3xl md:text-4xl font-bold"
        />
        
        <div className="max-w-6xl mx-auto mt-4 sm:mt-8 w-full">
          <BentoGrid 
            cols={3} 
            gap="md" 
            className=""
          >
            {aboutItems.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                className={`${item.className} ${item.minHeight} p-3 sm:p-4`}
                style={item.style}
                header={item.header}
                titleClassName="text-lg sm:text-xl"
                descriptionClassName="md:text-lg sm:text-sm"
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