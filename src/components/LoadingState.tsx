export function LoadingState() {
    return (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
                <div
                    key={index}
                    className="animate-pulse rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                    <div className="mb-4 h-6 w-2/3 rounded bg-gray-200" />

                    <div className="mb-6 h-4 w-1/3 rounded bg-gray-200" />

                    <div className="space-y-3">
                        <div className="h-4 rounded bg-gray-200" />
                        <div className="h-4 w-5/6 rounded bg-gray-200" />
                        <div className="h-4 w-2/3 rounded bg-gray-200" />
                    </div>

                    <div className="mt-8 h-5 w-28 rounded bg-gray-200" />
                </div>
            ))}
        </div>
    );
}