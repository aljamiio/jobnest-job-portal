
function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-blue-600">
              JobNest
            </h2>

            <p className="text-sm mt-1">
              Find your dream job and build your future.
            </p>
          </div>

          {/* Copyright */}
          <div className="text-sm">
            © {new Date().getFullYear()} JobNest. All rights reserved.
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer
