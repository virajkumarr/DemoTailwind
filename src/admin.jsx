import { Link } from "react-router-dom";
import { FaUsers, FaFileInvoiceDollar, FaRegListAlt } from "react-icons/fa";

function AdminDashboard() {
  return (
    <div className="mt-35 flex min-h-screen bg-gray-50">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg border-r p-6">
        <div className="flex flex-col items-center">
          <img src="./img2.jpeg" alt="Logo" className="w-28 mb-4 rounded-lg shadow-md" />
          <img src="../public/profile.jpeg" alt="Admin" className="w-16 h-16 rounded-full border-2 border-gray-300 shadow-md mb-2" />
          <h2 className="text-lg font-semibold text-gray-800">Varney Butler</h2>
          <p className="text-sm text-gray-500">System Administrator</p>
        </div>

        {/* Navigation Links */}
        <nav className="mt-6 space-y-4">
          <Link to="/admin" className="block text-green-600 font-bold">Dashboard</Link>
          <Link to="/home" className="block text-gray-700 hover:text-blue-500 transition">Live Site</Link>
          <Link to="/admintaxfile" className="block text-gray-700 hover:text-blue-500 transition">Admin TaxFile</Link>
          <Link to="/adminuser" className="block text-gray-700 hover:text-blue-500 transition">Users</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        
        {/* Admin Info */}
        <div className="flex justify-between items-center mb-6 bg-white shadow-md p-4 rounded-lg">
          <h1 className="text-2xl font-semibold">
            User: <span className="bg-blue-500 text-white px-3 py-1 rounded">Admin</span>
          </h1>
          <div className="flex space-x-4">
            <Link to="/userprofile" className="text-green-600 cursor-pointer hover:underline">Profile</Link>
            <Link to="/home" className="text-red-500 cursor-pointer hover:underline">Logout</Link>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-red-400 to-red-600 p-6 rounded-lg shadow-lg text-white flex flex-col items-center">
            <FaUsers size={30} />
            <h2 className="text-lg font-semibold mt-3">All Users</h2>
            <button className="mt-3 bg-white text-red-600 px-4 py-2 rounded shadow-md hover:bg-gray-200 transition">
              Click To See
            </button>
          </div>
          <div className="bg-gradient-to-r from-green-400 to-green-600 p-6 rounded-lg shadow-lg text-white flex flex-col items-center">
            <FaFileInvoiceDollar size={30} />
            <h2 className="text-lg font-semibold mt-3">All Submitted Tax</h2>
            <button className="mt-3 bg-white text-green-600 px-4 py-2 rounded shadow-md hover:bg-gray-200 transition">
              Click To See
            </button>
          </div>
          <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-6 rounded-lg shadow-lg text-white flex flex-col items-center">
            <FaRegListAlt size={30} />
            <h2 className="text-lg font-semibold mt-3">User Form Fields</h2>
            <button className="mt-3 bg-white text-blue-600 px-4 py-2 rounded shadow-md hover:bg-gray-200 transition">
              Click To See
            </button>
          </div>
        </div>

        {/* Recent Payments Table */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Recent Payment Records</h3>
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="border border-gray-300 p-3">User Name</th>
                <th className="border border-gray-300 p-3">Email</th>
                <th className="border border-gray-300 p-3">TaxFile ID</th>
                <th className="border border-gray-300 p-3">Amount</th>
                <th className="border border-gray-300 p-3">Payment Method</th>
                <th className="border border-gray-300 p-3">Payment Date</th>
              </tr>
            </thead>
            <tbody>
              {/* Example Row (Replace with dynamic data) */}
              <tr className="bg-gray-50 hover:bg-gray-100 transition">
                <td className="border border-gray-300 p-3">John Doe</td>
                <td className="border border-gray-300 p-3">johndoe@email.com</td>
                <td className="border border-gray-300 p-3">#12345</td>
                <td className="border border-gray-300 p-3">$500</td>
                <td className="border border-gray-300 p-3">Credit Card</td>
                <td className="border border-gray-300 p-3">02/17/2025</td>
              </tr>
            </tbody>
          </table>
        </div>

      </main>
    </div>
  );
}

export default AdminDashboard;
