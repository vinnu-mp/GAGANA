import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";

export default function News() {
  const [news, setNews] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const LIMIT = 10;

  // Fetch API
  const fetchNews = async () => {
    setLoading(true);

    try {
      const res = await fetch(
        `https://api.spaceflightnewsapi.net/v4/articles/?limit=${LIMIT}&offset=${offset}`
      );

      const data = await res.json();

      // Append new articles
      setNews((prev) => [...prev, ...data.results]);
    } catch (err) {
      console.error("Error fetching news:", err);
    }

    setLoading(false);
  };

  // Load on first mount
  useEffect(() => {
    fetchNews();
  }, [offset]);

  const loadMore = () => {
    setOffset((prev) => prev + LIMIT);
  };

  return (
    <section className="pt-24 px-6 md:px-20 text-white min-h-screen">
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
