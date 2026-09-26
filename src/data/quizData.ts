import { QuizQuestion } from '../types/anatomy';
import { quizQuestionsPart2 } from './quizQuestionsPart2';

const baseQuizData: QuizQuestion[] = [
  {
    id: 1,
    categoria: 'coração',
    topico: 'Anatomia Geral do Coração',
    pergunta: 'Em relação à morfologia geral e localização do coração na cavidade torácica, assinale a alternativa anatomicamente correta:',
    opcoes: [
      'Apresenta formato de prisma triangular e situa-se no mediastino anterior, totalmente alinhado ao plano mediano.',
      'Possui formato de cone truncado (coniforme), situa-se no mediastino médio e tem cerca de 2/3 de sua massa voltada para a esquerda.',
      'A base cardíaca é formada exclusivamente pelo ventrículo esquerdo e aponta para frente e para baixo.',
      'O ápice é formado conjuntamente pelos ventrículos direito e esquerdo e projeta-se no 2º espaço intercostal direito.'
    ],
    respostaCorretaIndex: 1,
    explicacao: 'O coração tem formato de cone truncado (coniforme), localiza-se no mediastino médio e aproximadamente 2/3 de sua massa projetam-se à esquerda do plano sagital mediano. Sua base é predominantemente formada pelo átrio esquerdo (posterior e superior) e o ápice é formado unicamente pelo ventrículo esquerdo.',
    dicaPratica: 'Ao inspecionar a peça na bancada, a ponta única e afilada é o ápice (VE), apontando para a esquerda; a base é a face posterior plana onde entram os grandes vasos venosos.',
    aplicacaoClinica: 'A projeção de 2/3 à esquerda orienta a palpação do choque da ponta (ictus cordis) e a ausculta do foco mitral no 5º espaço intercostal esquerdo na linha hemiclavicular.',
    dificuldade: 'Fácil'
  },
  {
    id: 2,
    categoria: 'coração',
    topico: 'Pericárdio e Camadas',
    pergunta: 'Sobre o saco pericárdico e as camadas que constituem a parede do coração, assinale a afirmativa INCORRETA:',
    opcoes: [
      'O pericárdio fibroso é a camada externa, resistente e inelástica, fundida inferiormente ao diafragma.',
      'A cavidade pericárdica situa-se entre a lâmina parietal do pericárdio seroso e o pericárdio fibroso.',
      'A lâmina visceral do pericárdio seroso é também denominada epicárdio e contém acúmulo de tecido adiposo.',
      'O endocárdio forra internamente as cavidades cardíacas e é contínuo com a túnica íntima dos vasos sanguíneos.'
    ],
    respostaCorretaIndex: 1,
    explicacao: 'A cavidade pericárdica situa-se ENTRE a lâmina parietal e a lâmina visceral (epicárdio) do pericárdio SEROSO, e NÃO entre a parietal e o pericárdio fibroso. Essa cavidade contém de 15 a 50 mL de líquido pericárdico seroso.',
    dicaPratica: 'Lembre-se da ordem de fora para dentro: Pericárdio Fibroso -> Lâmina Parietal do Seroso -> Cavidade Pericárdica (líquido) -> Lâmina Visceral do Seroso (Epicárdio) -> Miocárdio -> Endocárdio.',
    aplicacaoClinica: 'Derrame pericárdico na cavidade comprime as câmaras de menor pressão (átrio e ventrículo direito), reduzindo o débito cardíaco (tamponamento cardíaco).',
    dificuldade: 'Média'
  },
  {
    id: 3,
    categoria: 'coração',
    topico: 'Morfologia Ventricular',
    pergunta: 'Ao realizar um corte transversal nos ventrículos de uma peça cadavérica, qual critério permite identificar indubitavelmente o VENTRÍCULO ESQUERDO?',
    opcoes: [
      'Sua cavidade possui formato semilunar em crescente e parede delgada de 3 a 5 mm.',
      'Apresenta três músculos papilares e a presença da trabécula septomarginal.',
      'Seu miocárdio é aproximadamente 3 vezes mais espesso que o do ventrículo direito e sua cavidade tem corte circular.',
      'Sua parede anterior lisa forma a maior parte da face esternocostal do coração.'
    ],
    respostaCorretaIndex: 2,
    explicacao: 'O ventrículo esquerdo tem formato cilíndrico/circular em corte transversal e miocárdio 3x mais espesso (8-12 mm) para suportar as pressões sistêmicas (~120 mmHg). O ventrículo direito tem parede fina (3-5 mm), formato semilunar abraçando o VE e 3 músculos papilares.',
    dicaPratica: 'Pegue o coração cortado e aperte as duas paredes livres: a parede extremamente grossa e resistente é o VE; a parede fina que cede à pinça é o VD.',
    aplicacaoClinica: 'Na hipertensão arterial sistêmica não tratada ocorre hipertrofia concêntrica do VE, aumentando ainda mais a espessura da parede às custas da redução do volume diastólico final.',
    dificuldade: 'Fácil'
  },
  {
    id: 4,
    categoria: 'coração',
    topico: 'Aparelho Valvar Atrioventricular',
    pergunta: 'Qual a função hemodinâmica direta das CORDAS TENDÍNEAS e dos MÚSCULOS PAPILARES durante a sístole ventricular?',
    respostaCorretaIndex: 0,
    opcoes: [
      'Impedir o prolapso e a eversão das cúspides valvares para o interior dos átrios quando a pressão intraventricular se eleva bruscamente.',
      'Tracionar ativamente as cúspides valvares para baixo para abrir a valva no início da sístole.',
      'Comprimir a artéria coronária para aumentar a velocidade do fluxo de ejeção para a aorta.',
      'Promover o relaxamento isovolumétrico dos átrios através de estímulos parassimpáticos diretos.'
    ],
    explicacao: 'Os músculos papilares não abrem a valva; eles se contraem junto com a parede ventricular antes da ejeção, tracionando as cordas tendíneas para manter as bordas livres das cúspides firmemente coaptadas, impedindo que a alta pressão sistólica as empurre de volta para o átrio (prolapso/regurgitação).',
    dicaPratica: 'As cordas tendíneas são como os cabos de um paraquedas: quando o vento (pressão ventricular) empurra a lona, os cabos seguram para ela não virar do avesso.',
    aplicacaoClinica: 'A ruptura de corda tendínea por isquemia de músculo papilar após infarto agudo gera insuficiência mitral aguda fulminante e choque cardiogênico.',
    dificuldade: 'Média'
  },
  {
    id: 5,
    categoria: 'coração',
    topico: 'Valvas Cardíacas',
    pergunta: 'Qual valva impede o refluxo de sangue do Ventrículo Esquerdo de volta para o Átrio Esquerdo durante a sístole?',
    opcoes: [
      'Valva atrioventricular direita (tricúspide).',
      'Valva do tronco pulmonar.',
      'Valva atrioventricular esquerda (mitral ou bicúspide).',
      'Valva da aorta (semilunar aórtica).'
    ],
    respostaCorretaIndex: 2,
    explicacao: 'A valva atrioventricular esquerda (também chamada de mitral ou bicúspide) possui duas cúspides (anterior e posterior) e fecha hermeticamente na sístole ventricular esquerda, impedindo a regurgitação de sangue arterial para o átrio esquerdo.',
    dicaPratica: 'Lado esquerdo = Valva Mitral (bicúspide, com 2 cúspides e 2 músculos papilares). Lado direito = Valva Tricúspide (3 cúspides e 3 músculos papilares).',
    aplicacaoClinica: 'O fechamento da valva mitral é o principal componente do som da 1ª bulha cardíaca (B1). Sua ausculta primária é realizada no foco mitral (5º EIC esquerdo na linha hemiclavicular).',
    dificuldade: 'Fácil'
  },
  {
    id: 6,
    categoria: 'coração',
    topico: 'Valvas Semilunares',
    pergunta: 'Sobre as VALVAS SEMILUNARES (aórtica e do tronco pulmonar), é correto afirmar que:',
    opcoes: [
      'São providas de volumosos músculos papilares que regulam ativamente sua abertura.',
      'Possuem cordas tendíneas espessas ancoradas ao esqueleto fibroso e septo membranoso.',
      'Possuem 3 válvulas/lúnulas semilunares cada uma, que fecham passivamente pelo acúmulo retrógrado de sangue na raiz do vaso ao final da sístole.',
      'A valva do tronco pulmonar possui os óstios de origem das artérias coronárias em seus seios valvares.'
    ],
    respostaCorretaIndex: 2,
    explicacao: 'As valvas semilunares não possuem cordas tendíneas nem músculos papilares. Funcionam passivamente: durante a ejeção sistólica abrem-se com o fluxo para frente; ao final da sístole, a reversão transitória de fluxo enche as 3 bolsas semilunares ("cúspides em ninho de pombo"), colabando as margens livres e fechando o orifício.',
    dicaPratica: 'Se na peça você encontrar folhetos presos a cordas brancas, é valva atrioventricular. Se forem bolsas sem cordas na saída de um grande vaso, é valva semilunar.',
    aplicacaoClinica: 'O fechamento das valvas semilunares produz a 2ª bulha cardíaca (B2 - "TÁ"), que marca o início da diástole ventricular.',
    dificuldade: 'Média'
  },
  {
    id: 7,
    categoria: 'coração',
    topico: 'Átrio Direito',
    pergunta: 'Qual estrutura observada no septo interatrial do Átrio Direito representa o resquício embrionário do forame oval fetal?',
    opcoes: [
      'Crista terminal.',
      'Fossa oval.',
      'Óstio do seio coronário.',
      'Músculos pectíneos.'
    ],
    respostaCorretaIndex: 1,
    explicacao: 'A Fossa Oval é uma depressão rasa na face direita do septo interatrial delimitada superiormente pelo limbo da fossa oval. Corresponde ao fechamento pós-natal funcional e anatômico do Forame Oval fetal.',
    dicaPratica: 'Ao iluminar o septo do átrio direito por dentro, a fossa oval é uma área arredondada mais delgada e translúcida no centro do septo interatrial.',
    aplicacaoClinica: 'A persistência de Forame Oval Patente (FOP) pode permitir a passagem de êmbolos venosos da perna direto para a circulação cerebral durante aumentos de pressão intratorácica (embolia paradoxal gerando AVC).',
    dificuldade: 'Fácil'
  },
  {
    id: 8,
    categoria: 'coração',
    topico: 'Vasos da Base',
    pergunta: 'Quais vasos sanguíneos desembocam diretamente no Átrio Esquerdo trazendo sangue oxigenado?',
    opcoes: [
      'Veia Cava Superior e Veia Cava Inferior.',
      'Artérias Pulmonares Direita e Esquerda.',
      'Quatro Veias Pulmonares (duas direitas e duas esquerdas).',
      'Seio coronário e veias cardíacas anteriores.'
    ],
    respostaCorretaIndex: 2,
    explicacao: 'Quatro Veias Pulmonares (superior e inferior direitas; superior e inferior esquerdas) desembocam na face posterior lisa do Átrio Esquerdo, conduzindo o sangue que passou pela hematose alveolar nos pulmões.',
    dicaPratica: 'Olhando a face posterior do coração isolado (base), você verá 4 orifícios vasculares simétricos abrindo no teto do átrio esquerdo, dois de cada lado.',
    aplicacaoClinica: 'Ao redor dos óstios das veias pulmonares no átrio esquerdo localizam-se os focos ectópicos de disparo elétrico mais comuns da fibrilação atrial, tratados por ablação por radiofrequência.',
    dificuldade: 'Fácil'
  },
  {
    id: 9,
    categoria: 'vasos',
    topico: 'Vasos da Base e Aorta',
    pergunta: 'Quais são os TRÊS ramos arteriais que emergem diretamente da curvatura do ARCO DA AORTA?',
    opcoes: [
      'Artéria Coronária Direita, Artéria Coronária Esquerda e Tronco Pulmonar.',
      'Tronco Braquiocefálico, Artéria Carótida Comum Esquerda e Artéria Subclávia Esquerda.',
      'Artéria Carótida Comum Direita, Artéria Subclávia Direita e Tronco Braquiocefálico Esquerdo.',
      'Artéria Vertebral Direita, Artéria Carótida Interna e Artéria Torácica Interna.'
    ],
    respostaCorretaIndex: 1,
    explicacao: 'Os três ramos do arco aórtico, no sentido da direita para a esquerda, são: 1. Tronco Braquiocefálico (que após 4-5 cm se divide em carótida comum direita e subclávia direita); 2. Artéria Carótida Comum Esquerda; 3. Artéria Subclávia Esquerda.',
    dicaPratica: 'Mnemônica: "ABC" (Artéria Braquiocefálica, Carótida esquerda, Subclávia esquerda). Nunca marque "tronco braquiocefálico esquerdo", pois ele não existe no ser humano padrão!',
    aplicacaoClinica: 'Avaliação de pulsos assimétricos entre braço direito e esquerdo: se houver compressão do arco ou estenose da subclávia esquerda, a PA no membro superior esquerdo será substancialmente menor.',
    dificuldade: 'Média'
  },
  {
    id: 10,
    categoria: 'coração',
    topico: 'Irrigação Coronariana',
    pergunta: 'Em qual localização anatômica originam-se as artérias coronárias e em que momento do ciclo cardíaco ocorre a maior perfusão miocárdica ventricular esquerda?',
    opcoes: [
      'No arco da aorta; durante o pico da sístole ventricular.',
      'Nos seios aórticos (de Valsalva) direito e esquerdo da aorta ascendente; durante a DIÁSTOLE ventricular.',
      'No tronco pulmonar logo acima da valva semilunar; durante a sístole atrial.',
      'Nas artérias torácicas internas; durante a ejeção rápida ventricular.'
    ],
    respostaCorretaIndex: 1,
    explicacao: 'As artérias coronárias direita e esquerda nascem nos seios aórticos de Valsalva, logo acima das cúspides da valva aórtica. A maior parte do fluxo coronariano para o VE ocorre na DIÁSTOLE, porque durante a sístole a alta tensão muscular intramiocárdica comprime e colaba as arteríolas coronárias intramurais.',
    dicaPratica: 'Nas peças anatômicas onde a aorta foi seccionada longitudinalmente, olhe no fundo dos bolsos valvares semilunares direito e esquerdo para visualizar os dois orifícios circulares (óstios coronários).',
    aplicacaoClinica: 'Taquicardias excessivas em pacientes sob fisioterapia diminuem o tempo de diástole de forma crítica, precipitando angina pectoris por hipoperfusão do miocárdio.',
    dificuldade: 'Média'
  },
  {
    id: 11,
    categoria: 'coração',
    topico: 'Artéria Interventricular Anterior',
    pergunta: 'A Artéria Interventricular Anterior (Descendente Anterior) é ramo de qual tronco arterial e qual região do coração ela primordialmente vasculariza?',
    opcoes: [
      'Ramo da Artéria Coronária Direita; irriga o nó sinoatrial e a parede posterior do ventrículo direito.',
      'Ramo da Artéria Coronária Esquerda; irriga a face anterior do ventrículo esquerdo e os dois terços anteriores do septo interventricular.',
      'Ramo da Artéria Circunflexa; irriga exclusivamente a aurícula direita e o nó atrioventricular.',
      'Ramo direto do arco aórtico; irriga o pericárdio parietal e diafragma.'
    ],
    respostaCorretaIndex: 1,
    explicacao: 'A Artéria Interventricular Anterior (popularmente ADA - anterior descending artery) é ramo terminal da Artéria Coronária Esquerda. Desce pelo sulco interventricular anterior até o ápice, nutrindo os 2/3 anteriores do septo interventricular, o ápice e grande porção da parede livre do VE.',
    dicaPratica: 'Na face esternocostal do coração, acompanhe o sulco anterior que corre até a ponta: o vaso vermelho que corre ali acompanhado da veia cardíaca magna é a interventricular anterior.',
    aplicacaoClinica: 'É o vaso mais acometido no infarto agudo do miocárdio. Oclusões proximais da ADA geram infartos extensos de parede anterior com disfunção sistólica grave e alto risco de insuficiência cardíaca crônica.',
    dificuldade: 'Média'
  },
  {
    id: 12,
    categoria: 'coração',
    topico: 'Drenagem Venosa Cardíaca',
    pergunta: 'Onde se localiza o SEIO CORONÁRIO e em qual câmara cardíaca ele desemboca?',
    opcoes: [
      'No sulco interventricular anterior; desemboca no Ventrículo Esquerdo.',
      'No sulco coronário (atrioventricular) na face diafragmática posterior; desemboca no Átrio Direito.',
      'No teto da aurícula esquerda; desemboca nas Veias Pulmonares.',
      'Na parede superior do septo interatrial; desemboca na Veia Cava Superior.'
    ],
    respostaCorretaIndex: 1,
    explicacao: 'O Seio Coronário é uma veia dilatada ampla localizada no sulco coronário posterior (entre o átrio esquerdo e o ventrículo esquerdo na face diafragmática). Ele coleta sangue venoso da veia cardíaca magna, média e parva e desemboca diretamente na cavidade do Átrio Direito.',
    dicaPratica: 'Vire o coração para a face posterior: o grande canal azulado e cilíndrico deitado no sulco horizontal abaixo do átrio esquerdo é o seio coronário.',
    aplicacaoClinica: 'Utilizado no implante de eletrodos de marcapasso de ressincronização cardíaca (TRC) através de cateterismo venoso para estimular a parede lateral do ventrículo esquerdo.',
    dificuldade: 'Média'
  },
  {
    id: 13,
    categoria: 'vasos',
    topico: 'Circulação Sistêmica vs Pulmonar',
    pergunta: 'Sobre a CIRCULAÇÃO PULMONAR (Pequena Circulação), assinale a correta:',
    opcoes: [
      'Inicia-se no Ventrículo Esquerdo e termina no Átrio Direito após oxigenar os tecidos periféricos.',
      'Inicia-se no Ventrículo Direito, conduz sangue rico em CO2 através do tronco e artérias pulmonares até os pulmões e retorna sangue oxigenado pelas veias pulmonares ao Átrio Esquerdo.',
      'O tronco pulmonar transporta sangue arterial bem oxigenado aos alvéolos.',
      'As veias pulmonares carregam sangue venoso desoxigenado até o ventrículo direito.'
    ],
    respostaCorretaIndex: 1,
    explicacao: 'A circulação pulmonar inicia-se no Ventrículo Direito com sangue pobre em O2 (venoso), que é ejetado pelo Tronco Pulmonar e artérias pulmonares até os capilares alveolares para a hematose, e retorna rico em oxigênio pelas 4 veias pulmonares ao Átrio Esquerdo.',
    dicaPratica: 'Cuidado com a pegadinha de prova: ARTÉRIA é todo vaso que sai do coração (pode carregar sangue venoso como as artérias pulmonares), e VEIA é todo vaso que chega ao coração (pode carregar sangue arterial como as veias pulmonares).',
    aplicacaoClinica: 'Hipertensão arterial pulmonar (HAP) eleva a pós-carga do ventrículo direito, limitando a tolerância ao exercício e gerando fadiga e dispneia rápida no paciente.',
    dificuldade: 'Fácil'
  },
  {
    id: 14,
    categoria: 'conducao',
    topico: 'Ciclo Cardíaco e Ausculta',
    pergunta: 'A PRIMEIRA BULHA cardíaca (B1 - "TUM") e a SEGUNDA BULHA (B2 - "TÁ") são originadas, respectivamente, pelo fechamento de quais estruturas?',
    opcoes: [
      'Valvas semilunares (aórtica e pulmonar) e Valvas atrioventriculares (mitral e tricúspide).',
      'Valvas atrioventriculares (mitral e tricúspide) e Valvas semilunares (aórtica e pulmonar).',
      'Contração dos músculos papilares e abertura das veias cavas.',
      'Colabamento das paredes ventriculares e vibração da artéria aorta descendente.'
    ],
    respostaCorretaIndex: 1,
    explicacao: 'B1 ("TUM") é provocada pelo fechamento das valvas atrioventriculares (Mitral e Tricúspide) no início da sístole ventricular. B2 ("TÁ") é produzida pelo fechamento das valvas semilunares (Aórtica e Pulmonar) no início da diástole ventricular.',
    dicaPratica: 'Mnemônica: "TUM" = entra em sístole (fecha AV); "TÁ" = entra em diástole (fecha semilunares). Entre B1 e B2 ocorre o pulso periférico sistólico.',
    aplicacaoClinica: 'A ausculta desses sons permite ao fisioterapeuta identificar arritmias, extrassístoles, estalidos de abertura e sopros sistólicos ou diastólicos durante a reabilitação.',
    dificuldade: 'Fácil'
  },
  {
    id: 15,
    categoria: 'conducao',
    topico: 'Focos de Ausculta Cardíaca',
    pergunta: 'Onde deve ser posicionado o estetoscópio para a ausculta do FOCO AÓRTICO e do FOCO PULMONAR?',
    opcoes: [
      'Foco Aórtico no 5º EICE na linha hemiclavicular; Foco Pulmonar no 4º EICE junto ao esterno.',
      'Foco Aórtico no 2º Espaço Intercostal Direito (EICD) na borda esternal; Foco Pulmonar no 2º Espaço Intercostal Esquerdo (EICE) na borda esternal.',
      'Foco Aórtico no apêndice xifoide; Foco Pulmonar na fossa supraclavicular direita.',
      'Foco Aórtico no 3º EICE na linha axilar anterior; Foco Pulmonar no 2º EICD na borda esternal.'
    ],
    respostaCorretaIndex: 1,
    explicacao: 'O Foco Aórtico localiza-se no 2º espaço intercostal direito (EICD), junto à borda esternal. O Foco Pulmonar localiza-se no 2º espaço intercostal esquerdo (EICE), junto à borda esternal.',
    dicaPratica: 'Palpe o ângulo esternal (de Louis): a 2ª costela insere-se nele; logo abaixo dela está o 2º espaço intercostal. À direita = Aórtico; à esquerda = Pulmonar.',
    aplicacaoClinica: 'Estenose da valva aórtica gera um sopro mesossistólico em diamante mais audível no 2º EICD que irradia para as artérias carótidas no pescoço.',
    dificuldade: 'Fácil'
  },
  {
    id: 16,
    categoria: 'conducao',
    topico: 'Foco Mitral e Ictus Cordis',
    pergunta: 'O FOCO MITRAL da ausculta cardíaca coincide topograficamente com qual referência anatômica torácica?',
    opcoes: [
      '2º espaço intercostal direito, na linha paraesternal.',
      '4º espaço intercostal esquerdo, junto à margem do esterno.',
      '5º espaço intercostal esquerdo, na linha hemiclavicular (região do ápice / ictus cordis).',
      'Manúbrio esternal na junção com as primeiras cartilagens costais.'
    ],
    respostaCorretaIndex: 2,
    explicacao: 'O Foco Mitral situa-se no 5º espaço intercostal esquerdo (EICE), na linha hemiclavicular (cerca de 8-9 cm da linha média esternal), coincidindo com a localização do choque da ponta (Ictus Cordis), ápice anatômico formado pelo ventrículo esquerdo.',
    dicaPratica: 'Trace uma linha imaginária descendo do ponto médio da clavícula esquerda e encontre o 5º espaço intercostal (geralmente abaixo do mamilo em homens e jovens).',
    aplicacaoClinica: 'Insuficiência mitral produz um sopro holossistólico em jato e regurgitação que se propaga tipicamente para a região da linha axilar anterior e oco axilar esquerdo.',
    dificuldade: 'Fácil'
  },
  {
    id: 17,
    categoria: 'conducao',
    topico: 'Complexo Estimulante do Coração',
    pergunta: 'Qual estrutura é considerada o "marcapasso natural" do coração humano e onde se localiza exatamente?',
    opcoes: [
      'Nó Atrioventricular, localizado no septo interventricular muscular.',
      'Fibras de Purkinje, localizadas no epicárdio do ápice cardíaco.',
      'Nó Sinoatrial (SA), localizado na parede do átrio direito, junto à junção da veia cava superior com a crista terminal.',
      'Feixe de His, localizado na face anterior da cúspide mitral.'
    ],
    respostaCorretaIndex: 2,
    explicacao: 'O Nó Sinoatrial (SA) é o marcapasso fisiológico por possuir a maior frequência de despolarização espontânea intrínseca (60-100 bpm). Localiza-se na parede póstero-lateral do átrio direito, junto à desembocadura da Veia Cava Superior.',
    dicaPratica: 'O nó SA inicia a onda elétrica; ela viaja pelos átrios até o nó AV, depois desce pelo Feixe de His e se espalha pelos ventrículos via Fibras de Purkinje.',
    aplicacaoClinica: 'Doença do nó sinusal gera bradicardia sintomática com tonturas, síncope e fadiga precoce durante exercícios fisioterapêuticos.',
    dificuldade: 'Fácil'
  },
  {
    id: 18,
    categoria: 'conducao',
    topico: 'Esqueleto Fibroso e Condução',
    pergunta: 'Qual é o papel crucial do ESQUELETO FIBROSO do coração na propagação do estímulo elétrico cardíaco?',
    opcoes: [
      'Acelerar a velocidade de condução para que átrios e ventrículos se contraiam ao mesmo tempo.',
      'Atuar como um isolante elétrico que impede a propagação direta do impulso dos átrios para os ventrículos, exceto através do Feixe Atrioventricular (de His).',
      'Gerar potenciais de ação automáticos que substituem o nó sinoatrial durante a hipóxia.',
      'Conectar eletricamente a veia cava superior à aorta ascendente.'
    ],
    respostaCorretaIndex: 1,
    explicacao: 'O esqueleto fibroso atua como barreira dielétrica (isolante) entre o miocárdio dos átrios e o miocárdio dos ventrículos. Isso força o impulso a trafegar exclusivamente através da via especializada do Nó AV e Feixe de His, garantindo o atraso temporal necessário para o enchimento ventricular.',
    dicaPratica: 'Sem o esqueleto fibroso isolando eletricamente, a sístole dos ventrículos aconteceria desordenadamente colada à dos átrios, impedindo o fluxo.',
    aplicacaoClinica: 'Feixes anômalos que cruzam o esqueleto fibroso (como os feixes de Kent na Síndrome de Wolff-Parkinson-White) geram pré-excitação e taquicardias paroxísticas graves.',
    dificuldade: 'Difícil'
  },
  {
    id: 19,
    categoria: 'coração',
    topico: 'Septos Cardíacos',
    pergunta: 'O Septo Interventricular divide-se anatomicamente em duas porções distintas:',
    opcoes: [
      'Porção adiposa superior e porção cartilaginosa inferior.',
      'Porção membranosa (superior, menor e delgada) e porção muscular (inferior, maior e espessa).',
      'Porção pectínea lateral e porção tendínea medial.',
      'Porção serosa externa e porção fibrosa cavernosa.'
    ],
    respostaCorretaIndex: 1,
    explicacao: 'O Septo Interventricular é composto por uma volumosa Porção Muscular (inferior, compondo a maior parte da parede interventricular espessa) e uma fina Porção Membranosa superior (situada logo abaixo das cúspides aórtica e septal tricúspide).',
    dicaPratica: 'Ao transiluminar o septo interventricular num coração aberto, a porção membranosa superior brilha como uma membrana fina perto da saída da aorta.',
    aplicacaoClinica: 'A porção membranosa é o local mais frequente das Comunicações Interventriculares (CIV congênitas), que exigem correção cirúrgica precoce na infância.',
    dificuldade: 'Média'
  },
  {
    id: 20,
    categoria: 'coração',
    topico: 'Ligamento Arterial',
    pergunta: 'O LIGAMENTO ARTERIAL é uma estrutura fibrosa que une quais vasos da base e qual sua origem fetal?',
    opcoes: [
      'Une a veia cava superior ao átrio esquerdo; resquício do forame oval.',
      'Une a curvatura inferior do arco aórtico à face superior do tronco pulmonar (ou artéria pulmonar esquerda); resquício do ducto arterial fetal.',
      'Une a artéria carótida comum à veia jugular interna; resquício da artéria vitelina.',
      'Une o seio coronário à veia cava inferior; resquício do ducto venoso.'
    ],
    respostaCorretaIndex: 1,
    explicacao: 'O Ligamento Arterial conecta a concavidade do arco aórtico à artéria pulmonar esquerda / tronco pulmonar. Representa o fechamento fibroso pós-natal do Ducto Arterial (canal arterial de Botallo), que no feto desviava sangue do tronco pulmonar para a aorta.',
    dicaPratica: 'Procure uma ponte fibrosa curta em formato de fita entre a aorta e o tronco pulmonar. Próximo a ele cruza o nervo laríngeo recorrente esquerdo.',
    aplicacaoClinica: 'Persistência do Canal Arterial (PCA) em recém-nascidos gera hiperfluxo pulmonar com sopro contínuo ("em maquinaria"), necessitando de suporte fisioterapêutico ventilatório.',
    dificuldade: 'Média'
  },
  {
    id: 21,
    categoria: 'clinica',
    topico: 'Cardiopatias Congênitas',
    pergunta: 'A Tetralogia de Fallot ("síndrome do bebê azul") é caracterizada pelas seguintes anomalias anatômicas, EXCETO:',
    opcoes: [
      'Comunicação Interventricular (CIV).',
      'Estenose da valva/infundíbulo pulmonar.',
      'Cavalgamento da aorta sobre o septo interventricular defeituoso.',
      'Coarctação congênita da veia cava superior.'
    ],
    respostaCorretaIndex: 3,
    explicacao: 'A Tetralogia de Fallot consiste em: 1) Estenose pulmonar; 2) CIV; 3) Dextroposição/cavalgamento da aorta; 4) Hipertrofia do ventrículo direito. Não há coarctação de veia cava superior.',
    dicaPratica: 'Lembre-se dos 4 componentes clássicos descritos nos slides: CIV, Estenose Pulmonar, Aorta Cavalgante e Hipertrofia de VD.',
    aplicacaoClinica: 'A estenose pulmonar associada à CIV faz com que o VD hipertrofiado ejete sangue venoso para dentro da aorta cavalgante, causando cianose central ("bebê azul") e hipoxemia acentuada ao choro ou esforço.',
    dificuldade: 'Fácil'
  },
  {
    id: 22,
    categoria: 'vasos',
    topico: 'Características Macroscópicas de Vasos',
    pergunta: 'Ao examinar um vaso sanguíneo em uma peça cadavérica, quais características indicam que se trata de uma ARTÉRIA e não de uma veia?',
    opcoes: [
      'Parede extremamente delgada, lúmen achatado/colabado e presença de válvulas parietais abundantes.',
      'Coloração escura arroxeada e ausência de camada muscular na túnica média.',
      'Parede espessa e elástica, lúmen arredondado patente que resiste ao colabamento por compressão e ausência de válvulas ao longo do trajeto.',
      'Diâmetro constante em direção à periferia com proporção 2:1 em relação às veias.'
    ],
    respostaCorretaIndex: 2,
    explicacao: 'As artérias possuem túnica média muito rica em fibras elásticas e musculares lisas, conferindo parede espessa e resistente que mantém a luz arredondada aberta mesmo vazia de sangue. Não possuem válvulas (apenas as semilunares na raiz de saída). Veias têm paredes delgadas e colabadas.',
    dicaPratica: 'Aperte o vaso com a pinça: se parecer uma mangueirinha elástica e grossa que volta à forma circular, é artéria; se parecer uma fita mole colabada, é veia.',
    aplicacaoClinica: 'Nas punções arteriais (gasometria), a alta pressão pulsa a seringa; no teste de pulso periférico do fisioterapeuta, a elasticidade arterial transmite a onda esfigmofisiológica.',
    dificuldade: 'Fácil'
  },
  {
    id: 23,
    categoria: 'vasos',
    topico: 'Válvulas Venosas e Exceções',
    pergunta: 'Em quais territórios venosos do corpo humano as VÁLVULAS VENOSAS estão classicamente AUSENTES?',
    opcoes: [
      'Veias profundas da perna e veia poplítea.',
      'Veia safena magna e veia safena parva.',
      'Veias do encéfalo, crânio, pescoço (como as jugulares em grande parte) e algumas veias do tronco (veias cavas).',
      'Veias intermédias do cotovelo e veia basílica.'
    ],
    respostaCorretaIndex: 2,
    explicacao: 'Conforme exposto nos slides anatômicos: as veias da região cerebral, cabeça, pescoço e algumas do tronco (como as veias cavas) são exceções e NÃO possuem válvulas, pois o retorno venoso dessas áreas superiores é favorecido diretamente pela gravidade e pressão negativa intratorácica.',
    dicaPratica: 'Mnemônica: "Cabeça não precisa de escada": o sangue desce da cabeça pro coração por gravidade, por isso veias cerebrais e cavas não precisam de válvulas.',
    aplicacaoClinica: 'A ausência de válvulas no sistema venoso cerebral permite que infecções faciais (triângulo perigoso da face) se propaguem retrogradamente para os seios venosos durais (trombose do seio cavernoso).',
    dificuldade: 'Média'
  },
  {
    id: 24,
    categoria: 'vasos',
    topico: 'Classificação das Veias',
    pergunta: 'Quanto ao estrato e ao trajeto, como se classificam as VEIAS na anatomia sistêmica?',
    opcoes: [
      'Estrato: epicárdicas e endocárdicas; Trajeto: espirais e retilíneas.',
      'Estrato: superficiais (subcutâneas) e profundas (subfaciais); Trajeto: satélites, solitárias e tributárias.',
      'Estrato: musculares e membranosas; Trajeto: elásticas e resistivas.',
      'Estrato: arteriolares e capilares; Trajeto: centrífugas e anastomóticas.'
    ],
    respostaCorretaIndex: 1,
    explicacao: 'Veias dividem-se quanto ao Estrato em: Superficiais (subcutâneas, acima da fáscia de revestimento) e Profundas (abaixo da fáscia, acompanhando as artérias). Quanto ao Trajeto dividem-se em: Satélites (acompanham artérias aos pares), Solitárias (trajeto isolado sem artéria correspondente direta) e Tributárias (que deságuam em uma veia maior).',
    dicaPratica: 'Em membros: duas veias profundas correndo ao lado de uma artéria profunda = veias satélites. As veias visíveis sob a pele = veias superficiais.',
    aplicacaoClinica: 'As veias perfurantes possuem válvulas que direcionam o fluxo do sistema superficial para o profundo. A falência dessas válvulas gera varizes volumosas e estase crônica.',
    dificuldade: 'Média'
  },
  {
    id: 25,
    categoria: 'vasos',
    topico: 'Veias do Membro Inferior',
    pergunta: 'A VEIA SAFENA MAGNA origina-se na rede dorsal do pé, sobe anterior ao maléolo medial e desemboca em qual vaso venoso?',
    opcoes: [
      'Veia Poplítea na fossa poplítea.',
      'Veia Cava Inferior no abdômen.',
      'Veia Femoral no trígono femoral (através do hiato safeno).',
      'Veia Ilíaca Interna na pelve menor.'
    ],
    respostaCorretaIndex: 2,
    explicacao: 'A Veia Safena Magna é a mais longa veia superficial do corpo: sobe pela face medial da perna e coxa e perfura a fáscia cribriforme no hiato safeno para desembocar na Veia Femoral (veia profunda). Já a Veia Safena Parva passa atrás do maléolo lateral e desemboca na Veia Poplítea.',
    dicaPratica: 'Safena MAGNA = Maior, Medial, Maléolo medial, desemboca na Femoral. Safena PARVA = Pequena, Posterior, Maléolo lateral, desemboca na Poplítea.',
    aplicacaoClinica: 'A safena magna é amplamente dissecada para enxertos de pontes de safena na cirurgia de revascularização miocárdica. O fisioterapeuta trata o edema residual do membro doador.',
    dificuldade: 'Fácil'
  },
  {
    id: 26,
    categoria: 'vasos',
    topico: 'Veias do Membro Superior',
    pergunta: 'Quais são as duas principais veias superficiais longitudinais do membro superior e a veia oblíqua que frequentemente as conecta na fossa cubital?',
    opcoes: [
      'Veia Radial e Veia Ulnar, conectadas pela Veia Braquial.',
      'Veia Cefálica (lateral), Veia Basílica (medial) e Veia Intermédia do Cotovelo.',
      'Veia Axilar, Veia Subclávia e Veia Jugular Externa.',
      'Veia Braquiocefálica, Veia Ázigos e Veia Torácica Lateral.'
    ],
    respostaCorretaIndex: 1,
    explicacao: 'As principais veias superficiais do MMSS são a Veia Cefálica (disposta lateralmente, no lado do polegar/rádio) e a Veia Basílica (disposta medialmente, no lado do quinto dedo/ulna). Na região anterior do cotovelo, comunicam-se pela Veia Intermédia do Cotovelo (frequentemente em arranjo de "M" venoso).',
    dicaPratica: 'Mnemônica: "Cefálica" vai para a Cabeça pelo lado de fora (lateral/polegar); "Basílica" fica na Base medial do corpo (lado da ulna).',
    aplicacaoClinica: 'A veia intermédia do cotovelo é o sítio preferencial de venopunção periférica para coleta de exames e infusão de medicamentos em terapia intensiva.',
    dificuldade: 'Fácil'
  },
  {
    id: 27,
    categoria: 'vasos',
    topico: 'Classificação e Nomeação de Artérias',
    pergunta: 'Segundo a nomenclatura anatômica, a Artéria Femoral, a Artéria Renal e a Artéria Circunflexa foram nomeadas, respectivamente, de acordo com:',
    opcoes: [
      'Situação, direção e diâmetro de luz.',
      'Parte óssea em contato, órgão irrigado e direção de trajeto.',
      'Pressão hidrostática, tipo de endotélio e número de ramos colaterais.',
      'Órgão irrigado, relação muscular e profundidade de estrato.'
    ],
    respostaCorretaIndex: 1,
    explicacao: 'Conforme exposto nos slides do Prof. J. Felipe Tomaz: Artérias podem ser nomeadas por: 1) Situação (ex: Interventricular Anterior); 2) Direção (ex: Circunflexa); 3) Órgão irrigado (ex: Renal, Gástrica); 4) Parte óssea em contato (ex: Femoral, Radial, Ulnar).',
    dicaPratica: 'Femoral = contato com o fêmur (osso); Renal = irriga o rim (órgão); Circunflexa = contorna ou faz curva (direção).',
    aplicacaoClinica: 'Conhecer a relação topográfica óssea permite ao fisioterapeuta palpar os pulsos com firmeza contra o anteparo ósseo sem ocluir completamente a luz.',
    dificuldade: 'Média'
  },
  {
    id: 28,
    categoria: 'vasos',
    topico: 'Ramos Terminais vs Colaterais',
    pergunta: 'A Artéria Carótida Comum divide-se no pescoço em Artéria Carótida Externa e Artéria Carótida Interna. Esses dois vasos constituem para a carótida comum exemplos de:',
    opcoes: [
      'Ramos colaterais superficiais.',
      'Ramos terminais.',
      'Veias satélites adventícias.',
      'Anastomoses por inosculação reversa.'
    ],
    respostaCorretaIndex: 1,
    explicacao: 'Ramo Terminal é aquele originado quando a artéria-tronco principal se bifurca/trifurca e DEIXA DE EXISTIR com seu nome original. A carótida comum cessa na sua bifurcação (nível da cartilagem tireóidea C4), dando origem aos seus ramos terminais (carótida externa e carótida interna).',
    dicaPratica: 'Se o tronco original morre na bifurcação, são ramos terminais (ex: Aorta Abdominal virando Ilíacas Comuns; Carótida Comum virando Carótida Externa e Interna).',
    aplicacaoClinica: 'O seio carotídeo situa-se na base da artéria carótida interna e contém barorreceptores que regulam a pressão arterial; massagem inadvertida na região pode causar bradicardia reflexa e síncope.',
    dificuldade: 'Fácil'
  },
  {
    id: 29,
    categoria: 'vasos',
    topico: 'Arteríolas e Resistência Periférica',
    pergunta: 'Por que as ARTERÍOLAS são consideradas funcionalmente os principais "vasos de resistência" do sistema circulatório?',
    opcoes: [
      'Porque possuem paredes de colágeno inerte que não se alteram por estímulos nervosos.',
      'Porque possuem uma camada de músculo liso circular espessa em relação ao seu pequeno calibre interno, cuja contração modula ativamente a resistência vascular e a pressão arterial.',
      'Porque contêm válvulas semilunares internas que impedem o sangue de retornar às artérias musculares.',
      'Porque são as únicas responsáveis pela troca de gases e nutrientes com o líquido intersticial.'
    ],
    respostaCorretaIndex: 1,
    explicacao: 'As arteríolas possuem a maior densidade de músculo liso proporcional ao diâmetro de luz e sofrem intensa regulação simpática e metabólica local. Pequenas variações no seu raio alteram a resistência à quarta potência (Lei de Poiseuille), determinando a Resistência Vascular Periférica total.',
    dicaPratica: 'Artérias elásticas conduzem e amortecem; arteríolas resistem e direcionam; capilares trocam; veias reservam e retornam.',
    aplicacaoClinica: 'O exercício aeróbico provoca vasodilatação arteriolar potente nos grupamentos musculares em atividade, reduzindo transitoriamente a resistência vascular periférica e a pressão arterial pós-treino.',
    dificuldade: 'Média'
  },
  {
    id: 30,
    categoria: 'vasos',
    topico: 'Pulsos Arteriais Periféricos',
    pergunta: 'Em qual acidente anatômico deve ser posicionado o examinador para palpar o PULSO DA ARTÉRIA RADIAL e o PULSO DA ARTÉRIA TIBIAL POSTERIOR?',
    opcoes: [
      'Radial: no oco axilar; Tibial Posterior: na tuberosidade anterior da tíbia.',
      'Radial: na goteira radial da face anterior do punho (lateral ao tendão do flexor radial do carpo); Tibial Posterior: posterior e inferior ao maléolo medial.',
      'Radial: na tabaqueira anatômica dorsal medial; Tibial Posterior: anterior ao maléolo lateral.',
      'Radial: no sulco bicipital medial do braço; Tibial Posterior: na região do calcâneo superior.'
    ],
    respostaCorretaIndex: 1,
    explicacao: 'O pulso radial é palpado na goteira radial, na face anterior do punho, lateral ao tendão do músculo flexor radial do carpo contra a epífise distal do osso rádio. O pulso tibial posterior é palpado na face medial do tornozelo, atrás e abaixo do maléolo medial.',
    dicaPratica: 'Radial: lado do polegar no punho. Tibial Posterior: contorne com os dedos a curva do osso de dentro do tornozelo (maléolo medial).',
    aplicacaoClinica: 'A ausência ou assimetria do pulso tibial posterior e do pulso pedioso é sinal clínico cardeal de Doença Arterial Obstrutiva Periférica (DAOP) nos membros inferiores.',
    dificuldade: 'Fácil'
  },
  {
    id: 31,
    categoria: 'coração',
    topico: 'Morfologia Interna dos Átrios',
    pergunta: 'Os MÚSCULOS PECTÍNEOS são projeções musculares dispostas em forma de dentes de pente. Onde são predominantemente encontrados nas câmaras cardíacas?',
    opcoes: [
      'Na parede do ventrículo esquerdo e no septo membranoso.',
      'Na parede anterior e aurícula do Átrio Direito, e restritos à aurícula no Átrio Esquerdo.',
      'No interior do seio coronário e no arco aórtico.',
      'Exclusivamente na porção do cone arterial do ventrículo direito.'
    ],
    respostaCorretaIndex: 1,
    explicacao: 'Os músculos pectíneos são abundantes na parede anterior rugosa do Átrio Direito e dentro de sua aurícula direita. No Átrio Esquerdo, cuja parede interna é predominantemente lisa, os músculos pectíneos restringem-se ao interior da sua aurícula esquerda.',
    dicaPratica: 'Abra os dois átrios: a parede do AD parece cheia de ranhuras paralelas de pente (pectíneos); a parede do AE é quase toda lisa.',
    aplicacaoClinica: 'As criptas entre os músculos pectíneos na aurícula esquerda são locais propensos à estagnação de sangue e formação de trombos murais na fibrilação atrial.',
    dificuldade: 'Média'
  },
  {
    id: 32,
    categoria: 'coração',
    topico: 'Faces do Coração',
    pergunta: 'A FACE ESTERNOCOSTAL (anterior) do coração é formada predominantemente por qual câmara cardíaca?',
    opcoes: [
      'Átrio esquerdo.',
      'Ventrículo direito.',
      'Ventrículo esquerdo.',
      'Aurícula esquerda.'
    ],
    respostaCorretaIndex: 1,
    explicacao: 'A Face Esternocostal (anterior) do coração é formada principalmente pelo Ventrículo Direito (com pequenas contribuições do átrio direito à direita e ventrículo esquerdo à esquerda). A face diafragmática (inferior) é formada pelo VE e parte do VD; e a base é formada pelo Átrio Esquerdo.',
    dicaPratica: 'Se você levar uma pancada de frente no esterno, o ventrículo que está imediatamente atrás do osso amortecendo o impacto é o Ventrículo Direito.',
    aplicacaoClinica: 'Em traumas contusos de tórax (acidentes automobilísticos com impacto no esterno), o ventrículo direito é a câmara que mais frequentemente sofre contusão miocárdica traumática.',
    dificuldade: 'Fácil'
  },
  {
    id: 33,
    categoria: 'vasos',
    topico: 'Bomba Muscular da Panturrilha',
    pergunta: 'Qual a importância fisiológica da "BOMBA MUSCULAR DA PANTURRILHA" (gastrocnêmio e sóleo) no retorno venoso dos membros inferiores?',
    opcoes: [
      'Relaxar as veias para permitir que o sangue permaneça represado nos membros durante a corrida.',
      'Comprimir as veias profundas da perna durante a contração muscular, impulsionando o sangue em direção proximal enquanto as válvulas venosas impedem o refluxo retrógrado.',
      'Produzir calor que dilata as artérias e inverte o gradiente arteriovenoso sistêmico.',
      'Bloquear a drenagem linfática para manter o membro hipertrofiado.'
    ],
    respostaCorretaIndex: 1,
    explicacao: 'A contração do gastrocnêmio e sóleo gera altas pressões intramusculares que comprimem o plexo venoso profundo da perna. As válvulas venosas unidirecionais abrem proximalmente e fecham distalmente, impulsionando o sangue em direção ao coração contra a coluna hidrostática gravitacional.',
    dicaPratica: 'Conhecido na fisioterapia como o "coração periférico" do corpo humano.',
    aplicacaoClinica: 'Prescrição imediata de exercícios ativos de flexão/extensão do tornozelo em pacientes acamados para prevenir estase venosa e Trombose Venosa Profunda (TVP).',
    dificuldade: 'Fácil'
  },
  {
    id: 34,
    categoria: 'coração',
    topico: 'Reanimação Cardiopulmonar',
    pergunta: 'Durante as manobras de Reanimação Cardiopulmonar (RCP) no adulto, por que a compressão torácica deve ser realizada na metade inferior do osso esterno?',
    opcoes: [
      'Para fraturar as clavículas e liberar o manúbrio.',
      'Porque comprime diretamente o coração (especialmente o ventrículo direito) contra a coluna torácica vertebral, gerando ejeção sanguínea e pressão de perfusão artificial.',
      'Para insuflar ar mecanicamente nos brônquios principais.',
      'Porque estimula o plexo solar a disparar dopamina autônoma.'
    ],
    respostaCorretaIndex: 1,
    explicacao: 'O coração (especialmente o VD na face esternocostal) repousa diretamente atrás do terço/metade inferior do corpo do esterno. Comprimir nessa região aprofundando de 5 a 6 cm espreme o miocárdio contra os corpos vertebrais rígidos (T5-T8), forçando a ejeção sistólica artificial.',
    dicaPratica: 'Evite apoiar as mãos sobre o processo xifoide (pode romper e lacerar o fígado) ou nas costelas laterais (risco de fraturas e pneumotórax).',
    aplicacaoClinica: 'Compressões torácicas de alta qualidade (100 a 120 compressões/minuto com retorno completo do tórax) mantêm a pressão de perfusão coronária necessária para o retorno da circulação espontânea (RCE).',
    dificuldade: 'Fácil'
  },
  {
    id: 35,
    categoria: 'coração',
    topico: 'Infarto Agudo do Miocárdio',
    pergunta: 'No Infarto Agudo do Miocárdio (IAM), a necrose celular dos cardiomiócitos decorre de qual mecanismo patológico primário?',
    opcoes: [
      'Infiltração bacteriana nas cordas tendíneas das valvas semilunares.',
      'Isquemia prolongada provocada por redução crítica ou interrupção aguda do fluxo arterial coronariano.',
      'Hipertrofia fisiológica reversível das fibras de Purkinje.',
      'Excesso de retorno venoso através da veia cardíaca magna.'
    ],
    respostaCorretaIndex: 1,
    explicacao: 'O IAM ocorre quando uma artéria coronária sofre oclusão trombótica aguda (frequentemente por rotura de placa aterosclerótica), privando o território miocárdico correspondente de oxigênio e nutrientes, levando à necrose coagulativa irreversível das fibras miocárdicas.',
    dicaPratica: 'Sem sangue das coronárias, a bomba para. Cada minuto de coronária fechada resulta em perda definitiva de massa muscular miocárdica ("tempo é músculo").',
    aplicacaoClinica: 'Após o IAM, a área necrosada é substituída por tecido fibroso inelástico. A fisioterapia cardiovascular atua na reabilitação pós-infarto prevenindo insuficiência cardíaca e melhorando a tolerância funcional ao esforço.',
    dificuldade: 'Fácil'
  },
  {
    id: 36,
    categoria: 'coração',
    topico: 'Endocardite Infecciosa',
    pergunta: 'Qual a razão anatômica para a associação clássica entre infecções bacterianas orais/cáries não tratadas e a ocorrência de ENDOCARDITE INFECCIOSA?',
    opcoes: [
      'Os dentes são inervados pelo nervo vago que desce direto para as cúspides.',
      'Bactérias da microbiota oral penetram nos capilares gengivais e atingem a circulação sistêmica, colonizando o endotélio do endocárdio e as superfícies das valvas cardíacas.',
      'O esôfago comunica-se diretamente com o pericárdio seroso através de ductos linfáticos aberrantes.',
      'A saliva deglutida é absorvida na raiz aórtica.'
    ],
    respostaCorretaIndex: 1,
    explicacao: 'A rica vascularização do periodonto permite que bactérias como Streptococcus do grupo viridans entrem na circulação sanguínea durante bacteremias transitórias (mastigação vigorosa, cáries profundas, extrações dentárias). Ao passarem pelo coração, aderem a valvas cardíacas pré-lesionadas formando vegetações bacterianas destrutivas.',
    dicaPratica: 'Endocárdio é a camada mais interna que reveste as câmaras e as valvas. É banhado diretamente pelo sangue circulante e por qualquer microrganismo presente nele.',
    aplicacaoClinica: 'Pacientes com valvopatias conhecidas necessitam de profilaxia antibiótica para procedimentos odontológicos invasivos para evitar danos valvares permanentes e embolias sépticas.',
    dificuldade: 'Média'
  },
  {
    id: 37,
    categoria: 'coração',
    topico: 'Trabécula Septomarginal',
    pergunta: 'A TRABÉCULA SEPTOMARGINAL (banda moderadora) é uma formação anatômica específica encontrada em qual câmara cardíaca e qual elemento ela conduz?',
    opcoes: [
      'No átrio esquerdo; conduz o feixe internodal anterior.',
      'No ventrículo esquerdo; conduz o nó sinoatrial.',
      'No ventrículo direito; estende-se do septo interventricular à base do músculo papilar anterior e conduz o ramo direito do feixe atrioventricular.',
      'Na aurícula direita; conduz o seio coronário.'
    ],
    respostaCorretaIndex: 2,
    explicacao: 'A trabécula septomarginal (banda moderadora) é uma coluna muscular exclusiva do Ventrículo Direito. Conecta o septo interventricular à base do músculo papilar anterior, funcionando como atalho elétrico que transporta o ramo direito do Feixe de His.',
    dicaPratica: 'Se você estiver examinando o interior de um ventrículo aberto e vir uma "ponte suspensa" de músculo atravessando o espaço livre, com certeza é o Ventrículo Direito.',
    aplicacaoClinica: 'Garante que o músculo papilar anterior se contraia a tempo de tensionar as cordas tendíneas antes que o pico sistólico do VD force a valva tricúspide.',
    dificuldade: 'Média'
  },
  {
    id: 38,
    categoria: 'vasos',
    topico: 'Veias Profundas e Satélites',
    pergunta: 'O que caracteriza as chamadas VEIAS SATÉLITES nos membros e qual seu benefício hemodinâmico?',
    opcoes: [
      'São veias superficiais isoladas que não possuem contato com músculos.',
      'São veias que orbitam a pele do tórax sem se comunicar com as veias cavas.',
      'São geralmente duas veias profundas que acompanham uma artéria homônima no interior da mesma bainha fascial, aproveitando as pulsações arteriais para impulsionar o retorno venoso.',
      'São veias aberrantes que substituem os capilares no fígado.'
    ],
    respostaCorretaIndex: 2,
    explicacao: 'Veias satélites (comitantes) são pares de veias profundas que emparelham paralelamente com uma artéria de médio ou pequeno calibre. Por estarem confinadas dentro da mesma bainha conjuntiva inextensível, cada expansão sistólica da artéria comprime as veias, impulsionando o sangue venoso em direção proximal.',
    dicaPratica: 'No cadáver, ao dissecar a artéria braquial ou artérias tibiais, você verá uma veia de cada lado dela, como "guarda-costas" da artéria.',
    aplicacaoClinica: 'A pulsação arterial atua como uma bomba secundária para o retorno venoso profundo mesmo em repouso nos membros.',
    dificuldade: 'Média'
  },
  {
    id: 39,
    categoria: 'vasos',
    topico: 'Artérias do Membro Superior',
    pergunta: 'Ao cruzar a borda lateral da 1ª costela, a Artéria Subclávia muda de nome e passa a se chamar:',
    opcoes: [
      'Artéria Braquial.',
      'Artéria Axilar.',
      'Artéria Radial.',
      'Artéria Torácica Interna.'
    ],
    respostaCorretaIndex: 1,
    explicacao: 'A Artéria Subclávia transita da raiz do pescoço para a axila cruzando a margem lateral da 1ª costela, onde seu nome muda para Artéria Axilar. Ao atingir a margem inferior do tendão do músculo redondo maior, a axilar passa a se chamar Artéria Braquial.',
    dicaPratica: 'Sequência contínua no membro superior: Subclávia (pescoço/1ª costela) -> Axilar (axila) -> Braquial (braço) -> Radial e Ulnar (antebraço).',
    aplicacaoClinica: 'A Síndrome do Desfiladeiro Torácico comprime a artéria subclávia e o plexo braquial entre a 1ª costela e os músculos escalenos ou clavícula, causando palidez, dor e fraqueza no membro superior abordadas na fisioterapia ortopédica.',
    dificuldade: 'Fácil'
  },
  {
    id: 40,
    categoria: 'vasos',
    topico: 'Artérias do Membro Inferior',
    pergunta: 'Ao passar sob o ligamento inguinal em direção à coxa, a Artéria Ilíaca Externa passa a se denominar:',
    opcoes: [
      'Artéria Poplítea.',
      'Artéria Tibial Anterior.',
      'Artéria Femoral.',
      'Artéria Glútea Superior.'
    ],
    respostaCorretaIndex: 2,
    explicacao: 'A Artéria Ilíaca Externa é ramo terminal da artéria ilíaca comum na pelve. Ao transpor a linha do ligamento inguinal (no ponto médio entre a espinha ilíaca anterossuperior e o tubérculo púbico), entra no trígono femoral da coxa e passa a ser chamada de Artéria Femoral.',
    dicaPratica: 'O ligamento inguinal é a fronteira: acima dele é ilíaca externa (dentro da pelve); abaixo dele é artéria femoral (na raiz da coxa).',
    aplicacaoClinica: 'O pulso da artéria femoral é facilmente palpável no trígono femoral, ponto crítico de acesso em cateterismos e avaliação vascular emergencial.',
    dificuldade: 'Fácil'
  },
  {
    id: 41,
    categoria: 'coração',
    topico: 'Sulcos Cardíacos',
    pergunta: 'Quais estruturas anatômicas percorrem o SULCO INTERVENTRICULAR ANTERIOR na face esternocostal do coração?',
    opcoes: [
      'Artéria Coronária Direita e Veia Cardíaca Parva.',
      'Artéria Interventricular Anterior (descendente anterior) e Veia Cardíaca Magna.',
      'Artéria Circunflexa e Seio Coronário.',
      'Artéria Interventricular Posterior e Veia Cardíaca Média.'
    ],
    respostaCorretaIndex: 1,
    explicacao: 'O sulco interventricular anterior aloja a Artéria Interventricular Anterior (ramo da coronária esquerda) e a Veia Cardíaca Magna, envoltas em tecido adiposo epicárdico, descendo em direção à incisura do ápice do coração.',
    dicaPratica: 'Na face anterior (frente): Artéria Interventricular Anterior + Veia Cardíaca Magna. Na face posterior (trás): Artéria Interventricular Posterior + Veia Cardíaca Média!',
    aplicacaoClinica: 'Referência anatômica de superfície para demarcar a posição do septo interventricular e planejar enxertos cirúrgicos de artéria torácica interna (mamária).',
    dificuldade: 'Média'
  },
  {
    id: 42,
    categoria: 'conducao',
    topico: 'Atraso Nodal Atrioventricular',
    pergunta: 'Por que o Nó Atrioventricular (AV) impõe um retardo fisiológico de aproximadamente 0,10 segundos na condução do estímulo elétrico?',
    opcoes: [
      'Para dar tempo de a musculatura dos ventrículos esfriar após a diástole.',
      'Para permitir que a sístole atrial se complete e encha ativamente os ventrículos antes do início da contração ventricular.',
      'Para bloquear a entrada de sangue nas artérias coronárias durante a sístole.',
      'Para impedir que a valva aórtica se feche prematuramente.'
    ],
    respostaCorretaIndex: 1,
    explicacao: 'O atraso no nó AV garante o acoplamento mecânico correto: os átrios despolarizam e contraem primeiro, bombeando os últimos 20-30% de volume sanguíneo ("chute atrial") para dentro dos ventrículos antes que estes se contraiam para ejetar o sangue nas artérias.',
    dicaPratica: 'Se não houvesse o atraso do nó AV, átrios e ventrículos bateriam simultaneamente contra valvas fechadas, anulando a eficiência da bomba.',
    aplicacaoClinica: 'Na fibrilação atrial, a perda da contração atrial coordenada reduz o débito cardíaco em até 20-30%, provocando queda de tolerância aos exercícios físicos.',
    dificuldade: 'Média'
  },
  {
    id: 43,
    categoria: 'clinica',
    topico: 'Semiologia e Edema',
    pergunta: 'Na avaliação fisioterapêutica, a presença de uma depressão persistente na pele após compressão digital sobre a face medial da tíbia (SINAL DE GODET ou CACIFO positivo) caracteriza classicamente:',
    opcoes: [
      'Linfedema fibrótico irreversível em estágio terminal.',
      'Edema de origem venosa ou desequilíbrio hidrostático com acúmulo de líquido livre no interstício.',
      'Isquemia arterial periférica aguda.',
      'Necrose muscular por rabdomiólise de esforço.'
    ],
    respostaCorretaIndex: 1,
    explicacao: 'O Sinal de Godet (cacifo) positivo indica acúmulo de líquido aquoso livre no interstício tecidual, decorrente de aumento da pressão hidrostática venosa (insuficiência venosa crônica ou insuficiência cardíaca congestiva) ou hipoalbuminemia. O linfedema clássico é duro e fibrótico, com Godet frequentemente negativo.',
    dicaPratica: 'Pressione com o polegar a região pré-tibial por 5 segundos: a marca afundada (fóvea) gradua o edema de 1+ a 4+.',
    aplicacaoClinica: 'Parâmetro objetivo fundamental para o fisioterapeuta monitorar a eficácia de manobras de elevação de membros, cinesioterapia metabólica e meias de compressão.',
    dificuldade: 'Fácil'
  },
  {
    id: 44,
    categoria: 'coração',
    topico: 'Tecido Muscular Cardíaco',
    pergunta: 'Conforme abordado nos conceitos de histofisiologia nos slides, qual a classificação do tecido muscular do coração?',
    opcoes: [
      'Tecido muscular estriado voluntário.',
      'Tecido muscular liso involuntário.',
      'Tecido muscular estriado involuntário.',
      'Tecido conjuntivo elástico multinucleado voluntário.'
    ],
    respostaCorretaIndex: 2,
    explicacao: 'O músculo cardíaco (miocárdio) é Estriado Involuntário. O músculo esquelético é estriado voluntário; o músculo visceral (trato gastrointestinal, vasos) é liso involuntário.',
    dicaPratica: 'Slides da Profa. Elayne: Esquelético = estriado voluntário; Cardíaco = estriado involuntário; Liso = liso involuntário.',
    aplicacaoClinica: 'A propriedade de contração involuntária rítmica modulada pelo sistema nervoso autônomo é a base do controle autonômico da frequência cardíaca durante o condicionamento físico.',
    dificuldade: 'Fácil'
  },
  {
    id: 45,
    categoria: 'vasos',
    topico: 'Artérias do Pescoço e Cabeça',
    pergunta: 'A Artéria Carótida Comum ascende pelo pescoço dentro da bainha carotídea acompanhada por quais estruturas anatômicas nobres?',
    opcoes: [
      'Veia Safena Magna e Nervo Safeno.',
      'Veia Jugular Interna e Nervo Vago (X par craniano).',
      'Artéria Subclávia e Nervo Frênico.',
      'Tronco simpático e ducto torácico apenas.'
    ],
    respostaCorretaIndex: 1,
    explicacao: 'A bainha carotídea contém: medialmente a Artéria Carótida Comum (e depois a carótida interna), lateralmente a Veia Jugular Interna e posteriormente, no ângulo entre os dois vasos, o Nervo Vago (NC X).',
    dicaPratica: 'Tríade vascular do pescoço: Artéria Carótida (medial) + Veia Jugular Interna (lateral) + Nervo Vago (atrás).',
    aplicacaoClinica: 'Mobilizações cervicais vigorosas devem respeitar essa topografia, especialmente em idosos com ateromatose carotídea.',
    dificuldade: 'Média'
  },
  {
    id: 46,
    categoria: 'coração',
    topico: 'Margem do Coração',
    pergunta: 'Qual estrutura anatômica delimita a MARGEM DIREITA (margem aguda) do coração?',
    opcoes: [
      'É formada quase totalmente pelo ventrículo esquerdo em direção ao ápice.',
      'É formada pelo átrio direito e estende-se entre a veia cava superior e a veia cava inferior.',
      'É formada pelo arco aórtico contornando a traqueia.',
      'É formada pela aurícula esquerda cobrindo o sulco coronário.'
    ],
    respostaCorretaIndex: 1,
    explicacao: 'A margem direita do coração é quase vertical, ligeiramente convexa, formada pelo Átrio Direito e estende-se entre a desembocadura da veia cava superior e a desembocadura da veia cava inferior.',
    dicaPratica: 'Na vista frontal, acompanhe a borda lateral direita da silhueta cardíaca: ela é toda formada pelo átrio direito.',
    aplicacaoClinica: 'Na radiografia de tórax em incidência posteroanterior (PA), o contorno cardíaco direito na silhueta cardiovascular é projetado pela margem do átrio direito.',
    dificuldade: 'Média'
  },
  {
    id: 47,
    categoria: 'vasos',
    topico: 'Aorta Abdominal e Ramos',
    pergunta: 'Em qual nível vertebral a Aorta Abdominal bifurca-se em seus ramos terminais (Artérias Ilíacas Comuns direita e esquerda)?',
    opcoes: [
      'Nível de T12 (hiato aórtico do diafragma).',
      'Nível de L1 (plano transpilórico).',
      'Nível de L4 (aproximadamente na altura das cristas ilíacas e cicatriz umbilical).',
      'Nível de S2 (promontório sacral).'
    ],
    respostaCorretaIndex: 2,
    explicacao: 'A Aorta Abdominal divide-se em seus ramos terminais (Artérias Ilíacas Comuns D e E) na altura da vértebra L4, cerca de 2 a 3 cm abaixo do umbigo, correspondendo ao nível do plano supracristal (linha que une os pontos mais altos das cristas ilíacas).',
    dicaPratica: 'Trace a linha entre as duas cristas ilíacas: é a altura de L4, onde a aorta se bifurca em dois grandes ramos para as pernas.',
    aplicacaoClinica: 'Local mais comum de formação de Aneurisma da Aorta Abdominal (AAA infra-renal). Palpação de massa pulsátil expansiva no abdômen é contraindicação formal para terapia manual local.',
    dificuldade: 'Média'
  },
  {
    id: 48,
    categoria: 'conducao',
    topico: 'Fibras de Purkinje e Despolarização Ventricular',
    pergunta: 'Por que a onda de despolarização ventricular se propaga através das FIBRAS DE PURKINJE a partir do ápice em direção à base dos ventrículos?',
    opcoes: [
      'Para que os ventrículos se esvaziem em direção cranial, impulsionando o sangue para os óstios do tronco pulmonar e da aorta situados na base.',
      'Para fechar prematuramente as veias cavas no mediastino posterior.',
      'Para empurrar o sangue de volta para os átrios através das valvas atrioventriculares abertas.',
      'Porque as fibras de Purkinje não conseguem transportar íons de sódio em direção ascendente.'
    ],
    respostaCorretaIndex: 0,
    explicacao: 'Os grandes vasos de saída (tronco pulmonar no VD e aorta no VE) localizam-se na BASE dos ventrículos (para cima). Ao conduzir o estímulo rapidamente até o ápice e iniciar a contração de baixo para cima ("espremendo o tubo de pasta de dente do fundo para a tampa"), o miocárdio ejeta o sangue eficientemente em direção às valvas semilunares.',
    dicaPratica: 'Pense numa onda que começa na ponta do coração (ápice) e sobe como um vórtice em direção à saída na base.',
    aplicacaoClinica: 'Bloqueios de ramo (BRD ou BRE) desorganizam essa sincronia ápice-base, reduzindo o volume ejetado e exigindo ressincronização cardíaca.',
    dificuldade: 'Difícil'
  },
  {
    id: 49,
    categoria: 'coração',
    topico: 'Óstios das Veias Cavas e Válvulas Rudimentares',
    pergunta: 'Na morfologia interna do Átrio Direito, quais pregas ou válvulas rudimentares estão associadas ao óstio da veia cava inferior e ao óstio do seio coronário?',
    opcoes: [
      'Valva mitral e valva bicúspide.',
      'Válvula da veia cava inferior (de Eustáquio) e Válvula do seio coronário (de Tebésio).',
      'Lúnulas semilunares e nódulos de Arâncio.',
      'Cordas tendíneas intermediárias e músculo papilar septal.'
    ],
    respostaCorretaIndex: 1,
    explicacao: 'No átrio direito, o óstio da Veia Cava Inferior é guarnecido pela válvula da VCI (válvula de Eustáquio, que no feto direcionava o fluxo para o forame oval), e o óstio do Seio Coronário é guarnecido pela válvula do seio coronário (válvula de Tebésio).',
    dicaPratica: 'Na peça do átrio direito, veja duas pequenas pregas membranosas em forma de meia-lua na borda dos orifícios de entrada da VCI e do seio coronário.',
    aplicacaoClinica: 'Em adultos, essas válvulas são normalmente incompetentes e rudimentares, mas podem ser volumosas e dificultar a canulação durante cirurgias cardíacas com circulação extracorpórea.',
    dificuldade: 'Difícil'
  },
  {
    id: 50,
    categoria: 'clinica',
    topico: 'Ausculta em Fisioterapia Respiratória',
    pergunta: 'Durante a ausculta do paciente em atendimento fisioterapêutico, o DESDOBRAMENTO FISIOLÓGICO DA 2ª BULHA (B2) torna-se mais nítido durante qual fase respiratória e por qual razão hemodinâmica?',
    opcoes: [
      'Durante a expiração forçada, pois o coração diminui de tamanho.',
      'Durante a INSPIRAÇÃO profunda, pois a pressão intratorácica negativa aumenta o retorno venoso ao coração direito, retardando o fechamento da valva pulmonar (P2).',
      'Apenas em apneia pós-exercício por acidose lática.',
      'Durante a tosse, devido à abertura da valva mitral.'
    ],
    respostaCorretaIndex: 1,
    explicacao: 'Na inspiração profunda, a descida do diafragma gera pressão intratorácica negativa que "suga" mais sangue das veias cavas para o Ventrículo Direito. O VD leva mais tempo para ejetar esse volume aumentado, fazendo com que o componente pulmonar (P2) feche ligeiramente depois do aórtico (A2), gerando o clássico desdobramento fisiológico de B2.',
    dicaPratica: 'Peça ao paciente para respirar fundo enquanto ausculta o foco pulmonar (2º EICE): você ouvirá o "TÁ" de B2 se dividir em dois cliques rápidos ("trá").',
    aplicacaoClinica: 'Um desdobramento fixo de B2 (que não varia com a respiração) é sinal clássico de Comunicação Interatrial (CIA) devido à sobrecarga de volume crônica no coração direito.',
    dificuldade: 'Difícil'
  }
];

export const quizData: QuizQuestion[] = [...baseQuizData, ...quizQuestionsPart2];

