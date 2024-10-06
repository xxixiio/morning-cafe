import { Button } from "../components/Button";

export function FeaturedProduct() {
  return (
    <section className="py-8 md:py-12 bg-yellow-100 border-b-2 border-black">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Producto destacado</h2>
      <div className="max-w-xs mx-auto text-center">
        <img src="/placeholder.svg" alt="Valle de Oro" width={200} height={300} className="mx-auto mb-4" />
        <h3 className="text-2xl md:text-3xl font-bold mb-2">Valle de Oro</h3>
        <p className="text-sm text-gray-600 mb-2">El Salvador</p>
        <p className="text-sm mb-4">Melocotón de Espresso / Avellanas - Lima - Chocolate con Leche - Té verde</p>
        <Button variant="dark" content="Add to cart - 14.50€" />
      </div>
    </section>
  )
}