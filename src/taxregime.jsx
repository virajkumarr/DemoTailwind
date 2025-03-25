const TaxSlabTable = () => {
  const taxData = [
    { income: "Up to ₹3 lakh", rate: "Nil", newIncome: "Up to ₹4 lakh", newRate: "Nil" },
    { income: "₹3 to 7 lakh", rate: "3%", newIncome: "₹4-8 lakh", newRate: "3%" },
    { income: "₹7 to 10 lakh", rate: "5%", newIncome: "₹8-12 lakh", newRate: "5%" },
    { income: "₹10 to 12 lakh", rate: "7%", newIncome: "₹12-16 lakh", newRate: "7%" },
    { income: "₹12 to 15 lakh", rate: "9%", newIncome: "₹16-20 lakh", newRate: "9%" },
    { income: "Above ₹15 lakh", rate: "10%", newIncome: "₹20-24 lakh", newRate: "10%" },
    { income: "Above ₹24 lakh", rate: "15%", newIncome: "Above ₹24 lakh", newRate: "15%" }
  ];

  return (
    <div className="mt-10 p-6 max-w-4xl mx-auto bg-gray-100 shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">New Tax Regime</h2>
      <table className="w-full border-collapse text-left rounded-lg overflow-hidden shadow-md">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="border border-gray-300 p-3">Existing Tax Slabs</th>
            <th className="border border-gray-300 p-3">Rate of Tax</th>
            <th className="border border-gray-300 p-3">Proposed Tax Slabs (Budget FY26)</th>
            <th className="border border-gray-300 p-3">Rate of Tax</th>
          </tr>
        </thead>
        <tbody>
          {taxData.map((row, index) => (
            <tr key={index} className={`border border-gray-300 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-200'}`}> 
              <td className="border border-gray-300 p-3 text-gray-800">{row.income}</td>
              <td className="border border-gray-300 p-3 font-semibold text-gray-700">{row.rate}</td>
              <td className="border border-gray-300 p-3 text-gray-800">{row.newIncome}</td>
              <td className="border border-gray-300 p-3 font-semibold text-gray-700">{row.newRate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-4 text-sm italic text-gray-700 text-center">*Total Annual Income after excluding standard deduction of ₹75,000</p>
    </div>
  );
};

export default TaxSlabTable;