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
            
            const selector = {_id: tenantId}


            return Tenants.find(selector);
      });
                 
}
      