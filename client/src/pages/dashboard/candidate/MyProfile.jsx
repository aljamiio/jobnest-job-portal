
function MyProfile() {
    const profile = {
        name: 'Md. Jubayer Al Jami',
        email: 'johndoe@example.com',
        phone: '+880 1XXXXXXXXX',
        location: 'Dhaka, Bangladesh',
        title: 'Frontend Developer',
        experience: 'Fresher',
        education: 'BSc in Computer Science & Engineering',
        about: 'Write something about yourself, your skills, experience and career goals.',
    }

    return (
        <div className="space-y-8">

            {/* Page Heading */}
            <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    My Profile
                </h2>

                <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Manage your personal information and professional profile.
                </p>
            </div>

            {/* Profile Header */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm">

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">

                    <div className="w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-3xl font-bold text-blue-600 dark:text-blue-300">
                        J
                    </div>

                    <div className="text-center sm:text-left flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {profile.name}
                        </h3>

                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                            {profile.title}
                        </p>

                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                            📍 {profile.location}
                        </p>
                    </div>

                    <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition">
                        Edit Profile
                    </button>

                </div>
            </div>

            {/* Personal Information */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm">

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                    Personal Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Full Name
                        </p>
                        <p className="font-medium text-gray-900 dark:text-white mt-2">
                            {profile.name}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Email Address
                        </p>
                        <p className="font-medium text-gray-900 dark:text-white mt-2">
                            {profile.email}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Phone Number
                        </p>
                        <p className="font-medium text-gray-900 dark:text-white mt-2">
                            {profile.phone}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Location
                        </p>
                        <p className="font-medium text-gray-900 dark:text-white mt-2">
                            {profile.location}
                        </p>
                    </div>

                </div>
            </div>

            {/* Professional Information */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm">

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                    Professional Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Professional Title
                        </p>
                        <p className="font-medium text-gray-900 dark:text-white mt-2">
                            {profile.title}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Experience Level
                        </p>
                        <p className="font-medium text-gray-900 dark:text-white mt-2">
                            {profile.experience}
                        </p>
                    </div>

                    <div className="md:col-span-2">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Education
                        </p>
                        <p className="font-medium text-gray-900 dark:text-white mt-2">
                            {profile.education}
                        </p>
                    </div>

                </div>
            </div>

            {/* About Section */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm">

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    About Me
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {profile.about}
                </p>

            </div>

        </div>
    )
}

export default MyProfile
