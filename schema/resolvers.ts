import { DateTimeResolver, URLResolver } from 'graphql-scalars';
import { chats, messages } from '../db';

const resolvers = {
  Date: DateTimeResolver,
  URL: URLResolver,

  Chat: {
    lastMessage(chat: any) {
      const lastMessage = chat.messages[chat.messages.length - 1];
      return messages.find((m) => m.id === lastMessage);
    },

    messages(chat: any) {
      return messages.filter((m) => chat.messages.includes(m.id));
    },
  },

  Query: {
    chats() {
      return chats;
    },

    chat(root: any, { chatId }: any) {
      return chats.find((c) => c.id === chatId);
    },
  },
};

export default resolvers;
