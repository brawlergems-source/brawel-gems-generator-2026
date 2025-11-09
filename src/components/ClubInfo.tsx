import React from 'react';
import { ClubInfo as ClubInfoType } from '../types';

interface ClubInfoProps {
  club: ClubInfoType;
}

const ClubInfo: React.FC<ClubInfoProps> = ({ club }) => {
  return (
    <div className="bg-[#8A4DFF] rounded-2xl p-4 border-2 border-black shadow-lg">
      <h2 className="text-sm font-lilita font-bold mb-2 uppercase tracking-wide text-white">CLUB</h2>
      <div className="flex items-center space-x-4">
        <img 
          src={club.badgeUrl} 
          alt="Club Badge" 
          className="w-14 h-14"
          onError={(e) => { (e.target as HTMLImageElement).style.display='none' }}
        />
        <div>
          <p className="font-lilita text-2xl text-white tracking-tight">
            {club.name}
          </p>
          <p className="text-sm text-purple-200 tracking-wide font-normal">
            {club.tag}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClubInfo;
