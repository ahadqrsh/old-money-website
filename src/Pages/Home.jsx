export default function Home() {
  const products = [
  {
    id: 1,
    title: "Classic Suede Loafers",
    price: "₹6,500",
    save: "₹4,900.00",
    image: "/shoes1.png",
    reviews: 68,
  },
  {
    id: 2,
    title: "Beige Linen Shirt",
    price: "₹2,800",
    save: "₹1,700.00",
    image: "/shirt1.png",
    reviews: 18,
  },
  {
    id: 3,
    title: "Tan Leather Loafers",
    price: "₹7,200",
    save: "₹5,600.00",
    image: "/shoes2.png",
    reviews: 39,
  },
  {
    id: 4,
    title: "Ivory Knit Polo",
    price: "₹3,200",
    save: "₹2,100.00",
    image: "/polo1.png",
    reviews: 1,
  },
];

  return (<>
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
    <section className="py-12 px-6 bg-white">
      {/* Mission */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-beige-900">
          OLD MONEY&apos;S <span className="text-brand">MISSION</span>
        </h2>
        <p className="text-beige-700 mt-4">
          Everyone deserves to dress classy. We elevate your style with Old Money fashion, 
          without overpaying.
        </p>
      </div>

      {/* Bestsellers Header */}
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-xl md:text-2xl font-bold text-beige-900">
          SHOP <span className="text-brand">BESTSELLERS</span>
        </h3>
        <button className="text-sm bg-brand text-white px-4 py-2 rounded hover:bg-brand-dark">
          VIEW ALL →
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="relative bg-white shadow-sm rounded-lg overflow-hidden">
            {/* Save Badge */}
            <div className="absolute top-2 left-2 bg-brand text-white text-xs font-semibold px-2 py-1 rounded">
              SAVE RS. {product.save}
            </div>

            {/* Product Image */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-contain bg-beige-50"
            />

            {/* Product Info */}
            <div className="p-4 text-center">
              <h4 className="text-beige-900 font-semibold">{product.title}</h4>
              <p className="text-sm text-beige-700 mt-1">{product.price}</p>
              {/* Ratings */}
              <div className="flex items-center justify-center space-x-1 mt-2">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} size={16} fill="#d8bfa0" stroke="#d8bfa0" />
                  ))}
                <span className="text-sm text-beige-700">({product.reviews})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}
