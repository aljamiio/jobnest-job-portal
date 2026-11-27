
import { useState } from 'react'

function PostJob() {
    const [formData, setFormData] = useState({
        title: '',
        company: 'TechNova',
        category: '',
        jobType: '',
        workplace: '',
        location: '',
        minSalary: '',
        maxSalary: '',
        deadline: '',
        vacancies: '1',
        description: '',
        requirements: '',
        responsibilities: '',
        skills: '',
    })

    const [success, setSuccess] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))

        setSuccess(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log('New Job:', formData)

        setSuccess(true)

        setFormData({
            title: '',
            company: 'TechNova',
            category: '',
            jobType: '',
            workplace: '',
            location: '',
            minSalary: '',
            maxSalary: '',
            deadline: '',
            vacancies: '1',
            description: '',
            requirements: '',
            responsibilities: '',
            skills: '',
        })

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    const inputClass =
        'w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-900'

    const labelClass =
        'mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300'

    return (
        <div className="mx-auto max-w-5xl space-y-6">

            {/* Page Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Post a Job
                </h1>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Create a new job opening and find the right candidates for your company.
                </p>
            </div>

            {/* Success Message */}
            {success && (
                <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-700 dark:border-green-800 dark:bg-green-950 dark:text-green-300">
                    Job posted successfully! (Demo only — not saved to database.)
                </div>
            )}

            {/* Job Form */}
            <form
                onSubmit={handleSubmit}
                className="space-y-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-8"
            >

                {/* Basic Information */}
                <section>
                    <h2 className="mb-5 border-b border-gray-200 pb-3 text-lg font-semibold text-gray-900 dark:border-gray-700 dark:text-white">
                        Basic Information
                    </h2>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                        <div className="md:col-span-2">
                            <label className={labelClass}>
                                Job Title *
                            </label>

                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="e.g. Frontend Developer"
                                className={inputClass}
                                required
                            />
                        </div>

                        <div>
                            <label className={labelClass}>
                                Company Name *
                            </label>

                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                className={inputClass}
                                required
                            />
                        </div>

                        <div>
                            <label className={labelClass}>
                                Job Category *
                            </label>

                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className={inputClass}
                                required
                            >
                                <option value="">Select Category</option>
                                <option value="Technology">Technology</option>
                                <option value="Design">Design</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Finance">Finance</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Education">Education</option>
                                <option value="Healthcare">Healthcare</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label className={labelClass}>
                                Job Type *
                            </label>

                            <select
                                name="jobType"
                                value={formData.jobType}
                                onChange={handleChange}
                                className={inputClass}
                                required
                            >
                                <option value="">Select Job Type</option>
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Internship">Internship</option>
                                <option value="Contract">Contract</option>
                            </select>
                        </div>

                        <div>
                            <label className={labelClass}>
                                Workplace Type *
                            </label>

                            <select
                                name="workplace"
                                value={formData.workplace}
                                onChange={handleChange}
                                className={inputClass}
                                required
                            >
                                <option value="">Select Workplace</option>
                                <option value="On-site">On-site</option>
                                <option value="Remote">Remote</option>
                                <option value="Hybrid">Hybrid</option>
                            </select>
                        </div>

                    </div>
                </section>

                {/* Location & Salary */}
                <section>
                    <h2 className="mb-5 border-b border-gray-200 pb-3 text-lg font-semibold text-gray-900 dark:border-gray-700 dark:text-white">
                        Location & Salary
                    </h2>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                        <div>
                            <label className={labelClass}>
                                Job Location *
                            </label>

                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                placeholder="e.g. Dhaka, Bangladesh"
                                className={inputClass}
                                required
                            />
                        </div>

                        <div>
                            <label className={labelClass}>
                                Number of Vacancies *
                            </label>

                            <input
                                type="number"
                                name="vacancies"
                                min="1"
                                value={formData.vacancies}
                                onChange={handleChange}
                                className={inputClass}
                                required
                            />
                        </div>

                        <div>
                            <label className={labelClass}>
                                Minimum Salary (BDT)
                            </label>

                            <input
                                type="number"
                                name="minSalary"
                                min="0"
                                value={formData.minSalary}
                                onChange={handleChange}
                                placeholder="e.g. 25000"
                                className={inputClass}
                            />
                        </div>

                        <div>
                            <label className={labelClass}>
                                Maximum Salary (BDT)
                            </label>

                            <input
                                type="number"
                                name="maxSalary"
                                min="0"
                                value={formData.maxSalary}
                                onChange={handleChange}
                                placeholder="e.g. 50000"
                                className={inputClass}
                            />
                        </div>

                    </div>
                </section>

                {/* Application Details */}
                <section>
                    <h2 className="mb-5 border-b border-gray-200 pb-3 text-lg font-semibold text-gray-900 dark:border-gray-700 dark:text-white">
                        Application Details
                    </h2>

                    <div>
                        <label className={labelClass}>
                            Application Deadline *
                        </label>

                        <input
                            type="date"
                            name="deadline"
                            value={formData.deadline}
                            onChange={handleChange}
                            min={new Date().toISOString().split('T')[0]}
                            className={inputClass}
                            required
                        />
                    </div>
                </section>

                {/* Job Description */}
                <section>
                    <h2 className="mb-5 border-b border-gray-200 pb-3 text-lg font-semibold text-gray-900 dark:border-gray-700 dark:text-white">
                        Job Description
                    </h2>

                    <div className="space-y-5">

                        <div>
                            <label className={labelClass}>
                                Job Description *
                            </label>

                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows="5"
                                placeholder="Describe the job role..."
                                className={inputClass}
                                required
                            />
                        </div>

                        <div>
                            <label className={labelClass}>
                                Responsibilities *
                            </label>

                            <textarea
                                name="responsibilities"
                                value={formData.responsibilities}
                                onChange={handleChange}
                                rows="5"
                                placeholder="List the main responsibilities..."
                                className={inputClass}
                                required
                            />
                        </div>

                        <div>
                            <label className={labelClass}>
                                Requirements *
                            </label>

                            <textarea
                                name="requirements"
                                value={formData.requirements}
                                onChange={handleChange}
                                rows="5"
                                placeholder="List the required qualifications and experience..."
                                className={inputClass}
                                required
                            />
                        </div>

                        <div>
                            <label className={labelClass}>
                                Required Skills
                            </label>

                            <input
                                type="text"
                                name="skills"
                                value={formData.skills}
                                onChange={handleChange}
                                placeholder="React, JavaScript, Tailwind CSS"
                                className={inputClass}
                            />

                            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                                Separate skills with commas.
                            </p>
                        </div>

                    </div>
                </section>

                {/* Submit Button */}
                <div className="flex flex-col-reverse gap-3 border-t border-gray-200 pt-6 dark:border-gray-700 sm:flex-row sm:justify-end">

                    <button
                        type="reset"
                        onClick={() => {
                            setFormData({
                                title: '',
                                company: 'TechNova',
                                category: '',
                                jobType: '',
                                workplace: '',
                                location: '',
                                minSalary: '',
                                maxSalary: '',
                                deadline: '',
                                vacancies: '1',
                                description: '',
                                requirements: '',
                                responsibilities: '',
                                skills: '',
                            })
                            setSuccess(false)
                        }}
                        className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                    >
                        Clear Form
                    </button>

                    <button
                        type="submit"
                        className="rounded-lg bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                    >
                        Post Job
                    </button>

                </div>

            </form>
        </div>
    )
}

export default PostJob
