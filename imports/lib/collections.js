/**
 * Created by martin on 07.03.2016.
 */

import {Mongo} from 'meteor/mongo';

const Tenants = new Mongo.Collection('tenants');


import Employees from './schemas/employees';
import BaseRoles from './schemas/authorizations/BaseRoles';
import Groups from './schemas/authorizations/Groups';
import currentUser from './schemas/authorizations/currentUser';
import Languages from './schemas/general/languages';
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
