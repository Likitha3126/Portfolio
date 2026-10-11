import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUp, ArrowUpRight, Sparkles } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config/portfolio';

export const Footer: React.FC = () => {
  const { footer, developer } = PORTFOLIO_CONFIG;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-[#09090B] border-t border-white/[0.08] overflow-hidden pt-20 pb-12">
      {/* Background ambient lighting */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[38rem] h-64 bg-gradient-to-b from-accent-violet/15 to-transparent rounded-full blur-[120px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Final CTA Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-b from-surface to-[#0D0D14] border border-white/[0.1] p-8 sm:p-14 text-center max-w-4xl mx-auto mb-20 shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden"
        >
          {/* Subtle top rainbow border */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-violet via-indigo-500 to-accent-cyan" />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono uppercase tracking-widest text-accent-cyan mb-6">
            <Sparkles className="w-3.5 h-3.5 text-accent-violet" />
            <span>CONTINUOUS INNOVATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F7] mb-4">
            {footer.heading}
          </h2>

          <p className="max-w-xl mx-auto text-base sm:text-lg text-[#A1A1AA] leading-relaxed mb-8">
            {footer.supportingText}
          </p>

          <div className="flex justify-center">
            <a
              href={developer.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-sm sm:text-base font-mono font-medium text-white bg-gradient-to-r from-accent-violet to-indigo-600 hover:from-accent-violet hover:to-accent-cyan shadow-[0_0_35px_rgba(139,92,246,0.35)] hover:shadow-[0_0_45px_rgba(34,211,238,0.45)] transition-all duration-300 transform hover:-translate-y-0.5 group focus:outline-none"
            >
              <Github className="w-5 h-5 text-accent-cyan group-hover:scale-110 transition-transform" />
              <span>{footer.primaryCtaText}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Bottom Editorial Bar */}
        <div className="pt-10 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Developer Wordmark & Year */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-surface border border-white/10">
              <span className="text-sm font-bold font-mono text-white">L</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-white tracking-tight">
                {developer.name} · <span className="font-mono text-muted text-xs">@{developer.handle}</span>
              </div>
              <div className="text-xs text-subtle font-mono mt-0.5">
                © {currentYear} All rights reserved.
              </div>
            </div>
          </div>

          {/* Closing Line */}
          <div className="text-xs sm:text-sm text-muted font-mono text-center">
            {footer.closingLine}
          </div>

          {/* Actions: GitHub Link & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={developer.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono text-[#F5F5F7] hover:text-accent-cyan transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4 text-accent-violet" />
              <span>GitHub</span>
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono text-muted hover:text-white transition-colors"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4 text-accent-cyan" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
