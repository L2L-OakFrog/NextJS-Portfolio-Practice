// AboutPage.tsx
'use client';
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { GiGrowth } from "react-icons/gi";
import { IoMdRocket } from "react-icons/io";
import { useRouter } from "next/navigation";
import MagicButton from "@/components/ui/MagicButton";
import { Spotlight } from "@/components/ui/Spotlight";
import { BentoGrid } from "@/components/ui/BentoGrid2";
import VideoGallery from "@/components/ui/VideoGallery";
import { BentoGridItem } from "@/components/ui/BentoGridItem";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { FaCommentAlt, FaLightbulb, FaChartLine, FaHandshake, FaUsers, FaBullseye, FaEye } from "react-icons/fa";

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

export default function AboutPage() {
  const router = useRouter();
  
  // Professional image URLs from Unsplash
  const IMAGES = {
    TEAM: '/TEAM.avif', // Make sure this file exists in your public folder
    VISION: '/VISION.avif',
    MISSION: '/MISSION.avif',
    OFFICE: '/OFFICE.avif',
    GROWTH: '/GROWTH.avif',
    MODERN: '/MODERN.avif',
    GlobalNetwork: '/GlobalNetwork.avif',
    Innovation: '/Innovation.avif',
    CONVERSION_GRAPH: '/conversion-graph.jpg',
    SALES_GROWTH: '/sales-growth-chart.jpg',
    POWER_OF_CALL: '/power-of-call-banner.jpg'
  };

  const ValueCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <motion.div 
      className="bg-gradient-to-br from-black/30 to-black/20 p-4 rounded-xl border border-white/10 backdrop-blur-sm"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="text-xl text-blue-400">{icon}</div>
        <h4 className="font-bold">{title}</h4>
      </div>
      <p className="text-sm opacity-90">{description}</p>
    </motion.div>
  );

  const aboutItems: AboutItem[] = [
    // Combined About Section
    {
      title: "",
      description: "",
      className: "md:col-span-4 col-span-4",
      style: {
        background: `linear-gradient(rgba(30, 58, 138, 0.9), rgba(30, 58, 138, 0.9)), url(${IMAGES.TEAM})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      },
      minHeight: "min-h-[32rem]",
      children: (
        <div className="flex flex-col md:flex-row h-full gap-6 p-6">
          {/* Left Column - Our Journey (shows second on mobile) */}
          <div className="w-full md:w-1/3 flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
              <p className="text-sm mb-6">
                Dialers Hub is a premier telemarketing agency specializing in high-conversion lead generation 
                strategies. Since 2015, we've helped businesses worldwide achieve 
                their growth objectives through data-driven outreach.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FaChartLine className="text-blue-300" />
                Our Core Values
              </h3>
              <div className="grid grid-cols-1 gap-3">
                <ValueCard 
                  icon={<IoMdRocket />}
                  title="Efficiency"
                  description="Optimized processes for maximum results"
                />
                <ValueCard 
                  icon={<FaLightbulb />}
                  title="Innovation"
                  description="Cutting-edge technology solutions"
                />
                <ValueCard 
                  icon={<FaUsers />}
                  title="Customer Focus"
                  description="Tailored solutions for each client"
                />
                <ValueCard 
                  icon={<FaChartLine />}
                  title="Transparency"
                  description="Clear reporting and honest communication"
                />
              </div>
            </div>
          </div>

          {/* Right Column - About & Core Values (shows first on mobile) */}
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold mb-6">Our Journey</h2>
            
            <div className="space-y-6">
              {/* 2015 */}
              <motion.div 
                className="bg-black/30 p-5 rounded-xl border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <FaLightbulb className="text-yellow-400" />
                  <h4 className="font-bold">Founded in 2015</h4>
                </div>
                <p className="text-sm mb-4">
                  Started with a small team of passionate telemarketing professionals.
                </p>
                <div className="relative h-40 rounded-lg overflow-hidden">
                  <Image 
                    src={IMAGES.OFFICE}
                    alt="Early office"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Growth */}
              <motion.div 
                className="bg-black/30 p-5 rounded-xl border border-white/10"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <GiGrowth className="text-green-400" />
                  <h4 className="font-bold">Rapid Growth</h4>
                </div>
                <p className="text-sm mb-4">
                  Expanded to serve 450+ clients across multiple industries.
                </p>
                <div className="relative h-40 rounded-lg overflow-hidden">
                  <Image 
                    src={IMAGES.GROWTH}
                    alt="Team growth"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Today & Beyond */}
              {/* <motion.div 
                className="bg-black/30 p-5 rounded-xl border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <IoMdRocket className="text-blue-400" />
                  <h4 className="font-bold">Today & Beyond</h4>
                </div>
                <p className="text-sm mb-4">
                  Recognized as a trusted partner with 35% average conversion boost.
                  Now expanding our services to include AI-powered lead qualification.
                </p>
                <div className="relative h-40 rounded-lg overflow-hidden">
                  <Image 
                    src={IMAGES.MODERN}
                    alt="Modern office"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-blue-900/50 px-2 py-1 rounded text-xs">AI Integration</span>
                  <span className="bg-blue-900/50 px-2 py-1 rounded text-xs">Global Expansion</span>
                  <span className="bg-blue-900/50 px-2 py-1 rounded text-xs">Enhanced Analytics</span>
                </div>
              </motion.div> */}

              {/* Future Vision */}
              {/* <motion.div 
                className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-5 rounded-xl border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <FaChartLine className="text-purple-400" />
                  <h4 className="font-bold">Future Vision</h4>
                </div>
                <p className="text-sm mb-4">
                  Pioneering the next generation of telemarketing solutions with predictive analytics
                  and machine learning to deliver even higher conversion rates for our clients.
                </p>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <div className="bg-black/30 p-2 rounded text-center">
                    <div className="font-bold text-sm">+50%</div>
                    <div className="text-xs opacity-80">Target Conversion</div>
                  </div>
                  <div className="bg-black/30 p-2 rounded text-center">
                    <div className="font-bold text-sm">25+</div>
                    <div className="text-xs opacity-80">New Markets</div>
                  </div>
                </div>
              </motion.div> */}
            </div>
          </div>
        </div>
      ),
    },

    // Vision Section
    /* {
      title: "Our Vision",
      description: "Redefining telemarketing excellence globally",
      className: "md:col-span-2 col-span-3",
      style: {
        background: "linear-gradient(135deg, #1e40af 0%, #7c3aed 100%)",
      },
      minHeight: "min-h-[20rem]",
      children: (
        <div className="p-6 h-full flex flex-col">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaEye className="text-yellow-300 text-2xl" />
              <h3 className="text-xl font-bold">Vision Statement</h3>
            </div>
            <p className="text-sm md:text-base">
              Our vision at Dialers Hub is to become a global leader in telemarketing and lead conversion services, 
              renowned for our excellence, reliability, and innovation. We aspire to redefine the telemarketing industry by 
              setting new standards of efficiency, transparency, and customer satisfaction.
            </p>
          </motion.div>
          <div className="mt-auto grid grid-cols-2 md:grid-cols-3 gap-3">
            <div className="bg-black/30 p-3 rounded-lg border border-white/10">
              <h4 className="font-medium text-blue-300">Excellence</h4>
              <p className="text-xs mt-1">Unmatched service quality</p>
            </div>
            <div className="bg-black/30 p-3 rounded-lg border border-white/10">
              <h4 className="font-medium text-blue-300">Innovation</h4>
              <p className="text-xs mt-1">Cutting-edge solutions</p>
            </div>
            <div className="bg-black/30 p-3 rounded-lg border border-white/10 hidden md:block">
              <h4 className="font-medium text-blue-300">Global Reach</h4>
              <p className="text-xs mt-1">Worldwide impact</p>
            </div>
          </div>
        </div>
      ),
    }, */

    // Mission Section
    /* {
      title: "Our Mission",
      description: "Empowering businesses through exceptional telemarketing",
      className: "md:col-span-2 col-span-3",
      style: {
        background: "linear-gradient(135deg, #065f46 0%, #0d9488 100%)",
      },
      minHeight: "min-h-[20rem]",
      children: (
        <div className="p-6 h-full flex flex-col">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaBullseye className="text-blue-300 text-2xl" />
              <h3 className="text-xl font-bold">Mission Statement</h3>
            </div>
            <p className="text-sm md:text-base">
              At Dialers Hub, our mission is to empower businesses with seamless and cost-effective telemarketing 
              services that drive measurable results. We strive to bridge the gap between potential and success by converting 
              leads into loyal customers through tailored strategies and exceptional service.
            </p>
          </motion.div>
          <div className="mt-auto grid grid-cols-2 md:grid-cols-3 gap-3">
            <div className="bg-black/30 p-3 rounded-lg border border-white/10">
              <h4 className="font-medium text-green-300">Empowerment</h4>
              <p className="text-xs mt-1">Client success focus</p>
            </div>
            <div className="bg-black/30 p-3 rounded-lg border border-white/10">
              <h4 className="font-medium text-green-300">Results</h4>
              <p className="text-xs mt-1">Measurable impact</p>
            </div>
            <div className="bg-black/30 p-3 rounded-lg border border-white/10 hidden md:block">
              <h4 className="font-medium text-green-300">Tailored</h4>
              <p className="text-xs mt-1">Custom solutions</p>
            </div>
          </div>
        </div>
      ),
    }, */

    // Vision Section
    {
      title: "Our Vision",
      description: "Redefining telemarketing excellence globally",
      className: "md:col-span-2 col-span-3",
      style: {
        background: `linear-gradient(135deg, rgba(30, 64, 175, 0.8) 0%, rgba(124, 58, 237, 0.8) 100%), url(${IMAGES.VISION})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      },
      minHeight: "min-h-[24rem]",
      children: (
        <div className="relative h-full overflow-hidden rounded-xl">
          {/* Background Image */}
          {/* <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Vision background"
            fill
            className="object-cover absolute z-0"
          /> */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/40 z-1"></div>
          
          <div className="relative z-10 h-full flex flex-col p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/20 rounded-full">
                  <FaEye className="text-yellow-300 text-xl" />
                </div>
                <h3 className="text-xl font-bold">Vision Statement</h3>
              </div>
              <p className="text-sm md:text-base backdrop-blur-sm bg-black/30 p-4 rounded-lg">
                Our vision at Dialers Hub is to become a global leader in telemarketing and lead conversion services, 
                renowned for our excellence, reliability, and innovation.
              </p>
            </motion.div>

            <div className="mt-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-black/50 p-3 rounded-lg border border-white/10 backdrop-blur-sm"
              >
                <div className="relative h-24 mb-2 rounded-md overflow-hidden">
                  <Image 
                    src={IMAGES.GlobalNetwork}
                    alt="Global network"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-medium text-blue-300">Global Leadership</h4>
                <p className="text-xs">Expanding to 25+ countries</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-black/50 p-3 rounded-lg border border-white/10 backdrop-blur-sm"
              >
                <div className="relative h-24 mb-2 rounded-md overflow-hidden">
                  <Image 
                    src={IMAGES.Innovation}
                    alt="Innovation"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-medium text-blue-300">Innovation</h4>
                <p className="text-xs">AI-powered solutions</p>
              </motion.div>
            </div>
          </div>
        </div>
      ),
    },

    // Mission Section
    {
      title: "Our Mission",
      description: "Empowering businesses through exceptional telemarketing",
      className: "md:col-span-2 col-span-3",
      style: {
        background: `linear-gradient(135deg, rgba(6, 95, 70, 0.8) 0%, rgba(13, 148, 136, 0.8) 100%), url(${IMAGES.MISSION})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      },
      minHeight: "min-h-[24rem]",
      children: (
        <div className="relative h-full overflow-hidden rounded-xl">
          {/* Background Image */}
          {/* <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
            alt="Mission background"
            fill
            className="object-cover absolute z-0"
          /> */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 z-1"></div>
          
          <div className="relative z-10 h-full flex flex-col p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-teal-500/20 rounded-full">
                  <FaBullseye className="text-blue-300 text-xl" />
                </div>
                <h3 className="text-xl font-bold">Mission Statement</h3>
              </div>
              <p className="text-sm md:text-base backdrop-blur-sm bg-black/30 p-4 rounded-lg">
                At Dialers Hub, our mission is to empower businesses with seamless telemarketing 
                services that drive measurable results through tailored strategies.
              </p>
            </motion.div>

            <div className="mt-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-black/50 p-4 rounded-lg border border-white/10 backdrop-blur-sm"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative h-32 md:h-auto md:w-1/3 rounded-md overflow-hidden">
                    <Image 
                      src={IMAGES.OFFICE}
                      alt="Team working"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="font-bold text-green-300 mb-2">Our Approach</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-green-900/20 p-2 rounded">
                        <p className="text-xs font-medium">Data-Driven</p>
                      </div>
                      <div className="bg-green-900/20 p-2 rounded">
                        <p className="text-xs font-medium">Client-Focused</p>
                      </div>
                      <div className="bg-green-900/20 p-2 rounded">
                        <p className="text-xs font-medium">Results-Oriented</p>
                      </div>
                      <div className="bg-green-900/20 p-2 rounded">
                        <p className="text-xs font-medium break-all">Transparent</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      ),
    },

    // Video Gallery
    /* {
      title: "In Action",
      description: "See our work and client testimonials",
      className: "md:col-span-3 col-span-3",
      style: {
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
      },
      minHeight: "min-h-[24rem]",
      children: <VideoGallery />,
    }, */

    // Global Reach
    {
      title: "Global Reach",
      description: "Serving clients across 25+ countries",
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
      children: (
        <div className="relative z-10 p-6">
          <div className="bg-black/50 rounded-lg p-4 max-w-md">
            <h3 className="text-xl font-bold mb-3">Our Worldwide Network</h3>
            <p className="text-sm mb-4">
              With agents and partners across North America, Europe, and Asia, we deliver localized 
              telemarketing solutions with global expertise.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-900/50 px-2 py-1 rounded text-xs">United States</span>
              <span className="bg-blue-900/50 px-2 py-1 rounded text-xs">Canada</span>
              <span className="bg-blue-900/50 px-2 py-1 rounded text-xs">UK</span>
            </div>
          </div>
        </div>
      ),
    },

    // Get Started
    {
      title: "Ready to Grow?",
      description: "Let's start a conversation about your needs",
      className: "md:col-span-1 col-span-3",
      style: {
        background: "linear-gradient(135deg, #1e3a8a 0%, #0ea5e9 100%)",
      },
      minHeight: "min-h-[16rem]",
      children: (
        <div className="flex flex-col items-center justify-center h-full p-6 text-center">
          <FaHandshake className="text-4xl mb-4 text-white/90" />
          <h3 className="text-xl font-bold mb-3">Partner With Us</h3>
          <p className="text-sm mb-6">
            Discover how our proven telemarketing solutions can drive your business growth.
          </p>
          <MagicButton
            title="Contact Our Team"
            icon={<FaCommentAlt />}
            position="right"
            handleClick={() => router.push('/contact')}
            // otherClasses="bg-white/10 hover:bg-white/20"
          />
        </div>
      ),
    },
  ];

  return (
    <main className="w-full">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      
      <div className="py-6">
        <TextGenerateEffect 
          words={'About Dialer\'s Hub'}
          className="text-center text-2xl sm:text-3xl md:text-4xl font-bold"
        />
        
        <div className="mt-6">
          <BentoGrid cols={3} gap="md">
            {aboutItems.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                className={`${item.className} ${item.minHeight}`}
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