import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const activities = [
  { text: "PlayerX just generated 2000 Gems!", time: "3 min ago" },
  { text: "NewbieBrawler received 950 Gems!", time: "5 min ago" },
  { text: "ProGamer unlocked all brawlers!", time: "8 min ago" },
  { text: "GemMaster_25 claimed 360 Gems!", time: "1 min ago" },
];

const GreenGem = () => (
  <motion.svg
    width="20"
    height="20"
    viewBox="0 0 100 100"
    initial={{ scale: 1 }}
    animate={{ scale: [1, 1.2, 1] }}
    transition={{ duration: 1.8, repeat: Infinity }}
    style={{ filter: "drop-shadow(0 0 6px rgba(0,255,120,0.8))" }}
  >
    <path d="M50 10 L75 30 L75 70 L50 90 L25 70 L25 30 Z" fill="#4ade80" stroke="#16a34a" strokeWidth="4" />
    <path d="M50 10 L75 30 L50 30 Z" fill="#86efac" />
    <path d="M50 10 L25 30 L50 30 Z" fill="#22c55e" />
    <path d="M75 30 L75 70 L50 50 Z" fill="#86efac" />
    <path d="M25 30 L25 70 L50 50 Z" fill="#22c55e" />
    <path d="M50 50 L75 70 L50 90 L25 70 Z" fill="#16a34a" />
  </motion.svg>
);

const LiveTicker: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const cycle = setInterval(() => {
      setIndex((prev) => (prev + 1) % activities.length);
    }, 3500);
    return () => clearInterval(cycle);
  }, []);

  return (
    <div className="w-full flex justify-center mb-6 px-3">
      <motion.div
        key={index}
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="
          flex items-center gap-3
          px-5 py-2
          bg-gradient-to-r from-green-500 to-green-600
          rounded-full
          text-white font-semibold
          shadow-[0_0_14px_rgba(0,255,120,0.6)]
          w-full sm:w-auto
          whitespace-nowrap
        "
      >
        <GreenGem />

        {/* النص يرجع كامل بدون قطع */}
        <span className="text-sm sm:text-base">
          {activities[index].text}
        </span>

        {/* الوقت يبقى في الجهة اليمنى دائما */}
        <span className="text-xs opacity-90 ml-auto">
          ({activities[index].time})
        </span>
      </motion.div>
    </div>
  );
};

export default LiveTicker;
