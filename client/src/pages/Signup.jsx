import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SpaceBackground from "../components/SpaceBackground";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitSignup = () => {
    localStorage.setItem("signupData", JSON.stringify(form));
    navigate("/verify-otp");
  };

  return (
<<<<<<< HEAD
    <div className="bgimg h-screen w-full flex items-center justify-center relative text-white">
=======
    <div className="h-screen w-full bgimg flex items-center justify-center relative text-white">
>>>>>>> 1f207d1b6dcee03e6384cbf6e487abc92249d6ec
      {/* 🌌 Background Image */}

      <div className="absolute inset-0 -z-10 bg-[url('/space-bg.jpg')] bg-cover bg-center"></div>

      {/* Optional animated effects */}
      <SpaceBackground />

      {/* Glass Card */}
      <div className="auth-card relative z-10 p-8 w-96 rounded-2xl backdrop-blur-md bg-white/10 shadow-[0_0_25px_rgba(0,0,0,0.4)]">
        <h2 className="text-3xl mb-6 text-center font-semibold tracking-wide">
          Create Account
        </h2>

        <input
          className="auth-input"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          className="auth-input"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          className="auth-input"
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button className="auth-btn" onClick={submitSignup}>
          Continue
        </button>

        <p
          className="mt-4 text-center text-blue-300 cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Already have an account?
        </p>
      </div>
    </div>
  );
}
