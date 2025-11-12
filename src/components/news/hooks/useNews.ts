import { useEffect, useState } from "react";
import { getTopStories } from "../../../services/api";
import type { Article } from "../types/news";
import mockNews from "../../../services/mockNews.json";

export const useNews = (section: string) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 🔹 Embaralha array genérico
  function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  useEffect(() => {
    let isMounted = true;

    async function fetchNews() {
      setLoading(true);
      const cacheKey = `news-${section}`;
      const cached = localStorage.getItem(cacheKey);

      try {
        // 🔹 1. Tenta carregar do cache
        if (cached && cached !== "undefined" && cached !== "null") {
          const parsed = JSON.parse(cached);

          // ✅ Garante que parsed é Article[]
          if (Array.isArray(parsed)) {
            const typedParsed: Article[] = parsed.map(
              (item) => item as Article
            );
            const shuffled = shuffleArray<Article>(typedParsed);
            if (isMounted) {
              setArticles(shuffled);
              setLoading(false);
            }
            return;
          }
        }

        // 🔹 2. Busca da API
        const results = await getTopStories(section);
        const dataToUse: Article[] =
          results.length > 0 ? results : (mockNews.results as Article[]);

        const shuffled = shuffleArray<Article>(dataToUse);

        if (isMounted) {
          setArticles(shuffled);
          localStorage.setItem(cacheKey, JSON.stringify(shuffled));
        }
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Erro desconhecido";
        console.error("Erro ao buscar notícias:", message);

        const shuffledMock = shuffleArray<Article>(
          mockNews.results as Article[]
        );
        if (isMounted) {
          setArticles(shuffledMock);
          setError(message);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchNews();
    return () => {
      isMounted = false;
    };
  }, [section]);

  return { articles, loading, error };
};
