
import React from 'react';

interface InfoButtonProps {
    onClick: () => void;
}

const InfoButton: React.FC<InfoButtonProps> = ({ onClick }) => {
    return (
        <>
            <style>
                {`
                @keyframes pulseGlow {
                    0%, 100% {
                        transform: scale(1);
                        filter: drop-shadow(0 0 5px rgba(255, 208, 77, 0.6));
                    }
                    50% {
                        transform: scale(1.2);
                        filter: drop-shadow(0 0 15px rgba(255, 208, 77, 1)) drop-shadow(0 0 25px rgba(255, 168, 0, 0.8));
                    }
                }
                `}
            </style>
            <img 
                src="https://i.postimg.cc/02hD1Wc3/button-info.png" 
                alt="Help" 
                className="w-8 h-8 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110 active:scale-95 animate-[pulseGlow_1.5s_ease-in-out_infinite]"
                onClick={onClick}
            />
        </>
    );
};

export default InfoButton;