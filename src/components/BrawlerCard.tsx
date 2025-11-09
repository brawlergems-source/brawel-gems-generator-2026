import React from 'react';
import { Brawler, BrawlerAbility, BrawlerGear } from '../types';

interface BrawlerCardProps {
    brawler: Brawler;
    index: number;
}

const AbilityGroup: React.FC<{ title: string; items: (BrawlerAbility | BrawlerGear)[] }> = ({ title, items }) => {
    if (!items || items.length === 0) return null;
    return (
        <div>
            <span className="text-xs font-semibold text-slate-400">{title} ({items.length}):</span>
            <div className="flex flex-wrap gap-1 mt-1">
                {items.map(item => (
                    <img key={item.name} src={item.imageUrl} alt={item.name} title={item.name} className="w-5 h-5 bg-black/50 rounded-md" />
                ))}
            </div>
        </div>
    );
};

const BrawlerCard: React.FC<BrawlerCardProps> = ({ brawler, index }) => {
    const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : null;

    return (
        <div className="bg-gradient-to-b from-slate-900 to-indigo-950 rounded-lg border border-slate-700 p-2 space-y-2 relative overflow-hidden">
            {medal && <div className="absolute top-1 right-1 text-2xl">{medal}</div>}
            
            <img src={brawler.imageUrl} alt={brawler.name} className="w-full rounded-md" />

            <div className="flex justify-between items-center">
                <h4 className="font-bold text-white font-lilita text-lg">{brawler.name}</h4>
                <span className="text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full font-semibold">POWER {brawler.power}</span>
            </div>
            
            <div className="flex justify-between items-center bg-black/30 p-1 rounded-md">
                <div className="flex items-center space-x-1">
                    <img src="https://i.postimg.cc/50vx1yK0/icon-trophy-medium-1.png" alt="Trophies" className="w-4 h-4" />
                    <span className="text-sm font-bold text-yellow-300">{brawler.trophies}</span>
                </div>
                <span className="text-xs font-semibold bg-cyan-800 text-cyan-200 px-2 py-0.5 rounded-full">RANK {brawler.rank}</span>
            </div>
            
            <p className="text-xs text-slate-400 text-center">Best: {brawler.bestTrophies} 🏆</p>

            {brawler.streaks && (
                <div className="flex justify-center flex-wrap gap-1 text-xs">
                    {brawler.streaks.current && <span className="bg-orange-600/80 px-2 py-0.5 rounded-full">🔥 {brawler.streaks.current} WIN STREAK</span>}
                    <span className="bg-yellow-600/80 px-2 py-0.5 rounded-full">⭐ {brawler.streaks.max} MAX</span>
                </div>
            )}
            
            <div className="space-y-2 pt-2 border-t border-slate-700">
                <AbilityGroup title="Star Powers" items={brawler.abilities.starPowers} />
                <AbilityGroup title="Gadgets" items={brawler.abilities.gadgets} />
                <AbilityGroup title="Gears" items={brawler.abilities.gears} />
            </div>
        </div>
    );
};

export default BrawlerCard;