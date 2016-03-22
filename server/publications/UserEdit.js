/**
 * Created by martin on 11.03.2016.
 */
import BaseRoles from '/lib/schemas/authorizations/BaseRoles';
import  {Meteor} from 'meteor/meteor';


export default function () {

    Meteor.publish('baseRoles.list',function () {
        console.log('SERVER baseRoles.list: ' + BaseRoles.find().count())

        return BaseRoles.find();


        /* if(Roles.userIsInRole(this.userId,'dev','support')){
         selector ={globalSelector}
         return BaseRoles.find(selector);
         }else {
         if (Roles.userIsInRole(this.userId, 'SuperAdmin', 'Admin')) {
         const selector = {visible: true, globalSelector}
         return BaseRoles.find(selector);
         }
         }*/

    });

    Meteor.publish('baseRoles.single', function(baseRoleId) {
        check(baseRoleId, String);
        const selector = {_id: baseRoleId};
        return BaseRoles.find(selector)
    });

    Meteor.publish('user.single', function(userId) {
        console.log('SERVER user.single: ' + userId);
        const selector = {_id: userId};
        return Meteor.users.find(selector);
    });

   
}