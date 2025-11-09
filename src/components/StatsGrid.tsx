import React from 'react';
import { Victories } from '../types';

// --- Component Interfaces ---

interface StatsGridProps {
  victories: Victories;
}

interface StatCardProps {
    icon: React.ReactNode;
    title: string;
    value: string;
}

// --- StatCard Component ---

const StatCard: React.FC<StatCardProps> = ({ icon, title, value }) => (
    <div className="bg-[#e7e7e7] p-1 rounded-xl shadow-md">
        <div className="bg-white p-4 rounded-lg text-center border-2 border-black h-full flex flex-col justify-center items-center space-y-1">
            {icon}
            <h3 className="text-xs font-bold text-gray-500 mt-1 uppercase tracking-wider font-lilita">{title}</h3>
            <p 
                className="text-4xl font-bold font-lilita text-[#ffc700]" 
                style={{ textShadow: '0 2px #ca8500' }}
            >
                {value}
            </p>
        </div>
    </div>
);

// --- Main StatsGrid Component ---

const StatsGrid: React.FC<StatsGridProps> = ({ victories }) => {
  const formatNumber = (num: number) => {
    return num.toLocaleString('en-US');
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard icon={<span className="text-4xl h-10 flex items-center justify-center">🎮</span>} title="3v3 Victories" value={formatNumber(victories.threeVthree)} />
        <StatCard icon={<span className="text-4xl h-10 flex items-center justify-center">⚔️</span>} title="Solo Victories" value={formatNumber(victories.solo)} />
        <StatCard icon={<span className="text-4xl h-10 flex items-center justify-center">👥</span>} title="Duo Victories" value={formatNumber(victories.duo)} />
        <StatCard icon={<span className="text-4xl h-10 flex items-center justify-center">⭐</span>} title="Experience" value={formatNumber(victories.experience)} />
    </div>
  );
};

export default StatsGrid;