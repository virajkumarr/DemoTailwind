import { Link } from "react-router-dom";
import { FaTachometerAlt, FaGlobe, FaSignOutAlt, FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";

function SubmittedTax() {
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
        payment.taxfileid.toLowerCase().includes(searchQuery.toLowerCase())
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
      <div className="mt-30 flex min-h-screen bg-gray-100">
        <div className="w-full flex items-center justify-center">
          <div className="text-xl">Loading payments...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-30 flex min-h-screen bg-gray-100">
        <div className="w-full flex items-center justify-center">
          <div className="text-xl text-red-600">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-30 flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-xl border-r p-6 flex flex-col items-center">
        <img src="./img2.jpeg" alt="Logo" className="w-28 mb-4 rounded-lg shadow-md" />
        <img src="../public/adminprofile.jpg" alt="Admin" className="w-16 h-16 rounded-full border-4 border-green-400 shadow-md mb-2" />
        <p className="text-sm text-gray-500 mb-6">System Administrator</p>

        {/* Navigation */}
        <nav className="w-full space-y-4">
          <Link to="/admin" className="flex items-center text-green-600 font-bold p-2 hover:bg-green-100 rounded-lg">
            <FaTachometerAlt className="mr-2" /> Dashboard
          </Link>
          <Link to="/" className="flex items-center text-gray-700 hover:text-blue-500 p-2 hover:bg-gray-100 rounded-lg">
            <FaGlobe className="mr-2" /> Live Site
          </Link>
          <Link to="/" className="flex items-center text-red-500 font-bold p-2 hover:bg-red-100 rounded-lg">
            <FaSignOutAlt className="mr-2" /> Logout
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Admin Info */}
        <div className="flex justify-between items-center mb-6 bg-white shadow-md p-4 rounded-lg border border-gray-200">
          <h1 className="text-2xl font-semibold">
            User: <span className="bg-blue-500 text-white px-3 py-1 rounded">Admin</span>
          </h1>
          <div className="flex space-x-4">
            <Link to="/userprofile" className="text-green-600 font-medium hover:underline">Profile</Link>
            <Link to="/home" className="text-red-500 font-medium hover:underline">Logout</Link>
          </div>
        </div>

        {/* Recent Payments Table */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Recent Payment Records</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search by Tax File ID..."
                value={searchQuery}
                onChange={handleSearch}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>
          <table className="w-full border-collapse text-gray-700">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="p-3 border border-gray-300">User Name</th>
                <th className="p-3 border border-gray-300">Email</th>
                <th className="p-3 border border-gray-300">Tax File ID</th>
                <th className="p-3 border border-gray-300">Amount</th>
                <th className="p-3 border border-gray-300">Payment Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredPayments.map((payment, index) => (
                <tr key={payment._id} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'} hover:bg-gray-200 transition`}>
                  <td className="p-3 border border-gray-300">{payment.username}</td>
                  <td className="p-3 border border-gray-300">{payment.email}</td>
                  <td className="p-3 border border-gray-300">{payment.taxfileid}</td>
                  <td className="p-3 border border-gray-300">₹{payment.amount}</td>
                  <td className="p-3 border border-gray-300">{new Date(payment.paymentdate).toLocaleDateString()}</td>
                </tr>
              ))}
              {filteredPayments.length === 0 && (
                <tr>
                  <td colSpan="5" className="p-4 text-center text-gray-500">
                    No payments found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default SubmittedTax;
