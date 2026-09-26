import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Wind,
  Flame,
  ArrowRight,
  Activity,
  Sparkles,
  Info,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Layers,
  Heart
} from 'lucide-react';
import { playHeartSound } from '../utils/audioSimulator';

export interface CirculationStage {
  id: number;
  circuito: 'Pequena (Pulmonar)' | 'Grande (Sistêmica)';
  titulo: string;
  subtitulo: string;
  sangue: 'venoso' | 'arterial' | 'transicao-oxigenacao' | 'transicao-desoxigenacao';
  gasPreponderante: string;
  pressaoEstimada: string;
  oQueOcorre: string;
  relevanciaFisio: string;
  destaqueSvg: 'vd' | 'tronco-pulmonar' | 'pulmoes' | 'veias-pulmonares' | 'ae' | 've' | 'aorta' | 'tecidos' | 'veias-cavas' | 'ad';
}

const circulationStages: CirculationStage[] = [
  {
    id: 1,
    circuito: 'Pequena (Pulmonar)',
    titulo: '1. Sístole do Ventrículo Direito (Início da Pequena)',
    subtitulo: 'Ejeção de sangue venoso sob baixa pressão',
    sangue: 'venoso',
    gasPreponderante: 'Rico em CO₂ · Pobre em O₂',
    pressaoEstimada: '~25 mmHg (baixa resistência)',
    oQueOcorre: 'O miocárdio do Ventrículo Direito se contrai, abrindo a valva pulmonar e impulsionando o sangue venoso para o tronco pulmonar.',
    relevanciaFisio: 'Pressões ventriculares direitas excessivas (como no DPOC ou embolia) geram sobrecarga e Cor Pulmonale com fadiga muscular periférica.',
    destaqueSvg: 'vd'
  },
  {
    id: 2,
    circuito: 'Pequena (Pulmonar)',
    titulo: '2. Tronco Pulmonar & Artérias Pulmonares D e E',
    subtitulo: 'Artérias conduzindo sangue venoso desoxigenado',
    sangue: 'venoso',
    gasPreponderante: 'Rico em CO₂ · Pobre em O₂',
    pressaoEstimada: '~25/10 mmHg',
    oQueOcorre: 'O tronco pulmonar ascende, cruza a frente da aorta e se bifurca sob o arco aórtico, penetrando os hilos dos dois pulmões.',
    relevanciaFisio: 'Atenção na prova prática da UFPB: apesar de se chamarem ARTÉRIAS, transportam sangue VENOSO (desoxigenado)!',
    destaqueSvg: 'tronco-pulmonar'
  },
  {
    id: 3,
    circuito: 'Pequena (Pulmonar)',
    titulo: '3. Hematose nos Capilares Alveolares (Troca Gasosa)',
    subtitulo: 'O sangue torna-se ARTERIAL (100% oxigenado)',
    sangue: 'transicao-oxigenacao',
    gasPreponderante: 'CO₂ eliminado no ar expirado · O₂ absorvido pelas hemácias',
    pressaoEstimada: '~8-10 mmHg (regime capilar seguro)',
    oQueOcorre: 'Nos alvéolos pulmonares, o dióxido de carbono difunde-se para fora do sangue e o oxigênio inspirado se liga à hemoglobina. O sangue muda de azul para vermelho vivo!',
    relevanciaFisio: 'Manobras fisioterapêuticas de reexpansão pulmonar e higiene brônquica otimizam a relação V/Q (ventilação/perfusão) e a hematose alveolar.',
    destaqueSvg: 'pulmoes'
  },
  {
    id: 4,
    circuito: 'Pequena (Pulmonar)',
    titulo: '4. 4 Veias Pulmonares & Átrio Esquerdo (Fim da Pequena)',
    subtitulo: 'Retorno venoso com sangue arterial ao coração',
    sangue: 'arterial',
    gasPreponderante: 'Rico em O₂ · Pobre em CO₂',
    pressaoEstimada: '~5-10 mmHg',
    oQueOcorre: 'As 4 veias pulmonares (2 direitas e 2 esquerdas) deságuam no teto do Átrio Esquerdo, encerrando a Pequena Circulação. O sangue passa pela valva mitral para o VE.',
    relevanciaFisio: 'Aumento da pressão venocapilar pulmonar por estenose mitral causa extravasamento intersticial (edema agudo de pulmão).',
    destaqueSvg: 'veias-pulmonares'
  },
  {
    id: 5,
    circuito: 'Grande (Sistêmica)',
    titulo: '5. Sístole do Ventrículo Esquerdo (Início da Grande)',
    subtitulo: 'Bomba sistêmica de alta pressão',
    sangue: 'arterial',
    gasPreponderante: 'Rico em O₂ · Pobre em CO₂',
    pressaoEstimada: '~120 mmHg (alta pressão)',
    oQueOcorre: 'O miocárdio hipertrofiado do Ventrículo Esquerdo (3x mais espesso que o VD) contrai-se com vigor, abrindo a valva aórtica para ejetar o débito cardíaco.',
    relevanciaFisio: 'O choque da ponta (Ictus Cordis) palpável no 5º EICE na linha hemiclavicular esquerda reflete a força e o tamanho deste ventrículo.',
    destaqueSvg: 've'
  },
  {
    id: 6,
    circuito: 'Grande (Sistêmica)',
    titulo: '6. Artéria Aorta & Arteríolas Sistêmicas',
    subtitulo: 'Distribuição arterial corporal & regulação de RPT',
    sangue: 'arterial',
    gasPreponderante: 'Rico em O₂ · Pobre em CO₂',
    pressaoEstimada: '~120/80 mmHg',
    oQueOcorre: 'A onda de pulso percorre o arco aórtico (irrigando cabeça e braços) e a aorta descendente (irrigando vísceras e pernas). As arteríolas regulam a resistência periférica.',
    relevanciaFisio: 'O efeito Windkessel da elasticidade aórtica suaviza a pulsação sistólica. Exercícios aeróbicos melhoram a vasodilatação endotelial.',
    destaqueSvg: 'aorta'
  },
  {
    id: 7,
    circuito: 'Grande (Sistêmica)',
    titulo: '7. Capilares dos Tecidos Corporais (Perfusão Sistêmica)',
    subtitulo: 'Entrega de oxigênio & captação de CO₂ metabólico',
    sangue: 'transicao-desoxigenacao',
    gasPreponderante: 'O₂ entra nas células musculares e órgãos · CO₂ entra no sangue',
    pressaoEstimada: '~30 mmHg (arteriolar) → ~15 mmHg (venular)',
    oQueOcorre: 'O oxigênio e os nutrientes são consumidos pelas mitocôndrias celulares para gerar ATP. O sangue perde oxigênio e volta a ficar azul (venoso).',
    relevanciaFisio: 'Em insuficiência arterial periférica, a diminuição da perfusão gera claudicação intermitente durante a marcha no paciente.',
    destaqueSvg: 'tecidos'
  },
  {
    id: 8,
    circuito: 'Grande (Sistêmica)',
    titulo: '8. Veias Cavas & Átrio Direito (Fim da Grande Circulação)',
    subtitulo: 'Retorno venoso total ao ponto de reinício',
    sangue: 'venoso',
    gasPreponderante: 'Rico em CO₂ · Pobre em O₂',
    pressaoEstimada: '~2-6 mmHg (Pressão Venosa Central - PVC)',
    oQueOcorre: 'A Veia Cava Superior (cabeça/braços) e a Veia Cava Inferior (tronco/pernas) despejam todo o retorno venoso no Átrio Direito, completando o ciclo que se reinicia!',
    relevanciaFisio: 'A bomba muscular da panturrilha ("segundo coração") é ativada pela dorsiflexão durante a caminhada, impulsionando o retorno venoso contra a gravidade.',
    destaqueSvg: 'ad'
  }
];

export const CirculationAnimationPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentStageIndex, setCurrentStageIndex] = useState<number>(0);
  const [speed, setSpeed] = useState<number>(1);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const [modeFilter, setModeFilter] = useState<'tudo' | 'pequena' | 'grande'>('tudo');
  const [flowPhase, setFlowPhase] = useState<number>(0); // 0 to 100 continuously

  const currentStage = circulationStages[currentStageIndex];

  // RequestAnimationFrame loop for fluid visual pulse & flow
  const reqRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(performance.now());
  const stageTimerRef = useRef<number>(0);

  useEffect(() => {
    const stageDuration = 3800 / speed;

    const animate = (time: number) => {
      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      if (isPlaying) {
        setFlowPhase((prev) => (prev + (delta * 0.05 * speed)) % 100);

        stageTimerRef.current += delta;
        if (stageTimerRef.current >= stageDuration) {
          stageTimerRef.current = 0;
          setCurrentStageIndex((prev) => {
            let next = (prev + 1) % circulationStages.length;
            // Respect mode filter if set
            if (modeFilter === 'pequena' && next >= 4) {
              next = 0;
            } else if (modeFilter === 'grande' && (next < 4 || next >= 8)) {
              next = 4;
            }

            // Play heart sound on ventricular systole
            if (soundEnabled && (next === 0 || next === 4)) {
              playHeartSound('both', speed);
            }

            return next;
          });
        }
      }

      reqRef.current = requestAnimationFrame(animate);
    };

    reqRef.current = requestAnimationFrame(animate);

    return () => {
      if (reqRef.current) cancelAnimationFrame(reqRef.current);
    };
  }, [isPlaying, speed, soundEnabled, modeFilter]);

  const handleTogglePlay = () => {
    if (!isPlaying && soundEnabled) {
      playHeartSound('both', speed);
    }
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setCurrentStageIndex(modeFilter === 'grande' ? 4 : 0);
    stageTimerRef.current = 0;
    setFlowPhase(0);
    if (soundEnabled) playHeartSound('both', speed);
  };

  const handleSelectStage = (idx: number) => {
    setCurrentStageIndex(idx);
    stageTimerRef.current = 0;
    if (soundEnabled && (idx === 0 || idx === 4)) {
      playHeartSound('both', speed);
    }
  };

  const handleModeChange = (mode: 'tudo' | 'pequena' | 'grande') => {
    setModeFilter(mode);
    if (mode === 'pequena') setCurrentStageIndex(0);
    if (mode === 'grande') setCurrentStageIndex(4);
    stageTimerRef.current = 0;
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden space-y-6">
      {/* Top Controller Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 text-white p-5 sm:p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping"></span>
              Simulador Hemodinâmico Animado em Tempo Real
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-display tracking-tight text-white flex items-center gap-2">
              <Activity className="w-6 h-6 text-rose-500" />
              Como a Circulação Percorre o Corpo Humano
            </h2>
            <p className="text-xs text-slate-300 max-w-xl">
              Observe o duplo circuito biológico (em formato de 8): o sangue venoso (azul) é oxigenado nos pulmões (hematose), volta ao coração e é impulsionado sob alta pressão como sangue arterial (vermelho) para perfundir todos os órgãos e membros.
            </p>
          </div>

          {/* Action Control Panel */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Play / Pause button */}
            <button
              onClick={handleTogglePlay}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md active:scale-95 ${
                isPlaying
                  ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 ring-2 ring-amber-400/40'
                  : 'bg-rose-600 hover:bg-rose-500 text-white ring-2 ring-rose-500/40'
              }`}
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
              <span>{isPlaying ? 'Pausar Animação' : 'Iniciar Animação'}</span>
            </button>

            {/* Restart button */}
            <button
              onClick={handleReset}
              title="Reiniciar Circulação do Início"
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Sound toggle */}
            <button
              onClick={() => {
                if (!soundEnabled) playHeartSound('both', speed);
                setSoundEnabled(!soundEnabled);
              }}
              title="Alternar Som Cardíaco (Lub-Dub)"
              className={`px-3 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition-all ${
                soundEnabled
                  ? 'bg-rose-500/20 border-rose-500/50 text-rose-300'
                  : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:text-slate-200'
              }`}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-rose-400" /> : <VolumeX className="w-4 h-4" />}
              <span className="hidden sm:inline">{soundEnabled ? 'Áudio Ligado' : 'Mudo'}</span>
            </button>

            {/* Speed toggle */}
            <div className="inline-flex rounded-xl bg-slate-800 p-0.5 border border-slate-700 text-xs font-bold">
              {[0.5, 1, 1.5].map((s) => (
                <button
                  key={s}
                  onClick={() => setSpeed(s)}
                  className={`px-2.5 py-1.5 rounded-lg transition-all ${
                    speed === s
                      ? 'bg-rose-600 text-white shadow-xs'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {s}x
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Circuit Mode Filter Sub-tabs */}
        <div className="flex items-center gap-2 mt-4 pt-3 border-t border-slate-800/80 text-xs">
          <span className="text-slate-400 font-semibold mr-1">Foco Didático:</span>
          <button
            onClick={() => handleModeChange('tudo')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
              modeFilter === 'tudo'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-750'
            }`}
          >
            Ciclo Corporal Completo (Pequena + Grande)
          </button>

          <button
            onClick={() => handleModeChange('pequena')}
            className={`px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition-all ${
              modeFilter === 'pequena'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-750'
            }`}
          >
            <Wind className="w-3.5 h-3.5 text-blue-300" />
            Apenas Pequena (Pulmonar)
          </button>

          <button
            onClick={() => handleModeChange('grande')}
            className={`px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition-all ${
              modeFilter === 'grande'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-750'
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-rose-300" />
            Apenas Grande (Sistêmica)
          </button>
        </div>
      </div>

      {/* Main Interactive Stage & Diagram Area */}
      <div className="p-4 sm:p-6 lg:p-8 space-y-6">
        {/* Stage Highlight Banner with Real-time metrics */}
        <div
          className={`p-5 rounded-2xl border transition-all duration-300 ${
            currentStage.sangue === 'venoso'
              ? 'bg-blue-50/70 border-blue-200'
              : currentStage.sangue === 'arterial'
              ? 'bg-rose-50/70 border-rose-200'
              : 'bg-purple-50/70 border-purple-200'
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/60 pb-3">
            <div className="flex items-center gap-3">
              <span
                className={`w-9 h-9 rounded-xl font-mono font-bold text-sm flex items-center justify-center shrink-0 text-white shadow-xs ${
                  currentStage.circuito.startsWith('Pequena') ? 'bg-blue-600' : 'bg-rose-600'
                }`}
              >
                {currentStage.id}
              </span>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  {currentStage.circuito} · Etapa {currentStage.id} de 8
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {currentStage.titulo}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <span
                className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${
                  currentStage.sangue === 'venoso'
                    ? 'bg-blue-100/90 text-blue-900 border-blue-200'
                    : currentStage.sangue === 'arterial'
                    ? 'bg-rose-100/90 text-rose-900 border-rose-200'
                    : 'bg-purple-100/90 text-purple-900 border-purple-200'
                }`}
              >
                {currentStage.sangue === 'venoso'
                  ? '🔵 Sangue Venoso (CO₂)'
                  : currentStage.sangue === 'arterial'
                  ? '🔴 Sangue Arterial (O₂)'
                  : '🟣 Hematose / Perfusão (Troca)'}
              </span>

              <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-mono font-semibold text-slate-700 shadow-2xs">
                {currentStage.pressaoEstimada}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 text-xs sm:text-sm">
            <div className="space-y-1">
              <strong className="text-slate-800 font-bold block">Dinâmica de Fluxo Nesta Etapa:</strong>
              <p className="text-slate-700 leading-relaxed">{currentStage.oQueOcorre}</p>
            </div>

            <div className="space-y-1 bg-white/70 p-3 rounded-xl border border-slate-200/80 text-xs">
              <strong className="text-slate-900 font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-rose-600" />
                Aplicação Prática em Fisioterapia / Prova UFPB:
              </strong>
              <p className="text-slate-600 leading-relaxed">{currentStage.relevanciaFisio}</p>
            </div>
          </div>
        </div>

        {/* 8-Step Timeline Track */}
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5">
          {circulationStages.map((stg, sIdx) => {
            const isCurrent = currentStageIndex === sIdx;
            const isPulm = stg.circuito.startsWith('Pequena');

            return (
              <button
                key={stg.id}
                onClick={() => handleSelectStage(sIdx)}
                className={`p-2 rounded-xl text-center text-xs font-bold transition-all border ${
                  isCurrent
                    ? isPulm
                      ? 'bg-blue-600 text-white border-blue-600 ring-2 ring-blue-500/20 shadow-xs'
                      : 'bg-rose-600 text-white border-rose-600 ring-2 ring-rose-500/20 shadow-xs'
                    : isPulm
                    ? 'bg-blue-50/70 text-blue-700 border-blue-100 hover:bg-blue-100'
                    : 'bg-rose-50/70 text-rose-700 border-rose-100 hover:bg-rose-100'
                }`}
              >
                <div className="text-[10px] opacity-75 font-mono">#{stg.id}</div>
                <div className="truncate text-[11px] mt-0.5">
                  {sIdx === 0
                    ? 'VD'
                    : sIdx === 1
                    ? 'Tr. Pulm.'
                    : sIdx === 2
                    ? 'Hematose'
                    : sIdx === 3
                    ? 'V. Pulm/AE'
                    : sIdx === 4
                    ? 'VE'
                    : sIdx === 5
                    ? 'Aorta'
                    : sIdx === 6
                    ? 'Tecidos'
                    : 'Cavas/AD'}
                </div>
              </button>
            );
          })}
        </div>

        {/* SVG ANIMATED BODY & HEART DOUBLE-LOOP DIAGRAM */}
        <div className="relative bg-slate-900 rounded-3xl p-4 sm:p-6 overflow-hidden shadow-inner flex flex-col items-center">
          {/* Legend and Status Overlay */}
          <div className="w-full flex items-center justify-between text-xs text-slate-300 pb-3 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-blue-400 font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                Circuito Venoso (Desoxigenado)
              </span>
              <span className="flex items-center gap-1.5 text-rose-400 font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                Circuito Arterial (Oxigenado)
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-slate-400 text-[11px]">
              <span>Velocidade: {speed}x</span>
              <span>·</span>
              <span className="text-emerald-400 font-mono font-semibold">
                {isPlaying ? '● Em Fluxo Contínuo' : '⏸ Pausado'}
              </span>
            </div>
          </div>

          {/* SVG Diagram Canvas */}
          <div className="w-full max-w-3xl aspect-[800/680] relative">
            <svg
              viewBox="0 0 800 680"
              className="w-full h-full select-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Glow filters */}
                <filter id="glow-blue" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <filter id="glow-red" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                {/* Gradients for transition zones */}
                <linearGradient id="hematose-grad-left" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#ef4444" />
                </linearGradient>

                <linearGradient id="hematose-grad-right" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ef4444" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>

                <linearGradient id="tissue-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ef4444" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>

              {/* BACKGROUND OUTLINE OF HUMAN TORSO & HEAD */}
              <path
                d="M 400 30 C 370 30 350 50 350 80 C 350 95 360 108 375 115 C 330 135 250 160 210 220 C 190 250 190 320 200 420 C 210 500 230 580 250 640 L 550 640 C 570 580 590 500 600 420 C 610 320 610 250 590 220 C 550 160 470 135 425 115 C 440 108 450 95 450 80 C 450 50 430 30 400 30 Z"
                fill="#0f172a"
                stroke="#1e293b"
                strokeWidth="2.5"
                strokeDasharray="4 4"
                opacity="0.7"
              />

              {/* ======================================================== */}
              {/* ZONE 1: LUNGS & ALVEOLAR HEMATOSIS (TOP: Y = 130 to 220) */}
              {/* ======================================================== */}

              {/* Left Lung Box (anatomical right of body = viewer left) */}
              <g
                className={`transition-all duration-300 ${
                  currentStage.destaqueSvg === 'pulmoes' ? 'opacity-100 scale-[1.02]' : 'opacity-85'
                }`}
                style={{ transformOrigin: '240px 170px' }}
              >
                <rect
                  x="160"
                  y="120"
                  width="160"
                  height="100"
                  rx="24"
                  fill="#1e1b4b"
                  stroke={currentStage.destaqueSvg === 'pulmoes' ? '#818cf8' : '#312e81'}
                  strokeWidth={currentStage.destaqueSvg === 'pulmoes' ? '3' : '1.5'}
                />
                {/* Alveolar capillary mesh effect */}
                <path
                  d="M 180 145 Q 210 160 240 145 T 300 145 M 180 170 Q 210 185 240 170 T 300 170 M 180 195 Q 210 210 240 195 T 300 195"
                  stroke="url(#hematose-grad-left)"
                  strokeWidth="3.5"
                  fill="none"
                  strokeDasharray="6 3"
                />
                <text x="240" y="140" fill="#c7d2fe" fontSize="12" fontWeight="bold" textAnchor="middle">
                  Pulmão Direito
                </text>
                <text x="240" y="160" fill="#a5b4fc" fontSize="10" textAnchor="middle">
                  Hematose Alveolar
                </text>
                <text x="240" y="205" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">
                  CO₂ Sai ⬆ · O₂ Entra ⬇
                </text>
              </g>

              {/* Right Lung Box (anatomical left of body = viewer right) */}
              <g
                className={`transition-all duration-300 ${
                  currentStage.destaqueSvg === 'pulmoes' ? 'opacity-100 scale-[1.02]' : 'opacity-85'
                }`}
                style={{ transformOrigin: '560px 170px' }}
              >
                <rect
                  x="480"
                  y="120"
                  width="160"
                  height="100"
                  rx="24"
                  fill="#1e1b4b"
                  stroke={currentStage.destaqueSvg === 'pulmoes' ? '#818cf8' : '#312e81'}
                  strokeWidth={currentStage.destaqueSvg === 'pulmoes' ? '3' : '1.5'}
                />
                {/* Alveolar capillary mesh effect */}
                <path
                  d="M 500 145 Q 530 160 560 145 T 620 145 M 500 170 Q 530 185 560 170 T 620 170 M 500 195 Q 530 210 560 195 T 620 195"
                  stroke="url(#hematose-grad-right)"
                  strokeWidth="3.5"
                  fill="none"
                  strokeDasharray="6 3"
                />
                <text x="560" y="140" fill="#c7d2fe" fontSize="12" fontWeight="bold" textAnchor="middle">
                  Pulmão Esquerdo
                </text>
                <text x="560" y="160" fill="#a5b4fc" fontSize="10" textAnchor="middle">
                  Hematose Alveolar
                </text>
                <text x="560" y="205" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">
                  CO₂ Sai ⬆ · O₂ Entra ⬇
                </text>
              </g>

              {/* Respiratory Gas indicator bubbles above lungs */}
              <g opacity={currentStage.destaqueSvg === 'pulmoes' ? '1' : '0.6'}>
                <circle cx="200" cy="100" r="14" fill="#0284c7" />
                <text x="200" y="104" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">
                  O₂
                </text>
                <circle cx="280" cy="100" r="14" fill="#475569" />
                <text x="280" y="104" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">
                  CO₂
                </text>

                <circle cx="520" cy="100" r="14" fill="#475569" />
                <text x="520" y="104" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">
                  CO₂
                </text>
                <circle cx="600" cy="100" r="14" fill="#0284c7" />
                <text x="600" y="104" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">
                  O₂
                </text>
              </g>

              {/* ======================================================== */}
              {/* ZONE 2: THE HEART & 4 CHAMBERS (CENTER: X=400, Y=330)    */}
              {/* ======================================================== */}

              {/* Heart Container Outer Silhouette */}
              <g
                className={`transition-transform duration-300 ${
                  isPlaying && (currentStageIndex === 0 || currentStageIndex === 4)
                    ? 'scale-[1.03]'
                    : 'scale-100'
                }`}
                style={{ transformOrigin: '400px 360px' }}
              >
                {/* Pericardium / Cardiac silhouette */}
                <path
                  d="M 400 270 C 310 240 260 300 280 390 C 300 460 380 500 400 510 C 420 500 500 460 520 390 C 540 300 490 240 400 270 Z"
                  fill="#111827"
                  stroke="#374151"
                  strokeWidth="3"
                />

                {/* Interventricular and Interatrial Septa dividing the 4 chambers */}
                <line x1="400" y1="270" x2="400" y2="505" stroke="#4b5563" strokeWidth="6" strokeLinecap="round" />
                <line x1="290" y1="350" x2="510" y2="350" stroke="#4b5563" strokeWidth="5" strokeLinecap="round" />

                {/* 1. RIGHT ATRIUM (AD) - Top Left (viewer perspective) */}
                <rect
                  x="300"
                  y="275"
                  width="95"
                  height="70"
                  rx="14"
                  className={`transition-all duration-300 cursor-pointer ${
                    currentStage.destaqueSvg === 'ad'
                      ? 'fill-blue-600/60 stroke-blue-400 stroke-2 filter drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]'
                      : 'fill-blue-950/70 stroke-blue-900'
                  }`}
                  onClick={() => handleSelectStage(7)}
                />
                <text x="347" y="305" fill="#93c5fd" fontSize="13" fontWeight="bold" textAnchor="middle">
                  Átrio Direito
                </text>
                <text x="347" y="322" fill="#60a5fa" fontSize="10" textAnchor="middle">
                  (AD) · Sangue Venoso
                </text>
                <text x="347" y="338" fill="#bfdbfe" fontSize="9" textAnchor="middle">
                  ~2-6 mmHg
                </text>

                {/* 2. RIGHT VENTRICLE (VD) - Bottom Left (viewer perspective) */}
                <rect
                  x="300"
                  y="355"
                  width="95"
                  height="110"
                  rx="16"
                  className={`transition-all duration-300 cursor-pointer ${
                    currentStage.destaqueSvg === 'vd'
                      ? 'fill-blue-600/60 stroke-blue-400 stroke-2 filter drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]'
                      : 'fill-blue-950/70 stroke-blue-900'
                  }`}
                  onClick={() => handleSelectStage(0)}
                />
                <text x="347" y="400" fill="#93c5fd" fontSize="13" fontWeight="bold" textAnchor="middle">
                  Ventrículo D.
                </text>
                <text x="347" y="418" fill="#60a5fa" fontSize="10" textAnchor="middle">
                  (VD) · Miocárdio 3-5mm
                </text>
                <text x="347" y="435" fill="#bfdbfe" fontSize="9" textAnchor="middle">
                  ~25/5 mmHg
                </text>
                <text x="347" y="455" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">
                  [Início Pequena]
                </text>

                {/* 3. LEFT ATRIUM (AE) - Top Right (viewer perspective) */}
                <rect
                  x="405"
                  y="275"
                  width="95"
                  height="70"
                  rx="14"
                  className={`transition-all duration-300 cursor-pointer ${
                    currentStage.destaqueSvg === 'ae' || currentStage.destaqueSvg === 'veias-pulmonares'
                      ? 'fill-rose-600/60 stroke-rose-400 stroke-2 filter drop-shadow-[0_0_8px_rgba(244,63,94,0.6)]'
                      : 'fill-rose-950/70 stroke-rose-900'
                  }`}
                  onClick={() => handleSelectStage(3)}
                />
                <text x="452" y="305" fill="#fecdd3" fontSize="13" fontWeight="bold" textAnchor="middle">
                  Átrio Esquerdo
                </text>
                <text x="452" y="322" fill="#fb7185" fontSize="10" textAnchor="middle">
                  (AE) · Sangue Arterial
                </text>
                <text x="452" y="338" fill="#ffe4e6" fontSize="9" textAnchor="middle">
                  ~5-10 mmHg
                </text>

                {/* 4. LEFT VENTRICLE (VE) - Bottom Right (viewer perspective) */}
                <rect
                  x="405"
                  y="355"
                  width="95"
                  height="110"
                  rx="16"
                  className={`transition-all duration-300 cursor-pointer ${
                    currentStage.destaqueSvg === 've'
                      ? 'fill-rose-600/60 stroke-rose-400 stroke-2 filter drop-shadow-[0_0_8px_rgba(244,63,94,0.6)]'
                      : 'fill-rose-950/70 stroke-rose-900'
                  }`}
                  onClick={() => handleSelectStage(4)}
                />
                <text x="452" y="400" fill="#fecdd3" fontSize="13" fontWeight="bold" textAnchor="middle">
                  Ventrículo E.
                </text>
                <text x="452" y="418" fill="#fb7185" fontSize="10" textAnchor="middle">
                  (VE) · Miocárdio 8-12mm
                </text>
                <text x="452" y="435" fill="#ffe4e6" fontSize="9" textAnchor="middle">
                  ~120/10 mmHg
                </text>
                <text x="452" y="455" fill="#f43f5e" fontSize="9" fontWeight="bold" textAnchor="middle">
                  [Início Grande]
                </text>

                {/* VALVES INDICATORS */}
                {/* Tricuspid Valve */}
                <circle cx="347" cy="350" r="9" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
                <text x="347" y="353" fill="#93c5fd" fontSize="8" fontWeight="bold" textAnchor="middle">
                  Tri
                </text>

                {/* Mitral Valve */}
                <circle cx="452" cy="350" r="9" fill="#1e293b" stroke="#ef4444" strokeWidth="2" />
                <text x="452" y="353" fill="#fca5a5" fontSize="8" fontWeight="bold" textAnchor="middle">
                  Mit
                </text>
              </g>

              {/* ======================================================== */}
              {/* ZONE 3: MAJOR VESSELS & ARCUATE CONNECTING PATHWAYS       */}
              {/* ======================================================== */}

              {/* PATH A: PULMONARY TRUNK & ARTERIES (From VD -> Lungs) */}
              {/* Emerge from VD, arch up to Left and Right Lungs */}
              <g className={currentStage.destaqueSvg === 'tronco-pulmonar' ? 'filter drop-shadow-[0_0_8px_#3b82f6]' : ''}>
                {/* Branch to Right Lung (viewer left) */}
                <path
                  id="path-pulmonary-right"
                  d="M 347 355 C 347 250 310 210 240 190"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                {/* Branch to Left Lung (viewer right) */}
                <path
                  id="path-pulmonary-left"
                  d="M 355 355 C 370 230 460 210 560 190"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                <text x="385" y="240" fill="#93c5fd" fontSize="10" fontWeight="bold">
                  Tronco Pulmonar
                </text>
              </g>

              {/* PATH B: PULMONARY VEINS (From Lungs -> Left Atrium AE) */}
              <g className={currentStage.destaqueSvg === 'veias-pulmonares' ? 'filter drop-shadow-[0_0_8px_#ef4444]' : ''}>
                {/* From Right Lung to AE */}
                <path
                  id="path-pulmonary-vein-right"
                  d="M 280 200 C 330 220 380 260 415 285"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
                {/* From Left Lung to AE */}
                <path
                  id="path-pulmonary-vein-left"
                  d="M 520 200 C 480 220 460 250 445 285"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
                <text x="470" y="245" fill="#fca5a5" fontSize="10" fontWeight="bold">
                  Veias Pulmonares (4)
                </text>
              </g>

              {/* PATH C: AORTA & SYSTEMIC ARTERIAL TREE (From VE -> Body) */}
              <g className={currentStage.destaqueSvg === 'aorta' ? 'filter drop-shadow-[0_0_8px_#ef4444]' : ''}>
                {/* Aorta arching up, giving branches to head and descending to lower body */}
                {/* Upper branch: to Head & Upper Limbs */}
                <path
                  id="path-aorta-head"
                  d="M 440 355 C 440 230 410 110 400 70"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="8"
                  strokeLinecap="round"
                />

                {/* Lower branch: Aorta Descendente to Trunk & Lower Limbs */}
                <path
                  id="path-aorta-lower"
                  d="M 460 365 C 480 430 460 510 440 540"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="9"
                  strokeLinecap="round"
                />
                <text x="475" y="490" fill="#fca5a5" fontSize="11" fontWeight="bold">
                  Aorta Descendente
                </text>
                <text x="405" y="95" fill="#fca5a5" fontSize="10" fontWeight="bold">
                  Arco Aórtico (MMSS/Cabeça)
                </text>
              </g>

              {/* PATH D: SYSTEMIC VEINS / VENAE CAVAE (From Body -> Right Atrium AD) */}
              <g className={currentStage.destaqueSvg === 'veias-cavas' || currentStage.destaqueSvg === 'ad' ? 'filter drop-shadow-[0_0_8px_#3b82f6]' : ''}>
                {/* Superior Vena Cava (VCS) from Head to AD */}
                <path
                  id="path-vcs"
                  d="M 380 70 C 370 120 350 210 345 275"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                <text x="310" y="115" fill="#93c5fd" fontSize="10" fontWeight="bold">
                  Veia Cava Superior
                </text>

                {/* Inferior Vena Cava (VCI) from Lower Body to AD */}
                <path
                  id="path-vci"
                  d="M 370 540 C 350 510 345 420 345 345"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="9"
                  strokeLinecap="round"
                />
                <text x="290" y="490" fill="#93c5fd" fontSize="11" fontWeight="bold">
                  Veia Cava Inferior
                </text>
              </g>

              {/* ======================================================== */}
              {/* ZONE 4: HEAD & UPPER LIMBS (TOP CAPILARY BED: Y=40 to 80) */}
              {/* ======================================================== */}
              <g className={currentStage.destaqueSvg === 'tecidos' ? 'scale-105' : ''} style={{ transformOrigin: '400px 65px' }}>
                <rect
                  x="330"
                  y="40"
                  width="140"
                  height="45"
                  rx="14"
                  fill="#1e1b4b"
                  stroke="#4338ca"
                  strokeWidth="1.5"
                />
                <text x="400" y="58" fill="#e0e7ff" fontSize="11" fontWeight="bold" textAnchor="middle">
                  Cabeça & Membros Superiores
                </text>
                <text x="400" y="73" fill="#a5b4fc" fontSize="9" textAnchor="middle">
                  Capilares Sistêmicos Superiores
                </text>
              </g>

              {/* ======================================================== */}
              {/* ZONE 5: LOWER BODY & LIMBS (BOTTOM BED: Y=540 to 620)    */}
              {/* ======================================================== */}
              <g
                className={`transition-all duration-300 ${
                  currentStage.destaqueSvg === 'tecidos'
                    ? 'opacity-100 scale-[1.02] filter drop-shadow-[0_0_10px_#a855f7]'
                    : 'opacity-85'
                }`}
                style={{ transformOrigin: '400px 580px' }}
              >
                <rect
                  x="260"
                  y="535"
                  width="280"
                  height="85"
                  rx="20"
                  fill="#1e1b4b"
                  stroke={currentStage.destaqueSvg === 'tecidos' ? '#c084fc' : '#4338ca'}
                  strokeWidth={currentStage.destaqueSvg === 'tecidos' ? '3' : '1.5'}
                />

                {/* Capillary mesh transition effect */}
                <path
                  d="M 290 565 Q 400 580 510 565 M 290 590 Q 400 605 510 590"
                  stroke="url(#tissue-grad)"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray="8 4"
                />

                <text x="400" y="555" fill="#f3e8ff" fontSize="13" fontWeight="bold" textAnchor="middle">
                  Órgãos Abdominais & Membros Inferiores
                </text>
                <text x="400" y="575" fill="#d8b4fe" fontSize="10" textAnchor="middle">
                  Perfusão Tecidual · Consumo de O₂ e Produção de CO₂
                </text>
                <text x="400" y="608" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">
                  Bomba da Panturrilha + Válvulas Venosas $\rightarrow$ Retorno à VCI
                </text>
              </g>

              {/* ======================================================== */}
              {/* ZONE 6: ANIMATED STREAMING PARTICLES (BLOOD CELLS / DROPS) */}
              {/* ======================================================== */}
              {isPlaying && (
                <>
                  {/* Small circulation particles (VD -> Lungs: Blue) */}
                  {[0, 25, 50, 75].map((offset) => {
                    const progress = ((flowPhase + offset) % 100) / 100;
                    // Approximate coordinate along pulmonary trunk to lungs
                    const x = 347 + (240 - 347) * progress;
                    const y = 355 + (190 - 355) * progress;
                    return (
                      <circle
                        key={`pulm-cell-r-${offset}`}
                        cx={x}
                        cy={y}
                        r="5"
                        fill="#38bdf8"
                        filter="url(#glow-blue)"
                      />
                    );
                  })}

                  {/* Lungs -> AE: Red particles */}
                  {[10, 35, 60, 85].map((offset) => {
                    const progress = ((flowPhase + offset) % 100) / 100;
                    const x = 280 + (415 - 280) * progress;
                    const y = 200 + (285 - 200) * progress;
                    return (
                      <circle
                        key={`pulm-vein-r-${offset}`}
                        cx={x}
                        cy={y}
                        r="5"
                        fill="#f43f5e"
                        filter="url(#glow-red)"
                      />
                    );
                  })}

                  {/* VE -> Lower Body (Aorta: Red) */}
                  {[5, 30, 55, 80].map((offset) => {
                    const progress = ((flowPhase + offset) % 100) / 100;
                    const x = 460 + (440 - 460) * progress;
                    const y = 365 + (540 - 365) * progress;
                    return (
                      <circle
                        key={`aorta-cell-${offset}`}
                        cx={x}
                        cy={y}
                        r="5.5"
                        fill="#f43f5e"
                        filter="url(#glow-red)"
                      />
                    );
                  })}

                  {/* Lower Body -> AD (VCI: Blue) */}
                  {[15, 40, 65, 90].map((offset) => {
                    const progress = ((flowPhase + offset) % 100) / 100;
                    const x = 370 + (345 - 370) * progress;
                    const y = 540 + (345 - 540) * progress;
                    return (
                      <circle
                        key={`vci-cell-${offset}`}
                        cx={x}
                        cy={y}
                        r="5.5"
                        fill="#38bdf8"
                        filter="url(#glow-blue)"
                      />
                    );
                  })}
                </>
              )}
            </svg>
          </div>
        </div>

        {/* Step Navigation Bar & Quick Summary Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-slate-100 text-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleSelectStage(Math.max(0, currentStageIndex - 1))}
              disabled={currentStageIndex === 0}
              className="px-3 py-2 rounded-xl border border-slate-200 text-slate-700 font-semibold flex items-center gap-1 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" /> Etapa Anterior
            </button>

            <button
              onClick={() => handleSelectStage(Math.min(circulationStages.length - 1, currentStageIndex + 1))}
              disabled={currentStageIndex === circulationStages.length - 1}
              className="px-3 py-2 rounded-xl border border-slate-200 text-slate-700 font-semibold flex items-center gap-1 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Próxima Etapa <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-2 text-slate-500">
            <span>Dica: Clique diretamente nas caixas de câmaras ou na barra de etapas para navegar.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
