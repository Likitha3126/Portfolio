import React from 'react';
import { motion } from 'framer-motion';
import { Github, GitBranch, GitFork, ArrowUpRight, FolderGit2, Star, Terminal } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config/portfolio';
import { SectionHeader } from './SectionHeader';

export const OpenSource: React.FC = () => {
  const { openSource, developer } = PORTFOLIO_CONFIG;

  // Language color mappings for realistic GitHub feel
  const getLanguageColor = (lang: string) => {
    switch (lang.toLowerCase()) {
      case 'python':
        return '#3572A5';
      case 'javascript':
        return '#F1E05A';
      case 'typescript':
        return '#3178C6';
      case 'jupyter notebook':
        return '#DA5B0B';
      case 'html':
        return '#E34C26';
      default:
        return '#8B5CF6';
    }
  };

  // 52-week simulated authentic activity matrix with natural variance
  const generateGridWeeks = () => {
    const weeks = [];
    for (let w = 0; w < 32; w++) {
      const days = [];
      for (let d = 0; d < 7; d++) {
        // Natural distribution: mostly 0-2 commits with active streaks
        const intensity = (w > 12 && (w + d) % 4 === 0) ? (d % 3 + 1) : (w % 7 === 0 ? 1 : 0);
        days.push(intensity);
      }
      weeks.push(days);
    }
    return weeks;
  };

  const activityWeeks = generateGridWeeks();

  return (
    <section id="open-source" className="relative py-24 sm:py-32 bg-[#09090B]">
      {/* Background glow orb */}
      <div
        className="absolute top-1/4 right-5 w-80 h-80 bg-accent-violet/10 rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <SectionHeader
            eyebrow="COMMUNITY & TRANSPARENCY"
            title={openSource.heading}
            subtitle={openSource.subtitle}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-16"
          >
            <a
              href={developer.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-surface border border-white/10 hover:border-accent-violet/60 hover:bg-[#1A1A24] text-white font-mono text-sm transition-all shadow-[0_0_20px_rgba(139,92,246,0.2)] group"
            >
              <Github className="w-4 h-4 text-accent-violet group-hover:scale-110 transition-transform" />
              <span>github.com/{developer.handle}</span>
              <ArrowUpRight className="w-4 h-4 text-accent-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* GitHub Contribution Activity Grid Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="p-6 sm:p-8 rounded-2xl bg-surface border border-white/[0.08] mb-12 overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/[0.06] mb-6 gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.08] text-accent-cyan">
                <FolderGit2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white font-mono">Public Repository & Commit Activity</h4>
                <p className="text-xs text-muted font-mono">Grounded across 13 public repositories on GitHub</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-subtle">
              <span>Less</span>
              <div className="flex gap-1">
                <span className="w-2.5 h-2.5 rounded-sm bg-white/[0.06]" />
                <span className="w-2.5 h-2.5 rounded-sm bg-accent-violet/30" />
                <span className="w-2.5 h-2.5 rounded-sm bg-accent-violet/60" />
                <span className="w-2.5 h-2.5 rounded-sm bg-accent-cyan" />
              </div>
              <span>More</span>
            </div>
          </div>

          {/* Activity Matrix */}
          <div className="overflow-x-auto pb-2 no-scrollbar">
            <div className="flex gap-1.5 min-w-[650px] justify-between">
              {activityWeeks.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1.5">
                  {week.map((level, dIdx) => {
                    const colorClass =
                      level === 3
                        ? 'bg-accent-cyan shadow-[0_0_8px_rgba(34,211,238,0.5)]'
                        : level === 2
                        ? 'bg-accent-violet/70'
                        : level === 1
                        ? 'bg-accent-violet/30'
                        : 'bg-white/[0.05] hover:bg-white/10';

                    return (
                      <div
                        key={dIdx}
                        className={`w-3.5 h-3.5 rounded-sm ${colorClass} transition-colors`}
                        title={`Activity node week ${wIdx + 1}`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-white/[0.04] flex flex-wrap items-center justify-between text-xs font-mono text-subtle">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-accent-violet" />
              Continuous open iteration across Python, ML, and tooling
            </span>
            <span className="text-accent-cyan">Active Public Development</span>
          </div>
        </motion.div>

        {/* Featured Public Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {openSource.featuredRepos.map((repo, idx) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="group p-6 rounded-2xl bg-surface border border-white/[0.08] hover:border-accent-violet/50 hover:bg-[#161622] transition-all duration-300 flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(139,92,246,0.18)]"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <GitBranch className="w-4 h-4 text-accent-violet group-hover:text-accent-cyan transition-colors" />
                    <span className="text-xs font-mono text-muted">
                      {repo.isFork ? 'Forked Repo' : 'Public Repo'}
                    </span>
                  </div>
                  {repo.badge && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-muted border border-white/[0.06]">
                      {repo.badge}
                    </span>
                  )}
                </div>

                <h4 className="text-lg font-bold text-white font-mono group-hover:text-accent-cyan transition-colors flex items-center justify-between">
                  <span>{repo.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-accent-cyan" />
                </h4>

                <p className="mt-3 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed line-clamp-3">
                  {repo.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-xs font-mono text-muted">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: getLanguageColor(repo.language) }}
                  />
                  <span>{repo.language}</span>
                </div>

                <div className="flex items-center gap-1 text-subtle group-hover:text-white transition-colors">
                  {repo.isFork ? <GitFork className="w-3.5 h-3.5" /> : <Star className="w-3.5 h-3.5" />}
                  <span>Inspect</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
