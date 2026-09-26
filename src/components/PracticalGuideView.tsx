import React, { useState } from 'react';
import { practicalGuideTopics } from '../data/practicalGuideData';
import { examStationsUfpb, PracticalExamStation } from '../data/examStationsData';
import { getIllustrationForStation, AnatomicalImageRef } from '../data/anatomicalImagesData';
import { AnatomicalImageViewer } from './AnatomicalImageViewer';
import { AnatomicalSvgDiagram } from './AnatomicalSvgDiagram';
import {
  BookOpen,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  Eye,
  ShieldAlert,
  ArrowRight,
  Sparkles,
  Layers,
  Heart,
  GitBranch,
  Stethoscope,
  Pin,
  Search,
  Filter,
  Check,
  ChevronDown,
  ChevronUp,
  Image as ImageIcon,
  ExternalLink,
  Maximize2,
  X
} from 'lucide-react';

export const PracticalGuideView: React.FC = () => {
  // Navigation mode
  const [activeMode, setActiveMode] = useState<'estacoes' | 'semTocar' | 'comparativo'>('estacoes');

  // Topics for comparative mode
  const [selectedTopicId, setSelectedTopicId] = useState<string>(practicalGuideTopics[0].id);

  // Filter for exam stations
  const [selectedStationCategory, setSelectedStationCategory] = useState<string>('todas');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [expandedStation, setExpandedStation] = useState<number | null>(1);
  const [modalIllustration, setModalIllustration] = useState<AnatomicalImageRef | null>(null);

  const currentTopic = practicalGuideTopics.find((t) => t.id === selectedTopicId) || practicalGuideTopics[0];

  const filteredStations = examStationsUfpb.filter((st) => {
    const matchesCat = selectedStationCategory === 'todas' || st.regiao === selectedStationCategory;
    const matchesSearch =
      st.estrutura.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (st.nomenclaturaAlternativa && st.nomenclaturaAlternativa.toLowerCase().includes(searchTerm.toLowerCase())) ||
      st.ondeOAlfineteEspeta.toLowerCase().includes(searchTerm.toLowerCase()) ||
      st.comoReconhecerSemTocar.some((c) => c.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 sm:py-8 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200/80 text-rose-700 text-xs font-semibold">
          <Eye className="w-3.5 h-3.5" /> Metodologia Prova Prática Sem Toque · UFPB
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-display">
          Guia de Sobrevivência para a Prova Prática
        </h1>
        <p className="text-sm text-slate-500 max-w-2xl">
          Instruções de como reconhecer estruturas anatômicas cadavéricas <strong>sem tocar na peça</strong> (apenas olhando à distância de bancada), com gabarito comentado das 20 estações do simulado real da UFPB.
        </p>
      </div>

      {/* Primary Mode Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
        <button
          onClick={() => setActiveMode('estacoes')}
          className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
            activeMode === 'estacoes'
              ? 'bg-white text-rose-700 shadow-sm ring-1 ring-slate-200'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Pin className="w-4 h-4 text-rose-600" />
          <span>24 Estruturas-Chave da Prova Prática</span>
        </button>

        <button
          onClick={() => setActiveMode('semTocar')}
          className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
            activeMode === 'semTocar'
              ? 'bg-white text-rose-700 shadow-sm ring-1 ring-slate-200'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Eye className="w-4 h-4 text-rose-600" />
          <span>Critérios Visuais (Sem Tocar)</span>
        </button>

        <button
          onClick={() => setActiveMode('comparativo')}
          className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
            activeMode === 'comparativo'
              ? 'bg-white text-rose-700 shadow-sm ring-1 ring-slate-200'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Layers className="w-4 h-4 text-rose-600" />
          <span>Tabelas Comparativas</span>
        </button>
      </div>

      {/* MODE 1: 20 EXAM STATIONS */}
      {activeMode === 'estacoes' && (
        <div className="space-y-6">
          {/* Filter Bar */}
          <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Buscar estrutura da estação..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                />
              </div>

              {/* Category tags */}
              <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
                {[
                  { id: 'todas', label: `Todas as ${examStationsUfpb.length}` },
                  { id: 'Coração', label: 'Coração' },
                  { id: 'Grandes Vasos', label: 'Grandes Vasos' },
                  { id: 'Membro Superior', label: 'Membro Sup.' },
                  { id: 'Membro Inferior', label: 'Membro Inf.' }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedStationCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      selectedStationCategory === cat.id
                        ? 'bg-rose-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 pt-1 border-t border-slate-100">
              <span>Mostrando <strong>{filteredStations.length}</strong> de {examStationsUfpb.length} estruturas essenciais da bancada</span>
              <span className="text-[11px] text-rose-600 font-medium">Toque no cartão para expandir detalhes visuais</span>
            </div>
          </div>

          {/* Stations List */}
          <div className="space-y-3">
            {filteredStations.map((station) => {
              const isExpanded = expandedStation === station.numero;
              const illustration = getIllustrationForStation(station.numero);

              return (
                <div
                  key={station.numero}
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden shadow-xs ${
                    isExpanded ? 'border-rose-500 ring-2 ring-rose-500/10' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {/* Station Header Bar */}
                  <div
                    onClick={() => setExpandedStation(isExpanded ? null : station.numero)}
                    className="p-4 sm:p-5 flex items-center justify-between gap-3 cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-700 font-mono font-bold text-sm flex items-center justify-center shrink-0 border border-rose-100">
                        #{station.numero}
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-base sm:text-lg font-bold text-slate-900 truncate">
                            {station.estrutura}
                          </h3>
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                            {station.regiao}
                          </span>
                        </div>
                        {station.nomenclaturaAlternativa && (
                          <p className="text-xs text-slate-400 truncate">
                            Sinônimo/Detalhe: {station.nomenclaturaAlternativa}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {illustration && (
                        <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-medium border border-slate-200/80">
                          <ImageIcon className="w-3.5 h-3.5 text-rose-600" />
                          <span>Ilustração</span>
                        </div>
                      )}
                      <span className="hidden sm:inline-block text-xs font-semibold text-rose-600">
                        {isExpanded ? 'Ocultar detalhes' : 'Ver dicas de bancada'}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-slate-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400" />
                      )}
                    </div>
                  </div>

                  {/* Expanded Station Details */}
                  {isExpanded && (
                    <div className="border-t border-slate-100 p-5 sm:p-6 bg-slate-50/40 space-y-5 text-xs sm:text-sm">
                      {/* Anatomical Image / Dissection Reference (SVG + Atlas Fallback) */}
                      <AnatomicalImageViewer
                        structureId={String(station.numero)}
                        structureName={station.estrutura}
                        subtitulo={illustration?.subtitulo || `Estação #${station.numero} · ${station.ondeOAlfineteEspeta}`}
                        imageUrl={illustration?.imageUrl}
                        fonte={illustration?.autorOuFonte}
                        legendaPontos={illustration?.legendaPontos || station.comoReconhecerSemTocar.slice(0, 3)}
                        tipo={station.regiao.toLowerCase().includes('vaso') ? 'artéria' : 'misto'}
                        mode="card"
                        defaultView="svg"
                        onExpand={illustration ? () => setModalIllustration(illustration) : undefined}
                      />

                      {/* Where probe is located */}
                      <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 text-amber-950 flex items-start gap-3">
                        <Pin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-amber-900 font-bold mb-0.5">
                            Onde o alfinete / agulha é espetado na peça:
                          </strong>
                          <p className="leading-relaxed text-xs">{station.ondeOAlfineteEspeta}</p>
                        </div>
                      </div>

                      {/* Visual Clues without touching */}
                      <div className="space-y-2.5">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                          <Eye className="w-4 h-4 text-rose-600" />
                          Como reconhecer SEM TOCAR NA PEÇA (Só olhando a 50 cm):
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {station.comoReconhecerSemTocar.map((dica, dIdx) => (
                            <div
                              key={dIdx}
                              className="p-3 rounded-xl bg-white border border-slate-200/80 text-xs text-slate-700 flex items-start gap-2.5"
                            >
                              <span className="w-4 h-4 rounded-full bg-rose-100 text-rose-700 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                                {dIdx + 1}
                              </span>
                              <span className="leading-relaxed">{dica}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Sintopic Relations & Hemodynamics */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-1">
                          <span className="font-bold text-slate-800 block">Relações Sintópicas Imediatas:</span>
                          <p className="text-slate-600 leading-relaxed">{station.relacoesSintopicasVisuais}</p>
                        </div>

                        <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-1">
                          <span className="font-bold text-slate-800 block">Função Hemodinâmica Direta:</span>
                          <p className="text-slate-600 leading-relaxed">{station.funcaoHemodinamica}</p>
                        </div>
                      </div>

                      {/* Trap Warning */}
                      <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-950 flex items-start gap-2.5">
                        <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-rose-900 font-bold mb-0.5 text-xs">
                            Armadilha de Prova Prática:
                          </strong>
                          <p className="leading-relaxed text-xs">{station.pegadinhaDeProva}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* MODE 2: VISUAL CRITERIA (WITHOUT TOUCHING) */}
      {activeMode === 'semTocar' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 font-display">
                  Os 6 Pilares do Reconhecimento 100% Visual (Sem Tocar na Peça)
                </h2>
                <p className="text-xs text-slate-500">
                  Na prova prática com temporizador (1 minuto por estação), encostar a mão na peça pode render advertência ou perda de tempo. Domine os critérios puramente oculares:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {/* Pilar 1 */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <span className="w-6 h-6 rounded-lg bg-rose-600 text-white font-mono text-xs flex items-center justify-center">1</span>
                  <span>Formato da Luz (Lúmen Aberto vs Colabado)</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Artéria:</strong> Mantém o orifício circular perfeitamente aberto e nítido sob a lâmpada do laboratório devido à rigidez elástica de sua túnica média.<br />
                  <strong>Veia:</strong> Luz colabada, achatada como fita adesiva murcha ou enrugada, já que sua túnica média não resiste ao peso da parede sem pressão intravascular.
                </p>
              </div>

              {/* Pilar 2 */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <span className="w-6 h-6 rounded-lg bg-rose-600 text-white font-mono text-xs flex items-center justify-center">2</span>
                  <span>Coloração e Conteúdo em Peças Cadavéricas</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Artérias:</strong> Têm tonalidade bege-claro, palha ou esbranquiçada e lúmen vazio.<br />
                  <strong>Veias:</strong> Apresentam coloração arroxeada, azul-escura ou enegrecida devido aos coágulos residuais de sangue venoso fixados pelo formaldeído.<br />
                  <strong>Nervos:</strong> Esbranquiçados nacarados com aspecto filamentar estriado longitudinalmente (sem furo central!).
                </p>
              </div>

              {/* Pilar 3 */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <span className="w-6 h-6 rounded-lg bg-rose-600 text-white font-mono text-xs flex items-center justify-center">3</span>
                  <span>Espessura Miocárdica e Proporção 3:1</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Em cortes axiais do coração: o <strong>Ventrículo Esquerdo</strong> tem parede miocárdica grossa como um dedo (8 a 12 mm) e cavidade circular central.<br />
                  O <strong>Ventrículo Direito</strong> tem parede delgada (3 a 5 mm) e cavidade em crescente (meia-lua) que contorna o VE.
                </p>
              </div>

              {/* Pilar 4 */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <span className="w-6 h-6 rounded-lg bg-rose-600 text-white font-mono text-xs flex items-center justify-center">4</span>
                  <span>Estruturas Exclusivas de Uma Única Câmara</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  • Viu uma "ponte/alça carnosa suspensa" ligando o septo ao papilar anterior? <strong>Trabécula Septomarginal (Banda Moderadora)</strong> = VD.<br />
                  • Viu depressão circular com rebordo arqueado no septo? <strong>Fossa Oval e Limbo</strong> = AD.<br />
                  • Viu cristas paralelas como dentes de um pente? <strong>Músculos Pectinados e Crista Terminal</strong> = AD.
                </p>
              </div>

              {/* Pilar 5 */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <span className="w-6 h-6 rounded-lg bg-rose-600 text-white font-mono text-xs flex items-center justify-center">5</span>
                  <span>Diferenciação de Valvas (Cordas vs Bolsos)</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  • <strong>Tem cordões brancos (cordas tendíneas) esticados?</strong> Obrigatoriamente é Atrioventricular (Mitral no VE se tiver 2 cúspides/papilares; Tricúspide no VD se tiver 3).<br />
                  • <strong>NÃO tem cordas e parece ninho de andorinha?</strong> É Semilunar. Se tiver orifícios no fundo do ninho = Aorta (óstios coronários). Se for anterior e lisa = Tronco Pulmonar.
                </p>
              </div>

              {/* Pilar 6 */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <span className="w-6 h-6 rounded-lg bg-rose-600 text-white font-mono text-xs flex items-center justify-center">6</span>
                  <span>Relação com Acidentes Ósseos Superficiais</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  • Vaso superficial passando <strong>1 a 2 cm anterior ao maléolo medial</strong> do tornozelo = <strong>Veia Safena Magna</strong>.<br />
                  • Vaso passando <strong>posterior ao maléolo lateral</strong> = <strong>Veia Safena Parva</strong>.<br />
                  • Vaso no sulco medial do braço ladeado pelo bíceps = <strong>Artéria Braquial</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODE 3: COMPARATIVE TABLES */}
      {activeMode === 'comparativo' && (
        <div className="space-y-6">
          {/* Topic Switcher - Segmented buttons */}
          <div className="flex items-center gap-1 p-1 bg-slate-200/80 rounded-xl overflow-x-auto scrollbar-none text-xs font-semibold">
            {practicalGuideTopics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setSelectedTopicId(topic.id)}
                className={`px-3.5 py-2 rounded-lg transition-all whitespace-nowrap ${
                  selectedTopicId === topic.id
                    ? 'bg-white text-slate-900 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {topic.titulo}
              </button>
            ))}
          </div>

          {/* Banner with Title and Key Concept */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
                  {currentTopic.categoria}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display mt-0.5">
                  {currentTopic.titulo}
                </h2>
                <p className="text-xs text-slate-500 mt-1">{currentTopic.subtitulo}</p>
              </div>
            </div>

            {/* Key Concept Box */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-slate-900 block">Conceito-Chave de Bancada:</span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-0.5">
                  {currentTopic.conceitoChave}
                </p>
              </div>
            </div>

            {/* Step-by-Step Cadaver Inspection */}
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Eye className="w-4 h-4 text-slate-600" /> Roteiro de Inspeção e Palpação na Mesa:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentTopic.passoAPassoIdentificacao.map((passo, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-white rounded-xl border border-slate-200/80 text-xs text-slate-700 flex items-start gap-2.5 hover:border-slate-300 transition-colors"
                  >
                    <span className="w-5 h-5 rounded-md bg-rose-50 text-rose-600 font-mono font-bold text-[11px] flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{passo}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Differences Table */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="px-6 py-4 border-b border-slate-200 bg-slate-50/50 flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Layers className="w-4 h-4 text-slate-600" /> Tabela Comparativa de Estruturas Similares
              </h3>
              <span className="text-xs text-slate-400">Critérios Objetivos</span>
            </div>

            <div className="divide-y divide-slate-100">
              {currentTopic.diferenciaisBancada.map((item, idx) => (
                <div key={idx} className="p-5 sm:p-6 space-y-3 hover:bg-slate-50/30 transition-colors">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wide flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-600"></span>
                    Critério: {item.criterio}
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-lg bg-rose-50/50 border border-rose-100 text-slate-800">
                      <span className="font-bold text-rose-700 block mb-1">Opção A:</span>
                      <p className="leading-relaxed">{item.estruturaA}</p>
                    </div>

                    <div className="p-3 rounded-lg bg-blue-50/50 border border-blue-100 text-slate-800">
                      <span className="font-bold text-blue-700 block mb-1">Opção B:</span>
                      <p className="leading-relaxed">{item.estruturaB}</p>
                    </div>
                  </div>

                  <div className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-200/60">
                    <span className="font-bold text-slate-800">Como testar com a pinça: </span>
                    {item.comoAvaliarNoCadaver}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Common Traps / Pegadinhas */}
          <div className="bg-white rounded-2xl border border-rose-200 p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex items-center gap-2 text-rose-700">
              <ShieldAlert className="w-5 h-5" />
              <h3 className="text-base font-bold font-display">
                Pontos de Confusão & Pegadinhas Clássicas de Prova
              </h3>
            </div>

            <div className="space-y-3">
              {currentTopic.pontosDeConfusao.map((trap, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-rose-50/40 border border-rose-100 text-xs space-y-1.5"
                >
                  <div className="flex items-start gap-2 text-rose-900 font-bold">
                    <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span>Armadilha #{idx + 1}: {trap.armadilha}</span>
                  </div>
                  <p className="text-slate-700 pl-6 leading-relaxed">
                    <strong className="text-slate-900 font-semibold">Como não errar: </strong>
                    {trap.comoDesatar}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Clinical Application in Physiotherapy */}
          <div className="bg-emerald-50/60 rounded-2xl border border-emerald-200/80 p-6 space-y-2">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest flex items-center gap-1.5">
              <Stethoscope className="w-4 h-4 text-emerald-600" />
              Aplicação Prática em Fisioterapia Cardiovascular & Respiratória:
            </span>
            <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
              {currentTopic.relevanciaFisioterapia}
            </p>
          </div>
        </div>
      )}

      {/* Modal Lightbox for Full-Res Image Viewing */}
      {modalIllustration && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
          onClick={() => setModalIllustration(null)}
        >
          <div
            className="bg-slate-900 border border-slate-700 rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 border-b border-slate-800 flex items-center justify-between text-white">
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-rose-400" />
                  {modalIllustration.titulo}
                </h4>
                <p className="text-xs text-slate-400">{modalIllustration.subtitulo}</p>
              </div>
              <button
                onClick={() => setModalIllustration(null)}
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Area */}
            <div className="relative flex-1 min-h-[300px] max-h-[55vh] bg-black flex items-center justify-center p-2 sm:p-4 overflow-hidden">
              <img
                src={modalIllustration.imageUrl}
                alt={modalIllustration.titulo}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                  const svgElem = document.getElementById('modal-svg-fallback');
                  if (svgElem) svgElem.style.display = 'flex';
                }}
                className="max-h-full max-w-full object-contain rounded-lg"
              />
              <div id="modal-svg-fallback" className="w-full max-w-xl h-full hidden items-center justify-center">
                <AnatomicalSvgDiagram
                  structureId={modalIllustration.id}
                  structureName={modalIllustration.titulo}
                  className="w-full h-full"
                  showPin={true}
                />
              </div>
            </div>

            {/* Modal Footer / Details */}
            <div className="p-4 bg-slate-900 border-t border-slate-800 space-y-3">
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-400 block">
                  Pontos e Acidentes Visuais na Peça:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {modalIllustration.legendaPontos.map((ponto, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 bg-slate-800/60 p-2 rounded-lg border border-slate-700/50">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                      <span>{ponto}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs">
                <span className="text-slate-400 text-[11px]">
                  Fonte / Créditos: {modalIllustration.autorOuFonte}
                </span>
                <a
                  href={`https://www.google.com/search?tbm=isch&q=${encodeURIComponent(
                    modalIllustration.titulo + ' anatomia'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Mais Fotos no Google</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
