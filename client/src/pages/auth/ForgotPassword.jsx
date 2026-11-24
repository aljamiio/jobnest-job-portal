
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useTheme } from '../../context/ThemeContext'

function ForgotPassword() {
    const { theme, toggleTheme } = useTheme()
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        setSubmitted(true)
    }

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

            {/* Main Section */}
            <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex-1 flex items-center py-4">

                <div className="w-full grid lg:grid-cols-2 min-h-[600px] lg:min-h-[calc(100vh-96px)] rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">

                    {/* Left Branding Panel */}
                    <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-950 text-white p-8 sm:p-12 lg:p-14 flex flex-col justify-between">

                        <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full border-[50px] border-white/5" />

                        <div className="absolute bottom-20 -left-32 w-80 h-80 rounded-full bg-blue-400/10 blur-3xl" />

                        <div className="relative z-10">

                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 text-sm text-blue-100">
                                <span className="w-2 h-2 rounded-full bg-green-400" />
                                We're here to help
                            </span>

                            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold leading-[1.15] mt-8">
                                Your next
                                <br />
                                opportunity
                                <br />
                                <span className="text-blue-300">awaits you.</span>
                            </h1>

                            <p className="text-blue-100/80 text-base sm:text-lg leading-8 mt-6 max-w-md">
                                Don't let a forgotten password stop your journey.
                                Recover your account and get back to discovering
                                opportunities with JobNest.
                            </p>

                        </div>

                        {/* Support Card */}
                        <div className="relative z-10 mt-10">

                            <div className="max-w-sm rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-5">

                                <p className="text-blue-200 text-xs font-semibold uppercase tracking-widest">
                                    Account Security
                                </p>

                                <div className="flex items-center gap-4 mt-4">

                                    <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center text-2xl">
                                        🔒
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-lg">
                                            Your account matters
                                        </h3>

                                        <p className="text-blue-100/70 text-sm mt-1">
                                            Get back to your career journey.
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </section>

                    {/* Right Forgot Password Panel */}
                    <section className="bg-white dark:bg-slate-900 px-7 py-10 sm:px-12 lg:px-14 flex items-center justify-center transition-colors duration-300">

                        <div className="w-full max-w-md">

                            {/* Heading */}
                            <div className="mb-8">

                                <p className="text-blue-600 dark:text-blue-400 text-sm font-bold uppercase tracking-widest">
                                    Account Recovery
                                </p>

                                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mt-3">
                                    Forgot password?
                                </h2>

                                <p className="text-slate-500 dark:text-slate-400 mt-3 leading-7">
                                    No worries! Enter your registered email address
                                    and we'll help you recover your account.
                                </p>

                            </div>

                            {/* Success Message */}
                            {submitted ? (

                                <div className="p-5 rounded-xl border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950/40">

                                    <h3 className="font-semibold text-green-700 dark:text-green-400">
                                        Request submitted!
                                    </h3>

                                    <p className="text-sm text-green-700/80 dark:text-green-400/80 mt-2">
                                        Your password recovery request has been submitted.
                                        Backend email functionality will be added later.
                                    </p>

                                </div>

                            ) : (

                                /* Recovery Form */
                                <form onSubmit={handleSubmit} className="space-y-5">

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

                                    <button
                                        type="submit"
                                        className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base shadow-lg shadow-blue-600/20 transition duration-200"
                                    >
                                        Reset Password
                                    </button>

                                </form>

                            )}

                            {/* Back to Login */}
                            <div className="mt-8 text-center">

                                <Link
                                    to="/login"
                                    className="text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    ← Back to Sign In
                                </Link>

                            </div>

                            {/* Legal Links */}
                            <div className="mt-9 pt-5 border-t border-slate-200 dark:border-slate-800 text-center">

                                <p className="text-xs text-slate-400">
                                    By continuing, you agree to our Terms and Privacy Policy.
                                </p>

                            </div>

                        </div>

                    </section>

                </div>

            </main>

        </div>
    )
}

export default ForgotPassword
