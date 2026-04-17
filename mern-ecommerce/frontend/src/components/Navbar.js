import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useContext(CartContext);

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold">🛍️ MyShop</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          <li><Link to="/" className="hover:text-gray-300 hover:underline">Home</Link></li>
          <li><Link to="/products" className="hover:text-gray-300 hover:underline">Products</Link></li>
          <li><Link to="/about" className="hover:text-gray-300 hover:underline">About</Link></li>
          <li><Link to="/contact" className="hover:text-gray-300 hover:underline">Contact</Link></li>

          {/* ✅ Cart Clickable */}
          <li>
            <Link
              to="/cart"
              className="bg-white text-black px-3 py-1 rounded-full font-semibold"
            >
              🛒 {cart.length}
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>
      </div>

        {menuOpen && (
          <div className="fixed top-0 right-0 h-full w-1/2 bg-black text-white z-50 shadow-lg">

            {/* ❌ Close Button (Top Right) */}
            <button
              className="absolute top-4 right-4 text-xl"
              onClick={() => setMenuOpen(false)}
            >
              ❌
            </button>

            {/* ✅ Centered Menu */}
            <div className="h-full flex flex-col justify-center items-center">
              <ul className="space-y-6 text-lg text-center">
                <li>
                  <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                </li>
                <li>
                  <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
                </li>
                <li>
                  <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                </li>
                <li>
                  <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                </li>
                <li>
                  <Link to="/cart" onClick={() => setMenuOpen(false)}>
                    🛒 {cart.length}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
    </nav>
  );
};

export default Navbar;