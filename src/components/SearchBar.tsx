import { Search } from "lucide-react";

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export function SearchBar({
    value,
    onChange,
    placeholder = "Search by job title...",
}: SearchBarProps) {
    return (
        <div className="relative w-full">
            <Search
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted"
                size={17}
            />

            <input
                type="search"
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
                className="w-full rounded-lg border border-line bg-paper-raised py-3 pl-11 pr-4 text-sm text-ink placeholder:text-ink-muted outline-none transition focus:border-emerald focus:ring-2 focus:ring-emerald-soft"
                aria-label="Search jobs"
            />
        </div>
    );
}