import React, { useState } from 'react';
import { AnatomicalSvgDiagram } from './AnatomicalSvgDiagram';
import { ExternalLink, ZoomIn, Layers, Image as ImageIcon, Sparkles, CheckCircle2 } from 'lucide-react';

export interface AnatomicalImageViewerProps {
  structureId: string;
  structureName: string;
  subtitulo?: string;
  imageUrl?: string;
  fonte?: string;
  legendaPontos?: string[];
  tipo?: 'artéria' | 'veia' | 'câmara' | 'valva' | 'misto';
  className?: string;
  mode?: 'compact' | 'card' | 'fullscreen';
  defaultView?: 'svg' | 'image';
  onExpand?: () => void;
}

export const AnatomicalImageViewer: React.FC<AnatomicalImageViewerProps> = ({
  structureId,
  structureName,
  subtitulo,
  imageUrl,
  fonte,
  legendaPontos = [],
  tipo = 'artéria',
  className = '',
  mode = 'card',
  defaultView = 'svg',
  onExpand
}) => {
  const [imageError, setImageError] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'svg' | 'image'>(defaultView);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // If there's no image URL or if the image failed to load, automatically fallback to SVG
  const activeView = !imageUrl || imageError ? 'svg' : viewMode;

  const googleSearchUrl = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(
    structureName + ' anatomia'
  )}`;

  // COMPACT / THUMBNAIL MODE (e.g. inside list headers)
  if (mode === 'compact') {
    return (
      <div className={`relative rounded-xl overflow-hidden shrink-0 border border-slate-200 bg-slate-900 group cursor-pointer ${className}`}>
        {activeView === 'image' && imageUrl && !imageError ? (
          <img
            src={imageUrl}
            alt={structureName}
            referrerPolicy="no-referrer"
            loading="lazy"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform"
          />
        ) : (
          <div className="w-full h-full p-1 bg-slate-900 flex items-center justify-center">
            <AnatomicalSvgDiagram
              structureId={structureId}
              structureName={structureName}
              className="w-full h-full"
              showPin={false}
            />
          </div>
        )}
        <div className="absolute inset-0 bg-black/25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <ZoomIn className="w-3.5 h-3.5 text-white drop-shadow-md" />
        </div>
      </div>
    );
  }

  // CARD MODE (Rich dual-mode card with SVG, Atlas Photo fallback, and Google Images link)
  return (
    <>
      <div className={`bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs ${className}`}>
        {/* Card Header with View Switcher */}
        <div className="px-4 py-3 bg-slate-50 border-b border-slate-200/80 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                tipo === 'veia' ? 'bg-blue-500' : 'bg-rose-500'
              }`}
            />
            <span className="font-bold text-slate-800 font-display">
              {structureName}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Toggle between SVG Diagram and Real Image (if available) */}
            {imageUrl && !imageError && (
              <div className="inline-flex rounded-lg bg-slate-200/80 p-0.5 text-[11px] font-semibold">
                <button
                  type="button"
                  onClick={() => setViewMode('svg')}
                  className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1 ${
                    viewMode === 'svg'
                      ? 'bg-white text-rose-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Layers className="w-3 h-3 text-rose-600" />
                  <span>Esquema SVG</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('image')}
                  className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1 ${
                    viewMode === 'image'
                      ? 'bg-white text-blue-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <ImageIcon className="w-3 h-3 text-blue-600" />
                  <span>Foto Atlas</span>
                </button>
              </div>
            )}

            {/* Direct Google Images button */}
            <a
              href={googleSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-sky-50 hover:bg-sky-100 border border-sky-200 text-sky-700 text-[11px] font-semibold transition-colors"
              title="Buscar mais fotos no Google Imagens"
            >
              <ExternalLink className="w-3 h-3 text-sky-600" />
              <span className="hidden sm:inline">Mais Fotos no Google</span>
              <span className="sm:hidden">Google</span>
            </a>
          </div>
        </div>

        {/* Media Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Visual Display: SVG or Photo */}
          <div className="lg:col-span-6 bg-slate-950 relative min-h-[220px] max-h-[300px] flex items-center justify-center p-2 group overflow-hidden">
            {activeView === 'image' && imageUrl && !imageError ? (
              <img
                src={imageUrl}
                alt={structureName}
                referrerPolicy="no-referrer"
                loading="lazy"
                onError={() => {
                  setImageError(true);
                  setViewMode('svg');
                }}
                className="max-h-[270px] w-auto object-contain rounded-lg drop-shadow-md cursor-pointer group-hover:scale-[1.02] transition-transform duration-300"
                onClick={() => (onExpand ? onExpand() : setIsModalOpen(true))}
              />
            ) : (
              <div
                className="w-full h-full max-h-[270px] flex items-center justify-center cursor-pointer"
                onClick={() => (onExpand ? onExpand() : setIsModalOpen(true))}
              >
                <AnatomicalSvgDiagram
                  structureId={structureId}
                  structureName={structureName}
                  className="w-full max-h-[260px]"
                  showPin={true}
                />
              </div>
            )}

            {/* Corner Badge */}
            <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/70 backdrop-blur-xs text-[10px] text-white font-mono flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>{activeView === 'svg' ? 'Esquema Vetorial UFPB' : 'Lâmina do Atlas'}</span>
            </div>

            {/* Zoom Button */}
            <button
              type="button"
              onClick={() => (onExpand ? onExpand() : setIsModalOpen(true))}
              className="absolute bottom-2 right-2 px-2.5 py-1 rounded-lg bg-black/75 hover:bg-black text-white text-[11px] font-semibold flex items-center gap-1.5 shadow-sm transition-all"
            >
              <ZoomIn className="w-3.5 h-3.5" />
              <span>Ampliar</span>
            </button>
          </div>

          {/* Guide Landmarks & Explanations */}
          <div className="lg:col-span-6 p-4 sm:p-5 flex flex-col justify-between space-y-3 bg-white">
            <div className="space-y-2">
              {subtitulo && (
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  {subtitulo}
                </p>
              )}

              {legendaPontos && legendaPontos.length > 0 && (
                <div className="space-y-1.5 pt-1">
                  <span className="text-[11px] font-bold text-slate-700 block uppercase tracking-wider">
                    Marcos Visuais Chave:
                  </span>
                  <ul className="space-y-1.5">
                    {legendaPontos.slice(0, 3).map((pt, i) => (
                      <li
                        key={i}
                        className="text-xs text-slate-700 flex items-start gap-2 bg-slate-50 p-2 rounded-lg border border-slate-100"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Footer with credits & Google Search action */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
              <span className="truncate max-w-[200px]">
                {activeView === 'svg'
                  ? 'Ilustração Vetorial Didática'
                  : fonte || 'Atlas Anatômico / Gray\'s Anatomy'}
              </span>
              <a
                href={googleSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 hover:text-sky-700 font-semibold inline-flex items-center gap-1"
              >
                <span>Mais Fotos no Google</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FULLSCREEN MODAL */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-slate-900 rounded-2xl border border-slate-700 max-w-4xl w-full overflow-hidden shadow-2xl space-y-4 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-white shrink-0">
              <div>
                <h3 className="text-base font-bold flex items-center gap-2">
                  <span>{structureName}</span>
                </h3>
                {subtitulo && <p className="text-xs text-slate-400">{subtitulo}</p>}
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={googleSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Mais Fotos no Google</span>
                </a>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold"
                >
                  ✕ Fechar
                </button>
              </div>
            </div>

            {/* Modal Media Display */}
            <div className="p-4 flex-1 flex items-center justify-center min-h-[300px] max-h-[60vh] overflow-auto bg-black">
              {activeView === 'image' && imageUrl && !imageError ? (
                <img
                  src={imageUrl}
                  alt={structureName}
                  referrerPolicy="no-referrer"
                  className="max-h-[55vh] w-auto object-contain rounded-lg"
                  onError={() => {
                    setImageError(true);
                    setViewMode('svg');
                  }}
                />
              ) : (
                <div className="w-full max-w-2xl h-[55vh] flex items-center justify-center">
                  <AnatomicalSvgDiagram
                    structureId={structureId}
                    structureName={structureName}
                    className="w-full h-full"
                    showPin={true}
                  />
                </div>
              )}
            </div>

            {/* Modal Footer with key landmarks */}
            <div className="p-4 bg-slate-950 border-t border-slate-800 space-y-2 shrink-0">
              {legendaPontos && legendaPontos.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {legendaPontos.map((pt, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0"></span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              )}
              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800">
                <span>Fonte: {activeView === 'svg' ? 'Esquema Vetorial de Bancada UFPB' : fonte || 'Atlas Anatômico'}</span>
                <span className="text-slate-400">Pressione ESC ou clique fora para fechar</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
