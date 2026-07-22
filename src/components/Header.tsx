import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GalgotiasLogo, IEEELogo } from './Logo';
import { ActiveTab } from '../types';
import { FileText, ExternalLink, UserPlus, Menu, X } from 'lucide-react';

interface HeaderProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  onJoinClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onTabChange,
  onJoinClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ActiveTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'research', label: 'Research' },
    { id: 'about', label: 'Leadership' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (tab: ActiveTab) => {
    onTabChange(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl h-16 sm:h-18 items-center justify-between px-3 sm:px-6">
        {/* Logos Container */}
        <div 
          className="flex items-center gap-2 sm:gap-4 cursor-pointer shrink-0"
          onClick={() => handleNavClick('home')}
        >
          <GalgotiasLogo />
          <div className="h-6 sm:h-8 w-px bg-slate-200" />
          <IEEELogo />
        </div>

        {/* Desktop Navigation Items */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 text-sm font-semibold transition-colors duration-200 rounded-md select-none cursor-pointer ${
                  isActive ? 'text-rose-700' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
                id={`nav-tab-${item.id}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-nav-indicator"
                    className="absolute inset-0 bg-rose-50/50 rounded-md border-b-2 border-rose-700"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Desktop Header Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href="https://cmt3.research.microsoft.com/User/Login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200/80 rounded-lg transition-all shadow-xs hover:shadow"
            id="header-call-for-papers-btn"
          >
            <FileText className="h-3.5 w-3.5 text-rose-700" />
            <span>Call for Papers</span>
            <ExternalLink className="h-3 w-3 opacity-70" />
          </a>

          <button
            onClick={onJoinClick}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-rose-700 hover:bg-rose-800 active:bg-rose-900 rounded-lg transition-all shadow-sm hover:shadow active:scale-98 cursor-pointer"
            id="header-join-btn"
          >
            <UserPlus className="h-3.5 w-3.5" />
            <span>Join Chapter</span>
          </button>
        </div>

        {/* Mobile Actions & Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href="https://cmt3.research.microsoft.com/User/Login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-1.5 text-[11px] font-bold text-rose-700 bg-rose-50 border border-rose-200 rounded-lg"
            title="Call for Papers"
          >
            <FileText className="h-3.5 w-3.5 text-rose-700" />
            <span>CFP</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3 shadow-lg"
          >
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between w-full px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                      isActive 
                        ? 'text-rose-700 bg-rose-50 font-bold border-l-4 border-rose-700' 
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="https://cmt3.research.microsoft.com/User/Login"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-xs font-bold text-rose-700 bg-rose-50 border border-rose-200 rounded-lg text-center"
              >
                <FileText className="h-4 w-4" />
                <span>Submit / Call for Papers</span>
                <ExternalLink className="h-3.5 w-3.5 opacity-70" />
              </a>

              <button
                onClick={() => {
                  onJoinClick();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-xs font-bold text-white bg-rose-700 rounded-lg text-center shadow-sm"
              >
                <UserPlus className="h-4 w-4" />
                <span>Join Student Branch</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
