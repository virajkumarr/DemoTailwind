import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Define admin credentials
    const adminCredentials = [
      { email: "anshuadmin@gmail.com", password: "admin@123" },
      { email: "buttler@gmail.com", password: "buttler@" },
      { email: "chisa@gmail.com", password: "chisa@" }
    ];

    // Check if credentials match any admin account
    const isValidAdmin = adminCredentials.some(
      (admin) => admin.email === email && admin.password === password
    );

    if (isValidAdmin) {
      localStorage.setItem('admin', JSON.stringify({ email }));
      navigate('/admin');
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="mt-20 flex items-center justify-center min-h-screen bg-gray-300 p-6">
      <div className="flex flex-col bg-white shadow-2xl rounded-2xl overflow-hidden max-w-4xl w-full">
        <div className="flex">
          {/* Left Side - Image */}
          <div className="w-1/2 relative flex items-center justify-center p-6 bg-gray-100">
            <img
              src="/admin.jpg"
              alt="Admin Login"
              className="w-100 mx-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side - Login Form */}
          <div className="w-1/2 p-8">
            <h2 className="text-3xl font-bold text-gray-800 text-center mt-4 mb-6">
              Admin Login
            </h2>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="mt-6 space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full p-3 bg-red-600 text-white rounded-md hover:bg-red-700 text-center block shadow-md transition-all duration-300"
              >
                Login
              </button>
            </form>

            <div className="mt-4 text-center">
              <a href="/login" className="text-blue-600 hover:underline">
                Back to User Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLoginPage;
