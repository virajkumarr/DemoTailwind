import { FaTachometerAlt, FaGlobe, FaUser, FaSignOutAlt, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const Admintaxfile = () => {
  return (
    <div className="mt-30 flex h-screen bg-gray-100">
      
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg border-r border-gray-300 p-6">
        <div className="flex flex-col items-center">
          <img src="/img2.jpeg" alt="Liberty Tax" className="w-28 mb-4 rounded-lg shadow-md" />
          <p className="text-gray-700 font-semibold">Welcome Robert</p>
        </div>

        <nav className="mt-8 space-y-4">
          <Link to="/admin" className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-blue-100 transition">
            <FaTachometerAlt className="text-lg" /> <span>Dashboard</span>
          </Link>

          <Link to="/home" className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-blue-100 transition">
            <FaGlobe className="text-lg" /> <span>Live Site</span>
          </Link>

          <Link to="/admintaxfile" className="flex items-center space-x-3 p-3 rounded-lg text-green-600 font-bold hover:bg-green-100 transition">
            <FaUser className="text-lg" /> <span>My Tax Files</span>
          </Link>

          <Link to="/home" className="flex items-center space-x-3 p-3 rounded-lg text-red-600 font-bold hover:bg-red-100 transition">
            <FaSignOutAlt className="text-lg" /> <span>Logout</span>
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        
        {/* Header */}
        <div className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg">
          <div className="flex items-center space-x-2 text-blue-600">
            <FaPhone />
            <span className="text-gray-800 font-semibold">+91 7600300778</span>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            User: New Comer
          </button>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4 border-b-2 border-blue-500 pb-2">
          Tax Files Record
        </h2>

        {/* Table */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <table className="w-full border-collapse">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-3">User Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">TaxFile ID</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Payment Method</th>
                <th className="p-3">Payment Date</th>
                <th className="p-3">Download Receipt</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-center">
              <tr className="border-t hover:bg-gray-50 transition">
                <td className="p-3">John Doe</td>
                <td className="p-3">john@example.com</td>
                <td className="p-3">TX12345</td>
                <td className="p-3">$500</td>
                <td className="p-3">Credit Card</td>
                <td className="p-3">12/02/2025</td>
                <td className="p-3">
                  <button className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition">
                    Download
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default Admintaxfile;
