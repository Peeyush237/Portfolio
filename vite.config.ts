import react from '@vitejs/plugin-react';
import type { IncomingMessage, ServerResponse } from 'node:http';
import { defineConfig, loadEnv, type Plugin } from 'vite';

function readJsonBody(req: IncomingMessage): Promise<unknown> {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(error);
      }
    });
    req.on('error', reject);
  });
}

function chatApiDevPlugin(env: Record<string, string>): Plugin {
  return {
    name: 'chat-api-dev',
    configureServer(server) {
      server.middlewares.use('/api/chat', async (req, res, next) => {
        if (req.method !== 'POST') {
          next();
          return;
        }

        process.env.GROQ_API_KEY = env.GROQ_API_KEY ?? process.env.GROQ_API_KEY;

        let writeSseChunk: (
          write: (chunk: string) => void,
          data: Record<string, unknown>,
        ) => void;

        try {
          const body = (await readJsonBody(req)) as {
            messages?: Array<{ role: 'user' | 'assistant'; content: string }>;
          };

          const chatHandler = await import('./api/lib/chatHandler');
          writeSseChunk = chatHandler.writeSseChunk;
          const { streamChatCompletion } = chatHandler;

          res.setHeader('Content-Type', 'text/event-stream; charset=utf-8');
          res.setHeader('Cache-Control', 'no-cache, no-transform');
          res.setHeader('Connection', 'keep-alive');

          const messages = body.messages ?? [];
          const write = (chunk: string) => (res as ServerResponse).write(chunk);

          await streamChatCompletion(messages, (text) => {
            writeSseChunk(write, { content: text });
          });

          writeSseChunk(write, { done: true });
          res.end();
        } catch (error) {
          const message =
            error instanceof Error ? error.message : 'Failed to generate response';

          if (!res.headersSent) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: message }));
            return;
          }

          const write = (chunk: string) => (res as ServerResponse).write(chunk);
          const { writeSseChunk: writeChunk } = await import('./api/lib/chatHandler');
          writeChunk(write, { error: message });
          res.end();
        }
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), chatApiDevPlugin(env)],
  };
});
