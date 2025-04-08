import  { useState } from "react";
import {
  FaUserCircle,
  FaEdit,
  FaTrash,
  FaSave,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

const UserProfile = () => {
  const [user, setUser] = useState({
    userId: "U123456", // never editable
    name: "anshu raj",
    email: "anshu@example.com",
    phone: "9876543217",
    password: "anshu@123",
    profilePic: "",
  });

  const [editing, setEditing] = useState(false);
  const [tempUser, setTempUser] = useState(user);
  const [deleted, setDeleted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleEdit = () => {
    setTempUser(user);
    setEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Prevent updates to userId
    if (name === "userId") return;
    setTempUser({ ...tempUser, [name]: value });
  };

  const handleSave = () => {
    // Keep userId unchanged
    setUser({ ...tempUser, userId: user.userId });
    setEditing(false);
  };

  const handleDelete = () => {
    setDeleted(true);
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setTempUser({ ...tempUser, profilePic: url });
    }
  };

  if (deleted) {
    return (
      <div className="h-screen flex items-center justify-center text-xl text-red-500 font-semibold">
        Profile Deleted
      </div>
    );
  }

  return (
    <div className="mt-10 min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white shadow-xl rounded-2xl p-6 space-y-6">
        {/* Profile Header */}
        <div className="flex flex-col items-center text-center">
          {tempUser.profilePic ? (
            <img
              src={tempUser.profilePic}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-2 border-blue-400"
            />
          ) : (
            <FaUserCircle className="text-6xl text-gray-400" />
          )}
          <label className="mt-2 text-sm text-blue-600 cursor-pointer">
            Change Photo
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePicChange}
              className="hidden"
            />
          </label>
          <h2 className="text-2xl font-bold mt-2">User Profile</h2>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          {/* User ID (never editable) */}
          <div>
            <label className="text-sm font-semibold">User ID</label>
            <input
              type="text"
              name="userId"
              value={user.userId}
              readOnly
              className="w-full border border-gray-300 p-2 rounded mt-1 bg-gray-100 text-gray-500"
            />
          </div>

          {/* Name */}
          <div>
            <label className="text-sm font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={tempUser.name}
              onChange={handleChange}
              readOnly={!editing}
              className={`w-full border ${
                editing ? "border-blue-400" : "border-gray-300"
              } p-2 rounded mt-1 focus:outline-none`}
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={tempUser.email}
              onChange={handleChange}
              readOnly={!editing}
              className={`w-full border ${
                editing ? "border-blue-400" : "border-gray-300"
              } p-2 rounded mt-1 focus:outline-none`}
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-semibold">Mobile</label>
            <input
              type="text"
              name="phone"
              value={tempUser.phone}
              onChange={handleChange}
              readOnly={!editing}
              className={`w-full border ${
                editing ? "border-blue-400" : "border-gray-300"
              } p-2 rounded mt-1 focus:outline-none`}
            />
          </div>

          {/* Password with Show/Hide toggle */}
          <div>
            <label className="text-sm font-semibold">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={tempUser.password}
                onChange={handleChange}
                readOnly={!editing}
                className={`w-full border ${
                  editing ? "border-blue-400" : "border-gray-300"
                } p-2 pr-10 rounded mt-1 focus:outline-none`}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          {editing ? (
            <button
              onClick={handleSave}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2"
            >
              <FaSave /> Save
            </button>
          ) : (
            <button
              onClick={handleEdit}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2"
            >
              <FaEdit /> Edit
            </button>
          )}
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded flex items-center gap-2"
          >
            <FaTrash /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
