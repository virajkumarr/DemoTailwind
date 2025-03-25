import { FaClock, FaUser, FaLock, FaHeart } from "react-icons/fa";

function WhyLibertyTax() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-12 rounded-2xl shadow-2xl border border-gray-300 max-w-5xl w-full text-center">
        {/* Title */}
        <h2 className="text-5xl font-extrabold text-gray-900 mb-8">
          WHY <span className="text-blue-600">LIBERTY TAX</span> ??
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Description */}
          <p className="text-gray-700 text-lg leading-relaxed font-medium text-left">
            Liberty Tax is recognized for its exceptional work in accounting, taxation, 
            and business advisory services for small and medium companies, family-owned 
            businesses, and not-for-profit clients.
          </p>

          {/* Right Side - Features */}
          <div className="space-y-6 text-left">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 text-white p-3 rounded-full shadow-md">
                <FaClock className="text-xl" />
              </div>
              <p className="text-gray-900 text-lg font-semibold">
                <strong>Fast:</strong> 5-10 minutes process for tax filing.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 text-white p-3 rounded-full shadow-md">
                <FaUser className="text-xl" />
              </div>
              <p className="text-gray-900 text-lg font-semibold">
                <strong>Simple:</strong> Take pictures & submit to accountants.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 text-white p-3 rounded-full shadow-md">
                <FaLock className="text-xl" />
              </div>
              <p className="text-gray-900 text-lg font-semibold">
                <strong>Secure:</strong> Safely transmitted to accountants for tax filing.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 text-white p-3 rounded-full shadow-md">
                <FaHeart className="text-xl" />
              </div>
              <p className="text-gray-900 text-lg font-semibold">
                <strong>Excellent Service:</strong> Online & offline customer support available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyLibertyTax;
