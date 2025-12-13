import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function VerifyOtp() {
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("signupData"));
  const [otp, setOtp] = useState("");

  useEffect(() => {
    axios.post("http://localhost:5000/send-otp", { email: data.email });
  }, []);

  const verifyOTP = async () => {
    const res = await axios.post("http://localhost:5000/verify-otp", { otp });

    if (res.data.success) {
      localStorage.setItem("verified", "true");
      navigate("/");
    } else {
      alert("Wrong OTP");
    }
  };

  return (
<<<<<<< HEAD
    <div className="bgimg h-screen w-full flex items-center justify-center relative text-white">
=======
    <div className="h-screen w-full flex items-center justify-center bgimg relative text-white">
>>>>>>> 1f207d1b6dcee03e6384cbf6e487abc92249d6ec
      <div className="absolute inset-0 bg-[url('/nebula-bg.jpg')] bg-cover bg-center"></div>
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      <div className="auth-card relative z-10 p-8 w-80 rounded-2xl">
        <h2 className="text-2xl mb-6 text-center font-semibold tracking-wide">
          Verify OTP
        </h2>

        <input
          className="auth-input"
          placeholder="Enter OTP"
          onChange={(e) => setOtp(e.target.value)}
        />

        <button className="auth-btn" onClick={verifyOTP}>
          Verify
        </button>
      </div>
    </div>
  );
}
