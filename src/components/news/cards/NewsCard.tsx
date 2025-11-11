import type { Article } from "../types/news";

interface NewsCardProps {
  article: Article;
  compact?: boolean;
}

export const NewsCard = ({ article }: NewsCardProps) => {
  const hasImage = Boolean(article.multimedia?.[0]?.url);

  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block border-b pb-2 hover:opacity-80 transition"
    >
      {hasImage && (
        <img
          src={article.multimedia![0].url}
          alt={article.title}
          className="w-full object-cover mb-2 rounded h-44"
        />
      )}
      <h3 className="text-sm font-semibold line-clamp-2">{article.title}</h3>
      <p className="text-xs text-gray-500 line-clamp-3">{article.abstract}</p>
    </a>
  );
};
