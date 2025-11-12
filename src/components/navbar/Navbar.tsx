import type { NavProps } from "./types/navbar";
import sectionsArray from "./data/navbar";
import { NavItem } from "./NavbarItem";
import React from "react";

export const Navbar = ({ section, onSelect }: NavProps) => {
  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="border-b text-center py-2 bg-white dark:bg-gray-900"
    >
      <ul className="flex justify-center items-center flex-wrap gap-2 text-sm tracking-widest uppercase font-serif text-gray-700 dark:text-gray-200">
        {sectionsArray.map((sec, index) => (
          <React.Fragment key={sec}>
            <NavItem
              sec={sec}
              isActive={section === sec.toLowerCase()}
              onSelect={onSelect}
            />
            {index < sectionsArray.length - 1 && (
              <span className="mx-2 text-gray-400">•</span>
            )}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};
