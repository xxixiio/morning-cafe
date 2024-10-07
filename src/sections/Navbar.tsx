import { useState } from "react";
import { ShoppingCart, Search, Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex flex-col md:flex-row items-center p-4 justify-around bg-off-white border-b-2 border-black">
      {/* Logo and mobile controls */}
      <div className="flex items-center justify-between w-full md:w-auto md:mb-0 cursor-pointer">
        <img src="/icon.svg" alt="Logo" width={60} height={60} />
        <div className="flex md:hidden items-center space-x-4">
          <Search
            className="text-gray-600 cursor-pointer hover:text-black"
            size={30}
          />
          <ShoppingCart
            className="text-gray-600 cursor-pointer hover:text-black"
            size={30}
          />
          {isOpen ? (
            <X
              className="text-gray-600 cursor-pointer"
              onClick={toggleMenu}
              size={30}
            />
          ) : (
            <Menu
              className="text-gray-600 cursor-pointer"
              onClick={toggleMenu}
              size={30}
            />
          )}
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`flex-col md:flex-row items-center space-y-4 md:space-y-0 md:flex ${
          isOpen ? "flex" : "hidden"
        } md:space-x-10`}
      >
        <a
          href="#"
          className="text-lg font-bold text-gray-600 hover:text-gray-900 hover:underline"
        >
          Carta
        </a>
        <a
          href="#"
          className="text-lg font-bold text-gray-600 hover:text-gray-900 hover:underline"
        >
          Tiendas
        </a>
        <a
          href="#"
          className="text-lg font-bold text-gray-600 hover:text-gray-900 hover:underline"
        >
          Blog
        </a>
        <a
          href="#"
          className="text-lg font-bold text-gray-600 hover:text-gray-900 hover:underline"
        >
          Sobre nosotros
        </a>
      </div>

      {/* Desktop icons */}
      <div className="hidden md:flex items-center space-x-4 mt-4 md:mt-0">
        <Search
          className="text-gray-600 cursor-pointer hover:text-black"
          size={30}
        />
        <ShoppingCart
          className="text-gray-600 cursor-pointer hover:text-black"
          size={30}
        />
      </div>
    </nav>
  );
}
