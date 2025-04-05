import  { useState } from "react";

const UserField = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    income: "",
    deductions: "",
    taxPaid: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="mt-20 min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-2xl">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">Tax Management System</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-gray-700 font-medium">Name:</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-400"
              required
            />
          </label>
          <label className="block">
            <span className="text-gray-700 font-medium">Email:</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-400"
              required
            />
          </label>
          <label className="block">
            <span className="text-gray-700 font-medium">Annual Income ($):</span>
            <input
              type="number"
              name="income"
              value={formData.income}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-400"
              required
            />
          </label>
          <label className="block">
            <span className="text-gray-700 font-medium">Deductions ($):</span>
            <input
              type="number"
              name="deductions"
              value={formData.deductions}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-400"
            />
          </label>
          <label className="block">
            <span className="text-gray-700 font-medium">Tax Paid ($):</span>
            <input
              type="number"
              name="taxPaid"
              value={formData.taxPaid}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-400"
            />
          </label>
          <button
            type="submit"
            className="w-full mt-4 p-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserField;
