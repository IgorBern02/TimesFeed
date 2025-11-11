// src/components/news/NewsGrid.tsx
import { useEffect, useState } from "react";
import { getTopStories } from "../../services/api";
import { NewsCard } from "./NewsCard";
import { MainNews } from "./MainNews";
import type { NewsGridProps, Article } from "../../types/news/news";

export const NewsGrid = ({ section }: NewsGridProps) => {
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

  if (loading) return <p className="text-center py-8">Carregando...</p>;
  if (!articles.length)
    return <p className="text-center mt-6">Nenhuma notícia encontrada 😕</p>;

  const main = articles[0];
  const left = articles.slice(1, 4);
  const right = articles.slice(4, 7);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 py-8">
      <div className="space-y-4 col-span-1">
        {left.map((a) => (
          <NewsCard key={a.url} article={a} compact />
        ))}
      </div>

      <div className="space-y-4 col-span-1 lg:col-span-2">
        <MainNews article={main} />
      </div>

      <div className="space-y-4 col-span-1">
        {right.map((a) => (
          <NewsCard key={a.url} article={a} compact />
        ))}
      </div>
    </div>
  );
};
