

const users = [
  { name: "anshu", email: "ansh@gmail.com", mobile: "1234567890", password: "Pass@123" },
  { name: "karan", email: "karan@gmail.com", mobile: "9876543210", password: "Jane#456" },
  { name: "sunil", email: "sunil@gmail.com", mobile: "7890123456", password: "Alex@789" },
  { name: "shivam", email: "shivam@gmail.com", mobile: "6543217890", password: "Rose!321" },
  { name: "buttler", email: "buttler@gmail.com", mobile: "4567890123", password: "Mike$567" },
  { name: "chisa", email: "schisa@gmail.com", mobile: "7418529630", password: "Sarah@741" },
  { name: "viraj", email: "viraj@gmail.com", mobile: "9632587410", password: "Dan@963" },
  { name: "nikunj", email: "nikunj@gmail.com", mobile: "8527419630", password: "Olivia@852" },
  { name: "priyanka", email: "priyanka@gmail.com", mobile: "9513574682", password: "Will@951" },
  { name: "siroza", email: "siroza@gmail.com", mobile: "7531592846", password: "Sophia@753" },
  { name: "rishi", email: "rishi@gmail.com", mobile: "3216549870", password: "David@321" },
  { name: "vivek", email: "vivek@gmail.com", mobile: "2583691470", password: "Emma@258" },
  { name: "khusbu", email: "khusbu@gmail.com", mobile: "1593574682", password: "James@159" },
  { name: "samay", email: "samay@gmail.com", mobile: "3571592846", password: "Isabella@357" },
  { name: "arjun", email: "arjun@gmail.com", mobile: "6549873210", password: "Ben@654" }
];

const AllUser = () => {
  return (
    <div className=" mt-20 p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-700">Registered Users</h1>
        <table className="min-w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-700 text-white">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Mobile</th>
              <th className="border border-gray-300 px-4 py-2">Password</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="odd:bg-gray-100 even:bg-gray-200 text-gray-700">
                <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                <td className="border border-gray-300 px-4 py-2">{user.mobile}</td>
                <td className="border border-gray-300 px-4 py-2">{user.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
