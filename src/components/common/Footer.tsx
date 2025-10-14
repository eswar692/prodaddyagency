import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-zinc-900 text-gray-700 dark:text-gray-300 border-t dark:border-zinc-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Name */}
          <Link
            to="/"
            className="text-xl font-bold text-gray-800 dark:text-white"
          >
            <span className="text-blue-600">Pro Daddy Agency</span>
          </Link>

          {/* Nav Links */}
          <nav className="flex flex-wrap gap-6 text-sm font-medium">
            <Link to="/" className="hover:text-blue-600 transition">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-600 transition">
              About
            </Link>
            <Link to="/services" className="hover:text-blue-600 transition">
              Services
            </Link>
            <Link to="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
          </nav>
        </div>
        {/* Details */}
       <div className="mx-auto text-center space-y-2">
  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
    Pro Daddy Agency Address
  </h3>
  <ul className="text-gray-700 text-lg leading-relaxed">
    <li>2-148, Edarada, High School Road</li>
    <li>Tatipaka, Konaseema</li>
    <li>Andhra Pradesh, 533247</li>
  </ul>
</div>


        {/* Bottom line */}
        <div className="mt-6 border-t pt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Pro Daddy Agency . All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
