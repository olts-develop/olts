/**
 * Created by mk on 04.05.16.
 */

import {Tenants} from '/lib/collections';
import  {Meteor} from 'meteor/meteor';

export default function () {

      Meteor.publish('tenants.list', function () {
            console.log('SERVER tenants.list: ' + Tenants.find().count())

            return Tenants.find({},{sort: {tenant: 1}}).fetch();
      });

      Meteor.publish('tenant.single', function (tenantId) {
            console.log('SERVER tenants.single: ' + tenantId)
            
            check(tenantId, String);
            
            const selector = {_id: tenantId};

            return Tenants.find(selector);
      });
                 
}
      