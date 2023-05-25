import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { PrismaClient } from '@prisma/client';

import typeDefs from '~/graphql/graph';

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    hello: () => 'world',
    getOrganization: async (_parent: any, args: any, _ctx: any) => {
      const { id } = args;
      const data = await prisma.organization.findUnique({
        where: { id }
      });
      return data;
    },
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export default startServerAndCreateNextHandler(server, {
  context: async (req, res) => ({ req, res }),
});