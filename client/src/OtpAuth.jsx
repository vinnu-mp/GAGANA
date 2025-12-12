import { useState } from "react";
import axios from "axios";

export default function OtpAuth() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [otp, setOtp] = useState("");

  const sendOTP = async () => {
    await axios.post("http://localhost:5000/send-otp", { email });
    setSent(true);
  };

  const verifyOTP = async () => {
    const res = await axios.post("http://localhost:5000/verify-otp", { otp });
    if (res.data.success) alert("OTP Verified!");
    else alert("Wrong OTP");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-[9999]">
      {!sent ? (
        <div className="p-6 bg-gray-700 rounded-xl flex gap-3 items-center">
          <input
            type="email"
            placeholder="Enter email"
            className="p-2 rounded text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="bg-blue-600 px-4 py-2 rounded" onClick={sendOTP}>
            Send OTP
          </button>
        </div>
      ) : (
        <div className="p-6 bg-gray-700 rounded-xl flex gap-3 items-center">
          <input
            type="text"
            placeholder="Enter OTP"
            className="p-2 rounded text-black"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button className="bg-green-600 px-4 py-2 rounded" onClick={verifyOTP}>
            Verify
          </button>
        </div>
      )}
    </div>
  );
}
