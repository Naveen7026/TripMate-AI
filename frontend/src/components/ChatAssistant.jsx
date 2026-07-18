import { useEffect, useState } from "react";
import { SendHorizonal, Sparkles } from "lucide-react";

function ChatAssistant() {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState(() => {
    if (typeof window === "undefined") return [];
    const saved = window.localStorage.getItem("chatMessages");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    window.localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const nextMessage = {
      id: Date.now(),
      role: "user",
      text: inputValue.trim(),
    };

    const aiReply = {
      id: Date.now() + 1,
      role: "ai",
      text: "I’ve noted that. I’ll keep your recovery options and flight choices in sync.",
    };

    setMessages((prev) => [...prev, nextMessage, aiReply]);
    setInputValue("");
  };

  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">Assistant</p>
          <h2 className="mt-1 text-2xl font-semibold text-slate-900">TripMate AI assistant</h2>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700">
          <Sparkles size={16} />
          Live support ready
        </div>
      </div>

      <div className="mt-6 rounded-[24px] border border-slate-200 bg-gradient-to-br from-slate-50 to-indigo-50 p-4">
        {messages.length === 0 ? (
          <>
            <p className="font-semibold text-slate-900">You:</p>
            <p className="mt-2 text-sm text-slate-700">My flight is delayed. What should I do next?</p>

            <p className="mt-4 font-semibold text-slate-900">TripMate AI:</p>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              Your flight AI302 is delayed by 2 hours. I recommend you review the alternative routes now and keep your hotel option ready in case the delay extends.
            </p>
          </>
        ) : (
          <div className="space-y-3">
            {messages.map((message) => (
              <div key={message.id} className={`rounded-2xl p-3 text-sm ${message.role === "user" ? "bg-white text-slate-700" : "bg-indigo-100 text-slate-700"}`}>
                <p className="font-semibold text-slate-900">{message.role === "user" ? "You" : "TripMate AI"}</p>
                <p className="mt-1">{message.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <input
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={(event) => event.key === "Enter" && handleSend()}
          className="flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-0 focus:border-indigo-400"
          placeholder="Ask TripMate AI..."
        />
        <button
          onClick={handleSend}
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-200"
        >
          Send <SendHorizonal size={16} />
        </button>
      </div>
    </div>
  );
}

export default ChatAssistant;