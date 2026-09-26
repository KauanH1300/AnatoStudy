import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { FlashcardsView } from './components/FlashcardsView';
import { QuizView } from './components/QuizView';
import { PracticalGuideView } from './components/PracticalGuideView';
import { AuscultationSimulator } from './components/AuscultationSimulator';
import { HeartInteractiveModel } from './components/HeartInteractiveModel';
import { VesselsEncyclopediaView } from './components/VesselsEncyclopediaView';
import { flashcardsData } from './data/flashcardsData';
import { quizData } from './data/quizData';
import {
  Layers,
  HelpCircle,
  BookOpen,
  Stethoscope,
  Activity,
  Heart,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  GraduationCap
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'flashcards' | 'quiz' | 'guia' | 'ausculta' | 'atlas' | 'vasos'>('flashcards');

  // Load mastered flashcard IDs from localStorage
  const [masteredIds, setMasteredIds] = useState<Set<number>>(() => {
    try {
      const saved = localStorage.getItem('anatofisio_mastered_cards');
      if (saved) {
        return new Set<number>(JSON.parse(saved));
      }
    } catch {
      // Fallback
    }
    return new Set<number>();
  });

  const toggleMastered = (id: number) => {
    setMasteredIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      try {
        localStorage.setItem('anatofisio_mastered_cards', JSON.stringify(Array.from(next)));
      } catch {
        // Fallback
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 selection:bg-rose-100 selection:text-rose-900">
      {/* Universal Top Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        masteredCount={masteredIds.size}
        totalCards={flashcardsData.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        {/* Sub-header Context Banner */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-0.5">
              <span className="font-semibold text-slate-700 flex items-center gap-1.5 shrink-0">
                <GraduationCap className="w-4 h-4 text-rose-600" /> Fisioterapia UFPB
              </span>
              <span aria-hidden="true" className="shrink-0">·</span>
              <span className="shrink-0">Morfologia Cardiovascular</span>
              <span aria-hidden="true" className="shrink-0">·</span>
              <span className="shrink-0">Base: Slides Profa. Elayne Ribeiro & Prof. J. Felipe Tomaz</span>
            </div>

            <div className="hidden sm:flex items-center gap-3 text-slate-600 font-mono text-[11px] shrink-0">
              <span>{flashcardsData.length} Flashcards</span>
              <span aria-hidden="true">·</span>
              <span>{quizData.length} Questões de Simulado</span>
            </div>
          </div>
        </div>

        {/* View Switcher */}
        {activeTab === 'flashcards' && (
          <FlashcardsView
            cards={flashcardsData}
            masteredIds={masteredIds}
            toggleMastered={toggleMastered}
          />
        )}

        {activeTab === 'quiz' && <QuizView questions={quizData} />}

        {activeTab === 'guia' && <PracticalGuideView />}

        {activeTab === 'ausculta' && <AuscultationSimulator />}

        {activeTab === 'atlas' && <HeartInteractiveModel />}
        {activeTab === 'vasos' && <VesselsEncyclopediaView />}
      </main>

      {/* Quiet, clean academic footer */}
      <footer className="bg-white border-t border-slate-200 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800">AnatoFisio</span>
            <span aria-hidden="true">·</span>
            <span>UFPB - Departamento de Morfologia</span>
            <span aria-hidden="true">·</span>
            <span>Terminologia Anatômica Internacional (PT-BR)</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>60 Flashcards & 50 Questões de Prova</span>
            <span aria-hidden="true">·</span>
            <span>Fisioterapia Cardiovascular e Respiratória</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
