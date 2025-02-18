import { Link } from "react-router-dom";


const TaxPaymentForm = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-white shadow-lg p-5">
        <div className="flex items-center space-x-3">
          <img src="../public/img2.jpeg" alt="Liberty Tax" className="w-16" />
          <h1 className="text-xl font-bold text-red-600">LIBERTY TAX</h1>
        </div>
        <div className="mt-5 flex items-center space-x-3">
          <img src="../public/chisa.jpg" alt="User" className="w-10 h-10 rounded-full" />
          <span className="text-lg font-semibold">Welcome Chisha Kasamanda</span>
        </div>
        <nav className="mt-5 space-y-4">
          <button className="block w-full text-left font-semibold">📊 Dashboard</button>
          <button className="block w-full text-left font-semibold">📺 Live Site</button>
          <button className="block w-full text-left font-semibold">📂 My Tax Files</button>
          <button className="block w-full text-left text-red-600 font-semibold">⬅ Logout</button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-10">
        <div className="flex justify-between">
          <span className="text-xl font-bold">User: New Comer</span>
          <span className="text-blue-600">📞 +917600300778</span>
        </div>

        <div className="mt-5 space-y-5 bg-white p-5 rounded-lg shadow-md">
          <div>
            <label className="block text-gray-700">User Name</label>
            <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter Username Here" />
          </div>

          <div>
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full p-2 border rounded-md" placeholder="Enter Email Here" />
          </div>

          <div>
            <label className="block text-gray-700">Tax File ID</label>
            <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter Tax File ID Here" />
          </div>

          <div>
            <label className="block text-gray-700">Amount</label>
            <input type="number" className="w-full p-2 border rounded-md" placeholder="Enter Amount Here" />
          </div>

          <div className="flex items-center space-x-5">
            <div>
              <label className="block text-gray-700">Payment Mode</label>
              <p>Scan UPI code</p>
            </div>
            <img src="../public/qr.jpg" alt="QR Code" className="w-20 h-20" />
          </div>

          <div>
            <label className="block text-gray-700">Payment Date</label>
            <input type="date" className="w-full p-2 border rounded-md" />
          </div>

          <Link to ="/payss" className="w-full p-3 bg-red-500 text-white rounded-md hover:bg-red-600">
            Submit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TaxPaymentForm;