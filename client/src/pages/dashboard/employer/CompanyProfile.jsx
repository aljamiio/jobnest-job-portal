
import { useState } from 'react'

function CompanyProfile() {
    const [company, setCompany] = useState({
        name: 'TechNova',
        industry: 'Information Technology',
        website: 'https://www.technova.com',
        location: 'Dhaka, Bangladesh',
        size: '50-100 Employees',
        founded: '2018',
        email: 'contact@technova.com',
        description:
            'TechNova is a technology company focused on building innovative digital solutions and helping businesses grow through technology.',
    })

    const [isEditing, setIsEditing] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target

        setCompany((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSave = (e) => {
        e.preventDefault()
        setIsEditing(false)
        alert('Company profile updated successfully!')
    }

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Company Profile
                </h1>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Manage your company information and public profile.
                </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <div className="flex flex-col items-center gap-4 sm:flex-row">
                    <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-blue-100 text-3xl font-bold text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                        {company.name.charAt(0)}
                    </div>

                    <div className="flex-1 text-center sm:text-left">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                            {company.name}
                        </h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            {company.industry}
                        </p>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            {company.location}
                        </p>
                    </div>

                    <button
                        onClick={() => setIsEditing(!isEditing)}
                        className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                    >
                        {isEditing ? 'Cancel Editing' : 'Edit Profile'}
                    </button>
                </div>
            </div>

            <form
                onSubmit={handleSave}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
            >
                <h2 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">
                    Company Information
                </h2>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {[
                        { label: 'Company Name', name: 'name' },
                        { label: 'Industry', name: 'industry' },
                        { label: 'Company Website', name: 'website' },
                        { label: 'Location', name: 'location' },
                        { label: 'Company Size', name: 'size' },
                        { label: 'Founded Year', name: 'founded' },
                        { label: 'Contact Email', name: 'email' },
                    ].map((field) => (
                        <div key={field.name}>
                            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                                {field.label}
                            </label>

                            <input
                                type="text"
                                name={field.name}
                                value={company[field.name]}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 disabled:cursor-not-allowed disabled:opacity-70 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            />
                        </div>
                    ))}

                    <div className="md:col-span-2">
                        <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Company Description
                        </label>

                        <textarea
                            name="description"
                            value={company.description}
                            onChange={handleChange}
                            disabled={!isEditing}
                            rows="5"
                            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 disabled:cursor-not-allowed disabled:opacity-70 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                        />
                    </div>
                </div>

                {isEditing && (
                    <div className="mt-6 flex justify-end">
                        <button
                            type="submit"
                            className="rounded-lg bg-green-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-green-700"
                        >
                            Save Changes
                        </button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default CompanyProfile
