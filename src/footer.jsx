const Footer = () => {
    return (
      <footer className="bg-white shadow-md p-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
          
          {/* Left Section - Logo & Contact */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="../public/img2.jpeg" // Replace with actual logo URL
              alt="Liberty Tax"
              className="w-32 mb-4"
            />
            <p className="flex items-center space-x-2">
              <span>📞</span> 
              <a href="tel:+917600300778" className="hover:underline">
                +91 7600300778
              </a>
            </p>
            <p className="flex items-center space-x-2">
              <span>🌐</span> 
              <a href="https://www.libertytax.com" target="_blank" className="hover:underline">
                www.libertytax.com
              </a>
            </p>
            <p className="flex items-center space-x-2">
              <span>✉️</span> 
              <a href="mailto:info@libertytax.com" className="hover:underline">
                info@libertytax.com
              </a>
            </p>
          </div>
  
          {/* Middle Section - Services & Contact */}
          <div className="text-center">
            <h3 className="text-lg font-semibold">Services Links</h3>
            <ul className="space-y-2 mt-2">
              <li><a href="#" className="hover:underline">Liberty Opportunities</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
            
            
            <div><h3 className="text-lg font-semibold mt-6">Contact Us</h3>
            <p>📍 9th Street Sinkor, 1000 Monrovia 10 Liberia</p>
            <p>⏰ 9:00 AM - 5:00 PM, Sat - Thu</p></div>
          </div>
  
          {/* Right Section - Support & Social Media */}
          <div className="text-center">
            <h3 className="text-lg font-semibold">For any kind of Support</h3>
            <div className="flex justify-center space-x-4 mt-2 text-xl">
              <a href="#" className="hover:text-blue-600">📘</a> {/* Facebook */}
              <a href="#" className="hover:text-blue-500">✖️</a> {/* X (Twitter) */}
              <a href="#" className="hover:text-pink-500">📸</a> {/* Instagram */}
              <a href="#" className="hover:text-green-500">💬</a> {/* WhatsApp */}
            </div>
          </div>
  
        </div>
      </footer>
    );
  };
  
  export default Footer;
  