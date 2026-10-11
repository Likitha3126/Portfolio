import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, GitBranch, Binary, Layers, Compass } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config/portfolio';
import { SectionHeader } from './SectionHeader';

export const About: React.FC = () => {
  const { developer } = PORTFOLIO_CONFIG;

  const pillars = [
    {
      icon: Cpu,
      title: 'Artificial Intelligence & Machine Learning',
      description:
        'Focusing on foundational machine learning models, Retrieval-Augmented Generation (RAG) architectures, vector similarity search, and explainable heuristic evaluation algorithms.',
      tag: 'Models & Pipelines',
      color: 'from-purple-500/20 to-accent-violet/5',
      borderColor: 'group-hover:border-accent-violet/40',
      iconColor: 'text-accent-violet',
    },
    {
      icon: Terminal,
      title: 'Modern Python Development',
      description:
        'Writing modular, readable Python software—from FastAPI microservices and asynchronous data pipelines to sensor analysis scripts and model inference servers.',
      tag: 'Software Engineering',
      color: 'from-cyan-500/20 to-accent-cyan/5',
      borderColor: 'group-hover:border-accent-cyan/40',
      iconColor: 'text-accent-cyan',
    },
    {
      icon: Binary,
      title: 'Data Structures & Algorithms',
      description:
        'Cultivating algorithmic problem-solving habits with deep focus on asymptotic complexity, dynamic programming, graphs, and clean optimization choices.',
      tag: 'Core CS Fundamentals',
      color: 'from-indigo-500/20 to-indigo-500/5',
      borderColor: 'group-hover:border-indigo-400/40',
      iconColor: 'text-indigo-400',
    },
    {
      icon: GitBranch,
      title: 'Open Source & Public Building',
      description:
        'Believing that true technical growth happens when code is placed under peer scrutiny. Committed to readable repositories, reproducible code, and contributing to open tooling.',
      tag: 'Collaboration',
      color: 'from-emerald-500/20 to-emerald-500/5',
      borderColor: 'group-hover:border-emerald-400/40',
      iconColor: 'text-emerald-400',
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#09090B]">
      {/* Background radial accent */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-accent-violet/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="ENGINEERING PHILOSOPHY"
          title={developer.aboutHeading}
          subtitle="Building practical software by bridging foundational computer science theory with intelligent machine learning workflows."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Editorial Technical Intro */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-2xl bg-surface border border-white/[0.08] relative overflow-hidden group shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
              {/* Subtle top gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-violet via-indigo-500 to-accent-cyan" />

              <div className="flex items-center gap-2 text-xs font-mono text-muted mb-4">
                <Compass className="w-4 h-4 text-accent-cyan" />
                <span>HOW I APPROACH PROBLEM SOLVING</span>
              </div>

              <p className="text-base sm:text-lg text-[#F5F5F7] leading-relaxed font-normal">
                {developer.aboutIntro}
              </p>

              <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed pt-3">
                Whether diagnosing GNSS outages through inertial sensors in{' '}
                <span className="text-white font-medium">NavDR</span>, combating synthetic feed spam in{' '}
                <span className="text-white font-medium">SlopFilter</span>, or building semantic search with{' '}
                <span className="text-white font-medium">RAG</span>, the goal is always the same: craft reliable, explainable code that addresses genuine real-world friction.
              </p>

              {/* Interest Labels */}
              <div className="pt-6 border-t border-white/[0.08] mt-6">
                <div className="text-xs font-mono uppercase tracking-wider text-muted mb-3 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-accent-violet" />
                  <span>PRIMARY DOMAINS OF INTEREST</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {developer.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium text-white bg-white/[0.04] border border-white/10 hover:border-accent-cyan/50 hover:bg-accent-cyan/[0.06] transition-all cursor-default"
                    >
                      #{interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick architectural quote */}
            <div className="p-5 rounded-xl border border-white/[0.05] bg-white/[0.01] flex items-start gap-3">
              <span className="text-2xl font-serif text-accent-cyan select-none">“</span>
              <p className="text-xs sm:text-sm text-muted font-mono leading-relaxed">
                Code should not be a black box. The most resilient software is built with clean abstractions, mathematical sanity, and honest edge-case handling.
              </p>
            </div>
          </motion.div>

          {/* Technical Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative p-6 rounded-2xl bg-surface border border-white/[0.08] ${pillar.borderColor} hover:bg-[#15151D] transition-all duration-300 flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] ${pillar.iconColor}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono text-muted uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.05]">
                        {pillar.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-[#F5F5F7] group-hover:text-white transition-colors mb-2.5">
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-subtle">
                    <span>Principle 0{index + 1}</span>
                    <span className="text-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                      Active Practice →
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
