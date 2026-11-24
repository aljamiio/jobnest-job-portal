
import { Link, useNavigate } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import { useAuth } from '../../context/AuthContext'

function Login() {
  const { theme, toggleTheme } = useTheme()
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const email = formData.get('email')

    login({ email })

    navigate('/')
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-300">

      {/* Header */}
      <header className="w-full max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between shrink-0">

        {/* Brand Logo */}
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

        {/* Theme Toggle */}
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

      {/* Main Login Section */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex-1 flex items-center py-4">

        <div className="w-full grid lg:grid-cols-2 min-h-[600px] lg:min-h-[calc(100vh-96px)] rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">

          {/* Left Branding Panel */}
          <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-950 text-white p-8 sm:p-12 lg:p-14 flex flex-col justify-between">

            {/* Decorative Shapes */}
            <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full border-[50px] border-white/5" />

            <div className="absolute bottom-20 -left-32 w-80 h-80 rounded-full bg-blue-400/10 blur-3xl" />

            <div className="relative z-10">

              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 text-sm text-blue-100">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                Your career starts here
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold leading-[1.15] mt-8">
                Find work
                <br />
                that moves
                <br />
                <span className="text-blue-300">you forward.</span>
              </h1>

              <p className="text-blue-100/80 text-base sm:text-lg leading-8 mt-6 max-w-md">
                Your next opportunity is closer than you think.
                Discover jobs, connect with employers, and build
                a career you are proud of.
              </p>

            </div>

            {/* Opportunity Card */}
            <div className="relative z-10 mt-10">

              <div className="max-w-sm rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-5">

                <p className="text-blue-200 text-xs font-semibold uppercase tracking-widest">
                  Your next chapter
                </p>

                <div className="flex items-center gap-4 mt-4">

                  <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center text-2xl">
                    ✦
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">
                      New opportunities await
                    </h3>

                    <p className="text-blue-100/70 text-sm mt-1">
                      Take the next step in your career.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </section>

          {/* Right Login Panel */}
          <section className="bg-white dark:bg-slate-900 px-7 py-10 sm:px-12 lg:px-14 flex items-center justify-center transition-colors duration-300">

            <div className="w-full max-w-md">

              {/* Heading */}
              <div className="mb-8">

                <p className="text-blue-600 dark:text-blue-400 text-sm font-bold uppercase tracking-widest">
                  Welcome Back
                </p>

                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mt-3">
                  Sign in
                </h2>

                <p className="text-slate-500 dark:text-slate-400 mt-3">
                  Welcome back! Please enter your details.
                </p>

              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-5">

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
                    required
                    placeholder="name@example.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />

                </div>

                {/* Password */}
                <div>

                  <div className="flex justify-between items-center mb-2">

                    <label
                      htmlFor="password"
                      className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                    >
                      Password
                    </label>

                    <Link
                      to="/forgot-password"
                      className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline transition-colors"
                    >
                      Forgot password?
                    </Link>

                  </div>

                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    placeholder="Enter your password"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />

                </div>

                {/* Remember Me */}
                <div className="flex items-center gap-2">

                  <input
                    id="remember"
                    name="remember"
                    type="checkbox"
                    className="w-4 h-4 accent-blue-600"
                  />

                  <label
                    htmlFor="remember"
                    className="text-sm text-slate-600 dark:text-slate-400"
                  >
                    Remember me
                  </label>

                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base shadow-lg shadow-blue-600/20 transition duration-200"
                >
                  Sign In
                </button>

              </form>

              {/* Register Link */}
              <div className="mt-8 text-center">

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Don't have an account?{' '}

                  <Link
                    to="/register"
                    className="text-blue-600 dark:text-blue-400 font-bold hover:underline"
                  >
                    Create account
                  </Link>
                </p>

              </div>

              {/* Legal Links */}
              <div className="mt-9 pt-5 border-t border-slate-200 dark:border-slate-800 text-center">

                <p className="text-xs text-slate-400">
                  By continuing, you agree to our{' '}
                  <a href="#" className="hover:text-blue-600">
                    Terms
                  </a>
                  {' '}and{' '}
                  <a href="#" className="hover:text-blue-600">
                    Privacy Policy
                  </a>.
                </p>

              </div>

            </div>

          </section>

        </div>

      </main>

    </div>
  )
}

export default Login
