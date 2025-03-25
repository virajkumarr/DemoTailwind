

const BestPracticesITR = () => {
  const practices = [
    {
      icon: "📊",
      title: "Maintaining Organised Financial Records",
    },
    {
      icon: "📄",
      title: "Regularly Update Income and Expenses",
    },
    {
      icon: "👍",
      title: "Seek Professional Advice",
    },
    {
      icon: "❓",
      title: "Avoid Common Mistakes",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500 p-10 text-white">
      <h2 className="text-4xl font-extrabold mb-10 drop-shadow-lg">Best Practices to File ITR</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {practices.map((practice, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white text-gray-800 p-8 shadow-2xl rounded-3xl w-72 transform transition-all hover:scale-105 hover:shadow-3xl"
          >
            <div className="text-6xl mb-6">{practice.icon}</div>
            <p className="text-center font-semibold text-lg">{practice.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestPracticesITR;