
import { Link, useParams } from 'react-router-dom'
import jobs from '../../data/jobs'

function JobDetails() {
    const { id } = useParams()

    const job = jobs.find((job) => job.id === Number(id))

    if (!job) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-slate-950 text-slate-900 dark:text-white px-4">
                <h1 className="text-3xl font-bold">Job Not Found</h1>

                <p className="mt-3 text-slate-600 dark:text-slate-400">
                    Sorry, the job you are looking for does not exist.
                </p>

                <Link
                    to="/jobs"
                    className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors"
                >
                    Browse All Jobs
                </Link>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                <Link
                    to="/jobs"
                    className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                    ← Back to Jobs
                </Link>

                <div className="mt-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-10">

                    <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-semibold">
                        {job.category}
                    </span>

                    <h1 className="text-3xl sm:text-4xl font-bold mt-5">
                        {job.title}
                    </h1>

                    <p className="text-lg text-slate-500 dark:text-slate-400 mt-3">
                        {job.company}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">

                        <div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                Location
                            </p>
                            <p className="font-semibold mt-1">{job.location}</p>
                        </div>

                        <div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                Salary
                            </p>
                            <p className="font-semibold mt-1">{job.salary}</p>
                        </div>

                        <div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                Job Type
                            </p>
                            <p className="font-semibold mt-1">{job.type}</p>
                        </div>

                        <div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                Experience
                            </p>
                            <p className="font-semibold mt-1">{job.experience}</p>
                        </div>

                    </div>

                    <div className="border-t border-slate-200 dark:border-slate-800 mt-10 pt-8">

                        <h2 className="text-xl font-bold mb-4">
                            Job Description
                        </h2>

                        <p className="text-slate-600 dark:text-slate-400 leading-7">
                            {job.description}
                        </p>

                    </div>

                    <div className="mt-8">

                        <h2 className="text-xl font-bold mb-4">
                            Responsibilities
                        </h2>

                        <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                            {job.responsibilities.map((item, index) => (
                                <li key={index} className="flex gap-3">
                                    <span className="text-blue-600">•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                    </div>

                    <div className="mt-8">

                        <h2 className="text-xl font-bold mb-4">
                            Requirements
                        </h2>

                        <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                            {job.requirements.map((item, index) => (
                                <li key={index} className="flex gap-3">
                                    <span className="text-blue-600">•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default JobDetails
