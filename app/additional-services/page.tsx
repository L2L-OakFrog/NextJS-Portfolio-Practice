// app/additional-services/page.tsx
"use client";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { Spotlight } from "@/components/ui/Spotlight";
import Link from "next/link";
import { FaArrowRight, FaCode, FaChartLine, FaGraduationCap } from "react-icons/fa";
import { FiLayers } from "react-icons/fi";

export default function AdditionalServicesPage() {
  const services = [
    {
      title: "Web Services",
      description: "Comprehensive web development solutions",
      icon: <FiLayers size={24} />,
      link: "/additional-services/web-services"
    },
    {
    //   title: "Consulting",
    //   description: "Expert guidance for your digital strategy",
      title: "Coming Soon",
      description: "",
      icon: <FaChartLine size={24} />,
    //   link: "/additional-services/consulting"
      link: ""
    },
    {
    //   title: "Training",
    //   description: "Skill development for your team",
      title: "Coming Soon",
      description: "",
      icon: <FaGraduationCap size={24} />,
    //   link: "/additional-services/training"
      link: ""
    }
  ];

  return (
    <main className="w-full">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <TextGenerateEffect 
            words="Additional Services" 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          />
          <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
            Explore our range of specialized services beyond dialing campaigns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="group bg-white/5 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-neutral-400 mb-6">{service.description}</p>
                <div className="mt-auto flex items-center gap-2 text-sm text-neutral-300 group-hover:text-white transition-colors">
                  <span>Learn more</span>
                  <FaArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}