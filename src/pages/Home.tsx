import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "../components/navbar/Navbar";
import { NewsGrid } from "../components/news/grid/NewsGrid";
import { UniqueNews } from "../components/uniqueNews/uniqueNews";
import { Footer } from "../components/footer/Footer";
import type { HeaderProps } from "../components/header/types/header";

export const HomePage = ({ dark }: HeaderProps) => {
  const [section, setSection] = useState("arts");

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`min-h-screen transition-colors duration-300 ${
        dark ? "dark bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <Navbar section={section} onSelect={setSection} />
      <NewsGrid section={section} />
      <UniqueNews text="World News" section="world" />
      <UniqueNews text="Technology" section="technology" />
      <Footer />
    </motion.div>
  );
};
