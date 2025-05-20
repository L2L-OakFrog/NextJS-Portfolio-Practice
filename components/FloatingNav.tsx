"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";
import { FaHome, FaInfoCircle, FaBook, FaCode, FaChartLine, FaGraduationCap } from "react-icons/fa";
import { IoMdMegaphone } from "react-icons/io";
import { FiMenu, FiX, FiLayers, FiChevronDown } from "react-icons/fi";

export const FloatingNav = ({
  className,
}: {
  className?: string;
}) => {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const navItems = [
    { name: "Home", link: "/", icon: <FaHome size={18} /> },
    { name: "About", link: "/about", icon: <FaInfoCircle size={18} /> },
    { name: "Campaigns", link: "/campaigns", icon: <IoMdMegaphone size={18} /> },
    { name: "Blog", link: "/blog", icon: <FaBook size={18} /> },
    { 
      name: "Additional Services", 
      link: "/additional-services", 
      icon: <FiLayers size={18} />,
      subItems: [
        { name: "Web Services", link: "/additional-services/web-services", icon: <FaCode size={16} /> },
        /* { name: "Consulting", link: "/additional-services/consulting", icon: <FaChartLine size={16} /> },
        { name: "Training", link: "/additional-services/training", icon: <FaGraduationCap size={16} /> } */
      ]
    },
  ];

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() || 0);
      setVisible(direction < 0 || current < 0.1);
    }
  });

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenSubmenu(null);
  }, [pathname]);

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "fixed top-6 inset-x-0 mx-auto max-w-7xl", // Changed max-w-2xl to max-w-7xl for wider container
          "bg-black/80 backdrop-blur-md border border-white/10",
          "rounded-full z-[9999] px-6 py-3 shadow-lg",
          className
        )}
      >
        <div className="flex items-center justify-between">
          {/* Mobile hamburger menu and logo */}
          <div className="flex items-center md:hidden">
            <button
              className="p-2 text-neutral-300 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
            <div className="text-white font-medium px-2">
              Dialers Hub
            </div>
          </div>

          {/* Desktop Logo - Left side */}
          <div className="hidden md:flex items-center">
            <Link
              href="/"
              className="text-white font-medium hover:text-white/80 transition-colors text-lg"
            >
              Dialers Hub
            </Link>
          </div>

          {/* Desktop Navigation - Right side */}
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <div className="flex items-center gap-1">
                  <Link
                    href={item.link}
                    className={cn(
                      "flex items-center gap-2 text-base",
                      "text-neutral-300 hover:text-white transition-colors",
                      pathname === item.link && "!text-white font-medium",
                      item.subItems && "pr-1"
                    )}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                  {item.subItems && (
                    <button 
                      onClick={() => toggleSubmenu(item.name)}
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      <FiChevronDown size={16} className={cn(
                        "transition-transform",
                        openSubmenu === item.name && "rotate-180"
                      )} />
                    </button>
                  )}
                </div>

                {item.subItems && (
                  <AnimatePresence>
                    {openSubmenu === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 mt-2 w-56 bg-black/90 backdrop-blur-md rounded-xl border border-white/10 shadow-lg z-50 p-2"
                      >
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.link}
                            className={cn(
                              "flex items-center gap-2 px-3 py-2 text-sm rounded-lg",
                              "hover:bg-white/10 transition-colors",
                              pathname === subItem.link && "!text-white font-medium bg-white/10"
                            )}
                          >
                            {subItem.icon}
                            <span>{subItem.name}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
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
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <div key={item.name} className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.link}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 text-base rounded-lg flex-1",
                          "hover:bg-white/10 transition-colors",
                          pathname === item.link && "!text-white font-medium bg-white/10"
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.icon}
                        <span>{item.name}</span>
                      </Link>
                      {item.subItems && (
                        <button 
                          onClick={() => toggleSubmenu(item.name)}
                          className="p-3 text-neutral-400 hover:text-white transition-colors"
                        >
                          <FiChevronDown size={16} className={cn(
                            "transition-transform",
                            openSubmenu === item.name && "rotate-180"
                          )} />
                        </button>
                      )}
                    </div>
                    {item.subItems && openSubmenu === item.name && (
                      <div className="ml-4 mt-1 flex flex-col gap-1 border-l border-white/10 pl-2">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.link}
                            className={cn(
                              "flex items-center gap-2 px-3 py-2 text-sm rounded-lg",
                              "hover:bg-white/10 transition-colors",
                              pathname === subItem.link && "!text-white font-medium bg-white/10"
                            )}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.icon}
                            <span>{subItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};