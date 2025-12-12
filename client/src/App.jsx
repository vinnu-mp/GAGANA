import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import News from "./pages/News";

const App = () => {
  return (
    <div className="main">
      <div className="bg-img">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          {/* Add these when ready:
        <Route path="/facts" element={<Facts />} />
        <Route path="/solar" element={<Solar />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/profile" element={<Profile />} />
        */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
