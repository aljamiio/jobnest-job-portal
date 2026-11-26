
function AppliedJobs() {
    const appliedJobs = [
        {
            id: 1,
            title: 'Frontend Developer',
            company: 'TechNova',
            location: 'Dhaka, Bangladesh',
            type: 'Full-time',
            status: 'Under Review',
            appliedDate: '2026-11-20',
        },
        {
            id: 2,
            title: 'React Developer',
            company: 'Digital Solutions',
            location: 'Remote',
            type: 'Remote',
            status: 'Shortlisted',
            appliedDate: '2026-11-22',
        },
    ]

    const getStatusStyle = (status) => {
        switch (status) {
            case 'Shortlisted':
                return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'

            case 'Under Review':
                return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'

            default:
                return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
        }
    }

    return (
        <div>
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Applied Jobs
                </h2>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Track all the jobs you have applied for.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-white dark:bg-gray-900 p-5 rounded-xl border border-gray-200 dark:border-gray-800">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Total Applications
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                        {appliedJobs.length}
                    </h3>
                </div>

                <div className="bg-white dark:bg-gray-900 p-5 rounded-xl border border-gray-200 dark:border-gray-800">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Under Review
                    </p>
                    <h3 className="text-2xl font-bold text-yellow-600 mt-2">
                        {appliedJobs.filter(job => job.status === 'Under Review').length}
                    </h3>
                </div>

                <div className="bg-white dark:bg-gray-900 p-5 rounded-xl border border-gray-200 dark:border-gray-800">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Shortlisted
                    </p>
                    <h3 className="text-2xl font-bold text-green-600 mt-2">
                        {appliedJobs.filter(job => job.status === 'Shortlisted').length}
                    </h3>
                </div>
            </div>

            <div className="space-y-4">
                {appliedJobs.map(job => (
                    <div
                        key={job.id}
                        className="bg-white dark:bg-gray-900 p-5 rounded-xl border border-gray-200 dark:border-gray-800"
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
                                    {job.type} · Applied on {job.appliedDate}
                                </p>
                            </div>

                            <span className={`inline-flex w-fit px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(job.status)}`}>
                                {job.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AppliedJobs
