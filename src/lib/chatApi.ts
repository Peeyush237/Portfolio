import type { ChatMessage } from '../types/chat';

type StreamHandlers = {
  onToken: (token: string) => void;
  onDone: () => void;
  onError: (message: string) => void;
};

export async function streamChatReply(
  messages: ChatMessage[],
  handlers: StreamHandlers,
  signal?: AbortSignal,
): Promise<void> {
  const history = messages.map((message) => ({
    role: message.role,
    content: message.content,
  }));

  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages: history }),
    signal,
  });

  if (!response.ok) {
    let errorMessage = 'Something went wrong. Please try again.';
    try {
      const data = (await response.json()) as { error?: string };
      if (data.error) errorMessage = data.error;
    } catch {
      // ignore parse errors
    }
    handlers.onError(errorMessage);
    return;
  }

  const reader = response.body?.getReader();
  if (!reader) {
    handlers.onError('Streaming is not supported in this browser.');
    return;
  }

  const decoder = new TextDecoder();
  let buffer = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split('\n');
    buffer = lines.pop() ?? '';

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed.startsWith('data:')) continue;

      const payload = trimmed.slice(5).trim();
      if (!payload) continue;

      try {
        const data = JSON.parse(payload) as {
          content?: string;
          done?: boolean;
          error?: string;
        };

        if (data.error) {
          handlers.onError(data.error);
          return;
        }

        if (data.content) handlers.onToken(data.content);
        if (data.done) handlers.onDone();
      } catch {
        // ignore malformed chunks
      }
    }
  }

  handlers.onDone();
}
