import { MenuHamburguer } from "../menuHamburguer/menuHamburguer";

import type { HeaderProps } from "../../types/header/header";

export function Header({ dark }: HeaderProps) {
  return (
    <header className="text-black dark:text-white py-4  fixed top-0 w-full z-10 flex items-center justify-center backdrop-blur-xl">
      <h1 className="flex text-center text-xl font-semibold">TimesFeed</h1>

      <MenuHamburguer dark={dark} />
    </header>
  );
}
