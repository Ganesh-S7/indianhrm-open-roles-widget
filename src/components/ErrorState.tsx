interface ErrorStateProps {
    message: string;
    onRetry: () => void;
}

export function ErrorState({
    message,
    onRetry,
}: ErrorStateProps) {
    return (
        <div
            role="alert"
            className="rounded-2xl border border-line bg-paper-raised px-10 py-16 text-center"
        >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brick">
                Something went wrong
            </p>

            <h2 className="mt-3 font-display text-2xl font-medium text-ink">
                We couldn't load open roles
            </h2>

            <p className="mx-auto mt-2 max-w-sm text-sm text-ink-muted">
                {message}
            </p>

            <button
                type="button"
                onClick={onRetry}
                className="mt-8 rounded-lg bg-ink px-6 py-2.5 text-sm font-medium text-paper transition hover:bg-emerald"
            >
                Try again
            </button>
        </div>
    );
}