import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Brain, Wrench, Layers, Terminal, Database, Server, GitMerge, Box, Cpu } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config/portfolio';
import { SectionHeader } from './SectionHeader';

export const Skills: React.FC = () => {
  const { skillCategories } = PORTFOLIO_CONFIG;
  const [activeTab, setActiveTab] = useState<number>(0);

  // Helper icons for skills
  const getSkillIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'python':
        return <Terminal className="w-5 h-5 text-accent-cyan" />;
      case 'javascript':
        return <Code className="w-5 h-5 text-amber-400" />;
      case 'sql':
      case 'postgresql':
        return <Database className="w-5 h-5 text-indigo-400" />;
      case 'machine learning':
      case 'model evaluation':
        return <Brain className="w-5 h-5 text-accent-violet" />;
      case 'numpy':
      case 'data preprocessing':
        return <Cpu className="w-5 h-5 text-accent-cyan" />;
      case 'react':
        return <Layers className="w-5 h-5 text-cyan-400" />;
      case 'fastapi':
      case 'rest apis':
        return <Server className="w-5 h-5 text-emerald-400" />;
      case 'git and github':
        return <GitMerge className="w-5 h-5 text-rose-400" />;
      case 'chromadb':
        return <Database className="w-5 h-5 text-accent-violet" />;
      case 'ollama':
        return <Brain className="w-5 h-5 text-accent-cyan" />;
      case 'docker':
        return <Box className="w-5 h-5 text-blue-400" />;
      default:
        return <Terminal className="w-5 h-5 text-accent-violet" />;
    }
  };

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code className="w-4 h-4" />;
      case 1:
        return <Brain className="w-4 h-4" />;
      case 2:
        return <Server className="w-4 h-4" />;
      case 3:
        return <Wrench className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-[#09090B]">
      {/* Background glow orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[34rem] bg-indigo-950/20 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="TECHNICAL TOOLKIT"
          title="Skills & Engineering Stack."
          subtitle="Honest, practical proficiencies developed through building projects, reading source code, and working with modern AI developer tooling."
        />

        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 no-scrollbar">
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-surface border border-white/[0.08] backdrop-blur-md">
            {skillCategories.map((category, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={category.title}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                    isActive ? 'text-white' : 'text-muted hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillTab"
                      className="absolute inset-0 bg-accent-violet/20 border border-accent-violet/40 rounded-xl"
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}
                  <span className={`relative z-10 ${isActive ? 'text-accent-cyan' : 'text-muted'}`}>
                    {getCategoryIcon(idx)}
                  </span>
                  <span className="relative z-10">{category.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Category Description */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <motion.p
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-sm font-mono text-muted"
          >
            {skillCategories[activeTab].description}
          </motion.p>
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {skillCategories[activeTab].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative p-6 rounded-2xl bg-surface border border-white/[0.08] hover:border-accent-violet/40 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(139,92,246,0.15)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] group-hover:scale-105 transition-transform">
                      {getSkillIcon(skill.name)}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06]">
                      {skill.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#F5F5F7] group-hover:text-white transition-colors mb-2">
                    {skill.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-subtle">
                  <span>Stack Node</span>
                  <span className="w-2 h-2 rounded-full bg-accent-violet/50 group-hover:bg-accent-cyan transition-colors" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Context Note: No fake proficiency bars */}
        <div className="mt-14 p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] max-w-2xl mx-auto flex items-center justify-center gap-3 text-center">
          <span className="text-accent-cyan text-sm">✦</span>
          <p className="text-xs text-muted font-mono leading-relaxed">
            Proficiencies grounded in code artifacts and project implementations, not arbitrary percentage bars.
          </p>
        </div>
      </div>
    </section>
  );
};
