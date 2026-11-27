
import { useState } from 'react'

function EmployerDashboard() {
    const [stats] = useState([
        {
            title: 'Total Jobs',
            value: 12,
            icon: '💼',
            color: 'blue',
        },
        {
            title: 'Active Jobs',
            value: 8,
            icon: '📢',
            color: 'green',
        },
        {
            title: 'Total Applicants',
            value: 156,
            icon: '👥',
            color: 'purple',
        },
        {
            title: 'Shortlisted',
            value: 24,
            icon: '⭐',
            color: 'orange',
        },
    ])

    const recentJobs = [
        {
            title: 'Frontend Developer',
            type: 'Full Time',
            applicants: 32,
            status: 'Active',
        },
        {
            title: 'UI/UX Designer',
            type: 'Remote',
            applicants: 24,
            status: 'Active',
        },
        {
            title: 'React Developer',
            type: 'Internship',
            applicants: 18,
            status: 'Closed',
        },
    ]

    const recentApplicants = [
        {
            name: 'Rahim Ahmed',
            position: 'Frontend Developer',
            date: 'Nov 27, 2026',
            status: 'Pending',
        },
        {
            name: 'Nusrat Jahan',
            position: 'UI/UX Designer',
            date: 'Nov 26, 2026',
            status: 'Shortlisted',
        },
        {
            name: 'Tanvir Hasan',
            position: 'React Developer',
            date: 'Nov 25, 2026',
            status: 'Reviewed',
        },
    ]

    const activities = [
        'New application received for Frontend Developer.',
        'UI/UX Designer job post received 5 new applicants.',
        'A candidate has been shortlisted.',
        'React Developer job post was closed.',
    ]

    const colorClasses = {
        blue: 'bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400',
        green: 'bg-green-100 text-green-600 dark:bg-green-950 dark:text-green-400',
        purple: 'bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-400',
        orange: 'bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-400',
    }

    return (
        <div className="space-y-8">

            {/* Welcome Section */}
            <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Dashboard Overview
                </h2>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                    Manage your jobs and track your recruitment activities.
                </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                {stats.map((stat) => (
                    <div
                        key={stat.title}
                        className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 shadow-sm"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {stat.title}
                                </p>
                                <h3 className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">
                                    {stat.value}
                                </h3>
                            </div>

                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${colorClasses[stat.color]}`}>
                                {stat.icon}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Jobs */}
            <section className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
                <div className="p-5 border-b border-gray-200 dark:border-gray-800">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Recent Job Posts
                    </h3>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                            <tr>
                                <th className="p-4 text-sm text-gray-600 dark:text-gray-300">Job Title</th>
                                <th className="p-4 text-sm text-gray-600 dark:text-gray-300">Job Type</th>
                                <th className="p-4 text-sm text-gray-600 dark:text-gray-300">Applicants</th>
                                <th className="p-4 text-sm text-gray-600 dark:text-gray-300">Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {recentJobs.map((job) => (
                                <tr key={job.title} className="border-t border-gray-100 dark:border-gray-800">
                                    <td className="p-4 font-medium text-gray-900 dark:text-white">{job.title}</td>
                                    <td className="p-4 text-sm text-gray-600 dark:text-gray-400">{job.type}</td>
                                    <td className="p-4 text-sm text-gray-600 dark:text-gray-400">{job.applicants}</td>
                                    <td className="p-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${job.status === 'Active'
                                            ? 'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-400'
                                            : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
                                            }`}>
                                            {job.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Applicants and Activities */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

                {/* Recent Applicants */}
                <section className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
                    <div className="p-5 border-b border-gray-200 dark:border-gray-800">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Recent Applicants
                        </h3>
                    </div>

                    <div className="divide-y divide-gray-100 dark:divide-gray-800">
                        {recentApplicants.map((applicant) => (
                            <div key={applicant.name} className="p-5">
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <h4 className="font-medium text-gray-900 dark:text-white">
                                            {applicant.name}
                                        </h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                            {applicant.position}
                                        </p>
                                        <p className="text-xs text-gray-400 mt-2">
                                            {applicant.date}
                                        </p>
                                    </div>

                                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400">
                                        {applicant.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Recent Activities */}
                <section className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
                    <div className="p-5 border-b border-gray-200 dark:border-gray-800">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Recent Activities
                        </h3>
                    </div>

                    <div className="p-5 space-y-5">
                        {activities.map((activity, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0"></span>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    {activity}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

            </div>

        </div>
    )
}

export default EmployerDashboard
