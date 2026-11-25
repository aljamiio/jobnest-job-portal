
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

function CandidateSidebar() {
    const { logout } = useAuth()
    const navigate = useNavigate()

    const menuItems = [
        { name: 'Dashboard', path: '/candidate/dashboard', icon: '📊' },
        { name: 'My Profile', path: '/candidate/profile', icon: '👤' },
        { name: 'Applied Jobs', path: '/candidate/applied-jobs', icon: '💼' },
        { name: 'Saved Jobs', path: '/candidate/saved-jobs', icon: '🔖' },
        { name: 'Applications', path: '/candidate/applications', icon: '📄' },
        { name: 'Notifications', path: '/candidate/notifications', icon: '🔔' },
    ]

    const handleLogout = () => {
        logout()
        navigate('/login')
    }

    return (
        <aside className="w-64 min-h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 p-5">

            <h2 className="text-xl font-bold text-blue-600 mb-8">
                JobNest
            </h2>

            <nav className="space-y-2">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition ${
                                isActive
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                            }`
                        }
                    >
                        <span>{item.icon}</span>
                        {item.name}
                    </NavLink>
                ))}
            </nav>

            <button
                onClick={handleLogout}
                className="w-full mt-10 text-left px-4 py-3 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-950 transition"
            >
                🚪 Logout
            </button>

        </aside>
    )
}

export default CandidateSidebar
