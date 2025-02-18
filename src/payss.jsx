import { Link } from "react-router-dom";

const PaymentSuccess = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[#eef3ea]">
        {/* Success Icon */}
        <div className="text-center p-8 rounded-lg shadow-lg">
          <div className="bg-green-300 p-6 rounded-full flex items-center justify-center">
            <svg
              className="w-24 h-24 text-green-700"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9 16.2l-4.2-4.2L3 13l6 6 12-12-1.8-1.8L9 16.2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {/* Success Message */}
          <h2 className="text-3xl font-bold text-green-700 mt-4">
            Payment Successful
          </h2>
        </div>
  
        {/* Close Button at the Bottom */}
        <div className="absolute bottom-10">
          <Link to ="/home" className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold">
            Close
          </Link>
        </div>
      </div>
    );
  };
  
  export default PaymentSuccess;
  