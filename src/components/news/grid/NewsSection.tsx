import { useState } from "react";
import { NewsGrid } from "./NewsGrid";
import { Navbar } from "../../navbar/Navbar";

export const NewsSection = () => {
  const [section, setSection] = useState("home");

  return (
    <section>
      <Navbar section={section} onSelect={setSection} />
      <NewsGrid section={section} />
    </section>
  );
};
