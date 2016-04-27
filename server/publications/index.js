import employee from './employee';
import UserAuth from './UserAuth';
import UserEdit from './UserEdit';
import languages from './languages'

export default function() {
    employee();
    UserAuth();
    UserEdit();
    languages();
}
