import { ChevronDown } from "lucide-react";
import type { EmployementTypes } from "../types/job";

interface EmploymentTypeFilterProps {
    value: EmployementTypes | null;
    onChange: React.Dispatch<React.SetStateAction<EmployementTypes | null>>;
}

const EMPLOYMENT_TYPES: { label: string; value: EmployementTypes | null }[] = [
    { label: "All types", value: null },
    { label: "Full Time", value: "full_time" },
    { label: "Contract", value: "contract" },
    { label: "Internship", value: "intern" },
    { label: "Part Time", value: "part_time" },
];

export function EmploymentTypeFilter({
    value,
    onChange,
}: EmploymentTypeFilterProps) {
    return (
        <div className="relative w-full sm:w-56">
            <label htmlFor="employment-type" className="sr-only">
                Employment Type
            </label>

            <select
                id="employment-type"
                value={value ?? ""}
                onChange={(e) =>
                    onChange((e.target.value || null) as EmployementTypes | null)
                }
                className="w-full appearance-none rounded-lg border border-line bg-paper-raised px-4 py-3 pr-10 text-sm text-ink outline-none transition focus:border-emerald focus:ring-2 focus:ring-emerald-soft"
            >
                {EMPLOYMENT_TYPES.map((type) => (
                    <option key={type.label} value={type.value ?? ""}>
                        {type.label}
                    </option>
                ))}
            </select>

            <ChevronDown
                size={16}
                className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-muted"
            />
        </div>
    );
}