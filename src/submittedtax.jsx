import { Link } from "react-router-dom";
import {   FaTachometerAlt, FaGlobe,  FaSignOutAlt } from "react-icons/fa";

function SubmittedTax() { 
  return (
    <div className="mt-30 flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-xl border-r p-6 flex flex-col items-center">
        <img src="./img2.jpeg" alt="Logo" className="w-28 mb-4 rounded-lg shadow-md" />
        <img src="../public/profile.jpeg" alt="Admin" className="w-16 h-16 rounded-full border-4 border-green-400 shadow-md mb-2" />
        <h2 className="text-lg font-semibold text-gray-800">Varney Butler</h2>
        <p className="text-sm text-gray-500 mb-6">System Administrator</p>

        {/* Navigation */}
        <nav className="w-full space-y-4">
          <Link to="/admin" className="flex items-center text-green-600 font-bold p-2 hover:bg-green-100 rounded-lg">
            <FaTachometerAlt className="mr-2" /> Dashboard
          </Link>
          <Link to="/home" className="flex items-center text-gray-700 hover:text-blue-500 p-2 hover:bg-gray-100 rounded-lg">
            <FaGlobe className="mr-2" /> Live Site
          </Link>
          <Link to="/logout" className="flex items-center text-red-500 font-bold p-2 hover:bg-red-100 rounded-lg">
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
          <h3 className="text-xl font-semibold mb-4">Recent Payment Records</h3>
          <table className="w-full border-collapse text-gray-700">
            <thead>
              <tr className="bg-blue-500 text-white">
                {['User Name', 'Email', 'TaxFile ID', 'Amount', 'Payment Method', 'Payment Date'].map(header => (
                  <th key={header} className="p-3 border border-gray-300">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Anshu", email: "anshu@example.com", id: "TX12345", amount: "5,000", method: "Credit Card", date: "12/02/2025" },
                { name: "Buttler", email: "buttler@example.com", id: "TX987645", amount: "10,000", method: "Credit Card", date: "02/05/2025" },
                { name: "Chisa", email: "chisa@example.com", id: "TX900045", amount: "35,000", method: "Credit Card", date: "01/07/2025" },
                { name: "Viraj Kr", email: "virajk@example.com", id: "TX90845", amount: "15,000", method: "Credit Card", date: "13/03/2025" },
                { name: "Rohan", email: "rohan@example.com", id: "TX765432", amount: "20,000", method: "Credit Card", date: "04/04/2025" },
                { name: "Meera", email: "meera@example.com", id: "TX564738", amount: "12,500", method: "Credit Card", date: "15/04/2025" },
                { name: "Aisha", email: "aisha@example.com", id: "TX453621", amount: "50,000", method: "Credit Card", date: "20/04/2025" },
                { name: "Rahul", email: "rahul@example.com", id: "TX342567", amount: "18,750", method: "Credit Card", date: "30/04/2025" },
                { name: "Neha", email: "neha@example.com", id: "TX238765", amount: "22,000", method: "Credit Card", date: "05/05/2025" },
                { name: "Aman", email: "aman@example.com", id: "TX198234", amount: "40,000", method: "Credit Card", date: "10/05/2025" },
              ].map(({ name, email, id, amount, method, date }, index) => (
                <tr key={id} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'} hover:bg-gray-200 transition`}>
                  <td className="p-3 border border-gray-300">{name}</td>
                  <td className="p-3 border border-gray-300">{email}</td>
                  <td className="p-3 border border-gray-300">{id}</td>
                  <td className="p-3 border border-gray-300">{amount}</td>
                  <td className="p-3 border border-gray-300">{method}</td>
                  <td className="p-3 border border-gray-300">{date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default SubmittedTax;
