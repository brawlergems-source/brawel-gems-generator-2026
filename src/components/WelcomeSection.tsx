
import React, { useState, useEffect } from 'react';
import GemIcon from './GemIcon';

const SpeechBubble: React.FC<{ text: React.ReactNode }> = ({ text }) => {
    return (
        <div className="relative bg-white border-4 border-black rounded-2xl p-3 shadow-[0_4px_10px_rgba(0,0,0,0.2)] flex-1 min-h-[70px]
            before:content-[''] before:absolute before:left-[-15px] before:top-1/2 before:-translate-y-1/2 before:w-0 before:h-0 before:border-t-[12px] before:border-t-transparent before:border-b-[12px] before:border-b-transparent before:border-r-[15px] before:border-r-black
            after:content-[''] after:absolute after:left-[-9px] after:top-1/2 after:-translate-y-1/2 after:w-0 after:h-0 after:border-t-[10px] after:border-t-transparent after:border-b-[10px] after:border-b-transparent after:border-r-[12px] after:border-r-white
        ">
            <p className="m-0 text-sm sm:text-base md:text-lg text-black leading-snug text-left [text-shadow:0_1px_2px_rgba(0,0,0,0.2)]">
                {text}
            </p>
        </div>
    );
};


const WelcomeSection: React.FC = () => {
    const [displayedText, setDisplayedText] = useState<React.ReactNode[]>([]);
    const fullTextParts = ["Hey Brawler! Enter your Player Tag to get your free gems ", <GemIcon key="gem" />, " now!"];
    
    useEffect(() => {
        let charIndex = 0;
        let partIndex = 0;
        let currentString = '';
        
        const type = () => {
            if (partIndex >= fullTextParts.length) return;

            const currentPart = fullTextParts[partIndex];
            
            if (typeof currentPart === 'string') {
                if (charIndex < currentPart.length) {
                    currentString += currentPart[charIndex];
                    
                    const newParts = [...fullTextParts.slice(0, partIndex), currentString];
                    setDisplayedText(newParts);
                    
                    charIndex++;
                    setTimeout(type, 30);
                } else {
                    partIndex++;
                    charIndex = 0;
                    currentString = '';
                    setTimeout(type, 30);
                }
            } else { // It's a component
                 const newParts = [...fullTextParts.slice(0, partIndex + 1)];
                 setDisplayedText(newParts);
                 partIndex++;
                 setTimeout(type, 30);
            }
        };

        const timeoutId = setTimeout(type, 500); // Initial delay
        return () => clearTimeout(timeoutId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="flex items-center justify-center gap-2.5 sm:gap-5 mt-5 sm:mt-9">
            <img 
                src="https://i.postimg.cc/fyZqCW0j/brawler-icon.png" 
                alt="Brawler" 
                className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] md:w-[110px] md:h-[110px] rounded-2xl drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
            />
            <SpeechBubble text={displayedText} />
        </div>
    );
};

export default WelcomeSection;
