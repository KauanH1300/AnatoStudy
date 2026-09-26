import React from 'react';
import { Layers, HelpCircle, BookOpen, Stethoscope, Activity } from 'lucide-react';

interface NavbarProps {
  activeTab: 'flashcards' | 'quiz' | 'guia' | 'ausculta' | 'atlas';
  setActiveTab: (tab: 'flashcards' | 'quiz' | 'guia' | 'ausculta' | 'atlas') => void;
  masteredCount: number;
  totalCards: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  masteredCount,
  totalCards,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Zone 1: Single text element wordmark */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('flashcards')}
              className="text-left group flex items-center gap-2.5 focus:outline-none"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-rose-600 to-rose-700 flex items-center justify-center text-white shadow-sm shadow-rose-200 group-hover:scale-105 transition-transform">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-slate-900 font-display">
                  Anato<span className="text-rose-600">Fisio</span>
                </span>
                <span className="hidden sm:inline-block ml-2 text-xs font-medium text-slate-400">
                  UFPB · Sistema Circulatório
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <button
              onClick={() => setActiveTab('flashcards')}
              className={`flex items-center gap-2 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'flashcards'
                  ? 'bg-rose-50 text-rose-700 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Layers className="w-4 h-4" />
              Flashcards
            </button>

            <button
              onClick={() => setActiveTab('quiz')}
              className={`flex items-center gap-2 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'quiz'
                  ? 'bg-rose-50 text-rose-700 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              Simulado Quiz
            </button>

            <button
              onClick={() => setActiveTab('guia')}
              className={`flex items-center gap-2 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'guia'
                  ? 'bg-rose-50 text-rose-700 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Dicas de Bancada
            </button>

            <button
              onClick={() => setActiveTab('ausculta')}
              className={`flex items-center gap-2 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'ausculta'
                  ? 'bg-rose-50 text-rose-700 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Stethoscope className="w-4 h-4" />
              Ausculta & Pulsos
            </button>

            <button
              onClick={() => setActiveTab('atlas')}
              className={`flex items-center gap-2 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'atlas'
                  ? 'bg-rose-50 text-rose-700 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Activity className="w-4 h-4" />
              Esquema Interativo
            </button>
          </nav>

          {/* Zone 3: 1-2 primary actions / metrics */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Cards Dominados:</span>
              <span className="font-mono font-bold text-slate-900 tabular-nums">
                {masteredCount}/{totalCards}
              </span>
            </div>

            <button
              onClick={() => setActiveTab('quiz')}
              className="px-3.5 py-2 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-700 rounded-lg shadow-sm transition-all whitespace-nowrap active:scale-95"
            >
              Iniciar Prova
            </button>
          </div>
        </div>

        {/* Mobile Navigation bar */}
        <div className="md:hidden flex items-center justify-around py-2 border-t border-slate-100 overflow-x-auto gap-1">
          <button
            onClick={() => setActiveTab('flashcards')}
            className={`flex flex-col items-center gap-1 py-1 px-2.5 rounded text-xs whitespace-nowrap ${
              activeTab === 'flashcards' ? 'text-rose-600 font-bold' : 'text-slate-500'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Cards</span>
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex flex-col items-center gap-1 py-1 px-2.5 rounded text-xs whitespace-nowrap ${
              activeTab === 'quiz' ? 'text-rose-600 font-bold' : 'text-slate-500'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>Quiz</span>
          </button>
          <button
            onClick={() => setActiveTab('guia')}
            className={`flex flex-col items-center gap-1 py-1 px-2.5 rounded text-xs whitespace-nowrap ${
              activeTab === 'guia' ? 'text-rose-600 font-bold' : 'text-slate-500'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Bancada</span>
          </button>
          <button
            onClick={() => setActiveTab('ausculta')}
            className={`flex flex-col items-center gap-1 py-1 px-2.5 rounded text-xs whitespace-nowrap ${
              activeTab === 'ausculta' ? 'text-rose-600 font-bold' : 'text-slate-500'
            }`}
          >
            <Stethoscope className="w-4 h-4" />
            <span>Ausculta</span>
          </button>
          <button
            onClick={() => setActiveTab('atlas')}
            className={`flex flex-col items-center gap-1 py-1 px-2.5 rounded text-xs whitespace-nowrap ${
              activeTab === 'atlas' ? 'text-rose-600 font-bold' : 'text-slate-500'
            }`}
          >
            <Activity className="w-4 h-4" />
            <span>Esquema</span>
          </button>
        </div>
      </div>
    </header>
  );
};
