import type { JobsResponse, JobFilters } from "../types/job";

const API_URL = "https://api.indianhrm.com/public/careers/indianhrm/jobs";

export async function getJobs(
    filters: JobFilters = {}
): Promise<JobsResponse> {
    const params = new URLSearchParams();

    if (filters.limit) {
        params.append("limit", String(filters.limit));
    }

    if (filters.q) {
        params.append("q", filters.q);
    }
    if (filters.employment_type) {
        params.append("employment_type", filters.employment_type);
    }

    const response = await fetch(
        `${API_URL}${params.toString() ? `?${params.toString()}` : ""}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch jobs");
    }

    return response.json();
}