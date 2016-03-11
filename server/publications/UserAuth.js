/**
 * Created by martin on 11.03.2016.
 */
import {BaseRoles} from '/lib/collections';
import globalSelector from '/lib/globalSelector'
import  {Meteor} from 'meteor/meteor';


export default function () {
    Meteor.publish('baseRoles.list',function () {
        if(Roles.userIsInRole(this.userId,'dev','support')){
            selector ={globalSelector}
            return BaseRoles.find(selector);
        }else {
            if (Roles.userIsInRole(this.userId, 'SuperAdmin', 'Admin')) {
                const selector = {visible: true, globalSelector}
                return BaseRoles.find(selector);
            }
        }

    });

    Meteor.publish('baseRoles.single', function(baseRoleId) {
        check(baseRoleId, String);
        const selector = {_id: baseRoleId};
        return BaseRoles.find(selector)
    });

    Meteor.publish('users.single', function(uerId) {
        if (Roles.userIsInRole(this.userId, 'SuperAdmin', 'Admin'))
        check(uerId, String);
        const selector = {_id: uerId, globalSelector};
        return BaseRoles.find(selector)
    });
}