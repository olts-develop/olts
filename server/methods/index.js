
import startup from './startup';
import UserEdit from './UserEdit';
import users from './users';
import tenants from './tenants';


export default function() {
    startup();
    UserEdit();
    users();
    tenants();

}
