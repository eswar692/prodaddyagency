import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./SideBar";

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const isMenuFalse = () => setIsMenu(false);
  return (
    <header className="w-full bg-white shadow">
      <div className="text-center w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white py-2 text-lg font-semibold shadow-md">
  93989 55055
</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          <span className="text-blue-600">Pro Daddy Agency</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
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

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            type="button"
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
            onClick={() => setIsMenu(!isMenu)}
          >
            {isMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      <Sidebar isOpen={isMenu} onClose={isMenuFalse} />
    </header>
  );
};

export default Header;
