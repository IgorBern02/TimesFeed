// src/components/news/NewsCard.tsx
import type { Article } from "../../types/news/news";

interface NewsCardProps {
  article: Article;
  compact?: boolean; // se true, usa altura menor
}

export const NewsCard = ({ article, compact = false }: NewsCardProps) => {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block border-b pb-2 hover:opacity-80 transition "
    >
      {article.multimedia?.[0]?.url && (
        <img
          src={article.multimedia[0].url}
          alt={article.title}
          className={`w-full object-cover mb-2 rounded ${
            compact ? "h-32" : "h-48"
          }`}
        />
      )}
      <h3 className="text-sm font-semibold line-clamp-2">{article.title}</h3>
      <p className="text-xs text-gray-500 line-clamp-3">{article.abstract}</p>
    </a>
  );
};
