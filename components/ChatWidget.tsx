
import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { GoogleGenAI, Chat } from "@google/genai";
import { MessageSquare, X, Send, Loader2, User } from 'lucide-react';
import { SKILLS_DATA, PROJECTS, TIMELINE, PROFILE_PIC, GITHUB_FALLBACK_IMG, ACHIEVEMENTS_DATA, CONTACT_INFO, CERTIFICATIONS_DATA, BLOG_DATA } from '../constants';

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

const BhekiAvatar = ({ size = "w-10 h-10", className = "" }: { size?: string, className?: string }) => (
  <div className={`${size} overflow-hidden border border-white shrink-0 bg-black grayscale ${className}`}>
    <img
      src={PROFILE_PIC}
      alt="Bheki AI"
      className="w-full h-full object-cover"
      onError={(e) => {
        (e.target as HTMLImageElement).src = GITHUB_FALLBACK_IMG;
      }}
    />
  </div>
);

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "System Online. I am Bheki's automated assistant. You can ask me about his projects, skills, certifications, education, or contact details.",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatSession, setChatSession] = useState<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initChat = async () => {
      try {
        const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
        if (!apiKey || apiKey === 'PLACEHOLDER_API_KEY') {
          console.warn('Gemini API key is missing or is a placeholder');
        }
        const ai = new GoogleGenAI({ apiKey: apiKey || '' });

        const skillsContext = SKILLS_DATA.map(cat =>
          `- ${cat.title}: ${cat.points.join(', ')}`
        ).join('\n');

        const projectsContext = PROJECTS.map(p =>
          `Project: "${p.title}" (${p.category}). Description: ${p.description}. Tech Stack: ${p.tech.join(', ')}. Key Features: ${p.features.join(', ')}. Repo: ${p.repoUrl}`
        ).join('\n');

        const experienceContext = TIMELINE.map(t =>
          `Role: ${t.role} at ${t.company} (${t.date}). Type: ${t.type}. Details: ${t.description || 'N/A'}. Modules/Subjects: ${t.modules ? t.modules.join(', ') : t.subjects ? t.subjects.join(', ') : 'N/A'}`
        ).join('\n');

        const certificationsContext = CERTIFICATIONS_DATA.map(c =>
          `Certification: "${c.title}" from ${c.issuer} (${c.date}).`
        ).join('\n');

        const achievementsContext = ACHIEVEMENTS_DATA.map(a =>
          `Achievement: "${a.title}" from ${a.organization} (${a.date}). Type: ${a.type}. Description: ${a.description}. Tech: ${a.tech?.join(', ')}`
        ).join('\n');

        const blogContext = BLOG_DATA.map(b =>
          `Blog Post: "${b.title}" (${b.date}). Excerpt: ${b.excerpt}. Tags: ${b.tags.join(', ')}`
        ).join('\n');

        const contactContext = `
          Email: ${CONTACT_INFO.email}
          Phone: ${CONTACT_INFO.phone}
          LinkedIn: ${CONTACT_INFO.linkedin}
          GitHub: ${CONTACT_INFO.github}
        `;

        const systemInstruction = `
          You are the AI persona of Bheki Mogola, a professional Data Analyst.
          Act as if you are Bheki. 
          Tone: Professional, precise, concise, data-driven. Avoid emojis and slang. Use technical terminology where appropriate.
          
          Key Professional Context:
          - You have COMPLETED your Bachelor of Commerce in Information Systems (Graduate). You are no longer a student.
          - While primarily a Data Analyst, you also possess strong Web Development skills (React, Node.js, TypeScript) which you use to build tools and dashboards.
          
          Knowledge Base:
          -- Contact Info --
          ${contactContext}

          -- Skills --
          ${skillsContext}

          -- Projects --
          ${projectsContext}

          -- Experience & Education --
          ${experienceContext}

          -- Certifications --
          ${certificationsContext}

          -- Achievements & Hackathons --
          ${achievementsContext}
          
          -- Blog Posts --
          ${blogContext}
          
          Guidelines:
          - Answer questions directly based on the data provided above.
          - If asked about contact info, provide the email and phone number.
          - If asked about specific projects or skills, provide detailed information from the context.
          - If information is missing, state that professionally.
          - Keep responses brief and strictly text-based.
        `;

        const chat = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction: systemInstruction,
          },
        });

        setChatSession(chat);
      } catch (error) {
        console.error("Failed to initialize AI chat:", error);
      }
    };

    initChat();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || !chatSession) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const result = await chatSession.sendMessageStream({ message: userMsg.text });

      let fullResponse = "";
      const responseId = (Date.now() + 1).toString();

      setMessages(prev => [...prev, {
        id: responseId,
        role: 'model',
        text: '',
        timestamp: new Date()
      }]);

      for await (const chunk of result) {
        fullResponse += chunk.text;
        setMessages(prev => prev.map(msg =>
          msg.id === responseId ? { ...msg, text: fullResponse } : msg
        ));
      }

    } catch (error) {
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        text: "Connection error. Please email me directly.",
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 shadow-xl transition-all duration-300 ${isOpen ? 'bg-black text-white border border-white' : 'bg-white text-black border border-black'
          }`}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      <div
        className={`fixed bottom-24 right-6 z-40 w-[90vw] md:w-[350px] h-[450px] bg-black border border-neutral-700 flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-0 opacity-0 translate-y-10 pointer-events-none'
          }`}
      >
        <div className="p-4 bg-neutral-900 border-b border-neutral-800 flex items-center gap-3">
          <BhekiAvatar />
          <div>
            <h3 className="font-bold text-white text-sm uppercase">Assistant // Bheki</h3>
            <p className="text-xs text-neutral-500 font-mono">Online</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              {msg.role === 'user' ? (
                <div className="w-8 h-8 bg-neutral-800 text-neutral-400 flex items-center justify-center shrink-0 border border-neutral-700">
                  <User size={14} />
                </div>
              ) : (
                <BhekiAvatar size="w-8 h-8" />
              )}

              <div className={`max-w-[85%] p-3 text-sm leading-relaxed ${msg.role === 'user'
                ? 'bg-white text-black border border-white'
                : 'bg-neutral-950 text-neutral-300 border border-neutral-800'
                }`}>
                {msg.role === 'user' ? (
                  msg.text
                ) : (
                  <ReactMarkdown
                    components={{
                      p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                      strong: ({ children }) => <span className="font-bold text-white">{children}</span>,
                      ul: ({ children }) => <ul className="list-disc pl-4 mb-2 space-y-1">{children}</ul>,
                      ol: ({ children }) => <ol className="list-decimal pl-4 mb-2 space-y-1">{children}</ol>,
                      li: ({ children }) => <li className="pl-1">{children}</li>,
                    }}
                  >
                    {msg.text}
                  </ReactMarkdown>
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-3">
              <BhekiAvatar size="w-8 h-8" />
              <div className="bg-neutral-950 p-3 border border-neutral-800">
                <Loader2 size={16} className="animate-spin text-neutral-500" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 bg-neutral-900 border-t border-neutral-800">
          <div className="relative flex items-center">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Input Command..."
              className="w-full bg-black border border-neutral-700 px-4 py-2 text-white placeholder:text-neutral-600 focus:outline-none focus:border-white transition-all text-sm font-mono"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !inputValue.trim()}
              className="absolute right-2 p-1.5 bg-white hover:bg-neutral-200 text-black disabled:opacity-50 transition-colors"
            >
              <Send size={14} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatWidget;
