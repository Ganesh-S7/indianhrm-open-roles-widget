export function EmptyState() {
    return (
        <div className="rounded-2xl border border-dashed border-line bg-paper-raised px-10 py-16 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald">
                No results
            </p>

            <h2 className="mt-3 font-display text-2xl font-medium text-ink">
                No open roles match that search
            </h2>

            <p className="mx-auto mt-2 max-w-sm text-sm text-ink-muted">
                Try a different keyword or adjust your filters to see more opportunities.
            </p>
        </div>
    );
}