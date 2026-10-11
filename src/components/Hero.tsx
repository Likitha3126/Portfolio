import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Sparkles, Terminal, Code2 } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config/portfolio';
import { HeroCanvas } from './HeroCanvas';

export const Hero: React.FC = () => {
  const { developer } = PORTFOLIO_CONFIG;

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#09090B]"
    >
      {/* Interactive Neural Network / Synapse Canvas */}
      <HeroCanvas />

      {/* Cyber Grid Overlay with soft mask */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_75%)]"
        aria-hidden="true"
      />

      {/* Ambient gradient orbs */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] sm:w-[42rem] h-[30rem] sm:h-[42rem] bg-gradient-to-tr from-accent-violet/20 via-indigo-600/10 to-accent-cyan/15 rounded-full blur-[120px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface/90 border border-white/10 shadow-[0_0_25px_rgba(139,92,246,0.2)] mb-8 backdrop-blur-md"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
          </span>
          <span className="text-xs sm:text-sm font-mono tracking-wider uppercase text-[#E2E8F0]">
            {developer.roleEyebrow}
          </span>
        </motion.div>

        {/* Main Headline: Typography Reveal */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#F5F5F7] leading-[1.12]"
          >
            <span>{developer.headlineLine1}</span>
            <br />
            <span className="gradient-text-violet-cyan relative inline-block mt-1">
              {developer.headlineLine2}
            </span>
          </motion.h1>
        </div>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-base sm:text-xl text-[#A1A1AA] font-normal leading-relaxed mb-10"
        >
          {developer.supportingText}
        </motion.p>

        {/* Dual CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-5"
        >
          {/* Primary CTA: Explore My Work */}
          <button
            type="button"
            onClick={() => scrollToSection('projects')}
            className="relative group px-7 py-3.5 rounded-xl font-medium text-sm sm:text-base text-white bg-gradient-to-r from-accent-violet to-indigo-600 hover:from-accent-violet hover:to-accent-cyan shadow-[0_0_30px_rgba(139,92,246,0.35)] hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none"
          >
            <span className="flex items-center gap-2.5">
              <span>Explore My Work</span>
              <Code2 className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" />
            </span>
          </button>

          {/* Secondary CTA: View GitHub Profile */}
          <a
            href={developer.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl font-mono text-sm sm:text-base font-medium text-[#F5F5F7] bg-surface/80 hover:bg-[#1E1E28] border border-white/10 hover:border-accent-violet/50 shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 group focus:outline-none"
          >
            <span className="flex items-center gap-2.5">
              <Github className="w-4 h-4 text-accent-violet group-hover:scale-110 transition-transform" />
              <span>View GitHub Profile</span>
            </span>
          </a>
        </motion.div>

        {/* Technical quick badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-muted"
        >
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]">
            <Terminal className="w-3.5 h-3.5 text-accent-cyan" />
            <span>Python & PyTorch Intuition</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]">
            <Sparkles className="w-3.5 h-3.5 text-accent-violet" />
            <span>RAG & Vector Pipelines</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Open Source Driven</span>
          </div>
        </motion.div>

        {/* Tasteful Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-16 flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => scrollToSection('about')}
        >
          <span className="text-[11px] font-mono tracking-widest uppercase text-subtle group-hover:text-accent-cyan transition-colors">
            SCROLL TO DISCOVER
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="p-1 rounded-full border border-white/10 group-hover:border-accent-cyan/40 text-muted group-hover:text-accent-cyan transition-colors"
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
