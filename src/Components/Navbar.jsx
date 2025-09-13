import { Search, ShoppingCart } from "lucide-react";
import Link  from "react-dom";
export default function Navbar() {
  return (
    <header className="w-full shadow-sm px-7 py-6 flex justify-between items-center">
      {/* Left Menu */}
      <nav className="flex gap-8 text-sm font-semibold text-beige-800">
      
        <div className="flex items-center gap-1 cursor-pointer">
          SHOP MEN
        </div>
      
        <div className="flex items-center gap-1 cursor-pointer">
          About Us
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          Contact Us 
        </div>
      </nav>

      {/* Center Logo */}
<div className="absolute left-1/2 transform -translate-x-1/2">
    <h1 className="text-2xl font-serif tracking-widest text-beige-700">
      OLD MONEY
    </h1>
  </div>
      {/* Right Menu */}
      <div className="flex items-center gap-6 text-sm text-beige-800    x">
        {/* Currency */}
        <div className="flex items-center gap-1 cursor-pointer">
          <img
            src="https://flagcdn.com/w20/in.png"
            alt="India Flag"
            className="w-5 h-5"
          />
          <span>INR ₹</span>
        </div>
        <ShoppingCart className="w-5 h-5 cursor-pointer" />
      </div>
    </header>
  );
}

