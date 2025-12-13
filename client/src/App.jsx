import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import News from "./pages/News";
import QuizPage from "./pages/QuizPage";
import FactsPage from "./pages/FactsPage";
import WarpBackground from "./components/WarpBackground";
import AiPage from "./pages/AiPage";
import Profile from "./pages/Profile"; // ✅ ADDED
import OtpAuth from "./OtpAuth";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import VerifyOtp from "./pages/VerifyOtp";

const Layout = ({ children }) => {
  return (
    <div className="main">
      <div className="bg-img">
        <WarpBackground />
      </div>
      <Navbar />
      {children}
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      {/* Auth pages – NO layout */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/verify-otp" element={<VerifyOtp />} />

      {/* Pages with navbar + background */}
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/news" element={<Layout><News /></Layout>} />
      <Route path="/quiz" element={<Layout><QuizPage /></Layout>} />
      <Route path="/facts" element={<Layout><FactsPage /></Layout>} />
      <Route path="/ai" element={<Layout><AiPage /></Layout>} />

      {/* ✅ PROFILE PAGE (ADDED) */}
      <Route path="/profile" element={<Layout><Profile /></Layout>} />

      {/* OTP PAGE – NO NAVBAR, NO OVERLAY */}
      <Route path="/otp" element={<OtpAuth />} />
    </Routes>
  );
};

export default App;
