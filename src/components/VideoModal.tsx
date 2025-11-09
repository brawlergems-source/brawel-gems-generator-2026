
import React from 'react';

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 animate-[fadeIn_0.3s_ease]"
            onClick={onClose}
        >
             <style>
                {`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                `}
            </style>
            <div className="relative bg-black w-full max-w-4xl shadow-lg" onClick={(e) => e.stopPropagation()}>
                <img 
                    src="https://i.postimg.cc/ZKJs4rV9/close.png" 
                    alt="Close" 
                    className="absolute -top-5 -right-5 w-12 h-auto cursor-pointer transition-transform duration-150 ease-in-out hover:scale-110 active:scale-95 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] z-20"
                    onClick={onClose}
                />
                <video className="w-full h-auto block" controls autoPlay>
                    <source src="https://brawlergems.com/generator/video/tut-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default VideoModal;