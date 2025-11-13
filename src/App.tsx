import { Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { HomePage } from "./pages/Home";
import { AllNewsPage } from "./pages/AllNewsPage";
import { useState } from "react";

export function App() {
  const [dark, setDark] = useState(false);
  const onToggle = () => setDark((prev) => !prev);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
        <Header dark={dark} onToggle={onToggle} />

        <Routes>
          <Route
            path="/"
            element={<HomePage dark={dark} onToggle={onToggle} />}
          />
          <Route
            path="/news/:section"
            element={<AllNewsPage dark={dark} onToggle={onToggle} />}
          />
        </Routes>
      </div>
    </div>
  );
}
