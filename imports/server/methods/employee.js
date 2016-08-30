/**
 * Created by mk on 09.05.16.
 */


import {Meteor} from 'meteor/meteor';


export default function () {
      
      Meteor.methods({
            
            'ensureUserTenantAllowed' (tenantId){
                  
                  console.log('SERVER ensureUserTenantAllowed: tenantId: '+tenantId)
                  
                  return true
                  
                  
            },

            'ensureUserOrgAllowed' (organizationId){

                  console.log('SERVER ensureUserTenantAllowed: orgtasnizationId: '+organizationId)

                  
                  return true
            }
            
            
            
            
            
      })
      
}