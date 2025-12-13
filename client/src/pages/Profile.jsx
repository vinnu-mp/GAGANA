import { useEffect, useState } from "react";

export default function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [quizCount, setQuizCount] = useState(0);
  const [aiChats, setAiChats] = useState(0);

  useEffect(() => {
    setName(localStorage.getItem("name") || "Space Explorer");
    setEmail(localStorage.getItem("email") || "unknown@space.com");
    setQuizCount(Number(localStorage.getItem("quizCount")) || 0);
    setAiChats(Number(localStorage.getItem("aiChats")) || 0);
  }, []);

  const getBadge = () => {
    if (quizCount >= 10) return "🌌 Cosmic Commander";
    if (quizCount >= 6) return "🚀 Galaxy Navigator";
    if (quizCount >= 3) return "🛰️ Orbit Explorer";
    return "🌑 Lunar Cadet";
  };

  return (
    <div className="min-h-screen bg-[#A7F3D0] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl p-10">

        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
          Astronaut Profile
        </h1>

        {/* NAME + EMAIL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

          <InfoCard
            label="Astronaut Name"
            value={name}
            bg="bg-[#38BDF8]"
          />

          <InfoCard
            label="Communication Channel"
            value={email}
            bg="bg-[#A78BFA]"
          />

        </div>

        {/* STATS + BADGE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <StatCard
            title="Mission Launches"
            value={quizCount}
            subtitle="Quizzes Attempted"
            bg="bg-[#34D399]"
          />

          <StatCard
            title="AI Transmissions"
            value={aiChats}
            subtitle="AI Conversations"
            bg="bg-[#60A5FA]"
          />

          <div className="rounded-2xl p-6 text-center bg-[#F472B6] text-white">
            <p className="text-sm opacity-90 mb-1">Cosmic Rank</p>
            <p className="text-2xl font-bold">
              {getBadge()}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

/* ---------- Components ---------- */

function InfoCard({ label, value, bg }) {
  return (
    <div className={`rounded-2xl p-6 text-center text-white ${bg}`}>
      <p className="text-sm opacity-90 mb-1">{label}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}

function StatCard({ title, value, subtitle, bg }) {
  return (
    <div className={`rounded-2xl p-6 text-center text-white ${bg}`}>
      <p className="text-sm opacity-90">{title}</p>
      <p className="text-3xl font-extrabold my-2">{value}</p>
      <p className="text-xs opacity-90">{subtitle}</p>
    </div>
  );
}
