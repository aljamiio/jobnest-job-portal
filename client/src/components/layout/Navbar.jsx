
import { Link, NavLink } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'

function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            JobNest
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600'
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/jobs"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600'
              }
            >
              Find Jobs
            </NavLink>

            <Link
              to="/login"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Sign Up
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              aria-label="Toggle theme"
              title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
