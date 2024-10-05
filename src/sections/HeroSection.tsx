import { useEffect } from "react";
import { Button } from "../components/Button";
import AOS from 'aos';
import 'aos/dist/aos.css';

export function HeroSection() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      <img src="/hero.jpg" alt="Coffee and breakfast" className="object-cover w-full h-full" />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white p-4">
        <h1 data-aos="fade-up" data-aos-duration="500" className="text-5xl md:text-6xl font-bold mb-2 md:mb-3 text-center text-balance md:w-2/4">Mejora <span className="text-light-green">cada mañana</span> con buen café. ☕</h1>
        <p className="text-lg md:text-xl mb-6 md:mb-8 text-center">Café de comercio justo y de temporada</p>
        <Button variant="light" content="Pide tu café" />
      </div>
    </section>
  )
}