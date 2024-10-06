export function BrewingGuides() {
  const guides = [
    { title: 'How to brew a V60', color: 'bg-purple-300' },
    { title: 'How to brew an Moka Pot', color: 'bg-yellow-300' },
    { title: 'How to brew an Aeropress', color: 'bg-pink-300' },
  ]

  return (
    <section className="pt-8 md:pt-12 bg-off-white border-b-2 border-black">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">Brewing guides</h2>
      <div className="flex flex-wrap justify-center">
        {guides.map((guide, index) => (
          <div key={index} className={`${guide.color} p-4 md:p-6 text-center w-full h-[600px] md:w-1/3`}>
            <h3 className="font-semibold mb-4">{guide.title}</h3>
            <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">Read More</button>
          </div>
        ))}
      </div>
    </section>
  )
}