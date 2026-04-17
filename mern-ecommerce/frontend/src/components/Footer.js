const Footer = () => {
  return (
    <footer className="bg-black text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold mb-4">🛍️ MyShop</h2>
          <p className="text-gray-400 text-sm">
            Your one-stop destination for trendy products at the best prices.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="font-semibold mb-3">Customer Support</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>FAQs</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-gray-400 text-sm">📍 Ahmedabad, India</p>
          <p className="text-gray-400 text-sm">📧 support@myshop.com</p>
          <p className="text-gray-400 text-sm">📞 +91 98765 43210</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center py-4 border-t border-gray-700 text-gray-500 text-sm">
        © 2026 MyShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;