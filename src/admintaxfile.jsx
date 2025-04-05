import { FaTachometerAlt, FaGlobe, FaUser, FaSignOutAlt, FaPhone, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Admintaxfile = () => {
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
      const response = await axios.get("http://localhost:3000/getfetch/payment");
      if (response.data.success) {
        setPayments(response.data.payments);
        setFilteredPayments(response.data.payments);
      } else {
        setError("Failed to fetch payments");
      }
    } catch (error) {
      console.error("Error fetching payments:", error);
      setError("Error fetching payments. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  if (loading) {
    return (
      <div className="mt-30 flex h-screen bg-gray-100 items-center justify-center">
        <div className="text-xl">Loading payments...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-30 flex h-screen bg-gray-100 items-center justify-center">
        <div className="text-xl text-red-600">{error}</div>
      </div>
    );
  }

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

        {/* Title and Search */}
        <div className="flex justify-between items-center mt-6 mb-4">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2">
            Tax Files Record
          </h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search by email..."
              value={searchQuery}
              onChange={handleSearch}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>

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
              {filteredPayments.map((payment) => (
                <tr key={payment._id} className="border-t hover:bg-gray-50 transition">
                  <td className="p-3">{payment.username}</td>
                  <td className="p-3">{payment.email}</td>
                  <td className="p-3">{payment.taxfileid}</td>
                  <td className="p-3">₹{payment.amount}</td>
                  <td className="p-3">Credit Card</td>
                  <td className="p-3">{new Date(payment.paymentdate).toLocaleDateString()}</td>
                  <td className="p-3">
                    <button className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition">
                      Download
                    </button>
                  </td>
                </tr>
              ))}
              {filteredPayments.length === 0 && (
                <tr>
                  <td colSpan="7" className="p-4 text-center text-gray-500">
                    No payments found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default Admintaxfile;
