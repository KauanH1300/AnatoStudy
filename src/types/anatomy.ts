export type AnatomicalCategory = 'coração' | 'vasos' | 'conducao' | 'clinica';

export interface Flashcard {
  id: number;
  categoria: AnatomicalCategory;
  pergunta: string;
  resposta: string;
  dica_pratica: string;
  relacao_sintopica?: string;
  funcao_hemodinamica?: string;
  aplicacao_fisioterapia?: string;
  tags: string[];
}

export interface QuizQuestion {
  id: number;
  categoria: AnatomicalCategory;
  topico: string;
  pergunta: string;
  opcoes: string[];
  respostaCorretaIndex: number;
  explicacao: string;
  dicaPratica: string;
  aplicacaoClinica?: string;
  dificuldade: 'Fácil' | 'Média' | 'Difícil';
}

export interface PracticalGuideTopic {
  id: string;
  titulo: string;
  subtitulo: string;
  categoria: string;
  conceitoChave: string;
  diferenciaisBancada: {
    criterio: string;
    estruturaA: string;
    estruturaB: string;
    comoAvaliarNoCadaver: string;
  }[];
  passoAPassoIdentificacao: string[];
  pontosDeConfusao: {
    armadilha: string;
    comoDesatar: string;
  }[];
  relevanciaFisioterapia: string;
}

export interface AuscultationFocus {
  id: string;
  nome: string;
  localizacaoAnatomica: string;
  posicionamentoEstetoscopio: string;
  valvaCorrespondente: string;
  caracteristicaBulha: string;
  aplicacaoFisioterapia: string;
  coordenadasTorax: { x: number; y: number }; // percentage on SVG chest
}

export interface PulsePoint {
  id: string;
  nome: string;
  arteria: string;
  localizacaoPalpacao: string;
  dicaPratica: string;
  relevanciaClinica: string;
  lado: 'Membro Superior' | 'Membro Inferior' | 'Cabeça/Pescoço';
}
