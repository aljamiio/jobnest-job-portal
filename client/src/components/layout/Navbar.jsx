
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'

function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 ${isActive
      ? 'text-blue-600'
      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
    }`

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-16">

          {/* Brand Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center shrink-0"
          >
            <img
              src={
                theme === 'light'
                  ? '/jobnest-logo-light.png'
                  : '/jobnest-logo-dark.png'
              }
              alt="JobNest"
              className="h-12 w-auto max-w-[200px] object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">

            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/jobs" className={navLinkClass}>
              Find Jobs
            </NavLink>

          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              aria-label="Toggle theme"
              title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>

            {/* Login */}
            <Link
              to="/login"
              className="text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-blue-600 transition"
            >
              Login
            </Link>

            {/* Sign Up */}
            <Link
              to="/register"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Get Started
            </Link>

          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <span className="text-2xl">×</span>
              ) : (
                <span className="text-2xl">☰</span>
              )}
            </button>

          </div>

        </div>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-800 py-4 space-y-4">

            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) =>
                `block text-sm font-medium ${isActive
                  ? 'text-blue-600'
                  : 'text-gray-600 dark:text-gray-300'
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/jobs"
              onClick={closeMenu}
              className={navLinkClass}
            >
              Find Jobs
            </NavLink>

            <div className="flex flex-col gap-3 pt-3 border-t border-gray-200 dark:border-gray-800">

              <Link
                to="/login"
                onClick={closeMenu}
                className="text-sm font-semibold text-gray-700 dark:text-gray-200"
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={closeMenu}
                className="bg-blue-600 hover:bg-blue-700 text-white text-center text-sm font-semibold px-5 py-2.5 rounded-lg transition"
              >
                Get Started
              </Link>

            </div>

          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar
