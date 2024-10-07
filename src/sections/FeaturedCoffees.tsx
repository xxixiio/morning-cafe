export function FeaturedCoffees() {
  const coffees = [
    { name: 'WHIPPED COFFEE', price: '3,50€', image: '/whipped-coffee.png' },
    { name: 'CAFÉ BOMBÓN', price: '3,80€', image: '/cafe-bombon.webp' },
    { name: 'IRISH COFFEE', price: '4,50€', image: '/irish-coffee.png' },
    { name: 'BUBBLE TEA', price: '4,00€', image: '/boba.webp' },
    { name: 'CHEESECAKE', price: '4,50€', image: '/cheese-cake.png' },
  ];

  return (
    <section className="py-8 md:py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">Productos Destacados</h2>
      <div className="flex flex-wrap justify-center">
        {coffees.map((coffee, index) => (
          <a href="#" key={index} className="text-center w-1/2 md:w-1/5 p-4 flex flex-col items-center">
            <img
              src={coffee.image}
              alt={coffee.name}
              className="mb-4 w-[150px] h-[200px] object-contain"
            />
            <h3 className="font-semibold">{coffee.name}</h3>
            <p className="text-sm text-gray-600">{coffee.price}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
