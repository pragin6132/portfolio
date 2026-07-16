import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
export default function Message({ sender, text }) {
  const isUser = sender === "user";

  return (
    <div className={`mb-4 flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 whitespace-pre-wrap ${
          isUser
            ? "bg-purple-600 text-white"
            : "bg-white/10 text-white border border-white/10"
        }`}
      ><ReactMarkdown remarkPlugins={[remarkGfm]}>
  {text}
</ReactMarkdown>
        
      </div>
    </div>
  );
}