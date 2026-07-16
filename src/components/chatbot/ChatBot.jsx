import { useState, useRef, useEffect } from "react";
import { GoogleGenAI } from "@google/genai";
import { FaPaperPlane, FaRobot, FaTimes } from "react-icons/fa";
import Message from "./Message";
import "./chat.css";
import portfolioData from "../../data/portfolio-data";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export default function ChatBot({
  chatOpen,
  setChatOpen,
}) {

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text:
        "👋 Hi! I'm Pragin's AI Assistant.\n\nAsk me anything about my skills, projects, education, certifications or experience.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const suggestions = [
  "Tell me about yourself",
  "Show your projects",
  "What are your skills?",
  "Education",
  "Internship",
  "Certifications",
];

  const chatRef = useRef(null);
 

  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);
  useEffect(() => {
  const chat = chatRef.current;

  if (!chat) return;

  const stopScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = chat;

    const atTop = scrollTop <= 0;
    const atBottom = scrollTop + clientHeight >= scrollHeight;

    // Mouse Wheel
    if (e.type === "wheel") {
      if (
        (!atTop && e.deltaY < 0) ||
        (!atBottom && e.deltaY > 0)
      ) {
        e.preventDefault();
        e.stopPropagation();
      }
    }

    // Touchpad / Mobile
    if (e.type === "touchmove") {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  chat.addEventListener("wheel", stopScroll, {
    passive: false,
  });

  chat.addEventListener("touchmove", stopScroll, {
    passive: false,
  });

  return () => {
    chat.removeEventListener("wheel", stopScroll);
    chat.removeEventListener("touchmove", stopScroll);
  };
}, []);

  if (!chatOpen) {
    return (
      <button
        onClick={() => setChatOpen(true)}
        className="fixed bottom-6 right-6 z-[9999] w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-3xl shadow-2xl hover:scale-110 transition"
      >
        🤖
      </button>
    );
  }

  const sendMessage = async () => {
    if (!input.trim()) return;

    const question = input;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: question,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const prompt = `
You are Pragin Barath's professional AI Portfolio Assistant.

Rules:

1. Answer ONLY from the portfolio data below.
2. Never invent information.
3. If information is unavailable, reply:
   "Sorry, that information is not available in Pragin Barath's portfolio."
4. Format answers nicely using bullet points and headings.
5. Keep answers concise and professional.

Portfolio Data:

${JSON.stringify(portfolioData, null, 2)}

User Question:

${question}
`;

  
console.log("API Key exists:", !!import.meta.env.VITE_GEMINI_API_KEY);
      const response = await ai.models.generateContent({
model: "gemini-3.5-flash",
        contents: prompt,
      });

     const reply =
  typeof response.text === "function"
    ? response.text()
    : response.text ?? "No response received.";
            setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: reply,
        },
      ]);

    } catch (err) {
  console.error("FULL ERROR:", err);

  setMessages((prev) => [
    ...prev,
    {
      sender: "bot",
      text: "⚠️ Sorry, I'm temporarily unavailable. Please try again in a moment.",
    },
  ]);
}
    setLoading(false);
  };

  return (
    <div
      className={`
        fixed
        z-[9999]
        bg-[#0f172a]/95
        backdrop-blur-xl
        border
        border-white/10
        shadow-2xl
        rounded-3xl
        flex
        flex-col
        transition-all
        duration-500

        bottom-4 right-2 sm:right-6 w-[95vw] sm:w-[420px] h-[60vh] sm:h-[620px]
      `}
    >
      {/* Header */}

      <div className="flex items-center gap-3 p-3 sm:p-5 border-b border-white/10">

        <FaRobot className="text-cyan-400 text-xl sm:text-2xl" />

        <div>
          <h2 className="text-sm sm:text-base text-white font-bold">
            Pragin AI Assistant
          </h2>

          <p className="text-[10px] sm:text-xs text-green-400">
            ● Online
          </p>
        </div>

        <button
          onClick={() => setChatOpen(false)}
          className="ml-auto text-white/50 hover:text-white text-base sm:text-lg"
        >
          <FaTimes />
        </button>

      </div>

      {/* Messages */}
<div
  ref={chatRef}
  onWheel={(e) => e.stopPropagation()}
  onMouseEnter={() => document.body.style.overflow = "hidden"}
  onMouseLeave={() => document.body.style.overflow = "auto"}
  className="flex-1 overflow-y-auto p-3 sm:p-5 chat-scroll"
>
      
              {messages.map((msg, index) => (
          <Message
            key={index}
            sender={msg.sender}
            text={msg.text}
          />
        ))}

        {loading && (
          <div className="text-white/60 text-sm animate-pulse">
            🤖 Thinking...
          </div>
        )}
      </div>
      {/* Suggested Questions */}

{messages.length === 1 && window.innerWidth >= 640 && (
  <div className="hidden sm:flex px-4 pb-3 flex-wrap gap-2">
    {suggestions.map((item) => (
      <button
        key={item}
        onClick={() => setInput(item)}
        className="text-xs px-3 py-2 rounded-full bg-white/10 text-white hover:bg-cyan-500/30 transition"
      >
        {item}
      </button>
    ))}
  </div>
)}

      {/* Input */}

      <div className="border-t border-white/10 p-3 sm:p-4 flex gap-2 sm:gap-3">

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          placeholder="Ask me anything..."
          className="flex-1 rounded-xl bg-white/5 border border-white/10 px-3 sm:px-4 py-2.5 sm:py-3 text-white outline-none focus:border-cyan-400"
        />

        <button
          onClick={sendMessage}
          disabled={loading}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white text-primary shadow-lg shadow-primary/30 border-2 border-primary/20 flex items-center justify-center hover:scale-105 hover:shadow-primary/50 hover:bg-primary hover:text-white transition disabled:opacity-60"
        >
          <FaPaperPlane />
        </button>

            </div>

    </div>
  );
}