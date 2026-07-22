import React from 'react';
import { motion } from 'motion/react';
import { Mail, GraduationCap, ShieldCheck, Heart, Linkedin, Award } from 'lucide-react';
import { advisors, studentLeaders } from '../data/leadership';

export const LeadershipSection: React.FC = () => {
  return (
    <section className="bg-slate-50/30 py-12 sm:py-16 lg:py-24" id="leadership-roster-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-rose-700">Governance & Guidance</span>
          <h1 className="mt-3 text-3xl font-black font-serif text-slate-900 tracking-tight sm:text-5xl">
            Steering the Future of Engineering
          </h1>
          <p className="mt-4 text-base text-slate-500 leading-relaxed">
            Meet the dedicated faculty mentors and student leaders who coordinate our mission to advance technology for humanity at Galgotias University.
          </p>
        </div>

        {/* ================= Faculty Advisory Board ================= */}
        <div className="mb-24">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-4 mb-10">
            <div className="h-8 w-8 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-center">
              <GraduationCap className="h-4 w-4 text-rose-700" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">Faculty Advisory Board</h2>
              <p className="text-xs text-slate-500">Providing strategic vision and academic oversight</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {advisors.map((advisor, idx) => (
              <motion.div
                key={advisor.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 group"
                id={`advisor-${advisor.id}`}
              >
                {/* Photo frame */}
                <div className="aspect-[4/5] w-full overflow-hidden bg-slate-100 relative">
                  <img
                    src={advisor.photoUrl}
                    alt={advisor.name}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-103"
                  />
                  {/* Subtle role badge on the image */}
                  <div className="absolute top-3 left-3 bg-slate-900/90 text-white text-[9px] font-black tracking-wider uppercase px-2 py-1 rounded shadow-sm backdrop-blur-xs">
                    {advisor.title}
                  </div>
                </div>

                {/* Core Profile details */}
                <div className="p-5">
                  <h3 className="text-base font-black text-slate-900 tracking-tight font-serif leading-tight">
                    {advisor.name}
                  </h3>
                  
                  {/* Subtitles list (affiliations) */}
                  <div className="mt-2 space-y-1">
                    {advisor.subtitles.map((sub, sIdx) => (
                      <span
                        key={sIdx}
                        className={`block text-[11px] leading-tight ${
                          sIdx === 0 ? 'font-bold text-slate-700' : 'text-slate-400 font-medium'
                        }`}
                      >
                        {sub}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 text-[12px] text-slate-500 leading-relaxed border-t border-slate-100 pt-3">
                    {advisor.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= Student Executive Committee (Board of Directors) ================= */}
        <div>
          <div className="flex items-center gap-3 border-b border-slate-200 pb-4 mb-10">
            <div className="h-8 w-8 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center">
              <ShieldCheck className="h-4 w-4 text-sky-700" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">Student Executive Committee</h2>
              <p className="text-xs text-slate-500">Student leadership managing chapter operations</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {studentLeaders.map((leader, idx) => (
              <motion.div
                key={leader.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 group"
                id={`student-${leader.id}`}
              >
                {/* Photo frame */}
                <div className="aspect-[4/5] w-full overflow-hidden bg-slate-100 relative">
                  <img
                    src={leader.photoUrl}
                    alt={leader.name}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-103"
                  />
                  {/* Subtle role badge on the image */}
                  <div className="absolute top-3 left-3 bg-rose-700 text-white text-[9px] font-black tracking-wider uppercase px-2.5 py-1 rounded shadow-sm">
                    {leader.role}
                  </div>
                </div>

                {/* Core Profile details */}
                <div className="p-5">
                  <h3 className="text-base font-black text-slate-900 tracking-tight font-serif leading-none">
                    {leader.name}
                  </h3>

                  <p className="mt-3 text-[12px] text-slate-500 leading-relaxed">
                    {leader.description}
                  </p>

                  {/* Leadership details / links */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    {leader.email ? (
                      <a
                        href={`mailto:${leader.email}`}
                        className="text-[11px] font-bold text-rose-700 hover:text-rose-800 flex items-center gap-1 hover:underline"
                        title="Contact Email"
                      >
                        <Mail className="h-3.5 w-3.5" />
                        {leader.email}
                      </a>
                    ) : (
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1">
                        <Award className="h-3.5 w-3.5 text-slate-400" />
                        IEEE GU
                      </span>
                    )}

                    <div className="flex items-center gap-1.5 text-slate-400">
                      <a href="#" className="hover:text-sky-600 transition-colors">
                        <Linkedin className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
