import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import LoginPage from "./loginPage";
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



function App() {
    return (
      <Router>
        <Navbar />
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<LoginPage />} /> 
          <Route path = "about" element={<About/>}/>
          <Route path = "contact" element={<ContactUs/>}/> 
          <Route path = "newuser" element={<SignUpPage />}/> 
          <Route path = "admin" element={<AdminDashboard />}/> 
          <Route path = "userprofile" element={<UserProfile/>}/> 
          <Route path = "newcomer" element={<Dashboard/>}/> 
          <Route path = "newlogin" element={<Dashboard/>}/> 
          <Route path = "paysubmit" element={<TaxPaymentForm/>}/> 
          <Route path = "Payss" element={<PaymentSuccess/>}/> 
          <Route path = "home" element={<Home/>}/> 
          <Route path = "taxoption" element={<TaxOptions/>}/> 
        
          <Route path = "admin" element={<AdminDashboard/>}/> 
          <Route path = "admintaxfile" element={<Admintaxfile/>}/> 
          <Route path = "adminuser" element={<AdminUsers/>}/>   
          <Route path = "rules" element={<TaxSlabTable/>}/>  
          <Route path = "itr" element={<BestPracticesITR/>}/>  
          <Route path = "alluser" element={<AllUser/>}/> 
          



        </Routes>
        < Footer />
        
      </Router>
    );
  }
  export default App;