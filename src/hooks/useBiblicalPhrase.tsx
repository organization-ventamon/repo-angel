import { useState } from "react";
import { getBiblicalPhrase } from "../api/deepseek";
import { getBiblicalPhraseByOpenAI } from "../api/openai";

export const useBiblicalPhrase = () => {
  const [phrase, setPhrase] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fetchPhrase = async () => {
    try {
      setLoading(true);
      setError("");

      const newPhrase = await getBiblicalPhrase();

      if (!newPhrase) {
        setError("Error al obtener la frase bíblica");
        return;
      }

      setPhrase(newPhrase);
    } catch (err) {
      setError("Error al obtener la frase bíblica");
      setPhrase("");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { fetchPhrase, phrase, loading, error };
};
