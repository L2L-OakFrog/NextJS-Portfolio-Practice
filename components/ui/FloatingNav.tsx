"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";
import { FaHome, FaInfoCircle, FaRocket, FaChartLine } from "react-icons/fa";
import { IoMdMegaphone } from "react-icons/io";

export const FloatingNav = ({
  className,
}: {
  className?: string;
}) => {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  // Default navigation items
  const navItems = [
    { name: "Home", link: "/", icon: <FaHome size={16} /> },
    { name: "About", link: "/about", icon: <FaInfoCircle size={16} /> },
    { name: "Campaigns", link: "/campaigns", icon: <IoMdMegaphone size={16} /> },
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

  // Show/hide on scroll
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() || 0);
      setVisible(direction < 0 || current < 0.1);
    }
  });

  // Close menu when route changes
  useEffect(() => {
    setActiveMenu(null);
  }, [pathname]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "fixed top-6 inset-x-0 mx-auto max-w-fit",
          "bg-black/80 backdrop-blur-md border border-white/10",
          "rounded-full z-[9999] px-4 py-2 shadow-lg sm:px-6", // Reduced padding on mobile
          className
        )}
      >
        <div className="flex items-center gap-2 sm:gap-4"> {/* Reduced gap on mobile */}
          {navItems.map((item) => (
            <div key={item.name} className="relative">
              <Link
                href={item.link}
                onClick={(e) => {
                  /* if (item.subItems) {
                    e.preventDefault();
                    setActiveMenu(activeMenu === item.name ? null : item.name);
                  } */
                }}
                className={cn(
                  "flex items-center gap-1 text-sm",
                  "text-neutral-300 hover:text-white transition-colors",
                  pathname === item.link && "!text-white font-medium",
                  // item.subItems && "cursor-pointer"
                )}
              >
                {item.icon}
                {/* Text hidden on mobile, shown on sm+ screens */}
                <span className="hidden sm:inline">{item.name}</span>
              </Link>

              {/* Submenu - adjusted for mobile */}
              {/* {item.subItems && activeMenu === item.name && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 mt-2 w-48 bg-black/90 backdrop-blur-md rounded-md border border-white/10 shadow-lg z-50"
                >
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.link}
                      className={cn(
                        "flex items-center gap-2 px-4 py-2 text-sm",
                        "hover:bg-white/10 transition-colors",
                        pathname === subItem.link && "!text-white font-medium"
                      )}
                    >
                      {subItem.icon}
                      <span className="hidden sm:inline">{subItem.name}</span>
                    </Link>
                  ))}
                </motion.div>
              )} */}
            </div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};