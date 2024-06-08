export const corsOptions = {
  origin: 'https://chat-fronted-34wdp7duf-abhays-projects-b84a5007.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};


const CHATTU_TOKEN = "chattu-token";

export { corsOptions, CHATTU_TOKEN };
