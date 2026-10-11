import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Menu, X, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config/portfolio';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Open Source', href: '#open-source' },
  { label: 'Learning', href: '#learning' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section spy
      const sections = ['home', 'about', 'projects', 'skills', 'open-source', 'learning'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(targetId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#09090B]/85 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3.5'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Minimal Developer Wordmark */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="group flex items-center gap-2.5 focus:outline-none"
            aria-label="Likitha - Home"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-surface border border-white/10 group-hover:border-accent-violet/50 transition-colors">
              <span className="text-sm font-bold font-mono text-white group-hover:text-accent-cyan transition-colors">
                L
              </span>
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-accent-violet animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-semibold tracking-tight text-[#F5F5F7] group-hover:text-accent-violet transition-colors">
                {PORTFOLIO_CONFIG.developer.name}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-muted group-hover:text-accent-cyan transition-colors">
                Dev / AI
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#111116]/80 p-1.5 rounded-full border border-white/[0.08] backdrop-blur-sm" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`relative px-4 py-1.5 text-xs font-medium tracking-wide transition-colors rounded-full ${
                    isActive ? 'text-white' : 'text-[#A1A1AA] hover:text-[#F5F5F7]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-white/10 rounded-full border border-white/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action: GitHub Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={PORTFOLIO_CONFIG.developer.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium font-mono text-[#F5F5F7] bg-[#111116] hover:bg-[#1B1B24] border border-white/10 hover:border-accent-violet/40 rounded-lg transition-all duration-200 group hover:shadow-[0_0_20px_rgba(139,92,246,0.25)]"
              aria-label="View Likitha's GitHub Profile"
            >
              <Github className="w-4 h-4 text-accent-violet group-hover:scale-110 transition-transform" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-muted group-hover:text-accent-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={PORTFOLIO_CONFIG.developer.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#111116] border border-white/10 text-[#F5F5F7] hover:text-accent-cyan"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#111116] border border-white/10 text-[#F5F5F7] hover:border-accent-violet/40 focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-accent-violet" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-[#09090B]/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="px-6 py-5 space-y-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-accent-violet/15 text-white border-l-2 border-accent-violet pl-5'
                        : 'text-muted hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="pt-3 border-t border-white/10">
                <a
                  href={PORTFOLIO_CONFIG.developer.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full px-4 py-2.5 text-sm font-medium text-white bg-surface hover:bg-white/10 border border-white/10 rounded-lg"
                >
                  <span className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-accent-violet" />
                    GitHub Profile
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-accent-cyan" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
