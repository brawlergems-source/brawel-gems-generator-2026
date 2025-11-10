import React, { useState, useEffect } from "react";

const activities = [
  "PlayerX just generated 2000 Gems!",
  "NewbieBrawler received 950 Gems!",
  "ProGamer unlocked all brawlers!",
  "GemMaster_25 claimed 360 Gems!",
  "BrawlFanatic got 170 Gems!",
  "StarPlayer_YT received 2000 Gems!",
];

// نفس أيقونة الجوهرة
const GemIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
    className={className}
    style={{ filter: "drop-shadow(0 0 3px rgba(192, 132, 252, 0.4))" }}
    aria-hidden="true"
  >
    <path fill="#8548b9" d="M160 0L0 128v256l160 128 160-128V128L160 0z" />
    <path fill="#a661ce" d="M160 0l160 128v256L160 512 0 384V128L160 0z" />
    <path fill="#c77dff" d="M160 0l160 128-160 64-160-64L160 0z" />
    <path fill="#b36ce6" d="M0 128l160 64v192L0 384V128z" />
    <path fill="#9957cc" d="M160 192l160-64v192l-160 64V192z" />
  </svg>
);

// توليد وقت عشوائي
const randomTimeAgo = () => {
  const minutes = Math.floor(Math.random() * 25) + 1;
  return `${minutes} min ago`;
};

const LiveTicker: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [timeAgo, setTimeAgo] = useState(randomTimeAgo());

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % activities.length);
      setTimeAgo(randomTimeAgo());
    }, 4000); // مدة الأنميشن

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        relative w-full 
        bg-gradient-to-r from-green-500 via-green-600 to-green-700
        rounded-full border border-green-300/60 
        py-2 mb-6 flex items-center justify-center 
        h-10 overflow-hidden shadow-lg shadow-green-900/40
      "
    >
      <div key={activeIndex} className="animate-fadeInOut absolute flex items-center">
        <GemIcon className="w-3 h-5 mr-2" />
        <span className="text-white text-sm font-semibold tracking-wide">
          {activities[activeIndex]}
        </span>
        <span className="text-white/80 text-xs ml-2">({timeAgo})</span>
      </div>
    </div>
  );
};

export default LiveTicker;
