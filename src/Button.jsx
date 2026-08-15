function Button({ text }) {
  return (
    <button className="rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700 hover:scale-105">
      {text}
    </button>
  )
}

export default Button