import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";

export default function News() {
  const [news, setNews] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  // NASA Image of the Day state
  const [apod, setApod] = useState(null);
  const [apodError, setApodError] = useState(false);

  const LIMIT = 10;

  // -------------------------------
  // FETCH NASA IMAGE OF THE DAY
  // -------------------------------
  const fetchApod = async () => {
    try {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=ZpXUZeC3wKeEomXq3AFHunWkj8Z7VJGaVO7iHlhs`,
      );

      const data = await res.json();

      if (data.code === 403) {
        console.error("Invalid NASA API Key");
        setApodError(true);
        return;
      }

      setApod(data);
    } catch (err) {
      console.error("Error fetching APOD:", err);
      setApodError(true);
    }
  };

  // -------------------------------
  // FETCH SPACE NEWS
  // -------------------------------
  const fetchNews = async () => {
    setLoading(true);

    try {
      const res = await fetch(
        `https://api.spaceflightnewsapi.net/v4/articles/?limit=${LIMIT}&offset=${offset}`,
      );

      const data = await res.json();
      setNews((prev) => [...prev, ...data.results]);
    } catch (err) {
      console.error("Error fetching news:", err);
    }

    setLoading(false);
  };

  // Load NASA APOD on first mount
  useEffect(() => {
    fetchApod();
  }, []);

  // Load NEWS on offset change
  useEffect(() => {
    fetchNews();
  }, [offset]);

  const loadMore = () => setOffset((prev) => prev + LIMIT);

  return (
    <section className="pt-24 px-6 md:px-20 text-white min-h-screen">
      {/* NASA IMAGE OF THE DAY */}
      {apod && !apodError && (
        <div className="mb-12 bg-gray-900/60 rounded-2xl shadow-lg overflow-hidden border border-white/10">
          <img
            src={apod.url}
            alt={apod.title}
            className="w-full max-h-[420px] object-cover"
          />

          <div className="p-6">
            <h2 className="text-3xl font-bold mb-2">Image of the Day</h2>
            <p className="text-xl font-semibold mb-1">{apod.title}</p>
            <p className="text-sm opacity-75 mb-4">
              {new Date(apod.date).toDateString()}
            </p>
            <p className="opacity-90 mb-4">{apod.explanation}</p>

            <a
              href={apod.hdurl || apod.url}
              target="_blank"
              className="inline-block px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              View Full Image
            </a>
          </div>
        </div>
      )}

      {apodError && (
        <p className="opacity-60 mb-10">
          NASA Image of the Day could not be loaded. (Check API key)
        </p>
      )}

      {/* NEWS SECTION TITLE */}
      <h1 className="text-4xl font-bold mb-8">Latest Space News</h1>

      {/* NEWS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {news.map((item, index) => (
          <NewsCard
            key={index}
            title={item.title}
            image={item.image_url}
            publishedAt={item.published_at}
            url={item.url}
            summary={item.summary}
          />
        ))}
      </div>

      {/* LOAD MORE BUTTON */}
      <div className="flex justify-center my-10">
        <button
          onClick={loadMore}
          disabled={loading}
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white shadow-md disabled:opacity-50"
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      </div>
    </section>
  );
}
