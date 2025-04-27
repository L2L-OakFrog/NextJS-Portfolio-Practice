"use client";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

type StatItem = {
  value: string;
  label: string;
};

export const StatsSection = ({
  stats,
  className,
}: {
  stats: StatItem[];
  className?: string;
}) => {
  return (
    <div className={cn("py-12 bg-black-100", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-lg text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};