export function Footer() {
  return (
    <footer className="bg-light-beige text-black py-8 md:py-12 px-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Categorías</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Shop</a></li>
              <li><a href="#" className="hover:underline">Suscripción</a></li>
              <li><a href="#" className="hover:underline">Tiendas</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Trabaja Con nosotros</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Barista</a></li>
              <li><a href="#" className="hover:underline">Oficina</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Términos y Condiciones</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Privacidad</a></li>
              <li><a href="#" className="hover:underline">Envíos</a></li>
              <li><a href="#" className="hover:underline">Cookies</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <p>contact@morning.cafe</p>
            <p>Av. del Molí, 47</p>
            <p>Phone: +34 000 00 00 00</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2025 Morning Café All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}