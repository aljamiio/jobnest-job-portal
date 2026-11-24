
import { useState } from 'react'

function Jobs() {
  const [search, setSearch] = useState('')
  const [location, setLocation] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
  }

  return (
    <div className="min-h-screen p-6 md:p-10 bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">

      <div className="max-w-7xl mx-auto">

        {/* Page Heading */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">
            Browse Jobs
          </h1>

          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Find your dream job with JobNest.
          </p>
        </div>

        {/* Search Section */}
        <form
          onSubmit={handleSearch}
          className="mt-10 p-5 md:p-6 rounded-2xl border border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-slate-900"
        >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Job Search */}
            <div>
              <label className="block mb-2 text-sm font-semibold">
                Job Title or Company
              </label>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="e.g. Frontend Developer"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-950 outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Location Search */}
            <div>
              <label className="block mb-2 text-sm font-semibold">
                Location
              </label>

              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Dhaka, Bangladesh"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-950 outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

          </div>

          <div className="mt-5">
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-300"
            >
              Search Jobs
            </button>
          </div>

        </form>

      </div>

    </div>
  )
}

export default Jobs
