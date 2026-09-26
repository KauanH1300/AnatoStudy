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

    // Station numbers 1 to 24 (Direct Match)
    if (/^(estacao-?)?1$/i.test(rawId)) return 'arteria-braquial';
    if (/^(estacao-?)?2$/i.test(rawId)) return 'arteria-radial';
    if (/^(estacao-?)?3$/i.test(rawId)) return 'arteria-aorta-descendente';
    if (/^(estacao-?)?4$/i.test(rawId)) return 'arteria-aorta-ascendente';
    if (/^(estacao-?)?5$/i.test(rawId)) return 'epicardio';
    if (/^(estacao-?)?6$/i.test(rawId)) return 'musculo-pectineo';
    if (/^(estacao-?)?7$/i.test(rawId)) return 'ostio-atrio-ventricular-direito';
    if (/^(estacao-?)?8$/i.test(rawId)) return 'ostio-atrio-ventricular-esquerdo';
    if (/^(estacao-?)?9$/i.test(rawId)) return 'arco-palmar';
    if (/^(estacao-?)?10$/i.test(rawId)) return 'valva-aortica';
    if (/^(estacao-?)?11$/i.test(rawId)) return 'arteria-iliaca-comum';
    if (/^(estacao-?)?12$/i.test(rawId)) return 'veia-subclavia';
    if (/^(estacao-?)?13$/i.test(rawId)) return 'arteria-axilar';
    if (/^(estacao-?)?14$/i.test(rawId)) return 'arteria-interventricular';
    if (/^(estacao-?)?15$/i.test(rawId)) return 'pericardio-fibroso';
    if (/^(estacao-?)?16$/i.test(rawId)) return 'pericardio-seroso';
    if (/^(estacao-?)?17$/i.test(rawId)) return 'arteria-carotida-comum';
    if (/^(estacao-?)?18$/i.test(rawId)) return 'arteria-carotida-externa-interna';
    if (/^(estacao-?)?19$/i.test(rawId)) return 'auricula-direita';
    if (/^(estacao-?)?20$/i.test(rawId)) return 'musculo-papilar';
    if (/^(estacao-?)?21$/i.test(rawId)) return 'septo-interventricular';
    if (/^(estacao-?)?22$/i.test(rawId)) return 'arteria-iliaca-interna';
    if (/^(estacao-?)?23$/i.test(rawId)) return 'veia-safena-magna';
    if (/^(estacao-?)?24$/i.test(rawId)) return 'veia-safena-parva';

    // Keyword matching
    if (combined.includes('braquial')) return 'arteria-braquial';
    if (combined.includes('radial')) return 'arteria-radial';
    if (combined.includes('aorta descendente') || combined.includes('toracica descendente')) return 'arteria-aorta-descendente';
    if (combined.includes('aorta ascendente')) return 'arteria-aorta-ascendente';
    if (combined.includes('epicardio')) return 'epicardio';
    if (combined.includes('pectineo') || combined.includes('pectinado')) return 'musculo-pectineo';
    if (combined.includes('ostio') && (combined.includes('direito') || combined.includes('tricuspide'))) return 'ostio-atrio-ventricular-direito';
    if (combined.includes('ostio') && (combined.includes('esquerdo') || combined.includes('mitral'))) return 'ostio-atrio-ventricular-esquerdo';
    if (combined.includes('arco palmar') || combined.includes('palmar')) return 'arco-palmar';
    if (combined.includes('valva aortica') || combined.includes('valva da aorta')) return 'valva-aortica';
    if (combined.includes('iliaca comum')) return 'arteria-iliaca-comum';
    if (combined.includes('veia subclavia')) return 'veia-subclavia';
    if (combined.includes('arteria subclavia') || combined.includes('subclavia')) return 'arteria-subclavia';
    if (combined.includes('axilar')) return 'arteria-axilar';
    if (combined.includes('interventricular')) return 'arteria-interventricular';
    if (combined.includes('pericardio fibroso')) return 'pericardio-fibroso';
    if (combined.includes('pericardio seroso')) return 'pericardio-seroso';
    if (combined.includes('carotida externa') || combined.includes('carotida interna')) return 'arteria-carotida-externa-interna';
    if (combined.includes('carotida comum') || combined.includes('carotida')) return 'arteria-carotida-comum';
    if (combined.includes('auricula direita')) return 'auricula-direita';
    if (combined.includes('auricula esquerda') || combined.includes('auricula')) return 'auricula-direita';
    if (combined.includes('papilar') || combined.includes('papilares') || combined.includes('cordas')) return 'musculo-papilar';
    if (combined.includes('septo interventricular') || combined.includes('septo')) return 'septo-interventricular';
    if (combined.includes('iliaca interna') || combined.includes('hipogastrica')) return 'arteria-iliaca-interna';
    if (combined.includes('safena magna')) return 'veia-safena-magna';
    if (combined.includes('safena parva')) return 'veia-safena-parva';
    if (combined.includes('arco') || combined.includes('aorta')) return 'arteria-aorta-ascendente';

    return rawId.toLowerCase().trim();
  };

  const normalizedId = resolveStructure(structureId, structureName);

  const renderGraphic = () => {
    switch (normalizedId) {
      // =========================================================================
      // 1. ARTÉRIA BRAQUIAL (Estação 1)
      // =========================================================================
      case 'arteria-braquial':
        return (
          <svg viewBox="0 0 400 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="320" rx="16" fill="#0f172a" />
            {/* Contorno do Braço e Fossa Cubital */}
            <path d="M 80,20 Q 75,160 110,240 L 120,300 L 280,300 Q 295,240 270,160 Q 260,80 250,20 Z" fill="#1e293b" opacity="0.6" />
            <path d="M 90,30 Q 115,120 125,190 Q 155,205 180,195 Q 160,110 145,30 Z" fill="#334155" opacity="0.8" />
            <text x="100" y="105" fill="#94a3b8" fontSize="10" fontWeight="bold">M. Bíceps Braquial</text>

            {/* Veias Satélites Braquiais (Azuis) */}
            <path d="M 188,20 Q 186,140 183,210 L 175,300" stroke="#3b82f6" strokeWidth="6" fill="none" opacity="0.75" />
            <path d="M 218,20 Q 216,140 212,210 L 222,300" stroke="#3b82f6" strokeWidth="6" fill="none" opacity="0.75" />
            <text x="228" y="70" fill="#60a5fa" fontSize="9">Vv. Braquiais satélites (colabadas)</text>

            {/* ARTÉRIA BRAQUIAL (Vermelho Vivo) */}
            <path d="M 203,20 Q 202,130 198,205" stroke="#e11d48" strokeWidth="12" fill="none" strokeLinecap="round" />
            <ellipse cx="203" cy="22" rx="6" ry="3" fill="#fda4af" stroke="#be123c" strokeWidth="1.5" />
            
            {/* Bifurcação no colo do rádio: Radial e Ulnar */}
            <path d="M 198,205 Q 185,240 155,300" stroke="#e11d48" strokeWidth="8" fill="none" />
            <text x="120" y="285" fill="#f43f5e" fontSize="10" fontWeight="bold">A. Radial</text>
            <path d="M 198,205 Q 208,240 235,300" stroke="#e11d48" strokeWidth="9" fill="none" />
            <text x="240" y="285" fill="#f43f5e" fontSize="10" fontWeight="bold">A. Ulnar</text>

            {/* Nervo Mediano (Amarelo cruzando de lateral para medial) */}
            <path d="M 175,20 Q 185,110 202,150 Q 220,195 215,300" stroke="#eab308" strokeWidth="7" fill="none" strokeDasharray="6 2" />
            <text x="215" y="130" fill="#fde047" fontSize="10" fontWeight="bold">N. Mediano (cruza em X)</text>

            {/* Alfinete de Prova */}
            {showPin && (
              <g>
                <circle cx="198" cy="115" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.5))" />
                <line x1="198" y1="115" x2="201" y2="128" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                <rect x="235" y="98" width="145" height="32" rx="6" fill="#1e1b4b" stroke="#818cf8" strokeWidth="1" />
                <text x="245" y="112" fill="#c7d2fe" fontSize="9" fontWeight="bold">ESTAÇÃO 1 · UFPB</text>
                <text x="245" y="124" fill="#ffffff" fontSize="10" fontWeight="bold">Artéria Braquial (luz aberta)</text>
              </g>
            )}
          </svg>
        );

      // =========================================================================
      // 2. ARTÉRIA RADIAL (Estação 2)
      // =========================================================================
      case 'arteria-radial':
        return (
          <svg viewBox="0 0 400 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="320" rx="16" fill="#0f172a" />
            {/* Contorno do Antebraço e Punho */}
            <path d="M 110,20 L 115,220 Q 120,280 80,300 L 320,300 Q 280,280 285,220 L 290,20 Z" fill="#1e293b" opacity="0.6" />
            
            {/* Tendão do Braquiorradial (Lateral - Lado do Polegar) */}
            <path d="M 130,20 L 140,240 L 135,275" stroke="#cbd5e1" strokeWidth="10" fill="none" strokeLinecap="round" />
            <text x="50" y="180" fill="#94a3b8" fontSize="9" fontWeight="bold">M. Braquiorradial (lateral)</text>

            {/* Tendão do Flexor Radial do Carpo (Medial) */}
            <path d="M 235,20 L 230,240 L 225,285" stroke="#cbd5e1" strokeWidth="10" fill="none" strokeLinecap="round" />
            <text x="240" y="180" fill="#94a3b8" fontSize="9" fontWeight="bold">M. Flexor Radial do Carpo</text>

            {/* ARTÉRIA RADIAL (Na Goteira do Pulso) */}
            <path d="M 180,20 Q 182,140 185,220 Q 187,260 160,295" stroke="#e11d48" strokeWidth="9" fill="none" />
            <ellipse cx="180" cy="22" rx="4.5" ry="2.5" fill="#fda4af" stroke="#be123c" strokeWidth="1.5" />
            <text x="195" y="240" fill="#f43f5e" fontSize="10" fontWeight="bold">Goteira do Pulso</text>

            {/* Processo Estiloide do Rádio */}
            <circle cx="120" cy="245" r="5" fill="#64748b" />
            <text x="55" y="250" fill="#64748b" fontSize="8">Estiloide do Rádio</text>

            {/* Alfinete de Prova */}
            {showPin && (
              <g>
                <circle cx="185" cy="210" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                <line x1="185" y1="210" x2="187" y2="223" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                <rect x="210" y="85" width="165" height="34" rx="6" fill="#1e1b4b" stroke="#f43f5e" strokeWidth="1" />
                <text x="220" y="99" fill="#fca5a5" fontSize="9" fontWeight="bold">ESTAÇÃO 2 · UFPB</text>
                <text x="220" y="112" fill="#ffffff" fontSize="10" fontWeight="bold">Artéria Radial (Goteira do Pulso)</text>
              </g>
            )}
          </svg>
        );

      // =========================================================================
      // 3. ARTÉRIA AORTA DESCENDENTE (Estação 3)
      // =========================================================================
      case 'arteria-aorta-descendente':
        return (
          <svg viewBox="0 0 400 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="320" rx="16" fill="#090d16" />
            
            {/* Coluna Vertebral Torácica (T4 a T12) à direita */}
            <g opacity="0.7">
              {[50, 80, 110, 140, 170, 200, 230, 260].map((y, idx) => (
                <g key={y}>
                  <rect x="230" y={y} width="75" height="24" rx="4" fill="#334155" stroke="#475569" strokeWidth="1" />
                  <text x="245" y={y + 16} fill="#94a3b8" fontSize="9" fontWeight="bold">T{idx + 4}</text>
                </g>
              ))}
              <text x="235" y="35" fill="#64748b" fontSize="10" fontWeight="bold">Coluna Torácica</text>
            </g>

            {/* ARTÉRIA AORTA DESCENDENTE (Vermelho vivo colada nas vértebras) */}
            <path d="M 160,20 L 160,300" stroke="#be123c" strokeWidth="20" strokeLinecap="round" />
            <path d="M 160,20 L 160,300" stroke="#f43f5e" strokeWidth="16" strokeLinecap="round" />
            
            {/* Artérias Intercostais Posteriores (Pares laterais) */}
            {[62, 92, 122, 152, 182, 212, 242, 272].map((y) => (
              <g key={y}>
                <line x1="160" y1={y} x2="70" y2={y} stroke="#f43f5e" strokeWidth="4" />
                <line x1="160" y1={y} x2="230" y2={y} stroke="#f43f5e" strokeWidth="4" />
              </g>
            ))}
            <text x="45" y="125" fill="#fda4af" fontSize="9">Aa. Intercostais</text>

            {/* Hiato Aórtico (Diafragma em T12) */}
            <path d="M 90,290 Q 200,280 310,290" stroke="#475569" strokeWidth="4" strokeDasharray="4 2" />
            <text x="100" y="310" fill="#94a3b8" fontSize="9">Hiato Aórtico (Diafragma T12)</text>

            {/* Alfinete de Prova */}
            {showPin && (
              <g>
                <circle cx="160" cy="155" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                <line x1="160" y1="155" x2="162" y2="170" stroke="#ffffff" strokeWidth="2.5" />
                <rect x="20" y="170" width="135" height="42" rx="6" fill="#1e1b4b" stroke="#e11d48" strokeWidth="1" />
                <text x="28" y="186" fill="#fca5a5" fontSize="9" fontWeight="bold">ESTAÇÃO 3 · UFPB</text>
                <text x="28" y="198" fill="#ffffff" fontSize="10" fontWeight="bold">Aorta Descendente</text>
                <text x="28" y="208" fill="#94a3b8" fontSize="8">(Mediastino Posterior)</text>
              </g>
            )}
          </svg>
        );

      // =========================================================================
      // 4. ARTÉRIA AORTA ASCENDENTE (Estação 4)
      // =========================================================================
      case 'arteria-aorta-ascendente':
        return (
          <svg viewBox="0 0 400 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="320" rx="16" fill="#090d16" />
            
            {/* Silhueta Cardíaca da Base */}
            <path d="M 120,260 Q 200,280 280,260 Q 300,160 270,120 Q 200,100 130,120 Q 100,160 120,260 Z" fill="#1e293b" opacity="0.6" stroke="#334155" />
            
            {/* Tronco Pulmonar (Cruzando pela frente) */}
            <path d="M 170,180 Q 150,110 110,80" stroke="#2563eb" strokeWidth="16" fill="none" opacity="0.8" />
            <text x="70" y="80" fill="#93c5fd" fontSize="9" fontWeight="bold">Tronco Pulmonar</text>

            {/* ARTÉRIA AORTA ASCENDENTE (Vermelho vivo emergindo do VE) */}
            <path d="M 205,210 Q 210,140 215,80" stroke="#be123c" strokeWidth="24" strokeLinecap="round" />
            <path d="M 205,210 Q 210,140 215,80" stroke="#f43f5e" strokeWidth="20" strokeLinecap="round" />
            
            {/* Bulbo Aórtico e Seios de Valsalva */}
            <ellipse cx="205" cy="205" rx="15" ry="10" fill="#e11d48" stroke="#be123c" strokeWidth="2" />
            
            {/* Emergência das Artérias Coronárias na Raiz */}
            <path d="M 192,205 Q 170,215 155,245" stroke="#ef4444" strokeWidth="4" fill="none" />
            <text x="105" y="240" fill="#fca5a5" fontSize="8">Coronária E.</text>
            <path d="M 218,205 Q 240,215 255,245" stroke="#ef4444" strokeWidth="4" fill="none" />
            <text x="260" y="240" fill="#fca5a5" fontSize="8">Coronária D.</text>

            {/* Transição para o Arco Aórtico em T4 */}
            <path d="M 215,80 Q 220,40 180,30" stroke="#f43f5e" strokeWidth="18" fill="none" />
            <text x="215" y="45" fill="#fda4af" fontSize="9">Arco da Aorta (T4)</text>

            {/* Alfinete de Prova */}
            {showPin && (
              <g>
                <circle cx="210" cy="140" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                <line x1="210" y1="140" x2="212" y2="155" stroke="#ffffff" strokeWidth="2.5" />
                <rect x="235" y="120" width="150" height="38" rx="6" fill="#1e1b4b" stroke="#e11d48" strokeWidth="1" />
                <text x="243" y="135" fill="#fca5a5" fontSize="9" fontWeight="bold">ESTAÇÃO 4 · UFPB</text>
                <text x="243" y="148" fill="#ffffff" fontSize="10" fontWeight="bold">Aorta Ascendente</text>
              </g>
            )}
          </svg>
        );

      // =========================================================================
      // 5. EPICÁRDIO (Estação 5) - Camadas da Parede Cardíaca
      // =========================================================================
      case 'epicardio':
        return (
          <svg viewBox="0 0 400 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="320" rx="16" fill="#090d16" />
            
            {/* Corte em Camadas da Parede do Coração (De Fora para Dentro) */}
            {/* 1. Pericárdio Fibroso */}
            <rect x="40" y="50" width="35" height="220" rx="4" fill="#475569" stroke="#64748b" strokeWidth="1.5" />
            <text x="48" y="285" fill="#94a3b8" fontSize="9" fontWeight="bold">Fibroso</text>

            {/* 2. Lâmina Parietal do Seroso */}
            <rect x="80" y="50" width="10" height="220" rx="2" fill="#38bdf8" opacity="0.8" />
            <text x="75" y="295" fill="#38bdf8" fontSize="8">Parietal</text>

            {/* 3. Cavidade Pericárdica (Espaço com Líquido) */}
            <rect x="95" y="50" width="20" height="220" fill="#0284c7" opacity="0.3" stroke="#0284c7" strokeDasharray="3 3" />
            <text x="88" y="42" fill="#38bdf8" fontSize="9" fontWeight="bold">Cavidade Pericárdica</text>

            {/* 4. EPICÁRDIO (LÂMINA VISCERAL DO SEROSO) - Destaque Principal */}
            <rect x="120" y="50" width="18" height="220" rx="3" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" />
            <ellipse cx="129" cy="110" rx="6" ry="12" fill="#ef4444" />
            <text x="129" y="113" fill="#ffffff" fontSize="7" fontWeight="bold">Cor</text>
            <text x="110" y="285" fill="#fbbf24" fontSize="10" fontWeight="bold">Epicárdio</text>

            {/* 5. Miocárdio (Músculo Grosso Vermelho) */}
            <rect x="145" y="50" width="160" height="220" rx="4" fill="#991b1b" stroke="#b91c1c" strokeWidth="2" />
            <text x="195" y="160" fill="#fca5a5" fontSize="16" fontWeight="bold">MIOCÁRDIO</text>
            <text x="185" y="180" fill="#f87171" fontSize="10">(Músculo Cardíaco Espesso)</text>

            {/* 6. Endocárdio */}
            <rect x="310" y="50" width="12" height="220" rx="2" fill="#fbcfe8" stroke="#f472b6" strokeWidth="1" />
            <text x="300" y="285" fill="#fbcfe8" fontSize="9">Endocárdio</text>

            {/* Alfinete de Prova no Epicárdio */}
            {showPin && (
              <g>
                <circle cx="129" cy="160" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                <line x1="129" y1="160" x2="131" y2="175" stroke="#ffffff" strokeWidth="2.5" />
                <rect x="70" y="190" width="195" height="38" rx="6" fill="#1e1b4b" stroke="#f59e0b" strokeWidth="1.5" />
                <text x="80" y="205" fill="#fde68a" fontSize="9" fontWeight="bold">ESTAÇÃO 5 · UFPB</text>
                <text x="80" y="218" fill="#ffffff" fontSize="10" fontWeight="bold">Epicárdio (Lâmina Visceral Serosa)</text>
              </g>
            )}
          </svg>
        );

      // =========================================================================
      // 6. MÚSCULO PECTÍNEO (Estação 6) - Interior do Átrio Direito
      // =========================================================================
      case 'musculo-pectineo':
        return (
          <svg viewBox="0 0 400 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="320" rx="16" fill="#090d16" />
            
            {/* Parede Posterior Lisa do Átrio Direito (Seio das Cavas) */}
            <path d="M 60,40 L 190,40 L 190,280 L 60,280 Z" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
            <text x="75" y="70" fill="#94a3b8" fontSize="10" fontWeight="bold">Seio Venoso (Parede Lisa)</text>
            <circle cx="120" cy="110" r="16" fill="#0284c7" />
            <text x="100" y="114" fill="#ffffff" fontSize="8" fontWeight="bold">Óstio VCS</text>
            <circle cx="120" cy="220" r="18" fill="#0284c7" />
            <text x="100" y="224" fill="#ffffff" fontSize="8" fontWeight="bold">Óstio VCI</text>

            {/* Crista Terminal (Fronteira vertical em C) */}
            <path d="M 190,40 Q 205,160 190,280" stroke="#ca8a04" strokeWidth="8" fill="none" strokeLinecap="round" />
            <text x="170" y="25" fill="#fde047" fontSize="10" fontWeight="bold">Crista Terminal</text>

            {/* Parede Anterior Trabeculada e Aurícula Direita */}
            <path d="M 190,40 L 340,40 L 340,280 L 190,280 Z" fill="#331018" stroke="#4c0519" strokeWidth="1.5" />
            <text x="215" y="65" fill="#fda4af" fontSize="10" fontWeight="bold">Parede Anterior / Aurícula</text>

            {/* MÚSCULOS PECTÍNEOS (Dentes de Pente Paralelos) */}
            {[80, 110, 140, 170, 200, 230, 260].map((y) => (
              <g key={y}>
                <line x1="195" y1={y} x2="320" y2={y} stroke="#f43f5e" strokeWidth="7" strokeLinecap="round" />
                <line x1="195" y1={y} x2="320" y2={y} stroke="#fda4af" strokeWidth="3" strokeLinecap="round" />
              </g>
            ))}

            {/* Alfinete de Prova nos Músculos Pectíneos */}
            {showPin && (
              <g>
                <circle cx="255" cy="140" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                <line x1="255" y1="140" x2="257" y2="155" stroke="#ffffff" strokeWidth="2.5" />
                <rect x="200" y="165" width="180" height="38" rx="6" fill="#1e1b4b" stroke="#f43f5e" strokeWidth="1.5" />
                <text x="208" y="180" fill="#fca5a5" fontSize="9" fontWeight="bold">ESTAÇÃO 6 · UFPB</text>
                <text x="208" y="193" fill="#ffffff" fontSize="10" fontWeight="bold">Músculos Pectíneos (em pente)</text>
              </g>
            )}
          </svg>
        );

      // =========================================================================
      // 7. ÓSTIO ÁTRIO VENTRICULAR DIREITO (Estação 7) - Valva Tricúspide
      // =========================================================================
      case 'ostio-atrio-ventricular-direito':
        return (
          <svg viewBox="0 0 400 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="320" rx="16" fill="#090d16" />
            
            {/* Assoalho do Átrio Direito */}
            <ellipse cx="200" cy="160" rx="150" ry="120" fill="#1e293b" stroke="#334155" strokeWidth="3" />
            <text x="135" y="45" fill="#94a3b8" fontSize="11" fontWeight="bold">Assoalho do Átrio Direito</text>

            {/* ANEL FIBROSO E ÓSTIO ATRIOVENTRICULAR DIREITO */}
            <ellipse cx="200" cy="165" rx="85" ry="70" fill="#0f172a" stroke="#cbd5e1" strokeWidth="4" />
            
            {/* 3 Cúspides da Valva Tricúspide */}
            {/* Cúspide Anterior */}
            <path d="M 200,165 L 140,115 A 85 70 0 0 1 260 115 Z" fill="#3b82f6" fillOpacity="0.4" stroke="#60a5fa" strokeWidth="2" />
            <text x="175" y="130" fill="#bfdbfe" fontSize="9" fontWeight="bold">C. Anterior</text>

            {/* Cúspide Posterior */}
            <path d="M 200,165 L 260,115 A 85 70 0 0 1 230 230 Z" fill="#3b82f6" fillOpacity="0.4" stroke="#60a5fa" strokeWidth="2" />
            <text x="215" y="180" fill="#bfdbfe" fontSize="9" fontWeight="bold">C. Posterior</text>

            {/* Cúspide Septal (Encostada no Septo) */}
            <path d="M 200,165 L 230,230 A 85 70 0 0 1 140 115 Z" fill="#1d4ed8" fillOpacity="0.6" stroke="#93c5fd" strokeWidth="2" />
            <text x="140" y="195" fill="#bfdbfe" fontSize="9" fontWeight="bold">C. Septal</text>

            {/* Fossa Oval ao lado para contexto */}
            <circle cx="95" cy="120" r="16" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="1.5" />
            <text x="80" y="123" fill="#bfdbfe" fontSize="7">Fossa Oval</text>

            {/* Alfinete de Prova no Óstio AV Direito */}
            {showPin && (
              <g>
                <circle cx="200" cy="165" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                <line x1="200" y1="165" x2="202" y2="180" stroke="#ffffff" strokeWidth="2.5" />
                <rect x="180" y="245" width="200" height="38" rx="6" fill="#1e1b4b" stroke="#60a5fa" strokeWidth="1.5" />
                <text x="190" y="260" fill="#bfdbfe" fontSize="9" fontWeight="bold">ESTAÇÃO 7 · UFPB</text>
                <text x="190" y="273" fill="#ffffff" fontSize="10" fontWeight="bold">Óstio Atrioventricular Direito</text>
              </g>
            )}
          </svg>
        );

      // =========================================================================
      // 8. ÓSTIO ÁTRIO VENTRICULAR ESQUERDO (Estação 8) - Valva Mitral
      // =========================================================================
      case 'ostio-atrio-ventricular-esquerdo':
        return (
          <svg viewBox="0 0 400 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="320" rx="16" fill="#090d16" />
            
            {/* Assoalho do Átrio Esquerdo com Miocárdio Espesso */}
            <ellipse cx="200" cy="160" rx="150" ry="120" fill="#1e293b" stroke="#831843" strokeWidth="4" />
            <text x="135" y="45" fill="#fbcfe8" fontSize="11" fontWeight="bold">Assoalho do Átrio Esquerdo</text>

            {/* ANEL FIBROSO E ÓSTIO ATRIOVENTRICULAR ESQUERDO */}
            <ellipse cx="200" cy="165" rx="80" ry="65" fill="#0f172a" stroke="#cbd5e1" strokeWidth="4" />
            
            {/* 2 Cúspides da Valva Mitral (Mitra Papal) */}
            {/* Cúspide Anterior (Ampla) */}
            <path d="M 125,165 A 80 65 0 0 1 275 165 Q 200 185 125 165 Z" fill="#be123c" fillOpacity="0.5" stroke="#f43f5e" strokeWidth="2" />
            <text x="175" y="145" fill="#fecdd3" fontSize="10" fontWeight="bold">C. Anterior</text>

            {/* Cúspide Posterior */}
            <path d="M 125,165 A 80 65 0 0 0 275 165 Q 200 185 125 165 Z" fill="#9f1239" fillOpacity="0.6" stroke="#f43f5e" strokeWidth="2" />
            <text x="175" y="200" fill="#fecdd3" fontSize="10" fontWeight="bold">C. Posterior</text>

            {/* 4 Óstios das Veias Pulmonares ao fundo */}
            <circle cx="85" cy="100" r="10" fill="#e11d48" />
            <circle cx="85" cy="220" r="10" fill="#e11d48" />
            <circle cx="315" cy="100" r="10" fill="#e11d48" />
            <circle cx="315" cy="220" r="10" fill="#e11d48" />
            <text x="50" y="80" fill="#fda4af" fontSize="8">Vv. Pulmonares</text>

            {/* Alfinete de Prova no Óstio AV Esquerdo */}
            {showPin && (
              <g>
                <circle cx="200" cy="165" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                <line x1="200" y1="165" x2="202" y2="180" stroke="#ffffff" strokeWidth="2.5" />
                <rect x="180" y="245" width="205" height="38" rx="6" fill="#1e1b4b" stroke="#f43f5e" strokeWidth="1.5" />
                <text x="190" y="260" fill="#fca5a5" fontSize="9" fontWeight="bold">ESTAÇÃO 8 · UFPB</text>
                <text x="190" y="273" fill="#ffffff" fontSize="10" fontWeight="bold">Óstio Atrioventricular Esquerdo</text>
              </g>
            )}
          </svg>
        );

      // =========================================================================
      // 9. ARCO PALMAR (Estação 9) - Palma da Mão Dissecada
      // =========================================================================
      case 'arco-palmar':
        return (
          <svg viewBox="0 0 400 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="320" rx="16" fill="#090d16" />
            
            {/* Contorno da Mão e Dedos */}
            <path d="M 120,300 L 120,240 Q 90,200 90,140 L 90,100 Q 90,80 110,80 Q 125,80 125,120 L 130,70 Q 130,50 150,50 Q 165,50 165,100 L 175,40 Q 175,20 195,20 Q 215,20 215,90 L 225,60 Q 225,40 245,40 Q 260,40 260,110 L 270,160 Q 310,180 320,230 L 280,300 Z" fill="#1e293b" opacity="0.6" stroke="#334155" />

            {/* Artéria Ulnar (Medial - Principal contribuinte do Arco Superficial) */}
            <path d="M 140,300 L 145,220 Q 150,180 200,170" stroke="#e11d48" strokeWidth="8" fill="none" />
            <text x="70" y="265" fill="#fca5a5" fontSize="9" fontWeight="bold">A. Ulnar</text>

            {/* Artéria Radial (Lateral) */}
            <path d="M 270,300 L 265,220 Q 255,190 230,175" stroke="#e11d48" strokeWidth="7" fill="none" />
            <text x="275" y="265" fill="#fca5a5" fontSize="9" fontWeight="bold">A. Radial</text>

            {/* ARCO PALMAR SUPERFICIAL (Alça Convexa Central) */}
            <path d="M 155,195 Q 210,150 250,185" stroke="#ef4444" strokeWidth="8" fill="none" strokeLinecap="round" />
            
            {/* Artérias Digitais Palmares Comuns para os Dedos */}
            <path d="M 175,175 L 155,80" stroke="#f43f5e" strokeWidth="4" />
            <path d="M 195,165 L 195,60" stroke="#f43f5e" strokeWidth="4" />
            <path d="M 215,168 L 240,75" stroke="#f43f5e" strokeWidth="4" />
            <text x="145" y="140" fill="#fda4af" fontSize="9" fontWeight="bold">Aa. Digitais Comuns</text>

            {/* Alfinete de Prova no Arco Palmar */}
            {showPin && (
              <g>
                <circle cx="205" cy="165" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                <line x1="205" y1="165" x2="207" y2="180" stroke="#ffffff" strokeWidth="2.5" />
                <rect x="18" y="180" width="165" height="38" rx="6" fill="#1e1b4b" stroke="#f43f5e" strokeWidth="1.5" />
                <text x="26" y="195" fill="#fca5a5" fontSize="9" fontWeight="bold">ESTAÇÃO 9 · UFPB</text>
                <text x="26" y="208" fill="#ffffff" fontSize="10" fontWeight="bold">Arco Palmar Superficial</text>
              </g>
            )}
          </svg>
        );

      // =========================================================================
      // 10. VALVA AÓRTICA (Estação 10) - 3 Cúspides e Óstios Coronários
      // =========================================================================
      case 'valva-aortica':
        return (
          <svg viewBox="0 0 400 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="320" rx="16" fill="#090d16" />
            
            {/* Raiz da Aorta Aberta Longitudinalmente */}
            <rect x="40" y="50" width="320" height="220" rx="12" fill="#1e293b" stroke="#be123c" strokeWidth="2" />
            <text x="120" y="40" fill="#fda4af" fontSize="11" fontWeight="bold">Raiz da Aorta Aberta (Seios de Valsalva)</text>

            {/* Cúspide Semilunar Direita com Óstio da Coronária Direita */}
            <path d="M 50,120 Q 95,220 145,120 Z" fill="#991b1b" stroke="#f43f5e" strokeWidth="3" />
            <circle cx="95" cy="160" r="6" fill="#fde047" stroke="#000000" strokeWidth="1.5" />
            <text x="60" y="190" fill="#fde047" fontSize="8" fontWeight="bold">Óstio Coronária D.</text>
            <text x="70" y="110" fill="#fca5a5" fontSize="9" fontWeight="bold">C. Semilunar D.</text>

            {/* Cúspide Semilunar Esquerda com Óstio da Coronária Esquerda */}
            <path d="M 150,120 Q 200,220 250,120 Z" fill="#991b1b" stroke="#f43f5e" strokeWidth="3" />
            <circle cx="200" cy="160" r="6" fill="#fde047" stroke="#000000" strokeWidth="1.5" />
            <text x="165" y="190" fill="#fde047" fontSize="8" fontWeight="bold">Óstio Coronária E.</text>
            <text x="170" y="110" fill="#fca5a5" fontSize="9" fontWeight="bold">C. Semilunar E.</text>

            {/* Cúspide Semilunar Posterior (Não-coronariana, sem óstio) */}
            <path d="M 255,120 Q 305,220 350,120 Z" fill="#7f1d1d" stroke="#f43f5e" strokeWidth="3" />
            <text x="270" y="165" fill="#94a3b8" fontSize="8">(Sem óstio coronário)</text>
            <text x="265" y="110" fill="#fca5a5" fontSize="9" fontWeight="bold">C. Semilunar Post.</text>

            {/* Nódulo de Arâncio na margem livre */}
            <circle cx="95" cy="120" r="3" fill="#ffffff" />
            <circle cx="200" cy="120" r="3" fill="#ffffff" />
            <circle cx="302" cy="120" r="3" fill="#ffffff" />
            <text x="150" y="250" fill="#cbd5e1" fontSize="9">Nódulos de Arâncio centrais nas lúnulas</text>

            {/* Alfinete de Prova na Valva Aórtica */}
            {showPin && (
              <g>
                <circle cx="200" cy="140" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                <line x1="200" y1="140" x2="202" y2="155" stroke="#ffffff" strokeWidth="2.5" />
                <rect x="180" y="260" width="200" height="38" rx="6" fill="#1e1b4b" stroke="#f43f5e" strokeWidth="1.5" />
                <text x="190" y="275" fill="#fca5a5" fontSize="9" fontWeight="bold">ESTAÇÃO 10 · UFPB</text>
                <text x="190" y="288" fill="#ffffff" fontSize="10" fontWeight="bold">Valva Aórtica (Semilunar)</text>
              </g>
            )}
          </svg>
        );

      // =========================================================================
      // 11. ARTÉRIA ILÍACA COMUM (Estação 11) - Bifurcação em L4
      // =========================================================================
      case 'arteria-iliaca-comum':
        return (
          <svg viewBox="0 0 400 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="320" rx="16" fill="#090d16" />
            
            {/* Vértebra L4 (Nível da Bifurcação) */}
            <rect x="140" y="80" width="120" height="35" rx="6" fill="#1e293b" stroke="#475569" strokeWidth="1" />
            <text x="185" y="102" fill="#94a3b8" fontSize="10" fontWeight="bold">Vértebra L4</text>

            {/* Veia Cava Inferior à Direita */}
            <path d="M 175,20 L 175,130 Q 150,220 120,300" stroke="#1d4ed8" strokeWidth="16" fill="none" opacity="0.6" />
            <text x="110" y="40" fill="#60a5fa" fontSize="9" fontWeight="bold">VCI</text>

            {/* Aorta Abdominal */}
            <path d="M 215,20 L 215,115" stroke="#be123c" strokeWidth="20" strokeLinecap="round" />
            <path d="M 215,20 L 215,115" stroke="#f43f5e" strokeWidth="16" strokeLinecap="round" />
            <text x="235" y="50" fill="#fca5a5" fontSize="10" fontWeight="bold">Aorta Abdominal</text>

            {/* BIFURCAÇÃO EM Y NAS ARTÉRIAS ILÍACAS COMUNS */}
            {/* Artéria Ilíaca Comum Direita */}
            <path d="M 215,115 Q 185,170 145,240" stroke="#f43f5e" strokeWidth="14" fill="none" strokeLinecap="round" />
            <text x="80" y="180" fill="#fca5a5" fontSize="9" fontWeight="bold">A. Ilíaca Comum D.</text>

            {/* Artéria Ilíaca Comum Esquerda */}
            <path d="M 215,115 Q 245,170 285,240" stroke="#f43f5e" strokeWidth="14" fill="none" strokeLinecap="round" />
            <text x="270" y="180" fill="#fca5a5" fontSize="9" fontWeight="bold">A. Ilíaca Comum E.</text>

            {/* Bifurcação terminal em L5-S1 em Externa e Interna */}
            <path d="M 145,240 L 110,300" stroke="#e11d48" strokeWidth="9" />
            <path d="M 145,240 L 160,300" stroke="#be123c" strokeWidth="7" />
            <path d="M 285,240 L 320,300" stroke="#e11d48" strokeWidth="9" />
            <path d="M 285,240 L 270,300" stroke="#be123c" strokeWidth="7" />

            {/* Alfinete de Prova na Ilíaca Comum */}
            {showPin && (
              <g>
                <circle cx="245" cy="165" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                <line x1="245" y1="165" x2="247" y2="180" stroke="#ffffff" strokeWidth="2.5" />
                <rect x="200" y="80" width="185" height="38" rx="6" fill="#1e1b4b" stroke="#f43f5e" strokeWidth="1.5" />
                <text x="210" y="95" fill="#fca5a5" fontSize="9" fontWeight="bold">ESTAÇÃO 11 · UFPB</text>
                <text x="210" y="108" fill="#ffffff" fontSize="10" fontWeight="bold">Artéria Ilíaca Comum (L4)</text>
              </g>
            )}
          </svg>
        );

      // =========================================================================
      // 12. VEIA SUBCLÁVIA (Estação 12) - Relação com Escaleno Anterior
      // =========================================================================
      case 'veia-subclavia':
        return (
          <svg viewBox="0 0 400 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="320" rx="16" fill="#090d16" />
            
            {/* Primeira Costela (Osso Horizontal Arqueado) */}
            <path d="M 40,240 Q 200,210 360,240 L 360,265 Q 200,235 40,265 Z" fill="#475569" stroke="#64748b" strokeWidth="2" />
            <text x="160" y="255" fill="#cbd5e1" fontSize="10" fontWeight="bold">1ª Costela</text>

            {/* Músculo Escaleno Anterior (O DIVISOR DE ÁGUAS) */}
            <path d="M 190,30 L 175,230 L 225,230 L 210,30 Z" fill="#334155" stroke="#94a3b8" strokeWidth="2" />
            <text x="165" y="130" fill="#fde047" fontSize="10" fontWeight="bold" transform="rotate(-90 190 130)">M. Escaleno Anterior</text>

            {/* ARTÉRIA SUBCLÁVIA (ATRÁS do Escaleno Anterior no Hiato) */}
            <path d="M 40,165 Q 160,145 360,165" stroke="#e11d48" strokeWidth="14" fill="none" opacity="0.6" strokeDasharray="8 4" />
            <text x="50" y="150" fill="#fca5a5" fontSize="9">A. Subclávia (POSTERIOR)</text>

            {/* VEIA SUBCLÁVIA (NA FRENTE do Escaleno Anterior - Destaque Principal) */}
            <path d="M 40,195 Q 160,185 360,195" stroke="#1d4ed8" strokeWidth="18" fill="none" strokeLinecap="round" />
            <path d="M 40,195 Q 160,185 360,195" stroke="#3b82f6" strokeWidth="14" fill="none" strokeLinecap="round" />
            <text x="260" y="215" fill="#bfdbfe" fontSize="10" fontWeight="bold">VEIA Subclávia (ANTERIOR)</text>

            {/* Alfinete de Prova na Veia Subclávia */}
            {showPin && (
              <g>
                <circle cx="215" cy="190" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                <line x1="215" y1="190" x2="217" y2="205" stroke="#ffffff" strokeWidth="2.5" />
                <rect x="180" y="50" width="200" height="42" rx="6" fill="#1e1b4b" stroke="#3b82f6" strokeWidth="1.5" />
                <text x="190" y="66" fill="#93c5fd" fontSize="9" fontWeight="bold">ESTAÇÃO 12 · UFPB</text>
                <text x="190" y="79" fill="#ffffff" fontSize="10" fontWeight="bold">Veia Subclávia</text>
                <text x="190" y="89" fill="#cbd5e1" fontSize="8">(Anterior ao Escaleno Anterior)</text>
              </g>
            )}
          </svg>
        );

      // =========================================================================
      // 13. ARTÉRIA AXILAR (Estação 13) - Relação com Peitoral Menor e Plexo Braquial
      // =========================================================================
      case 'arteria-axilar':
        return (
          <svg viewBox="0 0 400 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="320" rx="16" fill="#090d16" />
            
            {/* Pirâmide Axilar */}
            <path d="M 80,40 L 320,80 L 260,290 L 100,270 Z" fill="#1e293b" opacity="0.4" stroke="#334155" />
            <text x="100" y="55" fill="#64748b" fontSize="10">Pirâmide Axilar</text>

            {/* Músculo Peitoral Menor (Cruza obliquamente) */}
            <path d="M 280,60 L 120,240 L 150,260 L 310,80 Z" fill="#475569" opacity="0.5" stroke="#64748b" strokeWidth="1" />
            <text x="210" y="160" fill="#94a3b8" fontSize="9" fontWeight="bold" transform="rotate(-40 210 160)">M. Peitoral Menor</text>

            {/* ARTÉRIA AXILAR (Vermelho Vivo Central) */}
            <path d="M 100,80 Q 200,160 270,270" stroke="#be123c" strokeWidth="18" fill="none" strokeLinecap="round" />
            <path d="M 100,80 Q 200,160 270,270" stroke="#f43f5e" strokeWidth="14" fill="none" strokeLinecap="round" />

            {/* O "M" do Plexo Braquial (Amarelo Abraçando a Artéria) */}
            <path d="M 120,90 Q 180,140 195,160 Q 210,180 250,280" stroke="#eab308" strokeWidth="6" fill="none" strokeDasharray="5 2" />
            <path d="M 140,80 Q 195,160 210,180 Q 230,220 280,260" stroke="#eab308" strokeWidth="6" fill="none" strokeDasharray="5 2" />
            <text x="215" y="210" fill="#fde047" fontSize="9" fontWeight="bold">"M" do Plexo Braquial</text>

            {/* Alfinete de Prova na Artéria Axilar */}
            {showPin && (
              <g>
                <circle cx="200" cy="160" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                <line x1="200" y1="160" x2="202" y2="175" stroke="#ffffff" strokeWidth="2.5" />
                <rect x="20" y="110" width="155" height="38" rx="6" fill="#1e1b4b" stroke="#f43f5e" strokeWidth="1.5" />
                <text x="28" y="125" fill="#fca5a5" fontSize="9" fontWeight="bold">ESTAÇÃO 13 · UFPB</text>
                <text x="28" y="138" fill="#ffffff" fontSize="10" fontWeight="bold">Artéria Axilar</text>
              </g>
            )}
          </svg>
        );

      // =========================================================================
      // 14. ARTÉRIA INTERVENTRICULAR DA AORTA (Estação 14) - Ramo Interventricular Anterior
      // =========================================================================
      case 'arteria-interventricular':
      case 'arteria-coronaria-esquerda':
        return (
          <svg viewBox="0 0 400 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="320" rx="16" fill="#090d16" />
            
            {/* Silhueta Cardíaca Esternocostal */}
            <path d="M 120,70 Q 200,50 270,80 Q 330,180 230,290 Q 200,310 180,290 Q 90,200 120,70 Z" fill="#1e293b" stroke="#334155" strokeWidth="2" />
            <text x="245" y="260" fill="#fca5a5" fontSize="12" fontWeight="bold">VE</text>
            <text x="130" y="210" fill="#93c5fd" fontSize="12" fontWeight="bold">VD</text>

            {/* Sulco Interventricular Anterior com Tecido Adiposo */}
            <path d="M 195,100 Q 185,190 200,295" stroke="#fef08a" strokeWidth="22" opacity="0.4" fill="none" />
            
            {/* Grande Veia Cardíaca (Azul) */}
            <path d="M 188,100 Q 178,190 195,295" stroke="#2563eb" strokeWidth="6" fill="none" opacity="0.75" />
            
            {/* ARTÉRIA INTERVENTRICULAR ANTERIOR (ADA / Da Coronária Esquerda) */}
            <path d="M 198,90 Q 190,190 202,295" stroke="#e11d48" strokeWidth="9" fill="none" strokeLinecap="round" />
            <path d="M 198,90 Q 190,190 202,295" stroke="#fda4af" strokeWidth="3" fill="none" strokeLinecap="round" />
            
            {/* Ramo Circunflexo contornando a margem esquerda */}
            <path d="M 198,90 Q 240,95 270,120" stroke="#e11d48" strokeWidth="7" fill="none" />
            <text x="250" y="105" fill="#fca5a5" fontSize="8">A. Circunflexa</text>

            {/* Aurícula Esquerda retraída */}
            <path d="M 205,75 Q 230,65 240,85 Z" fill="#475569" stroke="#64748b" />
            <text x="215" y="65" fill="#94a3b8" fontSize="8">Aurícula E.</text>

            {/* Alfinete de Prova */}
            {showPin && (
              <g>
                <circle cx="192" cy="180" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                <line x1="192" y1="180" x2="194" y2="195" stroke="#ffffff" strokeWidth="2.5" />
                <rect x="15" y="120" width="165" height="48" rx="6" fill="#1e1b4b" stroke="#e11d48" strokeWidth="1.5" />
                <text x="23" y="135" fill="#fca5a5" fontSize="9" fontWeight="bold">ESTAÇÃO 14 · UFPB</text>
                <text x="23" y="148" fill="#ffffff" fontSize="10" fontWeight="bold">A. Interventricular Anterior</text>
                <text x="23" y="159" fill="#fde047" fontSize="8">(Ramo da Coronária Esquerda!)</text>
              </g>
            )}
          </svg>
        );

      // =========================================================================
      // 15. PERICÁRDIO FIBROSO (Estação 15) - Saco Externo Inelástico
      // =========================================================================
      case 'pericardio-fibroso':
        return (
          <svg viewBox="0 0 400 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="320" rx="16" fill="#090d16" />
            
            {/* Centro Tendíneo do Diafragma na base */}
            <path d="M 60,280 Q 200,260 340,280 L 340,310 L 60,310 Z" fill="#334155" stroke="#475569" strokeWidth="2" />
            <text x="145" y="300" fill="#94a3b8" fontSize="10" fontWeight="bold">Centro Tendíneo do Diafragma</text>

            {/* PERICÁRDIO FIBROSO (Saco espesso opaco de couro envolvendo o coração) */}
            <path d="M 120,270 Q 70,180 120,80 Q 200,50 280,80 Q 330,180 280,270 Z" fill="#475569" stroke="#cbd5e1" strokeWidth="5" />
            <text x="140" y="165" fill="#f8fafc" fontSize="14" fontWeight="bold">PERICÁRDIO FIBROSO</text>
            <text x="135" y="185" fill="#cbd5e1" fontSize="9">(Cápsula Opaca Inelástica)</text>

            {/* Fusão Superior com Adventícia dos Grandes Vasos */}
            <rect x="175" y="25" width="22" height="55" fill="#e11d48" opacity="0.7" />
            <rect x="205" y="25" width="22" height="55" fill="#2563eb" opacity="0.7" />
            <text x="155" y="20" fill="#94a3b8" fontSize="9">Adventícia dos Grandes Vasos</text>

            {/* Alfinete de Prova no Pericárdio Fibroso */}
            {showPin && (
              <g>
                <circle cx="120" cy="180" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                <line x1="120" y1="180" x2="122" y2="195" stroke="#ffffff" strokeWidth="2.5" />
                <rect x="20" y="80" width="165" height="38" rx="6" fill="#1e1b4b" stroke="#cbd5e1" strokeWidth="1.5" />
                <text x="28" y="95" fill="#cbd5e1" fontSize="9" fontWeight="bold">ESTAÇÃO 15 · UFPB</text>
                <text x="28" y="108" fill="#ffffff" fontSize="10" fontWeight="bold">Pericárdio Fibroso (Saco)</text>
              </g>
            )}
          </svg>
        );

      // =========================================================================
      // 16. PERICÁRDIO SEROSO (Estação 16) - Parietal e Visceral
      // =========================================================================
      case 'pericardio-seroso':
        return (
          <svg viewBox="0 0 400 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="320" rx="16" fill="#090d16" />
            
            {/* Bolsa do Pericárdio Fibroso Aberta em Janela */}
            <path d="M 60,60 L 140,60 L 140,260 L 60,260 Z" fill="#334155" stroke="#64748b" strokeWidth="3" />
            
            {/* LÂMINA PARIETAL DO SEROSO (Face Interna Lisa Brilhante da Bolsa Rebatida) */}
            <path d="M 140,60 L 145,60 L 145,260 L 140,260 Z" fill="#38bdf8" />
            <text x="45" y="150" fill="#38bdf8" fontSize="9" fontWeight="bold" transform="rotate(-90 45 150)">Lâmina Parietal</text>

            {/* Cavidade Pericárdica com Líquido */}
            <rect x="145" y="60" width="40" height="200" fill="#0284c7" opacity="0.25" stroke="#0284c7" strokeDasharray="4 2" />
            <text x="148" y="160" fill="#38bdf8" fontSize="8" fontWeight="bold">Cavidade</text>

            {/* LÂMINA VISCERAL (EPICÁRDIO) aderida ao Coração */}
            <path d="M 185,60 L 190,60 L 190,260 L 185,260 Z" fill="#f59e0b" />
            <text x="195" y="275" fill="#f59e0b" fontSize="9" fontWeight="bold">Lâmina Visceral (Epicárdio)</text>

            {/* Miocárdio Cardíaco */}
            <path d="M 190,60 L 340,60 L 340,260 L 190,260 Z" fill="#991b1b" stroke="#be123c" strokeWidth="2" />
            <text x="235" y="165" fill="#fca5a5" fontSize="14" fontWeight="bold">MIOCÁRDIO</text>

            {/* Alfinete de Prova no Pericárdio Seroso */}
            {showPin && (
              <g>
                <circle cx="145" cy="120" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                <line x1="145" y1="120" x2="147" y2="135" stroke="#ffffff" strokeWidth="2.5" />
                <rect x="170" y="80" width="195" height="38" rx="6" fill="#1e1b4b" stroke="#38bdf8" strokeWidth="1.5" />
                <text x="180" y="95" fill="#bae6fd" fontSize="9" fontWeight="bold">ESTAÇÃO 16 · UFPB</text>
                <text x="180" y="108" fill="#ffffff" fontSize="10" fontWeight="bold">Pericárdio Seroso (Lâminas)</text>
              </g>
            )}
          </svg>
        );

      // =========================================================================
      // 17. ARTÉRIA CARÓTIDA COMUM (Estação 17) - Bainha Carotídea
      // =========================================================================
      case 'arteria-carotida-comum':
        return (
          <svg viewBox="0 0 400 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="320" rx="16" fill="#090d16" />
            
            {/* Traqueia e Cartilagem Tireóidea Medial */}
            <rect x="50" y="40" width="80" height="100" rx="10" fill="#334155" stroke="#64748b" strokeWidth="2" />
            <text x="60" y="90" fill="#cbd5e1" fontSize="9" fontWeight="bold">Cartilagem Tireóidea (C4)</text>
            <rect x="60" y="145" width="60" height="150" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
            <text x="70" y="220" fill="#94a3b8" fontSize="9">Traqueia</text>

            {/* Bainha Carotídea Translúcida */}
            <rect x="160" y="30" width="180" height="270" rx="12" fill="#1e293b" opacity="0.3" stroke="#475569" strokeDasharray="4 2" />
            <text x="210" y="25" fill="#64748b" fontSize="9">Bainha Carotídea</text>

            {/* VEIA JUGULAR INTERNA (Lateral, Azul, Larga) */}
            <path d="M 280,30 L 280,300" stroke="#1d4ed8" strokeWidth="20" opacity="0.75" />
            <text x="270" y="295" fill="#60a5fa" fontSize="9" fontWeight="bold">V. Jugular Int.</text>

            {/* NERVO VAGO (Posterior, Amarelo) */}
            <path d="M 240,30 L 240,300" stroke="#eab308" strokeWidth="6" strokeDasharray="5 2" />
            <text x="225" y="285" fill="#fde047" fontSize="8" fontWeight="bold">N. Vago</text>

            {/* ARTÉRIA CARÓTIDA COMUM (Medial, Vermelha, Reta sem Ramos) */}
            <path d="M 195,120 L 195,300" stroke="#be123c" strokeWidth="16" strokeLinecap="round" />
            <path d="M 195,120 L 195,300" stroke="#f43f5e" strokeWidth="12" strokeLinecap="round" />

            {/* Bifurcação em C4 */}
            <path d="M 195,120 L 180,30" stroke="#f43f5e" strokeWidth="8" />
            <path d="M 195,120 L 215,30" stroke="#f43f5e" strokeWidth="9" />
            <text x="180" y="115" fill="#fda4af" fontSize="9" fontWeight="bold">Bifurcação C4</text>

            {/* Alfinete de Prova na Carótida Comum */}
            {showPin && (
              <g>
                <circle cx="195" cy="200" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                <line x1="195" y1="200" x2="197" y2="215" stroke="#ffffff" strokeWidth="2.5" />
                <rect x="18" y="160" width="165" height="38" rx="6" fill="#1e1b4b" stroke="#f43f5e" strokeWidth="1.5" />
                <text x="26" y="175" fill="#fca5a5" fontSize="9" fontWeight="bold">ESTAÇÃO 17 · UFPB</text>
                <text x="26" y="188" fill="#ffffff" fontSize="10" fontWeight="bold">Artéria Carótida Comum</text>
              </g>
            )}
          </svg>
        );

      // =========================================================================
      // 18. ARTÉRIA CARÓTIDA EXTERNA E INTERNA (Estação 18) - Bifurcação em C4
      // =========================================================================
      case 'arteria-carotida-externa-interna':
        return (
          <svg viewBox="0 0 400 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="320" rx="16" fill="#090d16" />
            
            {/* Cartilagem Tireóidea (Borda Superior = Nível C4) */}
            <path d="M 60,100 L 120,100 L 130,220 L 60,220 Z" fill="#334155" stroke="#64748b" strokeWidth="1.5" />
            <line x1="40" y1="120" x2="360" y2="120" stroke="#475569" strokeWidth="1" strokeDasharray="4 2" />
            <text x="50" y="115" fill="#94a3b8" fontSize="9" fontWeight="bold">Nível C4 (Cartilagem Tireóidea)</text>

            {/* Artéria Carótida Comum Subindo */}
            <path d="M 200,300 L 200,160" stroke="#f43f5e" strokeWidth="16" strokeLinecap="round" />
            <text x="215" y="240" fill="#fca5a5" fontSize="10" fontWeight="bold">A. Carótida Comum</text>

            {/* BIFURCAÇÃO CAROTÍDEA */}
            {/* 1. ARTÉRIA CARÓTIDA INTERNA (Póstero-lateral, com Seio Carotídeo e SEM ramos) */}
            <path d="M 200,160 Q 235,140 240,30" stroke="#e11d48" strokeWidth="10" fill="none" />
            <ellipse cx="218" cy="140" rx="8" ry="12" fill="#be123c" stroke="#f43f5e" strokeWidth="1.5" />
            <text x="245" y="65" fill="#fca5a5" fontSize="9" fontWeight="bold">A. Carótida Interna</text>
            <text x="245" y="78" fill="#94a3b8" fontSize="8">(Sem ramos no pescoço!)</text>

            {/* 2. ARTÉRIA CARÓTIDA EXTERNA (Ântero-medial, COM múltiplos ramos cervicais) */}
            <path d="M 200,160 Q 165,140 160,30" stroke="#e11d48" strokeWidth="10" fill="none" />
            {/* Ramos da Externa */}
            <path d="M 180,140 L 140,160" stroke="#f43f5e" strokeWidth="4" />
            <text x="85" y="165" fill="#fda4af" fontSize="8">A. Tireóidea Sup.</text>
            <path d="M 170,110 L 130,105" stroke="#f43f5e" strokeWidth="4" />
            <text x="85" y="110" fill="#fda4af" fontSize="8">A. Lingual</text>
            <path d="M 165,70 L 125,60" stroke="#f43f5e" strokeWidth="4" />
            <text x="85" y="65" fill="#fda4af" fontSize="8">A. Facial</text>
            <text x="145" y="20" fill="#fca5a5" fontSize="9" fontWeight="bold">A. Carótida Externa</text>

            {/* Alfinete de Prova na Bifurcação */}
            {showPin && (
              <g>
                <circle cx="200" cy="155" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                <line x1="200" y1="155" x2="202" y2="170" stroke="#ffffff" strokeWidth="2.5" />
                <rect x="180" y="255" width="205" height="38" rx="6" fill="#1e1b4b" stroke="#f43f5e" strokeWidth="1.5" />
                <text x="190" y="270" fill="#fca5a5" fontSize="9" fontWeight="bold">ESTAÇÃO 18 · UFPB</text>
                <text x="190" y="283" fill="#ffffff" fontSize="10" fontWeight="bold">Carótida Externa e Interna (C4)</text>
              </g>
            )}
          </svg>
        );

      // =========================================================================
      // 19. AURÍCULA DIREITA (Estação 19) - Apêndice Atrial Direito
      // =========================================================================
      case 'auricula-direita':
        return (
          <svg viewBox="0 0 400 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="320" rx="16" fill="#090d16" />
            
            {/* Raiz da Aorta Ascendente (Centro) */}
            <path d="M 185,190 L 185,40" stroke="#be123c" strokeWidth="28" strokeLinecap="round" />
            <text x="175" y="30" fill="#fda4af" fontSize="10" fontWeight="bold">Aorta</text>

            {/* Tronco Pulmonar à esquerda */}
            <path d="M 230,190 Q 250,110 270,40" stroke="#2563eb" strokeWidth="22" strokeLinecap="round" />
            <text x="260" y="30" fill="#93c5fd" fontSize="10" fontWeight="bold">Tr. Pulmonar</text>

            {/* Átrio Direito Oco Lateral */}
            <path d="M 70,80 Q 40,160 80,240 Q 140,240 150,170 Q 120,80 70,80 Z" fill="#1e293b" stroke="#334155" strokeWidth="2" />
            <text x="60" y="180" fill="#94a3b8" fontSize="10" fontWeight="bold">Átrio Direito</text>

            {/* AURÍCULA DIREITA (Apêndice Triangular que Abraça a Aorta) */}
            <path d="M 110,90 Q 185,110 195,150 Q 180,185 140,175 Q 120,140 110,90 Z" fill="#991b1b" stroke="#f43f5e" strokeWidth="3" />
            <path d="M 125,105 Q 170,125 180,150" stroke="#fda4af" strokeWidth="2" strokeDasharray="3 2" />
            <text x="110" y="145" fill="#ffffff" fontSize="10" fontWeight="bold">Aurícula Direita</text>
            <text x="105" y="160" fill="#fde047" fontSize="8">("Orelha de Cão")</text>

            {/* Ventrículo Direito Inferior */}
            <path d="M 80,240 Q 200,280 320,240" stroke="#be123c" strokeWidth="6" />

            {/* Alfinete de Prova na Aurícula Direita */}
            {showPin && (
              <g>
                <circle cx="165" cy="140" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                <line x1="165" y1="140" x2="167" y2="155" stroke="#ffffff" strokeWidth="2.5" />
                <rect x="180" y="190" width="195" height="38" rx="6" fill="#1e1b4b" stroke="#f43f5e" strokeWidth="1.5" />
                <text x="190" y="205" fill="#fca5a5" fontSize="9" fontWeight="bold">ESTAÇÃO 19 · UFPB</text>
                <text x="190" y="218" fill="#ffffff" fontSize="10" fontWeight="bold">Aurícula Direita (sobre a Aorta)</text>
              </g>
            )}
          </svg>
        );

      // =========================================================================
      // 20. MÚSCULO PAPILAR (Estação 20) - Ventrículo Aberto com Cordas
      // =========================================================================
      case 'musculo-papilar':
        return (
          <svg viewBox="0 0 400 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="320" rx="16" fill="#090d16" />
            
            {/* Parede Ventricular Espessa do Miocárdio */}
            <path d="M 40,280 Q 200,300 360,280 L 360,310 L 40,310 Z" fill="#991b1b" stroke="#be123c" strokeWidth="2" />
            
            {/* Cúspides Valvares no topo (Mitral / Tricúspide) */}
            <path d="M 100,50 Q 200,70 300,50 L 300,75 Q 200,95 100,75 Z" fill="#3b82f6" fillOpacity="0.5" stroke="#60a5fa" strokeWidth="2" />
            <text x="160" y="45" fill="#bfdbfe" fontSize="10" fontWeight="bold">Cúspides Valvares</text>

            {/* MÚSCULO PAPILAR ANTERIOR (Coluna Cônica Carnosa Gigante) */}
            <path d="M 120,280 L 135,170 Q 150,155 165,170 L 180,280 Z" fill="#b91c1c" stroke="#f87171" strokeWidth="2.5" />
            
            {/* MÚSCULO PAPILAR POSTERIOR */}
            <path d="M 230,280 L 245,180 Q 255,168 265,180 L 280,280 Z" fill="#b91c1c" stroke="#f87171" strokeWidth="2.5" />
            <text x="110" y="270" fill="#fca5a5" fontSize="10" fontWeight="bold">Papilar Anterior</text>
            <text x="235" y="270" fill="#fca5a5" fontSize="10" fontWeight="bold">Papilar Posterior</text>

            {/* CORDAS TENDÍNEAS (Fios Brancos Esticados saindo do ápice) */}
            {[
              { x1: 150, y1: 160, x2: 120, y2: 75 },
              { x1: 150, y1: 160, x2: 150, y2: 75 },
              { x1: 150, y1: 160, x2: 180, y2: 75 },
              { x1: 255, y1: 170, x2: 220, y2: 75 },
              { x1: 255, y1: 170, x2: 255, y2: 75 },
              { x1: 255, y1: 170, x2: 285, y2: 75 }
            ].map((chord, idx) => (
              <line key={idx} x1={chord.x1} y1={chord.y1} x2={chord.x2} y2={chord.y2} stroke="#f8fafc" strokeWidth="2" strokeDasharray="4 1" />
            ))}
            <text x="185" y="125" fill="#f8fafc" fontSize="9" fontWeight="bold">Cordas Tendíneas</text>

            {/* Alfinete de Prova no Músculo Papilar */}
            {showPin && (
              <g>
                <circle cx="150" cy="200" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                <line x1="150" y1="200" x2="152" y2="215" stroke="#ffffff" strokeWidth="2.5" />
                <rect x="18" y="170" width="165" height="38" rx="6" fill="#1e1b4b" stroke="#f43f5e" strokeWidth="1.5" />
                <text x="26" y="185" fill="#fca5a5" fontSize="9" fontWeight="bold">ESTAÇÃO 20 · UFPB</text>
                <text x="26" y="198" fill="#ffffff" fontSize="10" fontWeight="bold">Músculo Papilar (Coluna)</text>
              </g>
            )}
          </svg>
        );

      // =========================================================================
      // 21. SEPTO INTERVENTRICULAR (Estação 21) - Muscular e Membranoso
      // =========================================================================
      case 'septo-interventricular':
        return (
          <svg viewBox="0 0 400 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="320" rx="16" fill="#090d16" />
            
            {/* Cavidade do Ventrículo Direito (Parede Fina) */}
            <path d="M 60,60 L 160,60 L 160,280 L 60,280 Z" fill="#1e3a8a" fillOpacity="0.3" stroke="#2563eb" strokeWidth="2" />
            <text x="75" y="160" fill="#93c5fd" fontSize="14" fontWeight="bold">VD (3-5 mm)</text>

            {/* Cavidade do Ventrículo Esquerdo (Parede Grossa 3:1) */}
            <path d="M 230,60 L 340,60 L 340,280 L 230,280 Z" fill="#991b1b" fillOpacity="0.3" stroke="#b91c1c" strokeWidth="4" />
            <text x="250" y="160" fill="#fca5a5" fontSize="14" fontWeight="bold">VE (8-12 mm)</text>

            {/* SEPTO INTERVENTRICULAR CENTRAL */}
            {/* Porção Membranosa Superior (Fina) */}
            <rect x="160" y="60" width="70" height="40" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1.5" />
            <text x="165" y="85" fill="#1e293b" fontSize="8" fontWeight="bold">P. Membranosa</text>

            {/* Porção Muscular Inferior (Espessa, 90% do Septo) */}
            <path d="M 160,100 Q 150,190 160,280 L 230,280 Q 240,190 230,100 Z" fill="#881337" stroke="#e11d48" strokeWidth="3" />
            <text x="168" y="180" fill="#fecdd3" fontSize="11" fontWeight="bold">PORÇÃO</text>
            <text x="162" y="200" fill="#fecdd3" fontSize="10" fontWeight="bold">MUSCULAR</text>

            {/* Feixe de His e Ramos Internos */}
            <path d="M 195,65 L 195,120 Q 180,180 175,250" stroke="#fde047" strokeWidth="3" fill="none" />
            <path d="M 195,120 Q 210,180 215,250" stroke="#fde047" strokeWidth="3" fill="none" />
            <text x="175" y="50" fill="#fde047" fontSize="8">Feixe de His</text>

            {/* Alfinete de Prova no Septo Interventricular */}
            {showPin && (
              <g>
                <circle cx="195" cy="180" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                <line x1="195" y1="180" x2="197" y2="195" stroke="#ffffff" strokeWidth="2.5" />
                <rect x="18" y="220" width="175" height="38" rx="6" fill="#1e1b4b" stroke="#e11d48" strokeWidth="1.5" />
                <text x="26" y="235" fill="#fca5a5" fontSize="9" fontWeight="bold">ESTAÇÃO 21 · UFPB</text>
                <text x="26" y="248" fill="#ffffff" fontSize="10" fontWeight="bold">Septo Interventricular</text>
              </g>
            )}
          </svg>
        );

      // =========================================================================
      // 22. ARTÉRIA ILÍACA INTERNA (Estação 22) - Pelve Menor
      // =========================================================================
      case 'arteria-iliaca-interna':
        return (
          <svg viewBox="0 0 400 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="320" rx="16" fill="#090d16" />
            
            {/* Estreito Superior da Pelve / Borda Óssea */}
            <path d="M 60,180 Q 200,240 340,180 L 340,290 Q 200,310 60,290 Z" fill="#1e293b" opacity="0.6" stroke="#475569" strokeWidth="2" />
            <text x="150" y="280" fill="#94a3b8" fontSize="11" fontWeight="bold">Cavidade da Pelve Menor</text>

            {/* Artéria Ilíaca Comum descendo */}
            <path d="M 160,20 L 190,110" stroke="#f43f5e" strokeWidth="16" strokeLinecap="round" />
            <text x="110" y="60" fill="#fca5a5" fontSize="10" fontWeight="bold">A. Ilíaca Comum</text>

            {/* Bifurcação em L5-S1 */}
            {/* 1. Artéria Ilíaca Externa (Continua pela borda em direção à perna) */}
            <path d="M 190,110 Q 230,150 280,220" stroke="#e11d48" strokeWidth="14" fill="none" />
            <text x="260" y="160" fill="#fda4af" fontSize="9" fontWeight="bold">A. Ilíaca Externa</text>
            <text x="260" y="173" fill="#94a3b8" fontSize="8">(Vai para o MI)</text>

            {/* 2. ARTÉRIA ILÍACA INTERNA (Mergulha fundo na pelve menor - Destaque) */}
            <path d="M 190,110 Q 185,160 170,240" stroke="#be123c" strokeWidth="14" fill="none" strokeLinecap="round" />
            <path d="M 190,110 Q 185,160 170,240" stroke="#f43f5e" strokeWidth="10" fill="none" strokeLinecap="round" />
            
            {/* Ramos da Ilíaca Interna na Pelve */}
            <path d="M 175,180 L 130,220" stroke="#f43f5e" strokeWidth="5" />
            <text x="80" y="235" fill="#fda4af" fontSize="8">Ramos viscerais (útero/bexiga)</text>
            <path d="M 170,220 L 150,260" stroke="#f43f5e" strokeWidth="5" />

            {/* Alfinete de Prova na Ilíaca Interna */}
            {showPin && (
              <g>
                <circle cx="180" cy="180" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                <line x1="180" y1="180" x2="182" y2="195" stroke="#ffffff" strokeWidth="2.5" />
                <rect x="18" y="110" width="165" height="42" rx="6" fill="#1e1b4b" stroke="#f43f5e" strokeWidth="1.5" />
                <text x="26" y="126" fill="#fca5a5" fontSize="9" fontWeight="bold">ESTAÇÃO 22 · UFPB</text>
                <text x="26" y="139" fill="#ffffff" fontSize="10" fontWeight="bold">Artéria Ilíaca Interna</text>
                <text x="26" y="148" fill="#fde047" fontSize="8">(Mergulha na Pelve Menor)</text>
              </g>
            )}
          </svg>
        );

      // =========================================================================
      // 23. VEIA SAFENA MAGNA (Estação 23) - Anterior ao Maléolo Medial
      // =========================================================================
      case 'veia-safena-magna':
        return (
          <svg viewBox="0 0 400 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="320" rx="16" fill="#090d16" />
            
            {/* Perna e Tornozelo (Face Medial) */}
            <path d="M 140,20 L 150,180 Q 155,240 130,270 L 130,290 L 300,290 L 260,240 Q 250,180 240,20 Z" fill="#1e293b" opacity="0.6" stroke="#334155" />
            
            {/* MALÉOLO MEDIAL (Salicência Óssea Interna da Tíbia) */}
            <circle cx="215" cy="225" r="22" fill="#475569" stroke="#94a3b8" strokeWidth="2" />
            <text x="245" y="230" fill="#f8fafc" fontSize="10" fontWeight="bold">MALÉOLO MEDIAL</text>
            <text x="245" y="242" fill="#94a3b8" fontSize="8">(Osso interno do tornozelo)</text>

            {/* VEIA SAFENA MAGNA (Passa 1 a 2 cm ANTERIOR ao Maléolo Medial) */}
            <path d="M 175,20 L 180,180 Q 182,215 155,255 L 140,290" stroke="#1d4ed8" strokeWidth="12" fill="none" strokeLinecap="round" />
            <path d="M 175,20 L 180,180 Q 182,215 155,255 L 140,290" stroke="#3b82f6" strokeWidth="8" fill="none" strokeLinecap="round" />
            <text x="80" y="100" fill="#60a5fa" fontSize="10" fontWeight="bold">V. Safena Magna</text>
            <text x="75" y="115" fill="#93c5fd" fontSize="8">(Face Medial da Perna)</text>

            {/* Nervo Safeno Acompanhante */}
            <path d="M 185,20 L 190,180 Q 192,215 165,255" stroke="#eab308" strokeWidth="3" fill="none" strokeDasharray="4 2" />
            <text x="195" y="150" fill="#fde047" fontSize="8">N. Safeno</text>

            {/* Alfinete de Prova na Safena Magna */}
            {showPin && (
              <g>
                <circle cx="170" cy="225" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                <line x1="170" y1="225" x2="172" y2="240" stroke="#ffffff" strokeWidth="2.5" />
                <rect x="18" y="140" width="160" height="42" rx="6" fill="#1e1b4b" stroke="#3b82f6" strokeWidth="1.5" />
                <text x="26" y="156" fill="#93c5fd" fontSize="9" fontWeight="bold">ESTAÇÃO 23 · UFPB</text>
                <text x="26" y="169" fill="#ffffff" fontSize="10" fontWeight="bold">Veia Safena Magna</text>
                <text x="26" y="179" fill="#fde047" fontSize="8">(Anterior ao Maléolo Medial)</text>
              </g>
            )}
          </svg>
        );

      // =========================================================================
      // 24. VEIA SAFENA PARVA (Estação 24) - Posterior ao Maléolo Lateral
      // =========================================================================
      case 'veia-safena-parva':
        return (
          <svg viewBox="0 0 400 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="320" rx="16" fill="#090d16" />
            
            {/* Panturrilha Posterior (Vista Posterior da Perna) */}
            <path d="M 130,20 Q 90,120 120,240 L 120,290 L 280,290 L 280,240 Q 310,120 270,20 Z" fill="#1e293b" opacity="0.6" stroke="#334155" />
            <text x="145" y="45" fill="#64748b" fontSize="10" fontWeight="bold">Panturrilha Posterior</text>

            {/* Músculo Gastrocnêmio (Cabeças Medial e Lateral) */}
            <path d="M 140,50 Q 155,140 195,170 Q 155,140 140,50 Z" fill="#334155" opacity="0.5" />
            <path d="M 260,50 Q 245,140 205,170 Q 245,140 260,50 Z" fill="#334155" opacity="0.5" />

            {/* MALÉOLO LATERAL (Osso Externo do Tornozelo) */}
            <circle cx="140" cy="245" r="20" fill="#475569" stroke="#94a3b8" strokeWidth="2" />
            <text x="35" y="245" fill="#f8fafc" fontSize="9" fontWeight="bold">MALÉOLO LATERAL</text>
            <text x="45" y="257" fill="#94a3b8" fontSize="7">(Osso da fíbula)</text>

            {/* VEIA SAFENA PARVA (Passa POSTERIOR ao Maléolo Lateral e Sobe no Meio) */}
            <path d="M 200,20 L 200,180 Q 195,220 168,255 L 160,290" stroke="#1d4ed8" strokeWidth="12" fill="none" strokeLinecap="round" />
            <path d="M 200,20 L 200,180 Q 195,220 168,255 L 160,290" stroke="#3b82f6" strokeWidth="8" fill="none" strokeLinecap="round" />
            <text x="215" y="100" fill="#60a5fa" fontSize="10" fontWeight="bold">V. Safena Parva</text>
            <text x="215" y="115" fill="#93c5fd" fontSize="8">(Linha Média da Panturrilha)</text>

            {/* Nervo Sural Acompanhante */}
            <path d="M 210,50 L 210,180 Q 205,220 178,255" stroke="#eab308" strokeWidth="3" fill="none" strokeDasharray="4 2" />
            <text x="215" y="145" fill="#fde047" fontSize="8">N. Sural</text>

            {/* Deságue na Veia Poplítea no joelho */}
            <path d="M 180,20 L 220,20" stroke="#2563eb" strokeWidth="8" />
            <text x="170" y="15" fill="#93c5fd" fontSize="8">Para V. Poplítea</text>

            {/* Alfinete de Prova na Safena Parva */}
            {showPin && (
              <g>
                <circle cx="170" cy="245" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                <line x1="170" y1="245" x2="172" y2="260" stroke="#ffffff" strokeWidth="2.5" />
                <rect x="200" y="230" width="180" height="42" rx="6" fill="#1e1b4b" stroke="#3b82f6" strokeWidth="1.5" />
                <text x="210" y="246" fill="#93c5fd" fontSize="9" fontWeight="bold">ESTAÇÃO 24 · UFPB</text>
                <text x="210" y="259" fill="#ffffff" fontSize="10" fontWeight="bold">Veia Safena Parva</text>
                <text x="210" y="269" fill="#fde047" fontSize="8">(Posterior ao Maléolo Lateral)</text>
              </g>
            )}
          </svg>
        );

      // =========================================================================
      // FALLBACK PADRÃO CARDIOVASCULAR
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

            <text x="100" y="285" fill="#cbd5e1" fontSize="11" fontWeight="bold">
              {structureName || 'Esquema Anatômico Cardiovascular UFPB'}
            </text>
          </svg>
        );
    }
  };

  return <div className={`relative flex items-center justify-center ${className}`}>{renderGraphic()}</div>;
};
