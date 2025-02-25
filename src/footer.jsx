import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 shadow-lg border-t border-gray-300 p-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Left Section - Logo & Contact in Same Row */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/img2.jpeg"
            alt="Liberty Tax"
            className="w-32 mb-4 rounded-lg shadow-md"
          />
          <div className="flex flex-col space-y-1 text-gray-700">
            <p>📞 <a href="tel:+917600300778" className="hover:text-blue-500">+91 7600300778</a></p>
            <p>🌐 <a href="https://www.libertytax.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">www.libertytax.com</a></p>
            <p>✉️ <a href="mailto:info@libertytax.com" className="hover:text-blue-500">info@libertytax.com</a></p>
          </div>
        </div>

        {/* Middle Section - Services & Contact */}
        <div className="text-gray-800">
          <h3 className="text-xl font-semibold text-blue-700">Services</h3>
          <ul className="space-y-2 mt-2">
            <li><a href="#" className="hover:text-blue-500">Liberty Opportunities</a></li>
            <li><a href="#" className="hover:text-blue-500">About Us</a></li>
            <li><a href="#" className="hover:text-blue-500">Contact Us</a></li>
          </ul>
          
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-blue-700">Contact Us</h3>
            <p>📍 9th Street Sinkor, 1000 Monrovia 10, Liberia</p>
            <p>⏰ 9:00 AM - 5:00 PM, Sat - Thu</p>
          </div>
        </div>

        {/* Right Section - Support & Social Media */}
        <div className="text-gray-800">
          <h3 className="text-xl font-semibold text-blue-700">Need Support?</h3>
          <div className="flex justify-center md:justify-start space-x-6 mt-4 text-2xl text-gray-600">
            <a href="#" className="hover:text-blue-600 transition duration-300">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-400 transition duration-300">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-400 transition duration-300">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-green-500 transition duration-300">
              <FaWhatsapp />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="text-center text-sm mt-6 border-t border-gray-300 pt-4 text-gray-700">
        © {new Date().getFullYear()} Liberty Tax. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
