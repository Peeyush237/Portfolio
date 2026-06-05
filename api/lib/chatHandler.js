import Groq from 'groq-sdk';
import { buildSystemPrompt } from './personaPrompt';
const MODEL = 'llama-3.3-70b-versatile';
function getGroqClient() {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
        throw new Error('GROQ_API_KEY is not configured');
    }
    return new Groq({ apiKey });
}
export async function streamChatCompletion(messages, onChunk) {
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
        if (text)
            onChunk(text);
    }
}
export function writeSseChunk(write, data) {
    write(`data: ${JSON.stringify(data)}\n\n`);
}
