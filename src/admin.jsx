import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6">
        <div className="flex flex-col items-center">
          <img src=".//img2.jpeg" alt="Logo" className="w-32 mb-4" />
          <img src="../public/profile.jpeg" alt="Admin" className="w-16 h-16 rounded-full mb-2" />
          <h2 className="text-lg font-semibold">Varney Butler</h2>
          <p className="text-sm text-gray-500">System Administrator</p>
        </div>

        {/* Navigation Links */}
        <nav className="mt-6">
          <ul className="space-y-4">
            <li className="text-green-600 font-bold">Dashboard</li>
             <li className="text-gray-700 hover:text-blue-500">Live Site</li>
            <li className="text-gray-700 hover:text-blue-500">Admin TaxFile</li>
            <li className="text-gray-700 hover:text-blue-500">Users</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        
        {/* Admin Info */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">User: <span className="bg-blue-500 text-white px-3 py-1 rounded">Admin</span></h1>
          <div className="flex space-x-4">
            <Link to="/userprofile" className="text-green-600 cursor-pointer">Profile</Link>
            <span className="text-red-500 cursor-pointer">Logout</span>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-gray-200 to-gray-400 p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold">All Users</h2>
            <button className="mt-3 bg-red-500 text-white px-4 py-2 rounded">Click To See</button>
          </div>
          <div className="bg-gradient-to-r from-gray-300 to-gray-500 p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold">All Submitted Tax</h2>
            <button className="mt-3 bg-green-500 text-white px-4 py-2 rounded">Click To See</button>
          </div>
          <div className="bg-gradient-to-r from-gray-100 to-gray-300 p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold">User Form Fields</h2>
            <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded">Click To See</button>
          </div>
        </div>

        {/* Recent Payments Table */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Recent Payment Records</h3>
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2">User Name</th>
                <th className="border border-gray-300 p-2">Email</th>
                <th className="border border-gray-300 p-2">TaxFile ID</th>
                <th className="border border-gray-300 p-2">Amount</th>
                <th className="border border-gray-300 p-2">Payment Method</th>
                <th className="border border-gray-300 p-2">Payment Date</th>
              </tr>
            </thead>
            <tbody>
              {/* Example Row (Replace with dynamic data) */}
              <tr>
                <td className="border border-gray-300 p-2">John Doe</td>
                <td className="border border-gray-300 p-2">johndoe@email.com</td>
                <td className="border border-gray-300 p-2">#12345</td>
                <td className="border border-gray-300 p-2">$500</td>
                <td className="border border-gray-300 p-2">Credit Card</td>
                <td className="border border-gray-300 p-2">02/17/2025</td>
              </tr>
            </tbody>
          </table>
        </div>

      </main>
    </div>
  );
}

export default AdminDashboard;
