/**
 * Created by martin on 11.03.2016.
 */
import {BaseRoles} from '/lib/collections';
import  {Meteor} from 'meteor/meteor';


export default function() {
    Meteor.methods({
        'userauth.create'(role, userId){
            Roles.addUsersToRoles(userId,[role]);
        }
    });

}
