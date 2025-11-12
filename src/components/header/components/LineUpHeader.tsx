import { useHeaderDate } from "../hooks/useHeaderDate";
import type { HeaderProps } from "../types/header";
import { MenuHamburguer } from "./MenuHamburguer";
import { ThemeToggle } from "./ThemeToggle";

export const LineUpHeader = ({ dark, onToggle }: HeaderProps) => {
  const formattedDate = useHeaderDate();
  return (
    <div className="w-full fixed top-0 z-10 backdrop-blur-xl flex justify-between items-center px-3 py-2 border-b">
      <p className="text-sm font-merriweather">Today: {formattedDate}</p>

      <div className="flex items-center gap-4">
        <ThemeToggle dark={dark} onToggle={onToggle} />
        <MenuHamburguer dark={dark} />
      </div>
    </div>
  );
};
