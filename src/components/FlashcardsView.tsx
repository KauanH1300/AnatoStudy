import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Flashcard, AnatomicalCategory } from '../types/anatomy';
import {
  Shuffle,
  RotateCw,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Bookmark,
  Volume2,
  Search,
  Sparkles,
  MapPin,
  Activity,
  HeartPulse,
  Eye
} from 'lucide-react';
import { playHeartSound } from '../utils/audioSimulator';

interface FlashcardsViewProps {
  cards: Flashcard[];
  masteredIds: Set<number>;
  toggleMastered: (id: number) => void;
}

export const FlashcardsView: React.FC<FlashcardsViewProps> = ({
  cards,
  masteredIds,
  toggleMastered,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todas');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [activeCards, setActiveCards] = useState<Flashcard[]>(cards);

  // Filter cards based on category and search query
  const filteredCards = useMemo(() => {
    return activeCards.filter((card) => {
      const matchCat =
        selectedCategory === 'todas' ||
        card.categoria === selectedCategory ||
        (selectedCategory === 'dominados' && masteredIds.has(card.id)) ||
        (selectedCategory === 'pendentes' && !masteredIds.has(card.id));

      const matchSearch =
        searchQuery.trim() === '' ||
        card.pergunta.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.resposta.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.dica_pratica.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchCat && matchSearch;
    });
  }, [activeCards, selectedCategory, searchQuery, masteredIds]);

  // Reset index when filter results change
  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [selectedCategory, searchQuery]);

  const currentCard: Flashcard | undefined = filteredCards[currentIndex];

  const handleNext = useCallback(() => {
    if (filteredCards.length === 0) return;
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredCards.length);
    }, 150);
  }, [filteredCards.length]);

  const handlePrev = useCallback(() => {
    if (filteredCards.length === 0) return;
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
    }, 150);
  }, [filteredCards.length]);

  const handleShuffle = () => {
    setIsFlipped(false);
    // Fisher-Yates shuffle
    const shuffled = [...activeCards];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setActiveCards(shuffled);
    setCurrentIndex(0);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement) return;
      if (e.code === 'Space') {
        e.preventDefault();
        setIsFlipped((prev) => !prev);
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  const handlePlaySound = (e: React.MouseEvent) => {
    e.stopPropagation();
    playHeartSound('both', 1.0);
  };

  const getCategoryColor = (cat: AnatomicalCategory) => {
    switch (cat) {
      case 'coração':
        return 'text-rose-600';
      case 'vasos':
        return 'text-blue-600';
      case 'conducao':
        return 'text-amber-600';
      case 'clinica':
        return 'text-emerald-600';
      default:
        return 'text-slate-600';
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8 space-y-6">
      {/* Header and Filter Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-display">
            Flashcards de Bancada & Teoria
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Revisão ativa com mnemônicas de cadáver, hemodinâmica e fisioterapia clínica.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleShuffle}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg shadow-sm transition-all active:scale-95 whitespace-nowrap"
            title="Embaralhar banco de cards"
          >
            <Shuffle className="w-3.5 h-3.5 text-slate-500" />
            Embaralhar
          </button>
        </div>
      </div>

      {/* Segmented Category Buttons & Search */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Interactive Filter Controls (Functional buttons with click handlers) */}
        <div className="flex items-center gap-1 p-1 bg-slate-200/80 rounded-xl overflow-x-auto scrollbar-none text-xs font-medium">
          {[
            { id: 'todas', label: 'Todos' },
            { id: 'coração', label: 'Coração' },
            { id: 'vasos', label: 'Vasos' },
            { id: 'conducao', label: 'Condução / Ciclo' },
            { id: 'clinica', label: 'Clínica & RCP' },
            { id: 'pendentes', label: 'A Revisar' },
            { id: 'dominados', label: 'Dominados' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-white text-slate-900 font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search bar */}
        <div className="relative min-w-[200px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Buscar estrutura ou termo..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* Card Carousel & Stats Counter */}
      {filteredCards.length > 0 && currentCard ? (
        <div className="space-y-4">
          {/* Progress Metadata without pill boxes */}
          <div className="flex items-center justify-between text-xs text-slate-500 px-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-700 capitalize">
                Card <span className="font-mono text-slate-900">{currentIndex + 1}</span> de{' '}
                <span className="font-mono text-slate-900">{filteredCards.length}</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className={`font-medium ${getCategoryColor(currentCard.categoria)} uppercase tracking-wider`}>
                {currentCard.categoria}
              </span>
              <span aria-hidden="true">·</span>
              <span>Atalhos: Espaço (Girar) / Setas (Navegar)</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMastered(currentCard.id);
                }}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border transition-colors ${
                  masteredIds.has(currentCard.id)
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                }`}
              >
                <CheckCircle2
                  className={`w-3.5 h-3.5 ${
                    masteredIds.has(currentCard.id) ? 'text-emerald-600 fill-emerald-100' : 'text-slate-400'
                  }`}
                />
                {masteredIds.has(currentCard.id) ? 'Dominado' : 'Marcar Dominado'}
              </button>
            </div>
          </div>

          {/* Flashcard 3D Card Container */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="group relative w-full min-h-[380px] sm:min-h-[420px] rounded-2xl cursor-pointer select-none transition-all duration-300 transform active:scale-[0.99] [perspective:1200px]"
          >
            <div
              className={`w-full h-full min-h-[380px] sm:min-h-[420px] rounded-2xl border transition-all duration-500 [transform-style:preserve-3d] shadow-sm hover:shadow-md ${
                isFlipped ? '[transform:rotateY(180deg)] border-rose-200 bg-white' : 'border-slate-200 bg-white'
              }`}
            >
              {/* FRONT OF THE CARD */}
              <div
                className={`absolute inset-0 p-6 sm:p-8 flex flex-col justify-between rounded-2xl [backface-visibility:hidden] ${
                  isFlipped ? 'pointer-events-none' : ''
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                    <span className="uppercase tracking-widest font-mono font-bold text-slate-500">
                      #{currentCard.id}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="capitalize">{currentCard.categoria}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={handlePlaySound}
                      title="Ouvir som cardíaco"
                      className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <RotateCw className="w-3.5 h-3.5" /> Clique para virar
                    </span>
                  </div>
                </div>

                <div className="my-auto py-6 text-center">
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-rose-600 mb-2">
                    Pergunta / Identificação de Estrutura
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-snug font-display text-balance">
                    {currentCard.pergunta}
                  </h2>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {currentCard.tags.map((tag) => (
                      <span key={tag} className="text-slate-500 font-mono text-[11px]">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-rose-600 font-medium flex items-center gap-1">
                    Ver resposta e dica prática <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* BACK OF THE CARD */}
              <div
                className={`absolute inset-0 p-6 sm:p-8 flex flex-col justify-between rounded-2xl bg-white [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-y-auto ${
                  !isFlipped ? 'pointer-events-none' : ''
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-rose-600 uppercase tracking-wider font-display">
                        Resposta Anatômica Oficial
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <RotateCw className="w-3.5 h-3.5" /> Clique para desvirar
                    </span>
                  </div>

                  {/* Main Answer */}
                  <div>
                    <p className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
                      {currentCard.resposta}
                    </p>
                  </div>

                  {/* Practical Mnemonic / Cadaver tip */}
                  <div className="bg-rose-50/70 border border-rose-200/70 rounded-xl p-3.5 text-xs text-slate-800 space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-rose-700">
                      <Eye className="w-4 h-4 text-rose-600 shrink-0" />
                      <span>Dica Visual & Mnemônica de Prova Prática:</span>
                    </div>
                    <p className="leading-relaxed text-slate-700">{currentCard.dica_pratica}</p>
                  </div>

                  {/* Sintopy, Hemodynamics & Physiotherapy */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {currentCard.relacao_sintopica && (
                      <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 space-y-1">
                        <span className="font-semibold text-slate-800 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" /> Sintopia / Relações:
                        </span>
                        <p className="text-slate-600 leading-relaxed text-[11px]">
                          {currentCard.relacao_sintopica}
                        </p>
                      </div>
                    )}

                    {currentCard.funcao_hemodinamica && (
                      <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 space-y-1">
                        <span className="font-semibold text-slate-800 flex items-center gap-1">
                          <Activity className="w-3.5 h-3.5 text-blue-600" /> Hemodinâmica Direta:
                        </span>
                        <p className="text-slate-600 leading-relaxed text-[11px]">
                          {currentCard.funcao_hemodinamica}
                        </p>
                      </div>
                    )}
                  </div>

                  {currentCard.aplicacao_fisioterapia && (
                    <div className="p-3 rounded-lg bg-emerald-50/70 border border-emerald-200/70 space-y-1 text-xs">
                      <span className="font-bold text-emerald-800 flex items-center gap-1.5">
                        <HeartPulse className="w-4 h-4 text-emerald-600 shrink-0" />
                        Aplicação em Fisioterapia (Ausculta, Pulsos, Retorno Venoso ou Reab):
                      </span>
                      <p className="text-emerald-900 leading-relaxed text-[11px]">
                        {currentCard.aplicacao_fisioterapia}
                      </p>
                    </div>
                  )}
                </div>

                <div className="border-t border-slate-100 pt-3 flex items-center justify-between text-xs text-slate-400">
                  <span>Pressione Espaço para virar</span>
                  <span className="text-slate-500">UFPB Depto. de Morfologia</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls Bar */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handlePrev}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg shadow-xs transition-all active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" /> Anterior
            </button>

            {/* Quick dot indicator or jump */}
            <div className="flex items-center gap-1">
              <span className="text-xs text-slate-500 font-mono">
                {currentIndex + 1} / {filteredCards.length}
              </span>
            </div>

            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-xs transition-all active:scale-95"
            >
              Próximo <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 space-y-3">
          <p className="text-base font-semibold text-slate-700">Nenhum flashcard encontrado com os filtros atuais.</p>
          <p className="text-xs text-slate-500">Tente buscar por outro termo ou selecione a categoria "Todos".</p>
          <button
            onClick={() => {
              setSelectedCategory('todas');
              setSearchQuery('');
            }}
            className="px-4 py-2 text-xs font-medium text-rose-600 bg-rose-50 rounded-lg hover:bg-rose-100 transition-colors"
          >
            Limpar Filtros
          </button>
        </div>
      )}
    </div>
  );
};
