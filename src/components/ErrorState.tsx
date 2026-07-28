interface ErrorStateProps {
  message: string;
  onRetry: () => void;
}

export function ErrorState({
  message,
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="rounded-xl border border-red-200 bg-red-50 p-8 text-center">
      <h2 className="text-lg font-semibold text-red-700">
        Something went wrong
      </h2>

      <p className="mt-2 text-sm text-red-600">
        {message}
      </p>

      <button
        onClick={onRetry}
        className="mt-6 rounded-lg bg-red-600 px-5 py-2 text-white transition hover:bg-red-700"
      >
        Retry
      </button>
    </div>
  );
}