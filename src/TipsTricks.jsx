function TipsTricks() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="mb-8 text-4xl font-bold text-purple-600">
        Tailwind Tips & Tricks
      </h1>

      {/* Hover + Transition */}
      <div className="mb-6">
        <button className="rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-purple-700">
          Hover Me
        </button>
      </div>

      {/* Shadow */}
      <div className="mb-6 rounded-2xl bg-white p-6 shadow-xl">
        <h2 className="text-2xl font-bold">
          Shadow Card
        </h2>

        <p className="mt-2 text-gray-600">
          This card uses a Tailwind shadow.
        </p>
      </div>

      {/* Gradient */}
      <div className="mb-6 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 p-8 text-white">
        <h2 className="text-2xl font-bold">
          Gradient Background
        </h2>

        <p className="mt-2">
          Tailwind makes gradients easy.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

        <div className="rounded-xl bg-red-500 p-6 text-center text-white">
          Card 1
        </div>

        <div className="rounded-xl bg-blue-500 p-6 text-center text-white">
          Card 2
        </div>

        <div className="rounded-xl bg-green-500 p-6 text-center text-white">
          Card 3
        </div>

      </div>

    </div>
  )
}

export default TipsTricks