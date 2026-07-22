import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { AboutBento } from './components/AboutBento';
import { LeadershipSection } from './components/LeadershipSection';
import { ResearchTab } from './components/ResearchTab';
import { ContactTab } from './components/ContactTab';
import { Footer } from './components/Footer';
import { ActiveTab } from './types';
import { X, Sparkles, CheckCircle, GraduationCap, ChevronRight } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [joinSuccess, setJoinSuccess] = useState(false);

  // Auto-detect research paper permalink in browser URL
  React.useEffect(() => {
    const href = window.location.href.toLowerCase();
    const pathname = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();

    if (
      href.includes('research') ||
      href.includes('10314') ||
      pathname.includes('studentchapter') ||
      hash.includes('10314') ||
      hash.includes('research')
    ) {
      setActiveTab('research');
    }
  }, []);

  // Form states for Join Membership
  const [candidateName, setCandidateName] = useState('');
  const [candidateEmail, setCandidateEmail] = useState('');
  const [candidateBranch, setCandidateBranch] = useState('CSE');

  const handleJoinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!candidateName.trim() || !candidateEmail.trim()) return;

    setJoinSuccess(true);
    // Auto-reset success screen after some delay, then close modal
    setTimeout(() => {
      setJoinSuccess(false);
      setIsJoinModalOpen(false);
      // Clean inputs
      setCandidateName('');
      setCandidateEmail('');
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans select-none antialiased">
      {/* 1. Dynamic Header Navigation */}
      <Header
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onJoinClick={() => setIsJoinModalOpen(true)}
      />

      {/* 2. Main Content Stage with Fluid Transitions */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Landing Hero */}
              <Hero
                onTabChange={(tab) => {
                  setActiveTab(tab);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onExploreInitiatives={() => {
                  setActiveTab('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
              
              {/* Trust Metric Counters */}
              <Stats />
              
              {/* Bento Grid Highlights */}
              <AboutBento />

              {/* Fast-access CTA panel to meet Board of Directors */}
              <section className="bg-white py-16 text-center border-b border-slate-100">
                <div className="max-w-2xl mx-auto px-6">
                  <div className="h-10 w-10 bg-rose-50 text-rose-700 border border-rose-100 flex items-center justify-center rounded-lg mx-auto mb-4">
                    <GraduationCap className="h-5. w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-serif tracking-tight">
                    Review Our Official Leadership & Advisors
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed max-w-lg mx-auto">
                    Take a deep look into the academic achievements of our Faculty Advisors and the managing student body (Board of Directors) at Galgotias University.
                  </p>
                  <button
                    onClick={() => {
                      setActiveTab('about');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-rose-700 hover:bg-rose-800 active:bg-rose-900 rounded-lg transition-all shadow-sm"
                    id="home-visit-board-btn"
                  >
                    Meet Board of Directors
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </section>
            </motion.div>
          )}

          {activeTab === 'research' && (
            <motion.div
              key="research"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ResearchTab />
            </motion.div>
          )}

          {activeTab === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <LeadershipSection />
            </motion.div>
          )}

          {activeTab === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ContactTab />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* 3. Global Footer Component */}
      <Footer 
        onTabChange={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }} 
      />

      {/* ================= Membership Join Chapter Dialog ================= */}
      <AnimatePresence>
        {isJoinModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl max-w-md w-full p-8 border border-slate-200 shadow-xl relative"
            >
              {/* Close pin */}
              <button
                onClick={() => setIsJoinModalOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-50 transition-colors"
                id="close-join-modal"
              >
                <X className="h-4.5 w-4.5" />
              </button>

              {joinSuccess ? (
                <div className="text-center py-6">
                  <div className="h-12 w-12 bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center rounded-full mx-auto mb-4 animate-bounce">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Application Recorded!</h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed max-w-xs mx-auto">
                    Excellent, <strong>{candidateName}</strong>! Your technical profile was dispatched to our Chapter Chairperson (Shubham Pal). 
                    Check your email at <strong>{candidateEmail}</strong> for membership onboarding materials.
                  </p>
                  <span className="block mt-4 text-[10px] text-rose-700 font-bold uppercase animate-pulse">
                    Routing details to IEEE UP Section...
                  </span>
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-2 text-rose-700 mb-3">
                    <Sparkles className="h-5 w-5 text-rose-600 animate-spin" />
                    <span className="text-[10px] font-black uppercase tracking-wider">Join IEEE Student Chapter</span>
                  </div>

                  <h3 className="text-xl font-black font-serif text-slate-900 tracking-tight leading-none mb-1">
                    Begin Your Technical Journey
                  </h3>
                  <p className="text-xs text-slate-400 leading-normal mb-6">
                    Connect with over 500+ active engineering members, secure scholarships, and access elite research libraries.
                  </p>

                  <form onSubmit={handleJoinSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="join-name" className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        id="join-name"
                        required
                        placeholder="e.g. Priyanshu Sharma"
                        value={candidateName}
                        onChange={(e) => setCandidateName(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 px-3.5 text-xs focus:outline-none focus:ring-1 focus:ring-rose-700"
                      />
                    </div>

                    <div>
                      <label htmlFor="join-email" className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        University Email Address *
                      </label>
                      <input
                        type="email"
                        id="join-email"
                        required
                        placeholder="e.g. student@galgotiasuniversity.edu.in"
                        value={candidateEmail}
                        onChange={(e) => setCandidateEmail(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 px-3.5 text-xs focus:outline-none focus:ring-1 focus:ring-rose-700"
                      />
                    </div>

                    <div>
                      <label htmlFor="join-branch" className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Branch of Study
                      </label>
                      <select
                        id="join-branch"
                        value={candidateBranch}
                        onChange={(e) => setCandidateBranch(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 px-3 text-xs focus:outline-none focus:ring-1 focus:ring-rose-700"
                      >
                        <option>Computer Science & Engineering (CSE)</option>
                        <option>Electrical, Electronics & Communication (EECE)</option>
                        <option>Mechanical Engineering (ME)</option>
                        <option>Civil Engineering (CE)</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-4 bg-rose-700 hover:bg-rose-800 text-white text-xs font-bold uppercase tracking-wider py-3 rounded-lg transition-all shadow-sm"
                      id="join-enroll-btn"
                    >
                      Submit Member Enrollment
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
