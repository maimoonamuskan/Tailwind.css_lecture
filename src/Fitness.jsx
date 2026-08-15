function Fitness() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

          <h1 className="text-2xl font-bold text-purple-600">
            FitZone
          </h1>

          <button className="rounded-lg bg-purple-600 px-5 py-2 font-semibold text-white transition hover:bg-purple-700">
            Join Now
          </button>

        </div>
      </nav>


      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24">

        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row">

          {/* Left Side */}
          <div className="flex-1 text-center md:text-left">

            <p className="font-semibold uppercase tracking-wider text-purple-600">
              Fitness & Health
            </p>

            <h2 className="mt-3 text-4xl font-bold text-gray-900 md:text-6xl">
              Build Your
              <span className="text-purple-600"> Strongest </span>
              Self
            </h2>

            <p className="mt-5 max-w-xl text-gray-600">
              Train smarter, stay consistent and achieve your fitness goals
              with our professional workout programs.
            </p>

            <button className="mt-7 rounded-xl bg-purple-600 px-7 py-3 font-semibold text-white transition hover:scale-105 hover:bg-purple-700">
              Start Training
            </button>

          </div>


          {/* Right Side */}
          <div className="flex-1">

            <div className="rounded-3xl bg-gradient-to-br from-purple-600 to-pink-500 p-10 text-center shadow-2xl">

              <div className="rounded-2xl bg-white/10 p-10 backdrop-blur">
                <span className="text-8xl">🏋️</span>

                <h3 className="mt-5 text-3xl font-bold text-white">
                  Stay Strong
                </h3>

                <p className="mt-3 text-white/80">
                  Train. Improve. Repeat.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Programs */}
      <section className="bg-white px-6 py-16">

        <div className="mx-auto max-w-6xl">

          <div className="text-center">

            <p className="font-semibold text-purple-600">
              OUR PROGRAMS
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
              Choose Your Workout
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Select a program according to your fitness goals.
            </p>

          </div>


          {/* Cards */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

            {/* Strength */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-md transition hover:-translate-y-2 hover:shadow-xl">

              <div className="text-5xl">
                💪
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Strength Training
              </h3>

              <p className="mt-3 text-gray-600">
                Build muscle and improve your overall strength.
              </p>

              <button className="mt-5 font-semibold text-purple-600 hover:text-purple-800">
                Explore →
              </button>

            </div>


            {/* Cardio */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-md transition hover:-translate-y-2 hover:shadow-xl">

              <div className="text-5xl">
                🏃
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Cardio Training
              </h3>

              <p className="mt-3 text-gray-600">
                Improve endurance and burn calories effectively.
              </p>

              <button className="mt-5 font-semibold text-purple-600 hover:text-purple-800">
                Explore →
              </button>

            </div>


            {/* Yoga */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-md transition hover:-translate-y-2 hover:shadow-xl">

              <div className="text-5xl">
                🧘
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Yoga & Flexibility
              </h3>

              <p className="mt-3 text-gray-600">
                Improve flexibility, balance and relaxation.
              </p>

              <button className="mt-5 font-semibold text-purple-600 hover:text-purple-800">
                Explore →
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* Statistics */}
      <section className="px-6 py-16">

        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 text-center md:grid-cols-4">

          <div>
            <h3 className="text-3xl font-bold text-purple-600">
              500+
            </h3>

            <p className="mt-2 text-gray-600">
              Members
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-purple-600">
              20+
            </h3>

            <p className="mt-2 text-gray-600">
              Trainers
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-purple-600">
              15+
            </h3>

            <p className="mt-2 text-gray-600">
              Programs
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-purple-600">
              5★
            </h3>

            <p className="mt-2 text-gray-600">
              Rating
            </p>
          </div>

        </div>

      </section>


      {/* Footer */}
      <footer className="bg-gray-900 px-6 py-8 text-center text-white">

        <h2 className="text-xl font-bold">
          FitZone
        </h2>

        <p className="mt-2 text-gray-400">
          Train hard. Stay healthy. Be strong.
        </p>

        <p className="mt-5 text-sm text-gray-500">
          © 2026 FitZone. All rights reserved.
        </p>

      </footer>

    </div>
  )
}

export default Fitness