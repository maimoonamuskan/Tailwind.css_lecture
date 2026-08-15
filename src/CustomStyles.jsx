function CustomStyles() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="mb-8 text-4xl font-bold text-purple-600">
        Custom Styles
      </h1>

      <div className="w-[350px] rounded-[25px] bg-[#7c3aed] p-[30px] text-white shadow-[0_10px_30px_rgba(0,0,0,0.2)]">

        <h2 className="text-[28px] font-bold">
          Custom Card
        </h2>

        <p className="mt-[15px] text-[16px]">
          This card uses custom Tailwind values.
        </p>

        <button className="mt-[20px] rounded-[12px] bg-[#ffffff] px-[25px] py-[12px] font-bold text-[#7c3aed]">
          Click Me
        </button>

      </div>

    </div>
  )
}

export default CustomStyles