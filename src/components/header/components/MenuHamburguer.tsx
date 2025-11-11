import { useState } from "react";
import menuIcon from "../../../assets/icons/menuIcon.svg";
import closeIcon from "../../../assets/icons/closeIcon.svg";
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
        className="lg:hidden rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      >
        <img
          src={menuIcon}
          className={`w-6 h-6 ${dark ? "invert" : ""}`}
          alt="menu"
        />
      </button>

      {/* Menu lateral */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 z-90 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-2">
          <button
            onClick={toggleMenu}
            className="absolute right-4 top-3 text-gray-700 dark:text-gray-300 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            <img
              src={closeIcon}
              className={`w-6 h-6 ${dark ? "invert" : ""}`}
              alt="menu"
            />
          </button>
        </div>

        <nav className="h-screen bg-white dark:bg-gray-900 flex flex-col justify-center items-center gap-6 text-lg font-medium text-gray-700 dark:text-gray-200 z-10 ">
          <a href="#" onClick={toggleMenu} className="hover:text-red-500">
            Home
          </a>
          <a href="#" onClick={toggleMenu} className="hover:text-red-500">
            News
          </a>
          <a href="#" onClick={toggleMenu} className="hover:text-red-500">
            About
          </a>
          <a href="#" onClick={toggleMenu} className="hover:text-red-500">
            Contact
          </a>
        </nav>
      </div>
    </>
  );
}
