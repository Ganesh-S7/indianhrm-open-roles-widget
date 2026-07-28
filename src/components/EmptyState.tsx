export function EmptyState() {
  return (
    <div className="rounded-xl border border-dashed border-gray-300 p-10 text-center">
      <h2 className="text-lg font-semibold text-gray-900">
        No jobs found
      </h2>

      <p className="mt-2 text-sm text-gray-500">
        Try changing your search or employment type.
      </p>
    </div>
  );
}