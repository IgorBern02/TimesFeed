import menuBlackIcon from "../../assets/icons/menu-black.png";
import menuWhiteIcon from "../../assets/icons/menu-white.png";

import type { ThemeToggleProps } from "../../types/theme/theme";

export const MenuHamburguer = ({ dark }: ThemeToggleProps) => {
  return (
    <button className="absolute flex right-0 p-2 ">
      <img
        src={dark ? menuWhiteIcon : menuBlackIcon}
        alt="menu icon"
        className="w-6 h-6"
      />
    </button>
  );
};
