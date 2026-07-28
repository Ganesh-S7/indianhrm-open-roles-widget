interface PageHeaderProps {
    totalJobs: number;
}

export function PageHeader({ totalJobs }: PageHeaderProps) {
    return (
        <header className="sm:mb-12 mb-6 border-b border-line sm:pb-10 pb-5">
            <img
                src="https://www.indianhrm.com/indian-hrm-logo-nav.webp"
                alt="IndianHRM logo"
                className="h-7 w-auto"
            />

            <div className="sm:mt-9 md:mt-6 mt-5 flex flex-col sm:gap-6 gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald">
                        Careers
                    </p>

                    <h1 className="sm:mt-3 mt-2 font-display text-3xl sm:text-5xl font-medium tracking-tight text-ink md:text-6xl">
                        Open Roles
                    </h1>

                    <p className="mt-4 max-w-xl text-base sm:text-lg text-ink-muted">
                        Join our team and help build products that make work simpler for everyone.
                    </p>
                </div>

                <p className="font-mono text-sm text-ink-muted sm:text-right">
                    <span className="block text-xl sm:text-3xl font-medium text-ink">
                        {totalJobs}
                    </span>
                    open position{totalJobs !== 1 ? "s" : ""}
                </p>
            </div>
        </header>
    );
}