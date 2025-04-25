import OpenAI from "openai";

const BASE_URL = "https://openrouter.ai/api/v1";
const content = `Genera un versículo bíblico aleatorio del Nuevo Testamento.
Entrega el resultado en este formato exacto:
"[texto del versículo]" – Libro capítulo:versículo
Incluye únicamente esa línea; no añadas nada más.
Evita repetir un versículo ya proporcionado en esta conversación.`;

const openai = new OpenAI({
  apiKey: process.env.EXPO_PUBLIC_TOKEN_DEEPSEEK,
  baseURL: BASE_URL,
});

export const getBiblicalPhrase = async () => {
  try {
    const chat = await openai.chat.completions.create({
      model: "deepseek/deepseek-r1:free",
      messages: [
        {
          role: "user",
          content,
        },
      ],

      temperature: 0.8,
    });

    return chat.choices[0].message.content;
  } catch (error) {
    console.log("error en la api->", error);
  }
};
