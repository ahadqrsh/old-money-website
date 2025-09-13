import React from 'react';

const Aboutus = () => {
  return (
    <div className="bg-[#f8f4e3] text-stone-800 font-serif mt-16">
      {/* Header Section */}
      <header className="bg-[#e5dcc5] py-6 shadow-md">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold tracking-wide text-stone-900">About Us</h1>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative w-screen h-[500px]">
        <img
          src="https://old-money.com/cdn/shop/files/Rectangle_312.jpg?v=1716031781"
          alt="About Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-end text-white px-6">
          <div className="flex-col mb-12 max-w-2xl">
            <h3 className="text-5xl font-semibold leading-snug">THE OLD <br /> MONEY WAY</h3>
            <p className="mt-4 text-lg">Build your wardrobe with our classic tops & bottoms.</p>
            <p className="text-lg">Mix and match for endless outfits that are always on-point.</p>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-stone-900 mb-4">OUR PHILOSOPHY</h2>
        <h3 className="text-xl font-semibold text-stone-700 mb-6">DRESS WITH CLASS - FOR LESS</h3>
        <p className="max-w-3xl mx-auto text-stone-700 leading-relaxed">
          We believe everyone deserves to feel confident and classy in their outfits. 
          At Old Money, we offer clothing that captures the timeless elegance of the Old Money lifestyle, 
          helping you elevate your everyday look. Our pieces combine classy items and modern day trends, 
          allowing you to embrace a polished, classic style—without breaking the bank. Dress well, feel 
          empowered, and express your best self with ease without overpaying.
        </p>
      </section>

      {/* Product Categories */}
      <section className="flex flex-wrap justify-center gap-8 py-12 bg-[#eae4d3]">
        {[
          "https://old-money.com/cdn/shop/files/2_c1a65bc8-9e57-4108-8817-5ec8aad25b2e.png?v=1741978678&width=600",
          "https://old-money.com/cdn/shop/files/Collection_Banners_2.png?v=1741985685&width=500",
          "https://old-money.com/cdn/shop/files/7_94f29fda-e947-4a44-be88-571c6240dcbc.png?v=1741910624&width=500"
        ].map((img, i) => (
          <div key={i} className="relative w-72 overflow-hidden rounded-2xl shadow-lg">
            <img
              src={img}
              alt="Category"
              className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white text-center p-6">
              <h3 className="text-xl font-bold">OLD MONEY LINEN™</h3>
              <p className="mt-2 text-sm">UP TO 50% OFF COLLECTION WIDE</p>
              <button className="mt-4 bg-[#f5f5dc] text-stone-900 px-5 py-2 rounded-full font-semibold hover:bg-stone-900 hover:text-white transition">
                SHOP NOW
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-stone-900 mb-6">OUR CUSTOMERS LOVE US</h2>
        <blockquote className="italic text-xl text-stone-700 max-w-2xl mx-auto mb-2">
          "Old Money exceeds all expectations! I feel elegant and sophisticated wearing their pieces."
        </blockquote>
        <div className="text-stone-600">
          <p className="font-semibold">@OLDMONEY</p>
          <p className="text-sm">352k followers</p>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
