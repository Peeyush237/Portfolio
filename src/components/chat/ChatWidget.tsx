import { motion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import { streamChatReply } from '../../lib/chatApi';
import {
  clearChatHistory,
  createMessage,
  loadChatHistory,
  saveChatHistory,
} from '../../lib/chatStorage';
import { STARTER_QUESTIONS, type ChatMessage } from '../../types/chat';

export function ChatWidget() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    setMessages(loadChatHistory());
  }, []);

  useEffect(() => {
    if (messages.length > 0) saveChatHistory(messages);
  }, [messages]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollTop = container.scrollHeight;
  }, [messages, isStreaming]);

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isStreaming) return;

      setError(null);
      const userMessage = createMessage('user', trimmed);
      const assistantMessage = createMessage('assistant', '');

      setMessages((prev) => [...prev, userMessage, assistantMessage]);
      setInput('');
      setIsStreaming(true);

      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;

      const history = [...messages, userMessage];

      await streamChatReply(
        history,
        {
          onToken: (token) => {
            setMessages((prev) =>
              prev.map((message) =>
                message.id === assistantMessage.id
                  ? { ...message, content: message.content + token }
                  : message,
              ),
            );
          },
          onDone: () => setIsStreaming(false),
          onError: (message) => {
            setError(message);
            setIsStreaming(false);
            setMessages((prev) =>
              prev.map((item) =>
                item.id === assistantMessage.id && !item.content
                  ? { ...item, content: message }
                  : item,
              ),
            );
          },
        },
        controller.signal,
      );
    },
    [isStreaming, messages],
  );

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    void sendMessage(input);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      void sendMessage(input);
    }
  };

  const handleClear = () => {
    if (isStreaming) return;
    clearChatHistory();
    setMessages([]);
    setError(null);
    inputRef.current?.focus();
  };

  const showStarters = messages.length === 0;

  return (
    <div className="flex h-full flex-col rounded-2xl border border-black/[0.08] bg-white dark:border-white/[0.08] dark:bg-[#141414]">
      <div className="flex shrink-0 items-center justify-between gap-4 border-b border-black/[0.08] px-4 py-3 dark:border-white/[0.08]">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-pink-hot px-3 py-1 text-[10px] font-black uppercase tracking-[0.08em] text-white">
            ASK ME
          </div>
          <div>
            <p className="font-display text-sm font-black tracking-[-0.03em] text-gray-900 dark:text-white">
              AI Assistant
            </p>
            <p className="text-[10px] text-gray-500 dark:text-gray-400">
              Ask about Peeyush
            </p>
          </div>
        </div>

        {messages.length > 0 && (
          <button
            type="button"
            onClick={handleClear}
            disabled={isStreaming}
            data-cursor-hover
            className="shrink-0 rounded-full border border-black/[0.1] px-2 py-1 text-[9px] font-black uppercase tracking-[0.08em] text-gray-600 transition hover:bg-black/[0.04] disabled:opacity-40 dark:border-white/[0.12] dark:text-gray-300 dark:hover:bg-white/[0.06]"
          >
            clear
          </button>
        )}
      </div>

      <div
        ref={scrollRef}
        className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto px-4 py-4"
      >
        {showStarters && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto w-full"
          >
            <div className="mb-3 rounded-xl border border-black/[0.08] bg-[#f5f3ee]/80 p-3 dark:border-white/[0.08] dark:bg-[#1a1a1a]">
              <p className="mb-1 text-xs font-black text-gray-900 dark:text-white">
                👋 Start here
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-300">
                Ask about skills, projects, or experience
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {STARTER_QUESTIONS.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => void sendMessage(question)}
                  disabled={isStreaming}
                  data-cursor-hover
                  className="rounded-full bg-[#F5E6A3] px-3 py-1.5 text-left text-[10px] font-bold leading-snug text-black transition hover:scale-[1.02] hover:bg-[#e8d57a] disabled:opacity-50"
                >
                  {question}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {messages.map((message) => (
          <ChatBubble key={message.id} message={message} isStreaming={isStreaming} />
        ))}

        {error && (
          <p className="text-center text-[10px] font-medium text-pink-hot">{error}</p>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="shrink-0 border-t border-black/[0.08] px-4 py-3 dark:border-white/[0.08]"
      >
        <div className="flex items-end gap-2">
          <div className="relative flex-1">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleKeyDown}
              rows={1}
              placeholder="Ask anything..."
              disabled={isStreaming}
              className="max-h-24 min-h-[36px] w-full resize-none rounded-xl border border-black/[0.1] bg-white px-3 py-2 pr-10 text-xs font-medium text-gray-900 outline-none transition focus:border-pink-hot/50 focus:ring-2 focus:ring-pink-hot/20 disabled:opacity-60 dark:border-white/[0.12] dark:bg-[#1a1a1a] dark:text-white"
            />
            {isStreaming && (
              <span className="absolute bottom-2 right-3 font-mono text-[9px] text-pink-hot">
                typing▌
              </span>
            )}
          </div>
          <button
            type="submit"
            disabled={isStreaming || !input.trim()}
            data-cursor-hover
            className="shrink-0 rounded-full bg-pink-hot px-4 py-2 text-[10px] font-black uppercase tracking-[0.08em] text-white transition hover:scale-105 disabled:opacity-40"
          >
            send
          </button>
        </div>
      </form>
    </div>
  );
}

function ChatBubble({
  message,
  isStreaming,
}: {
  message: ChatMessage;
  isStreaming: boolean;
}) {
  const isUser = message.role === 'user';
  const isEmptyAssistant = !isUser && !message.content;

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-[90%] rounded-xl px-3 py-2 text-xs leading-relaxed ${
          isUser
            ? 'bg-pink-hot text-white'
            : 'border border-black/[0.08] bg-white text-gray-800 dark:border-white/[0.08] dark:bg-[#1a1a1a] dark:text-gray-100'
        }`}
      >
        {!isUser && (
          <p className="mb-1 font-mono text-[9px] font-bold uppercase tracking-[0.1em] text-pink-hot">
            assistant
          </p>
        )}
        {isEmptyAssistant && isStreaming ? (
          <span className="inline-flex items-center gap-1 font-mono text-[10px] text-gray-500">
            <span className="animate-pulse">●</span>
            <span className="animate-pulse [animation-delay:150ms]">●</span>
            <span className="animate-pulse [animation-delay:300ms]">●</span>
          </span>
        ) : (
          <p className="whitespace-pre-wrap">{message.content}</p>
        )}
      </div>
    </motion.div>
  );
}
