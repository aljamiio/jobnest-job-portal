
import { Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import CandidateSidebar from '../components/dashboard/CandidateSidebar'

function CandidateLayout() {
    const { user } = useAuth()

    return (
        <div className="min-h-screen flex bg-gray-50 dark:bg-gray-950">

            {/* Sidebar */}
            <CandidateSidebar />

            {/* Main Content */}
            <div className="flex-1 min-w-0">

                {/* Dashboard Header */}
                <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 py-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                            Candidate Dashboard
                        </h1>

                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            Welcome, {user?.name || 'Candidate'}
                        </p>
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

export default CandidateLayout
