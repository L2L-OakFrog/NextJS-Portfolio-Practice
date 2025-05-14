// SectionCarousel.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

type CarouselSection = {
  id: string;
  title: string;
  subtitle: string;
  items: {
    title: string;
    description: string;
    icon?: string;
    number?: string;
  }[];
  bannerImage: string;
  themeColor: string;
};

const SectionCarousel = ({ sections }: { sections: CarouselSection[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === sections.length - 1 ? 0 : prev + 1));
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? sections.length - 1 : prev - 1));
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev === sections.length - 1 ? 0 : prev + 1));
      }, 8000); // Change slide every 8 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, sections.length]);

  const currentSection = sections[currentIndex];

  return (
    <div className="relative z-10 bg-gradient-to-b from-blue-900/20 to-black">
      {/* Grid Background */}
      <div className="absolute inset-0 dark:bg-grid-white/[0.03] bg-grid-black/[0.2]">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 rounded-full p-3 text-white z-20 transition-all"
          aria-label="Previous section"
        >
          <FaChevronLeft />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 rounded-full p-3 text-white z-20 transition-all"
          aria-label="Next section"
        >
          <FaChevronRight />
        </button>

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {currentSection.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {currentSection.subtitle}
          </p>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-96 rounded-xl overflow-hidden border border-white/10">
                <Image
                src={currentSection.bannerImage}
                alt={currentSection.title}
                fill
                className="object-cover"
                />
            </div>

          {/* Items List */}
          <div>
            <ul className="space-y-6">
              {currentSection.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  {item.number ? (
                    <div className={`flex-shrink-0 mt-1 mr-4 text-${currentSection.themeColor}-400 font-bold text-lg`}>
                      {item.number}
                    </div>
                  ) : (
                    <div className={`flex-shrink-0 mt-1 mr-4 text-2xl text-${currentSection.themeColor}-400`}>
                      {item.icon}
                    </div>
                  )}
                  <div>
                    <h4 className="text-white font-semibold">
                      {item.title}
                    </h4>
                    <p className="text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Dots Indicator */}
        {/* <div className="flex justify-center mt-12 gap-2">
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? `bg-${currentSection.themeColor}-500 w-6` : 'bg-white/30'}`}
              aria-label={`Go to section ${index + 1}`}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default SectionCarousel;