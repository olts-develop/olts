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
      
      addTenant({LocalState}, tenant, organizsation) {

            LocalState.set('TENANT_EDIT_ERROR', null)
            
            console.log (tenant.forEach(printjson))
            console.log (organizsation.forEach(printjson))

            return true
            
            
            
      },

      clearErrors({LocalState}) {
            return LocalState.set('TENANT_EDIT_ERROR', null);
      }
}