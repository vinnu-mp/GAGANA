import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitLogin = () => {
    const saved = JSON.parse(localStorage.getItem("signupData"));

    if (!saved) {
      setError("No account found. Please sign up first.");
      return;
    }

    if (form.email !== saved.email) {
      setError("Email is incorrect.");
      return;
    }

    if (form.password !== saved.password) {
      setError("Password is incorrect.");
      return;
    }

    // SUCCESS
    setError("");
    navigate("/"); // go to home page
  };

  return (
    <div className="h-screen bg-black w-full flex items-center justify-center relative text-white">

      <div className="auth-card relative z-10 p-8 w-96 rounded-2xl">
        <h2 className="text-3xl mb-6 text-center font-semibold tracking-wide">
          Login
        </h2>

        <input className="auth-input" name="email" placeholder="Email" onChange={handleChange} />
        <input className="auth-input" name="password" type="password" placeholder="Password" onChange={handleChange} />

        {error && (
          <p className="text-red-400 text-center py-2">{error}</p>
        )}

        <button className="auth-btn" onClick={submitLogin}>Continue</button>

        <p className="mt-4 text-center text-blue-300 cursor-pointer" onClick={() => navigate("/signup")}>
          Create new account
        </p>
      </div>

    </div>
  );
}
