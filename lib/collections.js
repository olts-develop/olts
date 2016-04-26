/**
 * Created by martin on 07.03.2016.
 */

import Employees from './schemas/Employee';
import Tenants from './schemas/organizations/Tenants';
import BaseRoles from './schemas/authorizations/BaseRoles';
import Groups from './schemas/authorizations/Groups';
import currentUser from './schemas/authorizations/currentUser';


export {

      Employees,
      Tenants,
      BaseRoles,
      Groups,
      currentUser
}
