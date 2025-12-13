import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="pt-24 px-8 md:px-20 text-white min-h-screen">
      {/* TITLE + SUBTITLE */}
      <div className="mb-12">
        <div className="boxlogo flex">
          <div className="boxx flex flex-col">
            <h1 className="text-5xl font-extrabold tracking-wide inline">
              GAGANA{" "}
            </h1>
            <p className="text-xl opacity-90 mt-2">
              Discover Space. Verify Reality.
            </p>
          </div>
        </div>
      </div>

      {/* GRID OF 6 CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <Link to="/facts" className="block">
          <div className="glass-card cursor-pointer h-35">
            <h2 className="card-title">Verified Space Facts</h2>
            <p className="card-info">
              Reliable information sourced from NASA, ISRO, and scientific
              databases.
            </p>
          </div>
        </Link>

        <Link to="/news" className="block">
          <div className="glass-card cursor-pointer h-35">
            <h2 className="card-title">Live Space News</h2>
            <p className="card-info">
              Stay updated with real-time space missions, discoveries, and
              events.
            </p>
          </div>
        </Link>

        <Link
          to="https://w21030911.nuwebspace.co.uk/graphics/assessment/"
          className="block"
        >
          <div className="glass-card cursor-pointer h-35">
            <h2 className="card-title">Interactive 3D Solar System</h2>
            <p className="card-info">
              Explore planets and celestial bodies in an immersive 3D view.
            </p>
          </div>
        </Link>

        <Link to="/ai" className="block">
          <div className="glass-card cursor-pointer h-35">
            <h2 className="card-title">AI Learning Assistant</h2>
            <p className="card-info">
              Ask questions and learn space concepts with AI-powered guidance.
            </p>
          </div>
        </Link>

        <Link to="/quiz" className="block">
          <div className="glass-card cursor-pointer h-35">
            <h2 className="card-title">Space Quizzes</h2>
            <p className="card-info">
              Test your knowledge with fun, engaging quizzes.
            </p>
          </div>
        </Link>

        <Link to="/profile" className="block">
          <div className="glass-card cursor-pointer h-35">
            <h2 className="card-title">Personalized Learning Tools</h2>
            <p className="card-info">
              Bookmark topics and create your own learning path.
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
