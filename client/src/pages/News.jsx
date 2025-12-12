import NewsCard from "../components/NewsCard";
import testNews from "../data/testNews"; // dummy data

export default function News() {
  return (
    <section className="pt-24 px-6 md:px-20 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Latest Space News</h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {testNews.map((item, index) => (
          <NewsCard
            key={index}
            title={item.title}
            image={item.imageUrl}
            publishedAt={item.publishedAt}
            url={item.url}
            summary={item.summary}
          />
        ))}
      </div>
    </section>
  );
}
