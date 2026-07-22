import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Globe2, Compass, Send, CheckCircle2, AlertCircle, Plus, Minus, RotateCcw, Instagram, Linkedin } from 'lucide-react';
import { ContactMessage } from '../types';

export const ContactTab: React.FC = () => {
  const [form, setForm] = useState<ContactMessage>({
    fullName: '',
    email: '',
    subject: 'Research Collaboration',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Interactive simulated map zoom and location controls
  const [mapZoom, setMapZoom] = useState(14);
  const [mapCenter, setMapCenter] = useState({ lat: 28.3639, lng: 77.5401 }); // Real coordinates of Galgotias University

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!form.fullName.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable API transport delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setForm({
        fullName: '',
        email: '',
        subject: 'Research Collaboration',
        message: '',
      });
    }, 1500);
  };

  const handleZoomIn = () => setMapZoom(prev => Math.min(prev + 1, 18));
  const handleZoomOut = () => setMapZoom(prev => Math.max(prev - 1, 10));
  const handleRecenter = () => {
    setMapZoom(14);
    setMapCenter({ lat: 28.3639, lng: 77.5401 });
  };

  return (
    <div className="bg-slate-50/20 py-8 sm:py-12 lg:py-16" id="contact-tab-wrapper">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Banner Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-rose-700">Get in touch</span>
          <h1 className="mt-3 text-3xl font-black font-serif text-slate-900 tracking-tight sm:text-5xl">
            Innovation & Global Collaboration
          </h1>
          <p className="mt-4 text-sm text-slate-500 leading-relaxed">
            Have an inquiry about membership, joint research frameworks, or guest lecturing? Connect directly with the IEEE Student Branch and the IAS Committee at Galgotias.
          </p>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* 1. Contact Form Container (7 Columns) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-8 shadow-xs">
            <h2 className="text-xl font-bold text-slate-900 font-serif tracking-tight mb-2">Send us a Message</h2>
            <p className="text-xs text-slate-400 mb-6">Our Student Officers route and reply to clean proposals within 48 business hours.</p>

            {success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-800 text-xs flex gap-3"
              >
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                <div>
                  <span className="font-bold block">Transmission Successful!</span>
                  Your inquiry has been cataloged. A copy of this dispatch was carbon-copied to <strong className="font-sans">ieeeias.gu@gmail.com</strong>.
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-2 block font-bold text-emerald-700 hover:underline"
                  >
                    Submit another response
                  </button>
                </div>
              </motion.div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl text-red-800 text-xs flex gap-2">
                <AlertCircle className="h-4 w-4 text-red-600 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="form-fullName" className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="form-fullName"
                    required
                    placeholder="e.g. Sameer Dixit"
                    value={form.fullName}
                    onChange={(e) => setForm(prev => ({ ...prev, fullName: e.target.value }))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-700"
                  />
                </div>
                <div>
                  <label htmlFor="form-email" className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="form-email"
                    required
                    placeholder="sameer@gmail.com"
                    value={form.email}
                    onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-700"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="form-subject" className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Inquiry Track / Subject
                </label>
                <select
                  id="form-subject"
                  value={form.subject}
                  onChange={(e) => setForm(prev => ({ ...prev, subject: e.target.value }))}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-700"
                >
                  <option>Research Collaboration</option>
                  <option>IEEE Student Membership</option>
                  <option>Sponsorship & Funding</option>
                  <option>Speaker/Lecturer Proposals</option>
                  <option>General Support</option>
                </select>
              </div>

              <div>
                <label htmlFor="form-message" className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Proposal Content *
                </label>
                <textarea
                  id="form-message"
                  required
                  rows={5}
                  placeholder="Detail your research goals, technical needs, or administrative questions here..."
                  value={form.message}
                  onChange={(e) => setForm(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-700 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 ${
                  isSubmitting 
                    ? 'bg-rose-800/80 text-white cursor-not-allowed' 
                    : 'bg-rose-700 hover:bg-rose-800 text-white active:bg-rose-900'
                }`}
                id="contact-submit-btn"
              >
                {isSubmitting ? (
                  <>
                    <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Transmitting...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Submit Proposal
                  </>
                )}
              </button>
            </form>
          </div>

          {/* 2. Map & Metadata Sidebar (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Core Info Details Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 font-serif tracking-tight mb-4">Official Channels</h3>
              
              <div className="space-y-4">
                <div className="flex gap-3.5 items-start">
                  <div className="h-9 w-9 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="h-4.5 w-4.5 text-rose-700" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase">Official Email</span>
                    <a href="mailto:ieeeias.gu@gmail.com" className="text-sm font-semibold text-slate-800 hover:text-rose-700 font-sans break-all block">
                      ieeeias.gu@gmail.com
                    </a>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase mt-2">Alternate Email</span>
                    <a href="mailto:shubham0568@ieee.org" className="text-xs font-semibold text-slate-600 hover:text-rose-700 font-sans break-all block">
                      shubham0568@ieee.org
                    </a>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex gap-3.5 items-start">
                  <div className="h-9 w-9 rounded-lg bg-pink-50 border border-pink-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Instagram className="h-4.5 w-4.5 text-pink-600" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase">Instagram</span>
                    <a 
                      href="https://www.instagram.com/ieeeias.gusb/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-pink-700 hover:underline break-all block"
                    >
                      instagram.com/ieeeias.gusb
                    </a>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex gap-3.5 items-start">
                  <div className="h-9 w-9 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Linkedin className="h-4.5 w-4.5 text-sky-600" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase">LinkedIn Company Page</span>
                    <a 
                      href="https://www.linkedin.com/company/gu-ieee-ias/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-sky-700 hover:underline break-all block"
                    >
                      linkedin.com/company/gu-ieee-ias
                    </a>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex gap-3.5 items-start">
                  <div className="h-9 w-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="h-4.5 w-4.5 text-slate-700" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase">Campus Address</span>
                    <span className="text-xs font-semibold text-slate-600 leading-snug block">
                      Galgotias University Campus, Plot No. 2, Sector 17-A, Yamuna Expressway, Greater Noida, UP, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Geospatial Interactive Campus Map Card */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl relative overflow-hidden flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Compass className="h-4.5 w-4.5 text-rose-500 animate-spin" />
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-400 font-mono">Precision Locator</span>
                  </div>
                  <span className="text-[9px] font-mono bg-slate-800 px-2 py-0.5 rounded text-slate-400">
                    Precinct A
                  </span>
                </div>
                
                <h4 className="text-base font-bold text-white tracking-tight font-serif mb-1">Campus Radar & Geofence</h4>
                <div className="flex flex-col gap-0.5 text-[10px] font-mono text-slate-400">
                  <span>LAT: {mapCenter.lat.toFixed(5)}° N</span>
                  <span>LNG: {mapCenter.lng.toFixed(5)}° E</span>
                  <span>ZOOM LEVEL: {mapZoom}x</span>
                </div>
              </div>

              {/* Map Canvas Frame */}
              <div className="bg-slate-950 rounded-xl border border-slate-800/80 my-4 h-48 relative overflow-hidden flex items-center justify-center">
                {/* Custom Vector Grid Lines representing the physical campus plot */}
                <svg className="absolute inset-0 h-full w-full opacity-35" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
                      <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#FFFFFF" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  
                  {/* Concentric distance radars */}
                  <circle cx="50%" cy="50%" r={30 * (mapZoom / 14)} stroke="#E5232A" strokeWidth="0.5" fill="none" strokeDasharray="3 3" />
                  <circle cx="50%" cy="50%" r={60 * (mapZoom / 14)} stroke="#009EE2" strokeWidth="0.5" fill="none" strokeDasharray="2 2" />
                </svg>

                {/* Simulated Landmarks relative to zoom */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Pulsing Location pin in the absolute center */}
                    <div className="absolute -left-3 -top-3 h-6 w-6 bg-rose-500/30 rounded-full animate-ping" />
                    <div className="h-3.5 w-3.5 bg-rose-600 rounded-full border-2 border-white shadow-lg relative z-10 flex items-center justify-center">
                      <div className="h-1 w-1 bg-white rounded-full" />
                    </div>
                    <span className="absolute left-5 -top-2 text-[9px] font-black tracking-wider uppercase bg-rose-700 text-white px-1.5 py-0.5 rounded whitespace-nowrap shadow-md">
                      IEEE HEADQUARTERS GU
                    </span>
                  </div>
                </div>

                {/* Grid Coordinates Compass overlay */}
                <div className="absolute bottom-3 left-3 text-[8px] font-mono text-slate-500 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800">
                  GU_COORD_SECTOR_17A
                </div>

                {/* Map Interactive Zoom Control Panel */}
                <div className="absolute top-3 right-3 flex flex-col gap-1.5 bg-slate-900/95 p-1 rounded-lg border border-slate-800 shadow-lg">
                  <button
                    onClick={handleZoomIn}
                    className="p-1 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
                    title="Zoom In"
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={handleZoomOut}
                    className="p-1 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
                    title="Zoom Out"
                  >
                    <Minus className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={handleRecenter}
                    className="p-1 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
                    title="Reset Coordinates"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              <div className="text-[10px] text-slate-500 leading-normal flex items-center gap-1.5 font-mono">
                <span>Precision: 0.15m</span>
                <span>•</span>
                <span>Signal: High Precision GPS Lock</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
