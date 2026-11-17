import { useRef, useState } from "react";
import { ArrowUpRight, CheckCircle2, GraduationCap, Send } from "lucide-react";
import { PageHeader } from "../components/SectionHeader";
import SectionHeader from "../components/SectionHeader";
import Button from "../components/Button";
import { team, advisor } from "../data/project";
import { submitFeedback } from "../services/api";
const initial = {
  name: "",
  email: "",
  subject: "",
  message: "",
  consent: false,
};
function validateContact(values) {
  const errors = {};
  if (values.name.trim().length < 3)
    errors.name = "Informe seu nome com pelo menos 3 caracteres.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    errors.email = "Informe um e-mail válido.";
  if (!values.subject) errors.subject = "Selecione um assunto.";
  if (values.message.trim().length < 10)
    errors.message = "Escreva uma mensagem com pelo menos 10 caracteres.";
  if (!values.consent)
    errors.consent =
      "Confirme que você entende o caráter demonstrativo do formulário.";
  return errors;
}
export default function Contact() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [confirmation, setConfirmation] = useState("");
  const form = useRef(null);
  function update(event) {
    const { name, value, type, checked } = event.target;
    setValues((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    if (status === "success") setStatus("idle");
  }
  async function submit(event) {
    event.preventDefault();
    const nextErrors = validateContact(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      form.current?.elements.namedItem(Object.keys(nextErrors)[0])?.focus();
      return;
    }
    setStatus("submitting");
    try {
      const result = await submitFeedback();
      setConfirmation(result.message);
      setStatus("success");
      setValues(initial);
    } catch {
      setStatus("error");
    }
  }
  const fieldProps = (name) => ({
    name,
    id: name,
    value: values[name],
    onChange: update,
    required: true,
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? name + "-error" : undefined,
  });
  const error = (name) =>
    errors[name] && (
      <span className="field-error" id={name + "-error"}>
        {errors[name]}
      </span>
    );
  return (
    <>
      <PageHeader
        number="04"
        eyebrow="EQUIPE & CONTATO"
        title={
          <>
            Boas ideias nascem
            <br />
            <span>de boas conexões.</span>
          </>
        }
      >
        Conheça quem desenvolve o ConectaSaúde e deixe sua contribuição para a
        experiência de aprendizagem.
      </PageHeader>
      <section className="container section">
        <SectionHeader
          eyebrow="QUEM CONSTRÓI ESSA CONEXÃO"
          title="Uma equipe. Um propósito compartilhado."
        >
          PFC de Sistemas de Informação · Universidade de Mogi das Cruzes
        </SectionHeader>
        <div className="team-grid">
          {team.map((member) => (
            <article className="team-card" key={member.name}>
              <span className="avatar">
                {member.initials}
                <span className="avatar-dot" />
              </span>
              <span className="eyebrow">{member.role}</span>
              <h3>{member.name}</h3>
              <p>Sistemas de Informação · UMC</p>
            </article>
          ))}
        </div>
        <div className="advisor">
          <GraduationCap size={27} />
          <div>
            <span className="eyebrow">ORIENTAÇÃO ACADÊMICA</span>
            <strong>{advisor}</strong>
          </div>
          <span>Universidade de Mogi das Cruzes</span>
        </div>
      </section>
      <section className="contact-section">
        <div className="container section contact-grid">
          <div>
            <span className="eyebrow">VAMOS CONVERSAR</span>
            <h2>
              Sua perspectiva
              <br />
              também conecta.
            </h2>
            <p>
              Ideias, dúvidas ou impressões sobre o projeto? Use este espaço
              para experimentar o fluxo de contato.
            </p>
            <div className="contact-info">
              <span className="icon-box">
                <Send size={22} />
              </span>
              <div>
                <strong>Uma conversa começa por aqui.</strong>
                <p>Formulário demonstrativo, com validação no navegador.</p>
              </div>
            </div>
            <div className="demo-note">
              Nenhuma mensagem é enviada ou armazenada. Para contato real, os
              canais oficiais da equipe deverão ser configurados futuramente.
              Evite inserir dados sensíveis.
            </div>
          </div>
          <form
            ref={form}
            onSubmit={submit}
            noValidate
            className="contact-form"
          >
            <div className="form-row">
              <label htmlFor="name">
                Seu nome <span>*</span>
                <input
                  {...fieldProps("name")}
                  placeholder="Como podemos chamar você?"
                  autoComplete="name"
                  maxLength={100}
                />
                {error("name")}
              </label>
              <label htmlFor="email">
                E-mail <span>*</span>
                <input
                  {...fieldProps("email")}
                  type="email"
                  placeholder="voce@exemplo.com"
                  autoComplete="email"
                  maxLength={254}
                />
                {error("email")}
              </label>
            </div>
            <label htmlFor="subject">
              Sobre o que vamos falar? <span>*</span>
              <select {...fieldProps("subject")}>
                <option value="">Selecione um assunto</option>
                <option value="project">Sobre o projeto</option>
                <option value="suggestion">Ideia ou sugestão</option>
                <option value="experience">Experiência com o portal</option>
                <option value="other">Outro assunto</option>
              </select>
              {error("subject")}
            </label>
            <label htmlFor="message">
              Sua mensagem <span>*</span>
              <textarea
                {...fieldProps("message")}
                rows={5}
                placeholder="Compartilhe sua ideia com a gente…"
                maxLength={2000}
              />
              {error("message")}
              <span className="character-count">
                {values.message.length}/2000
              </span>
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="consent"
                checked={values.consent}
                onChange={update}
                required
                aria-invalid={Boolean(errors.consent)}
                aria-describedby={errors.consent ? "consent-error" : undefined}
              />
              <span>
                Entendo que este formulário é uma demonstração e não envia
                mensagens.
              </span>
            </label>
            {error("consent")}
            <Button type="submit" disabled={status === "submitting"}>
              {status === "submitting" ? "Validando…" : "Validar mensagem"}
              <ArrowUpRight size={17} />
            </Button>
            <small className="required-note">* Campos obrigatórios</small>
            <div aria-live="polite">
              {status === "success" && (
                <div className="form-success">
                  <CheckCircle2 size={22} />
                  <p>{confirmation}</p>
                </div>
              )}
              {status === "error" && (
                <p role="alert">
                  Não foi possível concluir a demonstração. Tente novamente.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

