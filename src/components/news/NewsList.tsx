import { useEffect, useState } from "react";
import { getTopStories } from "../../services/api";
import { NewsCard } from "./NewsCard";
import { SectionSelector } from "./SectionSelector";
import type { Article } from "../../types/news/news";
import { NewsSkeleton } from "./NewsSkeleton";

export function NewsList() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [section, setSection] = useState("technology");

  const [query, setQuery] = useState("");

  const filteredArticles = articles.filter((a) =>
    a.title.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = await getTopStories(section);
        setArticles(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [section]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-4 grid md:grid-cols-2 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <NewsSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        News: {section.charAt(0).toUpperCase() + section.slice(1)}
      </h1>

      <input
        type="text"
        placeholder="Buscar notícia..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border rounded p-2 w-full mb-4"
      />

      <SectionSelector value={section} onChange={setSection} />

      <div className="grid md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <NewsCard
            key={article.url}
            title={article.title}
            abstract={article.abstract}
            url={article.url}
            image={article.multimedia?.[0]?.url}
          />
        ))}
      </div>
    </div>
  );
}
