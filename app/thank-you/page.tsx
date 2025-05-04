"use client";
import Link from "next/link";
import { FaCheckCircle, FaHome, FaEnvelope, FaInfoCircle } from "react-icons/fa";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-black-100 text-white py-20 px-6 sm:px-8 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center bg-black/50 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-white/10">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <FaCheckCircle className="text-green-500 text-6xl" />
        </div>
        
        {/* Main Message */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Thank You for Contacting Us!</h1>
        <p className="text-lg mb-6 text-neutral-300">
          We have received your message and our team will get back to you soon.
        </p>
        
        {/* Additional Info */}
        <div className="bg-blue-900/20 rounded-lg p-4 mb-8 flex items-start">
          <FaInfoCircle className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
          <p className="text-left">
            While you wait, feel free to browse our website for more information about our services and solutions.
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
          >
            <FaHome /> Go Back to Home
          </Link>
          
          <Link 
            href="/services" 
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-colors border border-white/20"
          >
            <FaEnvelope /> Explore Our Services
          </Link>
        </div>
        
        {/* Support Info */}
        <div className="mt-10 pt-6 border-t border-white/10">
          <p className="text-sm text-neutral-400">
            Need immediate assistance? Call us at <a href="tel:+19296559561" className="text-blue-400 hover:underline">+1 (929) 655-9561</a>
          </p>
        </div>
      </div>
    </div>
  );
}