import React from 'react';

interface AnatomicalSvgDiagramProps {
  structureId: string;
  structureName?: string;
  className?: string;
  showPin?: boolean;
}

export const AnatomicalSvgDiagram: React.FC<AnatomicalSvgDiagramProps> = ({
  structureId,
  structureName,
  className = 'w-full h-full',
  showPin = true
}) => {
  // Smart resolver for IDs and names
  const resolveStructure = (id: string, name?: string): string => {
    const rawId = (id || '').trim();
    const combined = `${rawId} ${name || ''}`.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    // Station numbers 1 to 20
    if (/^(estacao-?)?1$/i.test(rawId)) return 'arteria-braquial';
    if (/^(estacao-?)?2$/i.test(rawId)) return 'veia-safena-magna';
    if (/^(estacao-?)?3$/i.test(rawId)) return 'veia-cava-superior';
    if (/^(estacao-?)?4$/i.test(rawId)) return 'auricula-esquerda';
    if (/^(estacao-?)?5$/i.test(rawId)) return 'trabecula-septomarginal';
    if (/^(estacao-?)?6$/i.test(rawId)) return 'valva-tricuspide';
    if (/^(estacao-?)?7$/i.test(rawId)) return 'arteria-coronaria-esquerda';
    if (/^(estacao-?)?8$/i.test(rawId)) return 'tronco-braquiocefalico';
    if (/^(estacao-?)?9$/i.test(rawId)) return 'valva-mitral';
    if (/^(estacao-?)?10$/i.test(rawId)) return 'fossa-oval';
    if (/^(estacao-?)?11$/i.test(rawId)) return 'seio-coronario';
    if (/^(estacao-?)?12$/i.test(rawId)) return 'arco-aortico';
    if (/^(estacao-?)?13$/i.test(rawId)) return 'veia-safena-parva';
    if (/^(estacao-?)?14$/i.test(rawId)) return 'arteria-tibial-posterior';
    if (/^(estacao-?)?15$/i.test(rawId)) return 'arteria-carotida-comum';
    if (/^(estacao-?)?16$/i.test(rawId)) return 'arteria-subclavia';
    if (/^(estacao-?)?17$/i.test(rawId)) return 'ligamento-arterial';
    if (/^(estacao-?)?18$/i.test(rawId)) return 'arteria-radial';
    if (/^(estacao-?)?19$/i.test(rawId)) return 'arteria-poplitea';
    if (/^(estacao-?)?20$/i.test(rawId)) return 'arteria-coronaria-direita';

    // Keyword matching
    if (combined.includes('braquial')) return 'arteria-braquial';
    if (combined.includes('safena magna')) return 'veia-safena-magna';
    if (combined.includes('safena parva')) return 'veia-safena-parva';
    if (combined.includes('cava superior') || combined.includes('vcs')) return 'veia-cava-superior';
    if (combined.includes('cava inferior') || combined.includes('vci')) return 'veia-cava-inferior';
    if (combined.includes('septomarginal') || combined.includes('moderadora')) return 'trabecula-septomarginal';
    if (combined.includes('auricula')) return 'auricula-esquerda';
    if (combined.includes('tricuspide')) return 'valva-tricuspide';
    if (combined.includes('mitral') || combined.includes('bicuspide')) return 'valva-mitral';
    if (combined.includes('fossa oval') || combined.includes('limbo')) return 'fossa-oval';
    if (combined.includes('seio coronario')) return 'seio-coronario';
    if (combined.includes('coronaria esquerda') || combined.includes('descendente anterior') || combined.includes('ada')) return 'arteria-coronaria-esquerda';
    if (combined.includes('coronaria direita') || combined.includes('acd')) return 'arteria-coronaria-direita';
    if (combined.includes('ligamento arterial') || combined.includes('botallo')) return 'ligamento-arterial';
    if (combined.includes('femoral')) return 'arteria-femoral';
    if (combined.includes('poplitea')) return 'arteria-poplitea';
    if (combined.includes('radial')) return 'arteria-radial';
    if (combined.includes('tibial')) return 'arteria-tibial-posterior';
    if (combined.includes('veias pulmonares') || combined.includes('pulmonares')) return 'veias-pulmonares';
    if (combined.includes('aorta') || combined.includes('arco') || combined.includes('braquiocefalico') || combined.includes('carotida') || combined.includes('subclavia')) return 'arco-aortico';

    return rawId
      .toLowerCase()
      .replace(/^estacao-?\d+-?/i, '')
      .replace(/^(artéria-|veia-)/, (m) => m.replace('é', 'e'));
  };

  const normalizedId = resolveStructure(structureId, structureName);

  const renderGraphic = () => {
    switch (normalizedId) {
      // =========================================================================
      // 1. ARTÉRIA BRAQUIAL (Estação 1)
      // =========================================================================
      case 'arteria-braquial':
      case 'braquial':
      case '1':
        return (
          <svg viewBox="0 0 400 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="ab_art" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#be123c" />
                <stop offset="50%" stopColor="#f43f5e" />
                <stop offset="100%" stopColor="#9f1239" />
              </linearGradient>
              <linearGradient id="ab_vein" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1d4ed8" />
                <stop offset="50%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#1e40af" />
              </linearGradient>
              <linearGradient id="ab_nerve" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ca8a04" />
                <stop offset="50%" stopColor="#fde047" />
                <stop offset="100%" stopColor="#a16207" />
              </linearGradient>
              <linearGradient id="ab_arm" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
            </defs>
            <rect width="400" height="320" rx="16" fill="url(#ab_arm)" />
            
            {/* Outline of upper arm & cubital fossa */}
            <path d="M 90,20 Q 80,160 110,240 L 120,300 L 280,300 Q 290,240 270,160 Q 260,80 250,20 Z" fill="#334155" opacity="0.4" />
            <path d="M 100,30 Q 115,120 125,190 Q 155,205 180,195 Q 160,110 145,30 Z" fill="#475569" opacity="0.6" />
            <text x="110" y="110" fill="#94a3b8" fontSize="10" fontWeight="bold">M. Bíceps Braquial</text>

            {/* Veias Satélites Braquiais (2 veias laterais azuis) */}
            <path d="M 188,20 Q 186,140 183,210 L 175,300" stroke="url(#ab_vein)" strokeWidth="6" fill="none" opacity="0.75" />
            <path d="M 218,20 Q 216,140 212,210 L 222,300" stroke="url(#ab_vein)" strokeWidth="6" fill="none" opacity="0.75" />
            <text x="228" y="70" fill="#60a5fa" fontSize="9">Vv. Braquiais (satélites)</text>

            {/* ARTÉRIA BRAQUIAL (Central Vermelha) */}
            <path d="M 203,20 Q 202,130 198,205" stroke="url(#ab_art)" strokeWidth="12" fill="none" strokeLinecap="round" />
            {/* Lúmen arterial aberto (detalhe de prova sem tocar) */}
            <ellipse cx="203" cy="22" rx="6" ry="3" fill="#fda4af" stroke="#be123c" strokeWidth="1.5" />
            
            {/* Bifurcação cubital na altura do colo do rádio */}
            {/* Artéria Radial (lateral) */}
            <path d="M 198,205 Q 185,240 155,300" stroke="url(#ab_art)" strokeWidth="8" fill="none" />
            <text x="120" y="285" fill="#f43f5e" fontSize="10" fontWeight="bold">A. Radial</text>
            
            {/* Artéria Ulnar (medial) */}
            <path d="M 198,205 Q 208,240 235,300" stroke="url(#ab_art)" strokeWidth="9" fill="none" />
            <text x="240" y="285" fill="#f43f5e" fontSize="10" fontWeight="bold">A. Ulnar</text>

            {/* NERVO MEDIANO (Amarelo cruzando de lateral para medial) */}
            <path d="M 175,20 Q 185,110 202,150 Q 220,195 215,300" stroke="url(#ab_nerve)" strokeWidth="7" fill="none" strokeDasharray="6 2" />
            <text x="215" y="130" fill="#fde047" fontSize="10" fontWeight="bold">N. Mediano (cruza em X)</text>

            {/* Aponeurose Bicipital (fáscia de proteção) */}
            <path d="M 140,200 L 210,230 L 195,245 L 130,215 Z" fill="#94a3b8" opacity="0.35" stroke="#cbd5e1" strokeWidth="1" />
            <text x="110" y="235" fill="#cbd5e1" fontSize="9">Aponeurose Bicipital</text>

            {/* ALFINETE DA PROVA UFPB */}
            {showPin && (
              <g>
                <circle cx="198" cy="115" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.5))" />
                <line x1="198" y1="115" x2="201" y2="128" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                <rect x="235" y="98" width="145" height="32" rx="6" fill="#1e1b4b" stroke="#818cf8" strokeWidth="1" />
                <text x="245" y="112" fill="#c7d2fe" fontSize="9" fontWeight="bold">ESTAÇÃO 1 · UFPB</text>
                <text x="245" y="124" fill="#ffffff" fontSize="10" fontWeight="bold">Artéria Braquial (luz aberta)</text>
                <line x1="208" y1="115" x2="235" y2="114" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="3 2" />
              </g>
            )}

            {/* Legenda inferior */}
            <rect x="15" y="280" width="370" height="30" rx="8" fill="#0f172a" fillOpacity="0.8" stroke="#334155" strokeWidth="1" />
            <text x="25" y="300" fill="#f87171" fontSize="10" fontWeight="bold">● Vermelho: Artéria (parede espessa)</text>
            <text x="200" y="300" fill="#facc15" fontSize="10" fontWeight="bold">● Amarelo: N. Mediano (maciço)</text>
          </svg>
        );

      // =========================================================================
      // 2. VEIA SAFENA MAGNA (Estação 2)
      // =========================================================================
      case 'veia-safena-magna':
      case 'safena-magna':
      case '2':
        return (
          <svg viewBox="0 0 400 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="vsm_bg" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#1e293b" />
              </linearGradient>
              <linearGradient id="vsm_vein" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="50%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
              <linearGradient id="vsm_bone" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#e2e8f0" />
                <stop offset="100%" stopColor="#94a3b8" />
              </linearGradient>
            </defs>
            <rect width="400" height="320" rx="16" fill="url(#vsm_bg)" />

            {/* Silhueta da perna medial, tornozelo e pé */}
            <path d="M 230,20 L 220,180 Q 215,220 200,240 Q 185,255 120,270 L 100,290 L 190,295 Q 260,290 265,245 L 285,180 L 290,20 Z" fill="#334155" opacity="0.3" />
            
            {/* Tíbia e Maléolo Medial (Osso em cinza claro) */}
            <path d="M 215,40 L 210,180 Q 205,215 195,235 Q 185,245 175,235 Q 180,210 185,180 L 190,40 Z" fill="url(#vsm_bone)" opacity="0.8" />
            <circle cx="185" cy="235" r="14" fill="#cbd5e1" stroke="#64748b" strokeWidth="2" />
            <text x="110" y="225" fill="#e2e8f0" fontSize="11" fontWeight="bold">Maléolo Medial</text>
            <line x1="168" y1="225" x2="180" y2="230" stroke="#e2e8f0" strokeWidth="1.5" />

            {/* Arco Venoso Dorsal do Pé */}
            <path d="M 110,285 Q 140,270 160,265" stroke="url(#vsm_vein)" strokeWidth="6" fill="none" />
            <text x="80" y="310" fill="#93c5fd" fontSize="9">Arco Venoso Dorsal</text>

            {/* VEIA SAFENA MAGNA (Passagem ANTERIOR ao maléolo medial) */}
            {/* Trajeto anterior ao maléolo: 1-2 cm À FRENTE DO OSSO! */}
            <path d="M 155,270 Q 165,245 170,225 Q 180,150 195,80 L 205,20" stroke="url(#vsm_vein)" strokeWidth="9" fill="none" strokeLinecap="round" />

            {/* Válvulas ostiais parietais internas */}
            <ellipse cx="178" cy="180" rx="3" ry="1.5" fill="#ffffff" />
            <ellipse cx="188" cy="120" rx="3" ry="1.5" fill="#ffffff" />

            {/* Destaque da regra de ouro: ANTERIOR AO MALÉOLO MEDIAL */}
            <rect x="235" y="170" width="150" height="55" rx="8" fill="#1e1b4b" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="245" y="188" fill="#38bdf8" fontSize="10" fontWeight="bold">REGRA DE OURO UFPB:</text>
            <text x="245" y="202" fill="#ffffff" fontSize="10" fontWeight="bold">Passa 1 a 2 cm ANTERIOR</text>
            <text x="245" y="216" fill="#fde047" fontSize="10">ao maléolo medial!</text>
            <line x1="172" y1="225" x2="235" y2="195" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 2" />

            {/* Alfinete de prova na veia */}
            {showPin && (
              <g>
                <circle cx="170" cy="225" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.5))" />
                <line x1="170" y1="225" x2="173" y2="238" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                <rect x="240" y="90" width="145" height="32" rx="6" fill="#0f172a" stroke="#60a5fa" strokeWidth="1" />
                <text x="248" y="104" fill="#93c5fd" fontSize="9" fontWeight="bold">ESTAÇÃO 2 · UFPB</text>
                <text x="248" y="116" fill="#ffffff" fontSize="10" fontWeight="bold">Veia Safena Magna</text>
                <line x1="178" y1="225" x2="240" y2="106" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="3 2" />
              </g>
            )}

            {/* Legenda */}
            <rect x="15" y="15" width="200" height="25" rx="6" fill="#0f172a" fillOpacity="0.8" stroke="#334155" strokeWidth="1" />
            <text x="25" y="32" fill="#60a5fa" fontSize="10" fontWeight="bold">Face Medial do Membro Inferior</text>
          </svg>
        );

      // =========================================================================
      // 3. VEIA CAVA SUPERIOR (Estação 3)
      // =========================================================================
      case 'veia-cava-superior':
      case 'cava-superior':
      case 'vcs':
      case '3':
        return (
          <svg viewBox="0 0 400 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="vcs_blue" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1e40af" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
              <linearGradient id="vcs_red" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#be123c" />
                <stop offset="50%" stopColor="#f43f5e" />
                <stop offset="100%" stopColor="#9f1239" />
              </linearGradient>
            </defs>
            <rect width="400" height="320" rx="16" fill="#090d16" />

            {/* Átrio Direito (câmara de deságue) */}
            <path d="M 120,200 Q 110,290 190,300 Q 250,295 240,200 Z" fill="#1e293b" stroke="#334155" strokeWidth="2" />
            <text x="150" y="260" fill="#94a3b8" fontSize="12" fontWeight="bold">Átrio Direito</text>

            {/* Aorta Ascendente (ao lado esquerdo da VCS) */}
            <path d="M 215,200 L 225,90 Q 235,40 290,40" stroke="url(#vcs_red)" strokeWidth="28" fill="none" opacity="0.85" />
            <text x="245" y="80" fill="#fda4af" fontSize="11" fontWeight="bold">Aorta Ascendente</text>

            {/* Veia Braquiocefálica Esquerda (longa e horizontal) */}
            <path d="M 330,35 Q 220,50 170,85" stroke="url(#vcs_blue)" strokeWidth="18" fill="none" />
            <text x="245" y="30" fill="#93c5fd" fontSize="9">V. Braquiocefálica E.</text>

            {/* Veia Braquiocefálica Direita (curta e vertical) */}
            <path d="M 130,25 Q 150,60 170,85" stroke="url(#vcs_blue)" strokeWidth="18" fill="none" />
            <text x="75" y="35" fill="#93c5fd" fontSize="9">V. Braquiocefálica D.</text>

            {/* VEIA CAVA SUPERIOR (Tronco principal vertical descendo até o AD) */}
            <path d="M 170,85 L 175,205" stroke="url(#vcs_blue)" strokeWidth="26" fill="none" strokeLinecap="round" />
            
            {/* Arco da Veia Ázigos contornando a face posterior */}
            <path d="M 120,135 Q 155,125 170,145" stroke="#60a5fa" strokeWidth="8" fill="none" />
            <text x="80" y="130" fill="#60a5fa" fontSize="9">Arco da V. Ázigos</text>

            {/* Óstio da VCS no teto do AD (luz aberta e circular, avalvular) */}
            <ellipse cx="176" cy="205" rx="13" ry="6" fill="#0f172a" stroke="#60a5fa" strokeWidth="2" />
            <text x="95" y="210" fill="#38bdf8" fontSize="10" fontWeight="bold">Óstio da VCS ➔</text>

            {/* Alfinete de bancada */}
            {showPin && (
              <g>
                <circle cx="176" cy="160" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.5))" />
                <line x1="176" y1="160" x2="178" y2="175" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                <rect x="235" y="135" width="150" height="42" rx="6" fill="#1e1b4b" stroke="#818cf8" strokeWidth="1" />
                <text x="245" y="152" fill="#c7d2fe" fontSize="9" fontWeight="bold">ESTAÇÃO 3 · UFPB</text>
                <text x="245" y="165" fill="#ffffff" fontSize="10" fontWeight="bold">Veia Cava Superior</text>
                <text x="245" y="174" fill="#93c5fd" fontSize="8">(Avalvular · Teto do AD)</text>
                <line x1="185" y1="160" x2="235" y2="155" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="3 2" />
              </g>
            )}
          </svg>
        );

      // =========================================================================
      // 4. AURÍCULA ESQUERDA (Estação 4)
      // =========================================================================
      case 'auricula-esquerda':
      case '4':
        return (
          <svg viewBox="0 0 400 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="ae_tp" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1e3a8a" />
                <stop offset="50%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
              <linearGradient id="ae_auric" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f43f5e" />
                <stop offset="50%" stopColor="#e11d48" />
                <stop offset="100%" stopColor="#9f1239" />
              </linearGradient>
            </defs>
            <rect width="400" height="320" rx="16" fill="#0f172a" />

            {/* Base dos ventrículos */}
            <path d="M 90,200 Q 180,310 240,290 Q 310,270 310,180 Z" fill="#334155" opacity="0.6" />
            <text x="230" y="270" fill="#94a3b8" fontSize="11">Ventrículo Esquerdo</text>

            {/* Tronco Pulmonar (azul central) */}
            <path d="M 160,200 L 165,90 Q 170,50 140,25" stroke="url(#ae_tp)" strokeWidth="32" fill="none" strokeLinecap="round" />
            <text x="105" y="80" fill="#93c5fd" fontSize="11" fontWeight="bold">Tronco Pulmonar</text>

            {/* Aorta posterior ao tronco */}
            <path d="M 210,180 L 215,80 Q 220,35 250,25" stroke="#be123c" strokeWidth="26" fill="none" opacity="0.75" />
            <text x="230" y="60" fill="#fda4af" fontSize="10">Arco Aórtico</text>

            {/* AURÍCULA ESQUERDA (Apêndice denteado abraçando o tronco pulmonar) */}
            <path d="M 185,120 Q 205,105 230,115 Q 245,130 240,155 Q 235,175 215,185 Q 195,190 185,175 Q 175,160 178,140 Z" fill="url(#ae_auric)" stroke="#ffffff" strokeWidth="2" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.5))" />
            {/* Bordas denteadas características (orelha de cachorro) */}
            <path d="M 210,122 L 216,118 L 222,125 L 228,120 L 235,130" stroke="#fda4af" strokeWidth="2" fill="none" />
            <path d="M 225,145 L 235,152 L 230,160 L 238,168" stroke="#fda4af" strokeWidth="2" fill="none" />

            {/* Alfinete na ponta da aurícula esquerda */}
            {showPin && (
              <g>
                <circle cx="215" cy="145" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.5))" />
                <line x1="215" y1="145" x2="218" y2="160" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                <rect x="250" y="115" width="140" height="42" rx="6" fill="#1e1b4b" stroke="#f43f5e" strokeWidth="1" />
                <text x="258" y="132" fill="#fda4af" fontSize="9" fontWeight="bold">ESTAÇÃO 4 · UFPB</text>
                <text x="258" y="145" fill="#ffffff" fontSize="10" fontWeight="bold">Aurícula Esquerda</text>
                <text x="258" y="154" fill="#cbd5e1" fontSize="8">(Denteada / Orelha de cão)</text>
                <line x1="223" y1="145" x2="250" y2="135" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3 2" />
              </g>
            )}
          </svg>
        );

      // =========================================================================
      // 5. TRABÉCULA SEPTOMARGINAL (Estação 5)
      // =========================================================================
      case 'trabecula-septomarginal':
      case '5':
        return (
          <svg viewBox="0 0 400 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="ts_myo" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#450a0a" />
                <stop offset="100%" stopColor="#7f1d1d" />
              </linearGradient>
              <linearGradient id="ts_bridge" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#e11d48" />
                <stop offset="50%" stopColor="#f43f5e" />
                <stop offset="100%" stopColor="#be123c" />
              </linearGradient>
            </defs>
            <rect width="400" height="320" rx="16" fill="#0b0f19" />

            {/* Cavidade interna aberta do Ventrículo Direito */}
            <path d="M 50,40 Q 40,280 200,290 Q 350,280 340,40 Z" fill="#1e293b" stroke="#334155" strokeWidth="2" />
            <text x="80" y="70" fill="#94a3b8" fontSize="13" fontWeight="bold">Interior do Ventrículo Direito</text>

            {/* Septo Interventricular (parede medial esquerda) */}
            <path d="M 50,40 L 70,280 L 110,280 L 95,40 Z" fill="url(#ts_myo)" />
            <text x="40" y="170" fill="#fca5a5" fontSize="10" transform="rotate(-90 40 170)">Septo Interventricular</text>

            {/* Músculo Papilar Anterior do VD */}
            <path d="M 270,260 Q 260,180 250,150 Q 280,180 290,260 Z" fill="url(#ts_myo)" stroke="#991b1b" strokeWidth="1.5" />
            <text x="250" y="275" fill="#fca5a5" fontSize="9" fontWeight="bold">M. Papilar Anterior</text>

            {/* Cordas Tendíneas subindo para a valva tricúspide */}
            <line x1="250" y1="150" x2="235" y2="80" stroke="#f8fafc" strokeWidth="2" />
            <line x1="252" y1="150" x2="255" y2="80" stroke="#f8fafc" strokeWidth="2" />
            <line x1="254" y1="150" x2="275" y2="80" stroke="#f8fafc" strokeWidth="2" />
            <text x="240" y="70" fill="#f8fafc" fontSize="9">Cordas Tendíneas</text>

            {/* TRABÉCULA SEPTOMARGINAL (A Ponte Suspensa no Ar!) */}
            {/* Vai do septo IV até a base do músculo papilar anterior */}
            <path d="M 100,195 Q 170,205 255,200 Q 258,215 170,220 Q 98,212 100,195 Z" fill="url(#ts_bridge)" stroke="#ffffff" strokeWidth="2" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.6))" />
            
            {/* Feixe elétrico de condução interno (Ramo direito do Feixe de His) */}
            <path d="M 100,205 Q 170,212 255,208" stroke="#fde047" strokeWidth="2.5" strokeDasharray="4 2" fill="none" />
            <text x="130" y="190" fill="#fde047" fontSize="9" fontWeight="bold">Ramo D. do Feixe de His</text>

            {/* Espaço livre por baixo provando que é uma PONTE ISOLADA */}
            <text x="135" y="245" fill="#38bdf8" fontSize="9">Espaço oco por baixo (Ponte!)</text>
            <path d="M 170,225 L 170,240" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#arrow)" />

            {/* Alfinete na trabécula */}
            {showPin && (
              <g>
                <circle cx="180" cy="207" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.5))" />
                <line x1="180" y1="207" x2="183" y2="220" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                <rect x="230" y="90" width="160" height="42" rx="6" fill="#1e1b4b" stroke="#38bdf8" strokeWidth="1" />
                <text x="238" y="107" fill="#38bdf8" fontSize="9" fontWeight="bold">ESTAÇÃO 5 · UFPB</text>
                <text x="238" y="120" fill="#ffffff" fontSize="10" fontWeight="bold">Trabécula Septomarginal</text>
                <text x="238" y="129" fill="#93c5fd" fontSize="8">(Banda Moderadora · Só no VD!)</text>
                <line x1="188" y1="207" x2="230" y2="110" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 2" />
              </g>
            )}
          </svg>
        );

      // =========================================================================
      // 6. VALVA TRICÚSPIDE (Estação 6)
      // =========================================================================
      case 'valva-tricuspide':
      case '6':
        return (
          <svg viewBox="0 0 400 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="320" rx="16" fill="#0f172a" />
            <circle cx="200" cy="160" r="105" fill="#1e293b" stroke="#475569" strokeWidth="4" />
            <text x="145" y="45" fill="#94a3b8" fontSize="12" fontWeight="bold">Óstio Atrioventricular Direito</text>

            {/* Anel Fibroso da Valva Tricúspide */}
            <circle cx="200" cy="160" r="95" fill="none" stroke="#64748b" strokeWidth="8" strokeDasharray="10 4" />

            {/* 3 Cúspides Semitranslúcidas */}
            {/* Cúspide Anterior */}
            <path d="M 125,120 Q 200,165 275,120 Q 200,80 125,120 Z" fill="#f8fafc" fillOpacity="0.85" stroke="#cbd5e1" strokeWidth="2" />
            <text x="165" y="115" fill="#0f172a" fontSize="10" fontWeight="bold">Cúspide Anterior</text>

            {/* Cúspide Posterior */}
            <path d="M 275,120 Q 200,165 240,240 Q 285,185 275,120 Z" fill="#f1f5f9" fillOpacity="0.8" stroke="#cbd5e1" strokeWidth="2" />
            <text x="235" y="190" fill="#0f172a" fontSize="9" fontWeight="bold">Cúspide Post.</text>

            {/* Cúspide Septal (colada ao septo IV) */}
            <path d="M 125,120 Q 200,165 240,240 Q 140,240 125,120 Z" fill="#e2e8f0" fillOpacity="0.9" stroke="#be123c" strokeWidth="2.5" />
            <text x="135" y="195" fill="#9f1239" fontSize="10" fontWeight="bold">Cúspide Septal</text>

            {/* Linha do Septo Interventricular adjacente */}
            <line x1="80" y1="120" x2="80" y2="250" stroke="#be123c" strokeWidth="4" />
            <text x="25" y="185" fill="#fca5a5" fontSize="9" fontWeight="bold">Septo IV</text>

            {/* Alfinete na cúspide */}
            {showPin && (
              <g>
                <circle cx="165" cy="165" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                <line x1="165" y1="165" x2="167" y2="180" stroke="#ffffff" strokeWidth="2" />
                <rect x="230" y="245" width="160" height="35" rx="6" fill="#1e1b4b" stroke="#818cf8" strokeWidth="1" />
                <text x="238" y="260" fill="#c7d2fe" fontSize="9" fontWeight="bold">ESTAÇÃO 6 · UFPB</text>
                <text x="238" y="272" fill="#ffffff" fontSize="10" fontWeight="bold">Valva Tricúspide (3 Cúspides)</text>
              </g>
            )}
          </svg>
        );

      // =========================================================================
      // 7. ARTÉRIA CORONÁRIA ESQUERDA / ADA (Estação 7)
      // =========================================================================
      case 'arteria-coronaria-esquerda':
      case 'coronaria-esquerda':
      case 'ada':
      case '7':
        return (
          <svg viewBox="0 0 400 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="ace_heart" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#334155" />
                <stop offset="100%" stopColor="#1e293b" />
              </linearGradient>
            </defs>
            <rect width="400" height="320" rx="16" fill="#090d16" />

            {/* Contorno anterior do coração (sulco IV anterior e ápice) */}
            <path d="M 120,40 Q 80,160 160,260 Q 200,290 220,295 Q 310,240 300,120 Q 280,40 180,40 Z" fill="url(#ae_heart)" stroke="#475569" strokeWidth="2" />
            <text x="100" y="220" fill="#64748b" fontSize="11" fontWeight="bold">Ventrículo D.</text>
            <text x="240" y="220" fill="#64748b" fontSize="11" fontWeight="bold">Ventrículo E.</text>

            {/* Tronco da Artéria Coronária Esquerda (curto) */}
            <path d="M 195,50 L 215,65" stroke="#be123c" strokeWidth="9" fill="none" />
            <text x="135" y="45" fill="#fda4af" fontSize="9" fontWeight="bold">Tronco ACE (1-2 cm)</text>

            {/* Ramo Circunflexo (ACx) contornando a margem esquerda */}
            <path d="M 215,65 Q 260,75 285,110" stroke="#f43f5e" strokeWidth="6" fill="none" />
            <text x="260" y="70" fill="#f43f5e" fontSize="9">R. Circunflexo (ACx)</text>

            {/* GRANDE VEIA CARDÍACA (Azul acompanhando no sulco) */}
            <path d="M 222,70 Q 212,160 216,280" stroke="#3b82f6" strokeWidth="6" fill="none" opacity="0.8" />
            <text x="230" y="160" fill="#60a5fa" fontSize="9">Grande V. Cardíaca</text>

            {/* RAMO INTERVENTRICULAR ANTERIOR (ADA) - Vermelho central descendo */}
            <path d="M 215,65 Q 205,160 210,285" stroke="#e11d48" strokeWidth="8" fill="none" strokeLinecap="round" />
            
            {/* Ramos diagonais (para a parede livre do VE) */}
            <path d="M 208,120 Q 235,140 255,155" stroke="#e11d48" strokeWidth="4" fill="none" />
            <path d="M 209,175 Q 230,195 245,210" stroke="#e11d48" strokeWidth="3.5" fill="none" />
            <text x="245" y="145" fill="#fda4af" fontSize="8">R. Diagonais</text>

            {/* Ramos septais (afundando no septo) */}
            <path d="M 207,135 L 185,145" stroke="#be123c" strokeWidth="3" fill="none" />
            <path d="M 208,190 L 190,200" stroke="#be123c" strokeWidth="3" fill="none" />

            {/* Alfinete na ADA */}
            {showPin && (
              <g>
                <circle cx="207" cy="145" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                <line x1="207" y1="145" x2="209" y2="160" stroke="#ffffff" strokeWidth="2" />
                <rect x="25" y="95" width="165" height="42" rx="6" fill="#1e1b4b" stroke="#f43f5e" strokeWidth="1" />
                <text x="33" y="112" fill="#fda4af" fontSize="9" fontWeight="bold">ESTAÇÃO 7 · UFPB</text>
                <text x="33" y="125" fill="#ffffff" fontSize="10" fontWeight="bold">A. Descendente Anterior</text>
                <text x="33" y="134" fill="#cbd5e1" fontSize="8">(Ramo IV Anterior da ACE)</text>
                <line x1="190" y1="115" x2="200" y2="145" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3 2" />
              </g>
            )}
          </svg>
        );

      // =========================================================================
      // 8 & 12. ARCO AÓRTICO & TRONCO BRAQUIOCEFÁLICO (Estações 8, 12, 15, 16)
      // =========================================================================
      case 'arco-aortico':
      case 'aorta':
      case 'tronco-braquiocefalico':
      case 'arteria-carotida-comum':
      case 'arteria-subclavia':
      case '8':
      case '12':
      case '15':
      case '16':
        return (
          <svg viewBox="0 0 400 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="aorta_grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#be123c" />
                <stop offset="50%" stopColor="#f43f5e" />
                <stop offset="100%" stopColor="#9f1239" />
              </linearGradient>
            </defs>
            <rect width="400" height="320" rx="16" fill="#090d16" />

            {/* Traqueia de fundo */}
            <rect x="200" y="15" width="40" height="150" fill="#334155" opacity="0.3" rx="4" />
            <line x1="200" y1="35" x2="240" y2="35" stroke="#64748b" strokeWidth="2" opacity="0.4" />
            <line x1="200" y1="55" x2="240" y2="55" stroke="#64748b" strokeWidth="2" opacity="0.4" />
            <line x1="200" y1="75" x2="240" y2="75" stroke="#64748b" strokeWidth="2" opacity="0.4" />

            {/* Aorta Ascendente, Arco Aórtico e Aorta Descendente */}
            <path d="M 140,290 L 150,160 Q 160,70 230,70 Q 300,70 300,160 L 300,290" stroke="url(#aorta_grad)" strokeWidth="36" fill="none" strokeLinecap="round" />
            
            {/* Tronco Pulmonar cruzando por baixo */}
            <path d="M 120,220 Q 180,180 230,175" stroke="#2563eb" strokeWidth="22" fill="none" opacity="0.8" />
            <text x="75" y="245" fill="#60a5fa" fontSize="10">Tronco Pulmonar</text>

            {/* Ligamento Arterial (na concavidade do arco conectando à artéria pulmonar E) */}
            <path d="M 235,105 L 235,160" stroke="#f8fafc" strokeWidth="5" strokeDasharray="3 1" />
            <text x="242" y="140" fill="#f8fafc" fontSize="9" fontWeight="bold">Lig. Arterial</text>

            {/* OS 3 RAMOS SUPRA-AÓRTICOS (Da Direita para a Esquerda): */}
            {/* 1º Ramo: Tronco Braquiocefálico (TBC) - Mais calibroso */}
            <path d="M 175,85 L 140,15" stroke="url(#aorta_grad)" strokeWidth="18" fill="none" strokeLinecap="round" />
            <text x="70" y="20" fill="#fda4af" fontSize="10" fontWeight="bold">1. Tronco Braquiocefálico</text>

            {/* 2º Ramo: Artéria Carótida Comum Esquerda */}
            <path d="M 215,70 L 210,15" stroke="url(#aorta_grad)" strokeWidth="12" fill="none" strokeLinecap="round" />
            <text x="180" y="10" fill="#fda4af" fontSize="9" fontWeight="bold">2. Carótida Comum E.</text>

            {/* 3º Ramo: Artéria Subclávia Esquerda */}
            <path d="M 255,75 L 275,15" stroke="url(#aorta_grad)" strokeWidth="13" fill="none" strokeLinecap="round" />
            <text x="270" y="20" fill="#fda4af" fontSize="10" fontWeight="bold">3. Subclávia E.</text>

            {/* Alfinete no Arco / Tronco */}
            {showPin && (
              <g>
                <circle cx="170" cy="80" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                <line x1="170" y1="80" x2="168" y2="95" stroke="#ffffff" strokeWidth="2" />
                <rect x="20" y="100" width="145" height="35" rx="6" fill="#1e1b4b" stroke="#f43f5e" strokeWidth="1" />
                <text x="28" y="115" fill="#fda4af" fontSize="9" fontWeight="bold">ESTAÇÃO 8 / 12 · UFPB</text>
                <text x="28" y="127" fill="#ffffff" fontSize="10" fontWeight="bold">Arco Aórtico / TBC</text>
              </g>
            )}

            {/* Legenda dos ramos */}
            <rect x="20" y="275" width="360" height="32" rx="6" fill="#0f172a" fillOpacity="0.8" stroke="#334155" strokeWidth="1" />
            <text x="30" y="295" fill="#f87171" fontSize="9" fontWeight="bold">Ordem da D para E: 1º Tronco Braquiocefálico · 2º Carótida Comum E · 3º Subclávia E</text>
          </svg>
        );

      // =========================================================================
      // 9. VALVA MITRAL (Estação 9)
      // =========================================================================
      case 'valva-mitral':
      case '9':
        return (
          <svg viewBox="0 0 400 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="320" rx="16" fill="#0f172a" />
            <circle cx="200" cy="160" r="105" fill="#1e293b" stroke="#475569" strokeWidth="4" />
            <text x="140" y="45" fill="#94a3b8" fontSize="12" fontWeight="bold">Óstio Atrioventricular Esquerdo</text>

            {/* Anel Fibroso */}
            <circle cx="200" cy="160" r="95" fill="none" stroke="#64748b" strokeWidth="8" />

            {/* 2 CÚSPIDES ROBUSTAS (Mitra Papal) */}
            {/* Cúspide Anterior (Grande e semilunar) */}
            <path d="M 120,150 Q 200,195 280,150 Q 200,90 120,150 Z" fill="#f8fafc" fillOpacity="0.9" stroke="#cbd5e1" strokeWidth="2.5" />
            <text x="155" y="135" fill="#0f172a" fontSize="11" fontWeight="bold">Cúspide Anterior (Ampla)</text>

            {/* Cúspide Posterior */}
            <path d="M 120,150 Q 200,195 280,150 Q 200,240 120,150 Z" fill="#f1f5f9" fillOpacity="0.85" stroke="#cbd5e1" strokeWidth="2" />
            <text x="155" y="210" fill="#0f172a" fontSize="10" fontWeight="bold">Cúspide Posterior</text>

            {/* 2 Músculos papilares gigantes do VE */}
            <circle cx="140" cy="250" r="18" fill="#7f1d1d" stroke="#b91c1c" strokeWidth="2" />
            <text x="95" y="295" fill="#fca5a5" fontSize="9" fontWeight="bold">Papilar Anterolateral</text>
            <circle cx="260" cy="250" r="18" fill="#7f1d1d" stroke="#b91c1c" strokeWidth="2" />
            <text x="225" y="295" fill="#fca5a5" fontSize="9" fontWeight="bold">Papilar Posteromedial</text>

            {/* Alfinete */}
            {showPin && (
              <g>
                <circle cx="200" cy="160" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                <rect x="230" y="70" width="150" height="35" rx="6" fill="#1e1b4b" stroke="#818cf8" strokeWidth="1" />
                <text x="238" y="85" fill="#c7d2fe" fontSize="9" fontWeight="bold">ESTAÇÃO 9 · UFPB</text>
                <text x="238" y="97" fill="#ffffff" fontSize="10" fontWeight="bold">Valva Mitral (2 Cúspides)</text>
              </g>
            )}
          </svg>
        );

      // =========================================================================
      // 10. FOSSA OVAL E LIMBO (Estação 10)
      // =========================================================================
      case 'fossa-oval':
      case '10':
        return (
          <svg viewBox="0 0 400 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="320" rx="16" fill="#090d16" />

            {/* Parede do Septo Interatrial no Átrio Direito */}
            <rect x="60" y="30" width="280" height="260" rx="16" fill="#1e293b" stroke="#334155" strokeWidth="3" />
            <text x="120" y="65" fill="#94a3b8" fontSize="13" fontWeight="bold">Septo Interatrial (Átrio Direito)</text>

            {/* Limbo da Fossa Oval (Rebordo muscular arqueado proeminente) */}
            <ellipse cx="200" cy="165" rx="65" ry="50" fill="#334155" stroke="#f43f5e" strokeWidth="8" />
            <text x="145" y="105" fill="#fda4af" fontSize="11" fontWeight="bold">Limbo da Fossa Oval</text>
            <path d="M 200,108 L 200,120" stroke="#fda4af" strokeWidth="2" />

            {/* Fossa Oval (Depressão central fina e translúcida) */}
            <ellipse cx="200" cy="165" rx="50" ry="36" fill="#475569" stroke="#cbd5e1" strokeWidth="1.5" />
            <ellipse cx="200" cy="165" rx="40" ry="28" fill="#64748b" opacity="0.6" />
            <text x="165" y="168" fill="#ffffff" fontSize="12" fontWeight="bold">FOSSA OVAL</text>
            <text x="145" y="182" fill="#cbd5e1" fontSize="9">(Fundo semitranslúcido)</text>

            {/* Óstio do seio coronário vizinho abaixo */}
            <circle cx="200" cy="250" r="14" fill="#0f172a" stroke="#60a5fa" strokeWidth="2" />
            <text x="135" y="280" fill="#93c5fd" fontSize="9">Óstio do Seio Coronário</text>

            {/* Alfinete na Fossa Oval */}
            {showPin && (
              <g>
                <circle cx="200" cy="165" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                <rect x="235" y="195" width="145" height="35" rx="6" fill="#1e1b4b" stroke="#38bdf8" strokeWidth="1" />
                <text x="243" y="210" fill="#38bdf8" fontSize="9" fontWeight="bold">ESTAÇÃO 10 · UFPB</text>
                <text x="243" y="222" fill="#ffffff" fontSize="10" fontWeight="bold">Fossa Oval (Centro)</text>
              </g>
            )}
          </svg>
        );

      // =========================================================================
      // 11 & 17. SEIO CORONÁRIO (Estação 11 & 17)
      // =========================================================================
      case 'seio-coronario':
      case '11':
      case '17':
        return (
          <svg viewBox="0 0 400 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="320" rx="16" fill="#090d16" />

            {/* Face posterior do coração (sulco atrioventricular posterior) */}
            <path d="M 80,60 Q 200,40 320,60 L 320,260 Q 200,290 80,260 Z" fill="#1e293b" stroke="#334155" strokeWidth="2" />
            <text x="130" y="90" fill="#94a3b8" fontSize="12" fontWeight="bold">Face Posterior do Coração</text>

            {/* Sulco Coronário com o Seio Coronário dilatado */}
            <path d="M 100,160 Q 180,150 260,170" stroke="#1d4ed8" strokeWidth="22" fill="none" strokeLinecap="round" />
            <text x="140" y="145" fill="#60a5fa" fontSize="12" fontWeight="bold">Seio Coronário (Dilatado)</text>

            {/* Grande Veia Cardíaca confluindo da esquerda */}
            <path d="M 60,110 Q 80,140 110,158" stroke="#3b82f6" strokeWidth="10" fill="none" />
            <text x="35" y="100" fill="#93c5fd" fontSize="9">Grande V. Cardíaca</text>

            {/* Veia Cardíaca Média confluindo de baixo */}
            <path d="M 190,260 L 195,175" stroke="#3b82f6" strokeWidth="8" fill="none" />
            <text x="205" y="235" fill="#93c5fd" fontSize="9">V. Cardíaca Média</text>

            {/* Deságue no Átrio Direito com a Valva de Tebésio */}
            <ellipse cx="265" cy="172" rx="14" ry="9" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
            <path d="M 260,165 Q 275,172 260,179" stroke="#ffffff" strokeWidth="2" fill="none" />
            <text x="285" y="175" fill="#38bdf8" fontSize="9" fontWeight="bold">Valva de Tebésio</text>

            {/* Alfinete */}
            {showPin && (
              <g>
                <circle cx="210" cy="160" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                <rect x="230" y="80" width="150" height="35" rx="6" fill="#1e1b4b" stroke="#38bdf8" strokeWidth="1" />
                <text x="238" y="95" fill="#38bdf8" fontSize="9" fontWeight="bold">ESTAÇÃO 11 · UFPB</text>
                <text x="238" y="107" fill="#ffffff" fontSize="10" fontWeight="bold">Seio Coronário</text>
              </g>
            )}
          </svg>
        );

      // =========================================================================
      // 13. VEIA SAFENA PARVA (Estação 13)
      // =========================================================================
      case 'veia-safena-parva':
      case 'safena-parva':
      case '13':
        return (
          <svg viewBox="0 0 400 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="vsp_vein" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1d4ed8" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1e40af" />
              </linearGradient>
            </defs>
            <rect width="400" height="320" rx="16" fill="#090d16" />

            {/* Silhueta posterior da perna e panturrilha */}
            <path d="M 140,20 Q 110,120 130,220 L 150,280 L 250,280 L 270,220 Q 290,120 260,20 Z" fill="#1e293b" opacity="0.4" />
            <text x="130" y="40" fill="#94a3b8" fontSize="11" fontWeight="bold">Panturrilha Posterior (M. Gastrocnêmio)</text>

            {/* Maléolo Lateral (Osso na face lateral / direita da imagem) */}
            <circle cx="265" cy="245" r="14" fill="#94a3b8" stroke="#64748b" strokeWidth="2" />
            <text x="250" y="275" fill="#cbd5e1" fontSize="10" fontWeight="bold">Maléolo Lateral</text>

            {/* VEIA SAFENA PARVA (Passa POSTERIOR ao maléolo lateral!) */}
            <path d="M 285,270 Q 282,245 260,215 Q 210,160 200,90 L 200,30" stroke="url(#vsp_vein)" strokeWidth="8" fill="none" strokeLinecap="round" />

            {/* Nervo Sural acompanhando em amarelo */}
            <path d="M 275,270 Q 272,245 252,215 Q 202,160 192,90 L 192,30" stroke="#facc15" strokeWidth="3" strokeDasharray="5 2" fill="none" />
            <text x="90" y="110" fill="#fde047" fontSize="9">Nervo Sural (satélite)</text>

            {/* Deságue na fossa poplítea na Veia Poplítea */}
            <rect x="180" y="20" width="40" height="15" fill="#1e40af" rx="3" />
            <text x="130" y="18" fill="#93c5fd" fontSize="9">Deságue na V. Poplítea</text>

            {/* Regra de ouro da Safena Parva */}
            <rect x="25" y="160" width="160" height="50" rx="6" fill="#1e1b4b" stroke="#38bdf8" strokeWidth="1" />
            <text x="32" y="177" fill="#38bdf8" fontSize="9" fontWeight="bold">REGRA DE BANCADA:</text>
            <text x="32" y="190" fill="#ffffff" fontSize="10" fontWeight="bold">Passa OBRIGATÓRIA</text>
            <text x="32" y="202" fill="#fde047" fontSize="10">ATRÁS do maléolo lateral!</text>

            {/* Alfinete */}
            {showPin && (
              <g>
                <circle cx="265" cy="225" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                <rect x="235" y="100" width="150" height="35" rx="6" fill="#1e1b4b" stroke="#38bdf8" strokeWidth="1" />
                <text x="243" y="115" fill="#38bdf8" fontSize="9" fontWeight="bold">ESTAÇÃO 13 · UFPB</text>
                <text x="243" y="127" fill="#ffffff" fontSize="10" fontWeight="bold">Veia Safena Parva</text>
              </g>
            )}
          </svg>
        );

      // =========================================================================
      // 14. ARTÉRIA TIBIAL POSTERIOR (Estação 14)
      // =========================================================================
      case 'arteria-tibial-posterior':
      case 'tibial-posterior':
      case 'arterias-tibial-anterior-posterior':
      case '14':
        return (
          <svg viewBox="0 0 400 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="320" rx="16" fill="#090d16" />

            {/* Tornozelo Medial (Túnel do Tarso) */}
            <path d="M 120,20 L 120,200 Q 120,250 260,260 L 280,280 L 100,280 Z" fill="#1e293b" opacity="0.4" />
            <text x="130" y="50" fill="#94a3b8" fontSize="12" fontWeight="bold">Túnel do Tarso (Medial)</text>

            {/* Maléolo Medial (Osso) */}
            <circle cx="160" cy="180" r="22" fill="#cbd5e1" stroke="#64748b" strokeWidth="2.5" />
            <text x="120" y="185" fill="#0f172a" fontSize="9" fontWeight="bold">Maléolo</text>
            <text x="123" y="195" fill="#0f172a" fontSize="8">Medial</text>

            {/* Tendão do Tibial Posterior & Flexor Longo dos Dedos (Anteriores à artéria) */}
            <path d="M 188,20 Q 188,180 230,260" stroke="#94a3b8" strokeWidth="6" fill="none" />
            <text x="195" y="80" fill="#cbd5e1" fontSize="8">Tendões Flexores</text>

            {/* ARTÉRIA TIBIAL POSTERIOR (Passa ATRÁS do maléolo medial!) */}
            <path d="M 210,20 Q 210,180 250,260" stroke="#e11d48" strokeWidth="8" fill="none" strokeLinecap="round" />
            <text x="220" y="140" fill="#fca5a5" fontSize="10" fontWeight="bold">A. Tibial Posterior</text>

            {/* Nervo Tibial (satélite posterior à artéria) */}
            <path d="M 225,20 Q 225,180 265,260" stroke="#facc15" strokeWidth="5" fill="none" strokeDasharray="5 2" />
            <text x="240" y="100" fill="#fde047" fontSize="8">Nervo Tibial</text>

            {/* Veia Safena Magna (na frente do maléolo para contraste!) */}
            <path d="M 135,20 Q 135,180 160,260" stroke="#3b82f6" strokeWidth="5" fill="none" opacity="0.6" />
            <text x="75" y="140" fill="#60a5fa" fontSize="8">V. Safena Magna (Frente)</text>

            {/* Alfinete na Tibial Posterior */}
            {showPin && (
              <g>
                <circle cx="210" cy="180" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                <rect x="235" y="170" width="155" height="42" rx="6" fill="#1e1b4b" stroke="#f43f5e" strokeWidth="1" />
                <text x="243" y="187" fill="#fda4af" fontSize="9" fontWeight="bold">ESTAÇÃO 14 · UFPB</text>
                <text x="243" y="199" fill="#ffffff" fontSize="10" fontWeight="bold">Artéria Tibial Posterior</text>
                <text x="243" y="208" fill="#cbd5e1" fontSize="8">(Atrás do maléolo medial)</text>
              </g>
            )}
          </svg>
        );

      // =========================================================================
      // 17. LIGAMENTO ARTERIAL (Estação 17)
      // =========================================================================
      case 'ligamento-arterial':
        return (
          <svg viewBox="0 0 400 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="320" rx="16" fill="#090d16" />
            <text x="110" y="35" fill="#94a3b8" fontSize="12" fontWeight="bold">Concavidade do Arco da Aorta</text>

            {/* Arco da Aorta (em cima) */}
            <path d="M 120,200 Q 150,70 260,70 Q 320,70 330,200" stroke="#be123c" strokeWidth="32" fill="none" />
            <text x="180" y="60" fill="#fda4af" fontSize="11" fontWeight="bold">Arco da Aorta</text>

            {/* Artéria Pulmonar Esquerda (em baixo) */}
            <path d="M 100,230 Q 190,190 280,185" stroke="#1d4ed8" strokeWidth="24" fill="none" />
            <text x="90" y="255" fill="#93c5fd" fontSize="10" fontWeight="bold">Artéria Pulmonar Esquerda</text>

            {/* LIGAMENTO ARTERIAL (Fita fibrosa conectando os dois vasos gigantes) */}
            <rect x="220" y="95" width="14" height="75" rx="3" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.5" />
            <text x="245" y="135" fill="#ffffff" fontSize="11" fontWeight="bold">LIGAMENTO ARTERIAL</text>
            <text x="245" y="148" fill="#94a3b8" fontSize="8">(Remanescente do canal arterial)</text>

            {/* Nervo Laríngeo Recorrente Esquerdo curvando por baixo */}
            <path d="M 215,60 L 210,180 Q 212,190 225,188 L 245,180 L 240,60" stroke="#facc15" strokeWidth="3" fill="none" strokeDasharray="4 2" />
            <text x="235" y="215" fill="#fde047" fontSize="8">N. Laríngeo Recorrente E.</text>

            {/* Alfinete */}
            {showPin && (
              <g>
                <circle cx="227" cy="130" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                <rect x="25" y="110" width="150" height="35" rx="6" fill="#1e1b4b" stroke="#f8fafc" strokeWidth="1" />
                <text x="33" y="125" fill="#c7d2fe" fontSize="9" fontWeight="bold">ESTAÇÃO 17 · UFPB</text>
                <text x="33" y="137" fill="#ffffff" fontSize="10" fontWeight="bold">Ligamento Arterial</text>
              </g>
            )}
          </svg>
        );

      // =========================================================================
      // 18. ARTÉRIA RADIAL (Estação 18)
      // =========================================================================
      case 'arteria-radial':
      case '18':
        return (
          <svg viewBox="0 0 400 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="320" rx="16" fill="#090d16" />
            <text x="120" y="35" fill="#94a3b8" fontSize="12" fontWeight="bold">Antebraço Ântero-Lateral & Punho</text>

            {/* Osso Rádio em cinza */}
            <path d="M 120,40 L 130,220 Q 135,260 110,270 L 80,270 L 95,40 Z" fill="#475569" opacity="0.4" />
            <text x="90" y="150" fill="#94a3b8" fontSize="9">Osso Rádio</text>

            {/* ARTÉRIA RADIAL descendo na goteira do pulso */}
            <path d="M 180,20 Q 155,140 145,230 Q 140,260 115,280" stroke="#e11d48" strokeWidth="9" fill="none" strokeLinecap="round" />
            
            {/* Tendão do M. Braquiorradial (lateral) */}
            <path d="M 115,100 L 125,240" stroke="#94a3b8" strokeWidth="6" fill="none" />
            <text x="45" y="210" fill="#cbd5e1" fontSize="8">M. Braquiorradial</text>

            {/* Tendão do Flexor Radial do Carpo (medial) */}
            <path d="M 175,100 L 165,240" stroke="#94a3b8" strokeWidth="6" fill="none" />
            <text x="175" y="210" fill="#cbd5e1" fontSize="8">M. Flexor Radial Carpo</text>

            {/* Goteira do Pulso Radial (entre os dois tendões) */}
            <rect x="125" y="215" width="40" height="25" fill="#f43f5e" fillOpacity="0.2" stroke="#f43f5e" strokeDasharray="3 2" />
            <text x="175" y="245" fill="#fda4af" fontSize="9" fontWeight="bold">Goteira do Pulso</text>

            {/* Tabaqueira anatômica na mão */}
            <circle cx="115" cy="285" r="14" fill="#334155" stroke="#cbd5e1" />
            <text x="40" y="300" fill="#cbd5e1" fontSize="8">Tabaqueira Anatômica</text>

            {/* Alfinete na artéria radial */}
            {showPin && (
              <g>
                <circle cx="145" cy="225" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                <rect x="235" y="120" width="150" height="42" rx="6" fill="#1e1b4b" stroke="#f43f5e" strokeWidth="1" />
                <text x="243" y="137" fill="#fda4af" fontSize="9" fontWeight="bold">ESTAÇÃO 18 · UFPB</text>
                <text x="243" y="149" fill="#ffffff" fontSize="10" fontWeight="bold">Artéria Radial</text>
                <text x="243" y="158" fill="#cbd5e1" fontSize="8">(Goteira do pulso periférico)</text>
              </g>
            )}
          </svg>
        );

      // =========================================================================
      // 19. ARTÉRIA POPLÍTEA (Estação 19)
      // =========================================================================
      case 'arteria-poplitea':
      case 'poplitea':
      case '19':
        return (
          <svg viewBox="0 0 400 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="320" rx="16" fill="#090d16" />
            <text x="130" y="35" fill="#94a3b8" fontSize="12" fontWeight="bold">Fossa Poplítea (Posterior do Joelho)</text>

            {/* Losango da Fossa Poplítea */}
            <polygon points="200,50 310,160 200,270 90,160" fill="#1e293b" stroke="#334155" strokeWidth="2" />

            {/* 3 Camadas de profundidade na Fossa Poplítea (N-V-A): */}
            {/* 1. ARTÉRIA POPLÍTEA (Mais PROFUNDA · colada no osso) */}
            <path d="M 185,50 L 210,270" stroke="#e11d48" strokeWidth="12" fill="none" />
            <text x="100" y="210" fill="#fda4af" fontSize="10" fontWeight="bold">A. Poplítea (Mais profunda!)</text>

            {/* 2. VEIA POPLÍTEA (Intermediária) */}
            <path d="M 195,50 L 202,270" stroke="#2563eb" strokeWidth="10" fill="none" opacity="0.85" />
            <text x="220" y="200" fill="#93c5fd" fontSize="9">V. Poplítea (Média)</text>

            {/* 3. NERVO TIBIAL (Mais SUPERFICIAL) */}
            <path d="M 210,50 L 195,270" stroke="#facc15" strokeWidth="6" fill="none" strokeDasharray="6 2" />
            <text x="215" y="100" fill="#fde047" fontSize="9">N. Tibial (Superficial)</text>

            {/* Dica de Bancada UFPB */}
            <rect x="25" y="265" width="350" height="35" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1" />
            <text x="35" y="285" fill="#fde047" fontSize="9" fontWeight="bold">Regra de Profundidade: N. Tibial (superficial) ➔ V. Poplítea ➔ A. Poplítea (funda)</text>

            {/* Alfinete na Artéria Poplítea */}
            {showPin && (
              <g>
                <circle cx="200" cy="160" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                <rect x="235" y="120" width="150" height="35" rx="6" fill="#1e1b4b" stroke="#f43f5e" strokeWidth="1" />
                <text x="243" y="135" fill="#fda4af" fontSize="9" fontWeight="bold">ESTAÇÃO 19 · UFPB</text>
                <text x="243" y="147" fill="#ffffff" fontSize="10" fontWeight="bold">Artéria Poplítea</text>
              </g>
            )}
          </svg>
        );

      // =========================================================================
      // 20. ARTÉRIA CORONÁRIA DIREITA (Estação 20)
      // =========================================================================
      case 'arteria-coronaria-direita':
      case 'coronaria-direita':
      case 'acd':
      case '20':
        return (
          <svg viewBox="0 0 400 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="320" rx="16" fill="#090d16" />
            <text x="110" y="35" fill="#94a3b8" fontSize="12" fontWeight="bold">Sulco Atrioventricular Direito (ACD)</text>

            {/* Coração anterior e sulco atrioventricular direito */}
            <path d="M 120,60 Q 70,160 170,270 Q 230,290 280,240 Q 320,120 220,60 Z" fill="#1e293b" stroke="#334155" strokeWidth="2" />
            <text x="120" y="110" fill="#64748b" fontSize="11">Átrio Direito</text>
            <text x="180" y="210" fill="#64748b" fontSize="11">Ventrículo Direito</text>

            {/* ARTÉRIA CORONÁRIA DIREITA contornando o sulco */}
            <path d="M 180,65 Q 140,110 145,180 Q 150,230 200,260" stroke="#e11d48" strokeWidth="8" fill="none" strokeLinecap="round" />
            <text x="60" y="160" fill="#fda4af" fontSize="10" fontWeight="bold">A. Coronária D.</text>

            {/* Ramo Marginal Direito correndo na borda aguda */}
            <path d="M 145,180 Q 165,210 210,245" stroke="#f43f5e" strokeWidth="5" fill="none" />
            <text x="155" y="215" fill="#f43f5e" fontSize="9">R. Marginal Direito</text>

            {/* Alfinete na ACD */}
            {showPin && (
              <g>
                <circle cx="145" cy="150" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                <rect x="235" y="140" width="150" height="42" rx="6" fill="#1e1b4b" stroke="#f43f5e" strokeWidth="1" />
                <text x="243" y="157" fill="#fda4af" fontSize="9" fontWeight="bold">ESTAÇÃO 20 · UFPB</text>
                <text x="243" y="169" fill="#ffffff" fontSize="10" fontWeight="bold">A. Coronária Direita</text>
                <text x="243" y="178" fill="#cbd5e1" fontSize="8">(Ramo Marginal Direito)</text>
              </g>
            )}
          </svg>
        );

      // =========================================================================
      // ARTÉRIA FEMORAL (Trígono Femoral - Scarpa)
      // =========================================================================
      case 'arteria-femoral':
      case 'veia-femoral':
      case 'femoral':
        return (
          <svg viewBox="0 0 400 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="320" rx="16" fill="#090d16" />
            <text x="120" y="30" fill="#94a3b8" fontSize="12" fontWeight="bold">Trígono Femoral (Regra N-A-V)</text>

            {/* Ligamento Inguinal no topo */}
            <line x1="80" y1="60" x2="320" y2="60" stroke="#cbd5e1" strokeWidth="5" />
            <text x="140" y="52" fill="#cbd5e1" fontSize="10" fontWeight="bold">Ligamento Inguinal</text>

            {/* Limites musculares do trígono */}
            {/* M. Sartório (lateral) */}
            <path d="M 80,60 L 220,290" stroke="#475569" strokeWidth="16" fill="none" opacity="0.6" />
            <text x="75" y="130" fill="#94a3b8" fontSize="9">M. Sartório (Lateral)</text>

            {/* M. Adutor Longo (medial) */}
            <path d="M 320,60 L 220,290" stroke="#475569" strokeWidth="16" fill="none" opacity="0.6" />
            <text x="250" y="130" fill="#94a3b8" fontSize="9">M. Adutor Longo (Medial)</text>

            {/* REGRA N-A-V (De lateral para medial): */}
            {/* 1. NERVO FEMORAL (Lateral · Amarelo) */}
            <path d="M 150,60 L 165,220" stroke="#facc15" strokeWidth="6" fill="none" strokeDasharray="5 2" />
            <text x="110" y="90" fill="#fde047" fontSize="10" fontWeight="bold">N. Femoral</text>

            {/* 2. ARTÉRIA FEMORAL (Centro · Vermelho) */}
            <path d="M 195,60 L 205,270" stroke="#e11d48" strokeWidth="12" fill="none" strokeLinecap="round" />
            {/* Artéria femoral profunda saindo lateralmente */}
            <path d="M 197,110 Q 185,150 175,230" stroke="#f43f5e" strokeWidth="7" fill="none" />
            <text x="155" y="165" fill="#fda4af" fontSize="8">A. Femoral Profunda</text>
            <text x="210" y="90" fill="#fda4af" fontSize="10" fontWeight="bold">A. Femoral</text>

            {/* 3. VEIA FEMORAL (Medial · Azul) */}
            <path d="M 235,60 L 220,270" stroke="#2563eb" strokeWidth="12" fill="none" strokeLinecap="round" />
            <text x="245" y="90" fill="#93c5fd" fontSize="10" fontWeight="bold">V. Femoral</text>

            {/* Deságue da Veia Safena Magna (Hiato Safeno) */}
            <path d="M 270,160 Q 240,150 230,140" stroke="#60a5fa" strokeWidth="6" fill="none" />
            <text x="275" y="165" fill="#60a5fa" fontSize="8">V. Safena Magna</text>

            {/* Resumo da regra */}
            <rect x="25" y="275" width="350" height="30" rx="6" fill="#0f172a" stroke="#334155" strokeWidth="1" />
            <text x="35" y="295" fill="#facc15" fontSize="10" fontWeight="bold">Mnemônico de Prova: NAVe (Nervo ➔ Artéria ➔ Veia ➔ espaço)</text>

            {/* Alfinete na Artéria Femoral */}
            {showPin && (
              <g>
                <circle cx="200" cy="120" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                <rect x="245" y="180" width="145" height="35" rx="6" fill="#1e1b4b" stroke="#f43f5e" strokeWidth="1" />
                <text x="253" y="195" fill="#fda4af" fontSize="9" fontWeight="bold">ESTAÇÃO 9 / GUIA</text>
                <text x="253" y="207" fill="#ffffff" fontSize="10" fontWeight="bold">Artéria Femoral (Centro)</text>
              </g>
            )}
          </svg>
        );

      // =========================================================================
      // 4 VEIAS PULMONARES
      // =========================================================================
      case 'veias-pulmonares':
      case 'pulmonares':
        return (
          <svg viewBox="0 0 400 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="320" rx="16" fill="#090d16" />
            <text x="90" y="35" fill="#94a3b8" fontSize="12" fontWeight="bold">Face Posterior do Coração · Átrio Esquerdo</text>

            {/* Parede lisa do Átrio Esquerdo */}
            <rect x="100" y="70" width="200" height="170" rx="20" fill="#1e293b" stroke="#475569" strokeWidth="2" />
            <text x="145" y="155" fill="#cbd5e1" fontSize="13" fontWeight="bold">Átrio Esquerdo</text>
            <text x="135" y="172" fill="#94a3b8" fontSize="9">(Parede Lisa Avalvular)</text>

            {/* 4 Óstios das Veias Pulmonares (Sangue Arterial Vermelho Vivo!) */}
            {/* Veia Pulmonar Superior Direita */}
            <circle cx="125" cy="105" r="14" fill="#e11d48" stroke="#ffffff" strokeWidth="2" />
            <text x="35" y="108" fill="#fda4af" fontSize="9" fontWeight="bold">V. Pulm. Sup. D.</text>

            {/* Veia Pulmonar Inferior Direita */}
            <circle cx="125" cy="205" r="14" fill="#e11d48" stroke="#ffffff" strokeWidth="2" />
            <text x="35" y="208" fill="#fda4af" fontSize="9" fontWeight="bold">V. Pulm. Inf. D.</text>

            {/* Veia Pulmonar Superior Esquerda */}
            <circle cx="275" cy="105" r="14" fill="#e11d48" stroke="#ffffff" strokeWidth="2" />
            <text x="295" y="108" fill="#fda4af" fontSize="9" fontWeight="bold">V. Pulm. Sup. E.</text>

            {/* Veia Pulmonar Inferior Esquerda */}
            <circle cx="275" cy="205" r="14" fill="#e11d48" stroke="#ffffff" strokeWidth="2" />
            <text x="295" y="208" fill="#fda4af" fontSize="9" fontWeight="bold">V. Pulm. Inf. E.</text>

            {/* Aviso clássico */}
            <rect x="30" y="265" width="340" height="35" rx="6" fill="#1e1b4b" stroke="#e11d48" strokeWidth="1" />
            <text x="40" y="287" fill="#fda4af" fontSize="10" fontWeight="bold">Pegadinha: São veias, mas transportam sangue ARTERIAL (O₂)!</text>
          </svg>
        );

      // =========================================================================
      // DEFAULT FALLBACK SCHEMA (Coração & Grandes Vasos)
      // =========================================================================
      default:
        return (
          <svg viewBox="0 0 400 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="320" rx="16" fill="#090d16" />
            <circle cx="200" cy="160" r="90" fill="#1e293b" stroke="#334155" strokeWidth="3" />
            
            {/* Lado Direito (Azul) */}
            <path d="M 200,70 A 90 90 0 0 0 200 250 Z" fill="#1e3a8a" fillOpacity="0.4" />
            <text x="135" y="165" fill="#93c5fd" fontSize="12" fontWeight="bold">Lado D. (Venoso)</text>

            {/* Lado Esquerdo (Vermelho) */}
            <path d="M 200,70 A 90 90 0 0 1 200 250 Z" fill="#991b1b" fillOpacity="0.4" />
            <text x="215" y="165" fill="#fca5a5" fontSize="12" fontWeight="bold">Lado E. (Arterial)</text>

            {/* Aorta e Cava no topo */}
            <path d="M 220,70 L 220,25" stroke="#e11d48" strokeWidth="16" strokeLinecap="round" />
            <text x="235" y="45" fill="#fda4af" fontSize="10" fontWeight="bold">Aorta</text>

            <path d="M 180,70 L 180,25" stroke="#2563eb" strokeWidth="16" strokeLinecap="round" />
            <text x="120" y="45" fill="#93c5fd" fontSize="10" fontWeight="bold">V. Cava</text>

            <text x="110" y="285" fill="#cbd5e1" fontSize="11" fontWeight="bold">
              {structureName || 'Esquema Anatômico Cardiovascular'}
            </text>
          </svg>
        );
    }
  };

  return <div className={`relative flex items-center justify-center ${className}`}>{renderGraphic()}</div>;
};
