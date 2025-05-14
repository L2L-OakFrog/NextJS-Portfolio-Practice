"use client";
import { FaArrowLeft, FaCalendarAlt, FaChartLine, FaPenAlt, FaClock } from "react-icons/fa";
import MagicButton from "@/components/ui/MagicButton";
import { useRouter } from "next/navigation";
import blogData from '../../../data/blog-data.json';

type BlogPost = {
  id: string;
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
  sections?: {
    title: string;
    content: string[];
  }[];
};

export default function BlogDetails({ params }: { params: { slug: string } }) {
  const router = useRouter();

  // Find the post by converting the slug back to title format
  const post = blogData.posts.find(post => 
    post.title.toLowerCase().replace(/\s+/g, '-').replace(/\|/g, '').replace(/[^\w-]+/g, '') === params.slug
  );

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
    <main className="min-h-screen py-8 sm:py-12">
      <div className="mx-auto">
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

            {/* Sections */}
            {post.sections?.map((section, index) => (
              <div key={index} className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4">{section.title}</h2>
                <ul className="list-disc pl-6 space-y-2">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-base sm:text-lg text-slate-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}