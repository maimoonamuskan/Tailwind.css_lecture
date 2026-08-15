function Responsive() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="mb-8 text-3xl font-bold text-purple-600 md:text-4xl lg:text-5xl">
        Responsive Design
      </h1>

      <div className="flex flex-col gap-6 md:flex-row">

        <div className="flex-1 rounded-xl bg-purple-500 p-8 text-center text-white">
          <h2 className="text-xl font-bold md:text-2xl">
            Box 1
          </h2>

          <p className="mt-3">
            Responsive Box
          </p>
        </div>

        <div className="flex-1 rounded-xl bg-pink-500 p-8 text-center text-white">
          <h2 className="text-xl font-bold md:text-2xl">
            Box 2
          </h2>

          <p className="mt-3">
            Responsive Box
          </p>
        </div>

      </div>

    </div>
  )
}

export default Responsive