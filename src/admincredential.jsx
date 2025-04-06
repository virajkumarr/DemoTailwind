import { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch, FaTrash, FaEye, FaEyeSlash, FaTachometerAlt, FaGlobe,  FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";

function AdminCredential() {
  const [credentials, setCredentials] = useState([]);
  const [newCredential, setNewCredential] = useState({
    username: "",
    password: "",
    email: "",
    role: "admin"
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [showPasswords, setShowPasswords] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCredentials();
  }, []);

  const fetchCredentials = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/admin/credentials");
      if (response.data.success) {
        setCredentials(response.data.admins);
      } else {
        setError("Failed to fetch admin credentials");
      }
    } catch (err) {
      console.error("Error fetching admin credentials:", err);
      setError("Error fetching admin credentials. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCredential(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      // Basic validation
      if (!newCredential.username || !newCredential.password || !newCredential.email) {
        throw new Error("Username, password, and email are required");
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(newCredential.email)) {
        throw new Error("Please enter a valid email address");
      }

      // Password validation
      if (newCredential.password.length < 6) {
        throw new Error("Password must be at least 6 characters");
      }

      // Send data to backend
      const response = await axios.post("http://localhost:3000/admin/credentials/create", newCredential);

      if (response.data.success) {
        setSuccess("Admin credential created successfully!");
        setNewCredential({
          username: "",
          password: "",
          email: "",
          role: "admin"
        });
        fetchCredentials(); // Refresh the list
      } else {
        throw new Error(response.data.message || "Failed to create admin credential");
      }
    } catch (err) {
      setError(err.message || "An error occurred while creating admin credential");
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/admin/credentials/${id}`);
      
      if (response.data.success) {
        setCredentials(prevCredentials => prevCredentials.filter(cred => cred._id !== id));
        setSuccess("Admin credential removed successfully!");
      } else {
        setError(response.data.message || "Failed to remove admin credential");
      }
    } catch (err) {
      console.error("Error removing admin credential:", err);
      setError("Error removing admin credential. Please try again later.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPasswords(!showPasswords);
  };

  const filteredCredentials = credentials.filter(cred => 
    cred.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cred.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex mt-30">
        {/* Sidebar */}
        <div className="w-64 bg-white h-screen shadow-lg fixed">
          <div className="p-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Admin Panel</h2>
            <nav>
              <ul className="space-y-2">
                <li>
                  <a href="/admin" className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 p-2 rounded-lg hover:bg-gray-100">
                    <FaTachometerAlt className="text-gray-500" />
                    <span>Dashboard</span>
                  </a>
                </li>
                <li>
                  <a href="/" className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 p-2 rounded-lg hover:bg-gray-100">
                    <FaGlobe className="text-gray-500" />
                    <span>Live Site</span>
                  </a>
                </li>
                <li>
                </li>
                <li>
                  <a href="/admin/faq" className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 p-2 rounded-lg hover:bg-gray-100">
                    <FaQuestionCircle className="text-gray-500" />
                    <span>FAQ Management</span>
                  </a>
                </li>
                <li>
                  <a href="/logout" className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 p-2 rounded-lg hover:bg-gray-100">
                    <FaSignOutAlt className="text-gray-500" />
                    <span>Logout</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-64 flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Credentials</h1>

            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by email or username..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full p-3 pl-10 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
                {error}
              </div>
            )}

            {success && (
              <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
                {success}
              </div>
            )}

            {/* Add New Admin Credential Form */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Add New Admin Credential</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="username"
                    value={newCredential.username}
                    onChange={handleChange}
                    placeholder="Username"
                    className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={newCredential.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <input
                    type="password"
                    name="password"
                    value={newCredential.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                    required
                  />
                  <select
                    name="role"
                    value={newCredential.role}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                  >
                    <option value="admin">Admin</option>
                    <option value="superadmin">Super Admin</option>
                  </select>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-blue-500 py-3 rounded-lg text-white font-semibold hover:bg-blue-600 transition duration-300 mt-4 ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Creating..." : "Create Admin Credential"}
                </button>
              </form>
            </div>

            {/* Admin Credentials Table */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Existing Admin Credentials</h2>
                <button
                  onClick={togglePasswordVisibility}
                  className="flex items-center space-x-1 text-blue-500 hover:text-blue-600"
                >
                  {showPasswords ? <FaEyeSlash /> : <FaEye />}
                  <span>{showPasswords ? "Hide Passwords" : "Show Passwords"}</span>
                </button>
              </div>
              {loading ? (
                <div className="text-center py-4">Loading...</div>
              ) : filteredCredentials.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Password</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredCredentials.map((cred) => (
                        <tr key={cred._id}>
                          <td className="px-6 py-4 whitespace-nowrap">{cred.username}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{cred.email}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {showPasswords ? cred.password : "••••••••"}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              cred.role === "superadmin" ? "bg-purple-100 text-purple-800" : "bg-green-100 text-green-800"
                            }`}>
                              {cred.role}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <button
                              onClick={() => handleRemove(cred._id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <FaTrash />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-4 text-gray-500">
                  No admin credentials found
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminCredential;
