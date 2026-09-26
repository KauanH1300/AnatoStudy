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
        comoAvaliarNoCadaver: 'Inspecione visualmente o trajeto sob a luz da bancada. Atenção: se o cadáver foi injetado com látex colorido, artéria é vermelha e veia é azul.'
      },
      {
        criterio: 'Presença de Válvulas Internas',
        estruturaA: 'Artéria: Ausência total de válvulas parietais ao longo do trajeto (válvulas apenas na raiz da aorta e tronco pulmonar).',
        estruturaB: 'Veia: Presença de dobras semilunares parietais (válvulas venosas) nos membros.',
        comoAvaliarNoCadaver: 'Se a veia for aberta longitudinalmente, é possível identificar pequenas bolsas finas em forma de ninho aderidas à íntima.'
      }
    ],
    passoAPassoIdentificacao: [
      'Passo 1: Aproxime a pinça e pressione a parede do vaso com delicadeza.',
      'Passo 2: Verifique se o vaso "volta" à forma arredondada após a pressão (Artéria) ou se fica murcho e amassado (Veia).',
      'Passo 3: Observe a relação satélite nos membros: geralmente há 1 artéria ladeada por 2 veias satélites profundas na mesma bainha fascial.',
      'Passo 4: Verifique a direção: se está divergindo/ramificando para a periferia é artéria; se converge recebendo tributárias é veia.'
    ],
    pontosDeConfusao: [
      {
        armadilha: 'Confundir um nervo periférico com uma artéria muscular fina (ex: nervo mediano com artéria braquial ou nervo ulnar com artéria ulnar).',
        comoDesatar: 'O nervo é um cordão MACIÇO, não oco, sem luz interna, estriado longitudinalmente por fascículos e brilhante nacarado. A artéria é um TUBO OCO com lúmen central visível.'
      },
      {
        armadilha: 'Confundir Veia Safena Magna dissecada com um tendão (ex: tendão do grácil ou sartório).',
        comoDesatar: 'O tendão se insere firmemente no osso (pata de ganso na tíbia) e é extremamente duro e nacarado. A veia safena é elástica, oca e deságua na veia femoral no hiato safeno.'
      }
    ],
    relevanciaFisioterapia: 'Crucial na avaliação de pulsos, na drenagem linfática manual (DLM), na identificação de trombose venosa profunda (TVP) e na aplicação segura de técnicas de liberação miofascial sem traumatizar vasos profundos.'
  },
  {
    id: 've-vs-vd',
    titulo: 'Ventrículo Esquerdo vs. Ventrículo Direito',
    subtitulo: 'Como reconhecer as câmaras ventriculares em peças inteiras ou cortes transversais',
    categoria: 'Coração',
    conceitoChave: 'A espessura da parede (relação 3:1), o formato da cavidade no corte e o número de músculos papilares são infalíveis.',
    diferenciaisBancada: [
      {
        criterio: 'Espessura Miocárdica',
        estruturaA: 'Ventrículo Esquerdo: Parede maciça, grossa e densa (8 a 12 mm de espessura no adulto).',
        estruturaB: 'Ventrículo Direito: Parede delgada e fina (3 a 5 mm de espessura).',
        comoAvaliarNoCadaver: 'Em cortes axiais, a parede do VE é 3 vezes mais grossa do que a parede do VD.'
      },
      {
        criterio: 'Formato da Cavidade (Corte Transversal)',
        estruturaA: 'Ventrículo Esquerdo: Cavidade perfeitamente circular ou cilíndrica central.',
        estruturaB: 'Ventrículo Direito: Cavidade em forma de crescente ou semilunar, que contorna e "abraça" a curvatura do VE.',
        comoAvaliarNoCadaver: 'Coloque a secção transversal sobre a bancada: o VE parece uma rosquinha grossa e redonda no meio; o VD é uma aba lateral em meia-lua.'
      },
      {
        criterio: 'Músculos Papilares',
        estruturaA: 'Ventrículo Esquerdo: 2 músculos papilares volumosos (anterior e posterior).',
        estruturaB: 'Ventrículo Direito: 3 músculos papilares menores (anterior, posterior e septal).',
        comoAvaliarNoCadaver: 'Abra a câmara e conte os corpos carnosos de onde partem as cordas tendíneas: 2 gigantes = VE; 3 menores = VD.'
      },
      {
        criterio: 'Trabécula Septomarginal (Banda Moderadora)',
        estruturaA: 'Ventrículo Esquerdo: AUSENTE.',
        estruturaB: 'Ventrículo Direito: PRESENTE (ponte muscular suspensa que liga o septo ao músculo papilar anterior).',
        comoAvaliarNoCadaver: 'Se houver uma "alça/ponte" muscular cruzando o meio da cavidade como uma corda suspensa, a peça é o VD com certeza.'
      },
      {
        criterio: 'Formação do Ápice Cardíaco',
        estruturaA: 'Ventrículo Esquerdo: Forma 100% do ápice pontiagudo do coração.',
        estruturaB: 'Ventrículo Direito: Termina cerca de 1,5 a 2 cm antes de atingir o ápice.',
        comoAvaliarNoCadaver: 'A ponta cônica do coração pertence inteiramente ao ventrículo esquerdo.'
      }
    ],
    passoAPassoIdentificacao: [
      'Passo 1: Encontre o ápice pontudo do coração. Ele é o marco do Ventrículo Esquerdo.',
      'Passo 2: Posicione o coração com a face anterior convexa para frente: o VD está imediatamente atrás do esterno (anterior); o VE fica à esquerda e posterior.',
      'Passo 3: Se houver corte, meça com o dedo a espessura da parede livre: 1 dedo grosso de miocárdio = VE; parede fina como papelão = VD.',
      'Passo 4: Abra a cavidade e inspecione os músculos papilares: 2 corpos robustos = VE; 3 corpos com banda moderadora suspensa = VD.'
    ],
    pontosDeConfusao: [
      {
        armadilha: 'Achar que o septo interventricular pertence ao ventrículo direito.',
        comoDesatar: 'O septo interventricular é abaulado em direção à cavidade do VD (por causa da maior pressão do VE) e funcionalmente faz parte da unidade contrátil do ventrículo esquerdo.'
      },
      {
        armadilha: 'Confundir o cone arterial (infundíbulo do VD) com a raiz da aorta.',
        comoDesatar: 'O cone arterial é liso, tem formato de funil anterior e dá origem ao Tronco Pulmonar. A raiz aórtica é central, mais profunda e posterior ao tronco pulmonar.'
      }
    ],
    relevanciaFisioterapia: 'Indispensável para entender hipertrofias ventriculares: sobrecarga de pressão sistêmica gera hipertrofia concêntrica de VE; sobrecarga pulmonar (DPOC/Cor Pulmonale) gera hipertrofia e dilatação de VD com insuficiência tricúspide.'
  },
  {
    id: 'diferenciacao-valvas',
    titulo: 'Como Localizar e Diferenciar as 4 Valvas Cardíacas',
    subtitulo: 'Reconhecimento das valvas atrioventriculares e semilunares em coração aberto ou corte de base',
    categoria: 'Valvas',
    conceitoChave: 'A presença de cordas tendíneas define valvas AV; a ausência de cordas e presença de bolsas em ninho define valvas semilunares.',
    diferenciaisBancada: [
      {
        criterio: 'Valva Mitral (Bicúspide / AV Esquerda)',
        estruturaA: '2 cúspides amplas (anterior e posterior).',
        estruturaB: 'Ancorada a 2 músculos papilares do VE por cordas tendíneas densas.',
        comoAvaliarNoCadaver: 'Comunica o átrio esquerdo ao ventrículo esquerdo. A cúspide anterior é ampla e fica em continuidade fibrosa com a raiz aórtica.'
      },
      {
        criterio: 'Valva Tricúspide (AV Direita)',
        estruturaA: '3 cúspides (anterior, posterior e septal).',
        estruturaB: 'Ancorada a 3 músculos papilares do VD por cordas tendíneas.',
        comoAvaliarNoCadaver: 'Comunica o átrio direito ao ventrículo direito. A cúspide septal fica inserida diretamente no septo interventricular membranoso.'
      },
      {
        criterio: 'Valva do Tronco Pulmonar (Semilunar)',
        estruturaA: '3 válvulas semilunares em bolsa: anterior, direita e esquerda.',
        estruturaB: 'NÃO possui cordas tendíneas nem músculos papilares. É a valva MAIS ANTERIOR da base do coração.',
        comoAvaliarNoCadaver: 'Fica na raiz do tronco pulmonar, imediatamente à frente da valva da aorta.'
      },
      {
        criterio: 'Valva da Aorta (Semilunar)',
        estruturaA: '3 válvulas semilunares em bolsa: direita, esquerda e posterior.',
        estruturaB: 'NÃO possui cordas tendíneas. Contém os ÓSTIOS CORONARIANOS dentro de seus seios valvares.',
        comoAvaliarNoCadaver: 'Fica no centro exato da base do coração. Ao olhar dentro dos bolsos, você vê os furos de onde saem as coronárias direita e esquerda!'
      }
    ],
    passoAPassoIdentificacao: [
      'Passo 1: No corte da base cardíaca com os átrios removidos, localize a valva MAIS ANTERIOR: ela é sempre a Valva do Tronco Pulmonar.',
      'Passo 2: Imediatamente atrás dela, no centro geométrico do esqueleto fibroso, está a Valva da Aorta.',
      'Passo 3: Abaixo e à esquerda da aorta está a Valva Mitral (com 2 grandes cúspides).',
      'Passo 4: Abaixo e à direita da aorta está a Valva Tricúspide (com 3 cúspides).'
    ],
    pontosDeConfusao: [
      {
        armadilha: 'Chamar cúspide de valva na prova prática.',
        comoDesatar: 'O professor cobra rigor: a VALVA é todo o complexo anatômico com o anel fibroso. CÚSPIDE (ou válvula) é cada uma das folhas/lâminas que se fecham.'
      },
      {
        armadilha: 'Procurar cordas tendíneas na valva aórtica ou pulmonar.',
        comoDesatar: 'Valvas semilunares NUNCA possuem cordas tendíneas. Se tiver cordas brancas esticadas, obrigatoriamente é Mitral ou Tricúspide!'
      }
    ],
    relevanciaFisioterapia: 'Origem direta das bulhas cardíacas B1 (fechamento de Mitral e Tricúspide) e B2 (fechamento de Aórtica e Pulmonar). Essencial para localizar o estetoscópio nos focos e detectar sopros de regurgitação ou estenose valvar.'
  },
  {
    id: 'vasos-base-identificacao',
    titulo: 'Reconhecimento dos Vasos da Base no Coração Isolado',
    subtitulo: 'Regra espacial para nunca inverter Aorta, Tronco Pulmonar, Cavas e Veias Pulmonares',
    categoria: 'Vasos da Base',
    conceitoChave: 'Relação "Anterior-Intermediário-Posterior": Tronco Pulmonar (anterior) -> Aorta (meio/superior) -> Veias Cavas e Pulmonares (posterior/inferior).',
    diferenciaisBancada: [
      {
        criterio: 'Tronco Pulmonar',
        estruturaA: 'Emerge do cone arterial do Ventrículo Direito.',
        estruturaB: 'Cruza obliquamente pela FRENTE da aorta ascendente e divide-se em artéria pulmonar direita e esquerda.',
        comoAvaliarNoCadaver: 'É o vaso mais anterior que você vê ao olhar o coração de frente. Possui parede relativamente fina para uma artéria.'
      },
      {
        criterio: 'Artéria Aorta (Raiz e Arco)',
        estruturaA: 'Emerge profundamente no centro do Ventrículo Esquerdo.',
        estruturaB: 'Ascende atrás do tronco pulmonar, faz um arco convexo para trás e para a esquerda, emitindo 3 ramos calibrosos.',
        comoAvaliarNoCadaver: 'Vaso com a parede mais espessa de todos. Se você puxar o arco, verá a saída do Tronco Braquiocefálico, Carótida E e Subclávia E.'
      },
      {
        criterio: 'Veia Cava Superior e Inferior',
        estruturaA: 'Chegam na parede posterior do Átrio Direito.',
        estruturaB: 'A VCS desce verticalmente do lado direito; a VCI abre-se no assoalho do átrio direito.',
        comoAvaliarNoCadaver: 'Introduza uma pinça pela veia cava superior: ela sai direto pela veia cava inferior através da cavidade do átrio direito.'
      },
      {
        criterio: '4 Veias Pulmonares',
        estruturaA: 'Chegam aos pares (2 direitas e 2 esquerdas) no teto posterior do Átrio Esquerdo.',
        estruturaB: 'São curtas e abrem-se na face posterior lisa do coração.',
        comoAvaliarNoCadaver: 'Vire o coração para trás: procure 4 aberturas vasculares simétricas que entram diretamente no átrio esquerdo.'
      }
    ],
    passoAPassoIdentificacao: [
      'Passo 1: Segure o coração com o ápice apontado para baixo e para sua esquerda.',
      'Passo 2: O vaso cilíndrico saindo mais para a frente é o Tronco Pulmonar.',
      'Passo 3: Logo atrás dele, o vaso curvo espesso que sobe e curva é o Arco da Aorta.',
      'Passo 4: Verifique a pequena fita fibrosa que une a aorta ao tronco pulmonar: é o Ligamento Arterial.',
      'Passo 5: Do lado direito e atrás, localize os dois tubos azuis verticais: Veia Cava Superior e Inferior.'
    ],
    pontosDeConfusao: [
      {
        armadilha: 'Confundir Artéria Pulmonar com Veia Pulmonar.',
        comoDesatar: 'As Artérias Pulmonares são 2 e saem da bifurcação do Tronco Pulmonar (anterior). As Veias Pulmonares são 4 e entram diretamente no Átrio Esquerdo (posterior).'
      },
      {
        armadilha: 'Confundir Aurícula com Átrio.',
        comoDesatar: 'A aurícula é apenas o apêndice rugoso ("orelhinha de cachorro") projetado para a frente. O átrio é a cavidade oca inteira.'
      }
    ],
    relevanciaFisioterapia: 'Em cirurgias de revascularização miocárdica e troca valvar, a canulação desses vasos para circulação extracorpórea (CEC) é rotineira. Na UTI, cateteres de Swan-Ganz progridem via VCS -> AD -> VD -> Tronco Pulmonar até a artéria pulmonar.'
  },
  {
    id: 'focos-ausculta-fisioterapia',
    titulo: 'Focos de Ausculta Cardíaca e Pulsos Arteriais',
    subtitulo: 'Mapeamento torácico e pontos de palpação fundamentais na semiologia fisioterapêutica',
    categoria: 'Ausculta e Semiologia',
    conceitoChave: 'A ausculta sistemática nos 4 focos precordiais permite identificar estenoses, insuficiências e sobrecargas volêmicas.',
    diferenciaisBancada: [
      {
        criterio: 'Foco Aórtico (2º EICD)',
        estruturaA: 'Projeção acústica do fechamento da valva aórtica.',
        estruturaB: 'Melhor audibilidade da componente A2 da 2ª bulha (B2).',
        comoAvaliarNoCadaver: 'Localize a 2ª costela articulada no ângulo esternal (de Louis); desça a polpa digital para o espaço intercostal imediatamente inferior, junto ao bordo esternal direito.'
      },
      {
        criterio: 'Foco Pulmonar (2º EICE)',
        estruturaA: 'Projeção acústica do fechamento da valva pulmonar.',
        estruturaB: 'Local de eleição para escutar o desdobramento fisiológico de B2 durante a inspiração.',
        comoAvaliarNoCadaver: 'Mesmo nível do foco aórtico, porém espelhado na borda esternal esquerda.'
      },
      {
        criterio: 'Foco Tricúspide (4º/5º EICE)',
        estruturaA: 'Projeção acústica do fechamento da valva tricúspide.',
        estruturaB: 'Borda esternal esquerda inferior, próximo à base do processo xifoide.',
        comoAvaliarNoCadaver: 'Desça 2 a 3 espaços intercostais pela margem esternal esquerda a partir do ângulo de Louis.'
      },
      {
        criterio: 'Foco Mitral (5º EICE na LMC)',
        estruturaA: 'Projeção acústica do fechamento da valva mitral e pico de B1.',
        estruturaB: 'Coincide com o Ictus Cordis (ápice do ventrículo esquerdo).',
        comoAvaliarNoCadaver: 'Linha vertical descendo do ponto médio da clavícula esquerda até cruzar o 5º espaço intercostal.'
      }
    ],
    passoAPassoIdentificacao: [
      'Passo 1: Sempre palpe primeiro o Ângulo de Louis no esterno para ter certeza de qual é o 2º espaço intercostal.',
      'Passo 2: Ausculte o ritmo e cadência: B1 ("TUM") e B2 ("TÁ") -> Tum-Tá, Tum-Tá.',
      'Passo 3: Palpe o pulso carotídeo ou radial simultaneamente: a onda de pulso bate exatamente junto com B1 (início da sístole).',
      'Passo 4: Percorra os focos em sequência: Aórtico -> Pulmonar -> Tricúspide -> Mitral.'
    ],
    pontosDeConfusao: [
      {
        armadilha: 'Achar que o foco auscultatório fica fisicamente em cima da valva anatômica.',
        comoDesatar: 'As valvas ficam amontoadas profundamente atrás do esterno. Os focos superficiais são os pontos para onde o sangue turbilhonar conduz acusticamente o som com máxima intensidade.'
      },
      {
        armadilha: 'Confundir B3 (terceira bulha - galope ventricular de sobrecarga) com desdobramento de B2.',
        comoDesatar: 'B3 ocorre na protodiástole (logo após B2), com som grave tipo "Tu-tum-ta" (galope), comum em insuficiência cardíaca descompensada.'
      }
    ],
    relevanciaFisioterapia: 'Permite ao fisioterapeuta determinar segurança para mobilização precoce, avaliar resposta hemodinâmica ao exercício e identificar sobrecargas cardíacas que exijam interrupção imediata da sessão.'
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
