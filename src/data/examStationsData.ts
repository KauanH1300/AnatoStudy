export interface PracticalExamStation {
  numero: number;
  estrutura: string;
  nomenclaturaAlternativa?: string;
  regiao: 'Coração' | 'Vasos' | 'Grandes Vasos' | 'Membro Superior' | 'Membro Inferior';
  ondeOAlfineteEspeta: string;
  comoReconhecerSemTocar: string[];
  relacoesSintopicasVisuais: string;
  funcaoHemodinamica: string;
  pegadinhaDeProva: string;
}

export const examStationsUfpb: PracticalExamStation[] = [
  {
    numero: 1,
    estrutura: 'Artéria Braquial',
    nomenclaturaAlternativa: 'Artéria umeral',
    regiao: 'Membro Superior',
    ondeOAlfineteEspeta: 'Espetado no terço médio ou distal da face medial do braço (sulco bicipital medial) ou na fossa cubital.',
    comoReconhecerSemTocar: [
      'Luz aberta e circular: diferente das veias satélites que estão colabadas/murchas ao lado dela.',
      'Parede espessa e firme com tom bege/amarelado claro característico de túnica média espessa.',
      'Trajeto retilíneo vertical descendente pelo lado medial do músculo bíceps braquial.',
      'Acompanhada intimamente por 2 veias braquiais satélites e pelo Nervo Mediano (que cruza pela frente dela de lateral para medial).'
    ],
    relacoesSintopicasVisuais: 'Lateral ao Nervo Ulnar no terço superior; medial ao músculo bíceps braquial; cruzada anteriormente em "X" suave pelo Nervo Mediano.',
    funcaoHemodinamica: 'Principal conduto arterial para o braço, antebraço e mão. Origina as artérias radial e ulnar na fossa cubital.',
    pegadinhaDeProva: 'NÃO CONFUNDIR com o Nervo Mediano! O nervo é maciço, esbranquiçado, estriado e sem furo central; a artéria é um tubo oco com luz aberta.'
  },
  {
    numero: 2,
    estrutura: 'Veia Safena Magna',
    nomenclaturaAlternativa: 'Veia safena interna',
    regiao: 'Membro Inferior',
    ondeOAlfineteEspeta: 'Espetado na face medial da perna/coxa ou logo anterior ao maléolo medial do tornozelo.',
    comoReconhecerSemTocar: [
      'Posição superficial no tecido subcutâneo ao longo da face medial de todo o membro inferior.',
      'Passa OBRIGATORIAMENTE cerca de 1 a 2 cm ANTERIOR ao maléolo medial no tornozelo (ponto anatômico de dissecção cirúrgica clássico).',
      'Parede delgada, azulada ou arroxeada devido a sangue coagulado intraluminal.',
      'Sobe pela face medial da perna e coxa até mergulhar na fáscia lata pelo Hiato Safeno para desembocar na Veia Femoral.'
    ],
    relacoesSintopicasVisuais: 'Anterior ao maléolo medial; medial à tíbia; ascende medialmente ao músculo sartório na coxa.',
    funcaoHemodinamica: 'Maior veia superficial do corpo humano; drena o arco venoso dorsal do pé e a face medial da perna/coxa.',
    pegadinhaDeProva: 'NÃO confundir com a Veia Safena Parva! A safena parva é posterior (passa atrás do maléolo lateral e sobe pela panturrilha até a fossa poplítea).'
  },
  {
    numero: 3,
    estrutura: 'Óstio da Veia Cava Superior',
    nomenclaturaAlternativa: 'Abertura da VCS no átrio direito',
    regiao: 'Coração',
    ondeOAlfineteEspeta: 'Espetado na abertura superior cilíndrica no teto da parede póstero-superior do Átrio Direito aberto.',
    comoReconhecerSemTocar: [
      'Grande orifício circular desprovido de qualquer folheto ou válvula membranosa (é totalmente avalvular).',
      'Situado na parte mais superior e posterior da parede lisa do átrio direito (seio das veias cavas).',
      'Fica no limite superior da Crista Terminal.'
    ],
    relacoesSintopicasVisuais: 'Postero-superior no átrio direito; logo acima do nó sinoatrial; alinhado verticalmente com o óstio da VCI.',
    funcaoHemodinamica: 'Deságue do retorno venoso de toda a porção supradiafragmática do corpo (cabeça, pescoço, MMSS e cavidade torácica).',
    pegadinhaDeProva: 'NÃO confundir com o óstio da VCI! A VCS não tem válvula e fica no teto; a VCI fica no assoalho e possui resquício da válvula de Eustáquio.'
  },
  {
    numero: 4,
    estrutura: 'Aurícula Esquerda',
    nomenclaturaAlternativa: 'Apêndice atrial esquerdo',
    regiao: 'Coração',
    ondeOAlfineteEspeta: 'Espetado na ponta triangular pregueada que abraça a base do Tronco Pulmonar do lado esquerdo.',
    comoReconhecerSemTocar: [
      'Formato estreito, cônico e recortado em "orelha de cachorro", com bordas denteadas.',
      'Projeta-se para a frente contornando a face lateral esquerda do Tronco Pulmonar.',
      'Diferente da aurícula direita (que é triangular larga), a esquerda é mais estreita, digitiforme e tubular.'
    ],
    relacoesSintopicasVisuais: 'Lateral esquerda e ligeiramente anterior ao tronco pulmonar e artéria coronária esquerda.',
    funcaoHemodinamica: 'Acomodação de sobrecarga volêmica atrial; secreção de Peptídeo Natriurético Atrial (ANP). Local predileto de formação de trombos na fibrilação atrial.',
    pegadinhaDeProva: 'NÃO chamar a aurícula de átrio! O átrio é a câmara inteira; a aurícula é só o apêndice carnoso projetado anteriormente.'
  },
  {
    numero: 5,
    estrutura: 'Trabécula Septomarginal',
    nomenclaturaAlternativa: 'Banda Moderadora / Feixe moderador',
    regiao: 'Coração',
    ondeOAlfineteEspeta: 'Espetado na "ponte" cilíndrica carnosa que cruza suspensa o lúmen do Ventrículo Direito.',
    comoReconhecerSemTocar: [
      'Uma verdadeira PONTE carnosa isolada suspensa no meio da luz ventricular, sem tocar o assoalho livremente.',
      'Conecta a parede do Septo Interventricular à base do Músculo Papilar Anterior do Ventrículo Direito.',
      'Sua presença é prova irrefutável de que a peça é o VENTRÍCULO DIREITO (ela NUNCA existe no VE!).'
    ],
    relacoesSintopicasVisuais: 'Origina-se no septo interventricular inferior e insere-se na base do músculo papilar anterior do VD.',
    funcaoHemodinamica: 'Conduz o ramo direito do Feixe de His do sistema de condução cardíaco rapidamente até o músculo papilar anterior, assegurando sua contração prévia para evitar prolapso tricúspide.',
    pegadinhaDeProva: 'Se o professor perguntar: "Em qual ventrículo estamos?", e houver essa ponte suspensa, responda com certeza: VENTRÍCULO DIREITO.'
  },
  {
    numero: 6,
    estrutura: 'Valva Atrioventricular Direita (Tricúspide)',
    nomenclaturaAlternativa: 'Valva tricúspide / Cúspides anterior, posterior e septal',
    regiao: 'Coração',
    ondeOAlfineteEspeta: 'Espetado em uma das 3 lâminas membranosas semitranslúcidas unidas a cordas tendíneas no óstio AV direito.',
    comoReconhecerSemTocar: [
      'Presença evidente de cordas tendíneas brancas fixando as lâminas livres a músculos papilares.',
      'Contagem de cúspides: possui 3 folhas (anterior, posterior e a típica cúspide septal colada ao septo).',
      'Comunica a cavidade do Átrio Direito à cavidade do Ventrículo Direito.'
    ],
    relacoesSintopicasVisuais: 'Inserida no anel fibroso direito; cúspide septal repousa diretamente sobre a porção membranosa do septo interventricular.',
    funcaoHemodinamica: 'Impede o refluxo de sangue venoso do Ventrículo Direito para o Átrio Direito durante a sístole ventricular.',
    pegadinhaDeProva: 'Se a agulha estiver espetada no folheto membranoso, escreva "Cúspide [anterior/septal/posterior] da Valva Tricúspide". Se estiver no orifício, "Valva tricúspide".'
  },
  {
    numero: 7,
    estrutura: 'Artéria Coronária Esquerda (Ramo Interventricular Anterior)',
    nomenclaturaAlternativa: 'Artéria descendente anterior (ADA)',
    regiao: 'Coração',
    ondeOAlfineteEspeta: 'Espetado no sulco interventricular anterior na face esternocostal do coração, acompanhado da grande veia cardíaca.',
    comoReconhecerSemTocar: [
      'Corre ao longo do sulco interventricular anterior em direção ao ápice cardíaco.',
      'Acompanhado intimamente pela Grande Veia Cardíaca e por depósito de tecido adiposo subepicárdico.',
      'Emerge sob a aurícula esquerda a partir de um tronco comum muito curto (tronco da coronária esquerda).'
    ],
    relacoesSintopicasVisuais: 'No sulco interventricular anterior; medial à aurícula esquerda e à face pulmonar esquerda.',
    funcaoHemodinamica: 'Irriga a maior parte do septo interventricular (2/3 anteriores), a parede anterior do VE e o ápice cardíaco. Conhecida como artéria do infarto fatal.',
    pegadinhaDeProva: 'Diferencie da Grande Veia Cardíaca que corre no mesmo sulco: a artéria é mais cilíndrica, bege e não colabada; a veia é arroxeada e de parede frouxa.'
  },
  {
    numero: 8,
    estrutura: 'Tronco Braquiocefálico',
    nomenclaturaAlternativa: 'Artéria braquiocefálica',
    regiao: 'Grandes Vasos',
    ondeOAlfineteEspeta: 'Espetado no primeiro ramo e o mais calibroso que emerge do topo da convexidade do Arco da Aorta.',
    comoReconhecerSemTocar: [
      'É o PRIMEIRO ramo (mais à direita) do arco aórtico.',
      'É nitidamente o mais calibroso dos 3 ramos.',
      'Sobe obliquamente para a direita em direção à articulação esternoclavicular direita, onde se bifurca em Carótida Comum Direita e Subclávia Direita.'
    ],
    relacoesSintopicasVisuais: 'Anterior e à direita da artéria carótida comum esquerda; cruza anteriormente a traqueia.',
    funcaoHemodinamica: 'Leva sangue arterial para o lado direito da cabeça, pescoço e todo o membro superior direito.',
    pegadinhaDeProva: 'Lembre-se: NÃO EXISTE "Tronco Braquiocefálico Esquerdo"! Do lado esquerdo a Carótida Comum E e a Subclávia E saem diretamente e separadas da Aorta.'
  },
  {
    numero: 9,
    estrutura: 'Valva Atrioventricular Esquerda (Mitral / Bicúspide)',
    nomenclaturaAlternativa: 'Valva mitral / Valva bicúspide',
    regiao: 'Coração',
    ondeOAlfineteEspeta: 'Espetado em uma das 2 grandes cúspides triangulares com cordas tendíneas robustas no VE.',
    comoReconhecerSemTocar: [
      'Apenas DUAS cúspides robustas (anterior e posterior), com formato de mitra papal.',
      'Cúspide anterior é muito ampla e lisa, separando a via de entrada da via de saída aórtica do VE.',
      'Cordas tendíneas extremamente grossas conectadas a apenas 2 músculos papilares volumosos.'
    ],
    relacoesSintopicasVisuais: 'Entre átrio esquerdo e ventrículo esquerdo; em continuidade fibrosa superior com a valva aórtica.',
    funcaoHemodinamica: 'Impede o refluxo de sangue arterial sob alta pressão do Ventrículo Esquerdo para o Átrio Esquerdo durante a sístole.',
    pegadinhaDeProva: 'Se você contar 2 cúspides e 2 papilares gigantes = MITRAL. Se contar 3 cúspides com 1 colada ao septo = TRICÚSPIDE.'
  },
  {
    numero: 10,
    estrutura: 'Fossa Oval (e Limbo da Fossa Oval)',
    nomenclaturaAlternativa: 'Fossa ovalis / Depressão do septo interatrial',
    regiao: 'Coração',
    ondeOAlfineteEspeta: 'Espetado na depressão ovalar central e translúcida no Septo Interatrial dentro do Átrio Direito.',
    comoReconhecerSemTocar: [
      'Depressão em forma de concha/disco no meio da parede septal lisa do Átrio Direito.',
      'Delimitada por uma borda muscular saliente e arqueada chamada Limbo da Fossa Oval.',
      'Seu fundo é fino e semitranslúcido sob a luz do foco de exame.'
    ],
    relacoesSintopicasVisuais: 'Na face direita do septo interatrial, superior e posterior ao óstio do seio coronário.',
    funcaoHemodinamica: 'Remanescente embriológico do Forame Oval fetal (que permitia ao sangue oxigenado da mãe passar direto do AD para o AE sem passar pelos pulmões colabados).',
    pegadinhaDeProva: 'Se o alfinete estiver no centro da depressão: FOSSA OVAL. Se estiver na borda elevada que contorna: LIMBO DA FOSSA OVAL.'
  },
  {
    numero: 11,
    estrutura: 'Óstio do Seio Coronário',
    nomenclaturaAlternativa: 'Abertura do seio coronário no átrio direito',
    regiao: 'Coração',
    ondeOAlfineteEspeta: 'Espetado no orifício venoso situado entre o óstio da veia cava inferior e a valva atrioventricular tricúspide.',
    comoReconhecerSemTocar: [
      'Pequeno orifício localizado no assoalho posterior do Átrio Direito.',
      'Guarnecido por uma fina prega semilunar membranosa: a Valva do Seio Coronário (de Tebésio).',
      'Fica no ápice do Trígono de Koch (marco anatômico para o Nó Atrioventricular).'
    ],
    relacoesSintopicasVisuais: 'Medial ao óstio da VCI, póstero-medial à cúspide septal da tricúspide.',
    funcaoHemodinamica: 'Drena cerca de 85% de todo o sangue venoso desoxigenado que irrigou o miocárdio do próprio coração de volta para o AD.',
    pegadinhaDeProva: 'Não confundir com o óstio da VCI: o do seio coronário é bem menor e fica mais perto da valva tricúspide!'
  },
  {
    numero: 12,
    estrutura: 'Músculos Papilares e Cordas Tendíneas',
    nomenclaturaAlternativa: 'Músculo papilar anterior / posterior',
    regiao: 'Coração',
    ondeOAlfineteEspeta: 'Espetado no corpo carnoso cônico em projeção da parede ventricular ou nos cordões fibrosos brancos que saem do seu ápice.',
    comoReconhecerSemTocar: [
      'Projeções musculares cônicas volumosas (trabéculas cárneas de 1ª ordem) com base fixa no miocárdio e ápice livre.',
      'Do seu ápice partem dezenas de cordões brancos delgados, brilhantes e resistentes (cordas tendíneas) que se ancoram nas bordas livres das cúspides.',
      'VE tem 2 papilares gigantescos; VD tem 3 menores.'
    ],
    relacoesSintopicasVisuais: 'Erigem-se do miocárdio ventricular em direção à luz; conectam-se às bordas e faces ventriculares das cúspides valvares.',
    funcaoHemodinamica: 'Contraem-se durante a sístole para tracionar as cordas tendíneas, impedindo que as cúspides valvares sofram eversão/prolapso para dentro dos átrios.',
    pegadinhaDeProva: 'Eles NÃO puxam as cúspides para abrir a valva! Quem abre as valvas é a pressão do sangue. Eles servem EXCLUSIVAMENTE para travar o fechamento!'
  },
  {
    numero: 13,
    estrutura: 'Valva da Aorta (Semilunar Aórtica)',
    nomenclaturaAlternativa: 'Válvulas semilunares direita, esquerda e posterior / Seios de Valsalva',
    regiao: 'Coração',
    ondeOAlfineteEspeta: 'Espetado dentro de um dos 3 bolsos em ninho de andorinha na raiz da Artéria Aorta aberta.',
    comoReconhecerSemTocar: [
      'Formada por 3 folhetos côncavos em forma de xícara ou ninho, SEM cordas tendíneas.',
      'Possui um pequeno nódulo fibroso central (nódulo de Arâncio) na borda livre de cada válvula.',
      'Ao inspecionar o fundo de duas dessas bolsas, visualiza-se claramente o orifício (óstio) de saída das artérias coronárias direita e esquerda!'
    ],
    relacoesSintopicasVisuais: 'No centro do esqueleto fibroso; posterior ao tronco pulmonar e anterior aos átrios.',
    funcaoHemodinamica: 'Impede o refluxo de sangue da aorta para o VE durante a diástole ventricular; o fechamento gera o componente A2 da 2ª bulha (B2).',
    pegadinhaDeProva: 'Se vir um "furo" no fundo do bolso da cúspide semilunar, com certeza é a AORTA (são os óstios coronários). O tronco pulmonar NÃO tem furos nos seus seios!'
  },
  {
    numero: 14,
    estrutura: 'Veia Cava Inferior',
    nomenclaturaAlternativa: 'VCI / Valva de Eustáquio',
    regiao: 'Coração',
    ondeOAlfineteEspeta: 'Espetado no grande vaso venoso que entra no assoalho póstero-inferior do Átrio Direito.',
    comoReconhecerSemTocar: [
      'Vaso venoso de calibre maciço (o mais largo do corpo) na face diafragmática do coração.',
      'Sua abertura interna no átrio direito possui uma borda semilunar delgada: a Valva da Veia Cava Inferior (válvula de Eustáquio).',
      'Passa pelo forame da veia cava no centro tendíneo do diafragma.'
    ],
    relacoesSintopicasVisuais: 'Inferior e posterior ao átrio direito; à direita da aorta abdominal.',
    funcaoHemodinamica: 'Transporta todo o retorno venoso infradiafragmático (abdome, pelve e membros inferiores) até o átrio direito.',
    pegadinhaDeProva: 'No feto, a valva de Eustáquio direcionava o sangue oxigenado da VCI diretamente para a Fossa Oval em direção ao átrio esquerdo.'
  },
  {
    numero: 15,
    estrutura: 'Artéria Carótida Comum Esquerda',
    nomenclaturaAlternativa: 'Carótida primitiva esquerda',
    regiao: 'Grandes Vasos',
    ondeOAlfineteEspeta: 'Espetado no SEGUNDO ramo que brota do arco da aorta (o ramo do meio).',
    comoReconhecerSemTocar: [
      'Origina-se diretamente da convexidade do Arco da Aorta, exatamente entre o tronco braquiocefálico e a artéria subclávia esquerda.',
      'Sobe verticalmente pelo mediastino superior até a base do pescoço sem dar nenhum ramo torácico.',
      'Calibre intermediário entre o tronco braquiocefálico e a subclávia.'
    ],
    relacoesSintopicasVisuais: 'À esquerda do tronco braquiocefálico; à direita e anterior à artéria subclávia esquerda; anterior à traqueia e esôfago.',
    funcaoHemodinamica: 'Conduz sangue oxigenado para o lado esquerdo da cabeça, crânio, encéfalo e face (bifurca-se em interna e externa na altura de C4).',
    pegadinhaDeProva: 'Atenção na prova: do lado direito a carótida comum nasce do Tronco Braquiocefálico; do lado esquerdo ela nasce DIRETO da Aorta!'
  },
  {
    numero: 16,
    estrutura: 'Artéria Subclávia Esquerda',
    nomenclaturaAlternativa: 'Subclávia esquerda',
    regiao: 'Grandes Vasos',
    ondeOAlfineteEspeta: 'Espetado no TERCEIRO ramo (o mais distal e posterior) do arco da aorta.',
    comoReconhecerSemTocar: [
      'É o último ramo a sair do arco aórtico antes de se tornar aorta descendente.',
      'Nasce mais profundamente e posteriormente no mediastino superior.',
      'Arqueia-se sobre a primeira costela esquerda em direção à axila (onde vira artéria axilar).'
    ],
    relacoesSintopicasVisuais: 'Posterior à artéria carótida comum esquerda; lateral ao esôfago e ducto torácico.',
    funcaoHemodinamica: 'Irrigação arterial de todo o membro superior esquerdo e emissão da artéria vertebral esquerda para o encéfalo.',
    pegadinhaDeProva: 'Ordem clássica obrigatória de prova dos 3 ramos da Aorta (da direita para esquerda): 1º Tronco Braquiocefálico, 2º Carótida Comum Esquerda, 3º Subclávia Esquerda.'
  },
  {
    numero: 17,
    estrutura: 'Ligamento Arterial',
    nomenclaturaAlternativa: 'Ligamentum arteriosum / Remanescente do ducto de Botallo',
    regiao: 'Grandes Vasos',
    ondeOAlfineteEspeta: 'Espetado na pequena fita fibrosa resistente e curta que une a bifurcação do Tronco Pulmonar à concavidade do Arco da Aorta.',
    comoReconhecerSemTocar: [
      'Pequeno cordão fibroso esbranquiçado e tenso ligando dois vasos gigantes.',
      'Conecta a face superior da artéria pulmonar esquerda à concavidade inferior do arco da aorta.',
      'O nervo laríngeo recorrente esquerdo faz a curva exatamente por baixo dele!'
    ],
    relacoesSintopicasVisuais: 'Entre a concavidade do arco aórtico e a artéria pulmonar esquerda; intimamente abraçado pelo Nervo Laríngeo Recorrente E.',
    funcaoHemodinamica: 'Remanescente fibroso obliterado do Ducto Arterioso fetal (de Botallo), que desviava o sangue do tronco pulmonar para a aorta evitando os pulmões fetais.',
    pegadinhaDeProva: 'Se persistir aberto no recém-nascido, chama-se "Persistência do Canal Arterial (PCA)", gerando sopro contínuo em "maquinaria" que exige conduta médica/fisioterapêutica.'
  },
  {
    numero: 18,
    estrutura: 'Óstios das Veias Pulmonares',
    nomenclaturaAlternativa: 'Aberturas das 4 veias pulmonares no átrio esquerdo',
    regiao: 'Coração',
    ondeOAlfineteEspeta: 'Espetado nas aberturas vasculares lisas na parede póstero-superior da cavidade do Átrio Esquerdo.',
    comoReconhecerSemTocar: [
      'São 4 orifícios circulares lisos agrupados aos pares (2 direitas e 2 esquerdas).',
      'Desembocam na parede lisa do Átrio Esquerdo, completamente desprovidas de válvulas.',
      'Se o coração for visto por trás, formam os 4 cantos do teto do átrio esquerdo.'
    ],
    relacoesSintopicasVisuais: 'Na parede póstero-lateral do átrio esquerdo, imediatamente abaixo da bifurcação da artéria pulmonar.',
    funcaoHemodinamica: 'Trazem sangue 100% oxigenado (arterial) recém-hematosado dos pulmões para o coração esquerdo.',
    pegadinhaDeProva: 'LEMBRETE DE OURO: Veias pulmonares transportam sangue ARTERIAL (rico em O2 e pobre em CO2), contrariando a regra superficial do senso comum!'
  },
  {
    numero: 19,
    estrutura: 'Crista Terminal e Músculos Pectinados',
    nomenclaturaAlternativa: 'Crista terminalis / Músculos pectíneos',
    regiao: 'Coração',
    ondeOAlfineteEspeta: 'Espetado na crista muscular vertical saliente interna no AD ou nas cristas paralelas que partem dela como dentes de um pente.',
    comoReconhecerSemTocar: [
      'A Crista Terminal é uma crista muscular vertical proeminente que separa a parte lisa (seio das cavas) da parte rugosa do AD.',
      'Os Músculos Pectinados são traves musculares paralelas que parecem literalmente os dentes de um pente (pecten = pente em latim).',
      'Corresponde externamente ao Sulco Terminal do coração.'
    ],
    relacoesSintopicasVisuais: 'Corre verticalmente na parede lateral do átrio direito, desde o óstio da VCS até o óstio da VCI.',
    funcaoHemodinamica: 'A crista terminal marca o local onde o nó sinoatrial (marcapasso natural) se aloja na sua extremidade superior junto à VCS.',
    pegadinhaDeProva: 'Se a agulha estiver na fita longitudinal guia = CRISTA TERMINAL. Se estiver nas traves menores em dente de pente = MÚSCULOS PECTINADOS.'
  },
  {
    numero: 20,
    estrutura: 'Artéria Coronária Direita (Ramo Marginal Direito e Interventricular Posterior)',
    nomenclaturaAlternativa: 'Artéria coronária direita (ACD)',
    regiao: 'Coração',
    ondeOAlfineteEspeta: 'Espetado no sulco coronário (atrioventricular) direito, contornando a borda aguda em direção à face diafragmática.',
    comoReconhecerSemTocar: [
      'Emerge do seio aórtico direito da valva aórtica e corre profundamente pelo sulco atrioventricular direito.',
      'Emite o Ramo Marginal Direito na borda aguda do coração.',
      'Na cruz do coração (crux cordis), curva-se para formar a Artéria Interventricular Posterior no sulco homônimo (em 85-90% das pessoas com dominância direita).'
    ],
    relacoesSintopicasVisuais: 'Corre no sulco coronário entre o átrio direito e o ventrículo direito, envolvida por gordura epicárdica.',
    funcaoHemodinamica: 'Irriga o Átrio Direito, a maior parte do Ventrículo Direito, a face diafragmática do VE e o Nó Sinoatrial (em 60%) e Nó AV (em 80-90%).',
    pegadinhaDeProva: 'Infarto de coronária direita frequentemente causa BRADICARDIA GRAVE ou bloqueio atrioventricular (BAV), pois ela nutre o marcapasso e o nó AV.'
  }
];
