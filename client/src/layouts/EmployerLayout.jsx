
import { Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useTheme } from '../context/ThemeContext'
import EmployerSidebar from '../components/dashboard/EmployerSidebar'

function EmployerLayout() {
    const { user } = useAuth()
    const { theme, toggleTheme } = useTheme()

    return (
        <div className="min-h-screen flex bg-gray-50 dark:bg-gray-950">

            {/* Sidebar */}
            <EmployerSidebar />

            {/* Main Content */}
            <div className="flex-1 min-w-0">

                {/* Dashboard Header */}
                <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 py-4">

                    <div className="flex items-center justify-between gap-4">

                        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                            Employer Dashboard
                        </h1>

                        <div className="flex items-center gap-4">

                            {/* Welcome Message */}
                            <p className="text-sm text-gray-600 dark:text-gray-300 hidden sm:block">
                                Welcome, {user?.name || 'Employer'}
                            </p>

                            {/* Theme Toggle */}
                            <button
                                onClick={toggleTheme}
                                type="button"
                                aria-label="Toggle dark and light mode"
                                title="Toggle Theme"
                                className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            >
                                <span className="text-xl">
                                    {theme === 'dark' ? '☀️' : '🌙'}
                                </span>
                            </button>

                        </div>

                    </div>

                </header>

                {/* Dashboard Pages */}
                <main className="p-6">
                    <Outlet />
                </main>

            </div>

        </div>
    )
}

export default EmployerLayout
