import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
import Home from "./home";
import LoginPage from "./loginPage";
import AdminLoginPage from "./adminLogin";
import Navbar from "./navbar";
import Footer from "./footer";
import About from "./about";
import ContactUs from "./contactus";
import SignUpPage from "./signup";
import AdminDashboard from "./admin";
import UserProfile from "./userprofile";
import Dashboard from "./newcomer";
import TaxPaymentForm from "./paymentform";
import PaymentSuccess from "./payss";
import TaxOptions from "./taxoption";
import Admintaxfile from "./admintaxfile";
import AdminUsers from "./useradmin";
import TaxSlabTable from "./taxregime";
import BestPracticesITR from "./itr";
import AllUser from "./alluser";
import SubmittedTax from "./submittedtax";
import UserField from "./userfield";
import AdminPanel from "./components/AdminPanel";
import AdminCredential from "./admincredential";
import FAQSection from "./faqsection";
import Usertaxfiled from "./usertaxfiled";
import Edituser from "./edituser";

// Protected Route Component for Users
const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

// Protected Route Component for Admins
const AdminProtectedRoute = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('admin'));
  if (!admin) {
    return <Navigate to="/admin-login" replace />;
  }
  return children;
};

// Add PropTypes validation
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired
};

AdminProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin-login" element={<AdminLoginPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/newuser" element={<SignUpPage />} />
        
        {/* Protected User Routes */}
        <Route path="/newlogin" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/userprofile" element={
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        } />
        <Route path="/paysubmit" element={
          <ProtectedRoute>
            <TaxPaymentForm />
          </ProtectedRoute>
        } />
        <Route path="/Payss" element={
          <ProtectedRoute>
            <PaymentSuccess />
          </ProtectedRoute>
        } />
        <Route path="/taxoption" element={
          <ProtectedRoute>
            <TaxOptions />
          </ProtectedRoute>
        } />
        <Route path="/usertaxfiled" element={
          <ProtectedRoute>
            <Usertaxfiled />
          </ProtectedRoute>
        } />
        <Route path="/editprofile" element={
          <ProtectedRoute>
            <Edituser />
          </ProtectedRoute>
        } />
        
        {/* Protected Admin Routes */}
        <Route path="/admin" element={
          <AdminProtectedRoute>
            <AdminDashboard />
          </AdminProtectedRoute>
        } />
        <Route path="/admintaxfile" element={
          <AdminProtectedRoute>
            <Admintaxfile />
          </AdminProtectedRoute>
        } />
        <Route path="/adminuser" element={
          <AdminProtectedRoute>
            <AdminUsers />
          </AdminProtectedRoute>
        } />
        <Route path="/rules" element={
          <AdminProtectedRoute>
            <TaxSlabTable />
          </AdminProtectedRoute>
        } />
        <Route path="/itr" element={
          <AdminProtectedRoute>
            <BestPracticesITR />
          </AdminProtectedRoute>
        } />
        <Route path="/alluser" element={
          <AdminProtectedRoute>
            <AllUser />
          </AdminProtectedRoute>
        } />
        <Route path="/subtax" element={
          <AdminProtectedRoute>
            <SubmittedTax />
          </AdminProtectedRoute>
        } />
        <Route path="/userfield" element={
          <AdminProtectedRoute>
            <UserField />
          </AdminProtectedRoute>
        } />
        <Route path="/admin-panel" element={
          <AdminProtectedRoute>
            <AdminPanel />
          </AdminProtectedRoute>
        } />
        <Route path="/admin-credentials" element={
          <AdminProtectedRoute>
            <AdminCredential />
          </AdminProtectedRoute>
        } />
        <Route path="/faq-management" element={
          <AdminProtectedRoute>
            <FAQSection />
          </AdminProtectedRoute>
        } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;