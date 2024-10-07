export function StoreLocations() {
  const locations = [
    { name: 'BARCELONA', image: '/bcn.webp' },
    { name: 'MADRID', image: '/madrid.jpg' },
    { name: 'VALENCIA', image: '/valencia.jpg' },
  ];

  return (
    <section className="py-8 md:py-12 border-b-2 border-black">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">Nuestras Tiendas</h2>
      <div className="flex flex-wrap justify-center">
        {locations.map((location, index) => (
          <a
            href="#"
            key={index}
            className="text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 flex flex-col items-center transform transition duration-500 hover:scale-105"
          >
            <div className="relative w-[250px] h-[250px] mb-4">
              <img
                src={location.image}
                alt={location.name}
                className="absolute inset-0 w-full h-full rounded-lg object-cover border-[1px] border-black"
              />
            </div>
            <h3 className="font-semibold">{location.name}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}
