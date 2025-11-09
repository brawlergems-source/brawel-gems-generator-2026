import React, { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes countdown

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <header className="w-full flex flex-col items-center justify-center text-center py-12 select-none">
      
      {/* Brawler Icon */}
      <img
        src="https://i.postimg.cc/XvmHqkTK/icons8-etoiles-de-bagarre-100.png"
        alt="Brawler Icon"
        className="w-24 h-24 drop-shadow-[0_0_15px_rgba(255,255,0,0.7)] animate-pulse"
      />

      {/* Title */}
      <h1 className="text-5xl sm:text-6xl font-extrabold text-white mt-4 tracking-wide drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
        <span className="bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text text-transparent">
          HELLO BRAWLER
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-yellow-200 mt-4 text-lg sm:text-xl font-semibold tracking-wider drop-shadow-lg">
        GET YOUR GEMS NOW 💎
      </p>

      {/* Countdown Timer */}
      <div className="mt-6 text-3xl font-extrabold text-white bg-black/40 px-6 py-3 rounded-xl border border-white/20 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.6)]">
        Offer Expires In: <span className="text-red-400">{formatTime(timeLeft)}</span>
      </div>

    </header>
  );
};

export default Header;
