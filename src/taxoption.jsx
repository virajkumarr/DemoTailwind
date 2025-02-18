const TaxOptions = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        {/* Tax Options Container */}
        <div className="flex justify-center space-x-16 bg-white py-10 w-full">
          {/* Employee Tax */}
          <div className="flex flex-col items-center">
            <img
              src="https://img.icons8.com/ios/100/user--v1.png"
              alt="Employee Tax"
              className="w-24 h-24"
            />
            <h2 className="text-2xl font-semibold mt-2">Employee Tax</h2>
          </div>
  
          {/* Business Tax */}
          <div className="flex flex-col items-center">
            <img
              src="https://img.icons8.com/ios/100/shop.png"
              alt="Business Tax"
              className="w-24 h-24"
            />
            <h2 className="text-2xl font-semibold mt-2">Business Tax</h2>
          </div>
        </div>
  
        {/* Bottom Wave Background */}
        <div className="absolute bottom-0 w-full">
          <img
            src="https://www.transparenttextures.com/patterns/blue-wave.png"
            alt="Wave Design"
            className="w-full"
          />
        </div>
      </div>
    );
  };
  
  export default TaxOptions;
  