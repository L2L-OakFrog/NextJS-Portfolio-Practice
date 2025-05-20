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
import { BentoGridItem } from "@/components/ui/BentoGridItem";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { FaCommentAlt, FaLightbulb, FaChartLine, FaHandshake, FaUsers, FaBullseye, FaEye } from "react-icons/fa";
import aboutData from "@/data/aboutData.json";

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
  contentType: string;
};

export default function AboutPage() {
  const router = useRouter();
  
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

  const renderContent = (item: AboutItem) => {
    switch(item.contentType) {
      case 'combinedAbout':
        return (
          <div className="flex flex-col md:flex-row h-full gap-6 p-6">
            <div className="w-full md:w-1/3 flex flex-col gap-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
                <p className="text-sm mb-6">
                  Dialers Hub is a premier telemarketing agency specializing in high-conversion lead generation 
                  strategies. Since 2015, we&apos;ve helped businesses worldwide achieve 
                  their growth objectives through data-driven outreach.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <FaChartLine className="text-blue-300" />
                  Our Core Values
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {aboutData.coreValues.map((value, index) => (
                    <ValueCard 
                      key={index}
                      icon={value.icon === 'IoMdRocket' ? <IoMdRocket /> : 
                           value.icon === 'FaLightbulb' ? <FaLightbulb /> :
                           value.icon === 'FaUsers' ? <FaUsers /> :
                           <FaChartLine />}
                      title={value.title}
                      description={value.description}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-bold mb-6">Our Journey</h2>
              
              <div className="space-y-6">
                {aboutData.journey.map((journeyItem, index) => (
                  <motion.div 
                    key={index}
                    className="bg-black/30 p-5 rounded-xl border border-white/10"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      {journeyItem.icon === 'FaLightbulb' ? 
                        <FaLightbulb className="text-yellow-400" /> : 
                        <GiGrowth className="text-green-400" />}
                      <h4 className="font-bold">{journeyItem.title}</h4>
                    </div>
                    <p className="text-sm mb-4">{journeyItem.description}</p>
                    <div className="relative h-40 rounded-lg overflow-hidden">
                      <Image 
                        src={journeyItem.image}
                        alt={journeyItem.title}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </motion.div>
                ))}
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
        );
      
      case 'vision':
        return (
          <div className="relative h-full overflow-hidden rounded-xl">
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
                  {aboutData.visionDetails.statement}
                </p>
              </motion.div>

              <div className="mt-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
                {aboutData.visionDetails.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                    className="bg-black/50 p-3 rounded-lg border border-white/10 backdrop-blur-sm"
                  >
                    <div className="relative h-24 mb-2 rounded-md overflow-hidden">
                      <Image 
                        src={highlight.image}
                        alt={highlight.title}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                    <h4 className="font-medium text-blue-300">{highlight.title}</h4>
                    <p className="text-xs">{highlight.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'mission':
        return (
          <div className="relative h-full overflow-hidden rounded-xl">
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
                  {aboutData.missionDetails.statement}
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
                        src={aboutData.missionDetails.approach.image}
                        alt="Team working"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="font-bold text-green-300 mb-2">Our Approach</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {aboutData.missionDetails.approach.tags.map((tag, index) => (
                          <div key={index} className="bg-green-900/20 p-2 rounded">
                            <p className="text-xs font-medium">{tag}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        );
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
      
      case 'globalReach':
        return (
          <div className="relative z-10 p-6">
            <div className="bg-black/50 rounded-lg p-4 max-w-md">
              <h3 className="text-xl font-bold mb-3">Our Worldwide Network</h3>
              <p className="text-sm mb-4">
                {aboutData.globalReachDetails.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {aboutData.globalReachDetails.countries.map((country, index) => (
                  <span key={index} className="bg-blue-900/50 px-2 py-1 rounded text-xs">
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'getStarted':
        return (
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
            />
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <main className="w-full">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      
      <div className="py-6">
        <TextGenerateEffect 
          words="About Dialer's Hub"
          className="text-center text-2xl sm:text-3xl md:text-4xl font-bold"
        />
        
        <div className="mt-6">
          <BentoGrid cols={3} gap="md">
            {aboutData.aboutItems.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                className={`${item.className} ${item.minHeight}`}
                style={item.style}
                header={item.contentType === 'globalReach' ? (
                  <div className="absolute inset-0 z-0">
                    <GlobeDemo />
                  </div>
                ) : undefined}
                titleClassName="text-lg sm:text-xl"
                descriptionClassName="md:text-lg sm:text-sm"
              >
                {renderContent(item)}
              </BentoGridItem>
            ))}
          </BentoGrid>
        </div>
      </div>
    </main>
  );
}