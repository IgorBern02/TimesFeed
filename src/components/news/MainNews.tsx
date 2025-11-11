// src/components/news/MainNews.tsx
import type { Article } from "../../types/news/news";

export const MainNews = ({ article }: { article: Article }) => {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block border-b pb-2 hover:opacity-90 transition"
    >
      {article.multimedia?.[0]?.url && (
        <img
          src={article.multimedia[0].url}
          alt={article.title}
          className="w-full h-32 lg:h-80 object-cover mb-2 lg:mb-4  rounded"
        />
      )}
      <h2 className="text-sm font-semibold line-clamp-2 lg:text-2xl lg:font-bold mb-2">
        {article.title}
      </h2>
      <p className="text-xs text-gray-500  lg:text-sm lg:text-gray-700 dark:text-gray-300 mb-2 line-clamp-3">
        {article.abstract}
      </p>
      <p className="hidden lg:flex text-xs text-gray-500">{article.byline}</p>
    </a>
  );
};
