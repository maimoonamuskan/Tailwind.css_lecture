function DarkMode() {
  return (
    <div className="min-h-screen bg-white p-10 text-gray-900 dark:bg-gray-950 dark:text-white">

      <div className="mx-auto max-w-md rounded-2xl bg-gray-100 p-8 shadow-lg dark:bg-gray-800">

        <h1 className="text-3xl font-bold text-purple-600 dark:text-purple-400">
          Dark Mode
        </h1>

        <p className="mt-4 text-gray-600 dark:text-gray-300">
          This text changes its color in dark mode.
        </p>

        <button className="mt-6 rounded-lg bg-purple-600 px-6 py-3 text-white transition hover:bg-purple-700">
          Get Started
        </button>

      </div>

    </div>
  )
}

export default DarkMode