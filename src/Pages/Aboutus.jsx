import React from 'react';
import './Aboutus.jsx';

const Aboutus = () => {
  return (
    <div className="old-money mt-20">
      {/* Header Section */}
      <header className="header">
        <div className="container" >
          <h1 className="logo">About us</h1>
        </div>
      </header>

      {/* Hero Section */}
      {/* <img src="https://old-money.com/cdn/shop/files/Rectangle_312.jpg?v=1716031781"/>
      <section className="hero">
        <div className="container">
          <p className="tagline">
            Build your wardrobe with our collection. Mix and match for endless outfits that are always on-point.
          </p>
          <div className='demo'>
          <h2 className="classy-designs justify-start">CLASSY DESIGNS</h2>
          <h3 className="traditional-clothing justify-center">TRADITIONAL CLOTHING</h3>
          <h4 className="aesthetics justify-end">OLD MONEY AESTHETICS</h4>
          </div>
          <p className="fortune">FORTUNE __ The Petersburg</p>
          <h5 className="fashion-title">OLD MONEY FASHION</h5>
          <h6 className="tradition-meets">WHERE TRADITION MEETS MODERNITY</h6>
          <p className="hero-description">
            Where old meets new, style never fades. The Old Money Community honors heritage with a modern twist. Our
            collections bridge timeless elegance with everyday living, making it simple to look sharp and feel confident, every day.
          </p>
        </div>
      </section> */}


        <div className="relative w-screen  h-100 ">
          <img
            src="https://old-money.com/cdn/shop/files/Rectangle_312.jpg?v=1716031781"
            alt="Contact Banner"
            className="w-screen h-100 object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-end text-white px-4">
          <div className="flex-col mb-10">
            <h3 className="text-4xl md:text-5xl font-medium text-left leading-snug">
             THE OLD <br />MONEY WAY 
            </h3>
            <p className="text-left mt-2 ">Build your wardrobe with our classic tops & bottoms. </p>
            <p className="text-left ">Mix and match for endless outfits that are always on-point.</p>
          </div>
          </div>
        </div>

      {/* Philosophy Section */}
      <section className="philosophy">
        <div className="container">
          <h2 className="section-title">OUR PHILOSOPHY</h2>
          <h3 className="philosophy-heading">DRESS WITH CLASS - FOR LESS</h3>
          <p className="philosophy-text">
            We believe everyone deserves to feel confident and classy in their outfits. At Old Money, we offer clothing that captures the
            timeless elegance of the Old Money lifestyle, helping you elevate your everyday look. Our pieces combine classy items
            and modern day trends, allowing you to embrace a polished, classic style—without breaking the bank. Dress well, feel
            empowered, and express your best self with ease without overpaying.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="product-categories flex justify-evenly">
        
          

              
            {/* image ke uper text */}

              <div className="relative w-72 overflow-hidden rounded-xl">
                <img
                  src="https://old-money.com/cdn/shop/files/2_c1a65bc8-9e57-4108-8817-5ec8aad25b2e.png?v=1741978678&width=600"
                  alt="Category"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white text-center p-4">
                  <h3 className="text-xl font-bold">OLD MONEY LINEN™</h3>
                  <p className="mt-2 text-sm">UP TO 50% OFF COLLECTION WIDE</p>
                  <button className="mt-4 bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-black hover:text-white transition">
                    {/* SHOP NOW &gt; */}
                  </button>
                </div>
              </div>

                 <div className="relative w-72 overflow-hidden rounded-xl">
                <img
                  src="https://old-money.com/cdn/shop/files/Collection_Banners_2.png?v=1741985685&width=500"
                  alt="Category"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white text-center p-4">
                  <h3 className="text-xl font-bold">OLD MONEY LINEN™</h3>
                  <p className="mt-2 text-sm">UP TO 50% OFF COLLECTION WIDE</p>
                  <button className="mt-4 bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-black hover:text-white transition">
                    {/* SHOP NOW &gt; */}
                  </button>
                </div>
              </div>

                 <div className="relative w-72 overflow-hidden rounded-xl">
                <img
                  src="https://old-money.com/cdn/shop/files/7_94f29fda-e947-4a44-be88-571c6240dcbc.png?v=1741910624&width=500"
                  alt="Category"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white text-center p-4">
                  <h3 className="text-xl font-bold">OLD MONEY LINEN™</h3>
                  <p className="mt-2 text-sm">UP TO 50% OFF COLLECTION WIDE</p>
                  <button className="mt-4 bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-black hover:text-white transition">
                    {/* SHOP NOW &gt; */}
                  </button>
                </div>
              </div>

              





              
           
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">OUR CUSTOMERS LOVE US</h2>
          <blockquote className="testimonial">
            "Old Money exceeds all expectations! I feel elegant and sophisticated wearing their pieces."
          </blockquote>
          <div className="social-proof">
            <p className="instagram-handle">@OLDMONEY</p>
            <p className="followers">352k followers</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="footer"> */}
        {/* <div className="container"> */}
          {/* <p>&copy; {new Date().getFullYear()} Old Money. All rights reserved.</p> */}
        </div>
    //   </footer>
    // </div>
  );
};

export default Aboutus;