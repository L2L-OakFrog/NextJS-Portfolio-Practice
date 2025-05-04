"use client";
import Link from "next/link";
import { FaCheckCircle, FaHome, FaBook, FaInfoCircle, FaPhone } from "react-icons/fa";

export default function ThankYouPage() {
  return (
    <div className="w-full px-4 sm:px-0"> {/* Added horizontal padding for mobile */}
      <div className="max-w-2xl mx-auto text-center bg-black/50 backdrop-blur-md my-6 p-6 sm:p-10 rounded-3xl border border-white/10">
        {/* Success Icon - Made slightly smaller on mobile */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <FaCheckCircle className="text-green-500 text-5xl sm:text-6xl" />
        </div>
        
        {/* Main Message - Adjusted text sizes for mobile */}
        <h1 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">
          Thank You for<br className="sm:hidden" /> Contacting Us!
        </h1>
        <p className="text-base sm:text-lg mb-4 sm:mb-6 text-neutral-300">
          We have received your message and our team will get back to you soon.
        </p>
        
        {/* Additional Info - Adjusted padding and layout for mobile */}
        <div className="bg-blue-900/20 rounded-lg p-3 sm:p-4 mb-6 sm:mb-8 flex items-start">
          <FaInfoCircle className="text-blue-400 mt-1 mr-2 sm:mr-3 flex-shrink-0 text-sm sm:text-base" />
          <p className="text-left text-sm sm:text-base">
            While you wait, feel free to browse our website for more information about our services and solutions.
          </p>
        </div>
        
        {/* Action Buttons - Stacked vertically on mobile */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link 
            href="/" 
            className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors text-sm sm:text-base"
          >
            <FaHome className="text-sm sm:text-base" /> Go Back to Home
          </Link>
          
          <Link 
            href="/blog" 
            className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-colors border border-white/20 text-sm sm:text-base"
          >
            <FaBook className="text-sm sm:text-base" /> Read Our Blogs
          </Link>
        </div>
        
        {/* Support Info - Adjusted for mobile */}
        <div className="mt-8 sm:mt-10 pt-4 sm:pt-6 border-t border-white/10">
          <p className="text-xs sm:text-sm text-neutral-400">
            Need immediate assistance?{" "}
            <a 
              href="tel:+19296559561" 
              className="text-blue-400 hover:underline flex items-center justify-center sm:inline-flex gap-1 mt-1 sm:mt-0"
            >
              <FaPhone className="inline" /> +1 (929) 655-9561
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}