// src/services/api.ts
const API_KEY = import.meta.env.VITE_NYT_API_KEY;
const BASE_URL = import.meta.env.VITE_NYT_BASE_URL;

export async function getTopStories(section: string) {
  try {
    const url = `${BASE_URL}/${section}.json?api-key=${API_KEY}`;

    console.log("🔗 Fetching:", url); // <--- debug
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Erro HTTP ${res.status}`);
    }

    const data = await res.json();

    if (!data?.results) {
      console.warn("Nenhum resultado encontrado:", data);
      return [];
    }

    return data.results.slice(0, 10);
  } catch (err) {
    console.error("Erro ao buscar notícias:", err);
    return [];
  }
}
