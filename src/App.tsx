import React from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { OpenSource } from './components/OpenSource';
import { Learning } from './components/Learning';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#09090B] text-[#F5F5F7] font-sans antialiased selection:bg-accent-violet selection:text-white relative">
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-accent-violet text-white font-mono text-xs rounded-md shadow-lg"
      >
        Skip to content
      </a>

      {/* Top Scroll Spring Progress Bar */}
      <ScrollProgress />

      {/* Sticky Blurred Header Navigation */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <OpenSource />
        <Learning />
      </main>

      {/* GitHub-Only Footer and Final CTA */}
      <Footer />
    </div>
  );
};

export default App;
