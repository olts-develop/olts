/**
 * Created by martin on 10.11.2016.
 */

import express from 'express';

import { graphqlExpress , graphiqlExpress } from 'graphql-server-express';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import bodyParser from 'body-parser';

function configureGraphQLServer(options = {}) {

      const {
            schema,
            resolvers,
            port = 4000,
            urlName = 'graphql',
            graphiql = true,
            pretty = true,
            context = {},
            ...others,
      } = options;


      const GRAPHQL_PORT = port;

      const graphQLServer = express();

      const executableSchema = makeExecutableSchema({
            typeDefs: schema,
            resolvers: resolvers,
            allowUndefinedInResolve: false,
            printErrors: true,
      });

      graphQLServer.use(`/${urlName}`,bodyParser.json(), graphqlExpress({
            schema: executableSchema,
            context: context
      }));

      graphQLServer.use('/graphiql', graphiqlExpress({
            endpointURL: `/${urlName}`,
      }));

      graphQLServer.listen(GRAPHQL_PORT,() => console.log(
            `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}
            Checkout http://localhost:${GRAPHQL_PORT}/graphiql to use GraphiQL`
      ));
}

export default configureGraphQLServer;
