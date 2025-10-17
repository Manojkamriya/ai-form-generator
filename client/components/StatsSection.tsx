"use client";
import React from "react";
import { TrendingUp, Users, Zap, Award } from "lucide-react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function StatsSection() {
  const stats = [
    { icon: TrendingUp, value: 50000, label: "Forms Created", color: "rgb(226, 52, 43)", gradient: "from-red-500 to-orange-500", suffix: "+" },
    { icon: Users, value: 25000, label: "Active Users", color: "rgb(255, 106, 28)", gradient: "from-orange-500 to-yellow-500", suffix: "+" },
    { icon: Zap, value: 98, label: "Time Saved", color: "rgb(226, 52, 43)", gradient: "from-red-500 to-pink-500", suffix: "%" },
    { icon: Award, value: 4.9, label: "User Rating", color: "rgb(255, 106, 28)", gradient: "from-orange-500 to-red-500", suffix: "/5", decimals: 1 },
  ];

  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 mb-8 sm:mt-8 sm:mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-orange-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-3 sm:mb-4 mx-auto group-hover:scale-110 transition-transform`}>
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>

            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 text-center" style={{ color: stat.color }}>
              {inView && (
                <CountUp
                  key={inView ? Date.now() : index} // triggers reset each time it scrolls into view
                  start={0}
                  end={stat.value}
                  duration={2}
                  separator=","
                  decimals={stat.decimals || 0}
                  suffix={stat.suffix || ""}
                />
              )}
            </div>

            <div className="text-xs sm:text-sm text-gray-600 text-center font-medium">
              {stat.label}
            </div>

            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
          </motion.div>
        );
      })}
    </div>
  );
}
