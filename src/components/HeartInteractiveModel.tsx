import React, { useState } from 'react';
import {
  Activity,
  Layers,
  ArrowRight,
  Info,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  Volume2,
  GitBranch,
  RefreshCw,
  ChevronRight,
  ChevronLeft,
  Flame,
  Wind,
  Play
} from 'lucide-react';
import { playHeartSound } from '../utils/audioSimulator';
import { CirculationAnimationPlayer } from './CirculationAnimationPlayer';

interface HeartPart {
  id: string;
  nome: string;
  tipo: 'camara' | 'vaso' | 'valva' | 'septo';
  sangue: 'venoso' | 'arterial' | 'misto' | 'neutro';
  descricao: string;
  dicaBancada: string;
  funcao: string;
  fisioterapia: string;
}

const heartParts: Record<string, HeartPart> = {
  'ad': {
    id: 'ad',
    nome: 'Átrio Direito',
    tipo: 'camara',
    sangue: 'venoso',
    descricao: 'Câmara cardíaca póstero-superior direita que recebe sangue venoso desoxigenado de todo o corpo através das Veias Cavas e do Seio Coronário.',
    dicaBancada: 'Possui parede anterior rugosa com músculos pectinados e parede posterior lisa (seio das veias cavas). Contém a Fossa Oval no septo interatrial.',
    funcao: 'Reservatório e bomba de escorva que direciona o sangue venoso para o Ventrículo Direito através da valva atrioventricular direita (tricúspide).',
    fisioterapia: 'A Pressão Venosa Central (PVC) reflete o enchimento do AD. Aumento patológico gera estase venosa retrógrada com turgência jugular e edema em MMII.'
  },
  'vd': {
    id: 'vd',
    nome: 'Ventrículo Direito',
    tipo: 'camara',
    sangue: 'venoso',
    descricao: 'Câmara muscular anterior em formato semilunar que forma a maior parte da face esternocostal do coração.',
    dicaBancada: 'Parede miocárdica fina (3-5 mm), possui 3 músculos papilares e a exclusiva trabécula septomarginal (banda moderadora).',
    funcao: 'Ejeta sangue venoso sob baixa pressão (~25 mmHg) para o tronco pulmonar em direção aos pulmões para hematose.',
    fisioterapia: 'No Cor Pulmonale (sobrecarga por DPOC), o VD sofre hipertrofia patológica e falência, manifestando-se com dispneia e fadiga aos esforços.'
  },
  'ae': {
    id: 'ae',
    nome: 'Átrio Esquerdo',
    tipo: 'camara',
    sangue: 'arterial',
    descricao: 'Câmara cardíaca posterior que forma a maior parte da base do coração. Recebe sangue oxigenado dos pulmões pelas 4 veias pulmonares.',
    dicaBancada: 'Paredes internas predominantemente lisas. Os músculos pectinados restringem-se ao interior da sua aurícula esquerda.',
    funcao: 'Recebe sangue das veias pulmonares e bombeia-o para o ventrículo esquerdo através da valva mitral.',
    fisioterapia: 'Aumento do átrio esquerdo por estenose mitral eleva a pressão venocapilar pulmonar, precipitando edema agudo de pulmão e tosse com expectoração rósea.'
  },
  've': {
    id: 've',
    nome: 'Ventrículo Esquerdo',
    tipo: 'camara',
    sangue: 'arterial',
    descricao: 'Câmara cônica mui espessa que forma 100% do ápice cardíaco e a face pulmonar esquerda.',
    dicaBancada: 'Miocárdio cerca de 3 vezes mais espesso (8-12 mm) que o do VD. Possui 2 grandes músculos papilares (anterior e posterior) e corte transversal perfeitamente circular.',
    funcao: 'Bomba sistêmica de alta pressão (~120 mmHg) que impulsiona o débito cardíaco para a aorta e toda a rede tecidual periférica.',
    fisioterapia: 'Pilar da reabilitação cardiovascular. O choque da ponta (Ictus Cordis) reflete o tônus contrátil do VE e sua posição torácica (5º EICE na LMC).'
  },
  'aorta': {
    id: 'aorta',
    nome: 'Artéria Aorta (Raiz e Arco)',
    tipo: 'vaso',
    sangue: 'arterial',
    descricao: 'Principal artéria elástica do organismo, originando-se profundamente no ventrículo esquerdo.',
    dicaBancada: 'Parede elástica mais espessa de todos os vasos. O arco emite os 3 ramos: Tronco Braquiocefálico, Carótida Comum E e Subclávia E.',
    funcao: 'Amortece a onda de pulso sistólico (efeito Windkessel) e distribui sangue para as coronárias e todo o organismo.',
    fisioterapia: 'A elasticidade da aorta previne pico pressórico excessivo. Em idosos com aterosclerose, a rigidez da aorta causa hipertensão sistólica isolada.'
  },
  'tronco-pulmonar': {
    id: 'tronco-pulmonar',
    nome: 'Tronco Pulmonar',
    tipo: 'vaso',
    sangue: 'venoso',
    descricao: 'Vaso arterial mais anterior da base cardíaca, originando-se do cone arterial do Ventrículo Direito.',
    dicaBancada: 'Cruza obliquamente pela frente da aorta ascendente e divide-se em artéria pulmonar direita e esquerda sob o arco aórtico.',
    funcao: 'Conduz todo o sangue venoso desoxigenado do ventrículo direito até as redes capilares alveolares dos pulmões.',
    fisioterapia: 'Tromboembolismo Pulmonar (TEP) obstrui subitamente o tronco ou artérias pulmonares, causando cor pulmonale agudo e colapso circulatório.'
  },
  'veias-cavas': {
    id: 'veias-cavas',
    nome: 'Veias Cavas (Superior e Inferior)',
    tipo: 'vaso',
    sangue: 'venoso',
    descricao: 'Grandes vasos venosos que trazem o sangue venoso sistêmico das regiões supra e infradiafragmáticas.',
    dicaBancada: 'A VCS desce verticalmente à direita da aorta; a VCI perfura o centro tendíneo do diafragma e desemboca no assoalho do átrio direito.',
    funcao: 'Retorno venoso sistêmico total para o átrio direito sem presença de válvulas parietais funcionais.',
    fisioterapia: 'A respiração profunda do fisioterapeuta aumenta o retorno venoso pelas cavas por pressão negativa intratorácica.'
  },
  'veias-pulmonares': {
    id: 'veias-pulmonares',
    nome: '4 Veias Pulmonares (2 Direitas e 2 Esquerdas)',
    tipo: 'vaso',
    sangue: 'arterial',
    descricao: 'Vasos venosos que desembocam no teto póstero-superior do Átrio Esquerdo trazendo sangue 100% arterializado.',
    dicaBancada: 'São 4 orifícios lisos no átrio esquerdo, sem válvulas. Únicas veias pós-natais que transportam sangue rico em oxigênio.',
    funcao: 'Conduzem o sangue recém-oxigenado nos capilares alveolares de volta ao coração esquerdo.',
    fisioterapia: 'A drenagem venosa pulmonar depende da complacência alveolar e ausência de congestão capilar retrógrada.'
  },
  'valva-mitral': {
    id: 'valva-mitral',
    nome: 'Valva Mitral (Atrioventricular Esquerda)',
    tipo: 'valva',
    sangue: 'arterial',
    descricao: 'Aparelho valvar bicúspide localizado no óstio atrioventricular esquerdo, com cúspides anterior e posterior.',
    dicaBancada: 'Possui apenas 2 cúspides presas a 2 músculos papilares do VE por cordas tendíneas robustas. Sua cúspide anterior continua-se com a parede da aorta.',
    funcao: 'Fecha-se no início da sístole ventricular impedindo o refluxo de sangue para o AE. Seu fechamento compõe B1.',
    fisioterapia: 'Auscultada no foco mitral (5º EICE na LMC - ápice cardíaco). Estenose mitral gera sobrecarga retrógrada nos capilares pulmonares.'
  },
  'valva-tricuspide': {
    id: 'valva-tricuspide',
    nome: 'Valva Tricúspide (Atrioventricular Direita)',
    tipo: 'valva',
    sangue: 'venoso',
    descricao: 'Aparelho valvar tricúspide com 3 cúspides (anterior, posterior e septal) no óstio atrioventricular direito.',
    dicaBancada: 'Possui 3 cúspides unidas por cordas tendíneas aos 3 músculos papilares do VD. A cúspide septal fixa-se diretamente no septo.',
    funcao: 'Impede o refluxo de sangue venoso do VD para o AD durante a sístole ventricular direita.',
    fisioterapia: 'Auscultada no 4º/5º EICE paraesternal. O sopro de insuficiência tricúspide intensifica-se com a inspiração (Sinal de Rivero-Carvallo).'
  },
  'septo-iv': {
    id: 'septo-iv',
    nome: 'Septo Interventricular',
    tipo: 'septo',
    sangue: 'misto',
    descricao: 'Parede muscular espessa que separa hermeticamente as cavidades do ventrículo direito e ventrículo esquerdo.',
    dicaBancada: 'Composto por uma porção muscular espessa (90% inferior) e uma porção membranosa delgada e lisa (10% superior junto à raiz da aorta).',
    funcao: 'Isola os regimes de pressão sistêmica (alta) e pulmonar (baixa) e participa ativamente da contração sistólica do VE.',
    fisioterapia: 'Comunicação Interventricular (CIV) permite shunt de sangue com alta pressão do VE para o VD, causando hiperfluxo pulmonar e sopro holossistólico em barra.'
  }
};

interface StepCirculation {
  ordem: number;
  estrutura: string;
  localizacao: string;
  tipoVasoOuCamara: string;
  tipoDeSangue: 'venoso' | 'arterial';
  gasPreponderante: string;
  pressaoAproximada: string;
  oQueAconteceAqui: string;
  dicaParaMemorizar: string;
}

const pequenaCirculacaoPassos: StepCirculation[] = [
  {
    ordem: 1,
    estrutura: 'Ventrículo Direito (VD)',
    localizacao: 'Câmara cardíaca anterior com parede muscular delgada (3-5 mm)',
    tipoVasoOuCamara: 'PONTO DE PARTIDA (Início da Pequena Circulação)',
    tipoDeSangue: 'venoso',
    gasPreponderante: 'Alto CO2 / Baixo O2',
    pressaoAproximada: '~25 mmHg na sístole',
    oQueAconteceAqui: 'O VD contrai-se (sístole ventricular) e impulsiona todo o volume de sangue venoso recebido do AD em direção ao tronco pulmonar.',
    dicaParaMemorizar: 'A Pequena Circulação SEMPRE começa no Ventrículo Direito!'
  },
  {
    ordem: 2,
    estrutura: 'Valva do Tronco Pulmonar (Semilunar Pulmonar)',
    localizacao: 'Na raiz do tronco pulmonar, no cone arterial',
    tipoVasoOuCamara: 'Valva semilunar de saída',
    tipoDeSangue: 'venoso',
    gasPreponderante: 'Alto CO2 / Baixo O2',
    pressaoAproximada: 'Abre quando a pressão do VD supera ~10-15 mmHg',
    oQueAconteceAqui: 'Abre-se com a pressão sistólica do VD permitindo a ejeção do fluxo; fecha-se na diástole para evitar refluxo (gerando o componente P2 de B2).',
    dicaParaMemorizar: 'É a valva mais anterior do coração.'
  },
  {
    ordem: 3,
    estrutura: 'Tronco Pulmonar',
    localizacao: 'Mediastino médio, anterior à aorta ascendente',
    tipoVasoOuCamara: 'Artéria elástica de condução',
    tipoDeSangue: 'venoso',
    gasPreponderante: 'Alto CO2 / Baixo O2',
    pressaoAproximada: '~25/10 mmHg',
    oQueAconteceAqui: 'Emerge do cone arterial, ascende obliquamente e bifurca-se sob a concavidade do arco aórtico nas duas artérias pulmonares.',
    dicaParaMemorizar: 'Apesar de ser ARTÉRIA, transporta sangue VENOSO!'
  },
  {
    ordem: 4,
    estrutura: 'Artérias Pulmonares Direita e Esquerda',
    localizacao: 'Hilos pulmonares direito e esquerdo',
    tipoVasoOuCamara: 'Artérias de distribuição intrapulmonar',
    tipoDeSangue: 'venoso',
    gasPreponderante: 'Alto CO2 / Baixo O2',
    pressaoAproximada: '~20-25 mmHg',
    oQueAconteceAqui: 'Penetram pelos hilos pulmonares e ramificam-se acompanhando a árvore brônquica (lobares, segmentares, subsegmentares e arteríolas).',
    dicaParaMemorizar: 'A artéria pulmonar direita passa por trás da aorta ascendente e da VCS.'
  },
  {
    ordem: 5,
    estrutura: 'Rede de Capilares Alveolares dos Pulmões (HEMATOSE)',
    localizacao: 'Paredes dos alvéolos pulmonares (membrana alvéolo-capilar)',
    tipoVasoOuCamara: 'Microcirculação alveolar (Troca Gasosa)',
    tipoDeSangue: 'arterial', // Mudança de fase!
    gasPreponderante: 'TRANSFORMAÇÃO: CO2 sai para o alvéolo e O2 entra no sangue!',
    pressaoAproximada: '~8-10 mmHg (baixa pressão para não extravasar líquido)',
    oQueAconteceAqui: 'MOMENTO CRUCIAL: O CO2 difunde-se do capilar para a luz do alvéolo (para ser expirado) e o O2 inspirado difunde-se para as hemácias, ligando-se à hemoglobina. O SANGUE TORNA-SE 100% ARTERIAL!',
    dicaParaMemorizar: 'HEMATOSE: o sangue entra azul (venoso) e sai vermelho vivo (arterial oxigenado).'
  },
  {
    ordem: 6,
    estrutura: 'Vênulas Pulmonares',
    localizacao: 'Septos interlobulares do parênquima pulmonar',
    tipoVasoOuCamara: 'Vênulas de confluência',
    tipoDeSangue: 'arterial',
    gasPreponderante: 'Alto O2 / Baixo CO2',
    pressaoAproximada: '~7-8 mmHg',
    oQueAconteceAqui: 'Recolhem o sangue recém-oxigenado dos capilares e confluem progressivamente em vasos de maior calibre.',
    dicaParaMemorizar: 'Correm separadas dos brônquios na periferia dos lóbulos.'
  },
  {
    ordem: 7,
    estrutura: '4 Veias Pulmonares (2 Direitas e 2 Esquerdas)',
    localizacao: 'Emergem dos hilos pulmonares em direção à parede posterior do coração',
    tipoVasoOuCamara: 'Veias condutoras de retorno',
    tipoDeSangue: 'arterial',
    gasPreponderante: 'Alto O2 / Baixo CO2',
    pressaoAproximada: '~5-8 mmHg',
    oQueAconteceAqui: 'Chegam aos pares ao teto póstero-lateral do Átrio Esquerdo. São desprovidas de válvulas parietais.',
    dicaParaMemorizar: 'PEGADINHA CLÁSSICA: São VEIAS, mas transportam sangue ARTERIAL oxigenado!'
  },
  {
    ordem: 8,
    estrutura: 'Átrio Esquerdo (AE)',
    localizacao: 'Câmara cardíaca posterior que forma a base do coração',
    tipoVasoOuCamara: 'PONTO FINAL (Término da Pequena Circulação)',
    tipoDeSangue: 'arterial',
    gasPreponderante: 'Alto O2 / Baixo CO2',
    pressaoAproximada: '~4-12 mmHg',
    oQueAconteceAqui: 'Recebe o sangue oxigenado e o direciona, através da valva mitral aberta na diástole, para dentro do Ventrículo Esquerdo. AQUI SE ENCERRA A PEQUENA CIRCULAÇÃO!',
    dicaParaMemorizar: 'A Pequena Circulação SEMPRE termina no Átrio Esquerdo!'
  }
];

const grandeCirculacaoPassos: StepCirculation[] = [
  {
    ordem: 1,
    estrutura: 'Ventrículo Esquerdo (VE)',
    localizacao: 'Câmara cardíaca cônica e espessa (8-12 mm) que forma o ápice cardíaco',
    tipoVasoOuCamara: 'PONTO DE PARTIDA (Início da Grande Circulação)',
    tipoDeSangue: 'arterial',
    gasPreponderante: 'Alto O2 / Baixo CO2',
    pressaoAproximada: '~120 mmHg na sístole',
    oQueAconteceAqui: 'Contração vigorosa (sístole ventricular esquerda) que gera altíssima pressão para impulsionar o débito cardíaco para todo o organismo.',
    dicaParaMemorizar: 'A Grande Circulação SEMPRE começa no Ventrículo Esquerdo!'
  },
  {
    ordem: 2,
    estrutura: 'Valva da Aorta (Semilunar Aórtica)',
    localizacao: 'No centro geométrico da base do coração, na raiz aórtica',
    tipoVasoOuCamara: 'Valva semilunar de saída',
    tipoDeSangue: 'arterial',
    gasPreponderante: 'Alto O2 / Baixo CO2',
    pressaoAproximada: 'Abre quando a pressão do VE supera ~80 mmHg',
    oQueAconteceAqui: 'Abre-se permitindo a ejeção do fluxo de sangue para a aorta; seu fechamento ao final da sístole produz o componente A2 da 2ª bulha (B2).',
    dicaParaMemorizar: 'Contém os óstios das artérias coronárias dentro de seus seios valvares.'
  },
  {
    ordem: 3,
    estrutura: 'Artéria Aorta (Ascendente, Arco e Descendente)',
    localizacao: 'Raiz no mediastino médio -> Arco no mediastino superior -> Tórax e Abdome',
    tipoVasoOuCamara: 'Principal artéria elástica do corpo humano',
    tipoDeSangue: 'arterial',
    gasPreponderante: 'Alto O2 / Baixo CO2',
    pressaoAproximada: '~120/80 mmHg',
    oQueAconteceAqui: 'Distribui sangue oxigenado para: 1) Coronárias (na raiz); 2) Tronco Braquiocefálico, Carótida E e Subclávia E (no arco); 3) Ramos parietais e viscerais torácicos e abdominais.',
    dicaParaMemorizar: 'Amortece a pressão pulsátil do coração graças às suas paredes altamente elásticas (Efeito Windkessel).'
  },
  {
    ordem: 4,
    estrutura: 'Artérias Musculares e Arteríolas Periféricas',
    localizacao: 'Distribuídas por toda a musculatura, vísceras, cérebro e extremidades',
    tipoVasoOuCamara: 'Vasos de distribuição e de resistência vascular periférica',
    tipoDeSangue: 'arterial',
    gasPreponderante: 'Alto O2 / Baixo CO2',
    pressaoAproximada: 'A pressão cai de ~80 mmHg para ~35 mmHg nas arteríolas',
    oQueAconteceAqui: 'As arteríolas contraem ou relaxam sua musculatura lisa em resposta a estímulos neurais e metabólicos, regulando a Resistência Periférica Total (RPT) e a Pressão Arterial Sistêmica.',
    dicaParaMemorizar: 'Arteríolas são as "torneiras" da circulação: controlam quanto sangue entra em cada leito tecidual.'
  },
  {
    ordem: 5,
    estrutura: 'Rede de Capilares Sistêmicos (PERFUSÃO TECIDUAL)',
    localizacao: 'Interstício de TODOS os tecidos e órgãos vivos do corpo humano',
    tipoVasoOuCamara: 'Microcirculação sistêmica (Trocas Metabólicas)',
    tipoDeSangue: 'venoso', // Mudança de fase!
    gasPreponderante: 'TRANSFORMAÇÃO: Entrega O2 e nutrientes; recolhe CO2 e metabólitos celulares!',
    pressaoAproximada: '~30 mmHg na extremidade arterial -> ~15 mmHg na extremidade venosa',
    oQueAconteceAqui: 'MOMENTO CRUCIAL: O O2 e a glicose saem do capilar e entram nas células para respiração celular mitocondrial. O CO2 e os metabólitos ácidos saem das células e entram no sangue. O SANGUE TORNA-SE VENOSO (DESOXIGENADO)!',
    dicaParaMemorizar: 'Na grande circulação, a troca tecidual faz o sangue perder O2 e ganhar CO2 (fica azul/venoso).'
  },
  {
    ordem: 6,
    estrutura: 'Vênulas e Veias Sistêmicas (com Válvulas Parietais)',
    localizacao: 'Membros superiores, inferiores, tronco, vísceras e crânio',
    tipoVasoOuCamara: 'Vasos de capacitância e retorno venoso',
    tipoDeSangue: 'venoso',
    gasPreponderante: 'Alto CO2 / Baixo O2',
    pressaoAproximada: '~10 a ~5 mmHg',
    oQueAconteceAqui: 'Conduzem o sangue venoso de volta ao coração, auxiliadas pela bomba muscular da panturrilha (coração periférico) e pelas válvulas venosas que impedem o refluxo para os pés.',
    dicaParaMemorizar: 'Armazenam cerca de 65-70% de todo o volume de sangue corporal em repouso.'
  },
  {
    ordem: 7,
    estrutura: 'Grandes Troncos Coletores: Veias Cavas (VCS, VCI) e Seio Coronário',
    localizacao: 'Deságuam na parede posterior do Átrio Direito',
    tipoVasoOuCamara: 'Grandes troncos venosos finais',
    tipoDeSangue: 'venoso',
    gasPreponderante: 'Alto CO2 / Baixo O2',
    pressaoAproximada: '~2 a ~6 mmHg (Pressão Venosa Central)',
    oQueAconteceAqui: '• VCS drena: cabeça, pescoço, MMSS e tórax.<br />• VCI drena: abdome, pelve e MMII.<br />• Seio Coronário drena: a própria parede do coração.',
    dicaParaMemorizar: 'NÃO há válvulas na junção das cavas com o átrio direito.'
  },
  {
    ordem: 8,
    estrutura: 'Átrio Direito (AD)',
    localizacao: 'Câmara cardíaca póstero-superior direita',
    tipoVasoOuCamara: 'PONTO FINAL (Término da Grande Circulação)',
    tipoDeSangue: 'venoso',
    gasPreponderante: 'Alto CO2 / Baixo O2',
    pressaoAproximada: '~0 a 5 mmHg',
    oQueAconteceAqui: 'Recebe a totalidade do retorno venoso sistêmico. Quando o AD enche, o sangue passa pela valva tricúspide para o VD, REINICIANDO O CICLO CARDÍACO. AQUI SE ENCERRA A GRANDE CIRCULAÇÃO!',
    dicaParaMemorizar: 'A Grande Circulação SEMPRE termina no Átrio Direito!'
  }
];

export const HeartInteractiveModel: React.FC = () => {
  // Navigation tab
  const [activeTab, setActiveTab] = useState<'animacao' | 'pequena' | 'grande' | 'comparativo' | 'anatomia'>('animacao');

  // Interactive anatomical model part
  const [selectedPartId, setSelectedPartId] = useState<string>('ad');

  // Step trackers
  const [pequenaCurrentStep, setPequenaCurrentStep] = useState<number>(0);
  const [grandeCurrentStep, setGrandeCurrentStep] = useState<number>(0);

  const selectedPart = heartParts[selectedPartId] || heartParts['ad'];

  const handlePartClick = (partId: string) => {
    setSelectedPartId(partId);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 sm:py-8 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold">
          <GitBranch className="w-3.5 h-3.5" /> Dinâmica Circulatória & Hemodinâmica · UFPB
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-display">
          Esquema da Circulação & Modelo Cardíaco
        </h1>
        <p className="text-sm text-slate-500 max-w-2xl">
          Visualize a <strong>animação interativa em tempo real</strong> de como o sangue percorre o corpo todo (Pequena e Grande Circulação), com pontos de hematose, perfusão tecidual e rota passo a passo.
        </p>
      </div>

      {/* Main Mode Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
        <button
          onClick={() => setActiveTab('animacao')}
          className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all ${
            activeTab === 'animacao'
              ? 'bg-gradient-to-r from-rose-600 to-rose-700 text-white shadow-xs ring-2 ring-rose-500/20'
              : 'text-slate-700 hover:text-slate-900 bg-white/70 hover:bg-white'
          }`}
        >
          <Play className="w-4 h-4 fill-current text-amber-300" />
          <span>Animação do Fluxo</span>
        </button>

        <button
          onClick={() => setActiveTab('pequena')}
          className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all ${
            activeTab === 'pequena'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Wind className="w-4 h-4" />
          <span>Pequena (Pulmonar)</span>
        </button>

        <button
          onClick={() => setActiveTab('grande')}
          className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all ${
            activeTab === 'grande'
              ? 'bg-rose-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Flame className="w-4 h-4" />
          <span>Grande (Sistêmica)</span>
        </button>

        <button
          onClick={() => setActiveTab('comparativo')}
          className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all ${
            activeTab === 'comparativo'
              ? 'bg-white text-slate-900 shadow-xs ring-1 ring-slate-200'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Layers className="w-4 h-4 text-rose-600" />
          <span>Comparativo Direto</span>
        </button>

        <button
          onClick={() => setActiveTab('anatomia')}
          className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all col-span-2 sm:col-span-1 ${
            activeTab === 'anatomia'
              ? 'bg-white text-slate-900 shadow-xs ring-1 ring-slate-200'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Activity className="w-4 h-4 text-rose-600" />
          <span>Câmaras & Valvas SVG</span>
        </button>
      </div>

      {/* TAB 0: ANIMATED CIRCULATION SIMULATOR */}
      {activeTab === 'animacao' && <CirculationAnimationPlayer />}

      {/* TAB 1: PEQUENA CIRCULAÇÃO (PULMONAR) */}
      {activeTab === 'pequena' && (
        <div className="space-y-6">
          {/* Header Summary Box */}
          <div className="bg-blue-50/80 rounded-2xl border border-blue-200 p-6 sm:p-7 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-blue-200/80 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
                  Circuito de Hematose (Baixa Pressão)
                </span>
                <h2 className="text-2xl font-bold text-blue-950 font-display mt-0.5">
                  Pequena Circulação (Circulação Pulmonar)
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-white text-blue-800 rounded-lg text-xs font-bold border border-blue-200 shadow-2xs">
                  Começa: Ventrículo Direito
                </span>
                <ArrowRight className="w-4 h-4 text-blue-500" />
                <span className="px-3 py-1 bg-white text-blue-800 rounded-lg text-xs font-bold border border-blue-200 shadow-2xs">
                  Termina: Átrio Esquerdo
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-blue-950 leading-relaxed">
              <strong>Finalidade Biológica:</strong> Levar todo o sangue venoso (rico em $CO_2$ e pobre em $O_2$) do coração até os alvéolos pulmonares para realizar a <strong>hematose</strong> (eliminar $CO_2$ e absorver $O_2$), retornando ao coração como sangue arterial oxigenado pronto para nutrir o corpo.
            </p>
          </div>

          {/* Step-by-Step Interactive Navigator */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display flex items-center gap-2">
                <GitBranch className="w-5 h-5 text-blue-600" />
                Trajeto Passo a Passo (Ordem Cronológica do Fluxo)
              </h3>
              <div className="flex items-center gap-2">
                <button
                  disabled={pequenaCurrentStep === 0}
                  onClick={() => setPequenaCurrentStep((p) => Math.max(0, p - 1))}
                  className="p-2 rounded-lg border border-slate-200 text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono font-bold text-slate-700">
                  {pequenaCurrentStep + 1} de {pequenaCirculacaoPassos.length}
                </span>
                <button
                  disabled={pequenaCurrentStep === pequenaCirculacaoPassos.length - 1}
                  onClick={() => setPequenaCurrentStep((p) => Math.min(pequenaCirculacaoPassos.length - 1, p + 1))}
                  className="p-2 rounded-lg border border-slate-200 text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Stepper track */}
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5">
              {pequenaCirculacaoPassos.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setPequenaCurrentStep(idx)}
                  className={`py-2 px-1 rounded-xl text-center text-xs font-bold transition-all border ${
                    pequenaCurrentStep === idx
                      ? 'bg-blue-600 text-white border-blue-600 shadow-xs ring-2 ring-blue-500/20'
                      : idx < 4
                      ? 'bg-blue-50 text-blue-700 border-blue-100 hover:border-blue-300'
                      : 'bg-rose-50 text-rose-700 border-rose-100 hover:border-rose-300'
                  }`}
                >
                  Passo {idx + 1}
                </button>
              ))}
            </div>

            {/* Current Step Highlighted Card */}
            {(() => {
              const current = pequenaCirculacaoPassos[pequenaCurrentStep];
              const isVenous = current.tipoDeSangue === 'venoso';

              return (
                <div
                  className={`p-6 rounded-2xl border space-y-4 transition-all ${
                    isVenous
                      ? 'bg-blue-50/50 border-blue-200 text-slate-800'
                      : 'bg-rose-50/50 border-rose-200 text-slate-800'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3 border-slate-200/60">
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-9 h-9 rounded-xl font-mono font-bold text-sm flex items-center justify-center shrink-0 ${
                          isVenous ? 'bg-blue-600 text-white' : 'bg-rose-600 text-white'
                        }`}
                      >
                        {current.ordem}º
                      </span>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                          {current.tipoVasoOuCamara}
                        </span>
                        <h4 className="text-xl font-bold text-slate-900">{current.estrutura}</h4>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2.5 py-1 rounded-md text-xs font-bold ${
                          isVenous ? 'bg-blue-100 text-blue-800' : 'bg-rose-100 text-rose-800'
                        }`}
                      >
                        Sangue {current.tipoDeSangue.toUpperCase()} ({current.gasPreponderante})
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-white rounded-xl border border-slate-200/80 space-y-1">
                      <span className="font-bold text-slate-700 block">Localização Anatômica:</span>
                      <p className="text-slate-600 leading-relaxed">{current.localizacao}</p>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-slate-200/80 space-y-1">
                      <span className="font-bold text-slate-700 block">Regime Pressórico:</span>
                      <p className="text-slate-600 leading-relaxed font-mono font-semibold">{current.pressaoAproximada}</p>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200/80 space-y-1.5 text-xs sm:text-sm">
                    <strong className="text-slate-900 block font-bold">O que acontece nesta etapa:</strong>
                    <p className="text-slate-700 leading-relaxed">{current.oQueAconteceAqui}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-950 text-xs flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                    <span><strong>Mnemônico / Dica de Ouro:</strong> {current.dicaParaMemorizar}</span>
                  </div>
                </div>
              );
            })()}

            {/* Complete Horizontal Flow Diagram */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Fluxograma Completo e Contínuo da Pequena Circulação:
              </span>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 overflow-x-auto text-xs font-semibold">
                <div className="flex items-center gap-2 min-w-[750px]">
                  <span className="px-3 py-1.5 rounded-lg bg-blue-600 text-white shrink-0">1. VD (Início)</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                  <span className="px-2.5 py-1 rounded-md bg-blue-100 text-blue-800 shrink-0">2. Valva Pulmonar</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                  <span className="px-2.5 py-1 rounded-md bg-blue-100 text-blue-800 shrink-0">3. Tronco Pulmonar</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                  <span className="px-2.5 py-1 rounded-md bg-blue-100 text-blue-800 shrink-0">4. Artérias Pulmonares</span>
                  <ArrowRight className="w-4 h-4 text-purple-400 shrink-0" />
                  <span className="px-3 py-1.5 rounded-lg bg-purple-600 text-white shrink-0 shadow-2xs">5. HEMATOSE ALVEOLAR</span>
                  <ArrowRight className="w-4 h-4 text-rose-400 shrink-0" />
                  <span className="px-2.5 py-1 rounded-md bg-rose-100 text-rose-800 shrink-0">6. Vênulas Pulmonares</span>
                  <ArrowRight className="w-4 h-4 text-rose-400 shrink-0" />
                  <span className="px-2.5 py-1 rounded-md bg-rose-100 text-rose-800 shrink-0">7. 4 Veias Pulmonares</span>
                  <ArrowRight className="w-4 h-4 text-rose-400 shrink-0" />
                  <span className="px-3 py-1.5 rounded-lg bg-rose-600 text-white shrink-0">8. AE (Fim)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: GRANDE CIRCULAÇÃO (SISTÊMICA) */}
      {activeTab === 'grande' && (
        <div className="space-y-6">
          {/* Header Summary Box */}
          <div className="bg-rose-50/80 rounded-2xl border border-rose-200 p-6 sm:p-7 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-rose-200/80 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-rose-700">
                  Circuito de Perfusão Corporal (Alta Pressão)
                </span>
                <h2 className="text-2xl font-bold text-rose-950 font-display mt-0.5">
                  Grande Circulação (Circulação Sistêmica)
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-white text-rose-800 rounded-lg text-xs font-bold border border-rose-200 shadow-2xs">
                  Começa: Ventrículo Esquerdo
                </span>
                <ArrowRight className="w-4 h-4 text-rose-500" />
                <span className="px-3 py-1 bg-white text-rose-800 rounded-lg text-xs font-bold border border-rose-200 shadow-2xs">
                  Termina: Átrio Direito
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-rose-950 leading-relaxed">
              <strong>Finalidade Biológica:</strong> Distribuir sangue arterial 100% oxigenado sob alta pressão (~120/80 mmHg) para todos os órgãos e tecidos do organismo (cérebro, coração, músculos, vísceras, pele), entregando oxigênio e nutrientes e recolhendo os metabólitos e $CO_2$ através das veias sistêmicas de volta ao coração direito.
            </p>
          </div>

          {/* Step-by-Step Interactive Navigator */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display flex items-center gap-2">
                <GitBranch className="w-5 h-5 text-rose-600" />
                Trajeto Passo a Passo (Ordem Cronológica do Fluxo)
              </h3>
              <div className="flex items-center gap-2">
                <button
                  disabled={grandeCurrentStep === 0}
                  onClick={() => setGrandeCurrentStep((p) => Math.max(0, p - 1))}
                  className="p-2 rounded-lg border border-slate-200 text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono font-bold text-slate-700">
                  {grandeCurrentStep + 1} de {grandeCirculacaoPassos.length}
                </span>
                <button
                  disabled={grandeCurrentStep === grandeCirculacaoPassos.length - 1}
                  onClick={() => setGrandeCurrentStep((p) => Math.min(grandeCirculacaoPassos.length - 1, p + 1))}
                  className="p-2 rounded-lg border border-slate-200 text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Stepper track */}
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5">
              {grandeCirculacaoPassos.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setGrandeCurrentStep(idx)}
                  className={`py-2 px-1 rounded-xl text-center text-xs font-bold transition-all border ${
                    grandeCurrentStep === idx
                      ? 'bg-rose-600 text-white border-rose-600 shadow-xs ring-2 ring-rose-500/20'
                      : idx < 4
                      ? 'bg-rose-50 text-rose-700 border-rose-100 hover:border-rose-300'
                      : 'bg-blue-50 text-blue-700 border-blue-100 hover:border-blue-300'
                  }`}
                >
                  Passo {idx + 1}
                </button>
              ))}
            </div>

            {/* Current Step Highlighted Card */}
            {(() => {
              const current = grandeCirculacaoPassos[grandeCurrentStep];
              const isArterial = current.tipoDeSangue === 'arterial';

              return (
                <div
                  className={`p-6 rounded-2xl border space-y-4 transition-all ${
                    isArterial
                      ? 'bg-rose-50/50 border-rose-200 text-slate-800'
                      : 'bg-blue-50/50 border-blue-200 text-slate-800'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3 border-slate-200/60">
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-9 h-9 rounded-xl font-mono font-bold text-sm flex items-center justify-center shrink-0 ${
                          isArterial ? 'bg-rose-600 text-white' : 'bg-blue-600 text-white'
                        }`}
                      >
                        {current.ordem}º
                      </span>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                          {current.tipoVasoOuCamara}
                        </span>
                        <h4 className="text-xl font-bold text-slate-900">{current.estrutura}</h4>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2.5 py-1 rounded-md text-xs font-bold ${
                          isArterial ? 'bg-rose-100 text-rose-800' : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        Sangue {current.tipoDeSangue.toUpperCase()} ({current.gasPreponderante})
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-white rounded-xl border border-slate-200/80 space-y-1">
                      <span className="font-bold text-slate-700 block">Localização Anatômica:</span>
                      <p className="text-slate-600 leading-relaxed">{current.localizacao}</p>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-slate-200/80 space-y-1">
                      <span className="font-bold text-slate-700 block">Regime Pressórico:</span>
                      <p className="text-slate-600 leading-relaxed font-mono font-semibold">{current.pressaoAproximada}</p>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200/80 space-y-1.5 text-xs sm:text-sm">
                    <strong className="text-slate-900 block font-bold">O que acontece nesta etapa:</strong>
                    <p
                      className="text-slate-700 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: current.oQueAconteceAqui }}
                    />
                  </div>

                  <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-950 text-xs flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                    <span><strong>Mnemônico / Dica de Ouro:</strong> {current.dicaParaMemorizar}</span>
                  </div>
                </div>
              );
            })()}

            {/* Complete Horizontal Flow Diagram */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Fluxograma Completo e Contínuo da Grande Circulação:
              </span>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 overflow-x-auto text-xs font-semibold">
                <div className="flex items-center gap-2 min-w-[780px]">
                  <span className="px-3 py-1.5 rounded-lg bg-rose-600 text-white shrink-0">1. VE (Início)</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                  <span className="px-2.5 py-1 rounded-md bg-rose-100 text-rose-800 shrink-0">2. Valva Aórtica</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                  <span className="px-2.5 py-1 rounded-md bg-rose-100 text-rose-800 shrink-0">3. Artéria Aorta</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                  <span className="px-2.5 py-1 rounded-md bg-rose-100 text-rose-800 shrink-0">4. Artérias e Arteríolas</span>
                  <ArrowRight className="w-4 h-4 text-purple-400 shrink-0" />
                  <span className="px-3 py-1.5 rounded-lg bg-purple-600 text-white shrink-0 shadow-2xs">5. PERFUSÃO TECIDUAL</span>
                  <ArrowRight className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="px-2.5 py-1 rounded-md bg-blue-100 text-blue-800 shrink-0">6. Vênulas e Veias</span>
                  <ArrowRight className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="px-2.5 py-1 rounded-md bg-blue-100 text-blue-800 shrink-0">7. Cavas e Seio Coronário</span>
                  <ArrowRight className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="px-3 py-1.5 rounded-lg bg-blue-600 text-white shrink-0">8. AD (Fim)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: COMPARATIVO DIRETO PEQUENA VS GRANDE */}
      {activeTab === 'comparativo' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="p-6 border-b border-slate-200 bg-slate-50/50">
              <h3 className="text-lg font-bold text-slate-900 font-display">
                Tabela Comparativa Oficial: Pequena Circulação vs. Grande Circulação
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Critérios cobrados em provas teóricas e práticas da UFPB e na fisioterapia cardiovascular
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider text-[11px] border-b border-slate-200">
                  <tr>
                    <th className="p-3.5 sm:p-4">Parâmetro Anatomo-Fisiológico</th>
                    <th className="p-3.5 sm:p-4 text-blue-700 bg-blue-50/50">Pequena Circulação (Pulmonar)</th>
                    <th className="p-3.5 sm:p-4 text-rose-700 bg-rose-50/50">Grande Circulação (Sistêmica)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">1. Onde Começa (Ponto de Partida)</td>
                    <td className="p-3.5 sm:p-4 text-blue-900 font-bold bg-blue-50/20">Ventrículo Direito (VD)</td>
                    <td className="p-3.5 sm:p-4 text-rose-900 font-bold bg-rose-50/20">Ventrículo Esquerdo (VE)</td>
                  </tr>

                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">2. Vaso de Saída do Coração</td>
                    <td className="p-3.5 sm:p-4 bg-blue-50/20">Tronco Pulmonar (divide-se em Artérias Pulmonares D e E)</td>
                    <td className="p-3.5 sm:p-4 bg-rose-50/20">Artéria Aorta (Ascendente, Arco e Descendente)</td>
                  </tr>

                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">3. Tipo de Sangue nas Artérias</td>
                    <td className="p-3.5 sm:p-4 text-blue-700 font-semibold bg-blue-50/20">
                      VENOSO (Desoxigenado, rico em CO2)
                    </td>
                    <td className="p-3.5 sm:p-4 text-rose-700 font-semibold bg-rose-50/20">
                      ARTERIAL (Oxigenado, rico em O2)
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">4. Local da Troca</td>
                    <td className="p-3.5 sm:p-4 bg-blue-50/20">
                      Capilares alveolares dos pulmões (Hematose)
                    </td>
                    <td className="p-3.5 sm:p-4 bg-rose-50/20">
                      Capilares sistêmicos em todos os tecidos e órgãos
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">5. Tipo de Sangue nas Veias</td>
                    <td className="p-3.5 sm:p-4 text-rose-700 font-semibold bg-blue-50/20">
                      ARTERIAL (Oxigenado após a hematose)
                    </td>
                    <td className="p-3.5 sm:p-4 text-blue-700 font-semibold bg-rose-50/20">
                      VENOSO (Desoxigenado após perfundir os tecidos)
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">6. Vasos de Retorno ao Coração</td>
                    <td className="p-3.5 sm:p-4 bg-blue-50/20">
                      4 Veias Pulmonares (2 direitas e 2 esquerdas)
                    </td>
                    <td className="p-3.5 sm:p-4 bg-rose-50/20">
                      Veia Cava Superior, Veia Cava Inferior e Seio Coronário
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">7. Onde Termina (Ponto Final)</td>
                    <td className="p-3.5 sm:p-4 text-blue-900 font-bold bg-blue-50/20">Átrio Esquerdo (AE)</td>
                    <td className="p-3.5 sm:p-4 text-rose-900 font-bold bg-rose-50/20">Átrio Direito (AD)</td>
                  </tr>

                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">8. Regime Pressórico / Resistência</td>
                    <td className="p-3.5 sm:p-4 bg-blue-50/20">
                      BAIXA PRESSÃO (~25/10 mmHg) · Baixa resistência vascular
                    </td>
                    <td className="p-3.5 sm:p-4 bg-rose-50/20">
                      ALTA PRESSÃO (~120/80 mmHg) · Alta resistência periférica total (RPT)
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">9. Relevância em Fisioterapia</td>
                    <td className="p-3.5 sm:p-4 bg-blue-50/20">
                      DPOC, fibrose pulmonar e embolia pulmonar geram Hipertensão Pulmonar e Cor Pulmonale (falência do VD).
                    </td>
                    <td className="p-3.5 sm:p-4 bg-rose-50/20">
                      Hipertensão Arterial Sistêmica, infarto do miocárdio, insuficiência cardíaca esquerda e reabilitação pós-IAM.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: INTERACTIVE ANATOMICAL SVG HEART MODEL */}
      {activeTab === 'anatomia' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* SVG Diagram (Left 6 cols) */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col items-center justify-center space-y-4">
            <div className="w-full flex items-center justify-between text-xs font-semibold text-slate-500 border-b pb-2">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span> Sangue Venoso (Direito)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span> Sangue Arterial (Esquerdo)
              </span>
            </div>

            <div className="relative w-full max-w-[340px] aspect-square flex items-center justify-center">
              <svg viewBox="0 0 400 400" className="w-full h-full max-h-[360px] drop-shadow-sm select-none">
                <defs>
                  <linearGradient id="gradVenous" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#1d4ed8" />
                  </linearGradient>
                  <linearGradient id="gradArterial" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f43f5e" />
                    <stop offset="100%" stopColor="#be123c" />
                  </linearGradient>
                </defs>

                {/* Superior Vena Cava */}
                <g
                  className="cursor-pointer transition-transform hover:opacity-90"
                  onClick={() => handlePartClick('veias-cavas')}
                >
                  <path
                    d="M100,30 L130,30 L130,120 L100,120 Z"
                    fill="url(#gradVenous)"
                    stroke={selectedPartId === 'veias-cavas' ? '#1e3a8a' : '#2563eb'}
                    strokeWidth={selectedPartId === 'veias-cavas' ? '3' : '1.5'}
                  />
                  <text x="115" y="65" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">
                    VCS
                  </text>
                </g>

                {/* Inferior Vena Cava */}
                <g
                  className="cursor-pointer transition-transform hover:opacity-90"
                  onClick={() => handlePartClick('veias-cavas')}
                >
                  <path
                    d="M95,300 L125,300 L125,370 L95,370 Z"
                    fill="url(#gradVenous)"
                    stroke={selectedPartId === 'veias-cavas' ? '#1e3a8a' : '#2563eb'}
                    strokeWidth={selectedPartId === 'veias-cavas' ? '3' : '1.5'}
                  />
                  <text x="110" y="340" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">
                    VCI
                  </text>
                </g>

                {/* Aorta Arch and Ascending */}
                <g
                  className="cursor-pointer transition-transform hover:opacity-90"
                  onClick={() => handlePartClick('aorta')}
                >
                  <path
                    d="M185,130 C185,50 240,40 260,80 C270,100 270,160 265,180 L235,180 C240,160 240,110 230,95 C220,80 205,80 205,130 Z"
                    fill="url(#gradArterial)"
                    stroke={selectedPartId === 'aorta' ? '#881337' : '#e11d48'}
                    strokeWidth={selectedPartId === 'aorta' ? '3' : '1.5'}
                  />
                  {/* 3 branches of aortic arch */}
                  <rect x="220" y="25" width="10" height="30" fill="url(#gradArterial)" rx="2" />
                  <rect x="236" y="25" width="9" height="32" fill="url(#gradArterial)" rx="2" />
                  <rect x="251" y="30" width="9" height="30" fill="url(#gradArterial)" rx="2" />
                  <text x="240" y="115" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">
                    Aorta
                  </text>
                </g>

                {/* Pulmonary Trunk */}
                <g
                  className="cursor-pointer transition-transform hover:opacity-90"
                  onClick={() => handlePartClick('tronco-pulmonar')}
                >
                  <path
                    d="M165,160 L195,160 L215,90 L170,90 Z"
                    fill="url(#gradVenous)"
                    stroke={selectedPartId === 'tronco-pulmonar' ? '#1e3a8a' : '#2563eb'}
                    strokeWidth={selectedPartId === 'tronco-pulmonar' ? '3' : '1.5'}
                  />
                  <path d="M170,90 L140,80 L145,65 L180,75 Z" fill="url(#gradVenous)" />
                  <path d="M210,90 L245,85 L245,70 L205,75 Z" fill="url(#gradVenous)" />
                  <text x="188" y="130" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">
                    Tr. Pulmonar
                  </text>
                </g>

                {/* Right Atrium (AD) */}
                <g
                  className="cursor-pointer transition-transform hover:opacity-90"
                  onClick={() => handlePartClick('ad')}
                >
                  <path
                    d="M80,120 Q60,180 80,240 L150,240 L150,120 Z"
                    fill="#60a5fa"
                    stroke={selectedPartId === 'ad' ? '#1e3a8a' : '#3b82f6'}
                    strokeWidth={selectedPartId === 'ad' ? '3.5' : '1.5'}
                  />
                  <text x="110" y="180" textAnchor="middle" fill="#1e3a8a" fontSize="13" fontWeight="bold">
                    Átrio D. (AD)
                  </text>
                </g>

                {/* Left Atrium (AE) */}
                <g
                  className="cursor-pointer transition-transform hover:opacity-90"
                  onClick={() => handlePartClick('ae')}
                >
                  <path
                    d="M235,140 L310,140 Q330,190 310,240 L235,240 Z"
                    fill="#fb7185"
                    stroke={selectedPartId === 'ae' ? '#881337' : '#f43f5e'}
                    strokeWidth={selectedPartId === 'ae' ? '3.5' : '1.5'}
                  />
                  <text x="275" y="180" textAnchor="middle" fill="#881337" fontSize="13" fontWeight="bold">
                    Átrio E. (AE)
                  </text>
                </g>

                {/* Pulmonary Veins opening in AE */}
                <g
                  className="cursor-pointer"
                  onClick={() => handlePartClick('veias-pulmonares')}
                >
                  <circle cx="320" cy="155" r="7" fill="#e11d48" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="320" cy="175" r="7" fill="#e11d48" stroke="#ffffff" strokeWidth="1.5" />
                  <text x="350" y="170" fill="#9f1239" fontSize="8" fontWeight="bold">
                    Veias Pulm.
                  </text>
                </g>

                {/* Tricuspid Valve Zone */}
                <g
                  className="cursor-pointer"
                  onClick={() => handlePartClick('valva-tricuspide')}
                >
                  <line x1="80" y1="240" x2="165" y2="240" stroke="#1d4ed8" strokeWidth="3" strokeDasharray="3,3" />
                  <text x="122" y="235" textAnchor="middle" fill="#1e40af" fontSize="9" fontWeight="bold">
                    Valva Tricúspide
                  </text>
                </g>

                {/* Mitral Valve Zone */}
                <g
                  className="cursor-pointer"
                  onClick={() => handlePartClick('valva-mitral')}
                >
                  <line x1="220" y1="240" x2="310" y2="240" stroke="#be123c" strokeWidth="3" strokeDasharray="3,3" />
                  <text x="265" y="235" textAnchor="middle" fill="#9f1239" fontSize="9" fontWeight="bold">
                    Valva Mitral
                  </text>
                </g>

                {/* Interventricular Septum */}
                <g
                  className="cursor-pointer"
                  onClick={() => handlePartClick('septo-iv')}
                >
                  <path
                    d="M175,240 L195,240 L190,370 L170,370 Z"
                    fill="#cbd5e1"
                    stroke={selectedPartId === 'septo-iv' ? '#0f172a' : '#94a3b8'}
                    strokeWidth={selectedPartId === 'septo-iv' ? '3' : '1.5'}
                  />
                  <text x="182" y="300" textAnchor="middle" fill="#334155" fontSize="8" fontWeight="bold" transform="rotate(-90 182 300)">
                    Septo IV
                  </text>
                </g>

                {/* Right Ventricle (VD) */}
                <g
                  className="cursor-pointer transition-transform hover:opacity-90"
                  onClick={() => handlePartClick('vd')}
                >
                  <path
                    d="M80,244 L165,244 L165,350 Q110,360 80,310 Z"
                    fill="#93c5fd"
                    stroke={selectedPartId === 'vd' ? '#1e3a8a' : '#3b82f6'}
                    strokeWidth={selectedPartId === 'vd' ? '3.5' : '1.5'}
                  />
                  <text x="120" y="295" textAnchor="middle" fill="#1e3a8a" fontSize="13" fontWeight="bold">
                    Ventrículo D.
                  </text>
                  <text x="120" y="310" textAnchor="middle" fill="#1d4ed8" fontSize="9">
                    (Fino 3-5mm)
                  </text>
                </g>

                {/* Left Ventricle (VE) */}
                <g
                  className="cursor-pointer transition-transform hover:opacity-90"
                  onClick={() => handlePartClick('ve')}
                >
                  <path
                    d="M200,244 L310,244 Q320,310 220,380 L200,350 Z"
                    fill="#fda4af"
                    stroke={selectedPartId === 've' ? '#881337' : '#f43f5e'}
                    strokeWidth={selectedPartId === 've' ? '3.5' : '1.5'}
                  />
                  {/* Thick outer myocardium ring indication */}
                  <path
                    d="M202,350 L220,380 Q325,320 310,244"
                    fill="none"
                    stroke="#be123c"
                    strokeWidth="8"
                    opacity="0.3"
                  />
                  <text x="255" y="295" textAnchor="middle" fill="#881337" fontSize="13" fontWeight="bold">
                    Ventrículo E.
                  </text>
                  <text x="255" y="310" textAnchor="middle" fill="#9f1239" fontSize="9">
                    (Espesso 8-12mm / Ápice)
                  </text>
                </g>

                {/* Apex Marker */}
                <circle cx="220" cy="380" r="5" fill="#e11d48" stroke="#ffffff" strokeWidth="1.5" />
                <text x="220" y="396" textAnchor="middle" fill="#be123c" fontSize="9" fontWeight="bold">
                  Ápice Cardíaco
                </text>
              </svg>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 w-full pt-1">
              <span>Toque nas câmaras para explorar</span>
              <span className="font-mono">Pequena vs Grande Circulação</span>
            </div>
          </div>

          {/* Selected Part Details (Right 6 cols) */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div>
                <span
                  className={`text-xs font-bold uppercase tracking-widest ${
                    selectedPart.sangue === 'arterial'
                      ? 'text-rose-600'
                      : selectedPart.sangue === 'venoso'
                      ? 'text-blue-600'
                      : 'text-amber-600'
                  }`}
                >
                  {selectedPart.tipo} · Sangue {selectedPart.sangue}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display mt-0.5">
                  {selectedPart.nome}
                </h2>
              </div>

              <button
                onClick={() => playHeartSound('both', 1.0)}
                title="Ouvir som de contração"
                className="p-2 text-rose-600 bg-rose-50 hover:bg-rose-100 rounded-xl transition-colors"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>

            {/* Description */}
            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {selectedPart.descricao}
            </div>

            {/* Laboratory Bench Tip */}
            <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200/80 space-y-1.5 text-xs">
              <span className="font-bold text-rose-800 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-rose-600 shrink-0" />
                Identificação na Peça / Imagem da Prova Prática:
              </span>
              <p className="text-slate-800 leading-relaxed">{selectedPart.dicaBancada}</p>
            </div>

            {/* Hemodynamic Function */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1 text-xs">
              <span className="font-bold text-slate-800 flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-blue-600 shrink-0" />
                Função Hemodinâmica Direta:
              </span>
              <p className="text-slate-600 leading-relaxed">{selectedPart.funcao}</p>
            </div>

            {/* Physiotherapy relevance */}
            <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80 space-y-1 text-xs">
              <span className="font-bold text-emerald-800 flex items-center gap-1.5">
                <Info className="w-4 h-4 text-emerald-600 shrink-0" />
                Relevância em Fisioterapia UFPB:
              </span>
              <p className="text-emerald-950 leading-relaxed">{selectedPart.fisioterapia}</p>
            </div>

            {/* Quick Select Buttons */}
            <div className="pt-2 space-y-2">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                Explorar outras estruturas:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {Object.values(heartParts).map((p) => (
                  <button
                    key={p.id}
                    onClick={() => handlePartClick(p.id)}
                    className={`px-2.5 py-1 text-xs rounded-lg border transition-all ${
                      selectedPartId === p.id
                        ? 'border-rose-600 bg-rose-50 text-rose-700 font-bold'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    {p.nome.split('(')[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
