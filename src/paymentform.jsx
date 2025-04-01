import { Link } from "react-router-dom";
import { FaChartBar, FaTv, FaFolderOpen, FaSignOutAlt } from "react-icons/fa";

const TaxPaymentForm = () => {
  return (
    <div className=" mt-30 flex min-h-screen bg-gray-100">
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
            <Link to="/adminuser" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-200">
              <FaFolderOpen className="text-yellow-600" />
              <span className="font-semibold">My Tax Files</span>
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

          <div>
            <label className="block text-gray-700 font-medium">User Name</label>
            <input
              type="text"
              className="w-full p-3 border rounded-md focus:ring focus:ring-red-300"
              placeholder="Enter Username Here"
              name="username"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              className="w-full p-3 border rounded-md focus:ring focus:ring-red-300"
              placeholder="Enter Email Here"
              name="email"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Tax File ID</label>
            <input
              type="text"
              className="w-full p-3 border rounded-md focus:ring focus:ring-red-300"
              placeholder="Enter Tax File ID Here"
              name="taxfile id"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Amount</label>
            <input
              type="number"
              className="w-full p-3 border rounded-md focus:ring focus:ring-red-300"
              placeholder="Enter Amount Here"
              name="amount"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Payment Date</label>
            <input
              type="date"
              className="w-full p-3 border rounded-md focus:ring focus:ring-red-300"
              placeholder="Enter Payment Date Here"
              name="paymentdate"
            />
          </div>

          <Link
            to="/payss"
            className="w-full block text-center py-3 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 transition duration-300"
          >
            Submit Payment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TaxPaymentForm;
