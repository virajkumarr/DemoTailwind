import { Link } from "react-router-dom";
import { FaChartBar, FaTv, FaSignOutAlt } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

const TaxPaymentForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    taxfileid: "",
    amount: "",
    paymentdate: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setSuccess(false);

    try {
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setError("Please enter a valid email address");
        setLoading(false);
        return;
      }

      const response = await axios.post('http://localhost:3000/payment/create', formData);
      
      if (response.data.success) {
        setSuccess(true);
        setFormData({
          username: "",
          email: "",
          taxfileid: "",
          amount: "",
          paymentdate: ""
        });
      } else {
        setError(response.data.message || "Payment submission failed");
      }
    } catch (err) {
      console.error('Payment submission error:', err);
      if (err.response) {
        setError(err.response.data.message || "Server error occurred");
      } else if (err.request) {
        setError("No response from server. Please check if the server is running.");
      } else {
        setError("Error setting up the request. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-30 flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-white shadow-lg p-5 flex flex-col justify-between">
        <div>
          <div className="flex items-center space-x-3">
            <img src="../public/img2.jpeg" alt="Liberty Tax" className="w-16 rounded-md" />
          </div>
          <div className="mt-5 flex items-center space-x-3">
            <img src="../public/chisa.jpg" alt="User" className="w-12 h-12 rounded-full border-2 border-red-500" />
            <span className="text-lg font-semibold">Welcome, Chisha Kasamanda</span>
          </div>
          <nav className="mt-5 space-y-4">
            <Link to="/newcomer" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-200">
              <FaChartBar className="text-blue-600" />
              <span className="font-semibold">Dashboard</span>
            </Link>
            <Link to="/home" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-200">
              <FaTv className="text-green-600" />
              <span className="font-semibold">Live Site</span>
            </Link>
            <Link to="/home" className="flex items-center space-x-2 p-2 text-red-600 hover:bg-gray-200 rounded-md">
              <FaSignOutAlt />
              <span className="font-semibold">Logout</span>
            </Link>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-10">
        <div className="flex justify-between items-center mb-5">
          <span className="text-xl font-bold text-gray-800">User: New Comer</span>
          <span className="text-blue-600 font-semibold">📞 +917600300778</span>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md space-y-5">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-3">Tax Payment Details</h2>

          {error && (
            <div className="p-3 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}

          {success && (
            <div className="p-3 bg-green-100 text-green-700 rounded-md">
              Payment submitted successfully! Your payment has been recorded in the system.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium">User Name</label>
              <input
                type="text"
                className="w-full p-3 border rounded-md focus:ring focus:ring-red-300"
                placeholder="Enter Username Here"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                className="w-full p-3 border rounded-md focus:ring focus:ring-red-300"
                placeholder="Enter Email Here"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Tax File ID</label>
              <input
                type="text"
                className="w-full p-3 border rounded-md focus:ring focus:ring-red-300"
                placeholder="Enter Tax File ID Here"
                name="taxfileid"
                value={formData.taxfileid}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Amount</label>
              <input
                type="number"
                className="w-full p-3 border rounded-md focus:ring focus:ring-red-300"
                placeholder="Enter Amount Here"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Payment Date</label>
              <input
                type="date"
                className="w-full p-3 border rounded-md focus:ring focus:ring-red-300"
                placeholder="Enter Payment Date Here"
                name="paymentdate"
                value={formData.paymentdate}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              className={`w-full py-3 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit Payment'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaxPaymentForm;
