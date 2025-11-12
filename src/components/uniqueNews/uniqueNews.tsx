import { NewsCard, useNews, type NewsGridProps } from "../news";

export function UniqueNews({ section, text }: NewsGridProps) {
  const { articles } = useNews(section);

  // Pegando as 4 primeiras notícias (igual ao layout)
  const news = [...articles].sort(() => Math.random() - 0.5).slice(0, 4);

  return (
    <section className="w-full mt-8 world-news-section">
      {/* Header da Seção */}
      <div className="flex flex-col items-center justify-between border-b-2 pb-3 mb-6">
        <h2 className="font-bebasneue text-7xl font-bold uppercase tracking-wide">
          {text}
        </h2>

        <button className="text-xs font-merriweather uppercase mt-5 hover:text-red-600 transition-colors duration-200 cursor-pointer">
          View All
        </button>
      </div>

      {/* Grade das notícias */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto p-4">
        {news.map((article) => (
          <NewsCard key={article.url} article={article} compact />
        ))}
      </div>
    </section>
  );
}
