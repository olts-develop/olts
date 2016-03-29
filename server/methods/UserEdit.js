/**
 * Created by martin on 24.03.2016.
 */
import  {Meteor} from 'meteor/meteor';


export default function() {
    Meteor.methods({
        'userauth.setRole'(userId, role){
            Roles.addUsersToRoles(userId,[role]);
        }
    });



}