import type { EmployementTypes } from "../types/job";

interface EmploymentTypeFilterProps {
    value: EmployementTypes | null;
    onChange: React.Dispatch<React.SetStateAction<EmployementTypes | null>>;
}

const EMPLOYMENT_TYPES = [
    { label: "All", value: null },
    { label: "Full Time", value: "full_time" },
    { label: "Contract", value: "contract" },
    { label: "Internship", value: "internship" },
    { label: "Part Time", value: "part_time" },
];

export function EmploymentTypeFilter({
    value,
    onChange,
}: EmploymentTypeFilterProps) {
    return (
        <div className="w-full sm:w-56">
            <label
                htmlFor="employment-type"
                className="mb-1 block text-sm font-medium text-gray-700"
            >
                Employment Type
            </label>

            <select
                id="employment-type"
                value={value ?? ""}
                onChange={(e) => onChange(e.target.value as EmployementTypes)}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
                {EMPLOYMENT_TYPES.map((type) => (
                    <option key={type.value} value={type.value ?? ""}>
                        {type.label}
                    </option>
                ))}
            </select>
        </div>
    );
}