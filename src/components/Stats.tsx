import React from 'react';
import { motion } from 'motion/react';
import { Users, Award, Landmark, CalendarDays } from 'lucide-react';

export const Stats: React.FC = () => {
  const statsItems = [
    {
      id: 'stat-members',
      value: '500+',
      label: 'Active Student Members',
      description: 'Engaged in engineering, research, and tech workshops.',
      icon: Users,
      iconColor: 'text-rose-600 bg-rose-50 border-rose-100',
    },
    {
      id: 'stat-awards',
      value: '45+',
      label: 'International Awards',
      description: 'Earned at global hackathons, symposiums, and projects.',
      icon: Award,
      iconColor: 'text-amber-600 bg-amber-50 border-amber-100',
    },
    {
      id: 'stat-societies',
      value: '12',
      label: 'Technical Societies',
      description: 'Including IAS, CS, WIE, PES, and signal processing chapters.',
      icon: Landmark,
      iconColor: 'text-sky-600 bg-sky-50 border-sky-100',
    },
    {
      id: 'stat-events',
      value: '150+',
      label: 'Annual Events',
      description: 'Lectures, hackathons, seminars, and networking sessions.',
      icon: CalendarDays,
      iconColor: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    },
  ];

  return (
    <section className="bg-white border-y border-slate-100/90 py-12 relative z-10" id="stats-counter-row">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {statsItems.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col gap-3 p-4 rounded-2xl hover:bg-slate-50/50 transition-colors duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg border text-sm ${stat.iconColor}`}>
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <span className="text-3xl font-black font-sans text-slate-900 tracking-tight">
                    {stat.value}
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 tracking-tight leading-snug">
                    {stat.label}
                  </h4>
                  <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
