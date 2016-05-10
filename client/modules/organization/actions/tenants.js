/**
 * Created by mk on 04.05.16.
 */

export default {

      getOrganizations({LocalState, Collections}, tenantId) {


            if (!tenantId) {
                  return LocalState.set('TENANT_EDIT_ERROR', 'Tenant is required.');
            }

            LocalState.set('TENANT_EDIT_ERROR', null);

      },

      getOrganization({Meteor, LocalState, FlowRouter, Collections}, tenantId, organizationId) {


            if (!tenantId) {
                  return LocalState.set('TENANT_EDIT_ERROR', 'Tenant is required.');
            }

            if (!organizationId) {
                  return LocalState.set('TENANT_EDIT_ERROR', 'Organization is required.');
            }

            LocalState.set('TENANT_EDIT_ERROR', null);

            const isDevelop = AppConfig.isDevelop();


      },
      
      addTenant({LocalState, Collections}, tenantId ,tenant, organizationId , organizsation) {

            LocalState.set('TENANT_EDIT_ERROR', null)

            Meteor.call('tenant.add', tenant, (err, result) => {
                  if (err) {
                        return LocalState.set('TENANT_EDIT_ERROR', err.message);
                  }
                  if (result.tenantId) {
                        console.log("New tendentID: "+ result.tenantId)
                  }


            });



            console.log (tenant)
            console.log (organizsation)

            
            
            
            
      },

      clearErrors({LocalState}) {
            return LocalState.set('TENANT_EDIT_ERROR', null);
      }
}