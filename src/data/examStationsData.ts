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
      'Luz cilíndrica aberta e circular: diferente das veias satélites que estão colabadas/murchas ao lado dela.',
      'Parede espessa e firme com tom bege/amarelado claro característico de túnica média rica em músculo e elastina.',
      'Trajeto retilíneo vertical descendente pelo lado medial do músculo bíceps braquial.',
      'Acompanhada intimamente por 2 veias braquiais satélites e pelo Nervo Mediano (que cruza pela frente dela de lateral para medial).'
    ],
    relacoesSintopicasVisuais: 'Medial ao bíceps braquial e ao coracobraquial; anterior ao músculo braquial; cruzada suavemente em "X" pelo Nervo Mediano.',
    funcaoHemodinamica: 'Principal conduto arterial para o braço, antebraço e mão. Origina as artérias radial e ulnar no colo do rádio.',
    pegadinhaDeProva: 'NÃO CONFUNDIR com o Nervo Mediano! O nervo é maciço, esbranquiçado, estriado em fascículos e sem furo central; a artéria é um tubo oco com luz aberta.'
  },
  {
    numero: 2,
    estrutura: 'Artéria Radial',
    nomenclaturaAlternativa: 'Artéria radial do antebraço / pulso radial',
    regiao: 'Membro Superior',
    ondeOAlfineteEspeta: 'Espetado na goteira do pulso (terço distal anterior do antebraço) ou no assoalho da tabaqueira anatômica.',
    comoReconhecerSemTocar: [
      'Localizada na goteira radial anterior do carpo, no lado do polegar (lateral).',
      'Situa-se exatamente entre o tendão do músculo braquiorradial (lateral) e o tendão do flexor radial do carpo (medial).',
      'Tubo arterial de parede firme e luz circular aberta apoiado diretamente sobre a face anterior da epífise distal do rádio.',
      'Mergulha dorsalmente sob os tendões da tabaqueira anatômica para formar o Arco Palmar Profundo.'
    ],
    relacoesSintopicasVisuais: 'Lateral ao tendão do flexor radial do carpo; medial ao braquiorradial; repousa sobre o pronador quadrado e rádio.',
    funcaoHemodinamica: 'Irriga o compartimento lateral e extensor do antebraço e conclui a formação do Arco Palmar Profundo na mão.',
    pegadinhaDeProva: 'NÃO CONFUNDIR com os tendões adjacentes! Os tendões são fitas brancas nacaradas maciças e duras; a artéria radial é um tubo cilíndrico oco.'
  },
  {
    numero: 3,
    estrutura: 'Artéria Aorta Descendente',
    nomenclaturaAlternativa: 'Aorta torácica descendente (mediastino posterior)',
    regiao: 'Grandes Vasos',
    ondeOAlfineteEspeta: 'Espetado no grande tubo arterial que desce no mediastino posterior, colado à face lateral esquerda dos corpos vertebrais torácicos (T4-T12).',
    comoReconhecerSemTocar: [
      'Grande cilindro arterial longitudinal fixado rente à coluna vertebral torácica (T4 a T12) no mediastino posterior.',
      'Emite lateralmente pares simétricos de artérias intercostais posteriores para os espaços intercostais.',
      'Situa-se à esquerda do esôfago e ducto torácico e anterior à coluna vertebral.',
      'Perfura o diafragma na altura de T12 (hiato aórtico) para se tornar aorta abdominal.'
    ],
    relacoesSintopicasVisuais: 'Anterior aos corpos vertebrais torácicos; à esquerda do esôfago e da veia ázigos; posterior ao hilo pulmonar esquerdo e pericárdio.',
    funcaoHemodinamica: 'Distribui sangue oxigenado de alta pressão para as paredes torácicas (intercostais) e vísceras torácicas (bronquiais e esofágicas).',
    pegadinhaDeProva: 'NÃO CONFUNDIR com a Aorta Ascendente! A ascendente está DENTRO do saco pericárdico no mediastino médio; a descendente está no mediastino posterior, colada nas vértebras!'
  },
  {
    numero: 4,
    estrutura: 'Artéria Aorta Ascendente',
    nomenclaturaAlternativa: 'Aorta ascendente (raiz intrapericárdica da aorta)',
    regiao: 'Grandes Vasos',
    ondeOAlfineteEspeta: 'Espetado na raiz do coração saindo diretamente para cima do ventrículo esquerdo, entre o tronco pulmonar e a aurícula direita.',
    comoReconhecerSemTocar: [
      'Emerge do centro da base ventricular e ascende obliquamente por cerca de 5 cm dentro do saco pericárdico fibroso.',
      'Apresenta base dilatada (bulbo da aorta com os seios de Valsalva), de onde brotam as artérias coronárias direita e esquerda.',
      'Situa-se posteriormente ao cone arterial e tronco pulmonar e medialmente à aurícula direita e veia cava superior.',
      'Termina na altura do ângulo esternal de Louis (T4), onde se continua como Arco da Aorta.'
    ],
    relacoesSintopicasVisuais: 'Anterior ao átrio esquerdo e artéria pulmonar direita; à direita do tronco pulmonar; à esquerda da veia cava superior.',
    funcaoHemodinamica: 'Recebe o impacto de ejeção sistólica máxima (~120 mmHg) do VE e alimenta as artérias coronárias durante a diástole.',
    pegadinhaDeProva: 'Se o alfinete estiver no tubo logo acima das cúspides da base cardíaca = Aorta Ascendente. Se estiver após a emergência do tronco braquiocefálico = Arco da Aorta.'
  },
  {
    numero: 5,
    estrutura: 'Epicárdio',
    nomenclaturaAlternativa: 'Lâmina visceral do pericárdio seroso',
    regiao: 'Coração',
    ondeOAlfineteEspeta: 'Espetado na fina película serosa brilhante aderida diretamente sobre o miocárdio e sobre a gordura subepicárdica dos sulcos.',
    comoReconhecerSemTocar: [
      'Membrana extremamente fina, lisa, transparente e reluzente colada intimamente na superfície externa do coração.',
      'Reveste diretamente os vasos coronários e os depósitos amarelados de gordura epicárdica nos sulcos cardíacos.',
      'Não se solta como um saco (o saco solto externo é o pericárdio fibroso com a lâmina parietal).',
      'Corresponde à camada mais externa da parede própria do coração.'
    ],
    relacoesSintopicasVisuais: 'Superficial ao miocárdio ventricular e atrial; profundo à cavidade pericárdica virtual.',
    funcaoHemodinamica: 'Secreta o líquido pericárdico seroso (15-50 mL) na cavidade pericárdica, eliminando o atrito durante a sístole e diástole.',
    pegadinhaDeProva: 'Se a pinça estiver na parede do coração intacto = EPICÁRDIO. Se estiver na face interna da "bolsa/tampa" rebatida do pericárdio fibroso = LÂMINA PARIETAL DO SEROSO!'
  },
  {
    numero: 6,
    estrutura: 'Músculo Pectíneo',
    nomenclaturaAlternativa: 'Músculos pectíneos / Músculos pectinados do átrio direito',
    regiao: 'Coração',
    ondeOAlfineteEspeta: 'Espetado nas cristas musculares paralelas internas na parede anterior do átrio direito ou no interior da aurícula direita.',
    comoReconhecerSemTocar: [
      'Feixes musculares proeminentes dispostos em paralelo como os dentes de um pente (pecten = pente).',
      'Partem em ângulo reto a partir da Crista Terminal em direção à parede anterior e interior da aurícula direita.',
      'Contrastam nitidamente com a parede póstero-medial do átrio direito, que é perfeitamente LISA (seio venoso das cavas).',
      'Presentes com grande densidade dentro das aurículas direita e esquerda.'
    ],
    relacoesSintopicasVisuais: 'Originam-se na Crista Terminal e revestem a parede anterior do átrio direito e aurícula.',
    funcaoHemodinamica: 'Aumentam o poder contrátil do átrio sem aumentar em demasia a espessura da parede livre.',
    pegadinhaDeProva: 'NÃO CONFUNDIR com Músculo Papilar! Papilares são colunas cônicas no VENTRÍCULO que seguram cordas tendíneas; pectíneos são cristas rasas em pente no ÁTRIO!'
  },
  {
    numero: 7,
    estrutura: 'Óstio Átrio Ventricular Direito',
    nomenclaturaAlternativa: 'Óstio AV direito / Abertura atrioventricular direita (valva tricúspide)',
    regiao: 'Coração',
    ondeOAlfineteEspeta: 'Espetado no grande anel/orifício de passagem que comunica o assoalho do átrio direito à cavidade do ventrículo direito.',
    comoReconhecerSemTocar: [
      'Ampla abertura ovalada/circular no assoalho do átrio direito guarnecida pela Valva Tricúspide.',
      'Circundado pelo anel fibroso direito do esqueleto cardíaco.',
      'Através do óstio visualizam-se as cúspides anterior, posterior e septal unidas às cordas tendíneas no ventrículo direito.',
      'Situa-se anterior e inferiormente à fossa oval e ao óstio do seio coronário.'
    ],
    relacoesSintopicasVisuais: 'No plano atrioventricular direito; ântero-lateral ao óstio do seio coronário e ao trígono de Koch.',
    funcaoHemodinamica: 'Permite a passagem unidirecional do sangue venoso desoxigenado do átrio direito para o ventrículo direito durante a diástole ventricular.',
    pegadinhaDeProva: 'Se o alfinete estiver no "buraco/túnel" de passagem = ÓSTIO AV DIREITO. Se estiver no folheto membranoso fino = CÚSPIDE DA VALVA TRICÚSPIDE!'
  },
  {
    numero: 8,
    estrutura: 'Óstio Átrio Ventricular Esquerdo',
    nomenclaturaAlternativa: 'Óstio AV esquerdo / Abertura atrioventricular esquerda (valva mitral)',
    regiao: 'Coração',
    ondeOAlfineteEspeta: 'Espetado na grande abertura no assoalho do átrio esquerdo que conduz ao interior do ventrículo esquerdo.',
    comoReconhecerSemTocar: [
      'Orifício elíptico no assoalho do átrio esquerdo guarnecido pelas 2 cúspides volumosas da Valva Mitral (Bicúspide).',
      'Circundado pelo anel fibroso esquerdo do esqueleto cardíaco.',
      'Comunica a câmara de paredes lisas que recebe as veias pulmonares com a espessa câmara ventricular esquerda.',
      'Apresenta em sua borda anterior continuidade fibrosa direta com a raiz da valva aórtica.'
    ],
    relacoesSintopicasVisuais: 'Póstero-lateral esquerdo no esqueleto fibroso; anterior às 4 veias pulmonares e posterior ao óstio aórtico.',
    funcaoHemodinamica: 'Permite o enchimento diastólico do ventrículo esquerdo com sangue oxigenado a partir do átrio esquerdo.',
    pegadinhaDeProva: 'Se você estiver no átrio que tem 4 veias pulmonares lisas chegando por trás e olhar o orifício de saída, trata-se com certeza do Óstio AV Esquerdo (Mitral).'
  },
  {
    numero: 9,
    estrutura: 'Arco Palmar',
    nomenclaturaAlternativa: 'Arco palmar superficial e profundo da mão',
    regiao: 'Membro Superior',
    ondeOAlfineteEspeta: 'Espetado na palma da mão dissecada, na alça arterial curva que cruza a região palmar média e emite as artérias digitais comuns.',
    comoReconhecerSemTocar: [
      'Alça arterial arqueada convexa distalmente no meio da palma da mão.',
      'Arco Palmar Superficial: repousa logo abaixo da aponeurose palmar, superficialmente aos tendões dos músculos flexores dos dedos.',
      'Formado primariamente pela artéria ulnar anastomosada ao ramo palmar superficial da artéria radial.',
      'Dá origem às Artérias Digitais Palmares Comuns que se bifurcam nas artérias digitais próprias para as laterais dos dedos.'
    ],
    relacoesSintopicasVisuais: 'Superficial aos tendões do flexor superficial dos dedos; profundo à aponeurose palmar e pele.',
    funcaoHemodinamica: 'Garante rica anastomose arterial de proteção: se uma artéria do punho for comprimida, a outra supre toda a vascularização dos dedos.',
    pegadinhaDeProva: 'NÃO CONFUNDIR palma com dorso! Na palma profunda existem os arcos arteriais; no DORSO da mão existe a rede venosa dorsal superficial.'
  },
  {
    numero: 10,
    estrutura: 'Valva Aórtica',
    nomenclaturaAlternativa: 'Valva da aorta / 3 cúspides semilunares da aorta e seios de Valsalva',
    regiao: 'Coração',
    ondeOAlfineteEspeta: 'Espetado dentro de uma das 3 bolsas membranosas em ninho de andorinha na raiz da Artéria Aorta aberta.',
    comoReconhecerSemTocar: [
      'Composta por 3 válvulas/cúspides semilunares em formato de xícara ou ninho de andorinha: direita, esquerda e posterior.',
      'NÃO possui nenhuma corda tendínea nem conexão direta com músculos papilares.',
      'Borda livre com lúnula delgada e espessamento fibroso central (Nódulo de Arâncio).',
      'No fundo de duas de suas cúspides é visível o orifício (Óstio) de emergência das artérias coronárias direita e esquerda!'
    ],
    relacoesSintopicasVisuais: 'No centro exato do esqueleto fibroso cardíaco; posterior à valva pulmonar e anterior às valvas atrioventriculares.',
    funcaoHemodinamica: 'Abre durante a ejeção sistólica do VE e fecha na diástole para impedir o refluxo aórtico, gerando o componente A2 da 2ª bulha cardíaca (B2).',
    pegadinhaDeProva: 'Se vir um "furo" no fundo do ninho semilunar, com certeza é a VALVA DA AORTA (óstios coronários). A valva pulmonar é anterior e NÃO TEM FUROS!'
  },
  {
    numero: 11,
    estrutura: 'Artéria Ilíaca Comum',
    nomenclaturaAlternativa: 'Artéria ilíaca primitiva direita / esquerda',
    regiao: 'Vasos',
    ondeOAlfineteEspeta: 'Espetado em um dos dois ramos arteriais calibrosos divergentes em "Y" que nascem da bifurcação da aorta ao nível de L4.',
    comoReconhecerSemTocar: [
      'Vasos arteriais pares, espessos e divergentes em "Y" com diâmetro de 10 a 12 mm.',
      'Originam-se na bifurcação terminal da Aorta Abdominal na altura do corpo da 4ª vértebra lombar (L4 / linha bi-ilíaca).',
      'Descem obliquamente pelas asas do sacro e borda do músculo psoas maior por cerca de 4 cm.',
      'Ao nível do disco lombo-sacro (L5-S1), bifurcam-se em Artéria Ilíaca Externa (para o MI) e Interna (para a pelve).'
    ],
    relacoesSintopicasVisuais: 'Medial ao músculo psoas maior; a artéria ilíaca comum esquerda cruza sobre a veia ilíaca comum esquerda.',
    funcaoHemodinamica: 'Conduz todo o débito arterial destinado à pelve, períneo e membros inferiores.',
    pegadinhaDeProva: 'NÃO confundir com a Veia Cava Inferior! A VCI é um tubo venoso largo, único, vertical e azulado que fica à direita da aorta; as ilíacas comuns são artérias duplas divergentes.'
  },
  {
    numero: 12,
    estrutura: 'Veia Subclávia',
    nomenclaturaAlternativa: 'Veia subclávia direita / esquerda',
    regiao: 'Vasos',
    ondeOAlfineteEspeta: 'Espetado no vaso venoso calibroso que passa sobre a primeira costela, situado ANTERIORMENTE ao músculo escaleno anterior.',
    comoReconhecerSemTocar: [
      'Vaso venoso azulado e calibroso que arqueia sobre a face superior da 1ª costela.',
      'Passa OBRIGATORIAMENTE PELA FRENTE (anteriormente) do Músculo Escaleno Anterior.',
      'A Artéria Subclávia passa ATRÁS do escaleno anterior (no espaço interescalênico, com o plexo braquial).',
      'Une-se à Veia Jugular Interna atrás da articulação esternoclavicular para formar a Veia Braquiocefálica.'
    ],
    relacoesSintopicasVisuais: 'Anterior ao músculo escaleno anterior e nervo frênico; posterior à clavícula e músculo subclávio.',
    funcaoHemodinamica: 'Principal via de drenagem venosa de todo o membro superior; local de inserção do ducto torácico (à esquerda) e ducto linfático direito (ângulo de Pirogoff).',
    pegadinhaDeProva: 'O Músculo Escaleno Anterior é o divisor de águas absoluto: na FRENTE dele = VEIA Subclávia; ATRÁS dele = ARTÉRIA Subclávia!'
  },
  {
    numero: 13,
    estrutura: 'Artéria Axilar',
    nomenclaturaAlternativa: 'Artéria axilar na fossa axilar',
    regiao: 'Membro Superior',
    ondeOAlfineteEspeta: 'Espetado no tronco arterial calibroso que atravessa a pirâmide axilar profundamente ao músculo peitoral menor.',
    comoReconhecerSemTocar: [
      'Eixo arterial central da fossa axilar, estendendo-se da margem lateral da 1ª costela até a margem inferior do músculo redondo maior.',
      'Abraçada intimamente pelas alças nervosas em "M" formadas pelos fascículos do Plexo Braquial (nervo mediano, musculocutâneo e ulnar).',
      'Cruzada anteriormente pelo músculo Peitoral Menor, que divide a artéria didaticamente em 3 porções.',
      'Ao cruzar a borda inferior do redondo maior, continua-se diretamente como Artéria Braquial.'
    ],
    relacoesSintopicasVisuais: 'Profunda ao peitoral menor e peitoral maior; lateral à veia axilar; intimamente abraçada pelos fascículos lateral, medial e posterior do plexo braquial.',
    funcaoHemodinamica: 'Vasculariza os músculos da cintura escapular, parede torácica lateral, mama e conduz o fluxo principal para o braço.',
    pegadinhaDeProva: 'Se o vaso arterial estiver dentro do oco da axila abraçado pelo "M" nervoso = ARTÉRIA AXILAR. Se já estiver descendo no braço medial ao bíceps = ARTÉRIA BRAQUIAL.'
  },
  {
    numero: 14,
    estrutura: 'Artéria Interventricular da Aorta',
    nomenclaturaAlternativa: 'Artéria interventricular anterior / Ramo interventricular anterior (ADA) da Coronária Esquerda',
    regiao: 'Coração',
    ondeOAlfineteEspeta: 'Espetado na artéria que desce no sulco interventricular anterior na face esternocostal do coração em direção ao ápice.',
    comoReconhecerSemTocar: [
      'Corre no sulco interventricular anterior em direção ao ápice cardíaco, acompanhada pela Grande Veia Cardíaca.',
      'Emerge sob a aurícula esquerda como o principal ramo da Artéria Coronária Esquerda (e NÃO direto da aorta!).',
      'Mantém parede cilíndrica e lúmen aberto, diferenciando-se da grande veia cardíaca adjacente que é mole e arroxeada.',
      'Emite ramos septais anteriores que penetram profundamente no septo interventricular e ramos diagonais para a parede livre do VE.'
    ],
    relacoesSintopicasVisuais: 'No sulco interventricular anterior; medial à aurícula esquerda; acompanhada pela Veia Cardíaca Magna.',
    funcaoHemodinamica: 'Irriga os 2/3 anteriores do septo interventricular, a parede anterior do VE e o ápice cardíaco ("artéria da morte súbita" no IAM).',
    pegadinhaDeProva: 'PEGADINHA DO SIMULADO: Se a prova citar "Artéria interventricular da aorta", lembre-se que ela se origina da CORONÁRIA ESQUERDA (que por sua vez nasce do seio aórtico esquerdo). O nome anatômico oficial é Artéria Interventricular Anterior!'
  },
  {
    numero: 15,
    estrutura: 'Pericárdio Fibroso',
    nomenclaturaAlternativa: 'Saco pericárdico fibroso externo',
    regiao: 'Coração',
    ondeOAlfineteEspeta: 'Espetado na parede externa esbranquiçada, espessa, opaca e resistente do saco pericárdico íntegro.',
    comoReconhecerSemTocar: [
      'Cápsula de tecido conjuntivo denso resistente, espessa, esbranquiçada e completamente inelástica envolvendo o coração.',
      'Funde-se inferiormente com o centro tendíneo do diafragma através do ligamento pericardiofrênico.',
      'Funde-se superiormente com a túnica adventícia dos grandes vasos da base (aorta, tronco pulmonar e VCS).',
      'Ancorada anteriormente ao esterno através dos ligamentos esternopericárdicos superior e inferior.'
    ],
    relacoesSintopicasVisuais: 'Externo a todo o coração; separado dos pulmões pelas pleuras mediastinais e nervos frênicos.',
    funcaoHemodinamica: 'Mantém o coração na posição anatômica no mediastino médio e impede a dilatação aguda excessiva das câmaras cardíacas.',
    pegadinhaDeProva: 'A "bolsa dura de couro" por fora é o Pericárdio Fibroso. A película brilhante fininha que forra por dentro dessa bolsa é a lâmina parietal do seroso!'
  },
  {
    numero: 16,
    estrutura: 'Pericárdio Seroso',
    nomenclaturaAlternativa: 'Pericardium serosum (Lâmina Parietal e Lâmina Visceral / Epicárdio)',
    regiao: 'Coração',
    ondeOAlfineteEspeta: 'Espetado na face interna lisa do saco pericárdico (lâmina parietal) ou demonstrando o espaço da cavidade pericárdica entre os dois folhetos.',
    comoReconhecerSemTocar: [
      'Membrana serosa delgada constituída por mesotélio e tecido conjuntivo frouxo submesotelial.',
      'Dividida em duas lâminas contínuas: Lâmina Parietal (reveste internamente o pericárdio fibroso) e Lâmina Visceral (Epicárdio, colado no coração).',
      'Entre as duas lâminas existe a Cavidade Pericárdica: espaço virtual contendo película de líquido lubrificante (15 a 50 mL).',
      'Reflete-se na raiz dos grandes vasos formando os seios transverso e oblíquo do pericárdio.'
    ],
    relacoesSintopicasVisuais: 'Lâmina parietal aderida ao pericárdio fibroso; lâmina visceral aderida ao miocárdio; cavidade pericárdica interposta.',
    funcaoHemodinamica: 'Proporciona deslizamento perfeitamente liso e sem atrito mecânico das paredes cardíacas durante cada sístole e diástole.',
    pegadinhaDeProva: 'Se o professor perguntar: "Onde se localiza a cavidade pericárdica com líquido?", a resposta exata é ENTRE a lâmina parietal e visceral do Pericárdio Seroso!'
  },
  {
    numero: 17,
    estrutura: 'Artéria Carótida Comum',
    nomenclaturaAlternativa: 'Artéria carótida comum (esquerda ou direita) / Carótida primitiva',
    regiao: 'Grandes Vasos',
    ondeOAlfineteEspeta: 'Espetado no vaso arterial espesso de trajeto vertical no trígono carotídeo do pescoço, medialmente à veia jugular interna.',
    comoReconhecerSemTocar: [
      'Tubo arterial calibroso e retilíneo que ascende verticalmente pelo pescoço ao lado da traqueia e laringe.',
      'Envolvida pela Bainha Carotídea junto com a Veia Jugular Interna (lateral) e o Nervo Vago (posterior no ângulo diedro).',
      'NÃO EMITE NENHUM RAMO colateral no pescoço em todo o seu trajeto ascendente.',
      'Termina na margem superior da cartilagem tireóidea (nível C4), onde se dilata no seio carotídeo e se bifurca em carótida interna e externa.'
    ],
    relacoesSintopicasVisuais: 'Medial: laringe, traqueia, esôfago e lobo da tireoide. Lateral: Veia Jugular Interna. Posterior: Nervo Vago (X) e tronco simpático.',
    funcaoHemodinamica: 'Principal conduto arterial de alta pressão para suprimento do encéfalo, olhos, crânio e tecidos da face e pescoço.',
    pegadinhaDeProva: 'Se você vir uma artéria no pescoço que NÃO dá ramos colaterais até a altura do pomo de adão = ARTÉRIA CARÓTIDA COMUM!'
  },
  {
    numero: 18,
    estrutura: 'Artéria Carótida Externa e Interna',
    nomenclaturaAlternativa: 'Bifurcação carotídea ao nível de C4 / Seio e corpo carotídeo',
    regiao: 'Vasos',
    ondeOAlfineteEspeta: 'Espetado na bifurcação ao nível da margem superior da cartilagem tireóidea (C4), diferenciando o ramo anterior que dá ramos (externa) do posterior liso (interna).',
    comoReconhecerSemTocar: [
      'Artéria Carótida Externa: situa-se mais ântero-medial e EMITE RAMOS imediatos no pescoço (A. tireóidea superior, lingual, facial, occipital, faríngea ascendente).',
      'Artéria Carótida Interna: situa-se mais póstero-lateral, apresenta dilatação na base (Seio Carotídeo) e NÃO EMITE NENHUM RAMO no pescoço, subindo direto para a base do crânio.',
      'No ângulo da bifurcação aloja-se o Corpo Carotídeo (quimiorreceptor que monitora O2, CO2 e pH).',
      'A parede dilatada do seio carotídeo contém barorreceptores inervados pelo nervo glossofaríngeo (IX).'
    ],
    relacoesSintopicasVisuais: 'Ao nível da 4ª vértebra cervical (C4) e bordo superior da cartilagem tireóidea; cruzada pelo nervo hipoglosso (XII).',
    funcaoHemodinamica: 'A carótida interna irriga o cérebro anterior e órbitas; a carótida externa irriga a face, couro cabeludo, meninges e pescoço.',
    pegadinhaDeProva: 'Para diferenciar na peça cadavérica: a que DÁ RAMOS visíveis no pescoço é a Carótida EXTERNA. A que sobe lisa e entra no crânio sem dar ramos cervicais é a INTERNA!'
  },
  {
    numero: 19,
    estrutura: 'Aurícula Direita',
    nomenclaturaAlternativa: 'Apêndice atrial direito',
    regiao: 'Coração',
    ondeOAlfineteEspeta: 'Espetado no apêndice muscular cônico com formato de orelha de cachorro que se projeta da face ântero-superior do átrio direito sobre a aorta.',
    comoReconhecerSemTocar: [
      'Bolsa muscular triangular larga e cônica que se projeta para a frente a partir do teto do átrio direito.',
      'Recobre e abraça a face ântero-lateral direita da raiz da aorta ascendente.',
      'Seu interior é profusamente trabeculado por múltiplos Músculos Pectíneos.',
      'É mais larga, triangular e menos recortada que a aurícula esquerda (que é mais estreita e digitiforme).'
    ],
    relacoesSintopicasVisuais: 'Anterior e à direita da raiz da aorta ascendente; superior ao sulco coronário direito.',
    funcaoHemodinamica: 'Acomoda aumentos agudos de volemia atrial e secreta o Peptídeo Natriurético Atrial (ANP) em resposta à distensão parietal.',
    pegadinhaDeProva: 'NÃO confunda com o átrio direito inteiro! O átrio é a cavidade oca completa; a aurícula é unicamente a lingueta/orelhinha carnosa projetada na frente.'
  },
  {
    numero: 20,
    estrutura: 'Músculo Papilar',
    nomenclaturaAlternativa: 'Músculos papilares (anterior, posterior e septal) e cordas tendíneas',
    regiao: 'Coração',
    ondeOAlfineteEspeta: 'Espetado no corpo muscular carnoso cônico saliente no interior do ventrículo ou nos filamentos fibrosos que saem de seu ápice.',
    comoReconhecerSemTocar: [
      'Projeções musculares cônicas robustas (trabéculas cárneas de 1ª ordem) cuja base se fixa no miocárdio ventricular e o ápice é livre na luz.',
      'Do ápice partem dezenas de filamentos brancos delgados e brilhantes semelhantes a fios de náilon: as Cordas Tendíneas.',
      'Ventrículo Esquerdo possui 2 músculos papilares gigantes (anterior e posterior).',
      'Ventrículo Direito possui 3 músculos papilares menores (anterior, posterior e septal).'
    ],
    relacoesSintopicasVisuais: 'Erigem-se do miocárdio ventricular; suas cordas tendíneas ancoram-se nas bordas livres das cúspides das valvas mitral e tricúspide.',
    funcaoHemodinamica: 'Contraem-se durante a sístole ventricular para tracionar as cordas tendíneas, travando as cúspides e impedindo seu prolapso/eversão para os átrios.',
    pegadinhaDeProva: 'Eles NÃO puxam as cúspides para abrir a valva! Quem abre as valvas é a pressão do sangue na diástole. Os músculos papilares servem para TRAVAR o fechamento!'
  },
  {
    numero: 21,
    estrutura: 'Septo Interventricular',
    nomenclaturaAlternativa: 'Septo interventricular (porção muscular e membranosa)',
    regiao: 'Coração',
    ondeOAlfineteEspeta: 'Espetado na espessa parede divisória central que separa a cavidade do ventrículo direito da cavidade do ventrículo esquerdo.',
    comoReconhecerSemTocar: [
      'Parede divisória espessa e compacta localizada obliquamente entre os dois ventrículos.',
      'Apresenta duas porções anatômicas distintas: a Porção Muscular (inferior, maciça e muito espessa, correspondendo a 90% do septo) e a Porção Membranosa (superior, delgada e translúcida junto à raiz aórtica).',
      'Abaula-se em direção à cavidade do ventrículo direito devido à maior pressão exercida pelo ventrículo esquerdo.',
      'Externamente corresponde aos sulcos interventriculares anterior e posterior.'
    ],
    relacoesSintopicasVisuais: 'Entre VD e VE; percorrido internamente pelo feixe atrioventricular de His e seus ramos direito e esquerdo.',
    funcaoHemodinamica: 'Separa rigorosamente o circuito de baixa pressão venosa (VD) do circuito de alta pressão arterial (VE) e contribui ativamente para a ejeção sistólica do VE.',
    pegadinhaDeProva: 'Se o alfinete estiver na parte de baixo espessa de carne = PORÇÃO MUSCULAR do septo. Se estiver no topo fino perto da valva aórtica = PORÇÃO MEMBRANOSA do septo!'
  },
  {
    numero: 22,
    estrutura: 'Artéria Ilíaca Interna',
    nomenclaturaAlternativa: 'Artéria hipogástrica (pelve menor)',
    regiao: 'Vasos',
    ondeOAlfineteEspeta: 'Espetado no ramo medial da bifurcação da artéria ilíaca comum que mergulha profundamente para dentro da cavidade pélvica.',
    comoReconhecerSemTocar: [
      'Ramo medial que parte da bifurcação da Artéria Ilíaca Comum na altura do disco L5-S1.',
      'MERGULHA PROFUNDAMENTE para dentro da cavidade da pelve menor, passando medialmente ao músculo psoas maior.',
      'Diferencia-se da Artéria Ilíaca Externa, que continua contornando a borda da pelve para passar sob o ligamento inguinal em direção à coxa.',
      'Bifurca-se em tronco anterior (visceral) e posterior (parietal) no interior da pelve.'
    ],
    relacoesSintopicasVisuais: 'Anterior à articulação sacroilíaca e veia ilíaca interna; medial ao nervo obturatório e ureter.',
    funcaoHemodinamica: 'Responsável pela irrigação arterial de todas as vísceras pélvicas (bexiga, reto, útero, próstata), genitália externa, períneo e região glútea.',
    pegadinhaDeProva: 'Olhe a direção do vaso na bifurcação: o vaso que MERGULHA FUNDO no buraco da bacia é a Ilíaca INTERNA. O que continua reto rente ao osso para a perna é a EXTERNA!'
  },
  {
    numero: 23,
    estrutura: 'Veia Safena Magna',
    nomenclaturaAlternativa: 'Veia safena interna / Grande veia safena',
    regiao: 'Membro Inferior',
    ondeOAlfineteEspeta: 'Espetado na face medial da perna ou coxa, ou passando 1 a 2 cm ANTERIOR ao maléolo medial do tornozelo.',
    comoReconhecerSemTocar: [
      'Maior e mais longa veia superficial do corpo humano, correndo no tecido subcutâneo pela face medial do membro inferior.',
      'Passa OBRIGATORIAMENTE cerca de 1 a 2 cm ANTERIOR ao maléolo medial no tornozelo (marco cirúrgico clássico de flebotomia).',
      'Sobe pela face medial da perna acompanhada pelo Nervo Safeno e pela face medial da coxa medialmente ao músculo sartório.',
      'Perfura a fáscia lata pelo Hiato Safeno (fossa oval da coxa) para desembocar na Veia Femoral no trígono femoral.'
    ],
    relacoesSintopicasVisuais: 'Anterior ao maléolo medial; medial à tíbia; acompanhada pelo nervo safeno; desemboca na veia femoral.',
    funcaoHemodinamica: 'Drena a maior parte do sangue venoso superficial do dorso do pé, perna e coxa. É o principal conduto utilizado para enxertos cirúrgicos de ponte de safena.',
    pegadinhaDeProva: 'Passou na FRENTE do osso interno do tornozelo (maléolo medial) = SAFENA MAGNA. Passou ATRÁS do osso externo (maléolo lateral) = SAFENA PARVA!'
  },
  {
    numero: 24,
    estrutura: 'Veia Safena Parva',
    nomenclaturaAlternativa: 'Veia safena externa / Pequena veia safena',
    regiao: 'Membro Inferior',
    ondeOAlfineteEspeta: 'Espetado na face posterior da perna (panturrilha) ou contornando POSTERIORMENTE o maléolo lateral do tornozelo.',
    comoReconhecerSemTocar: [
      'Origina-se na margem lateral do arco venoso dorsal do pé.',
      'Passa OBRIGATORIAMENTE por TRÁS (posteriormente) do Maléolo Lateral do tornozelo.',
      'Sobe pela linha média posterior da panturrilha entre as duas cabeças do músculo gastrocnêmio, acompanhada pelo Nervo Sural.',
      'Perfura a fáscia poplítea profunda na dobra posterior do joelho para desembocar diretamente na Veia Poplítea.'
    ],
    relacoesSintopicasVisuais: 'Posterior ao maléolo lateral; superficial à fáscia crural entre os gastrocnêmios; acompanhada pelo Nervo Sural.',
    funcaoHemodinamica: 'Drena o sangue venoso superficial da margem lateral do pé, calcanhar e face posterior da perna.',
    pegadinhaDeProva: 'Onde desembocam as safenas? A Safena Magna desemboca na Veia FEMORAL (no trígono femoral). A Safena Parva desemboca na Veia POPLÍTEA (na fossa poplítea)!'
  }
];
