
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useTheme } from '../../context/ThemeContext'
import { useAuth } from '../../context/AuthContext'

function Register() {
  const { theme, toggleTheme } = useTheme()
  const { register } = useAuth()
  const navigate = useNavigate()

  const [errors, setErrors] = useState({})
  const [formError, setFormError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const name = formData.get('name').trim()
    const email = formData.get('email').trim()
    const password = formData.get('password')
    const confirmPassword = formData.get('confirmPassword')
    const terms = formData.get('terms')

    const newErrors = {}

    if (!name) {
      newErrors.name = 'Full name is required.'
    } else if (name.length < 2) {
      newErrors.name = 'Name must contain at least 2 characters.'
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!email) {
      newErrors.email = 'Email address is required.'
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address.'
    }

    if (!password) {
      newErrors.password = 'Password is required.'
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.'
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password.'
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.'
    }

    if (!terms) {
      newErrors.terms = 'You must accept the terms and conditions.'
    }

    setErrors(newErrors)
    setFormError('')

    if (Object.keys(newErrors).length > 0) {
      return
    }

    register({ name, email })

    navigate('/')
  }

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl border ${
      errors[field]
        ? 'border-red-500 focus:ring-red-500'
        : 'border-slate-200 dark:border-slate-700 focus:ring-blue-500'
    } bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition`

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-300">

      {/* Header */}
      <header className="w-full max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between shrink-0">

        <Link to="/" className="flex items-center shrink-0">
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

        <button
          onClick={toggleTheme}
          type="button"
          aria-label="Toggle theme"
          title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>

      </header>

      {/* Main Register Section */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex-1 flex items-center py-4">

        <div className="w-full grid lg:grid-cols-2 min-h-[600px] lg:min-h-[calc(100vh-96px)] rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">

          {/* Left Branding Panel */}
          <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-950 text-white p-8 sm:p-12 lg:p-14 flex flex-col justify-between">

            <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full border-[50px] border-white/5" />

            <div className="absolute bottom-20 -left-32 w-80 h-80 rounded-full bg-blue-400/10 blur-3xl" />

            <div className="relative z-10">

              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 text-sm text-blue-100">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                Start your journey today
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold leading-[1.15] mt-8">
                Build your
                <br />
                future with
                <br />
                <span className="text-blue-300">JobNest.</span>
              </h1>

              <p className="text-blue-100/80 text-base sm:text-lg leading-8 mt-6 max-w-md">
                Create your account, explore exciting opportunities,
                connect with employers, and take the next step
                toward your dream career.
              </p>

            </div>

            {/* Opportunity Card */}
            <div className="relative z-10 mt-10">

              <div className="max-w-sm rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-5">

                <p className="text-blue-200 text-xs font-semibold uppercase tracking-widest">
                  Your journey begins
                </p>

                <div className="flex items-center gap-4 mt-4">

                  <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center text-2xl">
                    ✦
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">
                      Opportunities await
                    </h3>

                    <p className="text-blue-100/70 text-sm mt-1">
                      Create your profile and get started.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </section>

          {/* Right Register Panel */}
          <section className="bg-white dark:bg-slate-900 px-7 py-10 sm:px-12 lg:px-14 flex items-center justify-center transition-colors duration-300">

            <div className="w-full max-w-md">

              {/* Heading */}
              <div className="mb-7">

                <p className="text-blue-600 dark:text-blue-400 text-sm font-bold uppercase tracking-widest">
                  Get Started
                </p>

                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mt-3">
                  Create account
                </h2>

                <p className="text-slate-500 dark:text-slate-400 mt-3">
                  Join JobNest and find your next opportunity.
                </p>

              </div>

              {/* General Error */}
              {formError && (
                <p role="alert" className="mb-4 text-sm text-red-600 dark:text-red-400">
                  {formError}
                </p>
              )}

              {/* Register Form */}
              <form onSubmit={handleSubmit} noValidate className="space-y-4">

                {/* Full Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your full name"
                    className={inputClass('name')}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />

                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="name@example.com"
                    className={inputClass('email')}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />

                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Password
                  </label>

                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    placeholder="Create a password"
                    className={inputClass('password')}
                    aria-invalid={Boolean(errors.password)}
                    aria-describedby={errors.password ? 'password-error' : undefined}
                  />

                  {errors.password && (
                    <p id="password-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Confirm Password
                  </label>

                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    placeholder="Confirm your password"
                    className={inputClass('confirmPassword')}
                    aria-invalid={Boolean(errors.confirmPassword)}
                    aria-describedby={errors.confirmPassword ? 'confirmPassword-error' : undefined}
                  />

                  {errors.confirmPassword && (
                    <p id="confirmPassword-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>

                {/* Terms */}
                <div className="pt-1">

                  <div className="flex items-start gap-2">

                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      className="w-4 h-4 mt-1 accent-blue-600 shrink-0"
                      aria-invalid={Boolean(errors.terms)}
                      aria-describedby={errors.terms ? 'terms-error' : undefined}
                    />

                    <label
                      htmlFor="terms"
                      className="text-sm text-slate-600 dark:text-slate-400"
                    >
                      I agree to the{' '}
                      <Link
                        to="/terms"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Terms of Service
                      </Link>
                      {' '}and{' '}
                      <Link
                        to="/privacy"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Privacy Policy
                      </Link>
                    </label>

                  </div>

                  {errors.terms && (
                    <p id="terms-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.terms}
                    </p>
                  )}

                </div>

                {/* Create Account Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base shadow-lg shadow-blue-600/20 transition duration-200"
                >
                  Create Account
                </button>

              </form>

              {/* Login Link */}
              <div className="mt-7 text-center">

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Already have an account?{' '}

                  <Link
                    to="/login"
                    className="text-blue-600 dark:text-blue-400 font-bold hover:underline"
                  >
                    Sign in
                  </Link>
                </p>

              </div>

              {/* Legal Links */}
              <div className="mt-7 pt-5 border-t border-slate-200 dark:border-slate-800 text-center">

                <p className="text-xs text-slate-400">
                  By creating an account, you agree to our Terms and Privacy Policy.
                </p>

              </div>

            </div>

          </section>

        </div>

      </main>

    </div>
  )
}

export default Register
