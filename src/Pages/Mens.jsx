import React from "react";

// Tailwind-based single-file React component (default export)
// Usage:
// 1. Create a new React app (create-react-app or Vite)
// 2. Install and configure Tailwind CSS (see Tailwind docs)   
// 3. Replace src/App.jsx with this file and start the dev server

const products = [
  { id: 1, title: "Classic Linen Shirt", price: "₹1,299", img: "https://old-money.com/cdn/shop/files/mocha_2r.png?v=1757314277&width=600" },
  { id: 2, title: "Minimal Sneakers", price: "₹2,499", img: "https://old-money.com/cdn/shop/files/capetown_8.png?v=1757313689&width=600" },
  { id: 3, title: "Casual Trousers", price: "₹1,799", img: "https://old-money.com/cdn/shop/files/b7_6db6864b-d292-4eaa-8ced-ab90c493e0a8.png?v=1756111822&width=600" },
  { id: 4, title: "Striped Shirt", price: "₹999", img: "https://old-money.com/cdn/shop/files/7V3A6441.png?v=1754928594&width=600" },
  { id: 5, title: "Sunglasses", price: "₹699", img: "https://old-money.com/cdn/shop/files/31_4ff46fb8-851e-4dc4-a18e-a1b54398f188.png?v=1732764559&width=800" },
  { id: 6, title: "Light Sweater", price: "₹1,199", img: "https://old-money.com/cdn/shop/files/1_2ec4740c-ce11-4215-8565-9042444dddca.jpg?v=1732766191&width=800" },
  { id: 7, title: "Loafers", price: "₹2,299", img: "https://old-money.com/cdn/shop/files/1_e37c7788-8537-49b1-867a-308d73519bff.png?v=1742214496&width=800" },
  { id: 8, title: "Casual Shorts", price: "₹799", img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=60" },
  { id: 9, title: "Watch Classic", price: "₹4,999", img: "https://old-money.com/cdn/shop/files/2_816cd4f0-1f29-4973-9aa0-5232b2827756.png?v=1732901341&width=800" },
  { id: 10, title: "Relaxed Blazer", price: "₹3,499", img: "https://old-money.com/cdn/shop/files/3_b31fd106-607a-4aeb-8995-4861529d0025.png?v=1732554344&width=800" },
  { id: 11, title: "Polo Shirt", price: "₹899", img: "https://old-money.com/cdn/shop/files/33.png?v=1732451759&width=800" },
  { id: 12, title: "Chinos", price: "₹1,599", img: "https://old-money.com/cdn/shop/files/2_b4e6e70a-972d-4a89-9dac-f5c6518244dc.jpg?v=1732941627&width=600" }
];

export default function Mens() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header / Hero */}
      <header className="bg-white shadow">
        <div className="">
          <div className="flex items-center space-x-4">
            {/* <div className="h-10 w-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">M</div>
            <h1 className="text-xl font-semibold">Old Money</h1> */}
          </div>
          {/* <nav className="bg-amber-900 space-x-6 text-sm font-semibold text-white hidden md:flex px-4 py-2 rounded-md">
            <a href="#" className="hover:text-gray-200">Men</a>
            <a href="#" className="hover:text-gray-200">Women</a>
            <a href="#" className="hover:text-gray-200">Sale</a>
            <a href="#" className="hover:text-gray-200">New</a> */}
            {/* // </nav> */}

          <div className="flex items-center space-x-1">
           {/* ///// <input placeholder="Search" className="hidden sm:block border rounded-md px-3 py-1 text-sm" /> */}
            {/* <button className="text-sm bg-emerald-600 text-white px-3 py-1 rounded">Cart</button> */}
          </div>
        </div>
      </header>

      {/* Hero banner */}
      <section className="relative bg-cover bg-center" style={{ backgroundImage: `url('https://old-money.com/cdn/shop/files/Heading_940_x_400_px_32.png?v=1751444747')` }}>
        <div className="backdrop-filter backdrop-brightness-75">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-Green text-"></h2>
            <p className="mt-4 text-white max-w-xl mx-auto"></p>
            <p className=" text-Gray min-w-xl min-auto"></p>

            <div className="mt-6">
            </div>
          </div>
        </div>
      </section>

      {/* Filters and product grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-6">
          <div className="text-sm text-gray-600">Showing 1–12 of 120 results</div>
          <div className="flex items-center space-x-3">
            <select className="border rounded px-3 py-1 text-sm">
              <option>Sort: Popular</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
            </select>
            <button className="hidden sm:inline text-sm px-3 py-1 border rounded">Filter</button>
          </div>
        </div>

        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.map((p) => (
            <article key={p.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-w-4 aspect-h-3">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900 truncate">{p.title}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <div className="text-sm font-semibold">{p.price}</div>
                  <button className="text-xs px-2 py-1 border rounded">Add</button>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Load more / gallery footer */}
        <div className="mt-8 text-center">
          <button className="px-6 py-2 bg-emerald-600 text-white rounded-md">Load more</button>
        </div>
      </main>

      {/* Footer */}
      <footer className="">
        <div className="">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
            <div>
              {/* <h4 className="font-semibold">Modern Market</h4>
              <p className="text-sm text-gray-600">A modern store with timeless pieces.</p> */}
            </div>
        
              {/* <a href="#" className="text-sm text-gray-600">Help</a>
              <a href="#" className="text-sm text-gray-600">Returns</a>
              <a href="#" className="text-sm text-gray-600">Contact</a> */}
            </div>
          
          {/* <div className="mt-6 text-sm text-gray-500">© {new Date().getFullYear()} Modern Market. All rights reserved.</div> */}
        </div>
      </footer>
    </div>
  );
}
