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


        </Routes>
        < Footer />
        
      </Router>
    );
  }
  export default App;