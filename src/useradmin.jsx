import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {  FaTachometerAlt, FaGlobe, FaSignOutAlt, FaSearch, FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";

function UserAdmin() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editForm, setEditForm] = useState({
    fullname: "",
    email: "",
    mobile: ""
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/getalluser");
      if (response.data.success) {
        setUsers(response.data.users);
      } else {
        setError("Failed to fetch users");
      }
    } catch (err) {
      console.error("Error fetching users:", err);
      setError("Error fetching users. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setEditForm({
      fullname: user.fullname,
      email: user.email,
      mobile: user.mobile
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3000/user/update/${selectedUser._id}`, editForm);
      if (response.data.success) {
        setSuccess("User updated successfully!");
        fetchUsers();
        setSelectedUser(null);
      } else {
        setError(response.data.message || "Failed to update user");
      }
    } catch (err) {
      console.error("Error updating user:", err);
      setError("Error updating user. Please try again later.");
    }
  };

  const handleDelete = async (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        const response = await axios.delete(`http://localhost:3000/user/delete/${userId}`);
        if (response.data.success) {
          setSuccess("User deleted successfully!");
          fetchUsers();
        } else {
          setError(response.data.message || "Failed to delete user");
        }
      } catch (err) {
        console.error("Error deleting user:", err);
        setError("Error deleting user. Please try again later.");
      }
    }
  };

  const filteredUsers = users.filter(user =>
    user.fullname.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.mobile.includes(searchQuery)
  );

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
          <Link to="/admin" className="flex items-center text-gray-700 hover:text-blue-500 p-2 hover:bg-gray-100 rounded-lg">
            <FaTachometerAlt className="mr-2" /> Dashboard
          </Link>
          <Link to="/home" className="flex items-center text-gray-700 hover:text-blue-500 p-2 hover:bg-gray-100 rounded-lg">
            <FaGlobe className="mr-2" /> Live Site
          </Link>

          <Link to="/home" className="flex items-center text-red-500 font-bold p-2 hover:bg-red-100 rounded-lg">
            <FaSignOutAlt className="mr-2" /> Logout
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">User Management</h1>

          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, email, or mobile..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
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

          {/* Users List */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Registered Users</h2>
              {loading ? (
                <p className="text-gray-500 text-center py-4">Loading users...</p>
              ) : filteredUsers.length === 0 ? (
                <p className="text-gray-500 text-center py-4">
                  {searchQuery ? "No users found matching your search." : "No users registered yet."}
                </p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="p-3 text-left border-b">Name</th>
                        <th className="p-3 text-left border-b">Email</th>
                        <th className="p-3 text-left border-b">Mobile</th>
                        <th className="p-3 text-left border-b">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredUsers.map((user) => (
                        <tr key={user._id} className="hover:bg-gray-50">
                          <td className="p-3 border-b">{user.fullname}</td>
                          <td className="p-3 border-b">{user.email}</td>
                          <td className="p-3 border-b">{user.mobile}</td>
                          <td className="p-3 border-b">
                            <div className="flex space-x-2">
                              <button
                                onClick={() => handleEdit(user)}
                                className="text-blue-500 hover:text-blue-700"
                              >
                                <FaEdit />
                              </button>
                              <button
                                onClick={() => handleDelete(user._id)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <FaTrash />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>

          {/* Edit User Modal */}
          {selectedUser && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-lg p-6 max-w-md w-full">
                <h2 className="text-xl font-semibold mb-4">Edit User</h2>
                <form onSubmit={handleEditSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      name="fullname"
                      value={editForm.fullname}
                      onChange={handleEditChange}
                      className="mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={editForm.email}
                      onChange={handleEditChange}
                      className="mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Mobile</label>
                    <input
                      type="text"
                      name="mobile"
                      value={editForm.mobile}
                      onChange={handleEditChange}
                      className="mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="flex justify-end space-x-2 mt-6">
                    <button
                      type="button"
                      onClick={() => setSelectedUser(null)}
                      className="px-4 py-2 text-gray-600 hover:text-gray-800"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default UserAdmin; 