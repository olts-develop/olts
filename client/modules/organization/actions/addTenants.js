/**
 * Created by mk on 04.05.16.
 */


import tenantReduxActions from './reduxActions';



export default {

      handleChange({LocalState}, field, value){

           

            let nextState = {}
            nextState[field] = value
            LocalState.set(nextState)
            
      },


      addTenant({LocalState}, code ,description) {
            

            if (!code) {
                  return LocalState.set('TENANT_EDIT_ERROR', 'Tenant code is required.');
            }

            if (!description) {
                  return LocalState.set('TENANT_EDIT_ERROR', 'Tenant description is required.');
            }


            LocalState.set('TENANT_EDIT_ERROR', null)

            Meteor.call('tenant.add', code ,description, (error) => {
                  if (error) {
                        return LocalState.set('TENANT_EDIT_ERROR', err.message);
                  }

            });
            
      },

      getTenant({LocalState}, tenantId){
            
            let normalizedTenant = normalize(Tenants)
            console.log("normalizedTenant: "+normalizedTenant)
            

            if (!tenantId) {
                  return LocalState.set('TENANT_EDIT_ERROR', 'Please select a tenant from the list.');
            }
                  console.log("Action tenantID: "+tenantId)

                  return LocalState.set("tenantId",tenantId)

            
                  

      },

      clearErrors({LocalState}) {
            return LocalState.set('TENANT_EDIT_ERROR', null);
      }
}