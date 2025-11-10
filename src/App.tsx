// App.tsx
import { Header } from "./components/header/Header";
import { useDarkMode } from "./components/theme/useDarkMode";
import { motion } from "framer-motion";

function App() {
  const { dark, toggleDark } = useDarkMode();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-white dark:bg-gray-900"
    >
      <div
        className={`min-h-screen transition-colors duration-300 ${
          dark ? "dark bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <Header dark={dark} onToggle={toggleDark} />
      </div>
    </motion.div>
  );
}

export default App;
