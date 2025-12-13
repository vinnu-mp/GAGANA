export default function Home() {
  return (
    <section className="pt-24 px-8 md:px-20 text-white min-h-screen">
      {/* TITLE + SUBTITLE */}
      <div className="mb-24">
        <h1 className="text-5xl font-extrabold tracking-wide">GAGANA</h1>
        <p className="text-xl opacity-90 mt-3">
          Discover Space. Verify Reality.
        </p>
      </div>

      {/* INTRO CARDS — CONSISTENT SPACING */}
      <div className="flex flex-col gap-24 mb-24">
        {/* INTRO CARD 1 */}
        <div className="glass-card p-14 bg-white/2 backdrop-blur-2xl">
          <h2 className="title text-2xl font-semibold mb-8">
            Welcome to GAGANA — your gateway to the universe
          </h2>

          <p className="leading-relaxed text-lg mb-6">
            GAGANA is a modern space intelligence platform designed for curious
            minds who want to understand the universe beyond headlines and
            textbooks. It brings together verified space knowledge, real-time
            discoveries, and intelligent exploration into one seamless
            experience.
          </p>

          <p className="leading-relaxed text-lg">
            Every element of GAGANA is crafted to help you explore space with
            clarity, confidence, and wonder — turning curiosity into meaningful
            understanding.
          </p>
        </div>

        {/* INTRO CARD 2 */}
        <div className="glass-card p-14 bg-white/2 backdrop-blur-2xl">
          <h2 className="title text-2xl font-semibold mb-8">
            Explore space without confusion or overload
          </h2>

          <p className="leading-relaxed text-lg mb-6">
            Learning about space should feel inspiring, not overwhelming.
            Scattered sources, complex explanations, and endless searching can
            often take away the joy of discovery.
          </p>

          <p className="leading-relaxed text-lg">
            GAGANA brings everything together in one calm, intuitive environment
            — so you can explore the universe at your own pace, with trusted
            knowledge, clear explanations, and zero pressure.
          </p>
        </div>
      </div>

      {/* FEATURE CARDS — SAME GAP AS ABOVE */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 pb-24">
        <div className="glass-card">
          <h2 className="title card-title">Verified Space Facts</h2>
          <p className="card-info">
            Explore reliable space knowledge sourced from NASA, ISRO, and
            trusted scientific databases.
          </p>
        </div>

        <div className="glass-card">
          <h2 className="title card-title">Live Space News</h2>
          <p className="card-info">
            Stay updated with real-time launches, missions, discoveries, and
            major space events.
          </p>
        </div>

        <div className="title glass-card">
          <h2 className="card-title">Interactive 3D Solar System</h2>
          <p className="card-info">
            Visualize planets, orbits, and celestial bodies through immersive 3D
            exploration.
          </p>
        </div>

        <div className="glass-card">
          <h2 className="title card-title">AI Learning Assistant</h2>
          <p className="card-info">
            Ask questions and receive clear, simplified explanations powered by
            intelligent AI assistance.
          </p>
        </div>

        <div className="glass-card">
          <h2 className="title card-title">Space Quizzes</h2>
          <p className="card-info">
            Test your understanding of space concepts through engaging and
            interactive quizzes.
          </p>
        </div>

        <div className="glass-card">
          <h2 className="title card-title">Personalized Learning Tools</h2>
          <p className="card-info">
            Track your progress, bookmark topics, and shape your own learning
            journey through space.
          </p>
        </div>
      </div>
    </section>
  );
}
