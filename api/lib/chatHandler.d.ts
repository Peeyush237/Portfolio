export type ChatMessage = {
    role: 'user' | 'assistant';
    content: string;
};
export declare function streamChatCompletion(messages: ChatMessage[], onChunk: (text: string) => void): Promise<void>;
export declare function writeSseChunk(write: (chunk: string) => void, data: Record<string, unknown>): void;
