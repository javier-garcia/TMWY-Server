import { makeExecutableSchema } from 'graphql-tools';
import { graphqlExpress } from 'apollo-server-express';
import merge from 'lodash.merge';
import { eventType, eventResolvers } from './event';
import { vehicleType, vehicleResolvers } from './vehicle';
import { passengerType, passengerResolvers } from './passenger';

const baseSchema = `
  schema {
    query: Query
    mutation: Mutation
  }
`;

export const schema = makeExecutableSchema({
  typeDefs: [baseSchema, eventType, vehicleType, passengerType],
  resolvers: merge({}, eventResolvers, vehicleResolvers, passengerResolvers),
});

export const graphQLRouter = graphqlExpress(req => ({
  schema,
  context: {
    req,
  },
  formatError: err => {
    return { status: 400, message: err.message };
  },
}));
