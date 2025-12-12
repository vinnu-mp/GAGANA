import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import News from "./pages/News";
import WarpBackground from "./components/WarpBackground";
import AiPage from "./pages/AiPage";

const App = () => {
  return (
    <div className="main">
      <div className="bg-img">
        <WarpBackground />
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/ai" element={<AiPage />} />
        {/* Add these when ready:
        <Route path="/facts" element={<Facts />} />
        <Route path="/solar" element={<Solar />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/profile" element={<Profile />} />
        */}
      </Routes>
    </div>
  );
};

export default App;
