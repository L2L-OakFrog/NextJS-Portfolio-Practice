// app/additional-services/web-services/page.tsx
"use client";
import { BentoGrid } from "@/components/ui/BentoGrid2";
import { BentoGridItem } from "@/components/ui/BentoGridItem";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { Spotlight } from "@/components/ui/Spotlight";
import { FaCode, FaServer, FaSearch, FaCheckCircle } from "react-icons/fa";
import { FiLayers } from "react-icons/fi";
import webServicesData from '../../../data/web-services-data.json';

export default function WebServicesPage() {
  const iconMap: Record<string, React.ReactNode> = {
    "frontend": <FiLayers className="text-blue-300" size={24} />,
    "backend": <FaServer className="text-purple-300" size={24} />,
    "testing": <FaCheckCircle className="text-green-300" size={24} />,
    "seo": <FaSearch className="text-yellow-300" size={24} />
  };

  return (
    <main className="w-full">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <TextGenerateEffect 
            words="Web Development Services" 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          />
          <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
            Comprehensive web solutions tailored to your business needs. From frontend to backend, 
            testing to SEO - we've got you covered.
          </p>
        </div>

        <BentoGrid cols={2} gap="md">
          {webServicesData.services.map((service, index) => (
            <BentoGridItem
              key={index}
              title={service.title}
              description={service.description}
              className={`${service.className} min-h-[18rem]`}
              style={{
                borderColor: "rgba(255,255,255,0.1)"
              }}
            >
              <div className="relative h-full p-6 flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/10 rounded-xl">
                    {iconMap[service.icon]}
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                
                <div className="flex-1 grid grid-cols-2 gap-3">
                  {service.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <FaCode className="mt-1 flex-shrink-0 text-white/70" size={14} />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </BentoGridItem>
          ))}
        </BentoGrid>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Why Choose Our Services?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h4 className="font-bold mb-2">Proven Expertise</h4>
              <p className="text-neutral-400 text-sm">
                6+ years delivering high-quality web solutions for clients worldwide.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h4 className="font-bold mb-2">Modern Stack</h4>
              <p className="text-neutral-400 text-sm">
                Using cutting-edge technologies to build fast, scalable applications.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h4 className="font-bold mb-2">End-to-End</h4>
              <p className="text-neutral-400 text-sm">
                Full service from design to deployment with ongoing support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}