
function CandidateDashboard() {
    const stats = [
        {
            title: 'Applied Jobs',
            value: '12',
            icon: '💼',
            color: 'blue',
        },
        {
            title: 'Saved Jobs',
            value: '08',
            icon: '🔖',
            color: 'purple',
        },
        {
            title: 'Interviews',
            value: '03',
            icon: '📅',
            color: 'green',
        },
        {
            title: 'Profile Views',
            value: '24',
            icon: '👁️',
            color: 'orange',
        },
    ]

    return (
        <div className="space-y-8">

            {/* Welcome Section */}
            <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Dashboard Overview
                </h2>

                <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Track your job applications and manage your career activities.
                </p>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

                {stats.map((stat) => (
                    <div
                        key={stat.title}
                        className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm"
                    >
                        <div className="flex items-center justify-between">

                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {stat.title}
                                </p>

                                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-3">
                                    {stat.value}
                                </h3>
                            </div>

                            <div className="text-3xl">
                                {stat.icon}
                            </div>

                        </div>
                    </div>
                ))}

            </div>

            {/* Recent Activity */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm">

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Recent Activity
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Your recent job application activities will appear here.
                </p>

            </div>

        </div>
    )
}

export default CandidateDashboard
