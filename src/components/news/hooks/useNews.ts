import { useEffect, useState } from "react";
import { getTopStories } from "../../../services/api";
import type { Article } from "../types/news";

export const useNews = (section: string) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const data = await getTopStories(section);
        const newsArray = (
          Array.isArray(data) ? data : data.results || []
        ) as Article[];
        const randomized = shuffleArray<Article>(newsArray).slice(0, 10);
        setArticles(randomized);
      } catch (error) {
        console.error("Erro ao carregar notícias", error);
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(fetchNews, 600);
    return () => clearTimeout(timer);
  }, [section]);

  return { articles, loading };
};
