// src/components/Nav.tsx
interface NavProps {
  section: string;
  onSelect: (newSection: string) => void;
}

export const Nav = ({ section, onSelect }: NavProps) => {
  const sections = [
    "arts",
    "world",
    "movies",
    "health",
    "travel",
    "technology",
  ];

  return (
    <nav className="border-b text-center py-2 bg-white dark:bg-gray-900">
      <ul className="flex justify-center items-center flex-wrap gap-2 text-sm tracking-widest uppercase font-serif text-gray-700 dark:text-gray-200">
        {sections.map((sec, index) => (
          <li key={sec} className="flex items-center">
            <button
              onClick={() => onSelect(sec.toLowerCase())}
              className={`px-2 transition-colors duration-200 uppercase ${
                section === sec.toLowerCase()
                  ? "text-black dark:text-white font-semibold"
                  : "hover:text-red-600"
              }`}
            >
              {sec}
            </button>
            {index < sections.length - 1 && (
              <span className="mx-2 text-gray-400">•</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
