import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function DesiSite() {
  return (
    <main className="font-sans bg-[#EAD3C4] text-[#165F5D]">
      <nav className="fixed top-0 left-0 w-full bg-white shadow z-50 px-10 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-[#D81B68]">DESI</div>
        <div className="space-x-6 hidden md:flex">
          <a href="#about" className="hover:text-[#D81B68]">About</a>
          <a href="#services" className="hover:text-[#D81B68]">Services</a>
          <a href="#menu" className="hover:text-[#D81B68]">Menu</a>
          <a href="#contact" className="hover:text-[#D81B68]">Contact</a>
        </div>
      </nav>

      <section className="min-h-screen flex flex-col justify-center items-start px-10 pt-32 bg-[#FAC03F] text-[#165F5D]">
        <h1 className="text-6xl font-bold max-w-3xl">
          The Original Desi Naan Rolls, slingin’ HOT NAAN ROLLS 364 days of the year.
        </h1>
        <p className="mt-4 text-xl">Modern Indian cooking.</p>
        <a href="#menu" className="mt-6 inline-block bg-[#D81B68] text-white px-6 py-3 rounded-xl hover:bg-[#a8134f]">
          View Menu
        </a>
      </section>

      <section id="about" className="px-10 py-20 bg-white text-[#165F5D]">
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
        <p className="mb-4">EST. 2024</p>
        <p className="mb-4">Desi was born in the most unexpected of places—a cozy dorm kitchen where a Polish and an Indian came together, blending flavours and cultures...</p>
        <p className="mb-4">What started as late-night cooking sessions for friends soon became a mission: to share the food we love with the world...</p>
      </section>

      <section id="services" className="px-10 py-20 bg-[#165F5D] text-white">
        <h2 className="text-4xl font-bold mb-6">What We Offer</h2>
        <ul className="grid grid-cols-2 gap-6 text-lg">
          <li>✅ Dine-in</li>
          <li>✅ Takeaway</li>
          <li>✅ Catering</li>
          <li>✅ Vegan options</li>
        </ul>
      </section>

      <section id="menu" className="px-10 py-20 bg-white text-[#165F5D]">
        <h2 className="text-4xl font-bold mb-10">Menu Highlights</h2>
        <div className="grid grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold">NAAN ROLLS</h3>
            <p>Choice of Chicken / Lamb / Paneer... <strong>32 PLN</strong></p>
          </div>
        </div>
      </section>

      <section id="contact" className="px-10 py-20 bg-[#FAC03F] text-[#165F5D]">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        <p className="mb-2">📍 pl. Orląt lwowskich 20b, Hala Swiebodzki, Wrocław, Poland</p>
        <p className="mb-2">📞 +48 527633722</p>
        <p className="mb-2">📧 desiwroclaw@gmail.com</p>
        <p className="mb-2">🕒 Sun–Wed: 12–21 | Thu–Sat: 12–23:30</p>
      </section>

      <footer className="bg-[#165F5D] text-white px-10 py-6 flex justify-between items-center">
        <p>© {new Date().getFullYear()} Desi Wrocław</p>
        <div className="space-x-4 text-xl">
          <a href="https://instagram.com/desi_wroclaw" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://facebook.com/desi_wroclaw" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
        </div>
      </footer>
    </main>
  );
}
// Trigger Vercel deploy
