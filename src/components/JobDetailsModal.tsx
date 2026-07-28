import { useEffect } from "react";
import { X } from "lucide-react";
import type { Job } from "../types/job";
import { formatDate } from "../utils/formatDate";

interface JobDetailsModalProps {
    job: Job | null;
    isOpen: boolean;
    onClose: () => void;
}

export function JobDetailsModal({
    job,
    isOpen,
    onClose,
}: JobDetailsModalProps) {

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [isOpen, onClose]);

    if (!isOpen || !job) return null;

    const employmentType =
        job.employment_type.replace("_", " ");

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="job-title"
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-4 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-line bg-paper-raised shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="sticky top-0 flex items-start justify-between gap-4 sm:gap-6 border-b border-line bg-paper-raised px-4 py-3 sm:px-8 sm:py-6">
                    <div>
                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald">
                            {employmentType}
                        </p>

                        <h2
                            id="job-title"
                            className="mt-2 font-display text-xl sm:text-2xl md:text-3xl font-medium text-ink"
                        >
                            {job.title}
                        </h2>

                        <p className="mt-1 sm:text-base text-xs text-ink-muted">
                            {job.department}
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        className="shrink-0 cursor-pointer hover:scale-105 duration-200 rounded-full p-2 text-ink-muted transition hover:bg-emerald-soft hover:text-emerald"
                        aria-label="Close modal"
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* Metadata */}
                <div className="grid grid-cols-2 gap-3 sm:gap-6 border-b border-line px-4 py-3 sm:px-8 sm:py-6 sm:grid-cols-4">
                    <div>
                        <p className="font-mono text-[10px] sm:text-xs uppercase tracking-wide text-ink-muted">
                            Location
                        </p>
                        <p className="mt-1 text-xs sm:text-sm text-ink">{job.location}</p>
                    </div>

                    <div>
                        <p className="font-mono text-[10px] sm:text-xs uppercase tracking-wide text-ink-muted">
                            Openings
                        </p>
                        <p className="mt-1 text-xs sm:text-sm text-ink">{job.openings}</p>
                    </div>

                    <div>
                        <p className="font-mono text-[10px] sm:text-xs uppercase tracking-wide text-ink-muted">
                            Posted
                        </p>
                        <p className="mt-1 text-xs sm:text-sm text-ink">{formatDate(job.posted_at)}</p>
                    </div>

                    <div>
                        <p className="font-mono text-[10px] sm:text-xs uppercase tracking-wide text-ink-muted">
                            Type
                        </p>
                        <p className="mt-1 text-xs sm:text-sm capitalize text-ink">
                            {employmentType}
                        </p>
                    </div>
                </div>

                {/* Description */}
                <div className="space-y-10 p-4 sm:p-8">
                    <section>
                        <h3 className="sm:mb-4 mb-2 font-display text-lg sm:text-xl font-medium text-ink">
                            Description
                        </h3>

                        <div
                            className="prose-sm sm:prose prose-h1:text-2xl md:prose-h1:text-3xl prose-h2:text-xl md:prose-h2:text-2xl prose-h3:text-lg md:prose-h3:text-xl
                            [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:mb-2 [&_li::marker]:text-emerald
                            max-w-none text-ink-muted prose-headings:font-display prose-headings:text-ink prose-strong:text-ink prose-a:text-emerald prose-li:marker:text-emerald"
                            dangerouslySetInnerHTML={{
                                __html: job.description,
                            }}
                        />
                    </section>

                    <section>
                        <h3 className="sm:mb-4 mb-2 font-display text-lg sm:text-xl font-medium text-ink">
                            Requirements
                        </h3>

                        <div
                            className="prose-sm sm:prose prose-h1:text-2xl sm:prose-h1:text-3xl prose-h2:text-xl sm:prose-h2:text-2xl prose-h3:text-lg sm:prose-h3:text-xl
                            [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:mb-2 [&_li::marker]:text-emerald
                             max-w-none text-ink-muted prose-headings:font-display prose-headings:text-ink prose-strong:text-ink prose-a:text-emerald prose-li:marker:text-emerald"
                            dangerouslySetInnerHTML={{
                                __html: job.requirements,
                            }}
                        />
                    </section>
                </div>
            </div>
        </div>
    );
}