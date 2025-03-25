import { Link } from "react-router-dom";

const TaxOptions = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-200 to-gray-500 px-6">
      
      {/* Tax Options Container */}
      <div className="flex flex-wrap justify-center gap-12 bg-white p-10 shadow-2xl rounded-xl border border-gray-300 z-10">
        
        {/* Employee Tax */}
        <Link to="/rules">
          <div className="flex flex-col items-center bg-gradient-to-b from-gray-100 to-gray-300 p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer">
            <img src="/img23.jpg" alt="Employee Tax" className="w-24 h-24 mb-3 rounded-full border border-gray-400" />
            <h2 className="text-2xl font-semibold text-gray-800">Employee Tax</h2>
          </div>
        </Link>

        {/* Business Tax */}
        <Link to="/rules">
          <div className="flex flex-col items-center bg-gradient-to-b from-gray-100 to-gray-300 p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer">
            <img src="/img24.jpg" alt="Business Tax" className="w-24 h-24 mb-3 rounded-full border border-gray-400" />
            <h2 className="text-2xl font-semibold text-gray-800">Business Tax</h2>
          </div>
        </Link>
      </div>

      {/* Decorative Bottom Element */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="w-full h-20 bg-gray-600 rounded-t-xl"></div>
      </div>
    </div>
  );
};

export default TaxOptions;
