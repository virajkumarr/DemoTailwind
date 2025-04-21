import { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch, FaTrash } from "react-icons/fa";

const AllUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [currentUserEmail, setCurrentUserEmail] = useState("");
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setCurrentUserEmail(storedUser.email);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter(user => 
        user.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  }, [searchQuery, users]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/getalluser");
      if (response.data.success) {
        setUsers(response.data.users);
        setFilteredUsers(response.data.users);
      } else {
        setError("Failed to fetch users");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setError("Error fetching users. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDelete = async (userId, userEmail) => {
    try {
      const response = await axios.delete(`http://localhost:3000/user/delete/${userEmail}`);
      if (response.data.success) {
        // Remove the user from the list
        setUsers(users.filter(user => user.email !== userEmail));
        setFilteredUsers(filteredUsers.filter(user => user.email !== userEmail));
        setDeleteConfirmation(null);
      } else {
        setError(response.data.message || "Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      setError("Failed to delete user. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="mt-30 p-6 bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading users...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-20 p-6 bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="text-xl text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="mt-30 p-6 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">All Registered Users</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search by email..."
              value={searchQuery}
              onChange={handleSearch}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mobile
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr 
                  key={user._id} 
                  className={`hover:bg-gray-50 ${
                    user.email === currentUserEmail ? 'bg-blue-50' : ''
                  }`}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {user.fullname}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{user.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{user.mobile}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.email !== currentUserEmail && (
                      <button
                        onClick={() => setDeleteConfirmation(user._id)}
                        className="text-red-500 hover:text-red-700 transition-colors duration-200"
                        title="Delete User"
                      >
                        <FaTrash className="text-lg" />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
              {filteredUsers.length === 0 && (
                <tr>
                  <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                    No users found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Delete Confirmation Modal */}
        {deleteConfirmation && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Confirm Delete</h3>
              <p className="text-gray-600 mb-6">Are you sure you want to delete this user? This action cannot be undone.</p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setDeleteConfirmation(null)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    const userToDelete = users.find(user => user._id === deleteConfirmation);
                    if (userToDelete) {
                      handleDelete(userToDelete._id, userToDelete.email);
                    }
                  }}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-200"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllUser;
