import React, { useState, useMemo } from 'react';
import { QuizQuestion, AnatomicalCategory } from '../types/anatomy';
import {
  CheckCircle,
  XCircle,
  HelpCircle,
  RotateCcw,
  Award,
  ChevronRight,
  Sparkles,
  BookOpen,
  Filter,
  Check,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  Stethoscope
} from 'lucide-react';

interface QuizViewProps {
  questions: QuizQuestion[];
}

export const QuizView: React.FC<QuizViewProps> = ({ questions }) => {
  // Quiz configuration states
  const [quizState, setQuizState] = useState<'setup' | 'active' | 'result'>('setup');
  const [questionCount, setQuestionCount] = useState<number>(15);
  const [selectedCategory, setSelectedCategory] = useState<string>('todas');

  // Active quiz session states
  const [sessionQuestions, setSessionQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [userAnswers, setUserAnswers] = useState<{ [questionId: number]: number }>({});
  const [reviewMistakesOnly, setReviewMistakesOnly] = useState<boolean>(false);

  // Initialize and shuffle quiz session
  const startQuiz = (count: number, category: string) => {
    let pool = [...questions];
    if (category !== 'todas') {
      pool = pool.filter((q) => q.categoria === category);
    }

    // Fisher-Yates shuffle
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    const selected = pool.slice(0, Math.min(count, pool.length));
    setSessionQuestions(selected);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setUserAnswers({});
    setReviewMistakesOnly(false);
    setQuizState('active');
  };

  const currentQuestion = sessionQuestions[currentIndex];

  const handleSelectOption = (index: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(index);
  };

  const handleConfirmAnswer = () => {
    if (selectedOption === null || !currentQuestion) return;
    setIsAnswerSubmitted(true);
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: selectedOption,
    }));
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < sessionQuestions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setQuizState('result');
    }
  };

  // Calculations for results
  const score = useMemo(() => {
    let correct = 0;
    sessionQuestions.forEach((q) => {
      if (userAnswers[q.id] === q.respostaCorretaIndex) {
        correct++;
      }
    });
    return correct;
  }, [sessionQuestions, userAnswers]);

  const percentage = sessionQuestions.length > 0 ? Math.round((score / sessionQuestions.length) * 100) : 0;

  const mistakesList = useMemo(() => {
    return sessionQuestions.filter((q) => userAnswers[q.id] !== q.respostaCorretaIndex);
  }, [sessionQuestions, userAnswers]);

  // Render Setup Screen
  if (quizState === 'setup') {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 font-display">
            Simulador de Prova Teórico-Prática
          </h1>
          <p className="text-sm text-slate-500 max-w-lg mx-auto">
            Teste seu domínio sobre a anatomia do sistema circulatório, câmaras cardíacas, valvas, vasos da base e
            aplicações em Fisioterapia da UFPB.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
          {/* Question Count Selector */}
          <div className="space-y-3">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Quantidade de Questões
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[10, 25, 50, 100].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setQuestionCount(num)}
                  className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold border transition-all ${
                    questionCount === num
                      ? 'border-rose-600 bg-rose-50/70 text-rose-700 shadow-xs ring-2 ring-rose-500/20'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                  }`}
                >
                  {num === 100 ? 'Todas (100 Qs)' : `${num} Questões`}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div className="space-y-3">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Foco Temático
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                { id: 'todas', label: 'Todos os Tópicos' },
                { id: 'coração', label: 'Anatomia do Coração' },
                { id: 'vasos', label: 'Vasos Sanguíneos' },
                { id: 'conducao', label: 'Ciclo & Ausculta' },
                { id: 'clinica', label: 'Clínica & Patologia' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`py-2.5 px-3 rounded-xl text-xs font-semibold text-left border transition-all ${
                    selectedCategory === cat.id
                      ? 'border-rose-600 bg-rose-50/70 text-rose-700 shadow-xs'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Exam info callout */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-600 space-y-1.5">
            <div className="flex items-center gap-2 font-semibold text-slate-800">
              <Sparkles className="w-4 h-4 text-rose-600" />
              <span>Garantia de Não-Repetição:</span>
            </div>
            <p>
              O simulador aplica algoritmo de embaralhamento pseudo-aleatório a cada tentativa, garantindo que
              a ordem das perguntas e alternativas mude para fixar o aprendizado profundo.
            </p>
          </div>

          {/* Start Button */}
          <button
            onClick={() => startQuiz(questionCount, selectedCategory)}
            className="w-full py-3.5 px-4 bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm rounded-xl shadow-sm shadow-rose-200 transition-all active:scale-[0.99] flex items-center justify-center gap-2"
          >
            Iniciar Simulado Agora <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // Render Result Screen
  if (quizState === 'result') {
    const listToDisplay = reviewMistakesOnly ? mistakesList : sessionQuestions;

    return (
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
        {/* Results Banner */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 text-center space-y-4 shadow-sm">
          <div className="w-16 h-16 mx-auto rounded-full bg-rose-50 text-rose-600 flex items-center justify-center">
            <Award className="w-8 h-8" />
          </div>

          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Resultado do Simulado
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 font-display mt-1">
              {score} de {sessionQuestions.length} acertos ({percentage}%)
            </h2>
          </div>

          <p className="text-sm text-slate-600 max-w-md mx-auto">
            {percentage >= 85
              ? 'Desempenho excelente! Você domina com segurança as estruturas anatômicas e relações sintópicas para a prova da UFPB.'
              : percentage >= 65
              ? 'Bom rendimento! Revise os pontos onde houve dúvida para garantir nota máxima nas peças práticas de bancada.'
              : 'Recomendamos revisar os flashcards e o guia prático de bancada antes de tentar um novo simulado.'}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => startQuiz(questionCount, selectedCategory)}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" /> Repetir com Novas Perguntas
            </button>
            <button
              onClick={() => setQuizState('setup')}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-all"
            >
              Configurar Novo Simulado
            </button>
          </div>
        </div>

        {/* Detailed Review Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900 font-display">
              Gabarito & Revisão Detalhada
            </h3>

            {mistakesList.length > 0 && (
              <button
                onClick={() => setReviewMistakesOnly(!reviewMistakesOnly)}
                className={`text-xs font-medium px-3 py-1.5 rounded-lg border transition-colors ${
                  reviewMistakesOnly
                    ? 'bg-rose-50 text-rose-700 border-rose-200'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                }`}
              >
                {reviewMistakesOnly
                  ? `Mostrando ${mistakesList.length} erros (Ver todas)`
                  : `Filtrar apenas erros (${mistakesList.length})`}
              </button>
            )}
          </div>

          <div className="space-y-4">
            {listToDisplay.map((q, idx) => {
              const userAnswer = userAnswers[q.id];
              const isCorrect = userAnswer === q.respostaCorretaIndex;

              return (
                <div
                  key={q.id}
                  className={`p-5 rounded-2xl border transition-all bg-white ${
                    isCorrect ? 'border-emerald-200' : 'border-rose-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <span className="font-mono font-bold text-slate-600">#{idx + 1}</span>
                        <span aria-hidden="true">·</span>
                        <span className="capitalize">{q.categoria}</span>
                        <span aria-hidden="true">·</span>
                        <span>{q.topico}</span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">{q.pergunta}</h4>
                    </div>

                    <div className="shrink-0">
                      {isCorrect ? (
                        <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
                          <CheckCircle className="w-3.5 h-3.5" /> Correto
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-xs font-bold text-rose-600 bg-rose-50 px-2 py-1 rounded-md">
                          <XCircle className="w-3.5 h-3.5" /> Incorreto
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Options breakdown */}
                  <div className="mt-3 space-y-1.5">
                    {q.opcoes.map((opt, optIdx) => {
                      const isOptionCorrect = optIdx === q.respostaCorretaIndex;
                      const isOptionSelected = optIdx === userAnswer;

                      let itemStyle = 'bg-slate-50 text-slate-700 border-slate-100';
                      if (isOptionCorrect) {
                        itemStyle = 'bg-emerald-50 text-emerald-900 font-semibold border-emerald-300';
                      } else if (isOptionSelected) {
                        itemStyle = 'bg-rose-50 text-rose-900 line-through border-rose-300';
                      }

                      return (
                        <div
                          key={optIdx}
                          className={`p-2.5 text-xs rounded-lg border flex items-center justify-between ${itemStyle}`}
                        >
                          <span>{opt}</span>
                          {isOptionCorrect && (
                            <span className="text-[11px] font-bold text-emerald-700 shrink-0 ml-2">
                              ✓ Resposta Oficial
                            </span>
                          )}
                          {isOptionSelected && !isOptionCorrect && (
                            <span className="text-[11px] font-bold text-rose-700 shrink-0 ml-2">
                              ✗ Sua Escolha
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation card */}
                  <div className="mt-3 p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs text-slate-700 space-y-1.5">
                    <p className="leading-relaxed">
                      <span className="font-bold text-slate-900">Explicação: </span>
                      {q.explicacao}
                    </p>
                    <p className="leading-relaxed text-rose-700 bg-rose-50/50 p-2 rounded-lg border border-rose-100">
                      <span className="font-bold">Dica de Bancada / Mnemônica: </span>
                      {q.dicaPratica}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Active Quiz Question Interface
  return (
    <div className="max-w-3xl mx-auto px-4 py-6 sm:py-8 space-y-6">
      {/* Quiz Header & Progress Bar */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800">
              Questão {currentIndex + 1} de {sessionQuestions.length}
            </span>
            <span aria-hidden="true">·</span>
            <span className="capitalize text-rose-600 font-semibold">{currentQuestion?.categoria}</span>
            <span aria-hidden="true">·</span>
            <span>{currentQuestion?.topico}</span>
          </div>

          <span className="font-mono tabular-nums text-slate-600">
            {Math.round(((currentIndex + 1) / sessionQuestions.length) * 100)}%
          </span>
        </div>

        {/* Clean progress bar */}
        <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-rose-600 transition-all duration-300 rounded-full"
            style={{ width: `${((currentIndex + 1) / sessionQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      {currentQuestion && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug font-display">
            {currentQuestion.pergunta}
          </h2>

          {/* Options */}
          <div className="space-y-2.5">
            {currentQuestion.opcoes.map((opcao, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrectAnswer = idx === currentQuestion.respostaCorretaIndex;

              let cardStyle =
                'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50/50';

              if (isAnswerSubmitted) {
                if (isCorrectAnswer) {
                  cardStyle = 'border-emerald-500 bg-emerald-50/80 text-emerald-950 font-semibold';
                } else if (isSelected) {
                  cardStyle = 'border-rose-500 bg-rose-50/80 text-rose-950';
                } else {
                  cardStyle = 'border-slate-200 bg-slate-50/40 text-slate-400 opacity-60';
                }
              } else if (isSelected) {
                cardStyle = 'border-rose-600 bg-rose-50/60 text-slate-900 font-medium shadow-xs';
              }

              return (
                <button
                  key={idx}
                  type="button"
                  disabled={isAnswerSubmitted}
                  onClick={() => handleSelectOption(idx)}
                  className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm transition-all duration-200 flex items-start gap-3.5 ${cardStyle}`}
                >
                  <span
                    className={`w-6 h-6 rounded-lg text-xs font-mono font-bold flex items-center justify-center shrink-0 border ${
                      isAnswerSubmitted
                        ? isCorrectAnswer
                          ? 'bg-emerald-600 text-white border-emerald-600'
                          : isSelected
                          ? 'bg-rose-600 text-white border-rose-600'
                          : 'border-slate-300 text-slate-400'
                        : isSelected
                        ? 'bg-rose-600 text-white border-rose-600'
                        : 'border-slate-200 text-slate-500 bg-slate-50'
                    }`}
                  >
                    {String.fromCharCode(65 + idx)}
                  </span>

                  <span className="flex-1 leading-relaxed">{opcao}</span>

                  {isAnswerSubmitted && isCorrectAnswer && (
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 self-center" />
                  )}
                  {isAnswerSubmitted && isSelected && !isCorrectAnswer && (
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0 self-center" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Immediate Feedback Card when submitted */}
          {isAnswerSubmitted && (
            <div className="pt-4 border-t border-slate-100 space-y-4 animate-in fade-in duration-200">
              <div
                className={`p-4 rounded-xl border ${
                  selectedOption === currentQuestion.respostaCorretaIndex
                    ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900'
                    : 'bg-rose-50/80 border-rose-200 text-rose-900'
                }`}
              >
                <div className="flex items-center gap-2 font-bold text-sm mb-1">
                  {selectedOption === currentQuestion.respostaCorretaIndex ? (
                    <>
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>Parabéns! Resposta Anatomicamente Correta.</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4 text-rose-600" />
                      <span>Resposta Incorreta. Veja a explicação anatômica:</span>
                    </>
                  )}
                </div>
                <p className="text-xs leading-relaxed text-slate-700">{currentQuestion.explicacao}</p>
              </div>

              {/* Practical tip */}
              <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl text-xs text-slate-700 space-y-1">
                <span className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-rose-600" /> Dica Visual de Prova Prática:
                </span>
                <p className="leading-relaxed">{currentQuestion.dicaPratica}</p>
              </div>
            </div>
          )}

          {/* Bottom Action Footer */}
          <div className="pt-2 flex items-center justify-between border-t border-slate-100">
            <span className="text-xs text-slate-400">
              {isAnswerSubmitted ? 'Pressione Próxima para continuar' : 'Selecione uma alternativa'}
            </span>

            {!isAnswerSubmitted ? (
              <button
                type="button"
                disabled={selectedOption === null}
                onClick={handleConfirmAnswer}
                className="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white text-xs font-bold rounded-xl transition-all shadow-xs"
              >
                Confirmar Resposta
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNextQuestion}
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-all flex items-center gap-2 shadow-xs active:scale-95"
              >
                {currentIndex + 1 < sessionQuestions.length ? 'Próxima Questão' : 'Ver Resultado Final'}
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
