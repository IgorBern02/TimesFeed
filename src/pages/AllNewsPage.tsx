import { useParams } from "react-router-dom";
import { useNews, NewsCard } from "../components/news";

export function AllNewsPage() {
  const { section } = useParams(); // pega o nome da categoria da URL
  const { articles } = useNews(section ?? "world"); // fallback opcional

  return (
    <div className="max-w-7xl mx-auto p-4 mt-10">
      <h1 className="text-5xl font-bebasneue uppercase mb-8 text-center">
        {section} News
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map((article) => (
          <NewsCard key={article.url} article={article} />
        ))}
      </div>
    </div>
  );
}
