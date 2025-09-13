import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-beige-100 border-t border-beige-200 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left - Logo + Links */}
        <div>
          <h1 className="text-xl font-bold tracking-widest text-beige-800">
            OLD MONEY
          </h1>
          <div className="mt-4 flex flex-col space-y-2">
            <a href="#" className="text-beige-700 hover:text-brand-dark">Shop Men</a>
            <a href="#" className="text-beige-700 hover:text-brand-dark">About Us</a>
            <a href="#" className="text-beige-700 hover:text-brand-dark">Contact Us</a>
          </div>
        </div>

        {/* Center - Email Subscription */}
        <div>
          <h2 className="text-lg font-semibold text-beige-800 mb-3">Stay Updated</h2>
          <form className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-lg border border-beige-300 bg-white text-beige-800 placeholder-beige-500 focus:outline-none focus:ring-2 focus:ring-beige-400"
            />
            <button
              type="submit"
              className="bg-beige-500 text-white px-4 py-2 rounded-lg hover:bg-beige-600"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Right - Social Media */}
        <div>
          <h2 className="text-lg font-semibold text-beige-800 mb-3">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-beige-700 hover:text-brand-dark">
              <Facebook size={22} />
            </a>
            <a href="#" className="text-beige-700 hover:text-brand-dark">
              <Twitter size={22} />
            </a>
            <a href="#" className="text-beige-700 hover:text-brand-dark">
              <Instagram size={22} />
            </a>
            <a href="mailto:info@oldmoney.com" className="text-beige-700 hover:text-brand-dark">
              <Mail size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 text-center text-sm text-beige-600">
        © {new Date().getFullYear()} OLD MONEY. All rights reserved.
      </div>
    </footer>
  );
}
