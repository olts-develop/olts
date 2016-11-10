/**
 * Created by martin on 07.11.2016.
 */

const tenantSchema = [`

      type Tenant {
            _id: String
            createUser: String
            createUserId: String
            createDate: String
            modUser: String
            modUserId: String
            modDate: String
            code: String
            description: String
            isActive: Boolean
      }
      
      type Query {
            allTenants: [Tenant]
            getTenant(_id: String, code: String, isActive: Boolean): Tenant
      }
      
      type Mutation {
            createTenant(code: String, description: String, isActive: Boolean): Tenant
      }
      
      schema {
            query: Query
            mutation: Mutation
      }
          
 `];

export default [...tenantSchema];