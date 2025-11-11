import type { NavItemProps } from "./types/navbar";

export const NavItem = ({ sec, isActive, onSelect }: NavItemProps) => {
  return (
    <li className="flex items-center">
      <button
        onClick={() => onSelect(sec.toLowerCase())}
        className={`px-2 transition-colors duration-200 uppercase ${
          isActive
            ? "text-black dark:text-white font-semibold"
            : "hover:text-red-600"
        }`}
      >
        {sec}
      </button>
    </li>
  );
};
