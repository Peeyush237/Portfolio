import type { VercelRequest, VercelResponse } from '@vercel/node';
import {
  streamChatCompletion,
  writeSseChunk,
  type ChatMessage,
} from './lib/chatHandler.js';

function parseBody(req: VercelRequest): { messages?: ChatMessage[] } {
  const raw = req.body;

  if (raw == null) return {};

  if (typeof raw === 'string') {
    try {
      return JSON.parse(raw) as { messages?: ChatMessage[] };
    } catch {
      return {};
    }
  }

  return raw as { messages?: ChatMessage[] };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = parseBody(req);
  const messages = body.messages;

  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'messages array is required' });
  }

  const validMessages = messages.filter(
    (message) =>
      (message.role === 'user' || message.role === 'assistant') &&
      typeof message.content === 'string' &&
      message.content.trim().length > 0,
  );

  if (validMessages.length === 0) {
    return res.status(400).json({ error: 'No valid messages provided' });
  }

  res.setHeader('Content-Type', 'text/event-stream; charset=utf-8');
  res.setHeader('Cache-Control', 'no-cache, no-transform');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Accel-Buffering', 'no');
  res.setHeader('Access-Control-Allow-Origin', '*');

  const write = (chunk: string) => res.write(chunk);

  try {
    await streamChatCompletion(validMessages, (text) => {
      writeSseChunk(write, { content: text });
    });

    writeSseChunk(write, { done: true });
    res.end();
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Failed to generate response';

    if (!res.headersSent) {
      return res.status(500).json({ error: message });
    }

    writeSseChunk(write, { error: message });
    res.end();
  }
}
