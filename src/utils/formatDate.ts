// Formats a date string into "DD MMM YYYY" using the Indian locale.
export function formatDate(date: string) {
    return new Intl.DateTimeFormat("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
    }).format(new Date(date));
}