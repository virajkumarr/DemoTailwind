

import { FaClock, FaUser, FaLock, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

function About() {
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
      <div className=" mt-20 bg-gray-100 text-gray-900 py-16">
        <div className="bg-gradient-to-r from-gray-300 to-gray-100 text-black p-12 rounded-lg shadow-xl">
          
          <h1 className="mt-10 text-5xl font-extrabold text-center mb-10 tracking-wide text-blue-600">
            About Us
          </h1>
    
          <div className="bg-white p-8 rounded-xl shadow-2xl">
            
            {/* Content Wrapper */}
            <div className="flex flex-col md:flex-row items-center md:items-start">
              
              {/* Left - Image Section */}
              <div className="md:w-1/3 relative flex justify-center">
                <img
                  src="/about.jpg" // Ensure the correct image path
                  alt="Professional"
                  className="rounded-lg shadow-lg border-4 border-gray-400 transition-transform transform hover:scale-105 duration-300"
                />
                <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md">
                  Best Tax Filing
                </span>
              </div>
    
              {/* Right - Content Section */}
              <div className="md:w-2/3 md:pl-10 mt-6 md:mt-0 text-center md:text-left">
                <h3 className="text-3xl font-bold mb-4 text-blue-500">
                  LibertyTax - Your Smart Tax Solution
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  LibertyTax is a modern platform connecting citizens with 
                  expert accountants for easy and secure tax filing.  
                  No more long waits or complicated paperwork!
                </p>
    
                {/* Our Goal Section */}
                <h3 className="text-2xl font-bold mt-8 text-blue-500">
                  Our Goal
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Since <span className="text-blue-600 font-bold">2018</span>, we have helped over  
                  <span className="text-blue-600 font-bold"> 5,000+</span> citizens file taxes securely.  
                  Our platform ensures **fast, reliable, and expert-backed tax filing**  
                  from the comfort of your home.
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
                <Link to="/itr"><a href={service.link} className="text-blue-600 font-semibold mt-4 inline-block">
                  More
                </a>
                </Link>
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
  
  export default About;
  