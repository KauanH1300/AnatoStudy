import { PracticalGuideTopic, AuscultationFocus, PulsePoint } from '../types/anatomy';

export const practicalGuideTopics: PracticalGuideTopic[] = [
  {
    id: 'arteria-vs-veia',
    titulo: 'Artéria vs. Veia na Peça Cadavérica',
    subtitulo: 'Como diferenciar vasos sanguíneos dissecados na bancada de prova prática',
    categoria: 'Vasos Sanguíneos',
    conceitoChave: 'A espessura da túnica média e o comportamento da luz sob palpação e corte são os critérios soberanos.',
    diferenciaisBancada: [
      {
        criterio: 'Espessura e Firmeza da Parede',
        estruturaA: 'Artéria: Parede espessa, firme e elástica devido à rica túnica média com fibras musculares e lâminas elásticas.',
        estruturaB: 'Veia: Parede delgada, mole, membranosa e facilmente translúcida.',
        comoAvaliarNoCadaver: 'Palpe com a ponta da pinça de dissecção: a artéria rola entre os dedos como um cordão cilíndrico rígido; a veia achata completamente.'
      },
      {
        criterio: 'Formato da Luz (Lúmen)',
        estruturaA: 'Artéria: Luz arredondada, patente e circular mesmo sem sangue.',
        estruturaB: 'Veia: Luz colabada, achatada em fita ou frouxamente pregueada.',
        comoAvaliarNoCadaver: 'Olhe a extremidade seccionada do vaso: a artéria mantém o orifício aberto; a veia fecha suas paredes colabando a luz.'
      },
      {
        criterio: 'Coloração na Peça Formalizada',
        estruturaA: 'Artéria: Tende ao bege-claro, branco-amarelado ou rosado-pálido.',
        estruturaB: 'Veia: Frequentemente arroxeada, azul-escura ou enegrecida devido aos coágulos residuais de sangue venoso fixados.',
        comoAvaliarNoCadaver: 'Inspecione visualmente o trajeto sob a luz da bancada. Em peças com látex, artéria é vermelha e veia é azul.'
      },
      {
        criterio: 'Presença de Válvulas Internas',
        estruturaA: 'Artéria: Ausência total de válvulas parietais ao longo do trajeto (válvulas apenas na raiz da aorta e tronco pulmonar).',
        estruturaB: 'Veia: Presença de dobras semilunares parietais (válvulas venosas) nos membros.',
        comoAvaliarNoCadaver: 'Se a veia for aberta longitudinalmente, é possível identificar pequenas bolsas finas em forma de ninho aderidas à íntima.'
      }
    ],
    passoAPassoIdentificacao: [
      'Passo 1: Aproxime a pinça e verifique se o vaso mantém luz aberta circular patente (Artéria) ou se está colabado e escuro (Veia).',
      'Passo 2: Verifique a relação satélite nos membros: geralmente há 1 artéria elástica ladeada por 2 veias braquiais ou tibiais satélites.',
      'Passo 3: Se houver nervo no feixe, lembre-se: nervo é um cordão MACIÇO sem furo central e com estrias fasciculares brancas.',
      'Passo 4: Verifique a direção do vaso: artéria ramifica-se para a periferia; veia recebe tributárias em direção ao tronco.'
    ],
    pontosDeConfusao: [
      {
        armadilha: 'Confundir um nervo periférico com uma artéria muscular fina (ex: nervo mediano com artéria braquial).',
        comoDesatar: 'O nervo é maciço, rígido, sem orifício central e estriado longitudinalmente por fascículos. A artéria é um tubo oco com luz aberta.'
      },
      {
        armadilha: 'Confundir a Veia Safena Magna com tendão na face medial do joelho/perna.',
        comoDesatar: 'O tendão se insere firmemente no osso e é extremamente duro e nacarado. A veia safena é elástica, oca e desemboca na veia femoral no hiato safeno.'
      }
    ],
    relevanciaFisioterapia: 'Crucial na avaliação de pulsos, na drenagem linfática manual (DLM), na identificação de trombose venosa profunda (TVP) e na aplicação segura de técnicas miofasciais.'
  },
  {
    id: 'aorta-ascendente-vs-descendente',
    titulo: 'Aorta Ascendente vs. Aorta Descendente Torácica',
    subtitulo: 'Diferenciação topográfica dos dois grandes segmentos da aorta torácica',
    categoria: 'Grandes Vasos',
    conceitoChave: 'A aorta ascendente situa-se no mediastino médio dentro do saco pericárdico; a aorta descendente situa-se no mediastino posterior colada às vértebras T4-T12.',
    diferenciaisBancada: [
      {
        criterio: 'Localização e Mediastino',
        estruturaA: 'Aorta Ascendente: Mediastino médio, envolta pelo saco pericárdico fibroso na base do coração.',
        estruturaB: 'Aorta Descendente Torácica: Mediastino posterior, fora do saco pericárdico, colada à face lateral esquerda dos corpos vertebrais T4-T12.',
        comoAvaliarNoCadaver: 'Se o vaso sai diretamente de cima dos ventrículos entre as aurículas = Ascendente. Se desce verticalmente como um tubo longo ao lado da coluna = Descendente.'
      },
      {
        criterio: 'Ramos Emitidos',
        estruturaA: 'Aorta Ascendente: Emite EXCLUSIVAMENTE as Artérias Coronárias Direita e Esquerda no bulbo aórtico.',
        estruturaB: 'Aorta Descendente: Emite 9 pares de Artérias Intercostais Posteriores, artérias bronquiais, esofágicas e mediastinais.',
        comoAvaliarNoCadaver: 'Procure raminhos colaterais: se saem pares horizontais para os espaços intercostais entre as costelas = Aorta Descendente!'
      },
      {
        criterio: 'Relações Anatômicas Imediatas',
        estruturaA: 'Aorta Ascendente: Anterior à artéria pulmonar direita e átrio esquerdo; medial à aurícula direita e VCS.',
        estruturaB: 'Aorta Descendente: Posterior ao hilo pulmonar esquerdo, coração e esôfago; anterior à coluna torácica.',
        comoAvaliarNoCadaver: 'Localize a coluna vertebral torácica: o tubo espesso colado à esquerda dos corpos vertebrais é a aorta torácica descendente.'
      }
    ],
    passoAPassoIdentificacao: [
      'Passo 1: Identifique a raiz do coração. O segmento inicial de 5 cm que parte do VE e termina no ângulo de Louis (T4) é a Aorta Ascendente.',
      'Passo 2: Após a saída da artéria subclávia esquerda, o vaso curva-se para baixo no mediastino posterior como Aorta Descendente Torácica.',
      'Passo 3: Observe a terminação: a aorta descendente torácica perfura o diafragma pelo hiato aórtico ao nível de T12.',
      'Passo 4: Verifique a espessura da parede: ambas possuem parede muito espessa (túnica média elástica de Windkessel).'
    ],
    pontosDeConfusao: [
      {
        armadilha: 'Achar que os 3 ramos da cabeça e braços saem da aorta ascendente.',
        comoDesatar: 'O tronco braquiocefálico, carótida comum esquerda e subclávia esquerda saem do ARCO DA AORTA, nunca da aorta ascendente nem descendente.'
      },
      {
        armadilha: 'Confundir a veia ázigos com a aorta descendente.',
        comoDesatar: 'A veia ázigos fica à DIREITA da coluna vertebral e é uma veia fina e azulada; a aorta descendente fica à ESQUERDA e é uma artéria grossa vermelha/bege.'
      }
    ],
    relevanciaFisioterapia: 'Coarctação da aorta descendente provoca diferença de pressão arterial e amplitude de pulsos entre membros superiores e inferiores; aneurismas torácicos comprimem o esôfago gerando disfagia e tosse.'
  },
  {
    id: 'pericardio-fibroso-vs-seroso-epicardio',
    titulo: 'Pericárdio Fibroso vs. Seroso (Parietal e Visceral / Epicárdio)',
    subtitulo: 'As camadas anatômicas do saco pericárdico e a parede externa cardíaca',
    categoria: 'Pericárdio & Camadas',
    conceitoChave: 'O pericárdio fibroso é a bolsa externa opaca inelástica; o pericárdio seroso tem lâmina parietal interna e visceral (epicárdio) colada no miocárdio.',
    diferenciaisBancada: [
      {
        criterio: 'Aspecto Visual e Espessura',
        estruturaA: 'Pericárdio Fibroso: Saco externo espesso, esbranquiçado, fibroso, opaco e resistente.',
        estruturaB: 'Epicárdio (Lâmina Visceral Serosa): Membrana fina, transparente, brilhante e aderida diretamente sobre a gordura do miocárdio.',
        comoAvaliarNoCadaver: 'Se a peça tiver uma bolsa de couro solta por fora cobrindo tudo = Fibroso. Se o alfinete estiver na superfície brilhante do próprio coração = Epicárdio.'
      },
      {
        criterio: 'Lâmina Parietal vs Lâmina Visceral',
        estruturaA: 'Lâmina Parietal do Seroso: Superfície interna lisa que forra a face interna da "bolsa" do pericárdio fibroso.',
        estruturaB: 'Lâmina Visceral do Seroso (Epicárdio): Superfície externa lisa que forra a massa muscular do miocárdio.',
        comoAvaliarNoCadaver: 'Se o professor abrir o saco fibroso e espetar a face interna da tampa = Lâmina Parietal. Se espetar no coração = Lâmina Visceral (Epicárdio).'
      },
      {
        criterio: 'Cavidade Pericárdica',
        estruturaA: 'Localização: Espaço virtual interposto EXCLUSIVAMENTE entre a Lâmina Parietal e a Lâmina Visceral do pericárdio seroso.',
        estruturaB: 'Conteúdo: Contém normalmente de 15 a 50 mL de líquido pericárdico seroso lubrificante.',
        comoAvaliarNoCadaver: 'Não existe espaço entre o fibroso e a parietal (estão fundidos). O espaço livre com líquido fica entre parietal e visceral.'
      }
    ],
    passoAPassoIdentificacao: [
      'Passo 1: Observe a peça por fora: se ainda houver o invólucro membranoso fechado = Pericárdio Fibroso.',
      'Passo 2: Abra o invólucro: a face brilhante interna da parede aberta é a Lâmina Parietal do Pericárdio Seroso.',
      'Passo 3: Olhe para a superfície muscular do coração exposto: a película transparente que cobre a gordura amarela e os vasos coronários é o Epicárdio (Lâmina Visceral).',
      'Passo 4: Verifique as inserções do saco fibroso: inferiormente no centro tendíneo do diafragma e superiormente na raiz dos grandes vasos.'
    ],
    pontosDeConfusao: [
      {
        armadilha: 'Dizer que a cavidade pericárdica fica entre o pericárdio fibroso e o seroso.',
        comoDesatar: 'Erro clássico de prova! A cavidade fica ENTRE as duas lâminas (parietal e visceral) do Pericárdio Seroso.'
      },
      {
        armadilha: 'Confundir Epicárdio com Endocárdio.',
        comoDesatar: 'O Epicárdio reveste o coração por FORA (lâmina visceral). O Endocárdio reveste as câmaras por DENTRO (luz dos átrios e ventrículos).'
      }
    ],
    relevanciaFisioterapia: 'No derrame pericárdico e tamponamento cardíaco agudo, a inelasticidade do pericárdio fibroso restringe o enchimento diastólico do ventrículo direito, gerando tríade de Beck (hipotensão, turgência jugular e bulhas hipofonéticas).'
  },
  {
    id: 'ostio-av-direito-vs-esquerdo',
    titulo: 'Óstio Átrio Ventricular Direito vs. Esquerdo & Músculos',
    subtitulo: 'Diferenciação dos orifícios atrioventriculares, valvas e músculos pectíneos vs papilares',
    categoria: 'Morfologia Interna',
    conceitoChave: 'Óstio AV Direito possui a valva tricúspide (3 cúspides) e relaciona-se a músculos pectíneos no AD; Óstio AV Esquerdo possui a valva mitral (2 cúspides) e relaciona-se a 2 papilares gigantes no VE.',
    diferenciaisBancada: [
      {
        criterio: 'Valva e Número de Cúspides',
        estruturaA: 'Óstio AV Direito: Guarnecido pela Valva Tricúspide (3 cúspides: anterior, posterior e septal).',
        estruturaB: 'Óstio AV Esquerdo: Guarnecido pela Valva Mitral (2 cúspides: anterior e posterior).',
        comoAvaliarNoCadaver: 'Conte os folhetos valvares no anel: 3 cúspides com uma presa no septo = Óstio AV Direito; 2 cúspides amplas = Óstio AV Esquerdo.'
      },
      {
        criterio: 'Músculo Pectíneo vs Músculo Papilar',
        estruturaA: 'Músculo Pectíneo: Cristas musculares em dente de pente na parede anterior do ÁTRIO e no interior das aurículas.',
        estruturaB: 'Músculo Papilar: Colunas carnosas cônicas volumosas que nascem no miocárdio do VENTRÍCULO e emitem cordas tendíneas.',
        comoAvaliarNoCadaver: 'Se estiver no ÁTRIO em forma de pente raso = Músculo Pectíneo. Se estiver no VENTRÍCULO com fios brancos saindo da ponta = Músculo Papilar.'
      },
      {
        criterio: 'Câmara e Pressões',
        estruturaA: 'Óstio AV Direito: Comunica o AD de parede delgada com o VD de baixa pressão (~25 mmHg).',
        estruturaB: 'Óstio AV Esquerdo: Comunica o AE com o VE de parede espessa e alta pressão (~120 mmHg).',
        comoAvaliarNoCadaver: 'Verifique a espessura da parede da câmara adjacente: o anel mitral está em contato direto com a parede grossa de 8-12 mm do VE.'
      }
    ],
    passoAPassoIdentificacao: [
      'Passo 1: Identifique se a câmara aberta é átrio ou ventrículo.',
      'Passo 2: No assoalho do átrio direito, localize a abertura circular ampla que conduz ao VD através da valva tricúspide = Óstio AV Direito.',
      'Passo 3: No assoalho do átrio esquerdo, localize a abertura elíptica cercada pelas 4 veias pulmonares que conduz ao VE = Óstio AV Esquerdo.',
      'Passo 4: Verifique as cordas tendíneas: elas ancoram as cúspides valvares aos músculos papilares correspondentes.'
    ],
    pontosDeConfusao: [
      {
        armadilha: 'Confundir Fossa Oval com Óstio Atrioventricular Direito.',
        comoDesatar: 'A Fossa Oval é uma depressão rasa e fechada no septo medial. O Óstio AV é um túnel largo aberto no assoalho que dá acesso ao ventrículo.'
      },
      {
        armadilha: 'Achar que os músculos papilares abrem as valvas atrioventriculares.',
        comoDesatar: 'Eles nunca abrem as valvas! Eles se contraem na sístole apenas para travar as cúspides e impedir prolapso para dentro dos átrios.'
      }
    ],
    relevanciaFisioterapia: 'Estenose mitral produz estalido de abertura e ruflar diastólico audível no foco mitral (5º EICE na LMC); insuficiência tricúspide produz sopro holossistólico que aumenta na inspiração profunda (Rivero-Carvallo).'
  },
  {
    id: 'carotidas-comum-externa-interna',
    titulo: 'Artérias Carótidas Comum, Externa e Interna',
    subtitulo: 'Trajeto cervical, nível da bifurcação em C4 e diferenciação anatômica dos ramos',
    categoria: 'Cabeça & Pescoço',
    conceitoChave: 'A Carótida Comum não emite ramos no pescoço; em C4 bifurca-se em Carótida Externa (que emite múltiplos ramos para face/pescoço) e Carótida Interna (que sobe lisa sem ramos cervicais para o crânio).',
    diferenciaisBancada: [
      {
        criterio: 'Emissão de Ramos Cervicais',
        estruturaA: 'Artéria Carótida Externa: Emite 8 ramos imediatos no pescoço (A. tireóidea superior, lingual, facial, occipital, auricular posterior, etc.).',
        estruturaB: 'Artéria Carótida Interna: NÃO emite nenhum ramo no pescoço; ascende lisa e penetra diretamente no canal carotídeo da base do crânio.',
        comoAvaliarNoCadaver: 'Olhe a bifurcação em C4: o vaso que se ramifica no pescoço é a Carótida EXTERNA; o vaso que sobe sem ramos é a Carótida INTERNA!'
      },
      {
        criterio: 'Posição Espacial e Seio Carotídeo',
        estruturaA: 'Carótida Externa: Posiciona-se mais ântero-medialmente na bifurcação.',
        estruturaB: 'Carótida Interna: Posiciona-se mais póstero-lateralmente e possui dilatação na raiz (Seio Carotídeo).',
        comoAvaliarNoCadaver: 'A dilatação globosa de parede fina na raiz do ramo posterior é o Seio Carotídeo (barorreceptor).'
      },
      {
        criterio: 'Artéria Carótida Comum',
        estruturaA: 'Origem: À direita nasce do Tronco Braquiocefálico; à esquerda nasce DIRETO da convexidade do Arco da Aorta.',
        estruturaB: 'Bainha Carotídea: Corre medialmente à Veia Jugular Interna e anteriormente ao Nervo Vago.',
        comoAvaliarNoCadaver: 'Tubo arterial grosso retilíneo que sobe verticalmente ao lado da traqueia sem nenhum ramo lateral.'
      }
    ],
    passoAPassoIdentificacao: [
      'Passo 1: Encontre o pomo de adão / margem superior da cartilagem tireóidea (nível C4). Esse é o ponto exato da bifurcação carotídea.',
      'Passo 2: Abaixo desse nível, o vaso arterial calibroso único é a Artéria Carótida Comum.',
      'Passo 3: No ponto de bifurcação, observe os dois ramos terminais: o ramo anterior que dá galhos é a Artéria Carótida Externa.',
      'Passo 4: O ramo posterior dilatado na raiz que sobe liso para a base da cabeça é a Artéria Carótida Interna.'
    ],
    pontosDeConfusao: [
      {
        armadilha: 'Achar que a carótida interna fica mais para a frente por ser mais importante.',
        comoDesatar: 'Na bifurcação em C4, a carótida EXTERNA fica anterior/medial para irrigar a face; a INTERNA fica posterior/lateral para mergulhar no crânio.'
      },
      {
        armadilha: 'Palpar as duas carótidas comuns simultaneamente no paciente.',
        comoDesatar: 'Contraindicação formal na semiologia! Comprimir ambos os seios carotídeos causa bradicardia severa, queda abrupta do fluxo cerebral e síncope reflexa.'
      }
    ],
    relevanciaFisioterapia: 'Pulso carotídeo é o pulso central padrão em emergências (RCP); placas ateroscleróticas na bifurcação carotídea geram sopros carotídeos e risco de AVC isquêmico embólico.'
  },
  {
    id: 'iliacas-comum-interna-externa',
    titulo: 'Artérias Ilíacas Comum, Interna e Externa',
    subtitulo: 'Bifurcação aórtica em L4 e transição pélvico-femoral sob o ligamento inguinal',
    categoria: 'Abdome & Pelve',
    conceitoChave: 'A Aorta bifurca-se em L4 nas Ilíacas Comuns; em L5-S1 a Ilíaca Comum bifurca-se em Ilíaca Interna (mergulha na pelve menor) e Externa (segue para a coxa como Artéria Femoral).',
    diferenciaisBancada: [
      {
        criterio: 'Destino dos Ramos Ilíacos',
        estruturaA: 'Artéria Ilíaca Interna: Mergulha profundamente para dentro da cavidade da pelve menor para irrigar as vísceras pélvicas e períneo.',
        estruturaB: 'Artéria Ilíaca Externa: Continua superficialmente ao longo do músculo psoas e passa sob o ligamento inguinal para virar Artéria Femoral.',
        comoAvaliarNoCadaver: 'Olhe a direção na bifurcação: se o vaso afunda no buraco da bacia = Ilíaca INTERNA. Se segue rente à borda para a perna = Ilíaca EXTERNA.'
      },
      {
        criterio: 'Nível Vertebral da Bifurcação',
        estruturaA: 'Bifurcação da Aorta em Ilíacas Comuns: Nível da 4ª vértebra lombar (L4 - cristas ilíacas).',
        estruturaB: 'Bifurcação da Ilíaca Comum em Externa e Interna: Nível da articulação sacroilíaca / disco L5-S1.',
        comoAvaliarNoCadaver: 'A bifurcação alta na coluna lombar é da Aorta; a bifurcação baixa na entrada da bacia é da Ilíaca Comum.'
      }
    ],
    passoAPassoIdentificacao: [
      'Passo 1: Trace a linha bi-ilíaca no abdômen posterior: ao nível de L4, a aorta abdominal termina bifurcando-se em Artérias Ilíacas Comuns D e E.',
      'Passo 2: Acompanhe a artéria ilíaca comum por cerca de 4 cm ao longo do bordo medial do músculo psoas maior.',
      'Passo 3: Na altura de L5-S1, veja o vaso que mergulha no estreito superior da pelve: é a Artéria Ilíaca Interna (hipogástrica).',
      'Passo 4: Veja o vaso que continua contornando a margem óssea e passa debaixo do ligamento inguinal: é a Artéria Ilíaca Externa (que vira Artéria Femoral).'
    ],
    pontosDeConfusao: [
      {
        armadilha: 'Confundir Artéria Ilíaca Comum com a Veia Cava Inferior.',
        comoDesatar: 'A VCI é um tronco venoso único, volumoso e azulado localizado à direita da coluna; as ilíacas comuns são duas artérias divergentes em "Y" com paredes espessas.'
      }
    ],
    relevanciaFisioterapia: 'Fundamental na Fisioterapia Pélvica e Obstétrica: a artéria ilíaca interna irriga a musculatura do assoalho pélvico (ramos pudendos internos), enquanto a artéria ilíaca externa supre o membro inferior.'
  },
  {
    id: 'safena-magna-vs-parva',
    titulo: 'Veia Safena Magna vs. Veia Safena Parva',
    subtitulo: 'Regra infalível dos maléolos do tornozelo e pontos de desembocadura',
    categoria: 'Membro Inferior',
    conceitoChave: 'A Safena Magna passa ANTERIOR ao maléolo medial e desemboca na Veia Femoral; a Safena Parva passa POSTERIOR ao maléolo lateral e desemboca na Veia Poplítea.',
    diferenciaisBancada: [
      {
        criterio: 'Relação Obrigatória com os Maléolos',
        estruturaA: 'Veia Safena Magna: Passa 1 a 2 cm ANTERIORMENTE ao Maléolo Medial (osso de dentro do tornozelo).',
        estruturaB: 'Veia Safena Parva: Passa POSTERIORMENTE ao Maléolo Lateral (osso de fora do tornozelo).',
        comoAvaliarNoCadaver: 'Critério número 1 de prova: olhe o osso do tornozelo. Passou pela frente do maléolo de dentro = Magna. Passou por trás do maléolo de fora = Parva!'
      },
      {
        criterio: 'Trajeto na Perna e Deságue Profundo',
        estruturaA: 'Veia Safena Magna: Sobe pela face medial da perna e coxa e perfura o Hiato Safeno para desembocar na Veia Femoral.',
        estruturaB: 'Veia Safena Parva: Sobe na linha média da panturrilha entre os gastrocnêmios e perfura a fáscia poplítea para desembocar na Veia Poplítea.',
        comoAvaliarNoCadaver: 'Se o vaso venoso superficial estiver na face medial = Safena Magna. Se estiver no meio da panturrilha por trás = Safena Parva.'
      },
      {
        criterio: 'Nervos Acompanhantes',
        estruturaA: 'Veia Safena Magna: Acompanhada pelo Nervo Safeno na perna.',
        estruturaB: 'Veia Safena Parva: Acompanhada pelo Nervo Sural na face posterior da perna.',
        comoAvaliarNoCadaver: 'Identifique o filete nervoso amarelo ao lado da veia superficial: nervo sural acompanha a parva; nervo safeno acompanha a magna.'
      }
    ],
    passoAPassoIdentificacao: [
      'Passo 1: Identifique a face do membro inferior: se for face MEDIAL, procure a Veia Safena Magna.',
      'Passo 2: Verifique o maléolo medial da tíbia: a veia safena magna sobe 1 a 2 cm à frente da sua proeminência óssea.',
      'Passo 3: Se a perna estiver dissecada posteriormente (panturrilha), localize a veia na linha média entre as cabeças do gastrocnêmio: é a Veia Safena Parva.',
      'Passo 4: Siga a safena parva até a dobra do joelho: ela mergulha na fáscia poplítea para entrar na veia poplítea profunda.'
    ],
    pontosDeConfusao: [
      {
        armadilha: 'Inverter os maléolos na prova sem tocar.',
        comoDesatar: 'Regra mnemônica: "M"édio com "M"agna (Maléolo Medial = Safena Magna). O maléolo lateral fica com a Safena Parva!'
      },
      {
        armadilha: 'Achar que a safena parva sobe até a virilha.',
        comoDesatar: 'A safena parva termina no joelho (deságua na veia poplítea). Apenas a safena magna sobe até a virilha (trígono femoral).'
      }
    ],
    relevanciaFisioterapia: 'A safena magna é o enxerto vascular mais utilizado na cirurgia cardíaca (ponte de safena); o membro doador desenvolve edema residual tratado com drenagem linfática manual e cinesioterapia vascular.'
  },
  {
    id: 'mmss-axilar-braquial-radial-arcos',
    titulo: 'Artérias do Membro Superior: Axilar, Braquial, Radial e Arcos',
    subtitulo: 'A continuidade arterial desde o desfiladeiro axilar até a palma da mão',
    categoria: 'Membro Superior',
    conceitoChave: 'A mesma artéria muda de nome pelos limites ósseos: Subclávia (1ª costela) -> Axilar (redondo maior) -> Braquial (colo do rádio) -> Radial e Ulnar -> Arcos Palmares.',
    diferenciaisBancada: [
      {
        criterio: 'Limites Anatômicos de Transição',
        estruturaA: 'Artéria Axilar: Da margem lateral da 1ª costela até a margem inferior do tendão do músculo redondo maior.',
        estruturaB: 'Artéria Braquial: Da margem inferior do redondo maior até a bifurcação no colo do rádio na fossa cubital.',
        comoAvaliarNoCadaver: 'Se estiver no oco axilar abraçada pelo plexo = Axilar. Se estiver descendo no braço medial ao bíceps = Braquial.'
      },
      {
        criterio: 'Artéria Radial na Goteira do Pulso',
        estruturaA: 'Localização: Face anterior lateral do punho, entre os tendões do braquiorradial e flexor radial do carpo.',
        estruturaB: 'Arco Palmar: Anastomose curva na palma da mão emitindo artérias digitais comuns.',
        comoAvaliarNoCadaver: 'No punho lateral = Artéria Radial. Na palma da mão = Arco Palmar Superficial.'
      }
    ],
    passoAPassoIdentificacao: [
      'Passo 1: No ápice do membro superior, localize o feixe vasculonervoso axilar com o músculo peitoral menor: é a Artéria Axilar.',
      'Passo 2: No braço, siga pelo sulco bicipital medial com o nervo mediano e as 2 veias braquiais satélites: é a Artéria Braquial.',
      'Passo 3: No punho, olhe para o lado do polegar na goteira radial: é a Artéria Radial.',
      'Passo 4: Na palma da mão, sob a aponeurose palmar, identifique a alça arterial curva que vasculariza os dedos: é o Arco Palmar Superficial.'
    ],
    pontosDeConfusao: [
      {
        armadilha: 'Confundir Artéria Braquial com o Nervo Mediano na fossa cubital.',
        comoDesatar: 'O nervo mediano é maciço e fibroso; a artéria braquial tem luz aberta e fica imediatamente medial ao tendão do bíceps.'
      }
    ],
    relevanciaFisioterapia: 'A artéria braquial é o ponto padrão da ausculta de Korotkoff na aferição da PA; a artéria radial é o local de contagem do pulso e execução do Teste de Allen.'
  },
  {
    id: 'subclavia-veia-vs-arteria',
    titulo: 'Veia Subclávia vs. Artéria Subclávia no Pescoço',
    subtitulo: 'A relação topográfica com o Músculo Escaleno Anterior e a 1ª costela',
    categoria: 'Vasos da Base',
    conceitoChave: 'O Músculo Escaleno Anterior separa os dois vasos na 1ª costela: a VEIA Subclávia passa ANTERIORMENTE a ele; a ARTÉRIA Subclávia passa POSTERIORMENTE (no hiato interescalênico).',
    diferenciaisBancada: [
      {
        criterio: 'Posição em Relação ao Escaleno Anterior',
        estruturaA: 'Veia Subclávia: Passa ANTERIORMENTE ao tendão do Músculo Escaleno Anterior.',
        estruturaB: 'Artéria Subclávia: Passa POSTERIORMENTE ao escaleno anterior (entre o escaleno anterior e o escaleno médio).',
        comoAvaliarNoCadaver: 'Identifique o músculo que desce das vértebras cervicais para a 1ª costela: o vaso da FRENTE é VEIA; o vaso de TRÁS é ARTÉRIA.'
      },
      {
        criterio: 'Acompanhamento do Plexo Braquial',
        estruturaA: 'Veia Subclávia: Não entra no hiato interescalênico, ficando isolada à frente.',
        estruturaB: 'Artéria Subclávia: Corre no hiato interescalênico intimamente acompanhada pelos troncos do Plexo Braquial.',
        comoAvaliarNoCadaver: 'Se houver cordões nervosos amarelos passando junto com o vaso sobre a 1ª costela, trata-se com certeza da Artéria Subclávia.'
      }
    ],
    passoAPassoIdentificacao: [
      'Passo 1: Localize a 1ª costela e o músculo escaleno anterior que nela se insere.',
      'Passo 2: O vaso venoso largo e azulado que passa superficialmente na frente do escaleno é a Veia Subclávia.',
      'Passo 3: O vaso arterial cilíndrico de parede espessa que passa atrás do músculo no espaço interescalênico é a Artéria Subclávia.',
      'Passo 4: Siga ambos até cruzarem a borda lateral da 1ª costela: ali se tornam vasos axilares.'
    ],
    pontosDeConfusao: [
      {
        armadilha: 'Achar que a artéria e a veia subclávia passam juntas no mesmo espaço.',
        comoDesatar: 'Elas são rigidamente separadas pelo ventre carnoso do músculo escaleno anterior!'
      }
    ],
    relevanciaFisioterapia: 'Na Síndrome do Desfiladeiro Torácico (SDT), espasmos ou hipertrofia dos escalenos comprimem a artéria subclávia e o plexo braquial, provocando parestesia no braço e diminuição do pulso radial durante a manobra de Adson.'
  },
  {
    id: 'interventricular-anterior-vs-aorta',
    titulo: 'Artéria Interventricular Anterior ("da Aorta") & Septo',
    subtitulo: 'Esclarecimento da nomenclatura de prova e irrigação do septo interventricular',
    categoria: 'Coração',
    conceitoChave: 'A artéria que desce no sulco anterior chama-se Artéria Interventricular Anterior e é ramo da Coronária Esquerda (e não direta da aorta); irriga o septo interventricular.',
    diferenciaisBancada: [
      {
        criterio: 'Origem Anatômica Exata',
        estruturaA: 'Artéria Interventricular Anterior (ADA): Ramo terminal da Artéria Coronária Esquerda (que nasce do seio aórtico esquerdo).',
        estruturaB: 'Aorta Ascendente: O tronco arterial elástico da raiz cardíaca que dá origem às coronárias.',
        comoAvaliarNoCadaver: 'A artéria que corre no sulco na frente do coração não sai da aorta diretamente; ela nasce do tronco da coronária esquerda sob a aurícula esquerda.'
      },
      {
        criterio: 'Septo Interventricular',
        estruturaA: 'Porção Muscular: Parede espessa compacta inferior que perfaz mais de 90% do septo.',
        estruturaB: 'Porção Membranosa: Pequena área superior delgada e fibrosa translúcida junto à raiz aórtica.',
        comoAvaliarNoCadaver: 'No coração cortado, a massa grossa carnosa é a porção muscular; o topo fino perto da valva aórtica é a porção membranosa.'
      }
    ],
    passoAPassoIdentificacao: [
      'Passo 1: Segure o coração pela face esternocostal com o ápice voltado para baixo.',
      'Passo 2: Localize o sulco interventricular anterior: a artéria cilíndrica que desce nele em direção ao ápice é a Artéria Interventricular Anterior.',
      'Passo 3: Observe a veia que a acompanha: é a Grande Veia Cardíaca (veia cardíaca magna).',
      'Passo 4: Abra os ventrículos e examine a parede entre eles: é o Septo Interventricular.'
    ],
    pontosDeConfusao: [
      {
        armadilha: 'Escrever "Artéria interventricular da aorta" na prova.',
        comoDesatar: 'Resposta considerada errada pelos professores! A nomenclatura anatômica oficial é Artéria Interventricular Anterior (ou ramo interventricular anterior da artéria coronária esquerda).'
      }
    ],
    relevanciaFisioterapia: 'Oclusão da interventricular anterior causa infarto agudo do miocárdio anterior extenso com perda de massa contrátil do VE e insuficiência cardíaca grave com fração de ejeção reduzida.'
  }
];

export const auscultationFoci: AuscultationFocus[] = [
  {
    id: 'foco-aortico',
    nome: 'Foco Aórtico',
    localizacaoAnatomica: '2º Espaço Intercostal Direito (EICD), na linha paraesternal direita.',
    posicionamentoEstetoscopio: 'Junto à borda lateral direita do corpo do osso esterno, logo abaixo da 2ª cartilagem costal.',
    valvaCorrespondente: 'Valva da Aorta (semilunar aórtica)',
    caracteristicaBulha: 'B2 hiperfonética (componente aórtica A2). Som claro, seco e agudo ("TÁ").',
    aplicacaoFisioterapia: 'Pesquisa de estenose aórtica (sopro mesossistólico em crescendo-decrescendo que irradia para as carótidas). A estenose aórtica grave com gradiente elevado contraindica esforços submáximos.',
    coordenadasTorax: { x: 58, y: 32 }
  },
  {
    id: 'foco-pulmonar',
    nome: 'Foco Pulmonar',
    localizacaoAnatomica: '2º Espaço Intercostal Esquerdo (EICE), na linha paraesternal esquerda.',
    posicionamentoEstetoscopio: 'Junto à borda lateral esquerda do corpo do osso esterno, no mesmo nível do foco aórtico.',
    valvaCorrespondente: 'Valva do Tronco Pulmonar (semilunar pulmonar)',
    caracteristicaBulha: 'Permite auscultar o componente P2 da 2ª bulha. Sofre desdobramento fisiológico durante a inspiração profunda.',
    aplicacaoFisioterapia: 'Avaliação de Hipertensão Arterial Pulmonar (B2 intensamente hiperfonética no foco pulmonar), comum em pacientes pneumopatas com DPOC ou fibrose pulmonar.',
    coordenadasTorax: { x: 42, y: 32 }
  },
  {
    id: 'foco-tricuspide',
    nome: 'Foco Tricúspide',
    localizacaoAnatomica: '4º ou 5º Espaço Intercostal Esquerdo (EICE), junto à borda esternal esquerda inferior.',
    posicionamentoEstetoscopio: 'Imediatamente à esquerda da base do apêndice xifoide do esterno.',
    valvaCorrespondente: 'Valva Atrioventricular Direita (Tricúspide)',
    caracteristicaBulha: 'Componente T1 da primeira bulha (B1).',
    aplicacaoFisioterapia: 'Insuficiência tricúspide (sopro holossistólico que aumenta com a inspiração - manobra de Rivero-Carvallo positiva), muito comum em pacientes com falência ventricular direita e cor pulmonale.',
    coordenadasTorax: { x: 44, y: 55 }
  },
  {
    id: 'foco-mitral',
    nome: 'Foco Mitral (Ápice)',
    localizacaoAnatomica: '5º Espaço Intercostal Esquerdo (EICE), na linha hemiclavicular esquerda.',
    posicionamentoEstetoscopio: 'Sobre o ápice cardíaco (Ictus Cordis), aproximadamente 8 a 9 cm da linha mediotóracica, abaixo do mamilo esquerdo.',
    valvaCorrespondente: 'Valva Atrioventricular Esquerda (Mitral / Bicúspide)',
    caracteristicaBulha: 'B1 com máxima intensidade acústica ("TUM"). Som grave e prolongado.',
    aplicacaoFisioterapia: 'Detecção de sopro regurgitante de insuficiência mitral (irradia para axila esquerda) ou sopro em ruflar diastólico de estenose mitral com estalido de abertura. Fundamental para avaliar congestão pulmonar.',
    coordenadasTorax: { x: 33, y: 64 }
  }
];

export const pulsePoints: PulsePoint[] = [
  {
    id: 'pulso-radial',
    nome: 'Pulso Radial',
    arteria: 'Artéria Radial',
    localizacaoPalpacao: 'Face anterior do punho, na goteira radial, lateralmente ao tendão do músculo flexor radial do carpo contra a epífise distal do osso rádio.',
    dicaPratica: 'Pressione com os dedos indicador e médio no lado do polegar. Nunca use seu próprio polegar.',
    relevanciaClinica: 'Ponto padrão para aferição rotineira de frequência cardíaca (FC), ritmo e regularidade do pulso em fisioterapia cardiovascular.',
    lado: 'Membro Superior'
  },
  {
    id: 'pulso-braquial',
    nome: 'Pulso Braquial',
    arteria: 'Artéria Braquial',
    localizacaoPalpacao: 'Face medial do braço (sulco bicipital medial) ou na fossa cubital medialmente ao tendão do músculo bíceps braquial.',
    dicaPratica: 'Peça ao paciente para fletir o cotovelo contra resistência para salientar o tendão do bíceps; palpe medialmente a ele.',
    relevanciaClinica: 'Ponto oficial de posicionamento da campânula do estetoscópio para ausculta dos sons de Korotkoff na aferição da pressão arterial sistêmica.',
    lado: 'Membro Superior'
  },
  {
    id: 'pulso-carotideo',
    nome: 'Pulso Carotídeo',
    arteria: 'Artéria Carótida Comum',
    localizacaoPalpacao: 'Trígono carotídeo no pescoço, medialmente à borda anterior do músculo esternocleidomastoideo (ECM) e lateralmente à cartilagem tireóidea.',
    dicaPratica: 'Palpe suavemente com as polpas digitais em direção aos tubérculos anteriores das vértebras cervicais. NUNCA palpe as duas carótidas ao mesmo tempo.',
    relevanciaClinica: 'Pulso central primário avaliado na parada cardiorrespiratória (RCP) e choque hemodinâmico, pois se mantém mesmo em hipotensão extrema.',
    lado: 'Cabeça/Pescoço'
  },
  {
    id: 'pulso-femoral',
    nome: 'Pulso Femoral',
    arteria: 'Artéria Femoral',
    localizacaoPalpacao: 'Trígono femoral, logo abaixo do ligamento inguinal, no ponto médio entre a espinha ilíaca anterossuperior (EIAS) e a sínfise púbica.',
    dicaPratica: 'Lembre-se da ordem do trígono femoral de medial para lateral: V-A-N (Veia femoral, Artéria femoral, Nervo femoral).',
    relevanciaClinica: 'Avaliação de choque hipovolêmico e detecção de coarctação de aorta (onde há atraso e diminuição da amplitude do pulso femoral em relação ao radial).',
    lado: 'Membro Inferior'
  },
  {
    id: 'pulso-popliteo',
    nome: 'Pulso Poplíteo',
    arteria: 'Artéria Poplítea',
    localizacaoPalpacao: 'Profundamente no fundo da fossa poplítea (atrás do joelho), entre os tendões dos isquiotibiais.',
    dicaPratica: 'Flexione o joelho do paciente a 45º-90º para relaxar a fáscia poplítea. Abrace o joelho com as duas mãos e aprofunde as polpas dos dedos na linha média.',
    relevanciaClinica: 'Fundamental para localizar obstruções na Doença Arterial Obstrutiva Periférica (DAOP) e cálculo do Índice Tornozelo-Braço (ITB).',
    lado: 'Membro Inferior'
  },
  {
    id: 'pulso-tibial-posterior',
    nome: 'Pulso Tibial Posterior',
    arteria: 'Artéria Tibial Posterior',
    localizacaoPalpacao: 'Atrás e ligeiramente abaixo do maléolo medial do tornozelo, na goteira retromaleolar medial.',
    dicaPratica: 'Contorne o osso interno do tornozelo com os dedos indicador e médio, pressionando suavemente contra o calcâneo/tíbia.',
    relevanciaClinica: 'Parâmetro ouro na avaliação do paciente diabético com risco de pé diabético e vasculopatia periférica em reabilitação vascular.',
    lado: 'Membro Inferior'
  },
  {
    id: 'pulso-pedioso',
    nome: 'Pulso Dorsal do Pé (Pedioso)',
    arteria: 'Artéria Dorsal do Pé',
    localizacaoPalpacao: 'Dorso do pé, lateralmente ao tendão do músculo extensor longo do hálux, sobre os ossos navicular e cuneiformes.',
    dicaPratica: 'Peça para o paciente estender o dedão do pé para ver o tendão duro no dorso; palpe imediatamente na calha lateral a ele.',
    relevanciaClinica: 'Ponto distal mais periférico da circulação arterial. Sua palpação atesta perfusão arterial preservada até a extremidade do membro inferior.',
    lado: 'Membro Inferior'
  }
];
