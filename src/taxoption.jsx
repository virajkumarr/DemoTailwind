const TaxOptions = () => {
    return (
      <div
        className=" mt-30 flex flex-col items-center justify-center min-h-screen bg-cover bg-center px-6"
        style={{
          backgroundImage: "url('../public/taxbg.jpg')",
        }}
      >
        {/* Tax Options Container */}
        <div className="flex flex-wrap justify-center gap-12 bg-white p-10 shadow-xl rounded-lg border border-gray-200">
          {/* Employee Tax */}
          <div className="flex flex-col items-center bg-gradient-to-b from-blue-100 to-blue-300 p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer">
            <img
              src="../public/emptax.jpg"  
              alt="Employee Tax"
              className="w-24 h-24 mb-3"
            />
            <h2 className="text-2xl font-semibold text-gray-800">Employee Tax</h2>
          </div>
  
          {/* Business Tax */}
          <div className="flex flex-col items-center bg-gradient-to-b from-yellow-100 to-yellow-300 p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer">
            <img
              src="../public/busstax.jpg"
              alt="Business Tax"
              className="w-24 h-24 mb-3"
            />
            <h2 className="text-2xl font-semibold text-gray-800">Business Tax</h2>
          </div>
        </div>
  
        {/* Bottom Wave Background */}
        <div className="absolute bottom-0 w-full">
          <img
            src="https://www.transparenttextures.com/patterns/blue-wave.png"
            alt=""
            className="w-full"
          />
        </div>
      </div>
    );
  };
  
  export default TaxOptions;
  