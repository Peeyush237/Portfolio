import { useEffect, useState } from 'react';

const TYPEWRITER_LINES = ['aiml systems', 'model performance', 'agentic ai'];

export function RetroPc() {
  const [lineIndex, setLineIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentLine = `> ${TYPEWRITER_LINES[lineIndex]}`;
    let charIndex = 0;

    if (!isTyping) return;

    const typeInterval = setInterval(() => {
      if (charIndex <= currentLine.length) {
        setDisplayText(currentLine.slice(0, charIndex));
        charIndex += 1;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setIsTyping(false);
          setTimeout(() => {
            setLineIndex((prev) => (prev + 1) % TYPEWRITER_LINES.length);
            setDisplayText('');
            setIsTyping(true);
          }, 400);
        }, 2000);
      }
    }, 80);

    return () => clearInterval(typeInterval);
  }, [lineIndex, isTyping]);

  return (
    <div className="relative mx-auto w-full max-w-[320px]">
      <svg
        viewBox="0 0 320 380"
        className="h-auto w-full drop-shadow-lg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="monitorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2a2a2a" />
            <stop offset="100%" stopColor="#1a1a1a" />
          </linearGradient>
          <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0d1a0d" />
            <stop offset="100%" stopColor="#0a140a" />
          </linearGradient>
          <linearGradient id="bezelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#d4c4a8" />
            <stop offset="100%" stopColor="#b8a078" />
          </linearGradient>
        </defs>

        <ellipse cx="160" cy="360" rx="100" ry="12" fill="rgba(0,0,0,0.3)" />

        <rect x="60" y="280" width="200" height="60" rx="8" fill="url(#bezelGrad)" />
        <rect x="80" y="295" width="40" height="8" rx="2" fill="#8b7355" />
        <rect x="130" y="295" width="40" height="8" rx="2" fill="#8b7355" />
        <rect x="180" y="295" width="40" height="8" rx="2" fill="#8b7355" />
        <rect x="230" y="295" width="20" height="8" rx="2" fill="#4ade80" opacity="0.8" />

        <rect x="40" y="40" width="240" height="200" rx="16" fill="url(#monitorGrad)" />
        <rect x="52" y="52" width="216" height="176" rx="10" fill="#111" />
        <rect x="60" y="60" width="200" height="160" rx="6" fill="url(#screenGrad)" />

        <rect x="60" y="60" width="200" height="20" rx="6" fill="#1a2a1a" />
        <circle cx="72" cy="70" r="4" fill="#ff5f57" />
        <circle cx="86" cy="70" r="4" fill="#febc2e" />
        <circle cx="100" cy="70" r="4" fill="#28c840" />
        <text x="110" y="74" fill="#4ade80" fontSize="8" fontFamily="monospace" opacity="0.7">
          peeyush@terminal
        </text>

        <rect x="140" y="250" width="40" height="30" rx="4" fill="url(#bezelGrad)" />
      </svg>

      <div className="absolute left-[19%] top-[22%] h-[38%] w-[62.5%] overflow-hidden rounded font-mono text-[11px] leading-relaxed text-[#4ade80] sm:text-xs">
        <p className="mb-2 opacity-50">$ peeyush --focus</p>
        <p>
          {displayText}
          <span className="animate-blink">▌</span>
        </p>
        <p className="mt-3 opacity-40">
          {TYPEWRITER_LINES.filter((_, i) => i !== lineIndex).map((line) => (
            <span key={line} className="block">
              &gt; {line}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
