/**
 * Created by mk on 31.05.16.
 */


import tenantReduxActions from './reduxActions';
import {Random} from 'meteor/random';
import Tenants from './../../../../lib/schemas/organizations/tenants';


export default {
      
      initTenant({dispatch}) {
            dispatch(tenantReduxActions.resetTenantSaveStatus())
            dispatch(tenantReduxActions.getTenantOne(''));
            let tenant = {
                  code:'',
                  description:''
            }

            dispatch(tenantReduxActions.createTenant(tenant));
            
      },

      resetSaveStatus({dispatch}) {
            dispatch(tenantReduxActions.resetTenantSaveStatus())
      },

      addTenant({dispatch, Store}, code, description) {

            if (!code) {                  
                        dispatch(tenantReduxActions.createTenantError('Tenant code is required.'));                  
            }

            if (!description) {                 
                        dispatch(tenantReduxActions.createTenantError('Tenant description is required.'));                  
            }

            dispatch(tenantReduxActions.createTenantSaving());

            let localState = Store.getState()

            console.log("State addtenant: " + localState)


            let newTenant = {
                  code: code,
                  description: description
            }

            dispatch(tenantReduxActions.createTenant(newTenant))

            Meteor.call('tenant.add', newTenant, (result, error) => {


                  if (error) {

                        let errText = error.error + "  /  " + error.message

                        dispatch(tenantReduxActions.createTenantError(errText));

                  } else {


                        if (result) {

                              dispatch(tenantReduxActions.createTenant(result))
                        }
                  }

                  console.log("SERVER tenant.add - new tenantTd:   " + result);

                  //dispatch(tenantReduxActions.createTenant(result))


            });

      },

      getTenant({dispatch}, tenantId) {

            console.log("locicAction getTenant:   " + tenantId);

            if (tenantId){
                        dispatch(tenantReduxActions.getTenantOne(tenantId));
            }else {
                  dispatch(tenantReduxActions.editTenantError('Please select a tenant from list'))
            }


      },

      editTenantStatus({dispatch},tenant){
            //TODO test whether Store tenantId = tenant.id
            if (tenant != undefined){
                  dispatch(tenantReduxActions.editTenant(tenant))
            }


      }
}