import { ApolloServer, gql } from 'apollo-server-express';
import schema from '../../schema';

describe('Query.chat', () => {
  it('should fetch specified chat', async () => {
    const server = new ApolloServer({ schema });

    const result = await server.executeOperation({
      variables: { chatId: '1' },
      query: gql`
        query GetChat($chatId: ID!) {
          chat(chatId: $chatID) {
            id
            name
            picture
            lastMessage {
              id
              content
              createdAt
            }
          }
        }
      `,
    });

    expect(result.data).toBeDefined();
    expect(result.errors).toBeUndefined();
    expect(result.data).toMatchSnapshot();
  });
});
