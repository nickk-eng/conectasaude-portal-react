import { Check, Sparkles, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
export default function GamePreview() {
  const marks = ["x", "", "o", "", "x", "", "o", "", "x"];
  return (
    <div
      className="game-scene"
      aria-label="Ilustração do Jogo da Velha educativo. Exemplo de uma vitória com X na diagonal."
    >
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="floating-label label-top">
        <span className="live-dot" /> APRENDER PODE SER DIFERENTE
      </div>
      <div className="game-window">
        <div className="window-top">
          <span>
            <i />
            <i />
            <i />
          </span>
          <small>conectasaúde / modo aprendizagem</small>
          <Sparkles size={16} />
        </div>
        <div className="game-content">
          <div className="game-title">
            <div>
              <span className="eyebrow">CONHECIMENTO EM JOGO</span>
              <h3>
                Sua próxima jogada
                <br />
                começa com uma resposta.
              </h3>
            </div>
            <span className="mini-level">NÍVEL 01</span>
          </div>
          <div className="preview-board" aria-hidden="true">
            {marks.map((mark, i) => (
              <div
                key={i}
                className={"preview-cell " + (mark ? "mark-" + mark : "")}
              >
                {mark === "x" ? "×" : mark === "o" ? "○" : <span>+</span>}
              </div>
            ))}
          </div>
          <div className="game-feedback">
            <span className="check-circle">
              <Check size={17} />
            </span>
            <div>
              <strong>Aprender é a melhor estratégia.</strong>
              <small>Responda. Descubra. Avance.</small>
            </div>
          </div>
        </div>
      </div>
      <div className="floating-label label-bottom">
        <span className="spark-icon">
          <Sparkles size={19} />
        </span>
        <div>
          <strong>Conhecimento + diversão</strong>
          <small>Uma conexão que faz bem.</small>
        </div>
      </div>
      <Link
        to="/funcionalidades"
        className="scene-link"
        aria-label="Experimentar a demonstração"
      >
        <ArrowUpRight size={23} />
      </Link>
    </div>
  );
}
