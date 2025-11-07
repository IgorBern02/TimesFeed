import type { NewsCardProps } from "../../types/news/news";

export function NewsCard({ title, abstract, url, image }: NewsCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition bg-white hover:-translate-y-1 duration-300"
    >
      {image && (
        <img src={image} alt={title} className="w-full h-56 object-cover" />
      )}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-1 line-clamp-2">{title}</h2>
        <p className="text-gray-600 text-sm line-clamp-3">{abstract}</p>
      </div>
    </a>
  );
}
