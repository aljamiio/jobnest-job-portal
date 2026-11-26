
function SavedJobs() {
    const savedJobs = [
        {
            id: 1,
            title: 'Frontend Developer',
            company: 'TechNova',
            location: 'Dhaka, Bangladesh',
            type: 'Full-time',
            salary: '৳35,000 - ৳50,000',
            savedDate: '2026-11-20',
        },
        {
            id: 2,
            title: 'Backend Developer',
            company: 'SoftTech Ltd.',
            location: 'Remote',
            type: 'Remote',
            salary: '৳40,000 - ৳60,000',
            savedDate: '2026-11-23',
        },
    ]

    return (
        <div>
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Saved Jobs
                </h2>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Find all the jobs you have saved for later.
                </p>
            </div>

            <div className="mb-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Total Saved Jobs
                </p>

                <h3 className="text-3xl font-bold text-blue-600 mt-2">
                    {savedJobs.length}
                </h3>
            </div>

            {savedJobs.length > 0 ? (
                <div className="space-y-4">
                    {savedJobs.map(job => (
                        <div
                            key={job.id}
                            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        {job.title}
                                    </h3>

                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                        {job.company} · {job.location}
                                    </p>

                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                        {job.type} · {job.salary}
                                    </p>

                                    <p className="text-xs text-gray-400 mt-2">
                                        Saved on {job.savedDate}
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    className="w-fit px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition"
                                >
                                    View Job
                                </button>

                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-10 text-center">
                    <p className="text-gray-500 dark:text-gray-400">
                        You haven't saved any jobs yet.
                    </p>
                </div>
            )}
        </div>
    )
}

export default SavedJobs
