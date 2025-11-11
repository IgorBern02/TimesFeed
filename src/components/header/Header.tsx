// Header.tsx
import { MenuHamburguer } from "./menuHamburguer/menuHamburguer";
import { ThemeToggle } from "../theme/ThemeToggle";
import type { HeaderProps } from "../../types/header/header";
import { contactIcons } from "../../data/contactIconsHeader";
import SearchIcon from "../../assets/icons/search.svg";

export function Header({ dark, onToggle }: HeaderProps) {
  const today = new Date();

  const formattedDate = today.toLocaleDateString("en", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="text-black dark:text-white  w-full flex flex-col items-center justify-between ">
      {/* Linha superior */}
      <div className="w-full fixed top-0 z-10 backdrop-blur-xl flex flex-row justify-between items-center px-3 py-2 border-b">
        <section>
          <p className="text-sm font-merriweather">
            Today:{" "}
            {formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)}
          </p>
        </section>

        <section className="flex items-center gap-4">
          <ThemeToggle dark={dark} onToggle={onToggle} />
          <MenuHamburguer dark={dark} />
        </section>
      </div>

      {/* Título e subtítulo */}
      <div className="w-full mt-15 flex flex-col justify-center items-center py-5 border-b ">
        <h1 className="font-bebasneue text-5xl font-bold ">
          TimesFeed Newspaper
        </h1>
        <p className="w-5/6 font-merriweather text-[11px] text-center uppercase tracking-wide ">
          Unique and impressive newspaper wordpress theme. Since 2016
        </p>

        <div className="flex flex-row items-center justify-between gap-2 border mt-6 w-4/5 p-1 rounded-lg">
          <img
            src={SearchIcon}
            className={`w-5 h-5 ${dark ? "invert" : ""}`}
            alt="menu"
          />
          <input
            placeholder="Search notice"
            type="text"
            className="w-full outline-0 text-base text-black dark:text-white"
          />
        </div>

        {/* Ícones sociais */}
        <ul className="flex items-center justify-center p-1 gap-4 mt-4 w-full">
          {contactIcons.map((icon, index) => (
            <li key={index} className="border p-2 rounded-full">
              <img
                src={icon}
                className={`w-4 h-4 cursor-pointer transition ${
                  dark ? "invert" : ""
                }`}
                alt="social icon"
              />
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
