export function NewsSkeleton() {
  return (
    <div className="border rounded-xl overflow-hidden shadow-sm animate-pulse bg-gray-100">
      <div className="h-56 bg-gray-300"></div>
      <div className="p-4 space-y-2">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-3 bg-gray-300 rounded w-full"></div>
        <div className="h-3 bg-gray-300 rounded w-5/6"></div>
      </div>
    </div>
  );
}
