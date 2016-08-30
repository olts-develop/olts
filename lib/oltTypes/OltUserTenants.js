/**
 * Created by mk on 09.05.16.
 * 
 * used in Employees, currentUser
 */

import OltDefaultOrg from './OltDefaultOrg'

const OltUserTenants = new SimpleSchema({

      tenantId: {
            type: String
      },

      organizationId:{
            type:[String],
            minCount: 1
      },
      
      defaultOrg:{
            type: OltDefaultOrg,
            optional: true
      }

})

export default OltUserTenants
