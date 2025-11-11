import { useNews } from "../hooks/useNews";
import { MainNewsCard } from "../cards/MainNewsCard";
import { NewsCard } from "../cards/NewsCard";
import { NewsSkeleton } from "../skeleton/NewsSkeleton";
import type { NewsGridProps } from "../types/news";

export const NewsGrid = ({ section }: NewsGridProps) => {
  const { articles, loading } = useNews(section);

  if (loading)
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 py-8">
        {Array.from({ length: 7 }).map((_, i) => (
          <NewsSkeleton key={i} />
        ))}
      </div>
    );

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
        <MainNewsCard article={main} />
      </div>

      <div className="space-y-4 col-span-1">
        {right.map((a) => (
          <NewsCard key={a.url} article={a} compact />
        ))}
      </div>
    </div>
  );
};
