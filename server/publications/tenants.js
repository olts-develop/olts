/**
 * Created by mk on 04.05.16.
 */

import {Tenants} from '/lib/collections';
import  {Meteor} from 'meteor/meteor';

export default function () {

      Meteor.publish('tenants.list', function () {

            return Tenants.find({},{sort: {code: 1}});
      });

      Meteor.publish('tenant.single', function (tenantId) {
            console.log('SERVER tenant.single: ' + tenantId)

            const currentUser =  Meteor.user();

            if (currentUser == undefined){
                  throw new Meteor.Error('LOGGED-OUT','No current user found','You must be looged in to edit tenants');
                  return;

                  // else test it current user is OLTS

            }
            
            const selector = {_id: tenantId}


            return Tenants.find(selector);
      });

}
      