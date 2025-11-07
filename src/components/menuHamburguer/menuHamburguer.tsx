import { useState } from "react";
import menuBlackIcon from "../../assets/icons/menu-black.png";
import menuWhiteIcon from "../../assets/icons/menu-white.png";
import closeWhiteIcon from "../../assets/icons/close-white.png";
import closeBlackIcon from "../../assets/icons/close-black.png";
interface MenuHamburguerProps {
  dark: boolean;
}

export function MenuHamburguer({ dark }: MenuHamburguerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      {/* Botão do menu */}
      <button
        onClick={toggleMenu}
        className="absolute right-4 top-3 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      >
        <img
          src={dark ? menuWhiteIcon : menuBlackIcon}
          alt="menu"
          className="w-6 h-6"
        />
      </button>

      {/* Menu lateral */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-2">
          <button
            onClick={toggleMenu}
            className="absolute right-4 top-3 text-gray-700 dark:text-gray-300 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            <img
              src={dark ? closeWhiteIcon : closeBlackIcon}
              alt="menu"
              className="w-6 h-6"
            />
          </button>
        </div>

        <nav className="h-screen bg-white dark:bg-gray-900 flex flex-col justify-center items-center gap-6 text-lg font-medium text-gray-700 dark:text-gray-200 z-10 ">
          <a href="#" onClick={toggleMenu} className="hover:text-red-500">
            Início
          </a>
          <a href="#" onClick={toggleMenu} className="hover:text-red-500">
            Notícias
          </a>
          <a href="#" onClick={toggleMenu} className="hover:text-red-500">
            Sobre
          </a>
          <a href="#" onClick={toggleMenu} className="hover:text-red-500">
            Contato
          </a>
        </nav>
      </div>

      {/* Fundo escuro (overlay) */}
      {/* {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        ></div>
      )} */}
    </>
  );
}
