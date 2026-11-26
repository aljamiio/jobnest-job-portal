
import { useState } from 'react'

function Notifications() {
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            title: 'Application Received',
            message: 'Your application for Frontend Developer at TechNova has been received successfully.',
            type: 'application',
            time: '10 minutes ago',
            read: false,
            icon: '📩',
        },
        {
            id: 2,
            title: 'Interview Invitation',
            message: 'You have been shortlisted for an interview at Creative Solutions.',
            type: 'interview',
            time: '2 hours ago',
            read: false,
            icon: '📅',
        },
        {
            id: 3,
            title: 'Application Viewed',
            message: 'Your application for React Developer at SoftTech has been viewed.',
            type: 'application',
            time: 'Yesterday',
            read: true,
            icon: '👁️',
        },
        {
            id: 4,
            title: 'Application Rejected',
            message: 'Unfortunately, your application for Junior Developer was not selected.',
            type: 'application',
            time: '2 days ago',
            read: true,
            icon: '❌',
        },
        {
            id: 5,
            title: 'Profile Update Reminder',
            message: 'Complete your profile to improve your chances of getting hired.',
            type: 'general',
            time: '3 days ago',
            read: false,
            icon: '👤',
        },
    ])

    const [activeFilter, setActiveFilter] = useState('all')

    const unreadCount = notifications.filter(
        (notification) => !notification.read
    ).length

    const filteredNotifications = notifications.filter((notification) => {
        if (activeFilter === 'unread') {
            return !notification.read
        }

        if (activeFilter === 'read') {
            return notification.read
        }

        return true
    })

    const markAsRead = (id) => {
        setNotifications((prev) =>
            prev.map((notification) =>
                notification.id === id
                    ? { ...notification, read: true }
                    : notification
            )
        )
    }

    const markAllAsRead = () => {
        setNotifications((prev) =>
            prev.map((notification) => ({
                ...notification,
                read: true,
            }))
        )
    }

    const deleteNotification = (id) => {
        setNotifications((prev) =>
            prev.filter((notification) => notification.id !== id)
        )
    }

    const clearAllNotifications = () => {
        setNotifications([])
    }

    return (
        <div className="space-y-8">

            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Notifications
                    </h2>

                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                        Stay updated with your job applications and career activities.
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <span className="px-3 py-2 text-sm font-medium rounded-lg bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                        {unreadCount} Unread
                    </span>
                </div>

            </div>

            {/* Notification Actions */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 shadow-sm">

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                    {/* Filters */}
                    <div className="flex flex-wrap gap-2">

                        {[
                            { label: 'All', value: 'all' },
                            { label: 'Unread', value: 'unread' },
                            { label: 'Read', value: 'read' },
                        ].map((filter) => (
                            <button
                                key={filter.value}
                                onClick={() => setActiveFilter(filter.value)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${activeFilter === filter.value
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                                    }`}
                            >
                                {filter.label}
                            </button>
                        ))}

                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3">

                        <button
                            onClick={markAllAsRead}
                            disabled={unreadCount === 0}
                            className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            Mark all as read
                        </button>

                        <button
                            onClick={clearAllNotifications}
                            disabled={notifications.length === 0}
                            className="text-sm font-medium text-red-500 hover:text-red-600 disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            Clear all
                        </button>

                    </div>

                </div>

            </div>

            {/* Notifications List */}
            <div className="space-y-4">

                {filteredNotifications.length > 0 ? (

                    filteredNotifications.map((notification) => (

                        <div
                            key={notification.id}
                            className={`bg-white dark:bg-gray-900 border rounded-xl p-5 shadow-sm transition ${notification.read
                                    ? 'border-gray-200 dark:border-gray-800'
                                    : 'border-blue-200 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-900/10'
                                }`}
                        >

                            <div className="flex items-start gap-4">

                                {/* Icon */}
                                <div className="w-12 h-12 shrink-0 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-2xl">
                                    {notification.icon}
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">

                                    <div className="flex flex-wrap items-center gap-2">

                                        <h3 className="font-semibold text-gray-900 dark:text-white">
                                            {notification.title}
                                        </h3>

                                        {!notification.read && (
                                            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                                        )}

                                    </div>

                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                                        {notification.message}
                                    </p>

                                    <div className="flex flex-wrap items-center gap-4 mt-4">

                                        <span className="text-xs text-gray-500 dark:text-gray-500">
                                            {notification.time}
                                        </span>

                                        {!notification.read && (
                                            <button
                                                onClick={() => markAsRead(notification.id)}
                                                className="text-xs font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400"
                                            >
                                                Mark as read
                                            </button>
                                        )}

                                        <button
                                            onClick={() => deleteNotification(notification.id)}
                                            className="text-xs font-medium text-red-500 hover:text-red-600"
                                        >
                                            Delete
                                        </button>

                                    </div>

                                </div>

                            </div>

                        </div>

                    ))

                ) : (

                    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-12 text-center shadow-sm">

                        <div className="text-5xl mb-4">
                            🔔
                        </div>

                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            No notifications found
                        </h3>

                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                            {activeFilter === 'unread'
                                ? 'You are all caught up! No unread notifications.'
                                : 'Your notifications will appear here.'}
                        </p>

                    </div>

                )}

            </div>

        </div>
    )
}

export default Notifications
