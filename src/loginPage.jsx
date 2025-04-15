import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // For toggling user/admin login
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:3000/user/login', formData);

      if (response.data.success) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
        navigate(isAdmin ? "/admin" : "/newlogin");
      } else {
        setError(response.data.message || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      if (err.response) {
        setError(err.response.data.message || "Login failed");
      } else if (err.request) {
        setError("No response from server. Please check if the server is running.");
      } else {
        setError("Error setting up the request. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-20 flex items-center justify-center min-h-screen bg-gray-300 p-6">
      <div className="flex flex-col bg-white shadow-2xl rounded-2xl overflow-hidden max-w-4xl w-full">
        <div className="flex">
          {/* Left Side - Image */}
          <div className="w-1/2 relative flex items-center justify-center p-6 bg-gray-100">
            <img
              src="/img1.jpeg"
              alt="Login"
              className="w-100 mx-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side - Login Form */}
          <div className="w-1/2 p-8">
            <h2 className="text-3xl font-bold text-gray-800 text-center mt-4 mb-6">
              {isAdmin ? "Admin Login" : "User Login"}
            </h2>

            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-500">✉️</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                  required
                  disabled={loading}
                />
              </div>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-500">🔒</span>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                  required
                  disabled={loading}
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center text-gray-600 text-sm">
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </label>

                {/* Admin Toggle */}
                <label className="flex items-center text-sm text-gray-700 font-medium">
                  <input
                    type="checkbox"
                    checked={isAdmin}
                    onChange={() => setIsAdmin(prev => !prev)}
                    className="mr-2"
                  />
                  Admin Login
                </label>
              </div>

              <button
                type="submit"
                className={`w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-center block shadow-md transition-all duration-300 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Logging in..." : isAdmin ? "Admin Login" : "Login"}
              </button>
            </form>

            <div className="flex justify-between mt-4 text-sm text-gray-600">
              <Link to="/newuser" className="hover:underline text-blue-700 font-semibold">
                New User? Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
