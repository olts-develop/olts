/**
 * Created by martin on 09.11.2016.
 */

import {merge} from 'lodash';

/** --- resolvers ---  */
import tenantResolvers from './tenants/resolvers';

const rootResolvers = {...};

const resolvers = merge(
      rootResolvers,
      tenantResolvers
      );

export default resolvers;
