export type ChatRole = 'user' | 'assistant';

export type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
  createdAt: string;
};

export type StoredChat = {
  messages: ChatMessage[];
  updatedAt: string;
};

export const STARTER_QUESTIONS = [
  'What makes Peeyush stand out as a GenAI engineer?',
  'Tell me about his strongest project and the tech stack he used.',
  'Is he open to internships? What role is he targeting?',
  'What is his experience with multi-agent systems and LangGraph?',
  'Summarize his current internship at Ekaant.',
  'What low-resource NLP work has he done?',
] as const;
