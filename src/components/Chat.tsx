import { useState, useRef, useEffect } from "react";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GOOGLE_GENAI_API_KEY });

interface Message {
    role: "user" | "assistant";
    text: string;
}

export default function Chat() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = scrollRef.current;
        if (el) el.scrollTop = el.scrollHeight;
        containerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, [messages, loading]);

    function handleScroll() {
        if (scrollRef.current) {
            setScrolled(scrollRef.current.scrollTop > 10);
        }
    }

    async function sendMessage() {
        const text = input.trim();
        if (!text || loading) return;

        setMessages((prev) => [...prev, { role: "user", text }]);
        setInput("");
        setLoading(true);

        try {
            const response = await ai.models.generateContent({
                model: "gemini-2.0-flash",
                contents: text,
            });
            setMessages((prev) => [
                ...prev,
                { role: "assistant", text: response.text ?? "" },
            ]);
        } catch (err) {
            setMessages((prev) => [
                ...prev,
                { role: "assistant", text: "Sorry, something went wrong." },
            ]);
        } finally {
            setLoading(false);
        }
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    }

    return (
        <div ref={containerRef} className="w-full flex flex-col items-center overflow-x-hidden py-20">
            <div className="w-5/6">
                <div className="text-5xl font-bold text-[#301000] pb-16 pl-28">
                    Have a question?
                </div>
                <div className="w-5/6 mx-auto flex flex-col gap-4">
                    {/* Message history */}
                    <div className="relative">
                        {/* Fade overlay — only visible when scrolled past top */}
                        {scrolled && (
                            <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#FFFDFA] to-transparent pointer-events-none z-10" />
                        )}

                        <div ref={scrollRef} onScroll={handleScroll} className="flex flex-col gap-3 max-h-96 overflow-y-auto pr-2">
                            {messages.map((msg, i) => (
                                <div
                                    key={i}
                                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                                            msg.role === "user"
                                                ? "bg-[#301000] text-white rounded-br-sm"
                                                : "bg-[#f5ede8] text-[#301000] rounded-bl-sm"
                                        }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {loading && (
                                <div className="flex justify-start">
                                    <div className="bg-[#f5ede8] text-[#301000] px-4 py-3 rounded-2xl rounded-bl-sm text-sm">
                                        <span className="animate-pulse">...</span>
                                    </div>
                                </div>
                            )}
                            <div ref={bottomRef} />
                        </div>
                    </div>

                    {/* Input area */}
                    <div className="flex items-end gap-2 border-2 border-[#301000] rounded-2xl px-4 py-3 focus-within:ring-2 focus-within:ring-[#301000]/30">
                        <textarea
                            className="flex-1 resize-none bg-transparent text-[#301000] placeholder-[#301000]/40 outline-none text-sm leading-relaxed max-h-32"
                            rows={1}
                            placeholder="Ask me anything..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <button
                            onClick={sendMessage}
                            disabled={loading || !input.trim()}
                            className="text-[#301000] disabled:opacity-30 hover:opacity-60 transition-opacity pb-0.5"
                            aria-label="Send"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
