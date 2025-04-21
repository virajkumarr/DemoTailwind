import  { useState, useEffect } from "react";
import {
  FaUserCircle,
  FaEdit,
  FaTrash,
  FaSave,
  FaEye,
  FaEyeSlash,
  FaCamera,
} from "react-icons/fa";
import axios from "axios";

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    profilePic: "",
  });

  const [editing, setEditing] = useState(false);
  const [tempUser, setTempUser] = useState(user);
  const [deleted, setDeleted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
          const response = await axios.get("http://localhost:3000/getalluser");
          if (response.data.success) {
            const userData = response.data.users.find(u => u.email === storedUser.email);
            if (userData) {
              setUser({
                name: userData.fullname,
                email: userData.email,
                phone: userData.mobile,
                password: "********",
                profilePic: "",
              });
              setTempUser({
                name: userData.fullname,
                email: userData.email,
                phone: userData.mobile,
                password: "********",
                profilePic: "",
              });
            }
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleEdit = () => {
    setTempUser(user);
    setEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempUser({ ...tempUser, [name]: value });
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/user/update/${user.email}`, {
        fullname: tempUser.name,
        email: tempUser.email,
        mobile: tempUser.phone,
      });

      if (response.data.success) {
        setUser(tempUser);
        setEditing(false);
        localStorage.setItem('user', JSON.stringify({
          fullname: tempUser.name,
          email: tempUser.email,
          mobile: tempUser.phone,
        }));
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:3000/user/delete/${user.email}`);
      if (response.data.success) {
        localStorage.removeItem('user');
        setDeleted(true);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setTempUser({ ...tempUser, profilePic: url });
    }
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (deleted) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl text-red-500 mb-4">Profile Deleted</div>
          <p className="text-gray-600">Your profile has been successfully deleted.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-center">
            <div className="relative inline-block">
              {tempUser.profilePic ? (
                <img
                  src={tempUser.profilePic}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                />
              ) : (
                <FaUserCircle className="w-32 h-32 text-white" />
              )}
              <label className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-md cursor-pointer hover:bg-gray-100 transition">
                <FaCamera className="text-blue-500" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePicChange}
                  className="hidden"
                />
              </label>
            </div>
            <h2 className="text-2xl font-bold text-white mt-4">User Profile</h2>
          </div>

          {/* Form Fields */}
          <div className="p-8 space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">Full Name</label>
              <input
                type="text"
                name="name"
                value={tempUser.name}
                onChange={handleChange}
                readOnly={!editing}
                className={`w-full p-3 rounded-lg border ${
                  editing ? "border-blue-400 focus:ring-2 focus:ring-blue-400" : "border-gray-200"
                } focus:outline-none transition`}
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">Email Address</label>
              <input
                type="email"
                name="email"
                value={tempUser.email}
                onChange={handleChange}
                readOnly={!editing}
                className={`w-full p-3 rounded-lg border ${
                  editing ? "border-blue-400 focus:ring-2 focus:ring-blue-400" : "border-gray-200"
                } focus:outline-none transition`}
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">Mobile Number</label>
              <input
                type="text"
                name="phone"
                value={tempUser.phone}
                onChange={handleChange}
                readOnly={!editing}
                className={`w-full p-3 rounded-lg border ${
                  editing ? "border-blue-400 focus:ring-2 focus:ring-blue-400" : "border-gray-200"
                } focus:outline-none transition`}
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={tempUser.password}
                  onChange={handleChange}
                  readOnly={!editing}
                  className={`w-full p-3 rounded-lg border ${
                    editing ? "border-blue-400 focus:ring-2 focus:ring-blue-400" : "border-gray-200"
                  } focus:outline-none transition pr-10`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  title={showPassword ? "Hide Password" : "Show Password"}
                >
                  {showPassword ? <FaEyeSlash className="text-lg" /> : <FaEye className="text-lg" />}
                </button>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="px-8 py-6 bg-gray-50 flex justify-between">
            {editing ? (
              <button
                onClick={handleSave}
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300"
              >
                <FaSave /> Save Changes
              </button>
            ) : (
              <button
                onClick={handleEdit}
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300"
              >
                <FaEdit /> Edit Profile
              </button>
            )}
            <button
              onClick={handleDelete}
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300"
            >
              <FaTrash /> Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
