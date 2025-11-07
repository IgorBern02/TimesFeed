import { Header } from "./components/header/Header";
import { NewsList } from "./components/news/NewsList";
import { ThemeToggle } from "./components/theme/ThemeToggle";
import { useDarkMode } from "./components/theme/useDarkMode";

function App() {
  const { dark, toggleDark } = useDarkMode();

  return (
    <div className="min-h-screen dark:text-white transition-colors duration-300">
      <header>
        <Header />
      </header>

      <section className="mt-20 flex flex-col items-center">
        <ThemeToggle dark={dark} onToggle={toggleDark} />
        <div className="mt-6 w-full max-w-4xl">
          <NewsList />
        </div>
      </section>
    </div>
  );
}

export default App;
