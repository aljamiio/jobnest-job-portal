
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useTheme } from '../../context/ThemeContext'

function EmployerSidebar() {
    const { logout } = useAuth()
    const { theme } = useTheme()
    const navigate = useNavigate()

    const menuItems = [
        {
            name: 'Dashboard',
            path: '/employer/dashboard',
            icon: '📊',
        },
        {
            name: 'Company Profile',
            path: '/employer/company',
            icon: '🏢',
        },
        {
            name: 'Post a Job',
            path: '/employer/post-job',
            icon: '➕',
        },
        {
            name: 'Manage Jobs',
            path: '/employer/manage-jobs',
            icon: '💼',
        },
        {
            name: 'Applicants',
            path: '/employer/applicants',
            icon: '👥',
        },

        {
            name: 'Settings',
            path: '/employer/settings',
            icon: '⚙️',
        },
    ]

    const handleLogout = () => {
        logout()
        navigate('/login')
    }

    return (
        <aside className="w-64 min-h-screen shrink-0 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 p-5 flex flex-col">

            {/* Brand Logo */}
            <div className="mb-8">
                <NavLink to="/employer/dashboard">
                    <img
                        src={
                            theme === 'light'
                                ? '/jobnest-logo-light.png'
                                : '/jobnest-logo-dark.png'
                        }
                        alt="JobNest"
                        className="h-12 w-auto max-w-[200px] object-contain"
                    />
                </NavLink>
            </div>

            {/* Navigation Menu */}
            <nav className="space-y-2 flex-1">

                {menuItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${isActive
                                ? 'bg-blue-600 text-white shadow-sm'
                                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                            }`
                        }
                    >
                        <span className="text-lg">
                            {item.icon}
                        </span>

                        {item.name}
                    </NavLink>
                ))}

            </nav>

            {/* Logout */}
            <div className="border-t border-gray-200 dark:border-gray-800 pt-5 mt-6">

                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-950 transition-colors duration-200"
                >
                    <span className="text-lg">🚪</span>
                    Logout
                </button>

            </div>

        </aside>
    )
}

export default EmployerSidebar
