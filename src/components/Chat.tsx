import { useState, useRef, useEffect } from "react";
import { GoogleGenAI, Type, type Content } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GOOGLE_GENAI_API_KEY });

const SYSTEM_PROMPT = `You are a helpful assistant on Timothy Jin's personal portfolio website. Timothy is a student at the University of British Columbia. Answer questions about Timothy, his work, projects, and experience in a friendly and concise way. If you don't know something specific about Timothy, say so honestly.`;

const tools = [{
    functionDeclarations: [{
        name: "provide_resume",
        description: "Call this when the user asks for a resume, CV, or wants to download Timothy's resume.",
        parameters: { type: Type.OBJECT, properties: {} },
    }],
}];

type ChatMessage =
    | { role: "user"; text: string }
    | { role: "assistant"; text: string }
    | { role: "resume_button" };

export default function Chat() {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [history, setHistory] = useState<Content[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (messages.length === 0) return;
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

        const newHistory: Content[] = [...history, { role: "user", parts: [{ text }] }];
        setMessages((prev) => [...prev, { role: "user", text }]);
        setInput("");
        setLoading(true);

        try {
            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: newHistory,
                config: { tools, systemInstruction: SYSTEM_PROMPT },
            });

            const call = response.functionCalls?.[0];

            if (call?.name === "provide_resume") {
                // Send tool result back to get a natural follow-up
                const historyWithCall: Content[] = [
                    ...newHistory,
                    { role: "model", parts: [{ functionCall: call }] },
                    { role: "user", parts: [{ functionResponse: { name: call.name, response: { success: true } } }] },
                ];
                const followUp = await ai.models.generateContent({
                    model: "gemini-2.5-flash",
                    contents: historyWithCall,
                    config: { tools, systemInstruction: SYSTEM_PROMPT },
                });
                setHistory([...historyWithCall, { role: "model", parts: [{ text: followUp.text ?? "" }] }]);
                setMessages((prev) => [
                    ...prev,
                    { role: "resume_button" },
                    ...(followUp.text ? [{ role: "assistant" as const, text: followUp.text }] : []),
                ]);
            } else {
                setHistory([...newHistory, { role: "model", parts: [{ text: response.text ?? "" }] }]);
                setMessages((prev) => [...prev, { role: "assistant", text: response.text ?? "" }]);
            }
        } catch {
            setMessages((prev) => [...prev, { role: "assistant", text: "Sorry, something went wrong." }]);
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
                    <div className="relative">
                        {scrolled && (
                            <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#FFFDFA] to-transparent pointer-events-none z-10" />
                        )}
                        <div ref={scrollRef} onScroll={handleScroll} className="flex flex-col gap-3 max-h-96 overflow-y-auto pr-2">
                            {messages.map((msg, i) => {
                                if (msg.role === "resume_button") {
                                    return (
                                        <div key={i} className="flex justify-start">
                                            <a
                                                href="/resume.pdf"
                                                download
                                                className="flex items-center gap-2 px-4 py-4 bg-[#f5ede8] text-[#301000] text-sm rounded-full transition-opacity hover:opacity-70"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                                    <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                                                </svg>
                                                Download Resume
                                            </a>
                                        </div>
                                    );
                                }
                                return (
                                    <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                                        <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                                            msg.role === "user"
                                                ? "bg-[#301000] text-white rounded-br-sm"
                                                : "bg-[#f5ede8] text-[#301000] rounded-bl-sm"
                                        }`}>
                                            {msg.text}
                                        </div>
                                    </div>
                                );
                            })}
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
