import { FaTachometerAlt, FaGlobe, FaSignOutAlt, FaPhone, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Usertaxfiled = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPayments, setFilteredPayments] = useState([]);

  useEffect(() => {
    fetchPayments();
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredPayments(payments);
    } else {
      const filtered = payments.filter(payment =>
        payment.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredPayments(filtered);
    }
  }, [searchQuery, payments]);

  const fetchPayments = async () => {
    try {
      const response = await axios.get('http://localhost:3000/getfetch/payment');
      if (response.data.success) {
        setPayments(response.data.payments);
        setFilteredPayments(response.data.payments);
      } else {
        setError("Failed to fetch payments");
      }
    } catch (err) {
      console.error('Error fetching payments:', err);
      setError("Error loading payments. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-30 flex flex-col min-h-screen">

      {/* Main Section with Sidebar and Content */}
      <div className="flex flex-1 bg-gray-100">

        {/* Sidebar */}
        <div className="w-64 bg-white shadow-xl border-r border-gray-300 p-6">
          <div className="flex flex-col items-center">
            <img src="../public/adminprofile.jpg" alt="Liberty Tax" className="w-25 mb-4 rounded-lg shadow-md" />
            <p className="text-gray-700 font-semibold">
               <span className="font-bold"></span>
            </p>
            <p className="text-sm text-black-500 font-bold"></p>
          </div>

          <nav className="mt-8 space-y-4">
            <Link to="/newlogin" className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-blue-100 transition">
              <FaTachometerAlt className="text-lg" /> <span className="font-medium">Dashboard</span>
            </Link>

            <Link to="/" className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-blue-100 transition">
              <FaGlobe className="text-lg" /> <span className="font-medium">Live Site</span>
            </Link>

            <Link to="/" className="flex items-center space-x-3 p-3 rounded-lg text-red-600 font-bold hover:bg-red-100 transition">
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
              User: Filed Tax
            </button>
          </div>

          {/* Search Bar */}
          <div className="mt-6 mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4 border-b-2 border-blue-500 pb-2">
            All Tax filed
          </h2>

          {/* Loading and Error States */}
          {loading && (
            <div className="text-center py-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
              <p className="mt-2 text-gray-600">Loading payments...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}

          {/* Table */}
          {!loading && !error && (
            <div className="bg-white shadow-lg rounded-lg overflow-x-auto">
              <table className="w-full border-collapse">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="p-3">Name</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Tax File ID</th>
                    <th className="p-3">Amount</th>
                    <th className="p-3">Payment Date</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 text-center">
                  {filteredPayments.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="p-4 text-gray-500">
                        No payments found
                      </td>
                    </tr>
                  ) : (
                    filteredPayments.map((payment) => (
                      <tr key={payment._id} className="border-t hover:bg-gray-50 transition">
                        <td className="p-3">{payment.username}</td>
                        <td className="p-3">{payment.email}</td>
                        <td className="p-3">{payment.taxfileid}</td>
                        <td className="p-3">₹{payment.amount}</td>
                        <td className="p-3">{new Date(payment.paymentdate).toLocaleDateString()}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-300 p-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Liberty Tax. All rights reserved.
      </footer>
    </div>
  );
};

export default Usertaxfiled;
