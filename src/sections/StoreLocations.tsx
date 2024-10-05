export function StoreLocations() {
  const locations = ['POBLE NOU', 'BORN/GÒTIC', 'ATOCHA', 'LAS SETAS', 'BORN']

  return (
    <section className="py-8 md:py-12 border-b-2 border-black">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">Nuestras Tiendas</h2>
      <div className="flex flex-wrap justify-center">
        {locations.map((location, index) => (
          <div key={index} className="text-center w-1/2 md:w-1/5 p-2">
            <img src="/placeholder.svg" alt={location} width={200} height={150} className="mb-2" />
            <h3 className="font-semibold">{location}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}