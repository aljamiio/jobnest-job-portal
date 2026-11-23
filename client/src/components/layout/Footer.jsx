
import { Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'

function Footer() {
  const { theme } = useTheme()

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <img
                src={
                  theme === 'light'
                    ? '/jobnest-logo-light.png'
                    : '/jobnest-logo-dark.png'
                }
                alt="JobNest"
                className="h-12 w-auto max-w-[180px] object-contain"
              />
            </Link>

            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              Find your dream job, connect with top employers,
              and build a career you're passionate about.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/jobs" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                  Browse Jobs
                </Link>
              </li>

              <li>
                <Link to="/login" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                  Login
                </Link>
              </li>

              <li>
                <Link to="/register" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                  Create Account
                </Link>
              </li>
            </ul>
          </div>

          {/* For Job Seekers */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-5">
              For Job Seekers
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/jobs" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                  Find Jobs
                </Link>
              </li>

              <li>
                <Link to="/register" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                  Create Account
                </Link>
              </li>

              <li>
                <Link to="/login" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                  Sign In
                </Link>
              </li>
            </ul>
          </div>

          {/* For Employers */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-5">
              For Employers
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/register" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                  Create Account
                </Link>
              </li>

              <li>
                <Link to="/login" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                  Employer Login
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-10 pt-6">

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">

            <p className="text-center sm:text-left">
              © {currentYear} JobNest. All rights reserved.
            </p>

            <Link
              to="/"
              className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              Your Career, Our Priority.
            </Link>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer
