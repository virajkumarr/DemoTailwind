import { Link } from "react-router-dom";

function LoginPage() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="flex bg-white shadow-lg rounded-2xl overflow-hidden max-w-4xl w-full">
          {/* Left Side - Image with Text */}
          <div className="w-1/2 relative flex items-center justify-center p-6 bg-gray-50">
            <img
              src="../public/img1.jpeg"
              alt="Liberty Tax"
              className="w-100 mx-auto"
            
            />
            {/* Overlayed Text */}
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-75 p-2 rounded-lg">
              <h1 className="text-xl font-bold text-gray-800"></h1>
            </div>
          </div>
  
          {/* Right Side - Login Form */}
          <div className="w-1/2 p-8">
          
            <h2 className="text-3xl font-semibold text-gray-800 text-center mt-4">
              Login
            </h2>
  
            {/* Input Fields */}
            <div className="mt-6 space-y-4">
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-500">✉️</span>
                <input
                  type="text"
                  placeholder="Email or Phone Here"
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
  
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-gray-600 text-sm">
                  Remember me
                </label>
              </div>
  
              <Link to= "/newlogin"className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Login Here
              </Link>
            </div>
  
          
            <div className="flex justify-between mt-4 text-sm text-gray-500">
              <Link to="/newuser" className="hover:underline">
                New User?
              </Link>

            
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default LoginPage;
  