import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className="w-full">
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
            <button className="bg-blue-600 text-white px-2 py-1 text-xs rounded">
              Call Now 📞
            </button>
            <a href="tel:+917600300778" className="hover:underline">
              +91 7600300778
            </a>
          </span>
        </div>

        <div className="flex items-center space-x-4 text-gray-700">
          <a href="#" className="hover:text-blue-600">
            
          </a>
          <a href="#" className="hover:text-blue-600">
            
          </a>
          <a href="#" className="hover:text-blue-600">
            
          </a>
          <Link to="" className="hover:text-blue-600">
            
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-6 py-4 shadow bg-blue-300"> 
        {/* Logo */}
        <div>
          <img
            src="../public/img2.jpeg" // Replace with actual logo
            alt="Liberty Tax Logo"
            className="h-12"
          />
        </div>

        {/* Navigation Links */}
        <nav className="space-x-6 text-lg font-medium text-gray-800">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link to="about" className="hover:text-blue-600">
            About
          </Link>
          <Link to ="taxoption" href="#" className="hover:text-blue-600">
            Tax Beneficiary ▼
          </Link>
          <a href="#" className="hover:text-blue-600">
            More ▼
          </a>
          <Link to="contact" className="hover:text-blue-600">
            Contact
          </Link>
          <Link to="login" className="hover:text-blue-600">
            Login/Register ▼
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
