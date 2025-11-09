import React from 'react';

const Header: React.FC = () => {
    return (
        <div className="mb-8">
            <img 
                src="https://i.postimg.cc/yNGzLRV0/logo-outlined-no-BG.png" 
                alt="Brawl Stars" 
                className="mx-auto w-full max-w-[180px] sm:max-w-[220px] md:max-w-[280px] drop-shadow-[0_8px_15px_rgba(0,0,0,0.3)]"
            />
        </div>
    );
};

export default Header;
