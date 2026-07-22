import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Eye, Filter, ArrowUpRight, FileText, Loader2, Database, ShieldCheck, Globe, Copy, Check, Link2 } from 'lucide-react';
import { ResearchPaper } from '../types';
import { papers as initialPapers } from '../data/papers';

export const ResearchTab: React.FC = () => {
  const [allPapers] = useState<ResearchPaper[]>(initialPapers);
  const [searchTitle, setSearchTitle] = useState('');
  const [searchId, setSearchId] = useState('');
  
  // Active search criteria applied on "Execute Search"
  const [appliedSearchTitle, setAppliedSearchTitle] = useState('');
  const [appliedSearchId, setAppliedSearchId] = useState('');

  // 5-Second Loading Screen State
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingStep, setLoadingStep] = useState('');

  // Selected Paper for full modal detail view
  const [selectedPaper, setSelectedPaper] = useState<ResearchPaper | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Generate deep canonical institutional permalink URL
  const getPermalink = (paper: ResearchPaper) => {
    const slug = paper.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    return `https://galgotiasieee.me/studentchapter/researchpaper/${paper.id}/${slug}`;
  };

  // Trigger search with 5-second simulated institutional database query animation
  const triggerSearch = (titleVal: string, idVal: string) => {
    setIsLoading(true);
    setLoadingProgress(5);
    setLoadingStep('Connecting to IEEE Xplore & Institutional Archives...');

    // Timeline step 1: 1s
    setTimeout(() => {
      setLoadingProgress(30);
      setLoadingStep(`Querying Reference Index [${idVal.trim() || titleVal.trim() || 'Record'}]...`);
    }, 1000);

    // Timeline step 2: 2.5s
    setTimeout(() => {
      setLoadingProgress(65);
      setLoadingStep('Validating Author Credentials & Open Access Licenses...');
    }, 2500);

    // Timeline step 3: 4s
    setTimeout(() => {
      setLoadingProgress(90);
      setLoadingStep('Decrypting Peer-Reviewed Framework & Full Abstract...');
    }, 4000);

    // Timeline step 4: 5s (5000ms complete) -> ONLY NOW update applied search state & reveal results!
    setTimeout(() => {
      setAppliedSearchTitle(titleVal.trim().toLowerCase());
      setAppliedSearchId(idVal.trim().toLowerCase());
      setLoadingProgress(100);
      setIsLoading(false);
    }, 5000);
  };

  // Handle URL deep-linking or pasted permalink URL on mount
  React.useEffect(() => {
    const href = window.location.href.toLowerCase();
    const hash = window.location.hash.toLowerCase();

    if (href.includes('10314') || hash.includes('10314')) {
      setSearchId('10314');
      triggerSearch('', '10314');
    }
  }, []);

  // Helper to extract paper ID if user pastes full permalink URL into search input
  const parseQueryOrUrl = (raw: string) => {
    const trimmed = raw.trim();
    const match = trimmed.match(/(\d{5})/);
    return match ? match[1] : trimmed;
  };

  // Handle Search Execution
  const handleExecuteSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanTitle = parseQueryOrUrl(searchTitle);
    const cleanId = parseQueryOrUrl(searchId);

    if (cleanTitle || cleanId) {
      triggerSearch(cleanTitle, cleanId);
    }
  };

  // Clear Filters
  const handleResetFilters = () => {
    setSearchTitle('');
    setSearchId('');
    setAppliedSearchTitle('');
    setAppliedSearchId('');
    setIsLoading(false);
  };

  // Check if any applied search query is active
  const activeTitle = appliedSearchTitle.trim();
  const activeId = appliedSearchId.trim();

  const hasSearchQuery = activeTitle.length > 0 || activeId.length > 0;

  // Normalize text string for resilient academic search matching
  const normalizeForSearch = (str: string) => {
    return str
      .toLowerCase()
      .replace(/[.,¹²³⁴⁵⁶⁷⁸⁹⁰]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  };

  // Filter papers based ONLY on applied search criteria after loading completion
  const filteredPapers = hasSearchQuery
    ? allPapers.filter(paper => {
        const normTitleQuery = normalizeForSearch(activeTitle);
        const normIdQuery = normalizeForSearch(activeId);

        const paperFullText = normalizeForSearch(
          `${paper.id} ${paper.title} ${paper.authors} ${paper.category} ${paper.abstract} ${(paper.authorEmails || []).join(' ')} ${(paper.affiliations || []).join(' ')}`
        );

        const matchesTitle = !normTitleQuery || 
                             normTitleQuery.split(' ').every(token => paperFullText.includes(token));

        const matchesId = !normIdQuery || 
                          normIdQuery.split(' ').every(token => paperFullText.includes(token));

        return matchesTitle && matchesId;
      })
    : [];

  // Identify featured vs secondary
  const featuredPaper = filteredPapers.length > 0 ? filteredPapers[0] : null;
  const secondaryPapers = filteredPapers.length > 1 ? filteredPapers.slice(1) : [];

  return (
    <div className="bg-slate-50/20 py-8 sm:py-12 lg:py-16" id="research-tab-wrapper">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Banner Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 font-sans">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-rose-700">Scholarly Archives</span>
          <h1 className="mt-3 text-3xl font-black font-serif text-slate-900 tracking-tight sm:text-5xl">
            Institutional Repository & Research
          </h1>
          <p className="mt-4 text-sm text-slate-500 leading-relaxed">
            Query the academic records of Galgotias University IEEE Student Branch. Enter a Paper Reference ID or author name to retrieve published manuscripts.
          </p>
        </div>

        {/* Search and Filters Console */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs mb-10">
          <form onSubmit={handleExecuteSearch} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            <div className="md:col-span-5">
              <label htmlFor="search-title" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Search Publications
              </label>
              <div className="relative">
                <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  id="search-title"
                  placeholder="Search title, author, keyword..."
                  value={searchTitle}
                  onChange={(e) => setSearchTitle(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-700/20 focus:border-rose-700 transition-all"
                />
              </div>
            </div>

            <div className="md:col-span-4">
              <label htmlFor="search-id" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Paper Reference / ID
              </label>
              <div className="relative">
                <FileText className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  id="search-id"
                  placeholder="Enter Paper ID..."
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-700/20 focus:border-rose-700 transition-all font-mono"
                />
              </div>
            </div>

            <div className="md:col-span-3 flex gap-2">
              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-rose-700 hover:bg-rose-800 active:bg-rose-900 disabled:opacity-50 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-all shadow-sm hover:shadow cursor-pointer"
                id="execute-search-btn"
              >
                {isLoading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Filter className="h-3.5 w-3.5" />}
                {isLoading ? 'Querying...' : 'Search'}
              </button>
              {(appliedSearchTitle || appliedSearchId || searchTitle || searchId) && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  disabled={isLoading}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold py-2.5 px-3 rounded-xl transition-all cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Primary Repository Content View */}
        <div className="space-y-8">
          {isLoading ? (
            /* 5-Second Academic Loading Screen */
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl border border-slate-200/90 p-8 sm:p-12 text-center max-w-xl mx-auto shadow-md relative overflow-hidden font-sans"
            >
              {/* Animated top progress bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-slate-100 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-rose-600 via-rose-700 to-red-800"
                  initial={{ width: '0%' }}
                  animate={{ width: `${loadingProgress}%` }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                />
              </div>

              <div className="relative z-10">
                <div className="h-16 w-16 rounded-2xl bg-rose-50 text-rose-700 flex items-center justify-center mx-auto mb-5 border border-rose-100 shadow-xs relative">
                  <Loader2 className="h-8 w-8 animate-spin text-rose-700" />
                  <Database className="h-4 w-4 text-rose-900 absolute bottom-2.5 right-2.5" />
                </div>

                <span className="text-[11px] font-mono font-bold text-rose-700 uppercase tracking-widest bg-rose-50 px-3 py-1 rounded-full border border-rose-100 inline-block">
                  Database Querying ({loadingProgress}%)
                </span>

                <h3 className="text-lg font-bold text-slate-900 font-serif mt-4">
                  Retrieving Academic Manuscript...
                </h3>

                <p className="text-xs font-mono text-slate-600 mt-3 bg-slate-50 py-3 px-4 rounded-xl border border-slate-200/80 min-h-[44px] flex items-center justify-center">
                  {loadingStep}
                </p>

                <div className="mt-6 flex items-center justify-center gap-2 text-[11px] text-slate-400 font-mono">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                  <span>IEEE Institutional Repository Protocol</span>
                </div>
              </div>
            </motion.div>
          ) : !hasSearchQuery ? null : filteredPapers.length === 0 ? (
            /* No match state */
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-xl mx-auto">
              <div className="h-12 w-12 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center mx-auto mb-4 border border-slate-200">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-serif">No Manuscripts Found</h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                We couldn't find any papers matching your query. Please verify the Paper Reference ID or author name.
              </p>
              <button
                onClick={handleResetFilters}
                className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg hover:bg-slate-800 transition-all cursor-pointer"
              >
                Clear Search
              </button>
            </div>
          ) : (
            /* Results View */
            <div className="space-y-8">
              {/* 1. Featured Paper Card (First element in list) */}
              {featuredPaper && (
                <motion.div
                  layoutId={`paper-${featuredPaper.id}`}
                  className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm relative overflow-hidden group hover:shadow-md transition-all"
                >
                  {/* Top badging info */}
                  <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                    <span className="text-[10px] bg-rose-50 text-rose-700 border border-rose-100 px-2.5 py-0.5 rounded font-bold uppercase tracking-wider">
                      Featured Publication
                    </span>
                    <span className="text-xs font-mono text-slate-400 font-bold bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                      ID: {featuredPaper.id}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black font-serif text-slate-900 leading-tight tracking-tight group-hover:text-rose-700 transition-colors">
                    {featuredPaper.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 text-xs text-slate-500 font-medium mt-3">
                    <span>Authored by <strong className="text-slate-800 font-bold">{featuredPaper.authors}</strong></span>
                    <span>•</span>
                    <span>Released {featuredPaper.date}</span>
                  </div>

                  {/* Canonical Institutional URI */}
                  <div className="mt-3.5 bg-slate-900 text-slate-300 p-2.5 rounded-xl border border-slate-800 font-mono text-[11px] flex items-center gap-2 overflow-hidden shadow-xs">
                    <Globe className="h-3.5 w-3.5 text-rose-400 shrink-0" />
                    <span className="truncate text-slate-300 font-semibold select-all">
                      {getPermalink(featuredPaper)}
                    </span>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 font-serif">
                    {featuredPaper.abstract}
                  </p>

                  <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
                    <span className="text-[10px] bg-emerald-50 text-emerald-800 border border-emerald-100 px-2.5 py-1 rounded-md font-bold select-none">
                      Open Access PDF
                    </span>
                    <button
                      onClick={() => setSelectedPaper(featuredPaper)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-rose-700 hover:bg-rose-800 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                    >
                      Read Abstract & Full Details
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* 2. Secondary Papers Grid */}
              {secondaryPapers.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {secondaryPapers.map(paper => (
                    <motion.div
                      key={paper.id}
                      layoutId={`paper-${paper.id}`}
                      className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between group hover:shadow-md transition-all"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3 text-[10px] font-mono text-slate-400">
                          <span className="text-rose-700 bg-rose-50 px-2 py-0.5 rounded font-bold uppercase tracking-wider border border-rose-100">
                            {paper.category}
                          </span>
                          <span className="font-bold">ID: {paper.id}</span>
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 leading-snug tracking-tight line-clamp-2 group-hover:text-rose-700 transition-colors">
                          {paper.title}
                        </h4>
                        <span className="block text-[11px] text-slate-500 mt-2 font-medium">
                          By {paper.authors} ({paper.date})
                        </span>
                      </div>

                      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                        <button
                          onClick={() => setSelectedPaper(paper)}
                          className="text-xs font-bold text-slate-700 hover:text-rose-700 flex items-center gap-1.5 cursor-pointer"
                        >
                          <Eye className="h-4 w-4 text-slate-400" />
                          Expand Abstract
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Expanded Detail Modal Dialog */}
      <AnimatePresence>
        {selectedPaper && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 border border-slate-200 shadow-xl relative max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-[10px] bg-rose-50 text-rose-700 border border-rose-100 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                    {selectedPaper.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400 font-bold ml-3">ID: {selectedPaper.id}</span>
                </div>
                <button
                  onClick={() => setSelectedPaper(null)}
                  className="text-slate-400 hover:text-slate-600 text-sm font-bold p-1 rounded-full hover:bg-slate-50 cursor-pointer"
                  id="close-paper-modal"
                >
                  ✕
                </button>
              </div>

              <h3 className="text-lg sm:text-xl font-black font-serif text-slate-900 tracking-tight leading-snug">
                {selectedPaper.title}
              </h3>

              <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-500 font-medium">
                <span>By <strong className="text-slate-800 font-bold">{selectedPaper.authors}</strong></span>
                <span>•</span>
                <span>Published {selectedPaper.date}</span>
              </div>

              {selectedPaper.affiliations && selectedPaper.affiliations.length > 0 && (
                <div className="mt-3 text-[11px] text-slate-500 space-y-1 bg-slate-50 p-3.5 rounded-xl border border-slate-100 font-sans">
                  {selectedPaper.affiliations.map((aff, i) => (
                    <p key={i}>{aff}</p>
                  ))}
                </div>
              )}

              {selectedPaper.authorEmails && selectedPaper.authorEmails.length > 0 && (
                <div className="mt-3 text-[11px] text-rose-700 font-mono flex flex-wrap gap-x-3 gap-y-1 bg-rose-50/50 p-3 rounded-xl border border-rose-100">
                  <span className="font-bold text-slate-600 font-sans w-full sm:w-auto">Contact Emails:</span>
                  {selectedPaper.authorEmails.map((email, i) => (
                    <a key={i} href={`mailto:${email}`} className="hover:underline font-bold">
                      {email}
                    </a>
                  ))}
                </div>
              )}

              {/* Canonical Institutional Permalink */}
              <div className="mt-3.5 bg-slate-900 text-slate-200 p-3.5 rounded-xl border border-slate-800 font-mono text-[11px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-inner">
                <div className="flex items-center gap-2 overflow-hidden w-full">
                  <Globe className="h-4 w-4 text-rose-500 shrink-0" />
                  <span className="truncate text-slate-300 select-all font-semibold break-all">
                    {getPermalink(selectedPaper)}
                  </span>
                </div>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(getPermalink(selectedPaper));
                    setCopiedLink(true);
                    setTimeout(() => setCopiedLink(false), 3000);
                  }}
                  className="shrink-0 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-bold text-rose-400 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer border border-slate-700"
                >
                  {copiedLink ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                  {copiedLink ? 'Copied!' : 'Copy Link'}
                </button>
              </div>

              <div className="mt-5 border-t border-slate-100 pt-4">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Abstract</h4>
                <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100 font-serif">
                  {selectedPaper.abstract}
                </p>
              </div>

              <div className="mt-6 flex justify-end gap-3 border-t border-slate-100 pt-4">
                <button
                  onClick={() => setSelectedPaper(null)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-all cursor-pointer"
                >
                  Dismiss
                </button>
                <a
                  href={selectedPaper.pdfUrl && selectedPaper.pdfUrl !== '#' ? selectedPaper.pdfUrl : '/manuscript-10314.pdf'}
                  download={`Manuscript-${selectedPaper.id}.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-rose-700 hover:bg-rose-800 rounded-lg transition-all cursor-pointer shadow-xs"
                  id="download-pdf-btn"
                >
                  Download Manuscript (PDF)
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
