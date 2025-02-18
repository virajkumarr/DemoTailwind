import { Link } from "react-router-dom";


const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white p-6 shadow-md">
        {/* Logo and Contact */}
        <div className="flex flex-col items-center mb-4">
          <img src="../public/img2.jpeg" alt="Liberty Tax" className="w-32 mb-2" />
          <p className="text-blue-600 font-bold">+917600300778</p>
        </div>
        
        {/* Profile Section */}
        <div className="flex items-center space-x-3">
          <img
            src="../public/profile.jpeg"
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h2 className="font-bold">Welcome Robert</h2>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-6">
          <ul>
            <li className="p-2 hover:bg-gray-200 rounded text-green-600 font-bold">Dashboard</li>
            <li className="p-2 hover:bg-gray-200 rounded">Live Site</li>
            <li className="p-2 hover:bg-gray-200 rounded">My Tax Files</li>
            <li className="p-2 hover:bg-gray-200 rounded text-red-600">Logout</li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Greetings!</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">User: New Comer</button>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold">File Your Tax:</h2>
          <Link to ="/paysubmit" className="bg-red-500 text-white px-4 py-2 rounded mt-2">Let’s Get Started</Link>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-6">
          <img src="../public/tax1.jpeg" alt="Tax" className="rounded-lg shadow-md" />
          <img src="../public/tax2.jpeg" alt="Tax" className="rounded-lg shadow-md" />
          <img src="../public/tax3.jpeg" alt="Corporate Tax" className="rounded-lg shadow-md" />
          <img src="../public/tax4.jpeg" alt="Corporate Tax" className="rounded-lg shadow-md" />
          <img src="../public/tax5.jpeg" alt="Corporate Tax" className="rounded-lg shadow-md" />
          <img src="../public/ltax.jpeg" alt="Corporate Tax" className="rounded-lg shadow-md" />

        </div>
      </div>
    </div>
  );
};

export default Dashboard;