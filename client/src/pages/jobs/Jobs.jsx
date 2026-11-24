
import { useState } from 'react'

function Jobs() {
  const [search, setSearch] = useState('')
  const [location, setLocation] = useState('')
  const [category, setCategory] = useState('')
  const [jobType, setJobType] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
  }

  const clearFilters = () => {
    setSearch('')
    setLocation('')
    setCategory('')
    setJobType('')
  }

  return (
    <div className="min-h-screen p-6 md:p-10 bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">

      <div className="max-w-7xl mx-auto">

        <div>
          <h1 className="text-3xl md:text-4xl font-bold">
            Browse Jobs
          </h1>

          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Find your dream job with JobNest.
          </p>
        </div>

        {/* Search and Filters */}
        <form
          onSubmit={handleSearch}
          className="mt-10 p-5 md:p-6 rounded-2xl border border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-slate-900"
        >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div>
              <label className="block mb-2 text-sm font-semibold">
                Job Title or Company
              </label>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="e.g. Frontend Developer"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-950 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold">
                Location
              </label>

              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Dhaka, Bangladesh"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-950 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Job Category */}
            <div>
              <label className="block mb-2 text-sm font-semibold">
                Job Category
              </label>

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-950 outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Categories</option>
                <option value="Development">Development</option>
                <option value="Design">Design</option>
                <option value="Marketing">Marketing</option>
                <option value="Business">Business</option>
                <option value="Finance">Finance</option>
                <option value="Customer Support">Customer Support</option>
              </select>
            </div>

            {/* Job Type */}
            <div>
              <label className="block mb-2 text-sm font-semibold">
                Job Type
              </label>

              <select
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-950 outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Job Types</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
                <option value="Contract">Contract</option>
              </select>
            </div>

          </div>

          <div className="mt-5 flex flex-col sm:flex-row gap-3">

            <button
              type="submit"
              className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
            >
              Search Jobs
            </button>

            <button
              type="button"
              onClick={clearFilters}
              className="px-8 py-3 rounded-xl border border-gray-300 dark:border-slate-700 hover:bg-gray-100 dark:hover:bg-slate-800 font-semibold transition"
            >
              Clear Filters
            </button>

          </div>

        </form>

      </div>

    </div>
  )
}

export default Jobs
