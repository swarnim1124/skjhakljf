import React from 'react';
import { GalgotiasLogo, IEEELogo } from './Logo';
import { Mail, Landmark, ShieldAlert, Award, ArrowRight, Instagram, Linkedin } from 'lucide-react';
import { ActiveTab } from '../types';

interface FooterProps {
  onTabChange: (tab: ActiveTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onTabChange }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800/80 pt-10 sm:pt-16 pb-8 sm:pb-12" id="academic-portal-footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-slate-800 pb-12 mb-10">
          
          {/* Brand Info (4 Columns) */}
          <div className="md:col-span-4 flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <GalgotiasLogo variant="mono" />
              <div className="h-px w-24 bg-slate-800 my-1" />
              <IEEELogo variant="mono" />
            </div>
            
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm mt-1">
              Empowering engineers and scholars of Galgotias University to coordinate technical initiatives, host research councils, and represent national development pipelines.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://www.instagram.com/ieeeias.gusb/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-pink-400 bg-pink-950/40 border border-pink-800/40 rounded-lg hover:bg-pink-900/60 hover:text-pink-300 transition-all"
                title="IEEE IAS Instagram"
              >
                <Instagram className="h-3.5 w-3.5" />
                <span>Instagram</span>
              </a>
              <a 
                href="https://www.linkedin.com/company/gu-ieee-ias/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-sky-400 bg-sky-950/40 border border-sky-800/40 rounded-lg hover:bg-sky-900/60 hover:text-sky-300 transition-all"
                title="IEEE IAS LinkedIn"
              >
                <Linkedin className="h-3.5 w-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick links (2 Columns) */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest mb-4">Branch Map</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => onTabChange('home')} className="hover:text-white transition-colors cursor-pointer">
                  Portal Home
                </button>
              </li>
              <li>
                <button onClick={() => onTabChange('research')} className="hover:text-white transition-colors cursor-pointer">
                  Repository
                </button>
              </li>
              <li>
                <button onClick={() => onTabChange('about')} className="hover:text-white transition-colors cursor-pointer">
                  Advisory & Chairs
                </button>
              </li>
              <li>
                <button onClick={() => onTabChange('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Connect
                </button>
              </li>
            </ul>
          </div>

          {/* Chapters & Societies (3 Columns) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest mb-4">Technical Societies</h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li className="flex items-center gap-1.5 hover:text-slate-300">
                <span className="h-1 w-1 bg-rose-500 rounded-full" />
                IEEE Industry Applications Society (IAS)
              </li>
              <li className="flex items-center gap-1.5 hover:text-slate-300">
                <span className="h-1 w-1 bg-sky-500 rounded-full" />
                IEEE Computer Society (CS)
              </li>
              <li className="flex items-center gap-1.5 hover:text-slate-300">
                <span className="h-1 w-1 bg-purple-500 rounded-full" />
                IEEE Women in Engineering (WIE)
              </li>
              <li className="flex items-center gap-1.5 hover:text-slate-300">
                <span className="h-1 w-1 bg-emerald-500 rounded-full" />
                IEEE Power & Energy Society (PES)
              </li>
            </ul>
          </div>

          {/* Newsletter / Contact Quick Action (3 Columns) */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest">Official Support & Email</h4>
            <div className="text-xs text-slate-400 space-y-1.5 font-sans">
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="h-3.5 w-3.5 text-rose-500 shrink-0" />
                <a href="mailto:ieeeias.gu@gmail.com" className="hover:text-rose-400 font-semibold transition-colors break-all">
                  ieeeias.gu@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                <span className="text-[10px] font-bold text-slate-500 uppercase shrink-0">Alt:</span>
                <a href="mailto:shubham0568@ieee.org" className="hover:text-rose-400 transition-colors break-all">
                  shubham0568@ieee.org
                </a>
              </div>
            </div>
            <button
              onClick={() => onTabChange('contact')}
              className="inline-flex items-center justify-between px-4 py-2 mt-1 text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700/80 transition-all group cursor-pointer"
            >
              Contact Advisory Board
              <ArrowRight className="h-3.5 w-3.5 text-rose-500 transition-transform group-hover:translate-x-1 duration-200" />
            </button>
          </div>
        </div>

        {/* Regulatory footer bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-600 font-mono">
          <span>
            © {currentYear} IEEE Student Branch, Galgotias University. All rights reserved.
          </span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Charter</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400 transition-colors">IEEE Terms & Ethics</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
