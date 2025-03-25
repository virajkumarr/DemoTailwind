import { Link } from "react-router-dom";
import { FaTachometerAlt, FaGlobe, FaFileAlt, FaPhone } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className=" mt-30 flex h-screen bg-gray-100">
      
      {/* Sidebar */}
      <div className="w-72 bg-white p-6 shadow-xl border-r border-gray-200">
        
        {/* Logo & Contact */}
        <div className="flex flex-col items-center mb-6">
          <img src="/img2.jpeg" alt="Liberty Tax" className="w-28 rounded-lg shadow-md" />
          <p className="text-blue-600 font-bold mt-2 flex items-center">
            <FaPhone className="mr-2" /> +91 7600300778
          </p>
        </div>
        
        {/* Profile Section */}
        <div className="flex items-center space-x-3 border-b pb-4">
          <img src="/profile.jpeg" alt="Profile" className="w-12 h-12 rounded-full shadow-md" />
          <div>
            <h2 className="font-bold text-gray-700">Welcome, Robert</h2>
            <p className="text-sm text-gray-500">System User</p>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-6 space-y-3">
          <Link to="/admin" className="flex items-center p-3 bg-blue-100 text-blue-600 font-bold rounded-lg shadow-sm hover:bg-blue-200 transition">
            <FaTachometerAlt className="mr-3" /> Dashboard
          </Link>
          <Link to="/home" className="flex items-center p-3 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition">
            <FaGlobe className="mr-3" /> Live Site
          </Link>
          <Link to="/adminuser" className="flex items-center p-3 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition">
            <FaFileAlt className="mr-3" /> My Tax Files
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        
        {/* Header */}
        <div className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg">
          <h1 className="text-2xl font-bold text-gray-800">👋 Greetings, Robert!</h1>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            User: New Comer
          </button>
        </div>

        {/* Call to Action */}
        <div className="mt-6 bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-lg font-semibold text-gray-800">📄 File Your Tax:</h2>
          <Link to="/paysubmit" className="inline-block mt-3 bg-red-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-red-600 transition">
            🚀 Lets Get Started
          </Link>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          <img src="/tax1.jpeg" alt="Tax" className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
          <img src="/tax1.jpeg" alt="Tax" className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
          <img src="/tax1.jpeg" alt="Corporate Tax" className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
          <img src="/tax4.jpeg" alt="Corporate Tax" className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
          <img src="/tax5.jpeg" alt="Corporate Tax" className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
          <img src="/ltax.jpeg" alt="Corporate Tax" className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
        </div>

      </div>
    </div>
  );
};

export default Dashboard;