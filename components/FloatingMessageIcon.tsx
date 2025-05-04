"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaWhatsapp, FaCommentAlt } from "react-icons/fa";

export const FloatingMessageIcon = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">
      {/* <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-green-600 text-white p-3 rounded-full shadow-lg"
      >
        <Link href="https://wa.me/8807736030303" target="_blank" aria-label="Contact us on WhatsApp">
          <FaWhatsapp size={24} />
        </Link>
      </motion.div> */}
      
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg"
      >
        <Link href="/contact" aria-label="Contact us">
          <FaCommentAlt size={24} />
        </Link>
      </motion.div>
    </div>
  );
};