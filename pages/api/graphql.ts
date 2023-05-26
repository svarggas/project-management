import { NextRequest, NextResponse } from 'next/server';
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';

import typeDefs from '~/graphql/graph';
import resolvers from '~/graphql/resolvers';
import { CustomContext } from '~/graphql/index.d';
import initContext from '~/graphql/context';

const server = new ApolloServer<CustomContext>({
  typeDefs,
  resolvers,
});

export default startServerAndCreateNextHandler<NextRequest, CustomContext>(server, {
  context: initContext(),
});