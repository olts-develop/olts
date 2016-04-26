
import startup from './startup';
import UserEdit from './UserEdit';
import users from './users'


export default function() {
    startup();
    UserEdit();
    users();

}
