/**
 * Created by martin on 09.11.2016.
 */

import {merge} from 'lodash';

/** --- resolvers ---  */
import tenantResolvers from './tenants/resolvers';

const resolvers = merge(
      tenantResolvers
      );

//console.log('Schemas resolvers : '+ resolvers)

export default resolvers;
