export interface Job {
    id: string;
    slug: string;
    title: string;
    department: string;
    location: string;
    employment_type: "full_time" | "contract";
    description: string;
    requirements: string;
    openings: number;
    posted_at: string;
}

export interface JobsResponse {
    items: Job[];
    total: number;
}

export interface JobFilters {
    limit?: number;
    employment_type?: "full_time" | "part_time" | "contract" | "internship";
}