import { FaTachometerAlt, FaGlobe, FaSignOutAlt, FaPhone, } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminUsers = () => {
  return (
    <div className="mt-30 flex h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-white shadow-xl border-r border-gray-300 p-6">
        <div className="flex flex-col items-center">
          <img src="../public/img2.jpeg" alt="Liberty Tax" className="w-32 mb-4 rounded-lg shadow-md" />
          <p className="text-gray-700 font-semibold">Welcome <span className="font-bold">Varney Butler</span></p>          <p className="text-sm text-gray-500">System Administrator</p>

        </div>

        <nav className="mt-8 space-y-4">
          <Link to="/newcomer" className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-blue-100 transition">
            <FaTachometerAlt className="text-lg" /> <span className="font-medium">Dashboard</span>
          </Link>

          <Link to="/home" className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-blue-100 transition">
            <FaGlobe className="text-lg" /> <span className="font-medium">Live Site</span>
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
            User: Admin
          </button>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4 border-b-2 border-blue-500 pb-2">
          All Users
        </h2>

        {/* Table */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <table className="w-full border-collapse">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-3">Tax Role</th>
                <th className="p-3">Name</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Email</th>
                <th className="p-3">Total Payment</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-center">
              <tr className="border-t hover:bg-gray-50 transition">
                <td className="p-3">Tax Payer</td>
                <td className="p-3">Anshu Raj</td>
                <td className="p-3">+91 9182543210</td>
                <td className="p-3">anshu@example.com</td>
                <td className="p-3">1234$</td>

               
              </tr>
              <tr className="border-t hover:bg-gray-50 transition">
                <td className="p-3">Tax Payer</td>
                <td className="p-3">Buttler</td>
                <td className="p-3">+91 9768543210</td>
                <td className="p-3">buttler@example.com</td>
                <td className="p-3">1234$</td>

               
              </tr>
              <tr className="border-t hover:bg-gray-50 transition">
                <td className="p-3">Tax Payer</td>
                <td className="p-3">Chisha</td>
                <td className="p-3">+91 7788543210</td>
                <td className="p-3">chisa@example.com</td>
                <td className="p-3">1234$</td>

                
              </tr>
              <tr className="border-t hover:bg-gray-50 transition">
                <td className="p-3">Tax Payer</td>
                <td className="p-3">Viraj kumar</td>
                <td className="p-3">+91 9988543210</td>
                <td className="p-3">viraj@example.com</td>
                <td className="p-3">1234$</td>

              
              </tr>
              
              {/* Add More Rows Here */}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
};

export default AdminUsers;
