// import { NewsCard, useNews, type NewsGridProps } from "../news";

export function WorldNewsSection() {
  //   const { articles } = useNews(section);

  //   const left = articles.slice(1, 4);
  return (
    <div className="world-news-section ">
      <div className="w-full flex flex-col items-center justify-center border-b-2 p-2">
        <section className="w-full flex items-center justify-center p-2">
          <h1 className="font-bebasneue text-6xl font-bold ">World News</h1>
        </section>

        <section className="p-1">
          <p className="text-sm font-merriweather uppercase">view all</p>
        </section>
      </div>

      {/* {left.map((a) => (
        <NewsCard key={a.url} article={a} compact />
      ))} */}
    </div>
  );
}
