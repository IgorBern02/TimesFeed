// src/services/api.ts
const API_KEY = import.meta.env.VITE_NYT_API_KEY;

export async function getTopStories(section: string) {
  try {
    const res = await fetch(
      `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${API_KEY}`
    );

    if (!res.ok) {
      throw new Error(`Erro HTTP ${res.status}`);
    }

    const data = await res.json();

    // Garante que há resultados antes de retornar
    if (!data?.results) {
      console.warn("Nenhum resultado encontrado:", data);
      return [];
    }

    // Retorna só os 10 primeiros
    return data.results.slice(0, 10);
  } catch (err) {
    console.error("Erro ao buscar notícias:", err);
    return [];
  }
}
