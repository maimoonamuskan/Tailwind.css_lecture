function Flexbox() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="mb-8 text-4xl font-bold text-purple-600">
        Flexbox
      </h1>

      <div className="flex items-center justify-center gap-6 rounded-xl bg-white p-10 shadow-lg">

        <div className="rounded-lg bg-red-500 p-8 text-white">
          Box 1
        </div>

        <div className="rounded-lg bg-blue-500 p-8 text-white">
          Box 2
        </div>

        <div className="rounded-lg bg-green-500 p-8 text-white">
          Box 3
        </div>

      </div>

    </div>
  )
}

export default Flexbox