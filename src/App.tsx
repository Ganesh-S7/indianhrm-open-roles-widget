import { useMemo, useState } from "react";
import { useJobs } from "./hooks/useJobs";
import type { EmployementTypes, Job } from "./types/job";
import { useDebounce } from "./hooks/useDebounce";
import { SearchBar } from "./components/SearchBar";
import { EmploymentTypeFilter } from "./components/EmploymentTypeFilter";
import { JobList } from "./components/JobList";
import { EmptyState } from "./components/EmptyState";
import { LoadingState } from "./components/LoadingState";
import { ErrorState } from "./components/ErrorState";
import { PageHeader } from "./components/pageHeader";
import { JobDetailsModal } from "./components/JobDetailsModal";

function App() {
  const [search, setSearch] = useState("");
  const [employmentType, setEmploymentType] = useState<EmployementTypes | null>(null);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  // Debounce search input to reduce API requests
  const debouncedSearch = useDebounce(search, 400);

  // Memoize filters to avoid unnecessary data fetching
  const filters = useMemo(
    () => ({
      limit: 50,
      q: debouncedSearch.trim() || undefined,
      employment_type: employmentType || undefined,
    }),
    [debouncedSearch, employmentType]
  );

  // Fetch jobs based on the current filters
  const {
    jobs,
    loading,
    error,
    retry,
  } = useJobs(filters);

  return (
    <div className="min-h-screen bg-paper">
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <PageHeader totalJobs={jobs.length} />

        <div className="mb-8 flex flex-col gap-4 sm:flex-row">
          <div className="min-w-0 flex-1">
            <SearchBar
              value={search}
              onChange={setSearch}
            />
          </div>

          <EmploymentTypeFilter
            value={employmentType}
            onChange={setEmploymentType}
          />
        </div>

        {
          loading ? (
            <LoadingState />
          ) : error ? (
            <ErrorState
              message={error}
              onRetry={retry}
            />
          ) : jobs.length === 0 ? (
            <EmptyState />
          ) : (
            <JobList
              jobs={jobs}
              onViewDetails={setSelectedJob}
            />
          )
        }

        <JobDetailsModal
          job={selectedJob}
          isOpen={selectedJob !== null}
          onClose={() => setSelectedJob(null)}
        />
      </main>
    </div>
  )
}

export default App