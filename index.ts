import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import http from 'http';
import schema from './schema';

async function startApolloServer() {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    schema,
    csrfPrevention: true,
    cache: 'bounded',
  });
  await server.start();
  server.applyMiddleware({ app, cors: true });
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer();
