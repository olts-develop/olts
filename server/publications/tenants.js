/**
 * Created by mk on 04.05.16.
 */

import {Tenants} from '/lib/collections';
import {tenantsList} from '/appMethods/tenants';
import  {Meteor} from 'meteor/meteor';

export default function () {

      Meteor.methods({

            'tenants.list'(){
                  console.log('SERVER tenant list')
                  
                  return tenantsList().then((tenants) => {
                        return tenants;
                  }).catch(( error ) =>{
                        throw new Meteor.Error(error)
                  })
                  

            },

            'tenant.single'(tenantId) {
                  return new Promise((resolve, reject) => {
                        try {

                              const selector = {_id: tenantId}
                              const tenant = Tenants.find(selector);

                              resove(tenant);

                        } catch (ex) {
                              reject(ex)

                        }

                  })


            }
      });

}


