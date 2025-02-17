const UserProfile = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white p-6 shadow-md">
        <div className="flex items-center space-x-3">
          <img
            src="../public/profile.jpeg"
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h2 className="font-bold">Varney Butler</h2>
            <p className="text-sm text-gray-600">System Administrator</p>
          </div>
        </div>
        <nav className="mt-6">
          <ul>
            <li className="p-2 hover:bg-gray-200 rounded">Dashboard</li>
            <li className="p-2 hover:bg-gray-200 rounded">Live Site</li>
            <li className="p-2 hover:bg-gray-200 rounded">Admin TaxFile</li>
            <li className="p-2 hover:bg-gray-200 rounded">Users</li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="bg-white p-6 shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
          <form>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border p-2 rounded w-full"
                value="Varney"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border p-2 rounded w-full"
                value="Butler"
              />
              <input
                type="text"
                placeholder="City"
                className="border p-2 rounded w-full"
                value="Rajkot"
              />
              <input
                type="text"
                placeholder="Country"
                className="border p-2 rounded w-full"
                value="India"
              />
            </div>
            <textarea
              className="border p-2 w-full rounded mt-4"
              placeholder="Detail Information About You"
            ></textarea>
            <button className="bg-red-500 text-white px-4 py-2 rounded mt-4">
              Update Profile
            </button>
          </form>
        </div>

        {/* Change Password */}
        <div className="bg-white p-6 shadow rounded-lg mt-6">
          <h2 className="text-xl font-semibold mb-4">Change Password</h2>
          <form>
            <input
              type="password"
              placeholder="Current Password"
              className="border p-2 rounded w-full mb-2"
            />
            <input
              type="password"
              placeholder="New Password"
              className="border p-2 rounded w-full mb-2"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="border p-2 rounded w-full mb-2"
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded">
              Update Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
