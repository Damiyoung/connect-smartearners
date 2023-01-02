import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Login from "./Authentication/Login";

import NavBar from "./Components/NavBar";
import SignUp from "./Authentication/SignUp";
import ForgotPassword from "./Authentication/ForgotPassword";
// import LoginNavbar from "./AfterLogin/Components/LoginNavbar";
// import Dashboard from "./AfterLogin/Components/Dashboard";
// import ContactGain from "./AfterLogin/Pages/ContactGain";
// import LeadFunnel from "./AfterLogin/Pages/LeadFunnel";
// import Promote from "./AfterLogin/Pages/Promote";

function App() {
  return (
    <div className=" bg-gray-100">
      <Router>
        {/* <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contactgain" element={<ContactGain />} />
          <Route path="/leadfunnel" element={<LeadFunnel />} />
          <Route path="/promote" element={<Promote />} />
          <Route path="/log" element={<LoginNavbar />} />
        </Routes> */}

        <div className=" sticky top-0 z-[999]">
          <NavBar />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>

        <Footer />
        {/* </Router> */}
      </Router>
    </div>
  );
}

export default App;
