import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'color' | 'mono';
  showText?: boolean;
}

export const GalgotiasLogo: React.FC<LogoProps> = ({
  className = '',
}) => {
  return (
    <div className={`flex items-center gap-2 sm:gap-3 select-none ${className}`}>
      <img
        src="/galgotias-logo.png"
        alt="Galgotias University"
        className="h-8 sm:h-10 max-w-[140px] sm:max-w-none w-auto object-contain shrink-0 transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
};

export const IEEELogo: React.FC<{ className?: string; variant?: 'color' | 'mono' }> = ({
  className = '',
  variant = 'color',
}) => {
  return (
    <div className={`flex items-center gap-1.5 sm:gap-2 select-none ${className}`}>
      <img
        src="/ieee-logo.png"
        alt="IEEE Logo"
        className="h-7 sm:h-9 w-auto object-contain shrink-0 transition-transform duration-300 hover:scale-105"
      />
      <div className="hidden min-[360px]:flex flex-col justify-center">
        <span className={`text-[8px] sm:text-[10px] font-bold tracking-[0.12em] sm:tracking-[0.15em] uppercase leading-none ${
          variant === 'mono' ? 'text-sky-200' : 'text-slate-600'
        }`}>
          Student Branch
        </span>
      </div>
    </div>
  );
};
