import React from 'react';
import { Brawler } from '../types';
import BrawlerCard from './BrawlerCard';

interface BrawlersListProps {
    brawlers: Brawler[];
}

const BrawlersList: React.FC<BrawlersListProps> = ({ brawlers }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700">
        <h2 className="text-2xl font-bold mb-4 font-lilita text-cyan-300">BRAWLERS ({brawlers.length})</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {brawlers.map((brawler, index) => (
                <BrawlerCard key={brawler.name} brawler={brawler} index={index} />
            ))}
        </div>
    </div>
  );
};

export default BrawlersList;
