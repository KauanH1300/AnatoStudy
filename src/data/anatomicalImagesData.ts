export interface AnatomicalImageRef {
  id: string;
  titulo: string;
  subtitulo: string;
  tipo: 'artéria' | 'veia' | 'câmara' | 'valva' | 'misto';
  // High quality medical atlas images (Wikipedia Commons / NIH National Library of Medicine open educational assets)
  imageUrl: string;
  autorOuFonte: string;
  legendaPontos: string[];
}

export const anatomicalIllustrations: Record<string, AnatomicalImageRef> = {
  // AORTA & GRANDES VASOS
  'aorta': {
    id: 'aorta',
    titulo: 'Artéria Aorta & Ramos do Arco Aórtico',
    subtitulo: 'Aorta Ascendente, Arco Aórtico com os 3 ramos e Aorta Descendente',
    tipo: 'artéria',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Diagram_of_the_human_heart_%28cropped%29.svg/1024px-Diagram_of_the_human_heart_%28cropped%29.svg.png',
    autorOuFonte: 'Atlas Anatômico Médico / Gray\'s Anatomy Commons',
    legendaPontos: [
      '1. Tronco Braquiocefálico (1º ramo à direita)',
      '2. Artéria Carótida Comum Esquerda (2º ramo central)',
      '3. Artéria Subclávia Esquerda (3º ramo à esquerda)',
      '4. Ligamento Arterial (na concavidade do arco conectando ao tronco pulmonar)'
    ]
  },
  'arco-aortico': {
    id: 'arco-aortico',
    titulo: 'Arco Aórtico & Ramos Maiores',
    subtitulo: 'Estação 12 da UFPB: Arco da aorta projetando os 3 grandes ramos supra-aórticos',
    tipo: 'artéria',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Diagram_of_the_human_heart_%28cropped%29.svg/1024px-Diagram_of_the_human_heart_%28cropped%29.svg.png',
    autorOuFonte: 'Gray\'s Anatomy / Atlas Torácico',
    legendaPontos: [
      'Origina da direita para a esquerda: Tronco Braquiocefálico, Carótida Comum E e Subclávia E',
      'Passa sobre o brônquio principal esquerdo e tronco pulmonar',
      'Cruza anteriormente a traqueia na altura de T4'
    ]
  },
  'tronco-pulmonar': {
    id: 'tronco-pulmonar',
    titulo: 'Tronco Pulmonar & Artérias Pulmonares',
    subtitulo: 'Emergência do cone arterial do VD e bifurcação sob o arco aórtico',
    tipo: 'artéria',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Heart_anterior_exterior_view.jpg/1024px-Heart_anterior_exterior_view.jpg',
    autorOuFonte: 'Dissecção Anatômica Cardíaca / Wikimedia Commons',
    legendaPontos: [
      'Vaso arterial mais anterior na base do coração',
      'Conduz sangue VENOSO do Ventrículo Direito aos pulmões',
      'Bifurca-se em Artéria Pulmonar Direita e Esquerda'
    ]
  },
  'veia-cava-superior': {
    id: 'veia-cava-superior',
    titulo: 'Veia Cava Superior (VCS) & Deságue Atrial',
    subtitulo: 'Retorno venoso da cabeça, pescoço e membros superiores (Estação 3 da UFPB)',
    tipo: 'veia',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Gray490.png/900px-Gray490.png',
    autorOuFonte: 'Henry Gray\'s Anatomy of the Human Body',
    legendaPontos: [
      'Formada pela junção das Veias Braquiocefálicas D e E',
      'Recebe o arco da Veia Ázigos na face posterior',
      'Desemboca no teto póstero-superior do Átrio Direito sem válvulas'
    ]
  },
  'veia-cava-inferior': {
    id: 'veia-cava-inferior',
    titulo: 'Veia Cava Inferior (VCI) & Assoalho do Átrio Direito',
    subtitulo: 'Drenagem de abdome, pelve e membros inferiores (Estação 6 da UFPB)',
    tipo: 'veia',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Gray578.png/900px-Gray578.png',
    autorOuFonte: 'Atlas de Anatomia Humana / Wikimedia Commons',
    legendaPontos: [
      'Maior vaso venoso do corpo humano (~3 cm)',
      'Perfura o centro tendíneo do diafragma (nível T8)',
      'Possui a Valva da VCI (válvula de Eustáquio) no átrio direito'
    ]
  },
  'veias-pulmonares': {
    id: 'veias-pulmonares',
    titulo: '4 Veias Pulmonares no Átrio Esquerdo',
    subtitulo: 'Face posterior (base) do coração trazendo sangue arterializado',
    tipo: 'veia',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Heart_posterior_exterior_view.jpg/1024px-Heart_posterior_exterior_view.jpg',
    autorOuFonte: 'Dissecção da Base Cardíaca / Wikimedia Commons',
    legendaPontos: [
      '2 Veias Pulmonares Direitas e 2 Veias Pulmonares Esquerdas',
      'Deságuam na parede póstero-superior lisa do Átrio Esquerdo',
      'Únicas veias pós-natais que transportam sangue 100% ARTERIAL (O₂)'
    ]
  },
  'arteria-coronaria-esquerda': {
    id: 'arteria-coronaria-esquerda',
    titulo: 'Artéria Coronária Esquerda (ADA & ACx)',
    subtitulo: 'Sulco interventricular anterior e sulco coronário esquerdo (Estação 7 da UFPB)',
    tipo: 'artéria',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Coronary_arteries.svg/1024px-Coronary_arteries.svg.png',
    autorOuFonte: 'Esquema Anatômico da Circulação Coronariana / Patrick J. Lynch',
    legendaPontos: [
      'Emerge sob a aurícula esquerda no seio aórtico esquerdo',
      'Ramo Interventricular Anterior (ADA): corre no sulco IV anterior com a Grande Veia Cardíaca',
      'Ramo Circunflexo (ACx): contorna a borda esquerda do coração'
    ]
  },
  'arteria-coronaria-direita': {
    id: 'arteria-coronaria-direita',
    titulo: 'Artéria Coronária Direita (ACD & Ramos)',
    subtitulo: 'Sulco atrioventricular direito e ramo marginal direito',
    tipo: 'artéria',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Coronary_arteries.svg/1024px-Coronary_arteries.svg.png',
    autorOuFonte: 'Esquema Anatômico Coronariano / Patrick J. Lynch',
    legendaPontos: [
      'Corre no sulco entre Átrio Direito e Ventrículo Direito',
      'Emite o Ramo Marginal Direito na borda aguda',
      'Origina a Artéria Interventricular Posterior na face diafragmática (em 85-90%)'
    ]
  },
  'seio-coronario': {
    id: 'seio-coronario',
    titulo: 'Seio Coronário na Face Posterior',
    subtitulo: 'Canal venoso que drena o miocárdio de volta ao Átrio Direito (Estação 17 da UFPB)',
    tipo: 'veia',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Heart_posterior_exterior_view.jpg/1024px-Heart_posterior_exterior_view.jpg',
    autorOuFonte: 'Dissecção do Sulco Coronário Posterior / Wikimedia Commons',
    legendaPontos: [
      'Localizado no sulco coronário posterior entre AE e VE',
      'Drena a Grande, Média e Pequena veias cardíacas',
      'Desemboca no Átrio Direito com a Valva de Tebésio no Trígono de Koch'
    ]
  },
  'auricula-esquerda': {
    id: 'auricula-esquerda',
    titulo: 'Aurícula Esquerda (Apêndice Atrial Esquerdo)',
    subtitulo: 'Apêndice denteado e estreito sobreposto ao sulco coronário (Estação 4 da UFPB)',
    tipo: 'câmara',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Heart_anterior_exterior_view.jpg/1024px-Heart_anterior_exterior_view.jpg',
    autorOuFonte: 'Dissecção Cardíaca Anterior / Wikimedia Commons',
    legendaPontos: [
      'Aspecto ondulado e recortado ("orelha de cão")',
      'Sobreposta à emergência da Artéria Coronária Esquerda e Tronco Pulmonar',
      'Principal sítio de formação de trombos em Fibrilação Atrial'
    ]
  },
  'trabecula-septomarginal': {
    id: 'trabecula-septomarginal',
    titulo: 'Trabécula Septomarginal (Banda Moderadora)',
    subtitulo: 'Ponte muscular cruzando o lúmen do Ventrículo Direito (Estação 5 da UFPB)',
    tipo: 'câmara',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Heart_anterior_exterior_view.jpg/1024px-Heart_anterior_exterior_view.jpg',
    autorOuFonte: 'Dissecção Interna do Ventrículo Direito / Wikimedia Commons',
    legendaPontos: [
      'Conecta o septo interventricular à base do músculo papilar anterior do VD',
      'Conduz o Ramo Direito do Feixe Atrioventricular (Feixe de His)',
      'Estrutura diagnóstica exclusiva do Ventrículo Direito (inexistente no VE)'
    ]
  },
  'fossa-oval': {
    id: 'fossa-oval',
    titulo: 'Fossa Oval & Limbo da Fossa Oval',
    subtitulo: 'Depressão no septo interatrial do Átrio Direito (Estação 8 da UFPB)',
    tipo: 'câmara',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Diagram_of_the_human_heart_%28cropped%29.svg/1024px-Diagram_of_the_human_heart_%28cropped%29.svg.png',
    autorOuFonte: 'Gray\'s Anatomy / Wikimedia Commons',
    legendaPontos: [
      'Remanescente embrionário do Forame Oval fetal',
      'Assoalho translúcido e fino circundado pelo anel fibroso (Limbo)',
      'Localizada na parede septal posteromedial do Átrio Direito'
    ]
  },
  'valva-tricuspide': {
    id: 'valva-tricuspide',
    titulo: 'Valva Atrioventricular Direita (Tricúspide)',
    subtitulo: 'Aparelho valvar com cúspides anterior, posterior e septal (Estação 10 da UFPB)',
    tipo: 'valva',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Diagram_of_the_human_heart_%28cropped%29.svg/1024px-Diagram_of_the_human_heart_%28cropped%29.svg.png',
    autorOuFonte: 'Aparelho Valvar Cardíaco / Gray\'s Anatomy',
    legendaPontos: [
      '3 cúspides presas por cordas tendíneas aos músculos papilares',
      'Impede o refluxo de sangue venoso do VD para o AD durante a sístole',
      'Orifício atrioventricular direito circundado por anel fibroso'
    ]
  },
  'musculos-papilares': {
    id: 'musculos-papilares',
    titulo: 'Músculos Papilares e Cordas Tendíneas do VE',
    subtitulo: 'Pilares musculares gigantes anterior e posterior (Estação 11 da UFPB)',
    tipo: 'câmara',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Diagram_of_the_human_heart_%28cropped%29.svg/1024px-Diagram_of_the_human_heart_%28cropped%29.svg.png',
    autorOuFonte: 'Câmaras Ventriculares / Wikimedia Commons',
    legendaPontos: [
      'Apenas 2 músculos papilares hipertrofiados no VE (Anterior e Posterior)',
      'Tracionam as cordas tendíneas da valva mitral impedindo o prolapso',
      'Miocárdio espesso (parede 3x mais espessa que o VD)'
    ]
  },
  'musculos-pectineos': {
    id: 'musculos-pectineos',
    titulo: 'Músculos Pectíneos no Átrio Direito',
    subtitulo: 'Feixes musculares em crista na parede anterior do AD (Estação 15 da UFPB)',
    tipo: 'câmara',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Diagram_of_the_human_heart_%28cropped%29.svg/1024px-Diagram_of_the_human_heart_%28cropped%29.svg.png',
    autorOuFonte: 'Átrio Direito Interno / Gray\'s Anatomy',
    legendaPontos: [
      'Dispostos em paralelo lembrando os dentes de um pente',
      'Partem da Crista Terminalis em direção à aurícula direita',
      'Diferenciam a parede anterior trabeculada do seio venoso posterior liso'
    ]
  },
  'tronco-braquiocefalico': {
    id: 'tronco-braquiocefalico',
    titulo: 'Tronco Braquiocefálico Arterial',
    subtitulo: '1º e mais calibroso ramo do arco aórtico (Estação 16 da UFPB)',
    tipo: 'artéria',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Diagram_of_the_human_heart_%28cropped%29.svg/1024px-Diagram_of_the_human_heart_%28cropped%29.svg.png',
    autorOuFonte: 'Atlas Anatômico / Gray\'s Anatomy',
    legendaPontos: [
      'Emerge da convexidade do arco aórtico à direita',
      'Bifurca-se atrás da articulação esternoclavicular direita',
      'Origina a Artéria Carótida Comum Direita e Artéria Subclávia Direita'
    ]
  },
  'valva-aortica': {
    id: 'valva-aortica',
    titulo: 'Valva Aórtica e Seios da Aorta (Valsalva)',
    subtitulo: '3 cúspides semilunares e óstios coronários (Estação 20 da UFPB)',
    tipo: 'valva',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Diagram_of_the_human_heart_%28cropped%29.svg/1024px-Diagram_of_the_human_heart_%28cropped%29.svg.png',
    autorOuFonte: 'Aparelho Valvar Aórtico / Gray\'s Anatomy',
    legendaPontos: [
      '3 válvulas semilunares com lúnula e nódulo de Arâncio',
      'Seio aórtico direito dá origem à Artéria Coronária Direita',
      'Seio aórtico esquerdo dá origem à Artéria Coronária Esquerda'
    ]
  },

  // CABEÇA & PESCOÇO
  'arteria-carotida-comum': {
    id: 'arteria-carotida-comum',
    titulo: 'Artérias Carótidas Comum, Interna e Externa',
    subtitulo: 'Bainha carotídea do pescoço e bifurcação em C4',
    tipo: 'artéria',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Gray511.png/900px-Gray511.png',
    autorOuFonte: 'Anatomia Humana / Henry Gray',
    legendaPontos: [
      'Asciende verticalmente pelo trígono carotídeo sem emitir ramos no pescoço',
      'Bifurca-se ao nível da cartilagem tireóidea (C4)',
      'Possui o Seio Carotídeo (barorreceptor) e o Corpo Carotídeo (quimiorreceptor)'
    ]
  },
  'veia-jugular-interna': {
    id: 'veia-jugular-interna',
    titulo: 'Veia Jugular Interna & Feixe Carotídeo',
    subtitulo: 'Drenagem do crânio descendo lateral à artéria carótida comum',
    tipo: 'veia',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Gray558.png/900px-Gray558.png',
    autorOuFonte: 'Gray\'s Anatomy / Wikimedia Commons',
    legendaPontos: [
      'Continuação direta do Seio Sigmóideo na base do crânio',
      'Desce lateral à Carótida Comum sob o músculo esternocleidomastóideo',
      'Une-se à Veia Subclávia para formar a Veia Braquiocefálica'
    ]
  },
  'veia-jugular-externa': {
    id: 'veia-jugular-externa',
    titulo: 'Veia Jugular Externa (Superficial)',
    subtitulo: 'Cruzamento diagonal superficial sobre o músculo ECM',
    tipo: 'veia',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Gray558.png/900px-Gray558.png',
    autorOuFonte: 'Atlas Anatômico / Henry Gray',
    legendaPontos: [
      'Corre superficialmente no tecido subcutâneo sobre o músculo ECM',
      'Formada pela união da Veia Retromandibular com a Auricular Posterior',
      'Perfura a fáscia profunda acima da clavícula para entrar na subclávia'
    ]
  },

  // MEMBRO SUPERIOR
  'arteria-subclavia': {
    id: 'arteria-subclavia',
    titulo: 'Artéria Subclávia & Hiato Interescalênico',
    subtitulo: 'Passagem entre escaleno anterior e médio sobre a 1ª costela',
    tipo: 'artéria',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Gray506.png/900px-Gray506.png',
    autorOuFonte: 'Dissecção do Desfiladeiro Torácico / Gray\'s Anatomy',
    legendaPontos: [
      'Emite a Artéria Vertebral, Torácica Interna e Tronco Tireocervical',
      'Passa sobre a 1ª costela acompanhada pelo Plexo Braquial',
      'Ao cruzar a borda lateral da 1ª costela, torna-se Artéria Axilar'
    ]
  },
  'arteria-braquial': {
    id: 'arteria-braquial',
    titulo: 'Artéria Braquial (Umeral) no Braço e Fossa Cubital',
    subtitulo: 'Sulco bicipital medial com nervo mediano (Estação 1 da UFPB)',
    tipo: 'artéria',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Gray525.png/900px-Gray525.png',
    autorOuFonte: 'Atlas de Anatomia do Membro Superior / Henry Gray',
    legendaPontos: [
      'Desce pelo lado medial do bíceps braquial com 2 veias satélites',
      'Cruzada anteriormente de lateral para medial pelo Nervo Mediano',
      'Bifurca-se no colo do rádio nas artérias Radial e Ulnar'
    ]
  },
  'arteria-radial': {
    id: 'arteria-radial',
    titulo: 'Artéria Radial na Goteira do Pulso e Tabaqueira',
    subtitulo: 'Face lateral do antebraço até o arco palmar profundo (Estação 18 da UFPB)',
    tipo: 'artéria',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Gray528.png/900px-Gray528.png',
    autorOuFonte: 'Dissecção do Antebraço e Mão / Henry Gray',
    legendaPontos: [
      'Corre sob o músculo braquiorradial sobre a face anterior do osso rádio',
      'Palpável na goteira do pulso (entre braquiorradial e flexor radial do carpo)',
      'Cruza o assoalho da Tabaqueira Anatômica na mão'
    ]
  },
  'arteria-ulnar': {
    id: 'arteria-ulnar',
    titulo: 'Artéria Ulnar & Canal de Guyon',
    subtitulo: 'Margem medial do antebraço formando o arco palmar superficial',
    tipo: 'artéria',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Gray528.png/900px-Gray528.png',
    autorOuFonte: 'Atlas Anatômico do Membro Superior / Henry Gray',
    legendaPontos: [
      'Mais calibrosa que a radial na bifurcação cubital',
      'Desce colada medialmente ao Nervo Ulnar sob o flexor ulnar do carpo',
      'Entra na mão pelo Canal de Guyon (fora do túnel do carpo)'
    ]
  },
  'veias-cefalica-basilica': {
    id: 'veias-cefalica-basilica',
    titulo: 'Veias Superficiais: Cefálica, Basílica & Intermédia',
    subtitulo: 'Rede venosa superficial do membro superior e punção venosa',
    tipo: 'veia',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Gray574.png/900px-Gray574.png',
    autorOuFonte: 'Veias Superficiais do Membro Superior / Henry Gray',
    legendaPontos: [
      'Veia Cefálica: lateral, corre no sulco deltopeitoral até a veia axilar',
      'Veia Basílica: medial, perfura a fáscia profunda no braço para a veia axilar',
      'Veia Intermédia do Cotovelo: comunicação clássica para punção na fossa cubital'
    ]
  },

  // MEMBRO INFERIOR
  'arteria-femoral': {
    id: 'arteria-femoral',
    titulo: 'Artéria Femoral no Trígono Femoral (de Scarpa)',
    subtitulo: 'Feixe vásculo-nervoso NAVe sob o ligamento inguinal (Estação 9 da UFPB)',
    tipo: 'artéria',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Gray548.png/900px-Gray548.png',
    autorOuFonte: 'Trígono Femoral e Membro Inferior / Henry Gray',
    legendaPontos: [
      'Continuação da Ilíaca Externa sob o Ligamento Inguinal',
      'Regra NAVe: Nervo femoral lateral, Artéria média, Veia medial',
      'Origina a volumosa Artéria Femoral Profunda para a coxa'
    ]
  },
  'arteria-poplitea': {
    id: 'arteria-poplitea',
    titulo: 'Artéria Poplítea na Fossa Poplítea',
    subtitulo: 'Vaso mais profundo atrás do joelho (Estação 19 da UFPB)',
    tipo: 'artéria',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Gray551.png/900px-Gray551.png',
    autorOuFonte: 'Fossa Poplítea e Vasos Profundos / Henry Gray',
    legendaPontos: [
      'Estrutura mais profunda da fossa poplítea encostada no fêmur e cápsula articular',
      'Relação de profundidade: Nervo Tibial -> Veia Poplítea -> Artéria Poplítea',
      'Bifurca-se nas artérias Tibial Anterior e Tibial Posterior'
    ]
  },
  'arteria-tibial-posterior': {
    id: 'arteria-tibial-posterior',
    titulo: 'Artéria Tibial Posterior no Túnel do Tarso',
    subtitulo: 'Goteira retromaleolar medial (Estação 14 da UFPB)',
    tipo: 'artéria',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Gray553.png/900px-Gray553.png',
    autorOuFonte: 'Artérias da Perna e Pé / Henry Gray',
    legendaPontos: [
      'Passa posteriormente ao maléolo medial no túnel do tarso',
      'Acompanhada pelas 2 veias comitantes e pelo Nervo Tibial',
      'Palpação de pulso periférico essencial na avaliação vascular'
    ]
  },
  'arterias-tibial-anterior-posterior': {
    id: 'arterias-tibial-anterior-posterior',
    titulo: 'Artérias Tibial Anterior, Posterior & Pediosa',
    subtitulo: 'Compartimentos da perna e pulsos periféricos do tornozelo e pé',
    tipo: 'artéria',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Gray553.png/900px-Gray553.png',
    autorOuFonte: 'Artérias da Perna e Pé / Henry Gray',
    legendaPontos: [
      'Tibial Posterior: passa atrás do maléolo medial no túnel do tarso',
      'Tibial Anterior / Pediosa: corre no dorso do pé lateral ao extensor do hálux',
      'Fundamentais para avaliação de circulação em diabéticos (Índice ITB)'
    ]
  },
  'veia-safena-magna': {
    id: 'veia-safena-magna',
    titulo: 'Veia Safena Magna & Trajeto Medial do Membro Inferior',
    subtitulo: 'Ponto anatômico obrigatório: 1-2 cm ANTERIOR ao maléolo medial (Estação 2 da UFPB)',
    tipo: 'veia',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Gray582.png/900px-Gray582.png',
    autorOuFonte: 'Veias do Membro Inferior / Henry Gray (Estação 2 da UFPB)',
    legendaPontos: [
      'Maior veia superficial do organismo humano',
      'Passa obrigatoriamente pela FRENTE do maléolo medial no tornozelo',
      'Sobe pela face medial da perna e coxa até o Hiato Safeno na Veia Femoral'
    ]
  },
  'veia-safena-parva': {
    id: 'veia-safena-parva',
    titulo: 'Veia Safena Parva na Panturrilha Posterior',
    subtitulo: 'Ponto anatômico obrigatório: POSTERIOR ao maléolo lateral (Estação 13 da UFPB)',
    tipo: 'veia',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Gray582.png/900px-Gray582.png',
    autorOuFonte: 'Veia Safena Parva e Nervo Sural / Henry Gray',
    legendaPontos: [
      'Passa obrigatoriamente por TRÁS do maléolo lateral',
      'Sobe entre os ventres do músculo gastrocnêmio com o Nervo Sural',
      'Perfura a fáscia poplítea para desembocar na Veia Poplítea'
    ]
  },
  'valva-mitral': {
    id: 'valva-mitral',
    titulo: 'Valva Atrioventricular Esquerda (Mitral / Bicúspide)',
    subtitulo: '2 cúspides volumosas e 2 músculos papilares hipertrofiados (Estação 9 da UFPB)',
    tipo: 'valva',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Diagram_of_the_human_heart_%28cropped%29.svg/1024px-Diagram_of_the_human_heart_%28cropped%29.svg.png',
    autorOuFonte: 'Aparelho Valvar Mitral / Gray\'s Anatomy',
    legendaPontos: [
      'Apenas 2 cúspides robustas (anterior e posterior)',
      'Cúspide anterior ampla e lisa contígua à via de saída aórtica',
      'Cordas tendíneas grossas conectadas a 2 músculos papilares do VE'
    ]
  },
  'ligamento-arterial': {
    id: 'ligamento-arterial',
    titulo: 'Ligamento Arterial (Remanescente do Ducto de Botallo)',
    subtitulo: 'Fita fibrosa unindo arco da aorta ao tronco pulmonar (Estação 17 da UFPB)',
    tipo: 'misto',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Diagram_of_the_human_heart_%28cropped%29.svg/1024px-Diagram_of_the_human_heart_%28cropped%29.svg.png',
    autorOuFonte: 'Anatomia Mediastinal / Gray\'s Anatomy',
    legendaPontos: [
      'Cordão fibroso tenso na concavidade do arco aórtico',
      'Conecta a face superior da artéria pulmonar esquerda ao arco da aorta',
      'Nervo laríngeo recorrente esquerdo faz a alça por baixo dele'
    ]
  },
  'veia-femoral': {
    id: 'veia-femoral',
    titulo: 'Veia Femoral e Veia Poplítea (Sistema Venoso Profundo)',
    subtitulo: 'Drenagem profunda de 90% do retorno venoso dos MMII',
    tipo: 'veia',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Gray548.png/900px-Gray548.png',
    autorOuFonte: 'Sistema Venoso Profundo / Henry Gray',
    legendaPontos: [
      'Principal conduto do retorno venoso profundo dos MMII',
      'Local mais crítico de Trombose Venosa Profunda (TVP)',
      'No trígono femoral situa-se medialmente à Artéria Femoral'
    ]
  }
};

/**
 * Returns the matching anatomical illustration for an exam station
 */
export function getIllustrationForStation(stationNumeroOrId: number | string): AnatomicalImageRef | null {
  if (typeof stationNumeroOrId === 'string' && anatomicalIllustrations[stationNumeroOrId]) {
    return anatomicalIllustrations[stationNumeroOrId];
  }

  const num = typeof stationNumeroOrId === 'number' 
    ? stationNumeroOrId 
    : parseInt(String(stationNumeroOrId).replace(/\D/g, ''), 10);

  const mapByNumber: Record<number, string> = {
    1: 'arteria-braquial',
    2: 'veia-safena-magna',
    3: 'veia-cava-superior',
    4: 'auricula-esquerda',
    5: 'trabecula-septomarginal',
    6: 'valva-tricuspide',
    7: 'arteria-coronaria-esquerda',
    8: 'tronco-braquiocefalico',
    9: 'valva-mitral',
    10: 'fossa-oval',
    11: 'seio-coronario',
    12: 'musculos-papilares',
    13: 'valva-aortica',
    14: 'veia-cava-inferior',
    15: 'arteria-carotida-comum',
    16: 'arteria-subclavia',
    17: 'ligamento-arterial',
    18: 'veias-pulmonares',
    19: 'musculos-pectineos',
    20: 'arteria-coronaria-direita'
  };

  const imageKey = mapByNumber[num];
  if (imageKey && anatomicalIllustrations[imageKey]) {
    return anatomicalIllustrations[imageKey];
  }

  if (typeof stationNumeroOrId === 'string') {
    const directKey = stationNumeroOrId.toLowerCase().trim();
    if (anatomicalIllustrations[directKey]) {
      return anatomicalIllustrations[directKey];
    }
  }

  return null;
}
