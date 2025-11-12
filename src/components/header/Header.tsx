import { SearchBar } from "./components/SearchBar";
import { SocialIcons } from "./components/SocialIcons";
import type { HeaderProps } from "./types/header";
import { LineUpHeader } from "./components/LineUpHeader";

export function Header({ dark }: HeaderProps) {
  return (
    <header className="text-black dark:text-white w-full flex flex-col items-center">
      {/* Linha superior */}
      <LineUpHeader dark={dark} />

      {/* Título + subtítulo + busca + ícones */}
      <div className="w-full mt-16 flex flex-col items-center py-5 border-b">
        <h1 className="font-bebasneue text-5xl font-bold">
          TimesFeed Newspaper
        </h1>
        <p className="w-5/6 text-[11px] text-center uppercase tracking-wide font-merriweather">
          Unique and impressive newspaper theme. Since 2016
        </p>

        <SearchBar dark={dark} />
        <SocialIcons dark={dark} />
      </div>
    </header>
  );
}
