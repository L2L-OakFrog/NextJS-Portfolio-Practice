'use client';
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-black/90 text-white py-12 px-5 sm:px-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TechConnect Solutions</h3>
            <p className="text-sm text-gray-400">
              A professional telemarketing company specializing in lead conversion for solar, MCA, insurance, and real estate industries.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/campaigns" className="hover:text-white transition">Solar Campaigns</Link></li>
              <li><Link href="/campaigns" className="hover:text-white transition">MCA Campaigns</Link></li>
              <li><Link href="/campaigns" className="hover:text-white transition">Insurance Campaigns</Link></li>
              <li><Link href="/campaigns" className="hover:text-white transition">Real Estate Campaigns</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <address className="not-italic text-sm text-gray-400 space-y-3">
              <div className="flex items-start gap-3">
                <FaPhone className="mt-1 flex-shrink-0" size={14} />
                <span>(929) 655-9561</span>
              </div>
              <div className="flex items-start gap-3">
                <FaEnvelope className="mt-1 flex-shrink-0" size={14} />
                <span>Sharifanim66@gmail.com</span>
              </div>
            </address>
          </div>

          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link 
                href="#" 
                className="text-gray-400 hover:text-white transition"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </Link>
              <Link 
                href="#" 
                className="text-gray-400 hover:text-white transition"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </Link>
              <Link 
                href="#" 
                className="text-gray-400 hover:text-white transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </Link>
              <Link 
                href="#" 
                className="text-gray-400 hover:text-white transition"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} TechConnect Solutions. All Rights Reserved.</p>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-gray-400 mr-2">Developed by OakFrog🐸</span>
          </div>
        </div>
      </div>
    </footer>
  );
};