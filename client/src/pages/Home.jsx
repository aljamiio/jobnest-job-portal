
function Home() {
  const handleSearch = (e) => {
    e.preventDefault()
  }

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

    </main>
  )
}

export default Home
