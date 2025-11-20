import React, { useState, useRef, useEffect } from 'react';
import { sendWeddingMessage } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Send, X, Sparkles, Bot } from 'lucide-react';

const GuestAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello! I am the Wedding Assistant. Feel free to ask me about the schedule, location, or leave a blessing for Jack & Kensey!\n\n您好！我是婚禮小幫手。想知道婚禮資訊，或是想為新人寫一段祝福嗎？' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    const responseText = await sendWeddingMessage(userMsg);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsTyping(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 bg-stone-800 text-white p-4 rounded-full shadow-xl hover:bg-stone-700 transition-all duration-300 hover:scale-110 flex items-center gap-2 ${isOpen ? 'hidden' : 'flex'}`}
      >
        <Sparkles size={20} className="text-yellow-200" />
        <span className="font-medium pr-1 text-sm">Assistant / 婚禮助手</span>
      </button>

      {/* Chat Window Overlay */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[90vw] md:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col border border-stone-100 overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-stone-800 p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-1.5 rounded-full">
                 <Bot size={18} />
              </div>
              <h3 className="font-medium text-sm">Wedding Assistant / 婚禮助手</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm whitespace-pre-line
                    ${msg.role === 'user' 
                      ? 'bg-wedding-rose text-white rounded-br-none' 
                      : 'bg-white text-stone-700 border border-stone-100 rounded-bl-none'
                    }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-stone-100 p-3 rounded-2xl rounded-bl-none shadow-sm flex gap-1 items-center">
                   <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce"></div>
                   <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                   <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-stone-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything... / 請輸入問題"
                className="flex-1 bg-stone-50 border-0 rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-wedding-rose/50 outline-none"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="bg-stone-800 text-white p-2 rounded-full hover:bg-stone-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GuestAssistant;