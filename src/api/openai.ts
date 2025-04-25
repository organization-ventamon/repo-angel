import OpenAI from "openai";
import { TOKEN_API_OPENAI } from "@env";

const client = new OpenAI({
  apiKey: TOKEN_API_OPENAI,
});

const content = `Genera un versículo bíblico aleatorio del Nuevo Testamento.
Entrega el resultado en este formato exacto:
"[texto del versículo]" – Libro capítulo:versículo
Incluye únicamente esa línea; no añadas nada más.
Evita repetir un versículo ya proporcionado en esta conversación.`;

export const getBiblicalPhraseByOpenAI = async () => {
  try {
    const response = await client.responses.create({
      model: "gpt-4.1",
      input: content,
    });

    return response.output_text;
  } catch (error) {
    console.log("error en la api->", error);
  }
};
