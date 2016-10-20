/**
 * Created by martin on 11.03.2016.
 */
import {BaseRoles} from '/imports/lib/collections';
import globalSelector from '/imports/lib/globalSelector'
import  {Meteor} from 'meteor/meteor';


export default function () {

        Meteor.publish('users.list', function(){
        console.log('SERVER users.list')
        return Meteor.users.find()
    });
}