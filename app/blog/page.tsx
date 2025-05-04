"use client";
import { FaArrowRight, FaCalendarAlt, FaChartLine, FaBookOpen, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import MagicButton from "@/components/ui/MagicButton";
import { useRouter } from "next/navigation";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { Spotlight } from "@/components/ui/Spotlight";
import { useState, useEffect } from "react";

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  stats: {
    value: string;
    label: string;
  }[];
  featured?: boolean;
};

export default function BlogPage() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "Maximizing Lead Conversion in Financial Services",
      excerpt: "Proven strategies to boost your MCA financing conversion rates beyond 90%",
      category: "Finance",
      date: "May 15, 2024",
      readTime: "8 min read",
      stats: [
        { value: "12K", label: "Views" },
        { value: "94%", label: "Engagement" }
      ],
      featured: true
    },
    {
      id: "2",
      title: "The Future of Solar Energy in Australia",
      excerpt: "How government initiatives are shaping the renewable energy market",
      category: "Energy",
      date: "April 28, 2024",
      readTime: "6 min read",
      stats: [
        { value: "3K", label: "Views" },
        { value: "78%", label: "Engagement" }
      ]
    },
    {
      id: "3",
      title: "Energy Efficiency Programs That Work",
      excerpt: "Case studies from successful LED lighting and exhaust fan campaigns",
      category: "Sustainability",
      date: "April 10, 2024",
      readTime: "5 min read",
      stats: [
        { value: "3K", label: "Views" },
        { value: "82%", label: "Engagement" }
      ]
    },
    {
      id: "4",
      title: "Home Improvement Marketing in 2024",
      excerpt: "What homeowners really want from remodeling services",
      category: "Marketing",
      date: "March 22, 2024",
      readTime: "7 min read",
      stats: [
        { value: "7K", label: "Views" },
        { value: "85%", label: "Engagement" }
      ]
    },
    {
      id: "5",
      title: "B2B Service Selling Techniques",
      excerpt: "How we increased MEP service contracts by 40%",
      category: "Business",
      date: "March 5, 2024",
      readTime: "9 min read",
      stats: [
        { value: "3K", label: "Views" },
        { value: "78%", label: "Engagement" }
      ]
    },
    {
      id: "6",
      title: "Healthcare Marketing Compliance",
      excerpt: "Navigating Medicaid services advertising regulations",
      category: "Healthcare",
      date: "February 18, 2024",
      readTime: "10 min read",
      stats: [
        { value: "3.8K", label: "Views" },
        { value: "95%", label: "Engagement" }
      ]
    }
  ];

  // Make sure featured post is first in the array
  const carouselPosts = [...blogPosts].sort((a, b) => (b.featured ? 1 : -1));

  const navigateToPost = (title: string) => {
    router.push(`/blog/${title.toLowerCase().replace(/\s+/g, '-')}`);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselPosts.length - 1 ? 0 : prev + 1));
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselPosts.length - 1 : prev - 1));
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === carouselPosts.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, carouselPosts.length]);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <main className="relative">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <TextGenerateEffect 
            words="Marketing Insights & Strategies" 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4"
          />
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-2 sm:px-0">
            Expert articles on lead generation, conversion optimization, and industry trends
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mb-12 sm:mb-16 overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {carouselPosts.map((post) => (
              <div 
                key={post.id}
                className="w-full flex-shrink-0 bg-gradient-to-r from-purple-900/50 to-blue-900/50"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      {post.featured && (
                        <span className="px-2 sm:px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm text-purple-300">
                          Featured Post
                        </span>
                      )}
                      <span className="text-xs sm:text-sm text-gray-400 flex items-center gap-1">
                        <FaCalendarAlt size={10} className="flex-shrink-0" /> {post.date}
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                      {post.title}
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-6">
                      {post.stats.map((stat, index) => (
                        <div key={index} className="bg-black/30 px-3 sm:px-4 py-1 sm:py-2 rounded-lg">
                          <p className="font-bold text-sm sm:text-lg">{stat.value}</p>
                          <p className="text-xs text-gray-400">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                    <MagicButton
                      title="Read Full Article"
                      icon={<FaArrowRight />}
                      position="right"
                      otherClasses="bg-[#161A31] hover:bg-[#161A31]/80 text-xs px-2 sm:px-3 py-1 sm:py-2"
                      handleClick={() => navigateToPost(post.title)}
                    />
                  </div>
                  <div className="hidden md:block bg-gradient-to-br from-purple-800 to-blue-900 relative min-h-[300px]">
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <FaBookOpen size={100} className="lg:w-[120px]" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 rounded-full p-2 sm:p-3 text-white z-10 transition-all"
            aria-label="Previous slide"
          >
            <FaChevronLeft />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 rounded-full p-2 sm:p-3 text-white z-10 transition-all"
            aria-label="Next slide"
          >
            <FaChevronRight />
          </button>
          
          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {carouselPosts.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${currentSlide === index ? 'bg-white w-4 sm:w-6' : 'bg-white/30'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {regularPosts.map((post) => (
            <div 
              key={post.id}
              className="bg-slate-900/50 rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-800"
            >
              <div className="p-4 sm:p-6 md:p-8">
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <span className="px-2 py-1 bg-slate-800 rounded-md text-xs text-blue-400">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <FaCalendarAlt size={10} className="flex-shrink-0" /> {post.date}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-5 line-clamp-2">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-1 sm:gap-2">
                    {post.stats.slice(0, 2).map((stat, index) => (
                      <div key={index} className="bg-slate-800/50 px-2 py-1 rounded text-xs">
                        <span className="font-bold">{stat.value}</span> {stat.label}
                      </div>
                    ))}
                  </div>
                </div>
                <MagicButton
                    title="Read"
                    icon={<FaArrowRight />}
                    position="right"
                    otherClasses="bg-[#161A31] hover:bg-[#161A31]/80 text-xs px-2 sm:px-3 py-1 sm:py-2"
                    handleClick={() => navigateToPost(post.title)}
                  />
              </div>
            </div>
          ))}
        </div>
        {/* Newsletter CTA */}
        {/* <div className="mt-12 sm:mt-16 bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Stay Updated</h3>
          <p className="text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto mb-4 sm:mb-6 px-2 sm:px-0">
            Subscribe to receive the latest marketing insights and strategies directly to your inbox
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-2 px-2 sm:px-0">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-slate-700/50 border border-slate-700 rounded-lg px-3 sm:px-4 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors">
              Subscribe
            </button>
          </div>
        </div> */}
      </div>
    </main>
  );
}