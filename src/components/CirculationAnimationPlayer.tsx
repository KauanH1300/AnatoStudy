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
  Heart,
  Eye,
  Filter
} from 'lucide-react';
import { playHeartSound } from '../utils/audioSimulator';

export interface CirculationStage {
  id: number;
  circuito: 'Pequena (Pulmonar)' | 'Grande (Sistêmica)';
  titulo: string;
  subtitulo: string;
  origem: string;
  destino: string;
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
    titulo: '1. Ventrículo Direito ➔ Valva do Tronco Pulmonar',
    subtitulo: 'Início da Pequena Circulação',
    origem: 'Ventrículo Direito (VD)',
    destino: 'Raiz do Tronco Pulmonar',
    sangue: 'venoso',
    gasPreponderante: 'Rico em CO₂ · Pobre em O₂',
    pressaoEstimada: '~25 mmHg (sístole)',
    oQueOcorre: 'O Ventrículo Direito se contrai vigorosamente na sístole. A pressão intraventricular sobe e abre a valva do tronco pulmonar, ejetando sangue venoso desoxigenado em direção aos pulmões.',
    relevanciaFisio: 'Pressões ventriculares direitas excessivas (como no DPOC ou tromboembolismo) causam sobrecarga pressórica e Cor Pulmonale com fadiga precoce.',
    destaqueSvg: 'vd'
  },
  {
    id: 2,
    circuito: 'Pequena (Pulmonar)',
    titulo: '2. Tronco Pulmonar ➔ Artérias Pulmonares D e E ➔ Pulmões',
    subtitulo: 'Condução arterial pulmonar desoxigenada',
    origem: 'Tronco Pulmonar',
    destino: 'Hilos Pulmonares Direito e Esquerdo',
    sangue: 'venoso',
    gasPreponderante: 'Rico em CO₂ · Pobre em O₂',
    pressaoEstimada: '~25/10 mmHg',
    oQueOcorre: 'O sangue venoso sobe pelo tronco pulmonar, cruza anterior à aorta e bifurca-se sob o arco da aorta nas artérias pulmonares direita e esquerda, adentrando o parênquima pulmonar.',
    relevanciaFisio: 'PEGADINHA DE PROVA NA UFPB: apesar de se chamarem ARTÉRIAS (saem do coração), transportam sangue VENOSO (desoxigenado)!',
    destaqueSvg: 'tronco-pulmonar'
  },
  {
    id: 3,
    circuito: 'Pequena (Pulmonar)',
    titulo: '3. Rede Capilar Alveolar (HEMATOSE PULMONAR)',
    subtitulo: 'Transformação: Sangue torna-se 100% ARTERIAL',
    origem: 'Arteríolas Alveolares',
    destino: 'Vênulas Alveolares Pulmonares',
    sangue: 'transicao-oxigenacao',
    gasPreponderante: 'CO₂ eliminado no ar expirado ⬆ · O₂ absorvido pela hemoglobina ⬇',
    pressaoEstimada: '~8-10 mmHg (baixa pressão para não gerar edema)',
    oQueOcorre: 'MOMENTO DECISIVO: Através da membrana alvéolo-capilar, o CO₂ difunde-se para a luz alveolar para expiração, enquanto o O₂ inspirado difunde-se para as hemácias. O SANGUE MUDA DE AZUL PARA VERMELHO!',
    relevanciaFisio: 'Técnicas de Fisioterapia Respiratória (ventilação não invasiva, exercícios de reexpansão e desobstrução) otimizam a relação ventilação/perfusão (V/Q).',
    destaqueSvg: 'pulmoes'
  },
  {
    id: 4,
    circuito: 'Pequena (Pulmonar)',
    titulo: '4. 4 Veias Pulmonares ➔ Átrio Esquerdo (Fim da Pequena)',
    subtitulo: 'Retorno venoso com sangue arterial ao coração',
    origem: 'Pulmões (2 Veias D + 2 Veias E)',
    destino: 'Teto do Átrio Esquerdo (AE)',
    sangue: 'arterial',
    gasPreponderante: 'Rico em O₂ · Pobre em CO₂',
    pressaoEstimada: '~5-10 mmHg',
    oQueOcorre: 'As 4 veias pulmonares deságuam no Átrio Esquerdo sem válvulas. A Pequena Circulação encerra-se aqui! Na diástole, o sangue passa pela valva mitral e enche o Ventrículo Esquerdo.',
    relevanciaFisio: 'Estenose ou insuficiência mitral provoca congestão retrógrada nas veias pulmonares, gerando dispneia paroxística noturna e edema pulmonar agudo.',
    destaqueSvg: 'veias-pulmonares'
  },
  {
    id: 5,
    circuito: 'Grande (Sistêmica)',
    titulo: '5. Ventrículo Esquerdo ➔ Valva da Aorta',
    subtitulo: 'Início da Grande Circulação (Bomba de Alta Pressão)',
    origem: 'Ventrículo Esquerdo (VE)',
    destino: 'Raiz da Artéria Aorta',
    sangue: 'arterial',
    gasPreponderante: 'Rico em O₂ · Pobre em CO₂',
    pressaoEstimada: '~120 mmHg (sístole sistêmica)',
    oQueOcorre: 'O miocárdio hipertrofiado do Ventrículo Esquerdo (3 vezes mais espesso que o VD) contrai-se com enorme força, abrindo a valva aórtica para ejetar todo o débito cardíaco.',
    relevanciaFisio: 'O choque da ponta (Ictus Cordis), palpável no 5º espaço intercostal esquerdo na linha hemiclavicular, espelha a localização e força contrátil do VE.',
    destaqueSvg: 've'
  },
  {
    id: 6,
    circuito: 'Grande (Sistêmica)',
    titulo: '6. Artéria Aorta ➔ Artérias Periféricas & Arteríolas',
    subtitulo: 'Distribuição arterial e resistência vascular sistêmica',
    origem: 'Arco Aórtico e Aorta Descendente',
    destino: 'Cabeça, MMSS, Vísceras e MMII',
    sangue: 'arterial',
    gasPreponderante: 'Rico em O₂ · Pobre em CO₂',
    pressaoEstimada: '~120/80 mmHg',
    oQueOcorre: 'O sangue arterial percorre a aorta ascendente (nutrindo coronárias), o arco aórtico (nutrindo cabeça e braços) e a aorta descendente torácica e abdominal, atingindo as arteríolas de resistência.',
    relevanciaFisio: 'O efeito elástico Windkessel da aorta absorve a onda pulsátil. A resistência das arteríolas determina diretamente a Pressão Arterial Sistêmica.',
    destaqueSvg: 'aorta'
  },
  {
    id: 7,
    circuito: 'Grande (Sistêmica)',
    titulo: '7. Capilares Sistêmicos (PERFUSÃO TECIDUAL NOS ÓRGÃOS)',
    subtitulo: 'Entrega de O₂ e Nutrientes · Coleta de CO₂ Metabólico',
    origem: 'Arteríolas Sistêmicas',
    destino: 'Vênulas Sistêmicas',
    sangue: 'transicao-desoxigenacao',
    gasPreponderante: 'O₂ entra nas mitocôndrias celulares ⬇ · CO₂ sai para o sangue ⬆',
    pressaoEstimada: '~30 mmHg (arteriolar) ➔ ~15 mmHg (venular)',
    oQueOcorre: 'MOMENTO DECISIVO: Nos tecidos corporais, o oxigênio é entregue às células musculares e tecidos para respiração aeróbica. O CO₂ é recolhido pelo sangue. O SANGUE TORNA-SE VENOSO (AZUL)!',
    relevanciaFisio: 'Na Doença Arterial Obstrutiva Periférica (DAOP), a queda de perfusão em MMII causa claudicação intermitente que interrompe a marcha.',
    destaqueSvg: 'tecidos'
  },
  {
    id: 8,
    circuito: 'Grande (Sistêmica)',
    titulo: '8. Veias Cavas (VCS e VCI) ➔ Átrio Direito (Fim da Grande)',
    subtitulo: 'Retorno venoso total e reinício do ciclo cardíaco',
    origem: 'Veia Cava Superior e Inferior',
    destino: 'Átrio Direito (AD)',
    sangue: 'venoso',
    gasPreponderante: 'Rico em CO₂ · Pobre em O₂',
    pressaoEstimada: '~2-6 mmHg (Pressão Venosa Central)',
    oQueOcorre: 'A VCS (drenando cabeça e braços) e a VCI (drenando abdome e pernas) deságuam no Átrio Direito. Encerra-se a Grande Circulação! O sangue passa para o VD pela tricúspide e o ciclo recomeça.',
    relevanciaFisio: 'A bomba muscular da panturrilha (sóleo e gastrocnêmios) é o "coração periférico", impulsionando o sangue pela VCI contra a gravidade na deambulação.',
    destaqueSvg: 'ad'
  }
];

export const CirculationAnimationPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentStageIndex, setCurrentStageIndex] = useState<number>(0);
  const [speed, setSpeed] = useState<number>(1);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const [modeFilter, setModeFilter] = useState<'tudo' | 'pequena' | 'grande'>('tudo');
  const [focusOnlyCurrent, setFocusOnlyCurrent] = useState<boolean>(true); // Foco estrito solicitado pelo usuário
  const [flowPhase, setFlowPhase] = useState<number>(0); // 0 to 100 progress inside current segment

  const currentStage = circulationStages[currentStageIndex];

  // RequestAnimationFrame loop for fluid visual pulse & flow
  const reqRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(performance.now());
  const stageTimerRef = useRef<number>(0);

  useEffect(() => {
    // Duration of each step: ~3500ms at 1x
    const stageDuration = 3600 / speed;

    const animate = (time: number) => {
      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      if (isPlaying) {
        // Internal progress inside this exact step (0 to 100%)
        stageTimerRef.current += delta;
        const currentProgress = (stageTimerRef.current / stageDuration) * 100;
        setFlowPhase(currentProgress);

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
    setFlowPhase(0);
    if (soundEnabled && (idx === 0 || idx === 4)) {
      playHeartSound('both', speed);
    }
  };

  const handleModeChange = (mode: 'tudo' | 'pequena' | 'grande') => {
    setModeFilter(mode);
    if (mode === 'pequena') setCurrentStageIndex(0);
    if (mode === 'grande') setCurrentStageIndex(4);
    stageTimerRef.current = 0;
    setFlowPhase(0);
  };

  // Helper function to calculate dimmed vs focused opacity
  const getElementStyle = (targetComponent: string) => {
    const isTarget = currentStage.destaqueSvg === targetComponent;

    if (!focusOnlyCurrent) {
      // Classic mode
      return {
        opacity: isTarget ? 1 : 0.65,
        filter: isTarget ? 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.4))' : 'none'
      };
    }

    // STRICT FOCUS MODE: Highlight only the active step, dim everything else to background
    return {
      opacity: isTarget ? 1 : 0.12,
      transition: 'opacity 0.4s ease-in-out, filter 0.4s ease-in-out',
      filter: isTarget ? 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.5))' : 'none'
    };
  };

  // Calculate coordinates for flowing blood drop according to current step
  const renderCurrentStepFlow = () => {
    const norm = Math.min(1, Math.max(0, flowPhase / 100)); // 0.0 to 1.0

    // Coordinates mapping for each stage:
    switch (currentStage.id) {
      case 1: {
        // Step 1: VD (347, 430) -> Pulmonary valve / root of trunk (347, 345)
        const curY = 430 - norm * 85;
        return (
          <g>
            <circle cx="347" cy={curY} r="9" fill="#38bdf8" filter="url(#glow-blue)">
              <animate attributeName="r" values="8;11;8" dur="0.8s" repeatCount="indefinite" />
            </circle>
            <circle cx="347" cy={curY + 18} r="6" fill="#0284c7" opacity="0.7" />
            <circle cx="347" cy={curY + 34} r="4" fill="#0369a1" opacity="0.4" />
          </g>
        );
      }
      case 2: {
        // Step 2: Trunk (347, 350) -> Lungs (240, 190 on left, 560, 190 on right)
        const xLeft = 347 + (240 - 347) * norm;
        const yLeft = 350 + (190 - 350) * norm;
        const xRight = 355 + (560 - 355) * norm;
        const yRight = 350 + (190 - 350) * norm;
        return (
          <g>
            {/* Wave towards Right lung (viewer left) */}
            <circle cx={xLeft} cy={yLeft} r="8.5" fill="#38bdf8" filter="url(#glow-blue)" />
            <circle cx={xLeft + 12 * (1 - norm)} cy={yLeft + 18 * (1 - norm)} r="6" fill="#0284c7" opacity="0.6" />

            {/* Wave towards Left lung (viewer right) */}
            <circle cx={xRight} cy={yRight} r="8.5" fill="#38bdf8" filter="url(#glow-blue)" />
            <circle cx={xRight - 12 * (1 - norm)} cy={yRight + 18 * (1 - norm)} r="6" fill="#0284c7" opacity="0.6" />
          </g>
        );
      }
      case 3: {
        // Step 3: Hematosis in lungs. Blood sweeps through alveoli and shifts color from blue to purple to red!
        const xSweepLeft = 190 + norm * 100;
        const xSweepRight = 510 + norm * 100;
        const color = norm < 0.4 ? '#38bdf8' : norm < 0.7 ? '#c084fc' : '#f43f5e';
        return (
          <g>
            {/* Right lung sweeping wave */}
            <circle cx={xSweepLeft} cy="170" r="10" fill={color} filter="url(#glow-magenta)">
              <animate attributeName="r" values="9;12;9" dur="0.6s" repeatCount="indefinite" />
            </circle>
            <circle cx={xSweepLeft - 20} cy="155" r="7" fill={color} opacity="0.8" />
            <circle cx={xSweepLeft - 15} cy="185" r="7" fill={color} opacity="0.8" />

            {/* Left lung sweeping wave */}
            <circle cx={xSweepRight} cy="170" r="10" fill={color} filter="url(#glow-magenta)">
              <animate attributeName="r" values="9;12;9" dur="0.6s" repeatCount="indefinite" />
            </circle>
            <circle cx={xSweepRight - 20} cy="155" r="7" fill={color} opacity="0.8" />
            <circle cx={xSweepRight - 15} cy="185" r="7" fill={color} opacity="0.8" />
          </g>
        );
      }
      case 4: {
        // Step 4: Pulmonary veins (280, 200) -> AE (452, 310)
        const xLeft = 280 + (430 - 280) * norm;
        const yLeft = 200 + (300 - 200) * norm;
        const xRight = 520 + (465 - 520) * norm;
        const yRight = 200 + (300 - 200) * norm;
        return (
          <g>
            <circle cx={xLeft} cy={yLeft} r="8.5" fill="#f43f5e" filter="url(#glow-red)" />
            <circle cx={xLeft - 15 * (1 - norm)} cy={yLeft - 10 * (1 - norm)} r="6" fill="#e11d48" opacity="0.7" />

            <circle cx={xRight} cy={yRight} r="8.5" fill="#f43f5e" filter="url(#glow-red)" />
            <circle cx={xRight + 15 * (1 - norm)} cy={yRight - 10 * (1 - norm)} r="6" fill="#e11d48" opacity="0.7" />
          </g>
        );
      }
      case 5: {
        // Step 5: VE (452, 430) -> Aortic Valve (452, 350)
        const curY = 430 - norm * 80;
        return (
          <g>
            <circle cx="452" cy={curY} r="9.5" fill="#f43f5e" filter="url(#glow-red)">
              <animate attributeName="r" values="9;12;9" dur="0.7s" repeatCount="indefinite" />
            </circle>
            <circle cx="452" cy={curY + 18} r="6.5" fill="#e11d48" opacity="0.7" />
            <circle cx="452" cy={curY + 34} r="4" fill="#be123c" opacity="0.4" />
          </g>
        );
      }
      case 6: {
        // Step 6: Aorta arch & descent -> Upper body (400, 70) and Lower body (440, 540)
        const yHead = 280 - norm * 210;
        const yLower = 365 + norm * 175;
        const xLower = 460 + (440 - 460) * norm;
        return (
          <g>
            {/* Wave traveling UP aorta to head */}
            <circle cx="405" cy={yHead} r="8" fill="#f43f5e" filter="url(#glow-red)" />
            <circle cx="415" cy={yHead + 16} r="5.5" fill="#e11d48" opacity="0.7" />

            {/* Wave traveling DOWN descending aorta to organs/legs */}
            <circle cx={xLower} cy={yLower} r="9" fill="#f43f5e" filter="url(#glow-red)" />
            <circle cx={xLower} cy={yLower - 18} r="6" fill="#e11d48" opacity="0.7" />
          </g>
        );
      }
      case 7: {
        // Step 7: Systemic capillary bed. Consuming O2 -> Turning into venous blood (purple -> blue)
        const xSweepLower = 290 + norm * 220;
        const color = norm < 0.4 ? '#f43f5e' : norm < 0.7 ? '#c084fc' : '#38bdf8';
        return (
          <g>
            {/* Lower body capillary bed */}
            <circle cx={xSweepLower} cy="575" r="10" fill={color} filter="url(#glow-magenta)">
              <animate attributeName="r" values="9;12;9" dur="0.6s" repeatCount="indefinite" />
            </circle>
            <circle cx={xSweepLower - 20} cy="565" r="7" fill={color} opacity="0.8" />
            <circle cx={xSweepLower - 15} cy="585" r="7" fill={color} opacity="0.8" />

            {/* Upper body capillary bed */}
            <circle cx={360 + norm * 80} cy="60" r="7" fill={color} filter="url(#glow-magenta)" />
          </g>
        );
      }
      case 8: {
        // Step 8: Venae Cavae (VCS & VCI) returning blood into AD (347, 310)
        const yVcs = 70 + norm * 210;
        const yVci = 540 - norm * 195;
        const xVci = 370 + (345 - 370) * norm;
        return (
          <g>
            {/* VCS descending from head to AD */}
            <circle cx="365" cy={yVcs} r="8.5" fill="#38bdf8" filter="url(#glow-blue)" />
            <circle cx="368" cy={yVcs - 16} r="6" fill="#0284c7" opacity="0.7" />

            {/* VCI ascending from lower body to AD */}
            <circle cx={xVci} cy={yVci} r="9" fill="#38bdf8" filter="url(#glow-blue)" />
            <circle cx={xVci} cy={yVci + 18} r="6" fill="#0284c7" opacity="0.7" />
          </g>
        );
      }
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden space-y-6">
      {/* Top Controller Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 text-white p-5 sm:p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping"></span>
              Modo Focado: Apenas o Trajeto do Momento Ativo
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-display tracking-tight text-white flex items-center gap-2">
              <Activity className="w-6 h-6 text-rose-500" />
              Animação Passo a Passo da Circulação
            </h2>
            <p className="text-xs text-slate-300 max-w-xl">
              Veja o sangue percorrendo <strong>exatamente a etapa daquele momento</strong> (da câmara de origem ao ponto de destino), isolando o trajeto para entender com máxima clareza cada segmento do fluxo.
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
              <span>{isPlaying ? 'Pausar' : 'Iniciar'}</span>
            </button>

            {/* Restart button */}
            <button
              onClick={handleReset}
              title="Reiniciar Circulação do Início"
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Focus toggle button (Spotlight mode) */}
            <button
              onClick={() => setFocusOnlyCurrent(!focusOnlyCurrent)}
              title="Alternar entre Foco Estrito e Visão Geral"
              className={`px-3 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition-all ${
                focusOnlyCurrent
                  ? 'bg-rose-500/20 border-rose-500/60 text-rose-300 ring-2 ring-rose-500/20'
                  : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-750'
              }`}
            >
              <Eye className="w-4 h-4 text-rose-400" />
              <span>{focusOnlyCurrent ? 'Foco Só no Momento (Ativo)' : 'Mostrar Tudo'}</span>
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
              <span className="hidden sm:inline">{soundEnabled ? 'Som Ligado' : 'Mudo'}</span>
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
        <div className="flex items-center gap-2 mt-4 pt-3 border-t border-slate-800/80 text-xs overflow-x-auto scrollbar-none">
          <span className="text-slate-400 font-semibold mr-1 shrink-0">Filtrar Circuito:</span>
          <button
            onClick={() => handleModeChange('tudo')}
            className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-all ${
              modeFilter === 'tudo'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-750'
            }`}
          >
            Ciclo Corporal Completo (1 a 8)
          </button>

          <button
            onClick={() => handleModeChange('pequena')}
            className={`px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 whitespace-nowrap transition-all ${
              modeFilter === 'pequena'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-750'
            }`}
          >
            <Wind className="w-3.5 h-3.5 text-blue-300" />
            Pequena (Passos 1 a 4)
          </button>

          <button
            onClick={() => handleModeChange('grande')}
            className={`px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 whitespace-nowrap transition-all ${
              modeFilter === 'grande'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-750'
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-rose-300" />
            Grande (Passos 5 a 8)
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

            {/* Origin -> Destination Tag */}
            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-lg border border-slate-200 text-xs font-bold text-slate-800 shadow-2xs">
                <span className="text-slate-500 font-normal">De:</span>
                <span className="text-rose-700">{currentStage.origem}</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-slate-500 font-normal">Para:</span>
                <span className="text-blue-700">{currentStage.destino}</span>
              </div>

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
                  ? '🔵 Sangue Venoso'
                  : currentStage.sangue === 'arterial'
                  ? '🔴 Sangue Arterial'
                  : '🟣 Troca / Hematose'}
              </span>

              <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-mono font-semibold text-slate-700 shadow-2xs">
                {currentStage.pressaoEstimada}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 text-xs sm:text-sm">
            <div className="space-y-1">
              <strong className="text-slate-800 font-bold block">Dinâmica de Fluxo Deste Momento:</strong>
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
                    ? '1. VD'
                    : sIdx === 1
                    ? '2. Tr. Pulm.'
                    : sIdx === 2
                    ? '3. Hematose'
                    : sIdx === 3
                    ? '4. V. Pulm/AE'
                    : sIdx === 4
                    ? '5. VE'
                    : sIdx === 5
                    ? '6. Aorta'
                    : sIdx === 6
                    ? '7. Tecidos'
                    : '8. Cavas/AD'}
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
                Circuito Venoso
              </span>
              <span className="flex items-center gap-1.5 text-rose-400 font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                Circuito Arterial
              </span>
            </div>

            <div className="flex items-center gap-2 text-slate-400 text-[11px]">
              <span className="text-amber-400 font-mono font-semibold">
                Etapa {currentStage.id}/8: {currentStage.origem} ➔ {currentStage.destino}
              </span>
              <span>·</span>
              <span className="text-emerald-400 font-mono font-semibold">
                {isPlaying ? '● Fluindo' : '⏸ Pausado'}
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
                <filter id="glow-blue" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <filter id="glow-red" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <filter id="glow-magenta" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
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
                opacity="0.5"
              />

              {/* ======================================================== */}
              {/* ZONE 1: LUNGS & ALVEOLAR HEMATOSIS (TOP: Y = 120 to 220) */}
              {/* ======================================================== */}
              <g style={getElementStyle('pulmoes')}>
                {/* Left Lung Box (anatomical right of body = viewer left) */}
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

                {/* Right Lung Box (anatomical left of body = viewer right) */}
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

                {/* Gas bubbles */}
                <circle cx="200" cy="100" r="13" fill="#0284c7" />
                <text x="200" y="104" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">O₂</text>
                <circle cx="280" cy="100" r="13" fill="#475569" />
                <text x="280" y="104" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">CO₂</text>

                <circle cx="520" cy="100" r="13" fill="#475569" />
                <text x="520" y="104" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">CO₂</text>
                <circle cx="600" cy="100" r="13" fill="#0284c7" />
                <text x="600" y="104" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">O₂</text>
              </g>

              {/* ======================================================== */}
              {/* ZONE 2: THE HEART & 4 CHAMBERS (CENTER: X=400, Y=330)    */}
              {/* ======================================================== */}
              <g>
                {/* Cardiac outline base */}
                <path
                  d="M 400 270 C 310 240 260 300 280 390 C 300 460 380 500 400 510 C 420 500 500 460 520 390 C 540 300 490 240 400 270 Z"
                  fill="#111827"
                  stroke="#374151"
                  strokeWidth="3"
                  opacity={focusOnlyCurrent ? 0.35 : 1}
                />
                <line x1="400" y1="270" x2="400" y2="505" stroke="#4b5563" strokeWidth="6" strokeLinecap="round" opacity={focusOnlyCurrent ? 0.35 : 1} />
                <line x1="290" y1="350" x2="510" y2="350" stroke="#4b5563" strokeWidth="5" strokeLinecap="round" opacity={focusOnlyCurrent ? 0.35 : 1} />

                {/* 1. RIGHT ATRIUM (AD) */}
                <g style={getElementStyle('ad')}>
                  <rect
                    x="300"
                    y="275"
                    width="95"
                    height="70"
                    rx="14"
                    className={`transition-all duration-300 cursor-pointer ${
                      currentStage.destaqueSvg === 'ad'
                        ? 'fill-blue-600/70 stroke-blue-400 stroke-2 filter drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]'
                        : 'fill-blue-950/70 stroke-blue-900'
                    }`}
                    onClick={() => handleSelectStage(7)}
                  />
                  <text x="347" y="305" fill="#93c5fd" fontSize="13" fontWeight="bold" textAnchor="middle">
                    Átrio Direito
                  </text>
                  <text x="347" y="322" fill="#60a5fa" fontSize="10" textAnchor="middle">
                    (AD) · Venoso
                  </text>
                  <text x="347" y="338" fill="#bfdbfe" fontSize="9" textAnchor="middle">
                    ~2-6 mmHg
                  </text>
                </g>

                {/* 2. RIGHT VENTRICLE (VD) */}
                <g style={getElementStyle('vd')}>
                  <rect
                    x="300"
                    y="355"
                    width="95"
                    height="110"
                    rx="16"
                    className={`transition-all duration-300 cursor-pointer ${
                      currentStage.destaqueSvg === 'vd'
                        ? 'fill-blue-600/70 stroke-blue-400 stroke-2 filter drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]'
                        : 'fill-blue-950/70 stroke-blue-900'
                    }`}
                    onClick={() => handleSelectStage(0)}
                  />
                  <text x="347" y="395" fill="#93c5fd" fontSize="13" fontWeight="bold" textAnchor="middle">
                    Ventrículo D.
                  </text>
                  <text x="347" y="415" fill="#60a5fa" fontSize="10" textAnchor="middle">
                    (VD) · Miocárdio 3-5mm
                  </text>
                  <text x="347" y="435" fill="#bfdbfe" fontSize="9" textAnchor="middle">
                    ~25/5 mmHg
                  </text>
                  <text x="347" y="455" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">
                    [Início Pequena]
                  </text>
                </g>

                {/* 3. LEFT ATRIUM (AE) */}
                <g style={getElementStyle('ae')}>
                  <rect
                    x="405"
                    y="275"
                    width="95"
                    height="70"
                    rx="14"
                    className={`transition-all duration-300 cursor-pointer ${
                      currentStage.destaqueSvg === 'ae' || currentStage.destaqueSvg === 'veias-pulmonares'
                        ? 'fill-rose-600/70 stroke-rose-400 stroke-2 filter drop-shadow-[0_0_12px_rgba(244,63,94,0.8)]'
                        : 'fill-rose-950/70 stroke-rose-900'
                    }`}
                    onClick={() => handleSelectStage(3)}
                  />
                  <text x="452" y="305" fill="#fecdd3" fontSize="13" fontWeight="bold" textAnchor="middle">
                    Átrio Esquerdo
                  </text>
                  <text x="452" y="322" fill="#fb7185" fontSize="10" textAnchor="middle">
                    (AE) · Arterial
                  </text>
                  <text x="452" y="338" fill="#ffe4e6" fontSize="9" textAnchor="middle">
                    ~5-10 mmHg
                  </text>
                </g>

                {/* 4. LEFT VENTRICLE (VE) */}
                <g style={getElementStyle('ve')}>
                  <rect
                    x="405"
                    y="355"
                    width="95"
                    height="110"
                    rx="16"
                    className={`transition-all duration-300 cursor-pointer ${
                      currentStage.destaqueSvg === 've'
                        ? 'fill-rose-600/70 stroke-rose-400 stroke-2 filter drop-shadow-[0_0_12px_rgba(244,63,94,0.8)]'
                        : 'fill-rose-950/70 stroke-rose-900'
                    }`}
                    onClick={() => handleSelectStage(4)}
                  />
                  <text x="452" y="395" fill="#fecdd3" fontSize="13" fontWeight="bold" textAnchor="middle">
                    Ventrículo E.
                  </text>
                  <text x="452" y="415" fill="#fb7185" fontSize="10" textAnchor="middle">
                    (VE) · Miocárdio 8-12mm
                  </text>
                  <text x="452" y="435" fill="#ffe4e6" fontSize="9" textAnchor="middle">
                    ~120/10 mmHg
                  </text>
                  <text x="452" y="455" fill="#f43f5e" fontSize="9" fontWeight="bold" textAnchor="middle">
                    [Início Grande]
                  </text>
                </g>

                {/* Valves */}
                <circle cx="347" cy="350" r="9" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" opacity={focusOnlyCurrent ? 0.35 : 1} />
                <circle cx="452" cy="350" r="9" fill="#1e293b" stroke="#ef4444" strokeWidth="2" opacity={focusOnlyCurrent ? 0.35 : 1} />
              </g>

              {/* ======================================================== */}
              {/* ZONE 3: MAJOR VESSELS & CONNECTING PATHWAYS               */}
              {/* ======================================================== */}

              {/* PATH A: PULMONARY TRUNK & ARTERIES */}
              <g style={getElementStyle('tronco-pulmonar')}>
                <path
                  d="M 347 355 C 347 250 310 210 240 190"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                <path
                  d="M 355 355 C 370 230 460 210 560 190"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                <text x="385" y="240" fill="#93c5fd" fontSize="10" fontWeight="bold">
                  Tronco Pulmonar ➔ Artérias Pulmonares
                </text>
              </g>

              {/* PATH B: PULMONARY VEINS */}
              <g style={getElementStyle('veias-pulmonares')}>
                <path
                  d="M 280 200 C 330 220 380 260 415 285"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
                <path
                  d="M 520 200 C 480 220 460 250 445 285"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
                <text x="470" y="245" fill="#fca5a5" fontSize="10" fontWeight="bold">
                  4 Veias Pulmonares (Sangue Arterial)
                </text>
              </g>

              {/* PATH C: AORTA & SYSTEMIC TREE */}
              <g style={getElementStyle('aorta')}>
                <path
                  d="M 440 355 C 440 230 410 110 400 70"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                <path
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

              {/* PATH D: VENAE CAVAE */}
              <g style={getElementStyle('veias-cavas')}>
                <path
                  d="M 380 70 C 370 120 350 210 345 275"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                <text x="310" y="115" fill="#93c5fd" fontSize="10" fontWeight="bold">
                  Veia Cava Superior
                </text>

                <path
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
              {/* ZONE 4: HEAD & UPPER BODY CAPILLARY BED (Y = 40 to 80)   */}
              {/* ======================================================== */}
              <g style={getElementStyle('tecidos')}>
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
              {/* ZONE 5: LOWER BODY & LIMBS (BOTTOM BED: Y = 535 to 620)  */}
              {/* ======================================================== */}
              <g style={getElementStyle('tecidos')}>
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
                  Bomba da Panturrilha + Válvulas Venosas ➔ Retorno à VCI
                </text>
              </g>

              {/* ======================================================== */}
              {/* ZONE 6: ANIMATED FLOW ONLY FOR THIS EXACT STEP!          */}
              {/* ======================================================== */}
              {isPlaying && renderCurrentStepFlow()}
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
            <Info className="w-4 h-4 text-slate-400" />
            <span>O sangue animado percorre apenas o trecho ativo (Origem ➔ Destino).</span>
          </div>
        </div>
      </div>
    </div>
  );
};
