import React, { useState, useCallback } from 'react';
import { BRAWLERS_DATA, CLUB_DATA, GEM_PACKS, PLAYER_DATA, VICTORIES_DATA } from './constants';
import Header from './components/Header';
import FirstHeader from './components/FirstHeader';
import LiveTicker from './components/LiveTicker';
import GemSelector from './components/GemSelector';
import BrawlerBot from './components/BrawlerBot';
import StatsGrid from './components/StatsGrid';
import ClubInfo from './components/ClubInfo';
import BrawlersList from './components/BrawlersList';
import OfferModal from './components/OfferModal';
import GeneratorForm from './components/GeneratorForm';
import WelcomeSection from './components/WelcomeSection';
import VideoModal from './components/VideoModal';

declare global {
    interface Window {
        confetti: any;
    }
}

const BackgroundPattern: React.FC = () => {
    return (
        <>
            <style>
                {`
                    @keyframes scrollPattern {
                        0% { transform: translateY(0); }
                        100% { transform: translateY(-50%); }
                    }
                `}
            </style>
            <div
                className="fixed top-[-50%] left-0 w-screen h-[200vh] bg-repeat pointer-events-none z-0"
                style={{
                    backgroundImage: 'url(https://i.postimg.cc/qvD0Symp/brawl-stars-pattern-transparent.png)',
                    backgroundSize: '400px auto',
                    opacity: 0.15,
                    animation: 'scrollPattern 120s linear infinite',
                    willChange: 'transform',
                }}
            ></div>
        </>
    );
};

function App() {
  const [currentMessage, setCurrentMessage] = useState<string | null>(null);
  const [playerTag, setPlayerTag] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGemSelect = useCallback((amount: number) => {
    // Confetti is handled in GemSelector component
  }, []);

  const handleMessageChange = useCallback((message: string | null) => {
    setCurrentMessage(message);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (playerTag.trim()) {
      setIsFormSubmitted(true);
      console.log('Player Tag Submitted:', playerTag);
    }
  };

  // Show form page first
  if (!isFormSubmitted) {
    return (
      <div className="relative min-h-screen w-full flex items-start justify-center p-2.5 bg-gradient-to-b from-[#1a2969] via-[#2d4596] to-[#4565c9] overflow-hidden">
        <BackgroundPattern />
        <main className="text-center w-full max-w-[500px] relative z-10 py-5">
          <FirstHeader />
          <div className="bg-white/95 rounded-[20px] p-7 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.4)] ring-3 ring-white/20">
            <h1 className="text-2xl sm:text-3xl text-black mb-7 uppercase tracking-wider">Enter Player Tag</h1>
            <GeneratorForm
              playerTag={playerTag}
              onPlayerTagChange={(e) => setPlayerTag(e.target.value.toUpperCase())}
              onSubmit={handleFormSubmit}
              onInfoClick={() => setIsModalOpen(true)}
            />
          </div>
          <WelcomeSection />
        </main>
        <VideoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    );
  }

  // Show main content after form submission
  return (
    <div className="bg-gradient-to-b from-[#1a2a5a] via-[#0e1a3d] to-[#050c21] min-h-screen text-white overflow-x-hidden">
      <div className="container mx-auto px-4 py-4">
        
        <LiveTicker />
        
        <main className="space-y-8">
          <Header player={PLAYER_DATA} />
          <GemSelector gemPacks={GEM_PACKS} onSelect={handleGemSelect} onMessageChange={handleMessageChange} />
          <BrawlerBot brawlerName={BRAWLERS_DATA[0].name} brawlerImage={BRAWLERS_DATA[0].imageUrl} playerName={PLAYER_DATA.name} message={currentMessage} />
          <StatsGrid victories={VICTORIES_DATA} />
          <ClubInfo club={CLUB_DATA} />
          <BrawlersList brawlers={BRAWLERS_DATA} />
        </main>
      </div>
    </div>
  );
}

export default App;
