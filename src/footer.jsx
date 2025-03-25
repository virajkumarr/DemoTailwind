import { FaFacebookF, FaXTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { FaPhone, FaGlobe, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 shadow-lg border-t border-gray-300 py-6">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-8 text-gray-800">
        
        {/* Left Section - Logo & Contact */}
        <div className="flex items-center space-x-6">
          <img
            src="/img2.jpeg"
            alt="Liberty Tax"
            className="w-32 rounded-lg shadow-md"
          />
          <div className="space-y-1">
            <p className="flex items-center space-x-2"><FaPhone className="text-blue-600" /> <a href="tel:+917600300778" className="hover:text-blue-500">+91 7600300778</a></p>
            <p className="flex items-center space-x-2"><FaGlobe className="text-blue-600" /> <a href="https://www.libertytax.com" className="hover:text-blue-500">www.libertytax.com</a></p>
            <p className="flex items-center space-x-2"><FaEnvelope className="text-blue-600" /> <a href="mailto:info@libertytax.com" className="hover:text-blue-500">info@libertytax.com</a></p>
          </div>
        </div>

        {/* Middle Section - Services & Contact */}
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold text-blue-700">Services Links</h3>
          <a href="#" className="hover:text-blue-500">Liberty Opportunities</a>
        </div>

        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold text-blue-700">Contact Us</h3>
          <p className="flex items-center justify-center space-x-2"><FaMapMarkerAlt className="text-blue-600" /> 9th Street Sinkor, 1000 Monrovia, Liberia</p>
          <p className="flex items-center justify-center space-x-2"><FaClock className="text-blue-600" /> 9:00 AM - 5:00 PM, Sat - Thu</p>
        </div>

        {/* Right Section - Support & Social Media */}
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold text-blue-700">For Any Kind of Support</h3>
          <div className="flex justify-center space-x-5 text-2xl">
            <a href="#" className="hover:text-blue-600 transition transform hover:scale-110"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-600 transition transform hover:scale-110"><FaXTwitter /></a>
            <a href="#" className="hover:text-pink-500 transition transform hover:scale-110"><FaInstagram /></a>
            <a href="#" className="hover:text-green-500 transition transform hover:scale-110"><FaWhatsapp /></a>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="text-center text-sm mt-4 border-t border-gray-300 pt-3 text-gray-700">
        © {new Date().getFullYear()} <span className="text-blue-600 font-semibold">Liberty Tax</span>. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
