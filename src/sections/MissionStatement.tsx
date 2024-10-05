import { Button } from "../components/Button";

export function MissionStatement() {
  return (
    <section className="relative h-[300px] md:h-[400px] border-t-2 border-b-2 border-black">
      <img src="/hero-4.jpg" alt="Coffee brewing" className="object-cover w-full h-full" />
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white p-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-center">Buen café, para todo el mundo</h2>
        <p className="text-center max-w-2xl mb-4 md:mb-6 text-sm md:text-base">Nuestro objetivo es ofrecer el mejor café de especialidad, cultivado de manera sostenible y pagando precios justos a los productores. Cuidamos de cada etapa para que disfrutes de una taza excepcional, sostenible y deliciosa.</p>
        <Button variant="light" content="Más información" />
      </div>
    </section>
  )
}