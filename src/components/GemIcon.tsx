
import React from 'react';

const GemIcon: React.FC = () => {
    return (
        <svg
            className="w-[22px] h-[22px] inline-block align-middle mx-1 relative -top-px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12 2L4 8.5L12 22L20 8.5L12 2Z"
                fill="url(#gem-gradient)"
                stroke="#540E86"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
            <path
                d="M12 22V8.5L20 8.5"
                stroke="#fff"
                strokeOpacity="0.5"
                strokeWidth="1"
                strokeLinejoin="round"
            />
            <path
                d="M12 22V8.5L4 8.5"
                stroke="#540E86"
                strokeOpacity="0.5"
                strokeWidth="1"
                strokeLinejoin="round"
            />
             <path
                d="M4 8.5L12 2L20 8.5L12 13L4 8.5Z"
                stroke="#540E86"
                strokeWidth="1"
                strokeLinejoin="round"
            />
            <defs>
                <linearGradient id="gem-gradient" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F97CFF" />
                    <stop offset="1" stopColor="#A232E2" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default GemIcon;
