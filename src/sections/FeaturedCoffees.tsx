export function FeaturedCoffees() {
  const coffees = ['VALLE DE ORO', 'PLATANILLO', 'MUTHUTUINI', 'BONGO', 'KLEM']

  return (
    <section className="py-8 md:py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">Cafés Destacados</h2>
      <div className="flex flex-wrap justify-center">
        {coffees.map((coffee, index) => (
          <div key={index} className="text-center w-1/2 md:w-1/5 p-2">
            <img src="/placeholder.svg" alt={coffee} width={150} height={200} className="mb-2" />
            <h3 className="font-semibold">{coffee}</h3>
            <p className="text-sm text-gray-600">14.50€ - 49.00€</p>
          </div>
        ))}
      </div>
    </section>
  )
}