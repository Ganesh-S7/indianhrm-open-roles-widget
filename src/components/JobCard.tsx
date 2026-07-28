import type { Job } from "../types/job";
import { formatDate } from "../utils/formatDate";

interface JobCardProps {
    job: Job;
    index: number;
    onViewDetails: (job: Job) => void;
}

export function JobCard({ job, index, onViewDetails }: JobCardProps) {
    const handleActivate = () => onViewDetails(job);
    
    const employmentType = job.employment_type.replace("_", " ");

    return (
        <button
            role="button"
            tabIndex={0}
            onClick={handleActivate}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleActivate();
                }
            }}
            aria-label={`View details for ${job.title}`}
            className="group grid w-full text-start cursor-pointer grid-cols-1 items-center gap-3 px-3 py-4 sm:px-5 sm:py-6 outline-none transition-colors hover:bg-emerald-soft/50 focus-visible:bg-emerald-soft/50 sm:grid-cols-[3rem_1fr_auto] sm:gap-6"
        >
            <div
                className=" sm:flex hidden h-10 w-10 items-center justify-center rounded-full bg-gray-100 font-mono text-[10px] font-semibold text-gray-500 transition-colors group-hover:bg-emerald/10 group-hover:text-emerald">
                {String(index + 1).padStart(2, "0")}
            </div>

            <div className="min-w-0 border-l-2 border-transparent transition-colors group-hover:border-emerald sm:pl-6">
                <div className="flex sm:flex-wrap justify-between sm:justify-start items-baseline gap-x-3 gap-y-1">
                    <h2 className="font-display text-base md:text-xl sm:text-lg font-medium text-ink transition-colors group-hover:text-emerald">
                        {job.title}
                    </h2>

                    <span className="font-mono text-[11px] uppercase tracking-wide text-emerald">
                        {employmentType}
                    </span>
                </div>

                <p className="mt-1 text-xs sm:text-sm text-ink-muted">
                    {job.department} • {job.location}
                </p>
            </div>

            <div className="flex items-center justify-between gap-6 px-1 sm:flex-col sm:items-end sm:gap-2 sm:pl-0 sm:text-right">
                <div className="sm:text-sm text-xs text-ink-muted flex sm:flex-col flex-row justify-between w-full">
                    <p>{job.openings} opening{job.openings > 1 ? "s" : ""}</p>
                    <p className="mt-0.5 text-xs">Posted {formatDate(job.posted_at)}</p>
                </div>

                <span className="whitespace-nowrap text-sm font-medium text-emerald sm:block hidden opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                    View details →
                </span>
            </div>
        </button>
    );
}