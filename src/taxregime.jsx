const TaxSlabTable = () => {
  const taxData = [
    { income: "Up to ₹10 lakh", rate: "Nil", newIncome: "Up to ₹10   lakh", newRate: "Nil" },
    { income: "₹10 to 15 lakh", rate: "3%", newIncome: "₹0 - 20 lakh", newRate: "3%" },
    { income: "₹15 to 20 lakh", rate: "5%", newIncome: "₹20 -40 lakh", newRate: "5%" },
    { income: "₹20 to 25 lakh", rate: "7%", newIncome: "₹40 - 60 lakh", newRate: "7%" },
    { income: "₹25 to 30 lakh", rate: "9%", newIncome: "₹60 - 80 lakh", newRate: "9%" },
    { income: "Above ₹30 lakh", rate: "10%", newIncome: "₹up to 1 crore ", newRate: "10%" },
    { income: "Above ₹40 lakh", rate: "12%", newIncome: "1 crore - ∞", newRate: "12%" }
  ];

  return (
    <div className="mt-30 p-6 max-w-4xl mx-auto bg-gray-100 shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">New Tax Regime</h2>
      <table className="w-full border-collapse text-left rounded-lg overflow-hidden shadow-md">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="border border-gray-300 p-3">Employe Tax</th>
            <th className="border border-gray-300 p-3">Rate of Tax</th>
            <th className="border border-gray-300 p-3">Bussiness Tax</th>
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