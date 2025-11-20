import React from 'react';
import { WEDDING_CONFIG } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="relative w-full h-[85vh] overflow-hidden flex items-center justify-center text-white">
      {/* Background Image with Parallax feel */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 transform scale-105"
        style={{ backgroundImage: `url('https://picsum.photos/1920/1080?grayscale&blur=2')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <div className="mb-6 text-wedding-rose animate-pulse flex justify-center">
             <span className="text-xl tracking-[0.3em] uppercase">#JKNOTJOKING</span>
        </div>
        <h1 className="text-7xl md:text-9xl font-script mb-6 drop-shadow-lg text-white">
          {WEDDING_CONFIG.title}
        </h1>
        <p className="text-lg md:text-xl font-sans font-light tracking-[0.2em] uppercase mt-6 border-t border-b border-white/30 py-4 inline-block text-stone-200">
          2026.02.07<span className="mx-4 text-wedding-rose">•</span>Taipei
        </p>
      </div>
    </header>
  );
};

export default Header;