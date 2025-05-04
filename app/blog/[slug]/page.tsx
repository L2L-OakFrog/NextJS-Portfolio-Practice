"use client";
import { FaArrowLeft, FaCalendarAlt, FaChartLine, FaPenAlt, FaClock } from "react-icons/fa";
import MagicButton from "@/components/ui/MagicButton";
import { useRouter } from "next/navigation";

type BlogPost = {
  title: string;
  excerpt: string;
  stats: {
    value: string;
    label: string;
  }[];
  content: string[];
  date: string;
  readTime: string;
  author: string;
  featured?: boolean;
};

export default function BlogDetails({ params }: { params: { slug: string } }) {
  const router = useRouter();

  // Blog post data for details page
  const blogData: Record<string, BlogPost> = {
    "maximizing-lead-conversion-in-financial-services": {
      title: "Maximizing Lead Conversion in Financial Services",
      excerpt: "Proven strategies to boost your MCA financing conversion rates beyond 90%",
      stats: [
        { value: "12K", label: "Views" },
        { value: "94%", label: "Engagement" }
      ],
      content: [
        "In the competitive world of merchant cash advances, standing out requires more than just competitive rates. After six years of refining our approach, we've developed a system that consistently delivers conversion rates above 90%. Here's how we do it.",
        "First, we focus on precise targeting. Rather than casting a wide net, we use industry-specific criteria to identify businesses that are most likely to benefit from our services. This includes analyzing credit card processing volumes, business longevity, and industry trends.",
        "Our application process is designed for speed and simplicity. We've reduced the paperwork to just three essential documents, and our automated underwriting system can provide preliminary approval within 2 hours of receiving a complete application.",
        "Perhaps most importantly, we've developed a consultative sales approach. Rather than pushing products, our specialists work to understand each business's unique cash flow challenges and tailor solutions accordingly. This builds trust and dramatically improves conversion.",
        "Finally, our post-approval process ensures clients understand exactly how the advance will work. We provide clear repayment schedules and maintain open communication channels throughout the relationship."
      ],
      date: "May 15, 2024",
      readTime: "8 min read",
      author: "Sarah Johnson",
      featured: true
    },
    "the-future-of-solar-energy-in-australia": {
      title: "The Future of Solar Energy in Australia",
      excerpt: "How government initiatives are shaping the renewable energy market",
      stats: [
        { value: "8.5K", label: "Views" },
        { value: "78%", label: "Engagement" }
      ],
      content: [
        "Australia's solar energy sector is undergoing a transformation, driven by ambitious government targets and innovative financing models. The current administration has committed to making renewable energy 82% of the national grid by 2030, creating unprecedented opportunities for commercial solar providers.",
        "The most significant development has been the expansion of the Small-scale Renewable Energy Scheme (SRES) to include medium-sized commercial installations. This change has opened the market to businesses with energy needs between 100kW and 1MW - a sweet spot for many manufacturing facilities and retail chains.",
        "We've found success by focusing on three key areas: First, educating business owners about the long-term cost savings. Our proprietary modeling software can project 10-year savings with remarkable accuracy, making the ROI case compelling.",
        "Second, we've streamlined the approval and installation process. By working closely with local governments and utilities, we've reduced the typical project timeline from 6 months to just 90 days.",
        "Finally, we offer flexible financing options that align with business cash flows. Our power purchase agreements (PPAs) allow businesses to install solar with no upfront cost, paying only for the energy they use at rates below grid prices."
      ],
      date: "April 28, 2024",
      readTime: "6 min read",
      author: "Michael Chen"
    },
    "energy-efficiency-programs-that-work": {
      title: "Energy Efficiency Programs That Work",
      excerpt: "Case studies from successful LED lighting and exhaust fan campaigns",
      stats: [
        { value: "6.2K", label: "Views" },
        { value: "82%", label: "Engagement" }
      ],
      content: [
        "Energy efficiency might not be glamorous, but it delivers some of the most consistent ROI of any business upgrade. Through our work with the Australian government's energy efficiency programs, we've helped hundreds of businesses reduce their energy costs by 30-60% with simple lighting and ventilation upgrades.",
        "The key to our success has been focusing on measurable outcomes. Before any installation, we conduct a comprehensive energy audit that establishes baseline consumption. This allows us to precisely calculate projected savings and payback periods.",
        "For LED lighting conversions, we've developed a tiered approach that prioritizes high-usage areas first. This creates immediate savings that often fund subsequent phases of the project. Our data shows that businesses that follow this approach achieve full payback 30% faster than those that do complete conversions all at once.",
        "With exhaust fan upgrades, we focus on both energy efficiency and performance. Modern EC motors can reduce energy consumption by up to 70% while actually improving airflow. For commercial kitchens, this means better ventilation and lower costs - a rare win-win.",
        "The most successful implementations combine technology upgrades with operational adjustments. We provide training for staff on optimal equipment use and maintenance, ensuring the savings continue long after installation."
      ],
      date: "April 10, 2024",
      readTime: "5 min read",
      author: "David Wilson"
    }
  };

  const post = blogData[params.slug];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <MagicButton
            title="Back to Blog"
            icon={<FaArrowLeft />}
            position="left"
            handleClick={() => router.push('/blog')}
          />
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <MagicButton
            title="Back to Blog"
            icon={<FaArrowLeft />}
            position="left"
            handleClick={() => router.push('/blog')}
            otherClasses="text-sm sm:text-base"
          />
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl md:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl">
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Post Header */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 sm:mb-6">
              <div className="text-3xl sm:text-4xl">
                {post.featured ? (
                  <FaPenAlt className="text-yellow-400" size={28} />
                ) : (
                  <FaChartLine className="text-blue-400" size={28} />
                )}
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold">{post.title}</h1>
                {post.featured && (
                  <span className="inline-flex items-center gap-1 mt-2 px-2 py-1 bg-yellow-400/20 rounded-full text-xs sm:text-sm text-yellow-400">
                    <FaPenAlt size={12} /> FEATURED POST
                  </span>
                )}
              </div>
            </div>
            
            {/* Meta Information */}
            <div className="flex flex-wrap gap-4 text-sm sm:text-base text-slate-400 mb-6">
              <div className="flex items-center gap-2">
                <FaCalendarAlt size={14} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock size={14} />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>By {post.author}</span>
              </div>
            </div>
            
            {/* Excerpt */}
            <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
              <p className="text-lg italic">{post.excerpt}</p>
            </div>
            
            {/* Stats */}
            <div className="bg-black/30 rounded-lg sm:rounded-xl p-4 sm:p-6 mb-6">
              <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
                <FaChartLine size={18} /> Post Performance
              </h2>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {post.stats.map((stat, index) => (
                  <div key={index} className="bg-slate-800/50 p-3 sm:p-4 rounded-lg">
                    <p className="text-xl sm:text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs sm:text-sm text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-6">
              {post.content.map((paragraph, index) => (
                <p key={index} className="text-base sm:text-lg text-slate-300">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}