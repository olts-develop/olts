/**
 * Created by martin on 07.03.2016.
 */

import Employees from './schemas/Employee';
import Tenants from './schemas/organisations/Tenants';
import Organisations from './schemas/organisations/Organisations';
import BaseRoles from './schemas/authorizations/BaseRoles';
import Groups from './schemas/authorizations/Groups';


export default function () {

    Employees();
    Tenants();
    Organisations();
    BaseRoles();
    Groups();
}
