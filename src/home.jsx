import { Link } from "react-router-dom";
import { FaClock, FaUser, FaLock, FaHeart } from "react-icons/fa";

function Home() {
    const services = [
      {
        title: "Annual CIT filing",
        description:
          "We help clients prepare and submit their annual corporate income tax returns along with necessary supporting documents to obtain tax clearance.",
        image: "../public/img4.jpeg", // Replace with actual image URL
        link: "#",
      },
      {
        title: "Tax Payment services",
        description:
          "We support global clients with Trust Account services for deposit of regular taxes and VAT to Liberian government where clients do not have local signatories and cannot issue cheques.",
        image: "../public/img5.jpeg", // Replace with actual image URL
        link: "#",
      },
      {
        title: "Personal Tax Returns Preparing & Filing",
        description:
          "Dealing with taxation is a crucial part for Liberians and it can often be complicated. We strive at understanding the client’s situation, so as to minimize taxes.",
        image: "../public/img6.jpeg", // Replace with actual image URL
        link: "#",
      },
    ];
  
    return (
        
      <div className="bg-white text-black py-16">
       
        <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
        
        {/* Left Side - Text & CTA */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            Your Tax Filing Is The Key <br /> To Your Financial Goal
          </h1>
          <p className="text-gray-700 text-lg mt-4">Lets Do It Together ...</p>
          <br />
          
          {/* Call-to-Action Button */}
          <Link to ="/login" className="mt-6 bg-red-500 text-white px-6 py-3 text-lg rounded-lg shadow-md hover:bg-red-600 transition">
            File Your Taxes Online
          </Link>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src="../public/img7.jpg"  // Replace with actual image path
            alt="Professional Man"
            className="w-80 md:w-96 object-cover"
          />
        </div>

      </div>
    </div>
         <div className=" bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8">
      
      <h1 className=" text-4xl font-bold mb-6">About</h1>

      <div className=" bg-blue-900 p-6 rounded-lg shadow-lg">
       
        <h2 className="mt-20 text-3xl font-bold mb-4">About Us</h2>

        <div className="flex flex-col md:flex-row">
        
          <div className="md:w-1/3 relative">
            <img
              src="../public/img3.jpg" // Replace with actual image URL
              alt="Professional"
              className="rounded-lg shadow-lg"
            />
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
              Best Tax Filing
            </span>
          </div>

          {/* Right - Content Section */}
          <div className="md:w-2/3 md:pl-8 mt-6 md:mt-0">
            <h3 className="text-2xl font-bold">
              LibertyTax is a platform that helps in connecting Citizens with an
              easy tax filing.
            </h3>
            <p className="mt-4 text-gray-300">
              LibertyTax is an easy-to-use web app that allows citizens to
              submit details to accountants for tax filing and other related
              services. Our simple, fast, and secure platform is catered to
              citizens who want to get their taxes filed from home without the
              hassle of taking buses in rainy or sunny weather, booking
              appointments, and waiting in lines at accountant offices.
            </p>

            {/* Our Goal Section */}
            <h3 className="text-2xl font-bold mt-6">Our Goal</h3>
            <p className="mt-4 text-gray-300">
              Since 2018, LibertyTax has served over 5,000 citizens across
              Liberia, simplifying tax filing with fast, secure, and efficient
              solutions. Our platform connects citizens to expert accountants,
              offering personalized guidance and eliminating the need for
              in-person visits.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-12 rounded-2xl shadow-2xl border border-gray-300 max-w-5xl w-full text-center">
        {/* Title */}
        <h2 className="text-5xl font-extrabold text-gray-900 mb-8">
          WHY <span className="text-blue-600">LIBERTY TAX</span> ??
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Description */}
          <p className="text-gray-700 text-lg leading-relaxed font-medium text-left">
            Liberty Tax is recognized for its exceptional work in accounting, taxation, 
            and business advisory services for small and medium companies, family-owned 
            businesses, and not-for-profit clients.
          </p>

          {/* Right Side - Features */}
          <div className="space-y-6 text-left">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 text-white p-3 rounded-full shadow-md">
                <FaClock className="text-xl" />
              </div>
              <p className="text-gray-900 text-lg font-semibold">
                <strong>Fast:</strong> 5-10 minutes process for tax filing.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 text-white p-3 rounded-full shadow-md">
                <FaUser className="text-xl" />
              </div>
              <p className="text-gray-900 text-lg font-semibold">
                <strong>Simple:</strong> Take pictures & submit to accountants.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 text-white p-3 rounded-full shadow-md">
                <FaLock className="text-xl" />
              </div>
              <p className="text-gray-900 text-lg font-semibold">
                <strong>Secure:</strong> Safely transmitted to accountants for tax filing.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 text-white p-3 rounded-full shadow-md">
                <FaHeart className="text-xl" />
              </div>
              <p className="text-gray-900 text-lg font-semibold">
                <strong>Excellent Service:</strong> Online & offline customer support available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

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
        <div className="container mx-auto text-center">
          {/* Title */}
          <h2 className="text-4xl font-bold mb-10">What Services We Offer</h2>
  
          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-8 px-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
                <a href={service.link} className="text-blue-600 font-semibold mt-4 inline-block">
                  More
                </a>
              </div>
            ))}
          </div>
  
          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            <span className="h-3 w-3 bg-gray-400 rounded-full"></span>
            <span className="h-3 w-3 bg-gray-600 rounded-full"></span>
            <span className="h-3 w-3 bg-gray-400 rounded-full"></span>
            <span className="h-3 w-3 bg-gray-400 rounded-full"></span>
          </div>
        </div>
      </div>
      
    );
  }
  
  export default Home;
  