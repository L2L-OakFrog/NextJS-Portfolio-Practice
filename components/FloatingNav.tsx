"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";
import { FaHome, FaInfoCircle, FaBook } from "react-icons/fa";
import { IoMdMegaphone } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi";

export const FloatingNav = ({
  className,
}: {
  className?: string;
}) => {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/", icon: <FaHome size={18} /> },
    { name: "About", link: "/about", icon: <FaInfoCircle size={18} /> },
    { name: "Campaigns", link: "/campaigns", icon: <IoMdMegaphone size={18} /> },
    { name: "Blog", link: "/blog", icon: <FaBook size={18} /> },
    // { name: "Contact", link: "/contact", icon: <FaInfoCircle size={16} /> },
    /* { 
      name: "Campaigns", 
      link: "/campaigns", 
      icon: <IoMdMegaphone size={16} />,
      subItems: [
        { name: "Solar", link: "/campaigns", icon: <FaRocket size={14} /> },
        { name: "Insurance", link: "/campaigns/insurance", icon: <FaChartLine size={14} /> }
      ]
    } */
  ];

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() || 0);
      setVisible(direction < 0 || current < 0.1);
    }
  });

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "fixed top-6 inset-x-0 mx-auto max-w-2xl", // Adjusted to max-w-2xl (medium width)
          "bg-black/80 backdrop-blur-md border border-white/10",
          "rounded-full z-[9999] px-6 py-3 shadow-lg", // Increased padding
          className
        )}
      >
        <div className="flex items-center justify-between">
          {/* Mobile hamburger menu */}
          <button
            className="md:hidden p-2 text-neutral-300 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>

          <div className="sm:hidden text-white font-medium px-2">
            RINGCENTER
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center gap-6 w-full">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className={cn(
                  "flex items-center gap-2 text-base", // Increased text size
                  "text-neutral-300 hover:text-white transition-colors",
                  pathname === item.link && "!text-white font-medium",
                )}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 mt-3 bg-black/90 backdrop-blur-md rounded-xl border border-white/10 shadow-lg z-50 md:hidden p-4"
            >
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.link}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 text-base rounded-lg",
                      "hover:bg-white/10 transition-colors",
                      pathname === item.link && "!text-white font-medium bg-white/10"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};