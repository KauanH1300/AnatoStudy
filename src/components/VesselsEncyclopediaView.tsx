import React, { useState } from 'react';
import { bloodVesselsData, BloodVessel } from '../data/bloodVesselsData';
import { anatomicalIllustrations, AnatomicalImageRef } from '../data/anatomicalImagesData';
import { AnatomicalImageViewer } from './AnatomicalImageViewer';
import {
  GitBranch,
  Search,
  Filter,
  ArrowRight,
  Sparkles,
  Stethoscope,
  Eye,
  Info,
  Layers,
  Heart,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  MapPin,
  CheckCircle2,
  Compass,
  Image as ImageIcon,
  ExternalLink,
  ZoomIn
} from 'lucide-react';

export const VesselsEncyclopediaView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedType, setSelectedType] = useState<'todos' | 'artéria' | 'veia'>('todos');
  const [selectedTerritory, setSelectedTerritory] = useState<string>('todos');
  const [expandedVesselId, setExpandedVesselId] = useState<string | null>(bloodVesselsData[0].id);
  const [selectedModalImage, setSelectedModalImage] = useState<AnatomicalImageRef | null>(null);

  // Filter logic
  const filteredVessels = bloodVesselsData.filter((vessel) => {
    const matchesType = selectedType === 'todos' || vessel.tipo === selectedType;
    const matchesTerritory = selectedTerritory === 'todos' || vessel.territorio === selectedTerritory;
    const query = searchTerm.toLowerCase();
    const matchesSearch =
      vessel.nome.toLowerCase().includes(query) ||
      (vessel.nomenclaturaAlternativa && vessel.nomenclaturaAlternativa.toLowerCase().includes(query)) ||
      vessel.deOndeVem.toLowerCase().includes(query) ||
      vessel.ateOndeVai.toLowerCase().includes(query) ||
      vessel.responsavelPor.toLowerCase().includes(query) ||
      vessel.ramificacoesPrincipais.some((r) => r.toLowerCase().includes(query));

    return matchesType && matchesTerritory && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200/80 text-rose-700 text-xs font-semibold">
          <ImageIcon className="w-3.5 h-3.5" /> Atlas Fotográfico & Angiologia Ilustrada · UFPB
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-display">
          Guia Ilustrado de Veias & Artérias
        </h1>
        <p className="text-sm text-slate-500 max-w-3xl leading-relaxed">
          Trajeto detalhado de cada vaso acompanhado de <strong>ilustrações anatômicas e lâminas de atlas médico</strong>: de onde vem, até onde vai, por qual território é responsável, se e como se ramifica e como reconhecer no cadáver.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
          {/* Search box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar artéria, veia, ramo ou destino..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
            />
          </div>

          {/* Type filter buttons (Artérias vs Veias) */}
          <div className="flex items-center gap-1.5 w-full md:w-auto">
            <button
              onClick={() => setSelectedType('todos')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedType === 'todos'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Todos ({bloodVesselsData.length})
            </button>

            <button
              onClick={() => setSelectedType('artéria')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${
                selectedType === 'artéria'
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'bg-rose-50 text-rose-700 hover:bg-rose-100'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-rose-400"></span>
              Artérias
            </button>

            <button
              onClick={() => setSelectedType('veia')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${
                selectedType === 'veia'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              Veias
            </button>
          </div>
        </div>

        {/* Territory filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pt-2 border-t border-slate-100 text-xs">
          <span className="text-slate-400 font-medium shrink-0 mr-1">Região Corporal:</span>
          {[
            { id: 'todos', label: 'Todas' },
            { id: 'Tórax & Coração', label: 'Tórax & Coração' },
            { id: 'Cabeça & Pescoço', label: 'Cabeça & Pescoço' },
            { id: 'Membro Superior', label: 'Membro Superior' },
            { id: 'Membro Inferior', label: 'Membro Inferior' },
            { id: 'Abdome & Pelve', label: 'Abdome & Pelve' }
          ].map((territory) => (
            <button
              key={territory.id}
              onClick={() => setSelectedTerritory(territory.id)}
              className={`px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-all ${
                selectedTerritory === territory.id
                  ? 'bg-slate-800 text-white font-semibold'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {territory.label}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
          <span>Mostrando <strong>{filteredVessels.length}</strong> vasos catalogados com ilustrações dedicadas</span>
          <span className="text-[11px] text-rose-600 font-medium">Toque na imagem para ampliar em alta resolução</span>
        </div>
      </div>

      {/* Vessels List */}
      <div className="space-y-4">
        {filteredVessels.map((vessel) => {
          const isExpanded = expandedVesselId === vessel.id;
          const isArtery = vessel.tipo === 'artéria';
          const imgRef = anatomicalIllustrations[vessel.id];

          return (
            <div
              key={vessel.id}
              className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden shadow-xs ${
                isExpanded
                  ? isArtery
                    ? 'border-rose-400 ring-2 ring-rose-500/10'
                    : 'border-blue-400 ring-2 ring-blue-500/10'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              {/* Header Bar */}
              <div
                onClick={() => setExpandedVesselId(isExpanded ? null : vessel.id)}
                className="p-4 sm:p-5 flex items-center justify-between gap-3 cursor-pointer select-none"
              >
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  {/* Miniature Image / SVG Thumbnail */}
                  <AnatomicalImageViewer
                    structureId={vessel.id}
                    structureName={vessel.nome}
                    imageUrl={imgRef?.imageUrl}
                    tipo={vessel.tipo}
                    mode="compact"
                    className="w-12 h-12"
                  />

                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 truncate">
                        {vessel.nome}
                      </h3>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                          isArtery ? 'bg-rose-100/70 text-rose-800' : 'bg-blue-100/70 text-blue-800'
                        }`}
                      >
                        {vessel.tipo.toUpperCase()}
                      </span>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                        {vessel.territorio}
                      </span>
                    </div>

                    {vessel.nomenclaturaAlternativa && (
                      <p className="text-xs text-slate-400 truncate">
                        Sinônimo: {vessel.nomenclaturaAlternativa}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="hidden sm:inline-block text-xs font-semibold text-slate-500">
                    {isExpanded ? 'Ocultar detalhes' : 'Ver imagem & trajeto'}
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </div>
              </div>

              {/* Expanded Vessel Anatomy Details */}
              {isExpanded && (
                <div className="border-t border-slate-100 p-5 sm:p-7 bg-slate-50/40 space-y-6 text-xs sm:text-sm">
                  {/* ANATOMICAL ATLAS IMAGE & REFERENCE CARD (SVG + Atlas Fallback) */}
                  <AnatomicalImageViewer
                    structureId={vessel.id}
                    structureName={vessel.nome}
                    subtitulo={imgRef?.subtitulo || `${vessel.deOndeVem} ➔ ${vessel.ateOndeVai}`}
                    imageUrl={imgRef?.imageUrl}
                    fonte={imgRef?.autorOuFonte}
                    legendaPontos={imgRef?.legendaPontos || vessel.ramificacoesPrincipais.slice(0, 3)}
                    tipo={vessel.tipo}
                    mode="card"
                    defaultView="svg"
                  />

                  {/* Origin to Destination Route Banner */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {/* Origin (De onde vem) */}
                    <div className="p-4 rounded-xl bg-white border border-slate-200/90 space-y-1">
                      <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase tracking-wider">
                        <MapPin className="w-4 h-4" />
                        <span>De Onde Vem (Origem Anatômica):</span>
                      </div>
                      <p className="text-slate-700 leading-relaxed pt-1">{vessel.deOndeVem}</p>
                    </div>

                    {/* Destination (Até onde vai) */}
                    <div className="p-4 rounded-xl bg-white border border-slate-200/90 space-y-1">
                      <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                        <ArrowRight className="w-4 h-4" />
                        <span>Até Onde Vai (Trajeto & Término):</span>
                      </div>
                      <p className="text-slate-700 leading-relaxed pt-1">{vessel.ateOndeVai}</p>
                    </div>
                  </div>

                  {/* Responsável Por (O que nutre ou o que drena) */}
                  <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-amber-950 space-y-1">
                    <strong className="block text-amber-900 font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                      <Compass className="w-4 h-4 text-amber-600" />
                      Responsável Por (Território Funcional X):
                    </strong>
                    <p className="text-slate-800 leading-relaxed text-xs sm:text-sm pt-0.5">
                      {vessel.responsavelPor}
                    </p>
                  </div>

                  {/* Ramificações (Se ramifica? Quais os ramos?) */}
                  <div className="space-y-2.5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                      <GitBranch className="w-4 h-4 text-rose-600" />
                      {isArtery
                        ? 'Se Ramifica? Sim, Principais Ramos Arteriais:'
                        : 'Confluência & Tributárias Venosas:'}
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {vessel.ramificacoesPrincipais.map((ramo, rIdx) => (
                        <div
                          key={rIdx}
                          className="p-3 bg-white rounded-xl border border-slate-200/80 text-xs text-slate-700 flex items-start gap-2.5"
                        >
                          <span
                            className={`w-4 h-4 rounded-full font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5 ${
                              isArtery ? 'bg-rose-100 text-rose-800' : 'bg-blue-100 text-blue-800'
                            }`}
                          >
                            {rIdx + 1}
                          </span>
                          <span className="leading-relaxed">{ramo}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Características Anatômicas & Parede */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-slate-600" />
                      Características Anatômicas & Parede do Vaso:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {vessel.caracteristicasAnatomicas.map((carac, cIdx) => (
                        <div
                          key={cIdx}
                          className="p-3 bg-white rounded-xl border border-slate-200/70 text-xs text-slate-600 flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5"></span>
                          <span className="leading-relaxed">{carac}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dica de Bancada UFPB */}
                  <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200 text-purple-950 space-y-1">
                    <strong className="block text-purple-900 font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                      <Eye className="w-4 h-4 text-purple-600" />
                      Dica de Bancada / Como Reconhecer no Cadáver (UFPB):
                    </strong>
                    <p className="text-slate-800 leading-relaxed text-xs">
                      {vessel.dicaPraticaBancada}
                    </p>
                  </div>

                  {/* Relevância em Fisioterapia */}
                  <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 text-emerald-950 space-y-1">
                    <strong className="block text-emerald-900 font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                      <Stethoscope className="w-4 h-4 text-emerald-600" />
                      Aplicação Prática em Fisioterapia & Clínica:
                    </strong>
                    <p className="text-slate-800 leading-relaxed text-xs">
                      {vessel.relevanciaFisioterapia || vessel.relevanciaFisio}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {filteredVessels.length === 0 && (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
            <AlertTriangle className="w-8 h-8 text-amber-500 mx-auto" />
            <h3 className="text-base font-bold text-slate-800">Nenhum vaso encontrado com esses filtros</h3>
            <p className="text-xs text-slate-500">Tente buscar por outro termo ou selecione "Todos os Vasos".</p>
          </div>
        )}
      </div>

      {/* FULLSCREEN IMAGE MODAL */}
      {selectedModalImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedModalImage(null)}
        >
          <div
            className="bg-slate-900 rounded-2xl border border-slate-700 max-w-4xl w-full overflow-hidden shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-white">
              <div>
                <h3 className="text-base font-bold">{selectedModalImage.titulo}</h3>
                <p className="text-xs text-slate-400">{selectedModalImage.subtitulo}</p>
              </div>
              <button
                onClick={() => setSelectedModalImage(null)}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold"
              >
                ✕ Fechar
              </button>
            </div>

            {/* Modal Image display */}
            <div className="p-4 flex items-center justify-center max-h-[70vh] overflow-auto">
              <img
                src={selectedModalImage.imageUrl}
                alt={selectedModalImage.titulo}
                referrerPolicy="no-referrer"
                className="max-h-[60vh] w-auto object-contain rounded-lg drop-shadow-xl"
              />
            </div>

            {/* Modal Footer with key landmarks */}
            <div className="p-4 bg-slate-950 border-t border-slate-800 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-400 block">
                Marcos Anatômicos Guias:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {selectedModalImage.legendaPontos.map((pt, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0"></span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-slate-500 pt-1">Fonte da Imagem: {selectedModalImage.autorOuFonte}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
