export function LoadingState() {
    return (
        <div  role="status" aria-label="Loading jobs" className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-paper-raised">
            {Array.from({ length: 6 }).map((_, index) => (
                <div
                    key={index}
                    className="grid animate-pulse grid-cols-1 items-center gap-4 px-5 py-6 sm:grid-cols-[3rem_1fr_auto] sm:gap-6"
                >
                    <div className="h-3 w-8 rounded bg-line" />

                    <div className="space-y-2 pl-4 sm:pl-6">
                        <div className="h-5 w-1/2 rounded bg-line" />
                        <div className="h-3 w-1/3 rounded bg-line" />
                    </div>

                    <div className="h-3 w-24 justify-self-start rounded bg-line sm:justify-self-end" />
                </div>
            ))}
        </div>
    );
}