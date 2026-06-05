import { streamChatCompletion, writeSseChunk, } from './lib/chatHandler';
export default async function handler(req, res) {
    if (req.method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        return res.status(204).end();
    }
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    const body = req.body;
    const messages = body?.messages;
    if (!Array.isArray(messages) || messages.length === 0) {
        return res.status(400).json({ error: 'messages array is required' });
    }
    const validMessages = messages.filter((message) => (message.role === 'user' || message.role === 'assistant') &&
        typeof message.content === 'string' &&
        message.content.trim().length > 0);
    if (validMessages.length === 0) {
        return res.status(400).json({ error: 'No valid messages provided' });
    }
    res.setHeader('Content-Type', 'text/event-stream; charset=utf-8');
    res.setHeader('Cache-Control', 'no-cache, no-transform');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Access-Control-Allow-Origin', '*');
    try {
        await streamChatCompletion(validMessages, (text) => {
            writeSseChunk((chunk) => res.write(chunk), { content: text });
        });
        writeSseChunk((chunk) => res.write(chunk), { done: true });
        res.end();
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Failed to generate response';
        if (!res.headersSent) {
            return res.status(500).json({ error: message });
        }
        writeSseChunk((chunk) => res.write(chunk), { error: message });
        res.end();
    }
}
