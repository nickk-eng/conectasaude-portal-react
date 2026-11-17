import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  RotateCcw,
  Trophy,
  XCircle,
} from "lucide-react";
import { getQuiz } from "../services/api";
import Button from "./Button";
export default function QuizDemo() {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const heading = useRef(null);
  useEffect(() => {
    const controller = new AbortController();
    getQuiz({ signal: controller.signal })
      .then(({ data }) => setQuestions(data.slice(0, 3)))
      .catch(() => {});
    return () => controller.abort();
  }, []);
  const question = questions[index];
  function answer(option) {
    if (selected !== null) return;
    setSelected(option);
    if (option === question.correct) setScore((current) => current + 1);
  }
  function next() {
    if (index === questions.length - 1) setFinished(true);
    else {
      setIndex((current) => current + 1);
      setSelected(null);
    }
    requestAnimationFrame(() => heading.current?.focus());
  }
  function restart() {
    setIndex(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
    requestAnimationFrame(() => heading.current?.focus());
  }
  if (!question)
    return (
      <div className="quiz-shell" role="status">
        Preparando as perguntas…
      </div>
    );
  return (
    <div className="quiz-shell">
      <div className="quiz-top">
        <span className="badge">
          <span className="live-dot" /> DEMONSTRAÇÃO INTERATIVA
        </span>
        <span>
          {score} {score === 1 ? "acerto" : "acertos"}
        </span>
      </div>
      <div
        className="progress-track"
        role="progressbar"
        aria-label="Questões respondidas"
        aria-valuemin={0}
        aria-valuemax={questions.length}
        aria-valuenow={
          finished ? questions.length : index + (selected !== null ? 1 : 0)
        }
      >
        <span
          style={{
            width:
              ((finished
                ? questions.length
                : index + (selected !== null ? 1 : 0)) /
                questions.length) *
                100 +
              "%",
          }}
        />
      </div>
      {finished ? (
        <div className="quiz-result">
          <Trophy size={52} />
          <span className="eyebrow">PERCURSO CONCLUÍDO</span>
          <h3 ref={heading} tabIndex={-1}>
            Você acertou {score} de {questions.length}!
          </h3>
          <p>
            {score === questions.length
              ? "Boa conexão com o conhecimento!"
              : "Cada resposta é um ponto de partida para aprender."}{" "}
            Que tal explorar novamente?
          </p>
          <Button onClick={restart}>
            <RotateCcw size={17} /> Jogar novamente
          </Button>
        </div>
      ) : (
        <>
          <div className="question-meta">
            <span>
              PERGUNTA 0{index + 1} / 0{questions.length}
            </span>
            <span>{question.theme}</span>
          </div>
          <h3 ref={heading} tabIndex={-1} className="quiz-question">
            {question.question}
          </h3>
          <div className="quiz-options">
            {question.options.map((option, i) => (
              <button
                key={option}
                disabled={selected !== null}
                className={
                  "quiz-option " +
                  (selected !== null && i === question.correct
                    ? "is-correct"
                    : selected === i
                      ? "is-wrong"
                      : "")
                }
                onClick={() => answer(i)}
              >
                <span className="option-letter">
                  {String.fromCharCode(65 + i)}
                </span>
                {option}
                {selected !== null && i === question.correct && (
                  <CheckCircle2 size={20} />
                )}
                {selected === i && i !== question.correct && (
                  <XCircle size={20} />
                )}
              </button>
            ))}
          </div>
          <div aria-live="polite">
            {selected !== null && (
              <div
                className={
                  "answer-feedback " +
                  (selected === question.correct ? "correct" : "wrong")
                }
              >
                <strong>
                  {selected === question.correct
                    ? "Boa! Você acertou."
                    : "Vamos aprender juntos."}
                </strong>
                <p>{question.explanation}</p>
                <Button onClick={next}>
                  {index === questions.length - 1
                    ? "Ver resultado"
                    : "Próxima pergunta"}
                  <ArrowRight size={17} />
                </Button>
              </div>
            )}
          </div>
        </>
      )}
      <p className="quiz-disclaimer">
        Exemplo educativo de letramento em saúde. Não substitui orientação
        profissional.
      </p>
    </div>
  );
}
