import { Truck, Sprout, Coffee } from "lucide-react";

export function Features() {
  return (
    <section className="flex flex-col md:flex-row justify-around py-8 md:py-12 bg-off-white border-t-2 border-b-2 border-black">
      <div className="text-center mb-4 md:mb-0 md:w-1/3">
        <Truck className="m-auto mb-6" size={75} strokeWidth={1.5} />
        <h3 className="text-xl font-semibold">
          Envío exprés en 24h dentro de España
        </h3>
        <p className="text-sm text-gray-600">
          Envío gratuito en pedidos superiores a 50€
        </p>
      </div>
      <div className="text-center mb-4 md:mb-0 md:w-1/3">
        <Sprout className="m-auto mb-6" size={75} strokeWidth={1.5} />
        <h3 className="text-xl font-semibold">Café fresco y de temporada</h3>
        <p className="text-sm text-gray-600">
          Tostado de forma artesanal en el corazón de Barcelona
        </p>
      </div>
      <div className="text-center mb-4 md:mb-0 md:w-1/3">
        <Coffee className="m-auto mb-6" size={75} strokeWidth={1.5} />
        <h3 className="text-xl font-semibold">
          Café sostenible y 100% trazable
        </h3>
        <p className="text-sm text-gray-600">
          Comprometidos con precios justos para nuestros productores
        </p>
      </div>
    </section>
  );
}
