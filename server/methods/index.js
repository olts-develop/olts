import startup from './startup';
import UserAuth from './UserAuth';
import Users from './Users';

export default function() {
    startup();
    UserAuth();
    Users();
}
