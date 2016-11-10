/**
 * Created by martin on 07.11.2016.
 *
 * Mongo Schemas
 */


/** --- schemas ---  */
import tenantSchema from './tenants/schema';

const schema = [
      ...tenantSchema
]


console.log('Schemas Server : '+ schema)

export default schema;
