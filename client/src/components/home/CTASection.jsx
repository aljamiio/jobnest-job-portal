
import { Link } from 'react-router-dom'

function CTASection() {
  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-3xl bg-blue-600 dark:bg-blue-700 px-6 py-14 sm:px-12 sm:py-16 text-center">

          {/* Decorative Background */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10" />
          <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-white/10" />

          {/* Content */}
          <div className="relative max-w-3xl mx-auto">

            <p className="text-sm font-semibold uppercase tracking-wider text-blue-100 mb-4">
              Your Future Starts Here
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready to Take the Next Step in Your Career?
            </h2>

            <p className="mt-5 text-blue-100 text-base sm:text-lg leading-relaxed">
              Discover exciting opportunities, connect with top employers,
              and find a job that matches your skills and ambitions.
            </p>

            {/* Action Buttons */}
            <div className="mt-9 flex flex-col sm:flex-row justify-center gap-4">

              <Link
                to="/jobs"
                className="px-8 py-3.5 rounded-xl bg-white text-blue-700 font-semibold hover:bg-blue-50 transition-colors duration-200"
              >
                Find Your Dream Job →
              </Link>

              <Link
                to="/register"
                className="px-8 py-3.5 rounded-xl border border-white/70 text-white font-semibold hover:bg-white/10 transition-colors duration-200"
              >
                Create Free Account
              </Link>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
