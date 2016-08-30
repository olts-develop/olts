/**
 * Created by martin on 07.03.2016.
 */

import Employees from './schemas/employees';
import BaseRoles from './schemas/authorizations/BaseRoles';
import Groups from './schemas/authorizations/Groups';
import currentUser from './schemas/authorizations/currentUser';
import Languages from './schemas/general/languages';
import Tenants from './schemas/organizations/tenants';
import Organizations from './schemas/organizations/organizations'


export {

      Employees,
      BaseRoles,
      Groups,
      currentUser,
      Languages,
      Tenants,
      Organizations
}
