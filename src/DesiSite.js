import React, { useState, useContext, createContext } from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import menu from "./menu";

const CartContext = createContext();

function MenuItem({ item }) {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="border rounded-xl shadow-lg overflow-hidden bg-white">
      <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-1">{item.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{item.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">{item.price} PLN</span>
          <button
            onClick={() => addToCart(item)}
            className="bg-[#D81B68] text-white px-4 py-1 rounded hover:bg-[#a8134f]"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-white p-4 mt-10 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id} className="mb-2 flex justify-between items-center">
              {item.name} x {item.quantity} ({item.price * item.quantity} PLN)
              <button
                className="ml-4 text-red-600"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <p className="mt-4 font-bold">Total: {total.toFixed(2)} PLN</p>
    </div>
  );
}

export default function DesiSite() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      <main className="font-sans bg-[#EAD3C4] text-[#165F5D]">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 w-full bg-white shadow z-50 px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-[#D81B68]">DESI</div>
          <div className="space-x-4 hidden md:flex">
            <a href="#about" className="hover:text-[#D81B68]">About</a>
            <a href="#services" className="hover:text-[#D81B68]">Services</a>
            <a href="#menu" className="hover:text-[#D81B68]">Menu</a>
            <a href="#contact" className="hover:text-[#D81B68]">Contact</a>
          </div>
        </nav>

        {/* Hero */}
        <section className="min-h-screen flex flex-col justify-center px-6 pt-32 bg-[#FAC03F]">
          <h1 className="text-5xl md:text-6xl font-bold max-w-3xl">The Original Desi Naan Rolls</h1>
          <p className="mt-4 text-lg">Modern Indian cooking in Wrocław</p>
          <a href="#menu" className="mt-6 inline-block bg-[#D81B68] text-white px-6 py-3 rounded-xl hover:bg-[#a8134f]">View Menu</a>
        </section>

        {/* About */}
        <section id="about" className="px-6 py-16 bg-white">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="mb-4">Desi was born in a dorm kitchen where Polish and Indian flavors met...</p>
          <p className="mb-4">Late-night cooking turned into a mission: share Desi food with the world.</p>
        </section>

        {/* Services */}
        <section id="services" className="px-6 py-16 bg-[#165F5D] text-white">
          <h2 className="text-4xl font-bold mb-6">What We Offer</h2>
          <ul className="grid grid-cols-2 gap-4 text-lg">
            <li>✅ Dine-in</li>
            <li>✅ Takeaway</li>
            <li>✅ Catering</li>
            <li>✅ Vegan Options</li>
          </ul>
        </section>

        {/* Menu */}
        <section id="menu" className="px-6 py-16 bg-white">
          <h2 className="text-4xl font-bold mb-10">Our Menu</h2>
          {Object.entries(menu).map(([category, items]) => (
            <div key={category} className="mb-12">
              <h3 className="text-2xl font-bold mb-4">{category}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map(item => (
                  <MenuItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          ))}
          <Cart />
        </section>

        {/* Contact */}
        <section id="contact" className="px-6 py-16 bg-[#FAC03F]">
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
          <p className="mb-2">📍 Wrocław, pl. Orląt Lwowskich 20b</p>
          <p className="mb-2">📞 +48 527633722</p>
          <p className="mb-2">📧 desiwroclaw@gmail.com</p>
          <p className="mb-2">🕒 Sun–Wed: 12–21 | Thu–Sat: 12–23:30</p>
        </section>

        {/* Footer */}
        <footer className="bg-[#165F5D] text-white px-6 py-6 flex justify-between items-center">
          <p>© {new Date().getFullYear()} Desi Wrocław</p>
          <div className="space-x-4 text-xl">
            <a href="https://instagram.com/desi_wroclaw" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://facebook.com/desi_wroclaw" target="_blank" rel="noreferrer"><FaFacebook /></a>
          </div>
        </footer>
      </main>
    </CartContext.Provider>
  );
}
