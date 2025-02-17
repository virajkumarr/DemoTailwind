

function ContactUs() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex justify-center items-center p-8">
      <div className="flex flex-col md:flex-row w-full max-w-5xl shadow-lg rounded-lg overflow-hidden">
        
        {/* Left Side - Contact Details */}
        <div className="bg-gray-800 p-8 w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Letsx discuss on something cool together</h2>

          {/* Email */}
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-blue-500 text-2xl">✉️</span>
            <a href="mailto:info@libertytax.com" className="hover:underline">
              info@libertytax.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-3 mb-4">
            <img src="../public/call-icon.png" alt="Call Now" className="h-6 w-6" />
            <a href="tel:+917600300778" className="hover:underline">+91 7600300778</a>
          </div>

          {/* Address */}
          <div className="mb-4">
            <p className="font-semibold">Office Address</p>
            <p>9th Street Sinkor</p>
            <p>1000 Monrovia 10, Liberia</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-xl hover:text-blue-500">📘</a> {/* Facebook */}
            <a href="#" className="text-xl hover:text-gray-500">❌</a> {/* X (Twitter) */}
            <a href="#" className="text-xl hover:text-pink-500">📸</a> {/* Instagram */}
            <a href="#" className="text-xl hover:text-green-500">🟢</a> {/* WhatsApp */}
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-gray-700 p-8 w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <p className="text-gray-300 text-sm mb-4">
            Please do not hesitate to send us a message. We reply within 24 hours.
          </p>

          <form>
            <input type="text" placeholder="Enter First Name Here..." className="w-full p-3 mb-3 bg-gray-800 rounded" />
            <input type="text" placeholder="Enter Last Name Here..." className="w-full p-3 mb-3 bg-gray-800 rounded" />
            <input type="email" placeholder="Enter Email Here..." className="w-full p-3 mb-3 bg-gray-800 rounded" />
            <input type="tel" placeholder="Enter Phone Here..." className="w-full p-3 mb-3 bg-gray-800 rounded" />
            <input type="text" placeholder="Enter Subject Here..." className="w-full p-3 mb-3 bg-gray-800 rounded" />
            <textarea placeholder="Write Message Here..." className="w-full p-3 mb-3 bg-gray-800 rounded h-24"></textarea>
            
            <button type="submit" className="w-full bg-black py-3 rounded text-white font-semibold hover:bg-gray-600 transition">
              Submit
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default ContactUs;
