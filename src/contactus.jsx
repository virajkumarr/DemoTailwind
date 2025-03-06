function ContactUs() {
  return (
    <div className="mt-20 min-h-screen flex justify-center items-center p-8 bg-white">
      <div className="flex flex-col md:flex-row w-full max-w-6xl shadow-xl rounded-2xl overflow-hidden border border-gray-200 bg-gradient-to-br from-white to-gray-100">
        
        {/* Left Side - Contact Details */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 w-full md:w-1/2 rounded-l-2xl">
          <h2 className="text-4xl font-bold mb-4">Lets Connect!</h2>
          <p className="text-gray-200 mb-6">We would  love to hear from you. Reach out anytime.</p>

          {/* Email */}
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-yellow-400 text-2xl">✉️</span>
            <a href="mailto:info@libertytax.com" className="hover:text-yellow-300 transition">
              info@libertytax.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-3 mb-4">
            <img src="/call-icon.png" alt="Call Now" className="h-6 w-6" />
            <a href="tel:+917600300778" className="hover:text-yellow-300 transition">
              +91 7600300778
            </a>
          </div>

          {/* Address */}
          <div className="mb-6">
            <p className="font-semibold text-yellow-400">📍 Office Address</p>
            <p>9th Street Sinkor</p>
            <p>1000 Monrovia 10, Liberia</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4 text-2xl">
            <a href="#" className="hover:text-blue-300 transition">📘</a> {/* Facebook */}
            <a href="#" className="hover:text-gray-300 transition">❌</a> {/* X (Twitter) */}
            <a href="#" className="hover:text-pink-300 transition">📸</a> {/* Instagram */}
            <a href="#" className="hover:text-green-300 transition">🟢</a> {/* WhatsApp */}
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white p-10 w-full md:w-1/2 rounded-r-2xl">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Send Us a Message</h2>
          <p className="text-gray-600 text-sm mb-6">We usually reply within 24 hours.</p>

          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition" />
              <input type="text" placeholder="Last Name" className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition" />
            </div>
            <input type="email" placeholder="Email Address" className="w-full p-3 mt-4 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition" />
            <input type="tel" placeholder="Phone Number" className="w-full p-3 mt-4 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition" />
            <input type="text" placeholder="Subject" className="w-full p-3 mt-4 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition" />
            <textarea placeholder="Write your message here..." className="w-full p-3 mt-4 bg-gray-100 border border-gray-300 rounded-lg h-24 focus:ring-2 focus:ring-blue-400 outline-none transition"></textarea>
            
            <button type="submit" className="w-full bg-blue-500 py-3 rounded-lg text-white font-semibold hover:bg-blue-600 transition duration-300 mt-4">
              Send Message 🚀
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default ContactUs;
