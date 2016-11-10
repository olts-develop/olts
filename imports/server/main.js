
import publications from './publications';
import methods from './methods';

publications();
methods();

import configureGraphQLServer from './configs/configure-server';
import resolvers from './schemas/resolvers'
import schema from './schemas/schemas'

configureGraphQLServer({
      schema,
      resolvers,
});