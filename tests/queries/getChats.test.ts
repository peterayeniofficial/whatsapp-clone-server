import { createTestClient } from 'apollo-server-testing';
import { ApolloServer, gql } from 'apollo-server-express';
import schema from '../../schema';

describe('Query.chats', () => {
  it('should fetch all chats', async () => {
    const server = new ApolloServer({ schema });

    const result = await server.executeOperation({
      query: gql`
        query GetChats {
          chats {
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

    // const { query } = createTestClient(server);

    // const res = await query({
    //   query: gql`
    //     query GetChats {
    //       chats {
    //         id
    //         name
    //         picture
    //         lastMessage {
    //           id
    //           content
    //           createdAt
    //         }
    //       }
    //     }
    //   `,
    // });

    expect(result.data).toBeDefined();
    expect(result.errors).toBeUndefined();
    expect(result.data).toMatchSnapshot();
  });
});
