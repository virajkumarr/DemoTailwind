import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function SignUpPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullname: "",
        mobile: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        setLoading(true);

        // Validate passwords match
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/user/create', {
                fullname: formData.fullname,
                email: formData.email,
                password: formData.password,
                mobile: formData.mobile
            });

            if (response.data.success) {
                // Store user email in localStorage
                localStorage.setItem('userEmail', formData.email);
                setSuccess("Registration successful! Redirecting to login...");
                // Clear form
                setFormData({
                    fullname: "",
                    mobile: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                });
                // Redirect to login page after 2 seconds
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            } else {
                setError(response.data.message || "Registration failed");
            }
        } catch (err) {
            console.error('Registration error:', err);
            if (err.response) {
                setError(err.response.data.message || "Server error occurred");
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
      <div className="mt-20 flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="flex bg-white shadow-lg rounded-2xl overflow-hidden max-w-5xl w-full">
          
          {/* Left Side - Image */}
          <div className="w-1/3 flex flex-col items-center justify-center bg-gray-50 p-6">
            <img
              src="../public/img1.jpeg"
              alt="Liberty Tax"
              className="w-52 mb-4"
            />
            <h1 className="text-xl font-bold text-gray-800">LIBERTY TAX</h1>
          </div>
  
          {/* Right Side - Sign Up Form */}
          <div className="w-2/3 p-8">
            {/* New User */}
            <div className="text-gray-500 text-sm flex items-center space-x-2">
              <span className="text-gray-400">●</span>
              <span>New User</span>
            </div>
  
            <h2 className="text-3xl font-semibold text-gray-800 text-center mt-2">
              Sign Up
            </h2>

            {error && (
                <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
                    {error}
                </div>
            )}
            {success && (
                <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
                    {success}
                </div>
            )}
  
            {/* Input Fields */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-500">👤</span>
                <input
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  disabled={loading}
                />
              </div>
  
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-500">📞</span>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  disabled={loading}
                />
              </div>
  
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-500">✉️</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  disabled={loading}
                />
              </div>
  
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-500">🔒</span>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  disabled={loading}
                />
                <button 
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-2 text-gray-500 cursor-pointer focus:outline-none"
                  disabled={loading}
                >
                  {showPassword ? <FaEyeSlash className="text-gray-600" /> : <FaEye className="text-gray-600" />}
                </button>
              </div>
  
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-500">🔒</span>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-Write Password"
                  className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  disabled={loading}
                />
                <button 
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute right-3 top-2 text-gray-500 cursor-pointer focus:outline-none"
                  disabled={loading}
                >
                  {showConfirmPassword ? <FaEyeSlash className="text-gray-600" /> : <FaEye className="text-gray-600" />}
                </button>
              </div>
  
              <div className="flex items-center">
                <input type="checkbox" id="agreement" className="mr-2" required disabled={loading} />
                <label htmlFor="agreement" className="text-gray-600 text-sm">
                  I have read the agreement
                </label>
              </div>
  
              <button 
                type="submit"
                className={`w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loading}
              >
                {loading ? 'Registering...' : 'Register Here'}
              </button>
            </form>
  
            {/* Links */}
            <div className="text-right mt-4 text-sm text-gray-500">
              <Link to="/login" className="hover:underline">
                Already Have an Account?
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default SignUpPage;
