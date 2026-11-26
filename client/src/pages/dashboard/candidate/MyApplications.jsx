
import { useState } from 'react'
import { Link } from 'react-router-dom'

function MyApplications() {
    const [search, setSearch] = useState('')
    const [status, setStatus] = useState('All')

    const applications = [
        {
            id: 1,
            title: 'Frontend Developer',
            company: 'TechNova',
            location: 'Dhaka, Bangladesh',
            date: 'Nov 20, 2026',
            status: 'Pending',
        },
        {
            id: 2,
            title: 'React Developer',
            company: 'Digital Solutions',
            location: 'Dhaka, Bangladesh',
            date: 'Nov 18, 2026',
            status: 'Reviewed',
        },
        {
            id: 3,
            title: 'Junior Software Engineer',
            company: 'SoftTech BD',
            location: 'Remote',
            date: 'Nov 15, 2026',
            status: 'Shortlisted',
        },
        {
            id: 4,
            title: 'Web Developer',
            company: 'Creative IT',
            location: 'Chattogram, Bangladesh',
            date: 'Nov 10, 2026',
            status: 'Rejected',
        },
    ]

    const filteredApplications = applications.filter((application) => {
        const matchesSearch =
            application.title.toLowerCase().includes(search.toLowerCase()) ||
            application.company.toLowerCase().includes(search.toLowerCase())

        const matchesStatus =
            status === 'All' || application.status === status

        return matchesSearch && matchesStatus
    })

    const getStatusStyle = (applicationStatus) => {
        const styles = {
            Pending: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
            Reviewed: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
            Shortlisted: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
            Rejected: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
        }

        return styles[applicationStatus]
    }

    return (
        <div className="space-y-8">

            {/* Page Heading */}
            <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    My Applications
                </h2>

                <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Track and manage all your submitted job applications.
                </p>
            </div>

            {/* Application Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

                {[
                    { title: 'Total Applications', value: applications.length },
                    { title: 'Pending', value: applications.filter(app => app.status === 'Pending').length },
                    { title: 'Shortlisted', value: applications.filter(app => app.status === 'Shortlisted').length },
                    { title: 'Rejected', value: applications.filter(app => app.status === 'Rejected').length },
                ].map((stat) => (
                    <div
                        key={stat.title}
                        className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm"
                    >
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            {stat.title}
                        </p>

                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-3">
                            {stat.value}
                        </h3>
                    </div>
                ))}

            </div>

            {/* Search and Filter */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 shadow-sm">

                <div className="flex flex-col md:flex-row gap-4">

                    <input
                        type="text"
                        placeholder="Search by job title or company..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="All">All Status</option>
                        <option value="Pending">Pending</option>
                        <option value="Reviewed">Reviewed</option>
                        <option value="Shortlisted">Shortlisted</option>
                        <option value="Rejected">Rejected</option>
                    </select>

                </div>
            </div>

            {/* Applications List */}
            <div className="space-y-4">

                {filteredApplications.length > 0 ? (
                    filteredApplications.map((application) => (
                        <div
                            key={application.id}
                            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm"
                        >
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">

                                <div className="space-y-2">

                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        {application.title}
                                    </h3>

                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {application.company}
                                    </p>

                                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                                        <span>📍 {application.location}</span>
                                        <span>📅 Applied: {application.date}</span>
                                    </div>

                                </div>

                                <div className="flex flex-wrap items-center gap-4">

                                    <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${getStatusStyle(application.status)}`}>
                                        {application.status}
                                    </span>

                                    <Link
                                        to={`/jobs/${application.id}`}
                                        className="px-4 py-2 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg text-sm font-medium hover:bg-blue-600 hover:text-white transition"
                                    >
                                        View Job
                                    </Link>

                                </div>

                            </div>
                        </div>
                    ))
                ) : (
                    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-10 text-center">
                        <p className="text-gray-600 dark:text-gray-400">
                            No applications found.
                        </p>
                    </div>
                )}

            </div>

        </div>
    )
}

export default MyApplications
