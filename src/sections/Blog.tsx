export function Blog() {
  const guides = [
    { 
      title: 'El Arte de Tostar Café: Cómo Seleccionamos Nuestros Granos', 
      color: 'bg-blue-300', 
      image: '/ill1.webp'
    },
    { 
      title: '5 Beneficios del Café Matutino que Mejoran tu Día', 
      color: 'bg-yellow-300', 
      image: '/ill2.webp'
    },
    { 
      title: 'Cómo Crear el Ritual de la Mañana Perfecta con Café de Especialidad', 
      color: 'bg-pink-300', 
      image: '/ill3.webp'
    },
  ];

  return (
    <section className="pt-8 md:pt-12 bg-off-white border-b-2 border-black">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">Historias de Café y Buenas Mañanas</h2>
      <div className="flex flex-wrap justify-center">
        {guides.map((guide, index) => (
          <div key={index} className={`${guide.color} p-6 text-center w-full md:w-1/3`}>
            <h3 className="font-bold text-2xl md:text-3xl mb-4 max-w-xs mx-auto">{guide.title}</h3>
            <img 
              src={guide.image} 
              alt={guide.title} 
              className="my-6 w-1/3 h-auto mx-auto object-contain rounded" 
            />
            <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">Lee más</button>
          </div>
        ))}
      </div>
    </section>
  );
}
