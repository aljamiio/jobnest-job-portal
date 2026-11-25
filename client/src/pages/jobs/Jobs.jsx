
import { useState } from 'react'

function Jobs() {
  const [search, setSearch] = useState('')
  const [location, setLocation] = useState('')
  const [category, setCategory] = useState('')
  const [jobType, setJobType] = useState('')

  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'TechNova',
      location: 'Dhaka, Bangladesh',
      salary: '৳40,000 - ৳60,000',
      type: 'Full-time',
      category: 'Development',
      posted: '2 days ago',
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      company: 'PixelCraft',
      location: 'Remote',
      salary: '৳30,000 - ৳45,000',
      type: 'Full-time',
      category: 'Design',
      posted: '3 days ago',
    },
    {
      id: 3,
      title: 'React Developer Intern',
      company: 'CodeBridge',
      location: 'Dhaka, Bangladesh',
      salary: '৳15,000 - ৳20,000',
      type: 'Internship',
      category: 'Development',
      posted: '1 day ago',
    },
    {
      id: 4,
      title: 'Digital Marketing Executive',
      company: 'GrowthHub',
      location: 'Chattogram, Bangladesh',
      salary: '৳25,000 - ৳35,000',
      type: 'Full-time',
      category: 'Marketing',
      posted: '5 days ago',
    },
    {
      id: 5,
      title: 'Customer Support Executive',
      company: 'SupportPro',
      location: 'Remote',
      salary: '৳20,000 - ৳30,000',
      type: 'Part-time',
      category: 'Customer Support',
      posted: '4 days ago',
    },
    {
      id: 6,
      title: 'Backend Developer',
      company: 'TechNova',
      location: 'Dhaka, Bangladesh',
      salary: '৳50,000 - ৳70,000',
      type: 'Full-time',
      category: 'Development',
      posted: '6 days ago',
    },
  ]

  const handleSearch = (e) => {
    e.preventDefault()
  }

  const clearFilters = () => {
    setSearch('')
    setLocation('')
    setCategory('')
    setJobType('')
  }

  const filteredJobs = jobs.filter((job) => {
    const searchMatch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase())

    const locationMatch =
      job.location.toLowerCase().includes(location.toLowerCase())

    const categoryMatch =
      category === '' || job.category === category

    const jobTypeMatch =
      jobType === '' || job.type === jobType

    return (
      searchMatch &&
      locationMatch &&
      categoryMatch &&
      jobTypeMatch
    )
  })

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

        {/* Search and Filters */}
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
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-950 outline-none focus:ring-2 focus:ring-blue-500"
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

          {/* Search Buttons */}
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

        {/* Job Listings */}
        <div className="mt-12">

          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              Latest Jobs
            </h2>

            <span className="text-sm text-gray-500 dark:text-gray-400">
              {filteredJobs.length} Jobs Available
            </span>
          </div>

          {/* Dynamic Job Cards and Empty State */}
          {filteredJobs.length > 0 ? (

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="p-6 rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-lg transition duration-300"
                >

                  <div className="flex justify-between items-start gap-4">

                    <div>
                      <h3 className="text-xl font-bold">
                        {job.title}
                      </h3>

                      <p className="mt-2 text-blue-600 dark:text-blue-400 font-medium">
                        {job.company}
                      </p>
                    </div>

                    <span className="text-xs px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
                      {job.type}
                    </span>

                  </div>

                  <div className="mt-5 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <p>📍 {job.location}</p>
                    <p>💰 {job.salary}</p>
                    <p>📂 {job.category}</p>
                    <p>🕒 Posted {job.posted}</p>
                  </div>

                  <button
                    type="button"
                    className="mt-6 w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
                  >
                    View Details
                  </button>

                </div>
              ))}

            </div>

          ) : (

            /* Empty State */
            <div className="py-16 px-6 text-center rounded-2xl border border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-slate-900">

              <div className="text-5xl mb-5">
                🔍
              </div>

              <h3 className="text-2xl font-bold">
                No Jobs Found
              </h3>

              <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                We couldn't find any jobs matching your search.
                Try adjusting your filters or search with different keywords.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
              >
                Clear All Filters
              </button>

            </div>

          )}

        </div>

      </div>

    </div>
  )
}

export default Jobs
