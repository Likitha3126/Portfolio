import React from 'react';
import { motion } from 'framer-motion';
import { Compass, BookOpen, Clock, Target, ArrowRight } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config/portfolio';
import { SectionHeader } from './SectionHeader';

export const Learning: React.FC = () => {
  const { learning, developer } = PORTFOLIO_CONFIG;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active Focus':
        return (
          <span className="px-3 py-1 rounded-full text-[11px] font-mono text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/30 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-ping" />
            Active Focus
          </span>
        );
      case 'Continuous Preparation':
        return (
          <span className="px-3 py-1 rounded-full text-[11px] font-mono text-accent-violet bg-accent-violet/10 border border-accent-violet/30 flex items-center gap-1.5">
            <Clock className="w-3 h-3" />
            Continuous Prep
          </span>
        );
      case 'In Progress':
        return (
          <span className="px-3 py-1 rounded-full text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-1.5">
            <Target className="w-3 h-3" />
            In Progress
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="learning" className="relative py-24 sm:py-32 bg-[#09090B]">
      {/* Background ambient light */}
      <div
        className="absolute bottom-10 left-1/3 w-80 h-80 bg-accent-cyan/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="GROWTH ROADMAP"
          title={learning.heading}
          subtitle={learning.subtitle}
        />

        <div className="relative mt-12">
          {/* Vertical Timeline Guide for Desktop */}
          <div
            className="hidden md:block absolute left-8 top-4 bottom-4 w-[2px] bg-gradient-to-b from-accent-violet via-indigo-500 to-accent-cyan opacity-25"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {learning.items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-0 md:pl-20 group"
              >
                {/* Timeline node marker for Desktop */}
                <div
                  className="hidden md:flex absolute left-6 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-[#09090B] border-2 border-accent-violet group-hover:border-accent-cyan group-hover:scale-125 transition-all shadow-[0_0_10px_rgba(139,92,246,0.5)] z-10"
                  aria-hidden="true"
                />

                <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-white/[0.08] hover:border-accent-cyan/40 hover:bg-[#15151F] transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-muted px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.05]">
                        {item.area}
                      </span>
                    </div>
                    <div>{getStatusBadge(item.status)}</div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F7] group-hover:text-white transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                    {item.description}
                  </p>

                  {/* Focus Topic Tags */}
                  <div className="mt-6 pt-4 border-t border-white/[0.04] flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-subtle flex items-center gap-1 mr-2">
                      <Compass className="w-3.5 h-3.5 text-accent-cyan" />
                      Key Focus:
                    </span>
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-mono rounded-md bg-white/[0.02] text-muted border border-white/[0.06] group-hover:border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing Thought Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-accent-violet/10 via-surface to-accent-cyan/10 border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-surface border border-white/10 text-accent-cyan">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">First Principles Over Shortcuts</h4>
              <p className="text-xs sm:text-sm text-muted font-mono mt-0.5">
                Every line of code and machine learning model rests on core algorithmic rigor.
              </p>
            </div>
          </div>

          <a
            href={developer.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono text-white bg-white/[0.04] hover:bg-white/10 border border-white/10 transition-colors"
          >
            <span>Follow Public Progress</span>
            <ArrowRight className="w-4 h-4 text-accent-cyan" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
