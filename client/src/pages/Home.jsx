import { Link } from 'react-router-dom'

function Home() {
  const handleSearch = (e) => {
    e.preventDefault()
  }


  const featuredJobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'TechNova',
      initial: 'T',
      location: 'Dhaka, Bangladesh',
      salary: '৳40k - ৳60k',
      type: 'Full Time',
      mode: 'Hybrid',
      color: 'bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400',
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      company: 'PixelCraft',
      initial: 'P',
      location: 'Remote',
      salary: '৳30k - ৳50k',
      type: 'Full Time',
      mode: 'Remote',
      color: 'bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400',
    },
    {
      id: 3,
      title: 'Backend Developer',
      company: 'CloudTech',
      initial: 'C',
      location: 'Dhaka, Bangladesh',
      salary: '৳50k - ৳75k',
      type: 'Full Time',
      mode: 'On-site',
      color: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400',
    },
    {
      id: 4,
      title: 'Digital Marketing Intern',
      company: 'GrowthLab',
      initial: 'G',
      location: 'Chattogram, Bangladesh',
      salary: '৳12k - ৳18k',
      type: 'Internship',
      mode: 'Hybrid',
      color: 'bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400',
    },
  ]



  const jobCategories = [
    {
      id: 1,
      name: 'Software Development',
      icon: '💻',
      jobs: '120+ Jobs',
      color: 'bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400',
    },
    {
      id: 2,
      name: 'Design & Creative',
      icon: '🎨',
      jobs: '85+ Jobs',
      color: 'bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400',
    },
    {
      id: 3,
      name: 'Marketing',
      icon: '📢',
      jobs: '64+ Jobs',
      color: 'bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400',
    },
    {
      id: 4,
      name: 'Finance & Accounting',
      icon: '💰',
      jobs: '52+ Jobs',
      color: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400',
    },
    {
      id: 5,
      name: 'Human Resources',
      icon: '👥',
      jobs: '38+ Jobs',
      color: 'bg-pink-100 text-pink-600 dark:bg-pink-500/20 dark:text-pink-400',
    },
    {
      id: 6,
      name: 'Customer Support',
      icon: '🎧',
      jobs: '45+ Jobs',
      color: 'bg-cyan-100 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400',
    },
    {
      id: 7,
      name: 'Sales & Business',
      icon: '📈',
      jobs: '72+ Jobs',
      color: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400',
    },
    {
      id: 8,
      name: 'Data & Analytics',
      icon: '📊',
      jobs: '41+ Jobs',
      color: 'bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400',
    },
  ]



  return (
    <main className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <div className="relative z-10">

              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-7">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                Your Career Starts Here
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                Find Your
                <span className="block text-blue-600 dark:text-blue-500">
                  Dream Job
                </span>
                Build Your Future.
              </h1>

              <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                Discover exciting career opportunities, connect with top
                companies, and take the next step toward your professional
                success with JobNest.
              </p>

              {/* Search Form */}
              <form
                onSubmit={handleSearch}
                className="mt-9 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3 shadow-xl shadow-slate-200/50 dark:shadow-black/20"
              >
                <div className="flex flex-col sm:flex-row gap-3">

                  <div className="flex-1 px-3 py-2">
                    <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
                      Job Title
                    </label>

                    <input
                      type="text"
                      placeholder="e.g. Software Engineer"
                      className="w-full bg-transparent outline-none text-sm text-slate-900 dark:text-white placeholder:text-slate-400"
                    />
                  </div>

                  <div className="hidden sm:block w-px bg-slate-200 dark:bg-slate-700" />

                  <div className="flex-1 px-3 py-2">
                    <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
                      Location
                    </label>

                    <input
                      type="text"
                      placeholder="e.g. Dhaka, Bangladesh"
                      className="w-full bg-transparent outline-none text-sm text-slate-900 dark:text-white placeholder:text-slate-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-4 rounded-xl transition-colors duration-200"
                  >
                    Search Jobs
                  </button>

                </div>
              </form>

              {/* Trust Indicator */}
              <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  Popular searches:
                </span>

                <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800">
                  Developer
                </span>

                <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800">
                  Designer
                </span>

                <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800">
                  Marketing
                </span>
              </div>

            </div>

            {/* Right Content - Career Card */}
            <div className="relative hidden md:flex items-center justify-center">

              <div className="absolute w-80 h-80 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl" />

              <div className="relative w-full max-w-md">

                {/* Main Card */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl shadow-slate-300/40 dark:shadow-black/30 p-7">

                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Career Opportunities
                      </p>
                      <h3 className="text-xl font-bold mt-1">
                        Explore Your Future
                      </h3>
                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 text-2xl">
                      ✦
                    </div>
                  </div>

                  {/* Job Card 1 */}
                  <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-xl">
                        💻
                      </div>

                      <div>
                        <h4 className="font-bold">
                          Software Engineer
                        </h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          Technology & Software
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="text-xs px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800">
                        Full Time
                      </span>

                      <span className="text-xs px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800">
                        Remote
                      </span>
                    </div>
                  </div>

                  {/* Job Card 2 */}
                  <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center text-xl">
                        🎨
                      </div>

                      <div>
                        <h4 className="font-bold">
                          UI/UX Designer
                        </h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          Design & Creative
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="text-xs px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800">
                        Full Time
                      </span>

                      <span className="text-xs px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800">
                        On-site
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Your next opportunity awaits.
                    </p>

                    <span className="text-blue-600 dark:text-blue-400 font-bold">
                      JobNest →
                    </span>
                  </div>

                </div>

                {/* Floating Badge */}
                <div className="absolute -top-6 -right-4 sm:-right-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl rounded-2xl px-5 py-3">
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Find Your Path
                  </p>
                  <p className="font-bold text-blue-600 dark:text-blue-400">
                    Start Today!
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Featured Jobs Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10">

            <div>
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                OPPORTUNITIES FOR YOU
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold mt-3">
                Featured Jobs
              </h2>

              <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl">
                Explore handpicked opportunities from companies looking for
                talented people like you.
              </p>
            </div>

            <Link
              to="/jobs"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all"
            >
              View All Jobs <span>→</span>
            </Link>

          </div>

          {/* Job Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {featuredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/20 transition-all duration-300"
              >

                {/* Company Info */}
                <div className="flex items-center justify-between">

                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold ${job.color}`}>
                    {job.initial}
                  </div>

                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    Featured
                  </span>

                </div>

                {/* Job Details */}
                <div className="mt-6">
                  <h3 className="text-lg font-bold leading-snug">
                    {job.title}
                  </h3>

                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                    {job.company}
                  </p>

                  <div className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-400">

                    <div className="flex items-center gap-2">
                      <span>📍</span>
                      <span>{job.location}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span>💰</span>
                      <span>{job.salary}</span>
                    </div>

                  </div>
                </div>

                {/* Job Tags */}
                <div className="flex flex-wrap gap-2 mt-6">

                  <span className="text-xs px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {job.type}
                  </span>

                  <span className="text-xs px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {job.mode}
                  </span>

                </div>

                {/* Apply Button */}
                <Link
                  to="/jobs"
                  className="block text-center mt-6 w-full py-3 rounded-xl border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-colors duration-200"
                >
                  View Details
                </Link>

              </div>
            ))}

          </div>

        </div>
      </section>



      {/* Job Categories Section */}
      <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-12">

            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              EXPLORE CATEGORIES
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold mt-3">
              Browse by Category
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              Explore job opportunities across different industries and
              discover the career path that matches your skills.
            </p>

          </div>

          {/* Category Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {jobCategories.map((category) => (
              <Link
                to="/jobs"
                key={category.id}
                className="group bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-blue-300 dark:hover:border-blue-500/50 hover:shadow-xl hover:shadow-slate-200/40 dark:hover:shadow-black/20 hover:-translate-y-1 transition-all duration-300"
              >

                {/* Category Icon */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${category.color}`}>
                  {category.icon}
                </div>

                {/* Category Details */}
                <div className="mt-6">

                  <h3 className="text-lg font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {category.name}
                  </h3>

                  <div className="flex items-center justify-between mt-4">

                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {category.jobs}
                    </span>

                    <span className="text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                      →
                    </span>

                  </div>

                </div>

              </Link>
            ))}

          </div>

          {/* Browse All Categories */}
          <div className="text-center mt-12">

            <Link
              to="/jobs"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold hover:bg-blue-600 hover:text-white hover:border-blue-600 dark:hover:bg-blue-500 dark:hover:border-blue-500 transition-colors duration-200"
            >
              Explore All Jobs <span>→</span>
            </Link>

          </div>

        </div>
      </section>



    </main>
  )
}

export default Home
