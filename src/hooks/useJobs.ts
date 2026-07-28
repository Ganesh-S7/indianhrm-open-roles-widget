import { useCallback, useEffect, useState } from "react";
import { getJobs } from "../api/job";
import type { Job, JobFilters } from "../types/job";

/**
 * Fetches jobs based on the provided filters and exposes
 * loading, error, and retry states for the UI.
 */

export function useJobs(filters: JobFilters = {}) {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchJobs = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            const data = await getJobs(filters);
            setJobs(data.items);
        } catch (err) {
            setError(
                err instanceof Error ? err.message : "Unable to load jobs."
            );
        } finally {
            setLoading(false);
        }
    }, [filters]);

    useEffect(() => {
        fetchJobs();
    }, [fetchJobs]);

    return {
        jobs,
        loading,
        error,
        retry: fetchJobs,
    };
}