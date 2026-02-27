
import React from 'react';

interface HeaderProps {
  onLogoClick?: () => void;
  onCtaClick: () => void;
  showStickyCta: boolean;
}

const Header: React.FC<HeaderProps> = ({ onLogoClick, onCtaClick, showStickyCta }) => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btn.style.setProperty('--x', `${x}px`);
    btn.style.setProperty('--y', `${y}px`);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-transparent pointer-events-none">
      <div className="w-full px-4 md:px-8 lg:px-12 h-20 md:h-28 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center animate-fade-up pointer-events-auto">
          <button 
            onClick={onLogoClick}
            className="flex items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-95 outline-none focus:outline-none"
          >
            <img
  src="/logo-exclusivecustom.png"
  alt="Exclusive Customs Logo"
  className="w-40 h-40 md:w-20 md:h-20 object-contain -ml-8 md:-ml-18"
/>
            <span className="sr-only">Exclusive Customs - Home</span>
          </button>
        </div>

        {/* Sticky CTA */}
        <div className={`transition-all duration-500 transform pointer-events-auto ${
          showStickyCta 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 -translate-y-4 scale-90 pointer-events-none'
        }`}>
          <button
            onClick={onCtaClick}
            onMouseEnter={handleMouseEnter}
            className="cta-button px-5 py-2.5 md:px-8 md:py-3.5 rounded-full text-[10px] md:text-sm font-bold shadow-xl whitespace-nowrap"
          >
            Bezplatná konzultace →
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
