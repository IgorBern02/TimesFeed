// App.tsx
import { useState } from "react";
import { Header } from "./components/header/Header";
import { Nav } from "./components/nav/nav";
import { useDarkMode } from "./components/theme/useDarkMode";
import { motion } from "framer-motion";
import { NewsGrid } from "./components/news/NewsGrid";

function App() {
  const { dark, toggleDark } = useDarkMode();
  const [section, setSection] = useState("technology");

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
        <Nav section={section} onSelect={setSection} />
        <NewsGrid section={section} />
      </div>
    </motion.div>
  );
}

export default App;
