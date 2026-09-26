import React, { useState, useEffect } from 'react';
import { auscultationFoci, pulsePoints } from '../data/practicalGuideData';
import { playHeartSound } from '../utils/audioSimulator';
import {
  Stethoscope,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Activity,
  HeartPulse,
  Info,
  CheckCircle,
  HelpCircle,
  MapPin,
  Sparkles
} from 'lucide-react';

export const AuscultationSimulator: React.FC = () => {
  const [selectedFocusId, setSelectedFocusId] = useState<string>(auscultationFoci[0].id);
  const [isPlayingContinuous, setIsPlayingContinuous] = useState<boolean>(false);
  const [bpm, setBpm] = useState<number>(72);
  const [activeTab, setActiveTab] = useState<'ausculta' | 'pulsos'>('ausculta');
  const [selectedPulseLimb, setSelectedPulseLimb] = useState<string>('todos');

  const currentFocus = auscultationFoci.find((f) => f.id === selectedFocusId) || auscultationFoci[0];

  // Play sound on one-shot click
  const triggerSound = (focusId: string) => {
    setSelectedFocusId(focusId);
    playHeartSound('both', bpm / 72);
  };

  // Continuous heartbeat loop when enabled
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isPlayingContinuous) {
      // Play immediately once
      playHeartSound('both', bpm / 72);
      const intervalMs = (60 / bpm) * 1000;
      interval = setInterval(() => {
        playHeartSound('both', bpm / 72);
      }, intervalMs);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlayingContinuous, bpm]);

  const filteredPulses = pulsePoints.filter((p) => {
    if (selectedPulseLimb === 'todos') return true;
    return p.lado === selectedPulseLimb;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 sm:py-8 space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-display">
            Ausculta Cardíaca & Pulsos Periféricos
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Simulador acústico dos focos precordiais (B1/B2) e guia prático de palpação arterial em Fisioterapia.
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex items-center gap-1 p-1 bg-slate-200/80 rounded-xl text-xs font-semibold">
          <button
            onClick={() => setActiveTab('ausculta')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'ausculta'
                ? 'bg-white text-slate-900 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Focos de Ausculta
          </button>
          <button
            onClick={() => setActiveTab('pulsos')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'pulsos'
                ? 'bg-white text-slate-900 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Pulsos Arteriais
          </button>
        </div>
      </div>

      {activeTab === 'ausculta' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive Chest Visualizer (Left/Top 5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 space-y-5 shadow-xs">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <Stethoscope className="w-4 h-4 text-rose-600" />
                Mapa Torácico Precordial
              </span>
              <span className="text-xs text-slate-400">Clique nos pontos</span>
            </div>

            {/* SVG Torso Diagram */}
            <div className="relative w-full aspect-[4/5] bg-slate-50 rounded-xl border border-slate-200/60 overflow-hidden flex items-center justify-center p-4">
              <svg viewBox="0 0 300 380" className="w-full h-full max-h-[340px] drop-shadow-xs">
                {/* Torso Silhouette */}
                <path
                  d="M70,30 Q110,20 150,20 Q190,20 230,30 Q270,50 265,110 Q260,180 250,260 Q245,340 230,370 L70,370 Q55,340 50,260 Q40,180 35,110 Q30,50 70,30 Z"
                  fill="#f1f5f9"
                  stroke="#cbd5e1"
                  strokeWidth="2"
                />

                {/* Clavicles */}
                <path d="M70,40 Q110,50 150,55" fill="none" stroke="#94a3b8" strokeWidth="2.5" />
                <path d="M230,40 Q190,50 150,55" fill="none" stroke="#94a3b8" strokeWidth="2.5" />

                {/* Sternum (Manubrium and Body) */}
                <path
                  d="M142,55 L158,55 L156,75 L144,75 Z"
                  fill="#e2e8f0"
                  stroke="#94a3b8"
                  strokeWidth="1.5"
                />
                <rect x="144" y="75" width="12" height="90" rx="4" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
                {/* Xiphoid Process */}
                <polygon points="146,165 154,165 150,178" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />

                {/* Rib lines (Subtle) */}
                <path d="M142,80 Q90,75 55,90" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M158,80 Q210,75 245,90" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M142,100 Q90,95 50,120" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M158,100 Q210,95 250,120" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M142,125 Q90,120 48,150" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M158,125 Q210,120 252,150" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M142,150 Q90,145 45,180" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M158,150 Q210,145 255,180" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />

                {/* Heart outline projection in thorax (2/3 to the left) */}
                <path
                  d="M135,100 C125,75 165,75 155,100 C155,130 180,160 115,220 C85,170 115,130 135,100 Z"
                  fill="rgba(225, 29, 72, 0.08)"
                  stroke="rgba(225, 29, 72, 0.25)"
                  strokeWidth="1.5"
                />

                {/* Interactive Clickable Foci Points */}
                {/* 1. Foco Aórtico (2º EICD - anatomically right, visually viewer's left) */}
                <g
                  className="cursor-pointer group"
                  onClick={() => triggerSound('foco-aortico')}
                >
                  <circle
                    cx="128"
                    cy="100"
                    r={selectedFocusId === 'foco-aortico' ? '12' : '8'}
                    fill="#e11d48"
                    className="transition-all duration-300"
                    fillOpacity={selectedFocusId === 'foco-aortico' ? '1' : '0.85'}
                  />
                  {selectedFocusId === 'foco-aortico' && (
                    <circle cx="128" cy="100" r="18" fill="none" stroke="#e11d48" strokeWidth="2" className="animate-ping" />
                  )}
                  <text x="128" y="93" textAnchor="end" fontSize="10" fontWeight="bold" fill="#be123c">
                    Aórtico
                  </text>
                </g>

                {/* 2. Foco Pulmonar (2º EICE - anatomically left, visually viewer's right) */}
                <g
                  className="cursor-pointer group"
                  onClick={() => triggerSound('foco-pulmonar')}
                >
                  <circle
                    cx="172"
                    cy="100"
                    r={selectedFocusId === 'foco-pulmonar' ? '12' : '8'}
                    fill="#2563eb"
                    className="transition-all duration-300"
                    fillOpacity={selectedFocusId === 'foco-pulmonar' ? '1' : '0.85'}
                  />
                  {selectedFocusId === 'foco-pulmonar' && (
                    <circle cx="172" cy="100" r="18" fill="none" stroke="#2563eb" strokeWidth="2" className="animate-ping" />
                  )}
                  <text x="172" y="93" textAnchor="start" fontSize="10" fontWeight="bold" fill="#1d4ed8">
                    Pulmonar
                  </text>
                </g>

                {/* 3. Foco Tricúspide (4º/5º EICE junto ao esterno) */}
                <g
                  className="cursor-pointer group"
                  onClick={() => triggerSound('foco-tricuspide')}
                >
                  <circle
                    cx="168"
                    cy="165"
                    r={selectedFocusId === 'foco-tricuspide' ? '12' : '8'}
                    fill="#059669"
                    className="transition-all duration-300"
                    fillOpacity={selectedFocusId === 'foco-tricuspide' ? '1' : '0.85'}
                  />
                  {selectedFocusId === 'foco-tricuspide' && (
                    <circle cx="168" cy="165" r="18" fill="none" stroke="#059669" strokeWidth="2" className="animate-ping" />
                  )}
                  <text x="178" y="169" textAnchor="start" fontSize="10" fontWeight="bold" fill="#047857">
                    Tricúspide
                  </text>
                </g>

                {/* 4. Foco Mitral (5º EICE na LMC - ápice / ictus cordis) */}
                <g
                  className="cursor-pointer group"
                  onClick={() => triggerSound('foco-mitral')}
                >
                  <circle
                    cx="205"
                    cy="200"
                    r={selectedFocusId === 'foco-mitral' ? '12' : '8'}
                    fill="#d97706"
                    className="transition-all duration-300"
                    fillOpacity={selectedFocusId === 'foco-mitral' ? '1' : '0.85'}
                  />
                  {selectedFocusId === 'foco-mitral' && (
                    <circle cx="205" cy="200" r="18" fill="none" stroke="#d97706" strokeWidth="2" className="animate-ping" />
                  )}
                  <text x="205" y="222" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#b45309">
                    Mitral (Ápice)
                  </text>
                </g>
              </svg>
            </div>

            {/* Audio Loop and BPM Controls */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <HeartPulse className="w-4 h-4 text-rose-600 animate-pulse" />
                  <span className="text-xs font-bold text-slate-800">
                    Ritmo Contínuo (B1 + B2)
                  </span>
                </div>

                <button
                  onClick={() => setIsPlayingContinuous(!isPlayingContinuous)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-xs ${
                    isPlayingContinuous
                      ? 'bg-rose-600 text-white'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {isPlayingContinuous ? (
                    <>
                      <Pause className="w-3.5 h-3.5" /> Pausar
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" /> Reproduzir
                    </>
                  )}
                </button>
              </div>

              {/* BPM Selector */}
              <div className="flex items-center justify-between text-xs text-slate-600 pt-1">
                <span>Frequência Cardíaca:</span>
                <div className="flex items-center gap-1 font-mono">
                  {[60, 75, 100].map((rate) => (
                    <button
                      key={rate}
                      onClick={() => setBpm(rate)}
                      className={`px-2 py-0.5 rounded text-[11px] font-semibold border ${
                        bpm === rate
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {rate} bpm
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Clinical Deck for Selected Focus (Right 7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
                  Foco Precordial Selecionado
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display mt-0.5">
                  {currentFocus.nome}
                </h2>
                <span className="text-xs text-slate-500">{currentFocus.valvaCorrespondente}</span>
              </div>

              <button
                onClick={() => triggerSound(currentFocus.id)}
                className="px-3.5 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-xs rounded-xl border border-rose-200 transition-colors flex items-center gap-1.5"
              >
                <Volume2 className="w-4 h-4 text-rose-600" /> Ouvir B1-B2
              </button>
            </div>

            {/* Coordinates and Stethoscope Placement */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <span className="font-bold text-slate-800 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-rose-600" /> Ponto Anatômico:
                </span>
                <p className="text-slate-600 leading-relaxed">{currentFocus.localizacaoAnatomica}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <span className="font-bold text-slate-800 flex items-center gap-1">
                  <Stethoscope className="w-3.5 h-3.5 text-blue-600" /> Posicionamento da Campânula:
                </span>
                <p className="text-slate-600 leading-relaxed">{currentFocus.posicionamentoEstetoscopio}</p>
              </div>
            </div>

            {/* Sound Characteristics */}
            <div className="p-4 rounded-xl bg-rose-50/50 border border-rose-100 space-y-1 text-xs">
              <span className="font-bold text-rose-800 flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-rose-600" />
                Características Acústicas das Bulhas neste Foco:
              </span>
              <p className="text-slate-700 leading-relaxed">{currentFocus.caracteristicaBulha}</p>
            </div>

            {/* Physiotherapy Application */}
            <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/80 space-y-1 text-xs">
              <span className="font-bold text-emerald-800 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                Aplicação Prática em Fisioterapia Cardiovascular & Respiratória:
              </span>
              <p className="text-emerald-950 leading-relaxed">{currentFocus.aplicacaoFisioterapia}</p>
            </div>

            {/* Quick Summary of the 4 foci */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                Alternar Rapidamente Entre os Focos:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {auscultationFoci.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => triggerSound(f.id)}
                    className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                      selectedFocusId === f.id
                        ? 'border-rose-600 bg-rose-50/70 text-rose-900 font-bold shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 text-slate-600'
                    }`}
                  >
                    <span className="block truncate">{f.nome}</span>
                    <span className="text-[10px] text-slate-400 block font-normal">
                      {f.valvaCorrespondente.split('(')[0]}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Arterial Pulse Points Section */
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                  Guia de Palpação de Pulsos Arteriais Periféricos
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Mapeamento anatômico de artérias palpáveis contra anteparos ósseos essenciais na avaliação vascular.
                </p>
              </div>

              {/* Limb Filter Buttons */}
              <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg text-xs font-semibold">
                {['todos', 'Membro Superior', 'Membro Inferior', 'Cabeça/Pescoço'].map((limb) => (
                  <button
                    key={limb}
                    onClick={() => setSelectedPulseLimb(limb)}
                    className={`px-3 py-1.5 rounded-md transition-all whitespace-nowrap ${
                      selectedPulseLimb === limb
                        ? 'bg-white text-slate-900 shadow-xs font-bold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {limb === 'todos' ? 'Todos os Pulsos' : limb}
                  </button>
                ))}
              </div>
            </div>

            {/* Pulse Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredPulses.map((pulse) => (
                <div
                  key={pulse.id}
                  className="p-5 rounded-2xl border border-slate-200 hover:border-slate-300 bg-white space-y-3 transition-colors shadow-xs"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-rose-600 uppercase tracking-wider font-mono">
                        {pulse.lado}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 font-display">{pulse.nome}</h3>
                      <span className="text-xs text-slate-500 font-medium">{pulse.arteria}</span>
                    </div>

                    <span className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                      <HeartPulse className="w-4 h-4" />
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                      <span className="font-bold text-slate-800 block mb-0.5">Localização Exata da Palpação:</span>
                      <p className="text-slate-600 leading-relaxed">{pulse.localizacaoPalpacao}</p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-rose-50/50 border border-rose-100">
                      <span className="font-bold text-rose-700 block mb-0.5">Técnica & Dica Prática:</span>
                      <p className="text-slate-700 leading-relaxed">{pulse.dicaPratica}</p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-emerald-50/50 border border-emerald-100">
                      <span className="font-bold text-emerald-800 block mb-0.5">Relevância na Fisioterapia:</span>
                      <p className="text-emerald-950 leading-relaxed">{pulse.relevanciaClinica}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
