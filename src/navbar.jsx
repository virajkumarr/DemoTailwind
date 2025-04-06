import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import menu icons for mobile

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 left-0 bg-white shadow-md border-b border-gray-200 z-50">
      {/* Top Bar */}
      <div className="bg-gray-100 px-6 py-2 flex justify-between items-center text-purple-700 text-sm">
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-2">
            <span>✉️</span>
            <a href="mailto:info@libertytax.com" className="hover:underline">
              info@libertytax.com
            </a>
          </span>
          <span className="border-l border-gray-400 h-5"></span>
          <span className="flex items-center space-x-2">
            <button className="text-white px-2 py-1 text-xs rounded">
              Call Now 📞
            </button>
            <a href="tel:+917600300778" className="hover:underline">
              +91 7600300778
            </a>
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-6 py-4 bg-white shadow-md border-b border-gray-200">
        {/* Logo */}
        <div>
          <img
            src="/img2.jpeg" // Corrected image path for public folder
            alt="Liberty Tax Logo"
            className="h-12"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-800 text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-white lg:static lg:w-auto lg:block lg:flex space-x-6 text-lg font-medium text-gray-800`}
        >
          <Link to="/" className="block lg:inline-block px-4 py-2 hover:text-blue-600">
            Home
          </Link>
          <Link to="/about" className="block lg:inline-block px-4 py-2 hover:text-blue-600">
            About
          </Link>
          <Link to="/taxoption" className="block lg:inline-block px-4 py-2 hover:text-blue-600">
            Tax Beneficiary
          </Link>
          <Link to="/contact" className="block lg:inline-block px-4 py-2 hover:text-blue-600">
            Contact
          </Link>
          <Link to="/login" className="block lg:inline-block px-4 py-2 hover:text-blue-600">
            Login/Register
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
