import React, { useState } from 'react';
import { ShieldAlert, CheckCircle2, Sliders, Database, Search, Cpu, Activity, Compass, MessageSquareQuote, Sprout, Sparkles } from 'lucide-react';

interface ArtworkProps {
  projectId: string;
}

export const ProjectArtwork: React.FC<ArtworkProps> = ({ projectId }) => {
  // State for SlopFilter interactive simulation
  const [filterActive, setFilterActive] = useState(true);
  const [heuristicScore, setHeuristicScore] = useState(87);

  if (projectId === 'slopfilter') {
    return (
      <div className="relative w-full h-full min-h-[320px] rounded-2xl bg-[#0C0C12] border border-white/10 p-5 overflow-hidden flex flex-col justify-between select-none">
        {/* Glow ambient background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-violet/15 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-cyan/10 rounded-full blur-[60px] pointer-events-none" />

        {/* Browser Extension Header Bar */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-4">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[11px] font-mono text-muted pl-2">SlopFilter Extension v1.2 · YouTube Shorts Hook</span>
          </div>
          <button
            type="button"
            onClick={() => {
              setFilterActive(!filterActive);
              setHeuristicScore(filterActive ? 22 : 87);
            }}
            className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-medium transition-all flex items-center gap-1.5 ${
              filterActive
                ? 'bg-accent-violet/20 text-accent-violetLight border border-accent-violet/40'
                : 'bg-white/5 text-muted border border-white/10'
            }`}
          >
            <Sliders className="w-3 h-3" />
            <span>{filterActive ? 'Filtering: ON' : 'Filtering: OFF'}</span>
          </button>
        </div>

        {/* Explainable Inspection HUD */}
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-surface/90 border border-white/[0.06] flex items-center justify-between">
            <div>
              <div className="text-[10px] font-mono uppercase text-muted tracking-wider mb-1">
                Heuristic Confidence Assessment
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold font-mono text-white">{heuristicScore}%</span>
                <span className={`text-xs font-mono ${heuristicScore > 50 ? 'text-amber-400' : 'text-emerald-400'}`}>
                  {heuristicScore > 50 ? 'Likely Synthetic Shorts Content' : 'Normal Organic Content'}
                </span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08]">
              {heuristicScore > 50 ? (
                <ShieldAlert className="w-6 h-6 text-amber-400 animate-pulse" />
              ) : (
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              )}
            </div>
          </div>

          {/* Metric breakdown meters */}
          <div className="grid grid-cols-3 gap-2">
            <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
              <div className="text-[10px] font-mono text-muted">Synthetic Voice</div>
              <div className="text-xs font-mono font-semibold text-[#F5F5F7] mt-1">High Peak</div>
              <div className="w-full bg-white/10 h-1 rounded-full mt-1.5 overflow-hidden">
                <div className="bg-accent-violet h-full transition-all duration-500" style={{ width: filterActive ? '88%' : '15%' }} />
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
              <div className="text-[10px] font-mono text-muted">Template Match</div>
              <div className="text-xs font-mono font-semibold text-[#F5F5F7] mt-1">Repetitive</div>
              <div className="w-full bg-white/10 h-1 rounded-full mt-1.5 overflow-hidden">
                <div className="bg-accent-cyan h-full transition-all duration-500" style={{ width: filterActive ? '92%' : '20%' }} />
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
              <div className="text-[10px] font-mono text-muted">Action Taken</div>
              <div className="text-xs font-mono font-semibold text-emerald-400 mt-1">
                {filterActive ? 'Auto-Skipped' : 'Bypassed'}
              </div>
              <div className="w-full bg-white/10 h-1 rounded-full mt-1.5 overflow-hidden">
                <div className="bg-emerald-400 h-full transition-all duration-500" style={{ width: filterActive ? '100%' : '0%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Status bar */}
        <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-subtle">
          <span>Manifest V3 Background Service Worker</span>
          <span className="flex items-center gap-1 text-accent-cyan">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-ping" />
            Live DOM Observer
          </span>
        </div>
      </div>
    );
  }

  if (projectId === 'document-qa-rag') {
    return (
      <div className="relative w-full h-full min-h-[260px] rounded-2xl bg-[#0C0C12] border border-white/10 p-5 overflow-hidden flex flex-col justify-between">
        {/* Vector Space Node Graphic */}
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 mb-3">
          <div className="flex items-center gap-2 text-xs font-mono text-muted">
            <Database className="w-3.5 h-3.5 text-accent-cyan" />
            <span>ChromaDB Vector Retrieval Space</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
            Cosine Similarity
          </span>
        </div>

        {/* SVG Vector similarity visualization */}
        <div className="relative py-2">
          <svg viewBox="0 0 300 130" className="w-full h-32 overflow-visible">
            {/* Grid subtle lines */}
            <line x1="10" y1="65" x2="290" y2="65" stroke="rgba(255,255,255,0.06)" strokeDasharray="4" />
            <line x1="150" y1="10" x2="150" y2="120" stroke="rgba(255,255,255,0.06)" strokeDasharray="4" />

            {/* Connecting similarity beams from Query to nearest document chunks */}
            <line x1="150" y1="65" x2="70" y2="35" stroke="#22D3EE" strokeWidth="1.5" strokeOpacity="0.7" strokeDasharray="2" />
            <line x1="150" y1="65" x2="220" y2="40" stroke="#8B5CF6" strokeWidth="1.5" strokeOpacity="0.7" strokeDasharray="2" />
            <line x1="150" y1="65" x2="110" y2="100" stroke="#A78BFA" strokeWidth="1.5" strokeOpacity="0.6" strokeDasharray="2" />

            {/* Other distant points */}
            <circle cx="40" cy="90" r="3" fill="#71717A" opacity="0.4" />
            <circle cx="260" cy="95" r="3" fill="#71717A" opacity="0.4" />
            <circle cx="270" cy="30" r="3" fill="#71717A" opacity="0.4" />

            {/* Nearest Chunks */}
            <circle cx="70" cy="35" r="6" fill="#22D3EE" />
            <circle cx="220" cy="40" r="6" fill="#8B5CF6" />
            <circle cx="110" cy="100" r="5" fill="#A78BFA" />

            {/* Query Vector Node Center */}
            <circle cx="150" cy="65" r="9" fill="#F5F5F7" />
            <circle cx="150" cy="65" r="14" stroke="#22D3EE" strokeWidth="1.5" fill="none" opacity="0.8" />
          </svg>
        </div>

        {/* Local Ollama Grounded inference pipeline */}
        <div className="p-2.5 rounded-lg bg-surface border border-white/[0.06] flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-1.5 text-muted">
            <Search className="w-3.5 h-3.5 text-accent-cyan" />
            <span>Top-3 Chunks Retrieved</span>
          </div>
          <div className="flex items-center gap-1 text-accent-violet">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ollama Context-Aware Response</span>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === 'navdr') {
    return (
      <div className="relative w-full h-full min-h-[260px] rounded-2xl bg-[#0C0C12] border border-white/10 p-5 overflow-hidden flex flex-col justify-between">
        {/* IMU Telemetry header */}
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 mb-3">
          <div className="flex items-center gap-2 text-xs font-mono text-muted">
            <Compass className="w-3.5 h-3.5 text-accent-violet" />
            <span>Smartphone IMU Dead-Reckoning</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">
            GNSS Outage Mode
          </span>
        </div>

        {/* Simulated IMU waveform & Model evaluation chart */}
        <div className="space-y-3 py-1">
          <div className="flex items-center justify-between text-[11px] font-mono text-subtle">
            <span>Inertial Accelerometer Stream (m/s²)</span>
            <span className="text-accent-cyan">RF Speed Est: 14.8 m/s</span>
          </div>

          {/* SVG Waveform of IMU signal */}
          <div className="h-16 w-full rounded bg-white/[0.02] border border-white/[0.04] p-1 flex items-center">
            <svg viewBox="0 0 280 50" className="w-full h-full">
              <path
                d="M0 25 Q20 5, 40 25 T80 25 T120 10 T160 38 T200 20 T240 32 T280 25"
                fill="none"
                stroke="#8B5CF6"
                strokeWidth="2"
              />
              <path
                d="M0 25 Q20 18, 40 25 T80 25 T120 18 T160 30 T200 22 T240 28 T280 25"
                fill="none"
                stroke="#22D3EE"
                strokeWidth="1.5"
                strokeDasharray="3"
                opacity="0.8"
              />
            </svg>
          </div>
        </div>

        <div className="p-2.5 rounded-lg bg-surface border border-white/[0.06] flex items-center justify-between text-xs font-mono">
          <span className="text-muted flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-accent-violet" />
            <span>Random Forest Regressor</span>
          </span>
          <span className="text-emerald-400">R² Score: 0.94</span>
        </div>
      </div>
    );
  }

  if (projectId === 'krishicopilot') {
    return (
      <div className="relative w-full h-full min-h-[260px] rounded-2xl bg-[#0C0C12] border border-white/10 p-5 overflow-hidden flex flex-col justify-between">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 mb-3">
          <div className="flex items-center gap-2 text-xs font-mono text-muted">
            <Sprout className="w-3.5 h-3.5 text-emerald-400" />
            <span>KrishiCopilot · Agricultural Advisory</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Multilingual AI
          </span>
        </div>

        {/* Advisory dialogue preview */}
        <div className="space-y-2 text-xs font-mono">
          <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.05] text-[#A1A1AA] flex items-start gap-2">
            <MessageSquareQuote className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
            <div>
              <span className="text-white font-medium block">Query Context:</span>
              "Irrigation schedule based on incoming weather & soil moisture reading."
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-emerald-950/20 border border-emerald-500/20 text-emerald-200 flex items-start gap-2">
            <Cpu className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-emerald-400 font-medium block">RAG Advisory Output:</span>
              Rain expected in 18 hrs. Delay flood irrigation to prevent root hypoxia.
            </div>
          </div>
        </div>

        <div className="mt-2 pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-subtle">
          <span>Weather Intelligence + Farmer Profile</span>
          <span className="text-accent-cyan">Voice / Text Grounded</span>
        </div>
      </div>
    );
  }

  return null;
};
