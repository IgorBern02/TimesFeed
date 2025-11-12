import { motion, easeOut } from "framer-motion";
import { useNews } from "../hooks/useNews";
import { MainNewsCard, NewsCard } from "../cards";
import { NewsSkeleton } from "../skeleton/NewsSkeleton";
import type { NewsGridProps } from "../types/news";
import type { Variants } from "framer-motion";

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

  if (!articles || articles.length === 0) {
    return <p>Nenhuma notícia encontrada.</p>;
  }

  const main = articles[0];
  const left = articles.slice(1, 4);
  const right = articles.slice(4, 7);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: easeOut,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 py-8"
    >
      <motion.div variants={item} className="space-y-4 col-span-1">
        {left.map((a) => (
          <motion.div
            key={a.url}
            variants={item}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <NewsCard article={a} compact />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={item}
        className="space-y-4 col-span-1 lg:col-span-2"
      >
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <MainNewsCard article={main} />
        </motion.div>
      </motion.div>

      <motion.div variants={item} className="space-y-4 col-span-1">
        {right.map((a) => (
          <motion.div
            key={a.url}
            variants={item}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <NewsCard article={a} compact />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
