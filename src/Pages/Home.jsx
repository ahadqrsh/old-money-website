import { Star } from "lucide-react";
import { Link } from "react-router-dom";
export default function Home() {
  const products = [
  {
    id: 1,
    title: "Classic Suede Loafers",
    price: "₹6,500",
    save: "₹4,900.00",
    image: "https://tse1.mm.bing.net/th/id/OIP.HTjShK7JAlml8Qq7OWDpowAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
    reviews: 6.8,
  },
  {
    id: 2,
    title: "Beige Linen Shirt",
    price: "₹2,800",
    save: "₹1,700.00",
    image: "https://tse2.mm.bing.net/th/id/OIP.hZonpQl_oripetPSdbH5EgHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3",
    reviews: 1.8,
  },
  {
    id: 3,
    title: "Tan Leather Loafers",
    price: "₹7,200",
    save: "₹5,600.00",
    image: "https://tse4.mm.bing.net/th/id/OIP.8dK72aijy7jgXlFxtBhoDAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    reviews: 3.9,
  },
  {
    id: 4,
    title: "Beige Cordroy Pant",
    price: "₹3,200",
    save: "₹2,100.00",
    image: "https://tse1.mm.bing.net/th/id/OIP.KR1ktjEpcNjKd2Yo6G_9iQHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",
    reviews: 4.5,
  },
  {
  id: 5,
    title: "Verbier Half Zip Sweater",
    price: "₹4,400.00",
    save: "₹1700.00",
    image: "https://old-money.com/cdn/shop/files/1_2ec4740c-ce11-4215-8565-9042444dddca.jpg?v=1732766191&width=800",
    reviews: 4.1,
   },
    {
  id: 6,
    title: "Old Money Linen Combo (Longsleeve)",
    price: "₹7600.00",
    save: "₹5,800.00",
    image: "https://old-money.com/cdn/shop/files/1_38035054-c7ed-4f89-a612-2a4371e1e034.jpg?v=1732757990&width=800",
    reviews: 4.9,
   },
    {
  id: 7,
    title: "Suede Driver Loafers",
    price: "₹5,300",
    save: "₹1,000.00",
    image: "https://old-money.com/cdn/shop/files/1_e37c7788-8537-49b1-867a-308d73519bff.png?v=1742214496&width=800",
    reviews: 3.8,
   },
    {
  id: 8,
    title: "The Mandarin Mark",
    price: "₹3,800",
    save: "₹2,100.00",
    image: "https://old-money.com/cdn/shop/files/ImageEdit-OldMoney_9_b6730487-01d1-4d36-ba59-98a40e844c62.jpg?v=1740582356&width=800",
    reviews: 4.9,
   },
    {
  id: 9,
    title: "Gentlemen's Striped Shirt",
    price: "₹4,800",
    save: "₹3,300.00",
    image: "https://old-money.com/cdn/shop/files/7V3A6441.png?v=1754928594&width=800",
    reviews: 68,
   },
    {
  id: 10,
    title: "Refined Solid T-Shirt",
    price: "₹2,600",
    save: "₹600.00",
    image: "https://old-money.com/cdn/shop/files/SOLIDTEE1_02c46197-61ae-4516-b081-ed5c78137f30.jpg?v=1741979814&width=800",
    reviews: 4.9,
   },
    {
  id: 11,
    title: "Old Money Linen Combo (Shorts)",
    price: "₹6,700",
    save: "₹6,700.00",
    image: "https://old-money.com/cdn/shop/files/1_cb3970db-7cbe-454e-9d0e-ac385c833540.jpg?v=1732941628&width=800",
    reviews: 4.9,
   },
   {
  id: 12,
    title: "Casablanca - Premium Linen Shorts",
    price: "₹4,300",
    save: "₹700.00",
    image: "https://old-money.com/cdn/shop/files/1_d8ff316a-5869-4873-b37b-03c47ae33276.jpg?v=1732799403&width=800",
    reviews: 4.5,
   },
];

  return (<>
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src="https://old-money.com/cdn/shop/files/Untitled_3000_x_2000_px_3000_x_1700_px_6.png?v=1757410800&width=2000"
        alt="Hero Background"
        className="absolute inset-0 w-auto mt-5 h-auto"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/20 w-auto h-auto"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-beige-100 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">DRESS WITH CLASS</h2>
        <p className="mb-4">AUTUMN TRIP GIVEAWAY (50% OFF)</p>

        {/* Buttons */}
        <div className="flex gap-4">
          <Link to="/mens">
          <button className="px-6 py-2 text-white border border-black rounded hover:bg-beige-400 hover:text-beige-900 transition">
            SHOP NOW
          </button>
          </Link>
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
