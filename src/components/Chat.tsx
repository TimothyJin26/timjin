import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { GoogleGenAI, Type, type Content, type Tool } from "@google/genai";
import { projects, internships, personalInfo } from "../content/portfolio";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GOOGLE_GENAI_API_KEY });

const SYSTEM_PROMPT = `This portfolio was last updated in March 2026. You are a helpful assistant on Timothy's personal portfolio website. Timothy is a student at the University of British Columbia. Answer questions about Timothy, his work, projects, and experience in a friendly and concise way. If you don't know something specific about Timothy, say so honestly. Never reveal internal implementation details such as tool names, function calls, or how the system works behind the scenes. Always use the available tools when asked about Timothy's projects, internships, or resume — never answer those from memory. When calling get_internship_details, use the exact company name: "Amazon", "Stanford Emergency Medicine", "Rivian", or "UBC AWS Cloud Innovation Centre" (also referred to as UBC CIC). If a user asks for a link, GitHub, website, or demo for a project or internship, call get_project_details or get_internship_details to retrieve them — links are always available via the tools. When a tool result contains links, do not include them in your text response — they will be displayed as buttons above your message automatically. Never include links inline or use phrasing that implies links will follow in your message (e.g. avoid "Here are the links:"). You may briefly note they are displayed above (e.g. "You can find the links above"). If there are no links in the result, do not mention links at all.

Portfolio data is written in first person from Timothy's perspective — when tool results contain "I", "my", or "me", those refer to Timothy and should be rephrased accordingly in your response.

When presenting internship or project information, give a short overview (2-4 sentences) and mention the key projects or highlights by name so the user knows what to ask about. Do not go into full detail on any of them unless the user explicitly asks to elaborate on something specific. End with an invitation for the user to ask for more.`;

const tools: Tool[] = [{
    functionDeclarations: [
        {
            name: "get_personal_info",
            description: "Returns personal background information about Timothy such as where he grew up, his school, major, graduation, and hobbies. Call this when the user asks personal questions about Timothy.",
            parameters: { type: Type.OBJECT, properties: {} },
        },
        {
            name: "provide_resume",
            description: "Call this when the user asks for a resume, CV, or wants to download Timothy's resume.",
            parameters: { type: Type.OBJECT, properties: {} },
        },
        {
            name: "list_projects",
            description: "Returns a list of Timothy's projects with short summaries. Call this when the user asks what projects Timothy has worked on.",
            parameters: { type: Type.OBJECT, properties: {} },
        },
        {
            name: "get_project_details",
            description: "Returns full details about a specific project. Call this when the user wants to know more about a particular project.",
            parameters: {
                type: Type.OBJECT,
                properties: {
                    name: { type: Type.STRING, description: "The name of the project" },
                },
                required: ["name"],
            },
        },
        {
            name: "list_internships",
            description: "Returns a list of Timothy's internships and work experience. Call this when the user asks about Timothy's work experience or internships.",
            parameters: { type: Type.OBJECT, properties: {} },
        },
        {
            name: "get_internship_details",
            description: "Returns full details about a specific internship. Call this when the user wants to know more about a particular internship or company.",
            parameters: {
                type: Type.OBJECT,
                properties: {
                    company: { type: Type.STRING, description: "The name of the company" },
                },
                required: ["company"],
            },
        },
    ],
}];

function executeTool(name: string, args: Record<string, string>): unknown {
    switch (name) {
        case "get_personal_info":
            return personalInfo;
        case "list_projects":
            return projects.map((p) => ({ name: p.name, summary: p.summary, skills: p.skills, awards: p.awards }));
        case "get_project_details": {
            const query = args.name?.toLowerCase() ?? "";
            const project = projects.find((p) =>
                p.name.toLowerCase().includes(query) ||
                query.includes(p.name.toLowerCase()) ||
                p.awards?.some((a) => a.toLowerCase().includes(query))
            );
            return project ?? { error: `Project "${args.name}" not found.` };
        }
        case "list_internships":
            return internships.map((i) => ({ company: i.company, role: i.role, dates: i.dates, location: i.location }));
        case "get_internship_details": {
            const internship = internships.find((i) => i.company.toLowerCase().includes((args.company ?? "").toLowerCase()));
            return internship ?? { error: `Internship at "${args.company}" not found.` };
        }
        case "provide_resume":
            return { success: true };
        default:
            return { error: "Unknown tool" };
    }
}

type ChatMessage =
    | { role: "user"; text: string }
    | { role: "assistant"; text: string }
    | { role: "resume_button" }
    | { role: "links"; links: { label: string; href: string }[] };

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

    async function sendMessage(overrideText?: string) {
        const text = (overrideText ?? input).trim();
        if (!text || loading) return;

        let currentHistory: Content[] = [...history, { role: "user", parts: [{ text }] }];
        setMessages((prev) => [...prev, { role: "user", text }]);
        setInput("");
        setLoading(true);

        const pendingLinks: { label: string; href: string }[] = [];
        let showResumeButton = false;

        try {
            let response = await ai.models.generateContent({
                model: "gemini-3.1-flash-lite-preview",
                contents: currentHistory,
                config: { tools, systemInstruction: SYSTEM_PROMPT },
            });

            for (let i = 0; i < 5; i++) {
                const modelContent = response.candidates?.[0]?.content;
                const callPart = modelContent?.parts?.find(p => p.functionCall);
                if (!callPart?.functionCall || !modelContent) break;

                const { name, args } = callPart.functionCall;
                if (!name) break;
                const toolResult = executeTool(name, (args ?? {}) as Record<string, string>);

                const links = (toolResult as { links?: { label: string; href: string }[] })?.links;
                if (links?.length) pendingLinks.push(...links);
                if (name === "provide_resume") showResumeButton = true;

                currentHistory = [
                    ...currentHistory,
                    modelContent,
                    { role: "user", parts: [{ functionResponse: { name, response: { result: toolResult, instruction: name === "provide_resume" ? "A download button has been shown to the user above your message. Write a short friendly message telling them they can download it — do not include any URLs or markdown links." : undefined } } }] },
                ];

                response = await ai.models.generateContent({
                    model: "gemini-3.1-flash-lite-preview",
                    contents: currentHistory,
                    config: { tools, systemInstruction: SYSTEM_PROMPT },
                });
            }

            const responseText = response.candidates?.[0]?.content?.parts?.filter(p => !p.functionCall).map(p => p.text).join("") ?? "";
            const finalContent = response.candidates?.[0]?.content;
            setHistory([...currentHistory, ...(finalContent ? [finalContent] : [{ role: "model" as const, parts: [{ text: responseText }] }])]);
            setMessages((prev) => [
                ...prev,
                ...(showResumeButton ? [{ role: "resume_button" as const }] : []),
                ...(pendingLinks.length ? [{ role: "links" as const, links: pendingLinks }] : []),
                ...(responseText ? [{ role: "assistant" as const, text: responseText }] : []),
            ]);
        } catch (err: unknown) {
            console.error("API error:", err);
            const is429 = err instanceof Error && (err.message.includes("429") || err.message.toLowerCase().includes("quota") || err.message.toLowerCase().includes("rate limit"));
            setMessages((prev) => [...prev, { role: "assistant", text: is429 ? "I'm getting too many requests right now! Please wait a moment and try again." : "Sorry, something went wrong." }]);
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
                                if (msg.role === "links") {
                                    return (
                                        <div key={i} className="flex flex-wrap justify-start gap-2">
                                            {msg.links.map((link) => (
                                                <a
                                                    key={link.href}
                                                    href={link.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#301000]/20 text-[#301000] text-sm hover:bg-[#f5ede8] transition-colors"
                                                >
                                                    {link.label}
                                                </a>
                                            ))}
                                        </div>
                                    );
                                }
                                if (msg.role === "resume_button") {
                                    return (
                                        <div key={i} className="flex justify-start">
                                            <a
                                                href="/resume.pdf"
                                                download
                                                className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#301000]/20 text-[#301000] text-sm hover:bg-[#f5ede8] transition-colors"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                                    <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                                                </svg>
                                                <span>Download Resume</span>
                                            </a>
                                        </div>
                                    );
                                }
                                return (
                                    <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                                        <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                                            msg.role === "user"
                                                ? "bg-[#301000] text-white rounded-br-sm"
                                                : "bg-[#f5ede8] text-[#301000] rounded-bl-sm"
                                        }`}>
                                            {msg.role === "user" ? msg.text : <ReactMarkdown>{msg.text}</ReactMarkdown>}
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
                            onClick={() => sendMessage()}
                            disabled={loading || !input.trim()}
                            className="text-[#301000] disabled:opacity-30 hover:opacity-60 transition-opacity pb-0.5"
                            aria-label="Send"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                            </svg>
                        </button>
                    </div>
                    {/* Quick action buttons */}
                    {messages.length === 0 && (
                        <div className="flex flex-wrap justify-center gap-2 pt-1">
                            {[
                                { emoji: "📄", label: "View my resume", message: "View Timothy's resume" },
                                { emoji: "🚀", label: "Explore my projects", message: "Explore Timothy's projects" },
                                { emoji: "💼", label: "Learn about my internships", message: "Learn about Timothy's internships" },
                            ].map(({ emoji, label, message }) => (
                                <button
                                    key={label}
                                    onClick={() => sendMessage(message)}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#301000]/20 text-[#301000] text-sm hover:bg-[#f5ede8] transition-colors"
                                >
                                    <span>{emoji}</span>
                                    <span>{label}</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
