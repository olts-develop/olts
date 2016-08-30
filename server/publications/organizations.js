/**
 * Created by mk on 09.05.16.
 */


import {Organization} from '/lib/collections';
import  {Meteor} from 'meteor/meteor';

export default function () {

      Meteor.publish('organization.list', function () {
            console.log('SERVER tenants.list: ' + Tenants.find().count())

            return Tenants.find({},{sort: {tenant: 1}}).fetch();
      });

      Meteor.publish('organization.single', function (tenantId) {
            console.log('SERVER tenants.single: ' + tenantId)

            check(tenantId, String);

            const selector = {_id: tenantId};

            return Tenants.find(selector);
      });

}
      