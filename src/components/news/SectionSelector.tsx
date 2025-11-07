import type { SectionSelectorProps } from "../../types/news/news";

export function SectionSelector({ value, onChange }: SectionSelectorProps) {
  const sections = ["technology", "world", "science", "arts"];

  return (
    <div className="flex justify-center mb-6">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border rounded p-2"
      >
        {sections.map((section) => (
          <option key={section} value={section}>
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}
