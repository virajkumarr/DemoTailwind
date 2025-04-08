import { Link } from "react-router-dom";
import {
  FaUsers,
  FaFileInvoiceDollar,
  FaTachometerAlt,
  FaGlobe,
  FaSignOutAlt,
  FaUserEdit,
  FaQuestionCircle
} from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";

function AdminDashboard() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPayments(); // Initial fetch when component mounts
  }, []);

  const fetchPayments = async () => {
    try {
      const response = await axios.get("http://localhost:3000/getfetch/payment");
      if (response.data.success) {
        setPayments(response.data.payments);
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

  return (
    <div className="mt-30 flex min-h-screen bg-gray-100">

      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white shadow-xl border-r p-6 flex flex-col items-center">
        <img src="./img2.jpeg" alt="Logo" className="w-28 mb-4 rounded-lg shadow-md" />
        <img
          src="../public/adminprofile.jpg"
          alt="Admin"
          className="w-16 h-16 rounded-full border-4 border-green-400 shadow-md mb-2"
        />
        
        <p className="text-sm text-gray-500 mb-6">System Administrator</p>

        {/* Menu Links */}
        <nav className="w-full space-y-4">
          <Link
            to="/admin"
            className="flex items-center text-green-600 font-bold p-2 hover:bg-green-100 rounded-lg"
          >
            <FaTachometerAlt className="mr-2" /> Dashboard
          </Link>
          <Link
            to="/home"
            className="flex items-center text-gray-700 hover:text-blue-500 p-2 hover:bg-gray-100 rounded-lg"
          >
            <FaGlobe className="mr-2" /> Live Site
          </Link>
          <Link
            to="/faq-management"
            className="flex items-center text-gray-700 hover:text-blue-500 p-2 hover:bg-gray-100 rounded-lg"
          >
            <FaQuestionCircle className="mr-2" /> FAQ Management
          </Link>
          <Link
            to="/home"
            className="flex items-center text-red-500 font-bold p-2 hover:bg-red-100 rounded-lg"
          >
            <FaSignOutAlt className="mr-2" /> Logout
          </Link>
        </nav>
      </aside>

      {/* Main Dashboard Section */}
      <main className="flex-1 p-8">

        {/* Header */}
        <div className="flex justify-between items-center mb-6 bg-white shadow-md p-4 rounded-lg border border-gray-200">
          <h1 className="text-2xl font-semibold">
            User: <span className="bg-blue-500 text-white px-3 py-1 rounded">Admin</span>
          </h1>
          <div className="flex space-x-4">
            <Link to="/home" className="text-red-500 font-medium hover:underline">
              Logout
            </Link>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-r from-red-400 to-red-600 p-6 rounded-lg shadow-lg text-white flex flex-col items-center transform hover:scale-105 transition duration-300">
            <FaUsers size={40} />
            <h2 className="text-lg font-semibold mt-3">All Users</h2>
            <Link
              to="/alluser"
              className="mt-3 bg-white text-gray-900 px-4 py-2 rounded shadow-md hover:bg-gray-200 transition"
            >
              Click To See
            </Link>
          </div>
          <div className="bg-gradient-to-r from-green-400 to-green-600 p-6 rounded-lg shadow-lg text-white flex flex-col items-center transform hover:scale-105 transition duration-300">
            <FaFileInvoiceDollar size={40} />
            <h2 className="text-lg font-semibold mt-3">All Submitted Tax</h2>
            <Link
              to="/subtax"
              className="mt-3 bg-white text-gray-900 px-4 py-2 rounded shadow-md hover:bg-gray-200 transition"
            >
              Click To See
            </Link>
          </div>
          <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-6 rounded-lg shadow-lg text-white flex flex-col items-center transform hover:scale-105 transition duration-300">
            <FaUserEdit size={40} />
            <h2 className="text-lg font-semibold mt-3">AdminCredentials</h2>
            <Link
              to="/admin-credentials"
              className="mt-3 bg-white text-gray-900 px-4 py-2 rounded shadow-md hover:bg-gray-200 transition"
            >
              Click To See
            </Link>
          </div>
        </div>

        {/* Payment Records Table */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-4">Recent Payment Records</h3>

          {loading ? (
            <div className="text-center py-4">Loading payments...</div>
          ) : error ? (
            <div className="text-center text-red-600 py-4">{error}</div>
          ) : (
            <table className="w-full border-collapse text-gray-700">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="p-3 border border-gray-300">User Name</th>
                  <th className="p-3 border border-gray-300">Email</th>
                  <th className="p-3 border border-gray-300">TaxFile ID</th>
                  <th className="p-3 border border-gray-300">Amount</th>
                  <th className="p-3 border border-gray-300">Payment Date</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment, index) => (
                  <tr
                    key={payment._id}
                    className={`${index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"} hover:bg-gray-200 transition`}
                  >
                    <td className="p-3 border border-gray-300">{payment.username}</td>
                    <td className="p-3 border border-gray-300">{payment.email}</td>
                    <td className="p-3 border border-gray-300">{payment.taxfileid}</td>
                    <td className="p-3 border border-gray-300">₹{payment.amount}</td>
                    <td className="p-3 border border-gray-300">
                      {new Date(payment.paymentdate).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
                {payments.length === 0 && (
                  <tr>
                    <td colSpan="5" className="p-4 text-center text-gray-500">
                      No payments found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;
