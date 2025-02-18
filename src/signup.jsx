
import { Link } from "react-router-dom";

function SignUpPage() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="flex bg-white shadow-lg rounded-2xl overflow-hidden max-w-5xl w-full">
          
          {/* Left Side - Image */}
          <div className="w-1/3 flex flex-col items-center justify-center bg-gray-50 p-6">
            <img
              src="../public/img1.jpeg" // Replace with actual image URL
              alt="Liberty Tax"
              className="w-52 mb-4"
            />
            <h1 className="text-xl font-bold text-gray-800">LIBERTY TAX</h1>
          </div>
  
          {/* Right Side - Sign Up Form */}
          <div className="w-2/3 p-8">
            {/* New User */}
            <div className="text-gray-500 text-sm flex items-center space-x-2">
              <span className="text-gray-400">●</span>
              <span>New User</span>
            </div>
  
            <h2 className="text-3xl font-semibold text-gray-800 text-center mt-2">
              Sign Up
            </h2>
  
            {/* Input Fields */}
            <div className="mt-6 space-y-4">
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-500">👤</span>
                <input
                  type="text"
                  placeholder="Select Tax Type"
                  className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
  
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-500">👤</span>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
  
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-500">📞</span>
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
  
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-500">✉️</span>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
  
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-500">🔒</span>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="absolute right-3 top-2 text-gray-500 cursor-pointer">👁️</span>
              </div>
  
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-500">🔒</span>
                <input
                  type="password"
                  placeholder="Re-Write Password"
                  className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="absolute right-3 top-2 text-gray-500 cursor-pointer">👁️</span>
              </div>
  
              <div className="flex items-center">
                <input type="checkbox" id="agreement" className="mr-2" />
                <label htmlFor="agreement" className="text-gray-600 text-sm">
                  I have read the agreement
                </label>
              </div>
  
              <Link to ="/newcomer"className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Register Here
              </Link>
            </div>
  
            {/* Links */}
            <div className="text-right mt-4 text-sm text-gray-500">
              <Link to="/login" className="hover:underline">
                Already Have an Account?
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default SignUpPage;
  