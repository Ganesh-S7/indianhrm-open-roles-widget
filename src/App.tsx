import { useMemo, useState } from "react";
import { useJobs } from "./hooks/useJobs";
import type { EmployementTypes } from "./types/job";
import { useDebounce } from "./hooks/useDebounce";
import { SearchBar } from "./components/SearchBar";
import { EmploymentTypeFilter } from "./components/EmploymentTypeFilter";
import { JobList } from "./components/JobList";
import { EmptyState } from "./components/EmptyState";
import { LoadingState } from "./components/LoadingState";
import { ErrorState } from "./components/ErrorState";

function App() {
  const [search, setSearch] = useState("");
  const [employmentType, setEmploymentType] = useState<EmployementTypes | null>(null);

  const debouncedSearch = useDebounce(search, 400);

  const filters = useMemo(
    () => ({
      limit: 50,
      q: debouncedSearch.trim() || undefined,
      employment_type: employmentType || undefined,
    }),
    [debouncedSearch, employmentType]
  );

  const {
    jobs,
    loading,
    error,
    retry,
  } = useJobs(filters);

  return (
    <div className="mx-auto max-w-7xl p-6">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end">
        <div className="flex-1">
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

      {loading ? (
        <LoadingState />
      ) : error ? (
        <ErrorState
          message={error}
          onRetry={retry}
        />
      ) : jobs.length === 0 ? (
        <EmptyState />
      ) : (
        <JobList jobs={jobs} />
      )}
    </div>
  )
}

export default App
