// App.tsx
import { useState } from "react";

import { motion } from "framer-motion";

import { Header } from "./components/header/Header";
import { Navbar } from "./components/navbar/Navbar";
import { NewsGrid } from "./components/news/grid/NewsGrid";

import { useDarkMode } from "./components/header/hooks/useDarkMode";
import { WorldNewsSection } from "./components/worldNewsSection/WorldNewsSection";

function App() {
  const { dark, toggleDark } = useDarkMode();
  const [section, setSection] = useState("arts");

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-white dark:bg-gray-900"
    >
      <div
        className={`min-h-screen transition-colors duration-300  ${
          dark ? "dark bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <Header dark={dark} onToggle={toggleDark} />
        <Navbar section={section} onSelect={setSection} />
        <NewsGrid section={section} />
        <WorldNewsSection section="world" />
      </div>
    </motion.div>
  );
}

export default App;
