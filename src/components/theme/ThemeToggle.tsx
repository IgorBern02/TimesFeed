// src/components/theme/ThemeToggle.tsx
import MoonIcon from "../../assets/icons/moon.png";
import SunIcon from "../../assets/icons/sun.png";

interface ThemeToggleProps {
  dark: boolean;
  onToggle: () => void;
}

export function ThemeToggle({ dark, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 p-2 rounded transition cursor-pointer"
    >
      <img
        src={dark ? SunIcon : MoonIcon}
        alt={dark ? "Light mode" : "Dark mode"}
        className="w-5 h-5"
      />
      {dark ? "Modo Claro" : "Modo Escuro"}
    </button>
  );
}
