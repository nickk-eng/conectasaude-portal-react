import { modules } from "../data/project";
import { quizQuestions } from "../data/quiz";

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || "").replace(
  /\/$/,
  "",
);

async function getCollection(
  path,
  fallback,
  validateItem,
  { signal, minItems = 1 } = {},
) {
  if (!API_BASE_URL) return { data: fallback, source: "local" };
  const timeoutSignal = AbortSignal.timeout(5000);
  const requestSignal = signal
    ? AbortSignal.any([signal, timeoutSignal])
    : timeoutSignal;
  try {
    const response = await fetch(API_BASE_URL + path, {
      signal: requestSignal,
    });
    if (!response.ok) throw new Error("Resposta indisponível");
    const data = await response.json();
    if (
      !Array.isArray(data) ||
      data.length < minItems ||
      !data.every(validateItem)
    ) {
      throw new Error("Formato inválido");
    }
    return { data, source: "api" };
  } catch (error) {
    if (signal?.aborted) throw error;
    return { data: fallback, source: "local" };
  }
}

export const getModules = (options) =>
  getCollection(
    "/modules",
    modules,
    (item) =>
      ["id", "category", "icon", "title", "description", "detail"].every(
        (key) => typeof item?.[key] === "string",
      ),
    options,
  );
export const getQuiz = (options) =>
  getCollection(
    "/quiz",
    quizQuestions,
    (item) =>
      item &&
      typeof item.question === "string" &&
      typeof item.theme === "string" &&
      typeof item.explanation === "string" &&
      Array.isArray(item.options) &&
      item.options.length >= 2 &&
      item.options.every((option) => typeof option === "string") &&
      Number.isInteger(item.correct) &&
      item.correct >= 0 &&
      item.correct < item.options.length,
    { ...options, minItems: 3 },
  );

export async function submitFeedback() {
  return {
    mode: "demo",
    message:
      "Validação concluída! Esta é uma demonstração: sua mensagem não foi enviada nem armazenada.",
  };
}
