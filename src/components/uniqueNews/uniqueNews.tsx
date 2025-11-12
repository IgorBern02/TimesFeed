import { LineUpHeader } from "../header/components/LineUpHeader";
import type { HeaderProps } from "../header/types/header";
import { NewsCard, useNews, type NewsGridProps } from "../news";
import { useNavigate } from "react-router-dom";

type UniqueNewsProps = NewsGridProps & HeaderProps;
export function UniqueNews({ section, text, dark }: UniqueNewsProps) {
  const { articles, loading, error } = useNews(section);

  const navigate = useNavigate();

  const safeArticles = Array.isArray(articles) ? articles : [];

  // Pegando as 4 primeiras notícias (igual ao layout)
  const news = [...safeArticles].sort(() => Math.random() - 0.5).slice(0, 4);

  if (loading) return <p>Loading...</p>;
  if (error) console.warn("Usando mock local devido a:", error);

  return (
    <section className="w-full mt-8 world-news-section">
      <LineUpHeader dark={dark} />

      {/* Header da Seção */}
      <div className="flex flex-col items-center justify-between border-b-2 pb-3 mb-6">
        <h2 className="font-bebasneue text-7xl font-bold uppercase tracking-wide">
          {text}
        </h2>

        <button
          onClick={() => navigate(`/news/${section}`)}
          className="text-xs font-merriweather uppercase mt-5 hover:text-red-600 transition-colors duration-200 cursor-pointer"
        >
          View All
        </button>
      </div>

      {safeArticles.length === 0 ? (
        <p className="text-center text-gray-500">Carregando notícias...</p>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto p-4">
          {news.map((article) => (
            <NewsCard key={article.url} article={article} compact />
          ))}
        </div>
      )}
    </section>
  );
}
