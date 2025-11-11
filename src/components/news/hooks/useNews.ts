import { useEffect, useState } from "react";
import { getTopStories } from "../../../services/api";
import type { Article } from "../types/news";

export const useNews = (section: string) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const data = await getTopStories(section);
        const newsArray = Array.isArray(data) ? data : data.results || [];
        setArticles(newsArray.slice(0, 10));
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
