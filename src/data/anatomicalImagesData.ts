export interface AnatomicalImageRef {
  id: string;
  titulo: string;
  subtitulo: string;
  tipo: 'artéria' | 'veia' | 'câmara' | 'valva' | 'misto';
  imageUrl: string;
  autorOuFonte: string;
  legendaPontos: string[];
}

export const anatomicalIllustrations: Record<string, AnatomicalImageRef> = {
  // 1. ARTÉRIA BRAQUIAL
  'arteria-braquial': {
    id: 'arteria-braquial',
    titulo: 'Artéria Braquial (Umeral) no Braço e Fossa Cubital',
    subtitulo: 'Estação 1 UFPB: Sulco bicipital medial com nervo mediano e veias satélites',
    tipo: 'artéria',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Gray525.png/900px-Gray525.png',
    autorOuFonte: 'Atlas Anatômico do Membro Superior / Henry Gray',
    legendaPontos: [
      '1. Desce pelo lado medial do bíceps braquial com luz aberta e parede elástica espessa',
      '2. Cruzada suavemente pela frente pelo Nervo Mediano (de lateral para medial)',
      '3. Acompanhada por duas veias braquiais satélites colabadas e mais escuras',
      '4. Bifurca-se no colo do rádio nas artérias Radial e Ulnar'
    ]
  },

  // 2. ARTÉRIA RADIAL
  'arteria-radial': {
    id: 'arteria-radial',
    titulo: 'Artéria Radial na Goteira do Pulso e Tabaqueira',
    subtitulo: 'Estação 2 UFPB: Entre o braquiorradial e o flexor radial do carpo',
    tipo: 'artéria',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Gray528.png/900px-Gray528.png',
    autorOuFonte: 'Dissecção do Antebraço e Mão / Henry Gray',
    legendaPontos: [
      '1. Corre na goteira do pulso entre tendão do braquiorradial (lateral) e flexor radial do carpo (medial)',
      '2. Repousa diretamente sobre a face anterior da extremidade distal do rádio',
      '3. Cruza o assoalho da tabaqueira anatômica no dorso do polegar',
      '4. Perfura o 1º interósseo dorsal para formar o Arco Palmar Profundo'
    ]
  },

  // 3. ARTÉRIA AORTA DESCENDENTE
  'arteria-aorta-descendente': {
    id: 'arteria-aorta-descendente',
    titulo: 'Artéria Aorta Descendente (Torácica)',
    subtitulo: 'Estação 3 UFPB: Mediastino posterior colado às vértebras T4 a T12',
    tipo: 'artéria',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Gray505.png/900px-Gray505.png',
    autorOuFonte: 'Mediastino Posterior e Aorta Torácica / Henry Gray',
    legendaPontos: [
      '1. Desce no mediastino posterior colada aos corpos vertebrais torácicos (T4 a T12)',
      '2. Emite 9 pares de artérias intercostais posteriores para a parede torácica',
      '3. Situa-se à esquerda do esôfago e da veia ázigos',
      '4. Perfura o diafragma pelo hiato aórtico (T12) tornando-se aorta abdominal'
    ]
  },

  // 4. ARTÉRIA AORTA ASCENDENTE
  'arteria-aorta-ascendente': {
    id: 'arteria-aorta-ascendente',
    titulo: 'Artéria Aorta Ascendente (Raiz Intrapericárdica)',
    subtitulo: 'Estação 4 UFPB: Emerge do VE com os seios coronários dentro do saco pericárdico',
    tipo: 'artéria',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Diagram_of_the_human_heart_%28cropped%29.svg/1024px-Diagram_of_the_human_heart_%28cropped%29.svg.png',
    autorOuFonte: 'Anatomia Cardíaca da Base / Wikimedia Commons',
    legendaPontos: [
      '1. Origina-se no óstio da aorta no Ventrículo Esquerdo, contida no saco pericárdico',
      '2. Apresenta o bulbo da aorta com os seios de Valsalva de onde saem as coronárias',
      '3. Ascende cerca de 5 cm posterior ao tronco pulmonar e medial à aurícula direita',
      '4. Continua-se no nível do ângulo esternal (T4) como Arco da Aorta'
    ]
  },

  // 5. EPICÁRDIO
  'epicardio': {
    id: 'epicardio',
    titulo: 'Epicárdio (Lâmina Visceral do Pericárdio Seroso)',
    subtitulo: 'Estação 5 UFPB: Película brilhante aderida diretamente sobre a gordura do miocárdio',
    tipo: 'câmara',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Heart_anterior_exterior_view.jpg/1024px-Heart_anterior_exterior_view.jpg',
    autorOuFonte: 'Dissecção da Superfície Cardíaca / Wikimedia Commons',
    legendaPontos: [
      '1. Membrana fina, translúcida e reluzente colada intimamente na superfície miocárdica',
      '2. Cobre os depósitos de tecido adiposo dos sulcos e os vasos coronários',
      '3. Secreta o líquido seroso lubrificante para a cavidade pericárdica virtual',
      '4. Não se solta como saco solto (a bolsa solta é o pericárdio fibroso)'
    ]
  },

  // 6. MÚSCULO PECTÍNEO
  'musculo-pectineo': {
    id: 'musculo-pectineo',
    titulo: 'Músculo Pectíneo (Músculos Pectíneos do Átrio Direito)',
    subtitulo: 'Estação 6 UFPB: Cristas musculares em dente de pente na parede anterior e aurícula',
    tipo: 'câmara',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Gray490.png/900px-Gray490.png',
    autorOuFonte: 'Morfologia Interna do Átrio Direito / Henry Gray',
    legendaPontos: [
      '1. Feixes musculares paralelos em forma de dentes de pente (pecten)',
      '2. Nascem em ângulo reto a partir da Crista Terminal em direção à aurícula direita',
      '3. Contrastam com a parede posterior perfeitamente lisa do seio venoso das cavas',
      '4. Aumentam a força de contração atrial sem ganho excessivo de espessura'
    ]
  },

  // 7. ÓSTIO ÁTRIO VENTRICULAR DIREITO
  'ostio-atrio-ventricular-direito': {
    id: 'ostio-atrio-ventricular-direito',
    titulo: 'Óstio Átrio Ventricular Direito (Valva Tricúspide)',
    subtitulo: 'Estação 7 UFPB: Comunicação entre o átrio direito e ventrículo direito',
    tipo: 'valva',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Diagram_of_the_human_heart_%28cropped%29.svg/1024px-Diagram_of_the_human_heart_%28cropped%29.svg.png',
    autorOuFonte: 'Aparelho Valvar Atrioventricular / Gray\'s Anatomy',
    legendaPontos: [
      '1. Grande abertura circular no assoalho do átrio direito',
      '2. Guarnecido pelas 3 cúspides da valva tricúspide (anterior, posterior e septal)',
      '3. Circundado pelo anel fibroso direito do esqueleto cardíaco',
      '4. Permite enxergar as cordas tendíneas no interior da cavidade ventricular direita'
    ]
  },

  // 8. ÓSTIO ÁTRIO VENTRICULAR ESQUERDO
  'ostio-atrio-ventricular-esquerdo': {
    id: 'ostio-atrio-ventricular-esquerdo',
    titulo: 'Óstio Átrio Ventricular Esquerdo (Valva Mitral)',
    subtitulo: 'Estação 8 UFPB: Comunicação entre o átrio esquerdo e ventrículo esquerdo',
    tipo: 'valva',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Diagram_of_the_human_heart_%28cropped%29.svg/1024px-Diagram_of_the_human_heart_%28cropped%29.svg.png',
    autorOuFonte: 'Aparelho Valvar Mitral / Gray\'s Anatomy',
    legendaPontos: [
      '1. Abertura ovalada no assoalho do átrio esquerdo guarnecida pela Valva Mitral',
      '2. Possui 2 grandes cúspides robustas ancoradas a 2 músculos papilares',
      '3. Borda anterior em continuidade fibrosa com a raiz da valva aórtica',
      '4. Conduz o sangue oxigenado para a câmara de alta pressão ventricular esquerda'
    ]
  },

  // 9. ARCO PALMAR
  'arco-palmar': {
    id: 'arco-palmar',
    titulo: 'Arco Palmar Superficial e Profundo da Mão',
    subtitulo: 'Estação 9 UFPB: Anastomoses arteriais palmares e artérias digitais',
    tipo: 'artéria',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Gray527.png/900px-Gray527.png',
    autorOuFonte: 'Artérias da Palma da Mão / Henry Gray',
    legendaPontos: [
      '1. Arco Palmar Superficial: alça convexa sob a aponeurose palmar (predomínio da A. Ulnar)',
      '2. Emite as artérias digitais palmares comuns que se bifurcam para os dedos',
      '3. Arco Palmar Profundo: repousa sobre as bases dos metacárpicos (predomínio da A. Radial)',
      '4. Garante dupla via arterial protetora para a mão (avaliada no Teste de Allen)'
    ]
  },

  // 10. VALVA AÓRTICA
  'valva-aortica': {
    id: 'valva-aortica',
    titulo: 'Valva Aórtica (3 Cúspides Semilunares e Óstios Coronários)',
    subtitulo: 'Estação 10 UFPB: Seios de Valsalva, lúnulas e nódulos de Arâncio',
    tipo: 'valva',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Diagram_of_the_human_heart_%28cropped%29.svg/1024px-Diagram_of_the_human_heart_%28cropped%29.svg.png',
    autorOuFonte: 'Aparelho Valvar Aórtico / Gray\'s Anatomy',
    legendaPontos: [
      '1. 3 cúspides semilunares em ninho de andorinha (direita, esquerda e posterior)',
      '2. NÃO possui cordas tendíneas nem músculos papilares',
      '3. Óstios coronários visíveis no fundo dos seios aórticos direito e esquerdo',
      '4. Nódulo de Arâncio central e lúnula em cada borda livre semilunar'
    ]
  },

  // 11. ARTÉRIA ILÍACA COMUM
  'arteria-iliaca-comum': {
    id: 'arteria-iliaca-comum',
    titulo: 'Artéria Ilíaca Comum (Bifurcação Aórtica em L4)',
    subtitulo: 'Estação 11 UFPB: Ramos divergentes em Y ao nível da linha bi-ilíaca',
    tipo: 'artéria',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Gray539.png/900px-Gray539.png',
    autorOuFonte: 'Aorta Abdominal e Ramos Ilíacos / Henry Gray',
    legendaPontos: [
      '1. Ramos terminais em "Y" da Aorta Abdominal na altura da 4ª vértebra lombar (L4)',
      '2. Calibre espesso de 10 a 12 mm com trajeto oblíquo de cerca de 4 a 5 cm',
      '3. Bifurca-se no nível do disco L5-S1 em Artéria Ilíaca Externa e Interna',
      '4. Medial ao músculo psoas maior e anterior às veias ilíacas comuns'
    ]
  },

  // 12. VEIA SUBCLÁVIA
  'veia-subclavia': {
    id: 'veia-subclavia',
    titulo: 'Veia Subclávia (Anterior ao Músculo Escaleno Anterior)',
    subtitulo: 'Estação 12 UFPB: Cruza a 1ª costela anterior ao escaleno e à artéria subclávia',
    tipo: 'veia',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Gray506.png/900px-Gray506.png',
    autorOuFonte: 'Desfiladeiro Torácico e Vasos Subclávios / Henry Gray',
    legendaPontos: [
      '1. Passa OBRIGATORIAMENTE PELA FRENTE do Músculo Escaleno Anterior',
      '2. A Artéria Subclávia passa ATRÁS do escaleno anterior no hiato interescalênico',
      '3. Une-se à Veia Jugular Interna no ângulo de Pirogoff formando a V. Braquiocefálica',
      '4. Recebe o Ducto Torácico à esquerda e o Ducto Linfático à direita'
    ]
  },

  // 13. ARTÉRIA AXILAR
  'arteria-axilar': {
    id: 'arteria-axilar',
    titulo: 'Artéria Axilar e o "M" do Plexo Braquial',
    subtitulo: 'Estação 13 UFPB: Cruza a fossa axilar sob o peitoral menor',
    tipo: 'artéria',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Gray523.png/900px-Gray523.png',
    autorOuFonte: 'Fossa Axilar e Plexo Braquial / Henry Gray',
    legendaPontos: [
      '1. Continuação da subclávia a partir da borda lateral da 1ª costela até o redondo maior',
      '2. Cruzada anteriormente pelo tendão do músculo Peitoral Menor',
      '3. Intimamente abraçada pelas alças nervosas em "M" do Plexo Braquial',
      '4. Continua-se no braço diretamente como Artéria Braquial'
    ]
  },

  // 14. ARTÉRIA INTERVENTRICULAR DA AORTA (INTERVENTRICULAR ANTERIOR / ADA)
  'arteria-interventricular': {
    id: 'arteria-interventricular',
    titulo: 'Artéria Interventricular Anterior (Ramo da Coronária Esquerda)',
    subtitulo: 'Estação 14 UFPB: Sulco interventricular anterior em direção ao ápice',
    tipo: 'artéria',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Coronary_arteries.svg/1024px-Coronary_arteries.svg.png',
    autorOuFonte: 'Circulação Coronariana / Patrick J. Lynch',
    legendaPontos: [
      '1. Emerge da Artéria Coronária Esquerda sob a aurícula esquerda (e NÃO direto da aorta)',
      '2. Corre no sulco interventricular anterior acompanhada pela Grande Veia Cardíaca',
      '3. Irriga os 2/3 anteriores do septo interventricular e a parede anterior do VE',
      '4. Contorna o ápice cardíaco anastomosando-se com a interventricular posterior'
    ]
  },

  // 15. PERICÁRDIO FIBROSO
  'pericardio-fibroso': {
    id: 'pericardio-fibroso',
    titulo: 'Pericárdio Fibroso (Saco Externo Inelástico)',
    subtitulo: 'Estação 15 UFPB: Cápsula densa opaca que ancora o coração ao diafragma e esterno',
    tipo: 'câmara',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Heart_anterior_exterior_view.jpg/1024px-Heart_anterior_exterior_view.jpg',
    autorOuFonte: 'Saco Pericárdico Externo / Wikimedia Commons',
    legendaPontos: [
      '1. Saco externo espesso, resistente, esbranquiçado, opaco e inelástico',
      '2. Funde-se inferiormente ao centro tendíneo do diafragma (lig. pericardiofrênico)',
      '3. Funde-se superiormente à túnica adventícia dos grandes vasos da base',
      '4. Impede a dilatação aguda súbita das câmaras cardíacas'
    ]
  },

  // 16. PERICÁRDIO SEROSO
  'pericardio-seroso': {
    id: 'pericardio-seroso',
    titulo: 'Pericárdio Seroso (Lâmina Parietal e Lâmina Visceral)',
    subtitulo: 'Estação 16 UFPB: Folheto parietal interno e visceral (epicárdio) com líquido seroso',
    tipo: 'câmara',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Diagram_of_the_human_heart_%28cropped%29.svg/1024px-Diagram_of_the_human_heart_%28cropped%29.svg.png',
    autorOuFonte: 'Folhetos Pericárdicos / Gray\'s Anatomy',
    legendaPontos: [
      '1. Lâmina Parietal: forra internamente o pericárdio fibroso como película lisa e brilhante',
      '2. Lâmina Visceral (Epicárdio): adere diretamente à superfície externa do miocárdio',
      '3. Cavidade Pericárdica: espaço virtual contendo 15 a 50 mL de líquido lubrificante',
      '4. Forma os seios transverso e oblíquo do pericárdio na reflexão dos grandes vasos'
    ]
  },

  // 17. ARTÉRIA CARÓTIDA COMUM
  'arteria-carotida-comum': {
    id: 'arteria-carotida-comum',
    titulo: 'Artéria Carótida Comum no Trígono Carotídeo',
    subtitulo: 'Estação 17 UFPB: Bainha carotídea sem ramos até a cartilagem tireóidea (C4)',
    tipo: 'artéria',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Gray511.png/900px-Gray511.png',
    autorOuFonte: 'Trígono Carotídeo e Bainha / Henry Gray',
    legendaPontos: [
      '1. Tubo arterial cilíndrico reto vertical que ascende pelo pescoço sem dar ramos cervicais',
      '2. Contida na Bainha Carotídea medialmente à V. Jugular Interna e anterior ao Nervo Vago',
      '3. Termina na borda superior da cartilagem tireóidea (nível vertebral C4)',
      '4. Pulso central de escolha na avaliação de Parada Cardiorrespiratória (RCP)'
    ]
  },

  // 18. ARTÉRIA CARÓTIDA EXTERNA E INTERNA
  'arteria-carotida-externa-interna': {
    id: 'arteria-carotida-externa-interna',
    titulo: 'Artérias Carótida Externa e Interna (Bifurcação em C4)',
    subtitulo: 'Estação 18 UFPB: Externa emite ramos cervicais; Interna sobe lisa para o crânio com o seio carotídeo',
    tipo: 'artéria',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Gray511.png/900px-Gray511.png',
    autorOuFonte: 'Bifurcação Carotídea / Henry Gray',
    legendaPontos: [
      '1. Carótida Externa: ântero-medial, emite ramos imediatos no pescoço (tireóidea sup, lingual, facial)',
      '2. Carótida Interna: póstero-lateral, não emite nenhum ramo no pescoço e entra no canal carotídeo',
      '3. Seio Carotídeo: dilatação na base da carótida interna com barorreceptores (nervo IX)',
      '4. Corpo Carotídeo: quimiorreceptor no ângulo da bifurcação sensível a hipóxia e acidose'
    ]
  },

  // 19. AURÍCULA DIREITA
  'auricula-direita': {
    id: 'auricula-direita',
    titulo: 'Aurícula Direita (Apêndice Atrial Direito)',
    subtitulo: 'Estação 19 UFPB: Apêndice triangular sobre a raiz da aorta ascendente',
    tipo: 'câmara',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Heart_anterior_exterior_view.jpg/1024px-Heart_anterior_exterior_view.jpg',
    autorOuFonte: 'Superfície Anterior do Coração / Wikimedia Commons',
    legendaPontos: [
      '1. Bolsa muscular cônica larga em forma de orelha de cão na frente do átrio direito',
      '2. Sobrepõe-se e abraça a raiz ântero-lateral da Aorta Ascendente',
      '3. Cavidade interna densamente forrada por cristas de Músculos Pectíneos',
      '4. Local clássico de canulação venosa superior em circulação extracorpórea (CEC)'
    ]
  },

  // 20. MÚSCULO PAPILAR
  'musculo-papilar': {
    id: 'musculo-papilar',
    titulo: 'Músculos Papilares e Cordas Tendíneas Ventriculares',
    subtitulo: 'Estação 20 UFPB: Colunas carnosas que tracionam as cúspides na sístole',
    tipo: 'câmara',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Diagram_of_the_human_heart_%28cropped%29.svg/1024px-Diagram_of_the_human_heart_%28cropped%29.svg.png',
    autorOuFonte: 'Câmaras Ventriculares e Aparelho Subvalvar / Gray\'s Anatomy',
    legendaPontos: [
      '1. Colunas musculares cônicas salientes na parede do miocárdio ventricular',
      '2. Do ápice partem dezenas de cordas tendíneas fibrosas esbranquiçadas até as cúspides',
      '3. VE possui 2 músculos papilares gigantescos (anterior e posterior)',
      '4. VD possui 3 músculos papilares menores (anterior, posterior e septal)'
    ]
  },

  // 21. SEPTO INTERVENTRICULAR
  'septo-interventricular': {
    id: 'septo-interventricular',
    titulo: 'Septo Interventricular (Porção Muscular e Membranosa)',
    subtitulo: 'Estação 21 UFPB: Parede divisória espessa entre os ventrículos direito e esquerdo',
    tipo: 'câmara',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Diagram_of_the_human_heart_%28cropped%29.svg/1024px-Diagram_of_the_human_heart_%28cropped%29.svg.png',
    autorOuFonte: 'Corte Anatômico Cardíaco / Gray\'s Anatomy',
    legendaPontos: [
      '1. Porção Muscular: espessa e compacta, perfaz mais de 90% da massa septal inferior',
      '2. Porção Membranosa: superior, delgada e translúcida junto à raiz aórtica',
      '3. Abaulado em direção ao VD pela maior pressão intracavitária do VE',
      '4. Percorrido internamente pelos ramos direito e esquerdo do Feixe de His'
    ]
  },

  // 22. ARTÉRIA ILÍACA INTERNA
  'arteria-iliaca-interna': {
    id: 'arteria-iliaca-interna',
    titulo: 'Artéria Ilíaca Interna (Hipogástrica)',
    subtitulo: 'Estação 22 UFPB: Mergulha profundamente para dentro da cavidade da pelve menor',
    tipo: 'artéria',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Gray540.png/900px-Gray540.png',
    autorOuFonte: 'Vasos da Pelve e Períneo / Henry Gray',
    legendaPontos: [
      '1. Ramo medial da bifurcação da ilíaca comum no nível do disco L5-S1',
      '2. Mergulha verticalmente para dentro do estreito superior da pelve menor',
      '3. Diferencia-se da ilíaca externa que segue rente ao psoas para a perna',
      '4. Irriga as vísceras pélvicas (bexiga, útero, próstata, reto) e músculos glúteos'
    ]
  },

  // 23. VEIA SAFENA MAGNA
  'veia-safena-magna': {
    id: 'veia-safena-magna',
    titulo: 'Veia Safena Magna (Anterior ao Maléolo Medial)',
    subtitulo: 'Estação 23 UFPB: Maior veia superficial passando 1 a 2 cm anterior ao maléolo interno',
    tipo: 'veia',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Gray582.png/900px-Gray582.png',
    autorOuFonte: 'Veias Superficiais do Membro Inferior / Henry Gray',
    legendaPontos: [
      '1. Passa OBRIGATORIAMENTE 1 a 2 cm ANTERIOR ao Maléolo Medial no tornozelo',
      '2. Sobe pela face medial da perna (com nervo safeno) e coxa (com M. sartório)',
      '3. Perfura a fáscia lata no Hiato Safeno para desembocar na Veia Femoral',
      '4. Principal vaso retirado para enxertos cirúrgicos de ponte de safena'
    ]
  },

  // 24. VEIA SAFENA PARVA
  'veia-safena-parva': {
    id: 'veia-safena-parva',
    titulo: 'Veia Safena Parva (Posterior ao Maléolo Lateral)',
    subtitulo: 'Estação 24 UFPB: Sobe pela linha média da panturrilha até a veia poplítea',
    tipo: 'veia',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Gray582.png/900px-Gray582.png',
    autorOuFonte: 'Veia Safena Parva e Nervo Sural / Henry Gray',
    legendaPontos: [
      '1. Passa OBRIGATORIAMENTE por TRÁS (posterior) do Maléolo Lateral no tornozelo',
      '2. Sobe na linha média da panturrilha entre as cabeças do gastrocnêmio com o Nervo Sural',
      '3. Perfura a fáscia poplítea para desembocar diretamente na Veia Poplítea',
      '4. Drena a borda lateral do pé, calcanhar e face posterior da perna'
    ]
  }
};

/**
 * Returns matching anatomical illustration by ID or Station Number 1 to 24
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
    2: 'arteria-radial',
    3: 'arteria-aorta-descendente',
    4: 'arteria-aorta-ascendente',
    5: 'epicardio',
    6: 'musculo-pectineo',
    7: 'ostio-atrio-ventricular-direito',
    8: 'ostio-atrio-ventricular-esquerdo',
    9: 'arco-palmar',
    10: 'valva-aortica',
    11: 'arteria-iliaca-comum',
    12: 'veia-subclavia',
    13: 'arteria-axilar',
    14: 'arteria-interventricular',
    15: 'pericardio-fibroso',
    16: 'pericardio-seroso',
    17: 'arteria-carotida-comum',
    18: 'arteria-carotida-externa-interna',
    19: 'auricula-direita',
    20: 'musculo-papilar',
    21: 'septo-interventricular',
    22: 'arteria-iliaca-interna',
    23: 'veia-safena-magna',
    24: 'veia-safena-parva'
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

    // Keyword match
    if (directKey.includes('braquial')) return anatomicalIllustrations['arteria-braquial'];
    if (directKey.includes('radial')) return anatomicalIllustrations['arteria-radial'];
    if (directKey.includes('aorta descendente') || directKey.includes('toracica descendente')) return anatomicalIllustrations['arteria-aorta-descendente'];
    if (directKey.includes('aorta ascendente')) return anatomicalIllustrations['arteria-aorta-ascendente'];
    if (directKey.includes('epicardio')) return anatomicalIllustrations['epicardio'];
    if (directKey.includes('pectineo') || directKey.includes('pectinado')) return anatomicalIllustrations['musculo-pectineo'];
    if (directKey.includes('ostio') && directKey.includes('direito')) return anatomicalIllustrations['ostio-atrio-ventricular-direito'];
    if (directKey.includes('ostio') && directKey.includes('esquerdo')) return anatomicalIllustrations['ostio-atrio-ventricular-esquerdo'];
    if (directKey.includes('arco palmar') || directKey.includes('palmar')) return anatomicalIllustrations['arco-palmar'];
    if (directKey.includes('valva aortica') || directKey.includes('valva da aorta')) return anatomicalIllustrations['valva-aortica'];
    if (directKey.includes('iliaca comum')) return anatomicalIllustrations['arteria-iliaca-comum'];
    if (directKey.includes('veia subclavia')) return anatomicalIllustrations['veia-subclavia'];
    if (directKey.includes('axilar')) return anatomicalIllustrations['arteria-axilar'];
    if (directKey.includes('interventricular')) return anatomicalIllustrations['arteria-interventricular'];
    if (directKey.includes('pericardio fibroso')) return anatomicalIllustrations['pericardio-fibroso'];
    if (directKey.includes('pericardio seroso')) return anatomicalIllustrations['pericardio-seroso'];
    if (directKey.includes('carotida externa') || directKey.includes('carotida interna')) return anatomicalIllustrations['arteria-carotida-externa-interna'];
    if (directKey.includes('carotida comum') || directKey.includes('carotida')) return anatomicalIllustrations['arteria-carotida-comum'];
    if (directKey.includes('auricula direita')) return anatomicalIllustrations['auricula-direita'];
    if (directKey.includes('papilar') || directKey.includes('papilares')) return anatomicalIllustrations['musculo-papilar'];
    if (directKey.includes('septo')) return anatomicalIllustrations['septo-interventricular'];
    if (directKey.includes('iliaca interna')) return anatomicalIllustrations['arteria-iliaca-interna'];
    if (directKey.includes('safena magna')) return anatomicalIllustrations['veia-safena-magna'];
    if (directKey.includes('safena parva')) return anatomicalIllustrations['veia-safena-parva'];
  }

  return null;
}
