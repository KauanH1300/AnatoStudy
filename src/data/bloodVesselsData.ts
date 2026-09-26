export interface BloodVessel {
  id: string;
  nome: string;
  nomenclaturaAlternativa?: string;
  tipo: 'artéria' | 'veia';
  territorio: 'Cabeça & Pescoço' | 'Tórax & Coração' | 'Abdome & Pelve' | 'Membro Superior' | 'Membro Inferior';
  tipoDeSangue: 'arterial' | 'venoso';
  deOndeVem: string; // Origem anatômica
  ateOndeVai: string; // Trajeto e término / confluência
  responsavelPor: string; // O que nutre ou o que drena (função fisiológica X)
  seRamifica: boolean; // Se ramifica / bifurca (artérias) ou confluências / tributárias (veias)
  ramificacoesPrincipais: string[]; // Lista detalhada de ramos ou afluentes
  caracteristicasAnatomicas: string[]; // Calibre, trajeto, relações de sintopia, paredes, presença de válvulas
  dicaPraticaBancada: string; // Como reconhecer no laboratório da UFPB sem tocar
  relevanciaFisioterapia?: string; // Pulsos, punção, bypass, claudicação, trombose venosa, etc.
  relevanciaFisio?: string;
}

export const bloodVesselsData: BloodVessel[] = [
  // ==========================================
  // CORAÇÃO & GRANDES VASOS
  // ==========================================
  {
    id: 'aorta',
    nome: 'Artéria Aorta (Ascendente, Arco e Descendente)',
    nomenclaturaAlternativa: 'Tronco aórtico sistêmico',
    tipo: 'artéria',
    territorio: 'Tórax & Coração',
    tipoDeSangue: 'arterial',
    deOndeVem: 'Inicia-se no óstio da aorta, no orifício de saída do Ventrículo Esquerdo do coração (ao nível do 3º espaço intercostal esquerdo).',
    ateOndeVai: 'Ascende como aorta ascendente (~5 cm), curva-se para a esquerda e para trás como Arco da Aorta (ao nível do ângulo esternal de Louis / T4), desce pelo tórax como aorta torácica, perfura o diafragma pelo hiato aórtico (T12) e percorre o abdome até o corpo vertebral de L4, onde se bifurca.',
    responsavelPor: 'Principal tronco arterial do corpo humano: é responsável por receber 100% do débito cardíaco sistêmico e distribuir sangue altamente oxigenado e repleto de nutrientes para todas as células, tecidos e órgãos do corpo.',
    seRamifica: true,
    ramificacoesPrincipais: [
      'Na raiz da Aorta Ascendente: Artérias Coronárias Direita e Esquerda (nutrem o próprio coração).',
      'Na convexidade do Arco da Aorta (3 ramos clássicos da D para a E): 1º Tronco Braquiocefálico, 2º Artéria Carótida Comum Esquerda, 3º Artéria Subclávia Esquerda.',
      'Na Aorta Torácica: Artérias bronquiais, esofágicas, mediastinais, pericárdicas e 9 pares de artérias intercostais posteriores.',
      'Na Aorta Abdominal: Tronco celíaco, artérias mesentéricas superior e inferior, renais, gonadais, frênicas inferiores e lombares.',
      'Terminação em L4: Bifurca-se nas Artérias Ilíacas Comuns Direita e Esquerda e emite a fina Artéria Sacral Mediana.'
    ],
    caracteristicasAnatomicas: [
      'Artéria elástica típica de maior calibre do organismo (diâmetro ~2,5 a 3,0 cm na raiz).',
      'Parede média riquíssima em fibras elásticas concêntricas (efeito Windkessel: expande-se na sístole e retrai-se na diástole amortecendo a pressão).',
      'Mantém lúmen cilíndrico perfeitamente aberto e parede firme nas peças cadavéricas formolizadas.'
    ],
    dicaPraticaBancada: 'No arco da aorta, observe os 3 ramos superiores. O primeiro e mais calibroso à direita é o Tronco Braquiocefálico. A concavidade inferior do arco é unida ao tronco pulmonar pelo Ligamento Arterial.',
    relevanciaFisioterapia: 'O aneurisma de aorta (torácico ou abdominal) é contraindicação para manobras de Valsalva e esforço isométrico máximo. A rigidez aórtica senil é o principal determinante da Hipertensão Sistólica Isolada.'
  },
  {
    id: 'tronco-pulmonar',
    nome: 'Tronco Pulmonar (e Artérias Pulmonares)',
    nomenclaturaAlternativa: 'Artéria pulmonar comum',
    tipo: 'artéria',
    territorio: 'Tórax & Coração',
    tipoDeSangue: 'venoso',
    deOndeVem: 'Origina-se no cone arterial (infundíbulo) do Ventrículo Direito, anterior e ligeiramente à esquerda da raiz da aorta.',
    ateOndeVai: 'Percorre trajeto oblíquo ascendente para trás e para a esquerda (~5 cm) e, imediatamente abaixo da concavidade do arco aórtico (nível T5), divide-se nas duas artérias pulmonares que penetram nos hilos pulmonares.',
    responsavelPor: 'Responsável por conduzir TODO o sangue venoso desoxigenado (rico em CO₂) ejetado pelo Ventrículo Direito até os alvéolos pulmonares para sofrer a hematose.',
    seRamifica: true,
    ramificacoesPrincipais: [
      'Artéria Pulmonar Direita: mais longa e ligeiramente mais calibrosa; passa horizontalmente atrás da aorta ascendente e veia cava superior em direção ao hilo pulmonar direito.',
      'Artéria Pulmonar Esquerda: mais curta; passa anteriormente à aorta descendente até o hilo pulmonar esquerdo, conectada ao arco da aorta pelo ligamento arterial.',
      'Nos pulmões: ramificam-se em ramos lobares (3 à direita e 2 à esquerda), segmentares e arteríolas pré-capilares.'
    ],
    caracteristicasAnatomicas: [
      'Vaso arterial mais anterior na base do coração.',
      'Apesar de ser estruturalmente uma ARTÉRIA (leva sangue para longe do coração), transporta sangue VENOSO (pobre em O₂).',
      'Regime de baixa pressão (~25/10 mmHg) em condições normais.'
    ],
    dicaPraticaBancada: 'Localize a raiz arterial mais anterior que brota na frente da aorta. Acompanhe a bifurcação em T logo abaixo do arco aórtico.',
    relevanciaFisio: 'O Tromboembolismo Pulmonar (TEP), comum no pós-operatório ou imobilismo prolongado, obstrui o tronco ou seus ramos, levando a cor pulmonale agudo e colapso ventilatório-circulatório.'
  },
  {
    id: 'veias-pulmonares',
    nome: '4 Veias Pulmonares (2 Direitas e 2 Esquerdas)',
    nomenclaturaAlternativa: 'Veias pulmonares superiores e inferiores D e E',
    tipo: 'veia',
    territorio: 'Tórax & Coração',
    tipoDeSangue: 'arterial',
    deOndeVem: 'Formam-se nos capilares e vênulas dos septos interlobulares nos hilos dos pulmões direito e esquerdo.',
    ateOndeVai: 'Percorrem trajeto curto e horizontal em direção à face posterior do coração, perfurando o pericárdio para desembocar no teto e parede póstero-lateral do Átrio Esquerdo.',
    responsavelPor: 'Responsáveis por drenar e transportar todo o sangue 100% arterializado e oxigenado (recém-saído da hematose alveolar) de volta ao coração esquerdo.',
    seRamifica: false,
    ramificacoesPrincipais: [
      'Não se ramificam (veias confluem):',
      'Veia Pulmonar Superior Direita (drena lobos superior e médio direitos).',
      'Veia Pulmonar Inferior Direita (drena lobo inferior direito).',
      'Veia Pulmonar Superior Esquerda (drena lobo superior e língula esquerdos).',
      'Veia Pulmonar Inferior Esquerda (drena lobo inferior esquerdo).'
    ],
    caracteristicasAnatomicas: [
      'Totalmente AVALVULARES (não possuem válvulas parietais na sua desembocadura).',
      'São as ÚNICAS VEIAS pós-natais do corpo que transportam sangue ARTERIAL rico em oxigênio.',
      'Suas aberturas internas formam os 4 óstios das veias pulmonares no átrio esquerdo liso.'
    ],
    dicaPraticaBancada: 'Ao olhar o coração pela face posterior (base), identifique os 4 orifícios vasculares nos cantos superiores do átrio esquerdo.',
    relevanciaFisio: 'A elevação da pressão capilar pulmonar por congestão retrógrada nas veias pulmonares (como na estenose mitral ou falência de VE) causa Edema Agudo de Pulmão (EAP).'
  },
  {
    id: 'veia-cava-superior',
    nome: 'Veia Cava Superior (VCS)',
    nomenclaturaAlternativa: 'VCS',
    tipo: 'veia',
    territorio: 'Tórax & Coração',
    tipoDeSangue: 'venoso',
    deOndeVem: 'Forma-se atrás da 1ª articulação condrosternal direita pela confluência (junção) das duas Veias Braquiocefálicas (direita e esquerda).',
    ateOndeVai: 'Desce verticalmente pelo mediastino superior e médio (~7 cm), à direita da aorta ascendente, e desemboca no teto póstero-superior do Átrio Direito.',
    responsavelPor: 'Responsável por drenar todo o sangue venoso desoxigenado de todas as estruturas situadas ACIMA do diafragma: cabeça, encéfalo, face, pescoço, ambos os membros superiores e paredes torácicas.',
    seRamifica: false,
    ramificacoesPrincipais: [
      'Recebe como tributária crucial: Veia Ázigos (que arqueia sobre o brônquio principal direito para desembocar na face posterior da VCS).',
      'Recebe pequenas veias pericárdicas e mediastinais anteriores.'
    ],
    caracteristicasAnatomicas: [
      'Vaso de grande calibre (~2 cm), de paredes relativamente finas.',
      'Totalmente desprovida de válvulas (é avalvular).',
      'Na cavidade do átrio direito, seu óstio é circular e não possui prega membranosa.'
    ],
    dicaPraticaBancada: 'Vaso cilíndrico calibroso e vertical que entra no topo do átrio direito, imediatamente à direita da aorta ascendente.',
    relevanciaFisio: 'A Síndrome da Veia Cava Superior (compressão por tumor pulmonar ou linfoma) causa edema em "escravina" (face, pescoço e MMSS) e turgência jugular exuberante.'
  },
  {
    id: 'veia-cava-inferior',
    nome: 'Veia Cava Inferior (VCI)',
    nomenclaturaAlternativa: 'VCI',
    tipo: 'veia',
    territorio: 'Abdome & Pelve',
    tipoDeSangue: 'venoso',
    deOndeVem: 'Forma-se na altura da 5ª vértebra lombar (L5), logo à direita da bifurcação aórtica, pela união das Veias Ilíacas Comuns Direita e Esquerda.',
    ateOndeVai: 'Sobe retroperitonealmente colada à direita da coluna lombar e da aorta, aloja-se no sulco da face visceral do fígado, perfura o centro tendíneo do diafragma pelo forame da veia cava (nível T8) e desemboca no assoalho póstero-inferior do Átrio Direito.',
    responsavelPor: 'Maior vaso venoso do organismo: drena todo o retorno venoso das regiões INFRADIAFRAGMÁTICAS: membros inferiores, pelve, períneo, retroperitônio e vísceras abdominais (estas após passarem pelo fígado via sistema porta).',
    seRamifica: false,
    ramificacoesPrincipais: [
      'Tributárias diretas no abdome: Veias hepáticas (3 grandes troncos que drenam o fígado), veias renais D e E, veias suprarrenais, veias lombares e veia gonadal direita (a esquerda drena na veia renal esquerda).'
    ],
    caracteristicasAnatomicas: [
      'Maior diâmetro venoso do corpo (~3,0 a 3,5 cm no ponto de entrada).',
      'Possui na sua desembocadura atrial um resquício embrionário: a Valva da Veia Cava Inferior (válvula de Eustáquio).'
    ],
    dicaPraticaBancada: 'No átrio direito aberto, localize o grande orifício no assoalho póstero-inferior; a borda fina e semilunar adjacente é a válvula de Eustáquio.',
    relevanciaFisio: 'Em gestantes no 3º trimestre em decúbito dorsal horizontal, o útero comprime a VCI (Síndrome da Hipotensão Supina). A fisioterapia orienta o Decúbito Lateral Esquerdo para descompressão imediata.'
  },
  {
    id: 'arteria-coronaria-esquerda',
    nome: 'Artéria Coronária Esquerda (Tronco, ADA e ACx)',
    nomenclaturaAlternativa: 'ACE / Artéria Descendente Anterior / Circunflexa',
    tipo: 'artéria',
    territorio: 'Tórax & Coração',
    tipoDeSangue: 'arterial',
    deOndeVem: 'Origina-se no Seio Aórtico Esquerdo (de Valsalva), na raiz da aorta ascendente, logo acima da cúspide semilunar esquerda.',
    ateOndeVai: 'Seu tronco principal é muito curto (~1 a 2 cm), passa entre o tronco pulmonar e a aurícula esquerda, atingindo o sulco coronário onde se divide em seus 2 ramos terminais cruciais.',
    responsavelPor: 'Irriga a maior massa do miocárdio: cerca de 65-70% do Ventrículo Esquerdo, todo o ápice do coração, os 2/3 anteriores do Septo Interventricular e a maior parte do sistema de condução ventricular (feixe de His e ramos).',
    seRamifica: true,
    ramificacoesPrincipais: [
      'Ramo Interventricular Anterior (Descendente Anterior - ADA): desce no sulco interventricular anterior até a incisura do ápice cardíaco; emite ramos diagonais (parede livre do VE) e ramos septais anteriores (septo IV).',
      'Ramo Circunflexo (ACx): contorna a borda esquerda do coração no sulco coronário até a face posterior; emite o Ramo Marginal Esquerdo.'
    ],
    caracteristicasAnatomicas: [
      'Corre acompanhada intimamente pela Grande Veia Cardíaca no sulco interventricular anterior.',
      'Possui deposição de gordura subepicárdica amarela ao seu redor em corações adultos.'
    ],
    dicaPraticaBancada: 'A artéria que desce na face anterior exatamente na fenda entre o VD e o VE é o Ramo Interventricular Anterior da ACE. É a artéria clássica das estações práticas.',
    relevanciaFisio: 'A artéria descendente anterior é chamada de "artéria da morte súbita / viúva negra", pois sua oclusão aguda causa infarto extenso de parede anterior do VE e choque cardiogênico.'
  },
  {
    id: 'arteria-coronaria-direita',
    nome: 'Artéria Coronária Direita (ACD)',
    nomenclaturaAlternativa: 'ACD / Ramo Interventricular Posterior',
    tipo: 'artéria',
    territorio: 'Tórax & Coração',
    tipoDeSangue: 'arterial',
    deOndeVem: 'Origina-se no Seio Aórtico Direito, na raiz da aorta ascendente, logo acima da cúspide semilunar direita da valva aórtica.',
    ateOndeVai: 'Corre verticalmente pelo sulco atrioventricular direito (entre AD e VD), contorna a borda aguda do coração e alcança a cruz cardíaca (crux cordis) na face diafragmática, emitindo a artéria interventricular posterior.',
    responsavelPor: 'Irriga o Átrio Direito, a maior parte do Ventrículo Direito, a face diafragmática do Ventrículo Esquerdo, 1/3 posterior do septo interventricular e centros elétricos: Nó Sinoatrial (em 60%) e Nó Atrioventricular (em 80-90%).',
    seRamifica: true,
    ramificacoesPrincipais: [
      'Ramo do Nó Sinoatrial (em 60% dos indivíduos).',
      'Ramo Marginal Direito: corre ao longo da borda inferior/aguda do coração até o ápice.',
      'Ramo do Nó Atrioventricular (no crux cordis).',
      'Ramo Interventricular Posterior (Descendente Posterior): corre no sulco homônimo na face diafragmática em direção ao ápice.'
    ],
    caracteristicasAnatomicas: [
      'Acompanhada no sulco posterior pela Veia Cardíaca Média.',
      'Determina a "dominância coronária" (em 85-90% das pessoas a circulação é dita com dominância direita).'
    ],
    dicaPraticaBancada: 'Vaso que preenche a fenda gordurosa entre o átrio direito e o ventrículo direito. Na borda inferior do VD, procure o ramo marginal direito.',
    relevanciaFisio: 'O IAM de parede inferior por oclusão de coronária direita frequentemente cursa com bradicardias severas e Bloqueio Atrioventricular (BAV) total, exigindo monitorização rigorosa do fisioterapeuta.'
  },
  {
    id: 'seio-coronario',
    nome: 'Seio Coronário (e Veias Cardíacas)',
    nomenclaturaAlternativa: 'Sinus coronarius',
    tipo: 'veia',
    territorio: 'Tórax & Coração',
    tipoDeSangue: 'venoso',
    deOndeVem: 'Forma-se na face posterior do coração no sulco coronário esquerdo pela confluência da Grande Veia Cardíaca com a Veia Oblíqua do Átrio Esquerdo (de Marshall).',
    ateOndeVai: 'Percorre da esquerda para a direita o sulco atrioventricular posterior (~2 a 3 cm de comprimento) e desemboca diretamente na parede póstero-inferior do Átrio Direito.',
    responsavelPor: 'Drena a grande maioria (~80 a 85%) de todo o sangue venoso desoxigenado que irrigou as quatro câmaras e o miocárdio do próprio coração.',
    seRamifica: false,
    ramificacoesPrincipais: [
      'Principais veias tributárias que desembocam no seio:',
      'Grande Veia Cardíaca (ascende pelo sulco interventricular anterior acompanhando a ADA).',
      'Veia Cardíaca Média (corre no sulco interventricular posterior acompanhando a coronária posterior).',
      'Pequena Veia Cardíaca (acompanha a artéria coronária direita).',
      'Veia Posterior do Ventrículo Esquerdo.'
    ],
    caracteristicasAnatomicas: [
      'Canal venoso largo e dilatado de parede extremamente delgada.',
      'Sua desembocadura no átrio direito possui uma fina prega semilunar: a Valva do Seio Coronário (valva de Tebésio).',
      'Fica no Trígono de Koch, perto do nó atrioventricular.'
    ],
    dicaPraticaBancada: 'Localize o pequeno orifício venoso no assoalho do átrio direito, situado exatamente entre o óstio da VCI e o anel da valva tricúspide. Contém uma válvulazinha delgada.',
    relevanciaFisio: 'Usado na cirurgia de ressincronização cardíaca (marcapasso biventricular) para introduzir o eletrodo que estimula a parede lateral do VE através das veias tributárias do seio coronário.'
  },

  // ==========================================
  // CABEÇA & PESCOÇO
  // ==========================================
  {
    id: 'arteria-carotida-comum',
    nome: 'Artérias Carótidas Comuns (Direita e Esquerda)',
    nomenclaturaAlternativa: 'Carótidas primitivas',
    tipo: 'artéria',
    territorio: 'Cabeça & Pescoço',
    tipoDeSangue: 'arterial',
    deOndeVem: 'Assimetria de origem clássica: a Carótida Comum Direita nasce da bifurcação do Tronco Braquiocefálico atrás da articulação esternoclavicular D; a Carótida Comum Esquerda nasce DIRETO do arco da aorta no mediastino.',
    ateOndeVai: 'Asciende verticalmente pelo pescoço dentro da bainha carotídea até a borda superior da cartilagem tireóidea (nível da vértebra C4), onde se dilata e bifurca-se.',
    responsavelPor: 'Principal tronco nutricio para o encéfalo, olhos, crânio, couro cabeludo e todas as vísceras e músculos da cabeça e do pescoço.',
    seRamifica: true,
    ramificacoesPrincipais: [
      'NÃO dá nenhum ramo colateral ao longo do pescoço!',
      'Bifurca-se em C4 nos seus 2 ramos terminais: Artéria Carótida Interna (vai para o encéfalo sem ramos no pescoço) e Artéria Carótida Externa (dá 8 ramos para face, tireoide, língua e couro cabeludo).'
    ],
    caracteristicasAnatomicas: [
      'Na bifurcação (C4) encontram-se duas estruturas vitais:',
      'Seio Carotídeo: dilatação na base da carótida interna rica em BARORRECEPTORES (medem a PA).',
      'Corpo Carotídeo: pequeno nódulo posterior rico em QUIMIORRECEPTORES (medem O₂, CO₂ e pH arterial).',
      'Contida na bainha carotídea junto com a Veia Jugular Interna (lateral) e o Nervo Vago (posterior).'
    ],
    dicaPraticaBancada: 'Procure o vaso arterial calibroso que sobe medialmente ao músculo esternocleidomastóideo. Repare que ele não emite nenhum ramo até a altura da cartilagem tireóidea.',
    relevanciaFisio: 'O Pulso Carotídeo é o padrão-ouro em emergências e RCP. Cuidado com massagem carotídea excessiva que pode disparar reflexo vagal com bradicardia e síncope imediata.'
  },
  {
    id: 'veia-jugular-interna',
    nome: 'Veia Jugular Interna (VJI)',
    nomenclaturaAlternativa: 'VJI',
    tipo: 'veia',
    territorio: 'Cabeça & Pescoço',
    tipoDeSangue: 'venoso',
    deOndeVem: 'Inicia-se no forame jugular da base do crânio como continuação direta do Seio Sigmóideo (que drena o interior da calvária).',
    ateOndeVai: 'Desce verticalmente pelo pescoço, primeiro posterior e depois lateral à artéria carótida interna e comum, e atrás da extremidade esternal da clavícula une-se com a Veia Subclávia para formar a Veia Braquiocefálica.',
    responsavelPor: 'Maior e mais importante veia do pescoço: drena todo o sangue venoso do encéfalo, meninges, cavidade orbitária e a maior parte das estruturas profundas da face e pescoço.',
    seRamifica: false,
    ramificacoesPrincipais: [
      'Recebe como tributárias no pescoço: Tronco tireolinguofacial (veias tireóidea superior, lingual e facial), veias faríngeas e veia tireóidea média.'
    ],
    caracteristicasAnatomicas: [
      'Possui um bulbo superior (no forame jugular) e um bulbo inferior com válvulas pares logo acima da união com a subclávia.',
      'Situa-se superficial e anterolateral à artéria carótida, sob a cobertura do músculo esternocleidomastóideo (ECM).'
    ],
    dicaPraticaBancada: 'Vaso venoso volumoso (muitas vezes colabado ou com sangue escuro coagulado) situado lateralmente à carótida comum dentro da bainha fascial.',
    relevanciaFisio: 'A Turgência Jugular patológica (ingurgitamento jugular a 45º) é sinal clínico direto de aumento da pressão no coração direito (insuficiência cardíaca direita ou tamponamento).'
  },
  {
    id: 'veia-jugular-externa',
    nome: 'Veia Jugular Externa (VJE)',
    nomenclaturaAlternativa: 'VJE',
    tipo: 'veia',
    territorio: 'Cabeça & Pescoço',
    tipoDeSangue: 'venoso',
    deOndeVem: 'Forma-se no ângulo da mandíbula pela união da divisão posterior da Veia Retromandibular com a Veia Auricular Posterior.',
    ateOndeVai: 'Desce obliquamente no tecido subcutâneo superficialmente ao músculo esternocleidomastóideo, cruza-o em diagonal, perfura a fáscia cervical profunda e desemboca na Veia Subclávia.',
    responsavelPor: 'Drena a maior parte do couro cabeludo posterior, face lateral e regiões superficiais do pescoço.',
    seRamifica: false,
    ramificacoesPrincipais: [
      'Recebe as veias cervicais transversas, supraescapulares e a veia jugular anterior.'
    ],
    caracteristicasAnatomicas: [
      'Veia estritamente SUPERFICIAL: repousa sobre a face externa do músculo ECM sob o platisma.',
      'Possui válvulas no seu terço inferior.'
    ],
    dicaPraticaBancada: 'Procure a veia que cruza superficialmente o músculo esternocleidomastóideo em diagonal. Não confunda com a jugular interna que fica escondida e profunda!',
    relevanciaFisio: 'Pode ser vista a olho nu ingurgitada durante esforço expiratório contra a glote fechada (manobra de Valsalva) ou em acessos de tosse.'
  },

  // ==========================================
  // MEMBRO SUPERIOR
  // ==========================================
  {
    id: 'arteria-subclavia',
    nome: 'Artérias Subclávias (Direita e Esquerda)',
    nomenclaturaAlternativa: 'Subclávia D e E',
    tipo: 'artéria',
    territorio: 'Membro Superior',
    tipoDeSangue: 'arterial',
    deOndeVem: 'Subclávia Direita nasce da bifurcação do Tronco Braquiocefálico; Subclávia Esquerda nasce direto do Arco da Aorta.',
    ateOndeVai: 'Arqueia-se sobre a cúpula pleural e sobre a 1ª costela, passando entre os músculos escaleno anterior e médio (hiato interescalênico); ao cruzar a borda lateral da 1ª costela, muda de nome e torna-se Artéria Axilar.',
    responsavelPor: 'Irrigação arterial de todo o membro superior, além de emitir vasos cruciais para a base do encéfalo (artéria vertebral) e parede torácica.',
    seRamifica: true,
    ramificacoesPrincipais: [
      '1ª parte: Artéria Vertebral (sobe pelos forames transversários das vértebras cervicais até o crânio), Artéria Torácica Interna (mamária interna) e Tronco Tireocervical.',
      '2ª parte: Tronco Costocervical.',
      '3ª parte: Artéria Escapular Dorsal.'
    ],
    caracteristicasAnatomicas: [
      'Passa pelo hiato interescalênico abraçada pelas raízes do Plexo Braquial.',
      'Relaciona-se intimamente com o sulco da 1ª costela, onde pode ser comprimida contra o osso.'
    ],
    dicaPraticaBancada: 'No arco aórtico, é o terceiro ramo (mais à esquerda). No pescoço, corre profundamente atrás da clavícula e do escaleno anterior.',
    relevanciaFisio: 'A Síndrome do Desfiladeiro Torácico (compressão da artéria subclávia e plexo braquial por costela cervical ou hipertrofia de escalenos) gera parestesia, dor e palidez no membro superior, avaliada pelo Teste de Adson.'
  },
  {
    id: 'arteria-braquial',
    nome: 'Artéria Braquial',
    nomenclaturaAlternativa: 'Artéria umeral',
    tipo: 'artéria',
    territorio: 'Membro Superior',
    tipoDeSangue: 'arterial',
    deOndeVem: 'Continuação direta da Artéria Axilar a partir da borda inferior do tendão do músculo redondo maior.',
    ateOndeVai: 'Desce pela face medial do braço no sulco bicipital medial até a fossa cubital (cerca de 2 cm distal à prega do cotovelo, no colo do rádio), onde se bifurca em Artéria Radial e Artéria Ulnar.',
    responsavelPor: 'Principal conduto arterial para todas as estruturas do braço, antebraço e mão.',
    seRamifica: true,
    ramificacoesPrincipais: [
      'Artéria Braquial Profunda (acompanha o nervo radial no sulco do nervo radial irrigando o tríceps).',
      'Artéria Colateral Ulnar Superior e Colateral Ulnar Inferior (formam a rede anastomótica do cotovelo).',
      'Terminação: Artéria Radial e Artéria Ulnar na fossa cubital.'
    ],
    caracteristicasAnatomicas: [
      'Ladeada intimamente por 2 veias braquiais satélites e pelo Nervo Mediano (que cruza pela frente dela de lateral para medial).',
      'Na fossa cubital, repousa sobre o músculo braquial, medial ao tendão do bíceps e coberta pela aponeurose bicipital.'
    ],
    dicaPraticaBancada: 'ESTAÇÃO 1 DA PROVA UFPB: no braço dissecado, procure o vaso cilíndrico de luz aberta no sulco medial do bíceps. Cuidado para não confundir com o nervo mediano (o nervo é maciço e sem orifício!).',
    relevanciaFisio: 'Ponto anatômico obrigatório para a aferição da Pressão Arterial com estetoscópio e esfigmomanômetro na fossa cubital. Também é local de palpação do pulso braquial em bebês/crianças.'
  },
  {
    id: 'arteria-radial',
    nome: 'Artéria Radial',
    nomenclaturaAlternativa: 'Artéria do pulso radial',
    tipo: 'artéria',
    territorio: 'Membro Superior',
    tipoDeSangue: 'arterial',
    deOndeVem: 'Ramo de bifurcação lateral da Artéria Braquial na fossa cubital.',
    ateOndeVai: 'Desce pela face ântero-lateral do antebraço coberta pelo braquiorradial, contorna o processo estiloide do rádio, cruza o assoalho da Tabaqueira Anatômica e perfura o 1º músculo interósseo dorsal para formar o Arco Palmar Profundo na mão.',
    responsavelPor: 'Nutrição dos músculos do compartimento lateral e anterior do antebraço, polegar, indicador e arcos arteriais da mão.',
    seRamifica: true,
    ramificacoesPrincipais: [
      'Artéria Recorrente Radial (rede do cotovelo).',
      'Ramo Palmar Superficial (anastomosa-se com a ulnar formando o arco palmar superficial).',
      'Artéria Principal do Polegar e Artéria Radial do Indicador.',
      'Arco Palmar Profundo (sua terminação principal).'
    ],
    caracteristicasAnatomicas: [
      'Na porção distal do antebraço, repousa diretamente sobre a face anterior do osso rádio na "goteira do pulso" (entre os tendões do braquiorradial e flexor radial do carpo).',
      'Acompanhada pelo ramo superficial do nervo radial.'
    ],
    dicaPraticaBancada: 'No antebraço anterior, correndo lateralmente sobre o rádio até o lado do polegar. Na mão, passa no fundo da tabaqueira anatômica.',
    relevanciaFisio: 'Local mais comum de palpação de pulso periférico na prática clínica e teste de patência antes de gasometria arterial (Teste de Allen).'
  },
  {
    id: 'arteria-ulnar',
    nome: 'Artéria Ulnar',
    nomenclaturaAlternativa: 'Artéria cubital',
    tipo: 'artéria',
    territorio: 'Membro Superior',
    tipoDeSangue: 'arterial',
    deOndeVem: 'Ramo de bifurcação medial (geralmente mais calibroso) da Artéria Braquial na fossa cubital.',
    ateOndeVai: 'Mergulha profundamente sob o músculo pronador redondo, desce pelo lado medial do antebraço entre os flexores superficiais e profundos, passa superficial ao retináculo dos flexores no Canal de Guyon e termina formando o Arco Palmar Superficial.',
    responsavelPor: 'Irriga os músculos mediais e profundos do antebraço, ossos rádio e ulna e a maior parte da palma e dedos da mão.',
    seRamifica: true,
    ramificacoesPrincipais: [
      'Artéria Interóssea Comum (que se divide em Interóssea Anterior e Posterior).',
      'Artérias Recorrentes Ulnares anterior e posterior.',
      'Ramo Palmar Profundo.',
      'Arco Palmar Superficial (sua terminação principal).'
    ],
    caracteristicasAnatomicas: [
      'No terço distal do antebraço, corre lateral ao tendão do músculo flexor ulnar do carpo, intimamente acompanhada pelo Nervo Ulnar.',
      'Passa fora do túnel do carpo (entra na mão pelo canal ulnar / Guyon).'
    ],
    dicaPraticaBancada: 'Vaso que acompanha o nervo ulnar na borda medial (do lado do dedo mínimo) do punho.',
    relevanciaFisio: 'A compressão da artéria e nervo ulnar no Canal de Guyon por apoio contínuo em muletas ou guidão de bicicleta causa parestesia no 4º e 5º dedos.'
  },
  {
    id: 'veias-cefalica-basilica',
    nome: 'Veias Superficiais do Braço: Cefálica e Basílica',
    nomenclaturaAlternativa: 'Veia cefálica e Veia basílica (com V. intermédia do cotovelo)',
    tipo: 'veia',
    territorio: 'Membro Superior',
    tipoDeSangue: 'venoso',
    deOndeVem: 'Originam-se da rede venosa dorsal da mão (a cefálica do lado do polegar/lateral; a basílica do lado do mínimo/medial).',
    ateOndeVai: '• Veia Cefálica: sobe pela face anterolateral do antebraço e braço, corre no sulco deltopeitoral, perfura a fáscia clavipeitoral no trígono deltopeitoral e desemboca na Veia Axilar.<br />• Veia Basílica: sobe pela face medial do antebraço e braço, perfura a fáscia braquial profunda no terço médio do braço para confluir com as veias braquiais e formar a Veia Axilar.',
    responsavelPor: 'Responsáveis pela drenagem venosa superficial de todo o membro superior (pele e tecido celular subcutâneo).',
    seRamifica: false,
    ramificacoesPrincipais: [
      'Na fossa cubital, comunicam-se pela Veia Intermédia do Cotovelo (ou Veia Mediana Cubital em M), o vaso mais puncionado do corpo humano.'
    ],
    caracteristicasAnatomicas: [
      'Veias subcutâneas providas de válvulas parietais.',
      'A cefálica é lateral e a basílica é medial.',
      'A basílica perfura a fáscia profunda no braço, enquanto a cefálica sobe até a clavícula.'
    ],
    dicaPraticaBancada: 'No cadáver com pele rebatida, a veia correndo na borda lateral do bíceps e no sulco entre o deltoide e o peitoral maior é a Cefálica; a medial que mergulha no braço é a Basílica.',
    relevanciaFisio: 'Local de eleição para confecção de Fístula Arteriovenosa (FAV) para hemodiálise (anastomose entre artéria radial e veia cefálica - fístula de Cimino-Brescia).'
  },

  // ==========================================
  // MEMBRO INFERIOR
  // ==========================================
  {
    id: 'arteria-femoral',
    nome: 'Artéria Femoral (Comum, Superficial e Profunda)',
    nomenclaturaAlternativa: 'Artéria femoral comum / Trígono de Scarpa',
    tipo: 'artéria',
    territorio: 'Membro Inferior',
    tipoDeSangue: 'arterial',
    deOndeVem: 'Continuação direta da Artéria Ilíaca Externa ao passar por baixo do Ligamento Inguinal (no ponto médio entre a espinha ilíaca ântero-superior e a sínfise púbica).',
    ateOndeVai: 'Entra no Trígono Femoral, desce pelo canal dos adutores (de Hunter) e, ao atravessar o Hiato dos Adutores (abertura no tendão do adutor magno), entra na fossa poplítea e muda de nome para Artéria Poplítea.',
    responsavelPor: 'Principal eixo arterial de todo o membro inferior: nutre a coxa, fêmur, joelho, perna e pé.',
    seRamifica: true,
    ramificacoesPrincipais: [
      'Artéria Epigástrica Superficial e Circunflexa Ilíaca Superficial.',
      'Artérias Pudendas Externas.',
      'Artéria Femoral Profunda: o maior ramo, emite as artérias circunflexas femorais lateral e medial (nutrem o colo e cabeça do fêmur) e 3 artérias perfurantes.',
      'Artéria Descendente do Joelho.'
    ],
    caracteristicasAnatomicas: [
      'No Trígono Femoral (de Scarpa), compõe o feixe neurovascular com a regra "NAVe" (de lateral para medial: Nervo femoral, Artéria femoral, Veia femoral).',
      'Parede espessa e elástica, com pulso facilmente palpável na virilha.'
    ],
    dicaPraticaBancada: 'No trígono femoral na virilha, identifique o vaso arterial no meio do feixe: fica medial ao nervo femoral e lateral à veia femoral.',
    relevanciaFisio: 'A palpação do pulso femoral é rotina no exame físico vascular. Oclusão aterosclerótica na artéria femoral é a causa mais comum de claudicação intermitente na panturrilha durante a caminhada.'
  },
  {
    id: 'arteria-poplitea',
    nome: 'Artéria Poplítea',
    nomenclaturaAlternativa: 'Artéria da fossa poplítea',
    tipo: 'artéria',
    territorio: 'Membro Inferior',
    tipoDeSangue: 'arterial',
    deOndeVem: 'Continuação da Artéria Femoral a partir do Hiato dos Adutores no terço distal da coxa.',
    ateOndeVai: 'Atravessa verticalmente a fossa poplítea na face posterior do joelho até a borda inferior do músculo poplíteo, onde se bifurca em Artéria Tibial Anterior e Tronco Tibiofibular (que dá a Tibial Posterior e Fibular).',
    responsavelPor: 'Irriga a articulação do joelho, cápsula articular, ligamentos cruzados, meniscos e músculos vizinhos da coxa e panturrilha.',
    seRamifica: true,
    ramificacoesPrincipais: [
      '5 Artérias Geniculares (superiores lateral e medial, média, inferiores lateral e medial) que formam a abundante rede periarticular do joelho.',
      'Ramos musculares (artérias surais para os gastrocnêmios).',
      'Terminação: Artéria Tibial Anterior e Artéria Tibial Posterior.'
    ],
    caracteristicasAnatomicas: [
      'É a estrutura mais PROFUNDA da fossa poplítea (colada diretamente sobre a cápsula do joelho e o fêmur).',
      'Relação de profundidade na fossa poplítea (da superfície para o fundo): Nervo Tibial -> Veia Poplítea -> Artéria Poplítea.'
    ],
    dicaPraticaBancada: 'Na fossa poplítea aberta, afaste o nervo tibial e a veia poplítea; o vaso mais profundo e firme encostado no osso é a Artéria Poplítea.',
    relevanciaFisio: 'Local do Pulso Poplíteo (palpado com o joelho semifletido a 30º). Luxação posterior do joelho pode romper a artéria poplítea por ser fixa ao hiato e músculo poplíteo, gerando isquemia aguda da perna.'
  },
  {
    id: 'arterias-tibial-anterior-posterior',
    nome: 'Artérias da Perna: Tibial Anterior, Tibial Posterior e Fibular',
    nomenclaturaAlternativa: 'Artérias do compartimento anterior e posterior da perna',
    tipo: 'artéria',
    territorio: 'Membro Inferior',
    tipoDeSangue: 'arterial',
    deOndeVem: 'Originam-se da bifurcação da Artéria Poplítea na borda inferior do músculo poplíteo.',
    ateOndeVai: '• Tibial Anterior: perfura a membrana interóssea para o compartimento anterior, desce com o nervo fibular profundo e na frente do tornozelo torna-se a Artéria Dorsal do Pé (Pediosa).<br />• Tibial Posterior: desce no compartimento posterior profundo com o nervo tibial, passa atrás do maléolo medial no túnel do tarso e entra na planta do pé dividindo-se em Artérias Plantares Medial e Lateral.',
    responsavelPor: 'Irrigação de todos os músculos, ossos tíbia e fíbula e de toda a estrutura do pé e dedos.',
    seRamifica: true,
    ramificacoesPrincipais: [
      'Da Tibial Posterior: Artéria Fibular (peroneira), artérias maleolares mediais, artérias plantares medial e lateral.',
      'Da Tibial Anterior: Artérias recorrentes tibiais, maleolares anteriores e Artéria Dorsal do Pé (Pediosa).'
    ],
    caracteristicasAnatomicas: [
      'A Tibial Posterior passa atrás do maléolo medial no túnel do tarso.',
      'A Tibial Anterior / Pediosa corre no dorso do pé lateralmente ao tendão do extensor longo do hálux.'
    ],
    dicaPraticaBancada: 'Procure a artéria que passa imediatamente posterior ao maléolo medial: é a Artéria Tibial Posterior. No dorso do pé, o vaso retilíneo é a Artéria Pediosa.',
    relevanciaFisio: 'Avaliação obrigatória de Pulso Tibial Posterior e Pulso Pedioso na neuropatia periférica do paciente com Diabetes Mellitus (pé diabético) e no cálculo do Índice Tornozelo-Braquial (ITB).'
  },
  {
    id: 'veia-safena-magna',
    nome: 'Veia Safena Magna',
    nomenclaturaAlternativa: 'Veia safena interna / Grande safena',
    tipo: 'veia',
    territorio: 'Membro Inferior',
    tipoDeSangue: 'venoso',
    deOndeVem: 'Origina-se na borda medial do pé como continuação do arco venoso dorsal do pé.',
    ateOndeVai: 'Passa obrigatoriamente cerca de 1 a 2 cm ANTERIOR ao maléolo medial no tornozelo, sobe pela face medial da perna e da coxa no tecido celular subcutâneo, perfura a fáscia lata pelo Hiato Safeno (fossa oval) e desemboca na Veia Femoral.',
    responsavelPor: 'Maior e mais longa veia superficial do organismo humano: responsável por drenar a pele e o tecido subcutâneo de todo o pé medial, perna medial e face medial e anterior da coxa.',
    seRamifica: false,
    ramificacoesPrincipais: [
      'Não se ramifica (veia): recebe como tributárias veias safenas acessórias, veia circunflexa ilíaca superficial, epigástrica superficial e pudendas externas na junção safenofemoral ("estrela venosa de Scarpa").'
    ],
    caracteristicasAnatomicas: [
      'Possui de 10 a 20 válvulas parietais bicúspides (a maioria na perna) que direcionam o sangue de distal para proximal.',
      'Comunica-se com o sistema venoso profundo através de múltiplas Veias Perfurantes (de Cockett, Boyd e Dodd).'
    ],
    dicaPraticaBancada: 'ESTAÇÃO 2 DA PROVA UFPB: veia superficial que passa obrigatoriamente pela FRENTE do maléolo medial. Se passar por trás, NÃO é a safena magna!',
    relevanciaFisio: 'Padrão-ouro cirúrgico de enxerto autólogo para Revascularização do Miocárdio (ponte de safena coronariana). Insuficiência de suas válvulas causa varizes tronculares, estase venosa crônica e úlceras de estase tratadas com drenagem linfática e meias de compressão.'
  },
  {
    id: 'veia-safena-parva',
    nome: 'Veia Safena Parva',
    nomenclaturaAlternativa: 'Veia safena externa / Pequena safena',
    tipo: 'veia',
    territorio: 'Membro Inferior',
    tipoDeSangue: 'venoso',
    deOndeVem: 'Origina-se na borda lateral do pé pela união do arco venoso dorsal com a veia dorsal do dedo mínimo.',
    ateOndeVai: 'Passa obrigatoriamente POSTERIOR ao maléolo lateral, sobe pela linha média posterior da panturrilha (entre os dois ventres do gastrocnêmio), perfura a fáscia poplítea e desemboca na Veia Poplítea na fossa poplítea.',
    responsavelPor: 'Responsável pela drenagem venosa superficial da margem lateral do pé, calcanhar e da face posterior da perna e panturrilha.',
    seRamifica: false,
    ramificacoesPrincipais: [
      'Recebe tributárias da face posterior da perna e comunica-se com a safena magna pela veia de Giacomini.'
    ],
    caracteristicasAnatomicas: [
      'Corre acompanhada intimamente pelo Nervo Sural.',
      'Possui de 6 a 12 válvulas parietais ao longo do trajeto.'
    ],
    dicaPraticaBancada: 'PEGADINHA CLÁSSICA DE PROVA: A Safena Magna passa na FRENTE do maléolo MEDIAL. A Safena Parva passa ATRÁS do maléolo LATERAL.',
    relevanciaFisio: 'A disfunção das válvulas da safena parva causa refluxo na panturrilha. O estímulo da contração muscular na marcha ativa as perfurantes, empurrando o sangue para o sistema profundo.'
  },
  {
    id: 'veia-femoral',
    nome: 'Veia Femoral (e Veia Poplítea)',
    nomenclaturaAlternativa: 'Sistema Venoso Profundo do Membro Inferior',
    tipo: 'veia',
    territorio: 'Membro Inferior',
    tipoDeSangue: 'venoso',
    deOndeVem: 'A Veia Poplítea forma-se pela união das veias tibiais anteriores e posteriores na fossa poplítea; ao cruzar o Hiato dos Adutores torna-se Veia Femoral.',
    ateOndeVai: 'Sobe pelo canal dos adutores e trígono femoral; ao passar por trás do Ligamento Inguinal, entra na pelve e torna-se a Veia Ilíaca Externa.',
    responsavelPor: 'Principal tronco coletor do SISTEMA VENOSO PROFUNDO do membro inferior: transporta cerca de 90% de todo o retorno venoso dos membros inferiores de volta ao abdome e ao coração.',
    seRamifica: false,
    ramificacoesPrincipais: [
      'Recebe a Veia Femoral Profunda e a Veia Safena Magna (no hiato safeno).'
    ],
    caracteristicasAnatomicas: [
      'Veia de calibre calibroso, elástica e com válvulas.',
      'No trígono femoral, situa-se medial à Artéria Femoral.',
      'Na fossa poplítea, a veia poplítea situa-se superficial à artéria poplítea e profunda ao nervo tibial.'
    ],
    dicaPraticaBancada: 'No trígono femoral, a veia é o elemento mais medial da sigla NAV (Nervo lateral, Artéria média, Veia medial). Na fossa poplítea, ela fica imprensada entre o nervo e a artéria.',
    relevanciaFisio: 'Local mais temido de Trombose Venosa Profunda (TVP). A estase e lesão endotelial geram trombos que podem desprender-se e viajar pela VCI até a artéria pulmonar, causando TEP fatal.'
  }
];
