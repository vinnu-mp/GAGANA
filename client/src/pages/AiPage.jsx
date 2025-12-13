import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function AiPage() {
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("gagana_chat_v1");
    return saved ? JSON.parse(saved) : [];
  });

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("gagana_chat_v1", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // ✅ STEP 3: Increment AI chat count (USER message only)
    const currentChats = Number(localStorage.getItem("aiChats")) || 0;
    localStorage.setItem("aiChats", currentChats + 1);

    const userMsg = { sender: "user", text: input.trim() };
    setMessages((prev) => [...prev, userMsg]);

    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userMsg.text }),
      });

      const data = await res.json();
      const reply = data.reply || "I couldn't fetch a response.";

      setMessages((prev) => [...prev, { sender: "ai", text: reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "AI is unavailable at the moment." },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col p-6 bg-gradient-to-b from-black via-[#030617] to-black text-white">
      <h1 className="text-3xl font-bold text-center mb-6">
        🚀 GAGANA AI — Space Assistant
      </h1>

      {/* Chat area */}
      <div className="flex-1 overflow-y-auto border border-gray-700 rounded-lg p-4 flex flex-col gap-4 min-h-[400px]">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-[80%] p-3 rounded-xl ${
              m.sender === "user"
                ? "bg-indigo-600 ml-auto text-white"
                : "bg-gray-800 text-gray-200"
            }`}
          >
            {m.sender === "ai" ? (
              <div className="prose prose-invert max-w-none">
                <ReactMarkdown>{m.text}</ReactMarkdown>
              </div>
            ) : (
              m.text
            )}
          </div>
        ))}

        {loading && <div className="text-gray-400">Thinking...</div>}

        <div ref={bottomRef}></div>
      </div>

      {/* Input */}
      <div className="mt-4 flex gap-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask something about space..."
          className="flex-1 bg-gray-900 border border-gray-700 rounded-lg p-3 focus:outline-none"
        />
        <button
          onClick={sendMessage}
          className="bg-indigo-600 px-5 py-2 rounded-lg hover:bg-indigo-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
