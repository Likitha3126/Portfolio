import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight, ExternalLink, Sparkles } from 'lucide-react';
import { PORTFOLIO_CONFIG, type Project } from '../config/portfolio';
import { SectionHeader } from './SectionHeader';
import { ProjectArtwork } from './project-artworks/ProjectArtwork';

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_CONFIG;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Browser Extension', 'AI / RAG', 'Machine Learning', 'Conversational AI'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const featuredProject = projects.find(p => p.featured) || projects[0];
  const supportingProjects = projects.filter(p => p.id !== featuredProject.id);

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-[#09090B]">
      {/* Subtle ambient lighting */}
      <div
        className="absolute top-1/3 left-10 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent-violet/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <SectionHeader
            eyebrow="FEATURED ENGINEERING WORK"
            title="Projects & Implementations."
            subtitle="Original systems spanning browser internals, heuristic scoring, vector retrieval pipelines, and sensor dead-reckoning."
          />

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-surface border border-white/[0.08] max-w-fit mt-4 md:mt-0 mb-8 md:mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all ${
                  selectedCategory === cat
                    ? 'bg-accent-violet text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]'
                    : 'text-muted hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Display based on category filter */}
        {selectedCategory === 'All' ? (
          <div className="space-y-12">
            {/* LARGE FEATURED PROJECT: SlopFilter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl bg-surface border border-white/[0.1] hover:border-accent-violet/40 transition-all duration-300 overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              {/* Top gradient highlight */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-violet via-indigo-500 to-accent-cyan" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-center">
                {/* Left Description Side */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider text-accent-violet bg-accent-violet/10 border border-accent-violet/30 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3" />
                      Featured Project
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono text-muted bg-white/[0.04] border border-white/[0.08]">
                      {featuredProject.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                      Verified Public Repo
                    </span>
                  </div>

                  <div>
                    <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F5F7] group-hover:text-white transition-colors">
                      {featuredProject.title}
                    </h3>
                    <p className="mt-4 text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
                      {featuredProject.description}
                    </p>
                    {featuredProject.longDescription && (
                      <p className="mt-2 text-sm text-[#71717A] leading-relaxed">
                        {featuredProject.longDescription}
                      </p>
                    )}
                  </div>

                  {/* Architecture Metrics */}
                  {featuredProject.metrics && (
                    <div className="grid grid-cols-3 gap-3 py-2 border-y border-white/[0.06]">
                      {featuredProject.metrics.map(metric => (
                        <div key={metric.label}>
                          <div className="text-[10px] font-mono uppercase text-muted">{metric.label}</div>
                          <div className="text-xs sm:text-sm font-semibold font-mono text-[#F5F5F7] mt-0.5">{metric.value}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {featuredProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono rounded-lg bg-white/[0.03] text-muted border border-white/[0.08] hover:border-white/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-2">
                    {featuredProject.githubUrl && (
                      <a
                        href={featuredProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-mono font-medium text-white bg-accent-violet hover:bg-accent-violet/90 transition-all shadow-[0_0_20px_rgba(139,92,246,0.35)] group/btn"
                      >
                        <Github className="w-4 h-4" />
                        <span>Source Code</span>
                        <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                    {featuredProject.demoUrl && (
                      <a
                        href={featuredProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-mono font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 text-accent-cyan" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Interactive Artwork Side */}
                <div className="lg:col-span-6 w-full">
                  <ProjectArtwork projectId={featuredProject.id} />
                </div>
              </div>
            </motion.div>

            {/* SUPPORTING PROJECTS (3 Grid cards) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {supportingProjects.map((project, idx) => (
                <ProjectCard key={project.id} project={project} index={idx} />
              ))}
            </div>
          </div>
        ) : (
          /* Filtered View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-2xl bg-surface border border-white/[0.08] hover:border-accent-cyan/40 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:shadow-[0_10px_35px_rgba(0,0,0,0.4)]"
    >
      <div>
        {/* Visual Artwork Box */}
        <div className="p-4 bg-[#0A0A0F] border-b border-white/[0.06]">
          <ProjectArtwork projectId={project.id} />
        </div>

        {/* Card Body */}
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono text-accent-cyan uppercase tracking-wider px-2 py-0.5 rounded bg-accent-cyan/10 border border-accent-cyan/20">
              {project.category}
            </span>
            <span className="text-[11px] font-mono text-muted">
              {project.status}
            </span>
          </div>

          <h4 className="text-xl font-bold tracking-tight text-[#F5F5F7] group-hover:text-accent-cyan transition-colors">
            {project.title}
          </h4>

          <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-[11px] font-mono rounded bg-white/[0.03] text-muted border border-white/[0.06]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="p-6 pt-0 mt-4">
        <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#F5F5F7] hover:text-accent-cyan transition-colors group/link"
            >
              <Github className="w-3.5 h-3.5 text-accent-violet" />
              <span>Explore Repo</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          ) : (
            <span className="text-[11px] font-mono text-subtle">Configured Architecture</span>
          )}

          {project.metrics && project.metrics[0] && (
            <span className="text-[11px] font-mono text-muted">
              {project.metrics[0].label}: {project.metrics[0].value}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};
