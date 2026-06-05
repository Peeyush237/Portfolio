import Groq from 'groq-sdk';
import { buildSystemPrompt } from './personaPrompt';

export type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

const MODEL = 'llama-3.3-70b-versatile';

function getGroqClient(): Groq {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    throw new Error('GROQ_API_KEY is not configured');
  }
  return new Groq({ apiKey });
}

export async function streamChatCompletion(
  messages: ChatMessage[],
  onChunk: (text: string) => void,
): Promise<void> {
  const groq = getGroqClient();
  const systemPrompt = buildSystemPrompt();

  const stream = await groq.chat.completions.create({
    model: MODEL,
    temperature: 0.6,
    max_tokens: 1024,
    stream: true,
    messages: [
      { role: 'system', content: systemPrompt },
      ...messages.map((message) => ({
        role: message.role,
        content: message.content,
      })),
    ],
  });

  for await (const chunk of stream) {
    const text = chunk.choices[0]?.delta?.content ?? '';
    if (text) onChunk(text);
  }
}

export function writeSseChunk(
  write: (chunk: string) => void,
  data: Record<string, unknown>,
): void {
  write(`data: ${JSON.stringify(data)}\n\n`);
}
