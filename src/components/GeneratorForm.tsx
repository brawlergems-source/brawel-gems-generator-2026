
import React from 'react';
import InfoButton from './InfoButton';

interface GeneratorFormProps {
    playerTag: string;
    onPlayerTagChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (event: React.FormEvent) => void;
    onInfoClick: () => void;
}

const GeneratorForm: React.FC<GeneratorFormProps> = ({ playerTag, onPlayerTagChange, onSubmit, onInfoClick }) => {
    return (
        <form className="flex flex-col gap-5" onSubmit={onSubmit}>
            <div className="flex items-center gap-2.5 bg-white rounded-xl p-3 md:p-3 shadow-[0_5px_0_#BBBBBB] transition-all duration-150 ease-in-out focus-within:shadow-[0_5px_0_#999999] focus-within:-translate-y-px">
                <span className="text-2xl md:text-3xl text-black font-bold">#</span>
                <input
                    type="text"
                    name="player_tag"
                    value={playerTag}
                    onChange={onPlayerTagChange}
                    className="flex-1 border-none bg-transparent font-sans text-lg md:text-2xl text-black outline-none uppercase placeholder:text-gray-300"
                    placeholder="PLAYER TAG"
                    maxLength={15}
                    required
                />
                <InfoButton onClick={onInfoClick} />
            </div>

            <button
                type="submit"
                className="bg-gradient-to-b from-[#FFD84D] to-[#FFA800] border-none rounded-xl py-3.5 md:py-4 px-11 text-lg sm:text-xl md:text-2xl text-white cursor-pointer uppercase tracking-wider transition-all duration-100 ease-in-out shadow-[0_6px_0_#CC7A00] hover:from-[#FFE270] hover:to-[#FFB520] hover:-translate-y-0.5 hover:shadow-[0_8px_0_#CC7A00] active:translate-y-1 active:shadow-[0_2px_0_#CC7A00] relative [text-shadow:0_2px_4px_rgba(0,0,0,0.4)]"
            >
                Let's Go!
            </button>
        </form>
    );
};

export default GeneratorForm;
