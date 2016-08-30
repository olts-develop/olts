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

    Meteor.methods({
        'userauth.setGroup'(userId,groupRoles,groupName){
            console.log('SERVER setGroups: ' + groupName)
            Roles.addUsersToRoles(userId,groupRoles,groupName);
        }
    });

}