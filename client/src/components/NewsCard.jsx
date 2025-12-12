/* News card UI component */
export default function NewsCard({ title, image, publishedAt, url, summary }) {
  return (
    <div className="glass-card-news w-full rounded-xl p-5 border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl">
      {/* Title */}
      <h2 className="text-xl font-semibold mb-3">{title}</h2>

      {/* Image */}
      <img
        src={image}
        alt="news"
        className="w-full h-52 object-cover rounded-lg mb-4"
      />

      {/* Meta */}
      <div className="flex items-center gap-4 mb-4 text-sm">
        <span className="px-2 py-1 bg-white/20 rounded-md">
          {new Date(publishedAt).toLocaleDateString()}
        </span>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 bg-blue-500 hover:bg-blue-600 rounded-md text-white transition"
        >
          Official Link
        </a>
      </div>

      {/* Summary */}
      <p className="text-sm opacity-90 leading-relaxed">{summary}</p>
    </div>
  );
}
