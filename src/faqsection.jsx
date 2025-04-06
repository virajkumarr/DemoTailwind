import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUserShield, FaTachometerAlt, FaGlobe, FaSignOutAlt, FaSearch, FaReply, FaTrash } from "react-icons/fa";
import axios from "axios";

function FAQSection() {
  const [questions, setQuestions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [replyText, setReplyText] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(true);
  const [contactSubmissions, setContactSubmissions] = useState([]);

  // Fetch questions and contact submissions on component mount
  useEffect(() => {
    fetchQuestions();
    fetchContactSubmissions();
  }, []);

  const fetchQuestions = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/faq/questions");
      if (response.data.success) {
        setQuestions(response.data.questions);
      } else {
        setError("Failed to fetch questions");
      }
    } catch (err) {
      console.error("Error fetching questions:", err);
      setError("Error fetching questions. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const fetchContactSubmissions = async () => {
    try {
      const response = await axios.get("http://localhost:3000/contact/submissions");
      if (response.data.success) {
        setContactSubmissions(response.data.submissions);
      } else {
        console.error("Failed to fetch contact submissions");
      }
    } catch (err) {
      console.error("Error fetching contact submissions:", err);
    }
  };

  const handleReply = async (questionId) => {
    if (!replyText.trim()) {
      setError("Please enter a reply");
      return;
    }

    try {
      const response = await axios.post(`http://localhost:3000/faq/reply/${questionId}`, {
        reply: replyText
      });

      if (response.data.success) {
        // Update local state with the new reply
        setQuestions(prevQuestions =>
          prevQuestions.map(q =>
            q.id === questionId
              ? { ...q, reply: replyText, repliedAt: new Date().toISOString() }
              : q
          )
        );
        
        setReplyText("");
        setSelectedQuestion(null);
        setSuccess("Reply sent successfully!");
      } else {
        setError(response.data.message || "Failed to send reply");
      }
    } catch (err) {
      console.error("Error sending reply:", err);
      setError("Error sending reply. Please try again later.");
    }
  };

  const handleDelete = async (questionId) => {
    try {
      const response = await axios.delete(`http://localhost:3000/faq/delete/${questionId}`);
      
      if (response.data.success) {
        setQuestions(prevQuestions => prevQuestions.filter(q => q.id !== questionId));
        setSuccess("Question deleted successfully!");
      } else {
        setError(response.data.message || "Failed to delete question");
      }
    } catch (err) {
      console.error("Error deleting question:", err);
      setError("Error deleting question. Please try again later.");
    }
  };

  const filteredQuestions = questions.filter(q =>
    q.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    q.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    q.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mt-30 flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-xl border-r p-6 flex flex-col items-center">
        <img src="./img2.jpeg" alt="Logo" className="w-28 mb-4 rounded-lg shadow-md" />
        <img src="../public/profile.jpeg" alt="Admin" className="w-16 h-16 rounded-full border-4 border-green-400 shadow-md mb-2" />
        <h2 className="text-lg font-semibold text-gray-800">Varney Butler</h2>
        <p className="text-sm text-gray-500 mb-6">System Administrator</p>

        {/* Navigation */}
        <nav className="w-full space-y-4">
          <Link to="/admin" className="flex items-center text-gray-700 hover:text-blue-500 p-2 hover:bg-gray-100 rounded-lg">
            <FaTachometerAlt className="mr-2" /> Dashboard
          </Link>
          <Link to="/home" className="flex items-center text-gray-700 hover:text-blue-500 p-2 hover:bg-gray-100 rounded-lg">
            <FaGlobe className="mr-2" /> Live Site
          </Link>
          <Link to="/faq-management" className="flex items-center text-green-600 font-bold p-2 hover:bg-green-100 rounded-lg">
            <FaUserShield className="mr-2" /> FAQ Management
          </Link>
          <Link to="/home" className="flex items-center text-red-500 font-bold p-2 hover:bg-red-100 rounded-lg">
            <FaSignOutAlt className="mr-2" /> Logout
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">FAQ & Contact Management</h1>

          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by email, subject, or message..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
              {success}
            </div>
          )}

          {/* Questions List */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Questions & Replies</h2>
              {loading ? (
                <p className="text-gray-500 text-center py-4">Loading questions...</p>
              ) : filteredQuestions.length === 0 ? (
                <p className="text-gray-500 text-center py-4">
                  {searchQuery ? "No questions found matching your search." : "No questions to display."}
                </p>
              ) : (
                <div className="space-y-4">
                  {filteredQuestions.map((question) => (
                    <div key={question.id} className="border rounded-lg p-4 hover:bg-gray-50">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold">{question.subject}</h3>
                          <p className="text-sm text-gray-600">{question.email}</p>
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => setSelectedQuestion(question.id)}
                            className="text-blue-500 hover:text-blue-700"
                          >
                            <FaReply />
                          </button>
                          <button
                            onClick={() => handleDelete(question.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-2">{question.message}</p>
                      {question.reply && (
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <p className="text-sm text-gray-600">Reply: {question.reply}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            Replied on: {new Date(question.repliedAt).toLocaleString()}
                          </p>
                        </div>
                      )}
                      {selectedQuestion === question.id && (
                        <div className="mt-3">
                          <textarea
                            value={replyText}
                            onChange={(e) => setReplyText(e.target.value)}
                            placeholder="Type your reply..."
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            rows="3"
                          />
                          <div className="mt-2 flex justify-end space-x-2">
                            <button
                              onClick={() => setSelectedQuestion(null)}
                              className="px-3 py-1 text-gray-600 hover:text-gray-800"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={() => handleReply(question.id)}
                              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                              Send Reply
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Contact Form Submissions */}
          <div className="mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Contact Form Submissions</h2>
              {contactSubmissions.length === 0 ? (
                <p className="text-gray-500 text-center py-4">No contact submissions yet.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="p-3 text-left border-b">Name</th>
                        <th className="p-3 text-left border-b">Email</th>
                        <th className="p-3 text-left border-b">Subject</th>
                        <th className="p-3 text-left border-b">Message</th>
                        <th className="p-3 text-left border-b">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contactSubmissions.map((submission) => (
                        <tr key={submission.id} className="hover:bg-gray-50">
                          <td className="p-3 border-b">{submission.firstName} {submission.lastName}</td>
                          <td className="p-3 border-b">{submission.email}</td>
                          <td className="p-3 border-b">{submission.subject}</td>
                          <td className="p-3 border-b">{submission.message}</td>
                          <td className="p-3 border-b">{new Date(submission.date).toLocaleDateString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default FAQSection;
