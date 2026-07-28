import type { Job } from "../types/job";
import { formatDate } from "../utils/formatDate";

interface JobCardProps {
    job: Job;
}

export function JobCard({ job }: JobCardProps) {
    return (
        <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                        {job.title}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        {job.department}
                    </p>
                </div>

                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 capitalize">
                    {job.employment_type.replace("_", " ")}
                </span>
            </div>

            <div className="mt-5 space-y-2 text-sm text-gray-600">
                <p>📍 {job.location}</p>
                <p>👥 {job.openings} Opening{job.openings > 1 ? "s" : ""}</p>
                <p>📅 Posted {formatDate(job.posted_at)}</p>
            </div>

            <button
                className="mt-6 font-medium text-blue-600 hover:underline"
            >
                View Details →
            </button>
        </article>
    );
}