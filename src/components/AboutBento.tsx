import React from 'react';
import { motion } from 'motion/react';
import { Globe, GraduationCap, Code2, Sparkles, Binary } from 'lucide-react';

export const AboutBento: React.FC = () => {
  return (
    <section className="bg-slate-50/60 py-10 sm:py-16 lg:py-24 border-b border-slate-100" id="about-bento-grid">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-700">Institutional Impact</span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-black font-serif text-slate-900 tracking-tight">
            Fostering Academic Rigor & Technological Foresight
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
            At Galgotias University, the IEEE Student Branch functions as an incubator for high-impact engineering work. 
            We organize research symposiums, host international programming events, and build international partnerships.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Large Visual Card (Left Column - 7 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-8 flex flex-col justify-between relative overflow-hidden group shadow-sm hover:shadow transition-all"
          >
            {/* Background Accent Graphics */}
            <div className="absolute -top-12 -right-12 h-44 w-44 rounded-full bg-slate-50 group-hover:scale-110 transition-transform duration-500 -z-0" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-800 text-[10px] font-bold uppercase tracking-wider mb-6">
                <GraduationCap className="h-3.5 w-3.5 text-slate-700" />
                Innovation Lab
              </div>
              <h3 className="text-2xl font-black text-slate-900 font-serif tracking-tight leading-tight">
                Research Excellence
              </h3>
              <p className="mt-3 text-sm text-slate-500 leading-relaxed max-w-lg">
                Bridging the gap between speculative theory and practical engineering systems. Our members publish regularly 
                in high-impact IEEE journals, focusing on power engineering, automation, and computer architecture.
              </p>
            </div>

            <div className="mt-8 border-t border-slate-100 pt-6 relative z-10 flex items-center justify-between">
              <div className="flex gap-4">
                <div>
                  <span className="block text-lg font-black text-slate-900">120+</span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase">Papers Cataloged</span>
                </div>
                <div className="w-px bg-slate-200 h-8 self-center" />
                <div>
                  <span className="block text-lg font-black text-slate-900">14</span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase">Patents Filed</span>
                </div>
              </div>
              <span className="text-xs font-bold text-rose-700 flex items-center gap-1.5 cursor-pointer hover:underline">
                Explore Lab Archives
                <span className="transition-transform group-hover:translate-x-1 duration-200">→</span>
              </span>
            </div>
          </motion.div>

          {/* Right Side Cards Stack (Right Column - 5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Card 2: Global Network */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between group shadow-sm hover:shadow transition-all"
            >
              <div>
                <div className="h-9 w-9 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center mb-4">
                  <Globe className="h-4 w-4 text-sky-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  Global Network
                </h3>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Direct connection with over 420,000+ engineers, researchers, and technical professionals across 160 countries. 
                  Leverage elite career opportunities and peer reviews.
                </p>
              </div>
            </motion.div>

            {/* Card 3: IEEE Xtreme (White text on deep red background) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-rose-800 to-red-950 text-white rounded-2xl p-6 flex flex-col justify-between group shadow-sm hover:shadow transition-all relative overflow-hidden"
            >
              {/* Abstract decorative graphic */}
              <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-white/5 group-hover:scale-110 transition-transform duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center">
                    <Code2 className="h-4 w-4 text-rose-200" />
                  </div>
                  <span className="text-[9px] font-bold uppercase bg-white/20 px-2 py-0.5 rounded text-white tracking-widest">
                    Annual Hackathon
                  </span>
                </div>
                
                <h3 className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
                  <Binary className="h-4.5 w-4.5 text-rose-300 animate-pulse" />
                  IEEE Xtreme Coding
                </h3>
                <p className="mt-2 text-xs text-rose-100/80 leading-relaxed">
                  Our members participate and represent Galgotias in the elite 24-hour virtual competitive programming 
                  competition held annually, pitting thousands of student branches head-to-head.
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10 relative z-10 flex justify-between items-center text-[10px] text-rose-200">
                <span>Registration Open</span>
                <span className="font-bold text-white group-hover:underline cursor-pointer">
                  Join Team
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
