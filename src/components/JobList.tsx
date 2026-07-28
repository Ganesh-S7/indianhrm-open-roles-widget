import type { Job } from "../types/job";
import { JobCard } from "./JobCard";

interface JobListProps {
    jobs: Job[];
    onViewDetails: (job: Job) => void;
}

export function JobList({ jobs, onViewDetails }: JobListProps) {
    return (
        <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-paper-raised">
            {jobs.map((job, index) => (
                <JobCard
                    key={job.id}
                    job={job}
                    index={index}
                    onViewDetails={onViewDetails}
                />
            ))}
        </div>
    );
}