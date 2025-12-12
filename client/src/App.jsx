import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import News from "./pages/News";
import QuizPage from "./pages/QuizPage";
import FactsPage from "./pages/FactsPage";

import WarpBackground from "./components/WarpBackground";
import AiPage from "./pages/AiPage";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="main">
      <div className="bg-img"></div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/facts" element={<FactsPage />} />
        <Route path="/ai" element={<AiPage />} />
      </Routes>
    </div>
  );
};

export default App;
