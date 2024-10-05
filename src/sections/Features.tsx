import { Truck, Sprout, Coffee } from "lucide-react";

export function Features() {
  return (
    <section className="flex flex-col md:flex-row justify-around py-8 md:py-12 bg-off-white border-t-2 border-b-2 border-black">
      <div className="text-center mb-4 md:mb-0 md:w-1/3">
        <Truck className="m-auto mb-6" size={75}/>
        <h3 className="text-xl font-semibold">Envío 24h/48h En España</h3>
        <p className="text-sm text-gray-600">
          Gratis para pedidos superiores a 40€
        </p>
      </div>
      <div className="text-center mb-4 md:mb-0 md:w-1/3">
        <Sprout className="m-auto mb-6" size={75} />
        <h3 className="text-xl font-semibold">Café Fresco Y De Temporada</h3>
        <p className="text-sm text-gray-600">
          Tostado artesanalmente en Barcelona
        </p>
      </div>
      <div className="text-center mb-4 md:mb-0 md:w-1/3">
        <Coffee className="m-auto mb-6" size={75} />
        <h3 className="text-xl font-semibold">Café Sostenible Y Con Trazabilidad</h3>
        <p className="text-sm text-gray-600">
          Precios justos para los productores
        </p>
      </div>
    </section>
  );
}
