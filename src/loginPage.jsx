import { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div className="mt-20 flex items-center justify-center min-h-screen bg-gray-300 p-6">
      <div className="flex flex-col bg-white shadow-2xl rounded-2xl overflow-hidden max-w-4xl w-full">
        {/* Tab Navigation */}
        <div className="flex justify-around bg-gray-300 p-4 rounded-t-2xl">
          <button
            onClick={() => setIsAdmin(false)}
            className={`p-3 w-1/2 text-lg font-semibold transition-all duration-300 ${
              !isAdmin ? "bg-blue-600 text-white rounded-md shadow-md" : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            User Login
          </button>
          <button
            onClick={() => setIsAdmin(true)}
            className={`p-3 w-1/2 text-lg font-semibold transition-all duration-300 ${
              isAdmin ? "bg-blue-600 text-white rounded-md shadow-md" : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            Admin Login
          </button>
        </div>

        <div className="flex">
          {/* Left Side - Image */}
          <div className="w-1/2 relative flex items-center justify-center p-6 bg-gray-100">
            <img
              src={isAdmin ? "/admin.jpg" : "/img1.jpeg"}
              alt="Login"
              className="w-100 mx-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side - Login Form */}
          <div className="w-1/2 p-8">
            <h2 className="text-3xl font-bold text-gray-800 text-center mt-4 mb-6">
              {isAdmin ? "Admin Login" : "User Login"}
            </h2>

            {/* Input Fields */}
            <div className="mt-6 space-y-5">
              {!isAdmin && (
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">🧑</span>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                  />
                </div>
              )}
              {!isAdmin && (
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">📞</span>
                  <input
                    type="text"
                    placeholder="Mobile Number"
                    className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                  />
                </div>
              )}
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-500">✉️</span>
                <input
                  type="text"
                  placeholder="Email or Phone Here"
                  className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                />
              </div>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-500">🔒</span>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                />
                <span className="absolute right-3 top-3 text-gray-500 cursor-pointer">👁️</span>
              </div>

              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-gray-600 text-sm">
                  Remember me
                </label>
              </div>

              <Link
                to={isAdmin ? "/admin" : "/newlogin"}
                className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-center block shadow-md transition-all duration-300"
              >
                {isAdmin ? "Admin Login Here" : "Login Here"}
              </Link>
            </div>

            {!isAdmin && (
              <div className="flex justify-between mt-4 text-sm text-gray-600">
                <Link to="/newuser" className="hover:underline text-blue-700 font-semibold">
                  New User? Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
