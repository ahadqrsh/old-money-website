export default function Home() {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src="https://old-money.com/cdn/shop/files/Untitled_3000_x_2000_px_3000_x_1700_px_6.png?v=1757410800&width=2000"
        alt="Hero Background"
        className="absolute inset-0 w-full h-screen"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">DRESS WITH CLASS</h2>
        <p className="mb-6">AUTUMN TRIP GIVEAWAY (50% OFF)</p>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="px-6 py-2 border border-white rounded hover:bg-white hover:text-black transition">
            SHOP MEN
          </button>
        </div>
      </div>
    </section>
  );
}
