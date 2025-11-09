import React from "react";

interface BrawlerBotProps {
  brawlerName: string;
  brawlerImage: string;
  playerName: string;
  message: string | null;
}

const BrawlerBot: React.FC<BrawlerBotProps> = ({ brawlerName, brawlerImage, playerName, message }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-6">
      
      {/* صورة البطل */}
      <img
        src={brawlerImage}
        alt={brawlerName}
        className="w-28 drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)] animate-pulse"
      />

      {/* اسم اللاعب */}
      <h2 className="text-3xl font-extrabold tracking-wide text-yellow-300 mt-3 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
        Hello, Brawler!
      </h2>

      {/* مربع الرسالة */}
      <div className="
        mt-4 bg-[#182544]/80 border border-[#2f3c77] rounded-2xl px-6 py-4 
        max-w-[900px] text-center shadow-[0_8px_18px_rgba(0,0,0,0.45)]
        backdrop-blur-md animate-fadeIn
      ">
        <p className="text-lg sm:text-xl font-semibold text-white leading-relaxed tracking-wide">
          {message ? message : `Greetings, ${playerName}! It's me, ${brawlerName}.  
          Select a gem pack and let’s get started! 💎🔥`}
        </p>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out;
          }
        `}
      </style>
    </div>
  );
};

export default BrawlerBot;
