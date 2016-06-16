/**
 * Created by mk on 31.05.16.
 */


import tenantReduxActions from './reduxActions';
import {Random} from 'meteor/random';
import Tenants from './../../../../lib/schemas/organizations/tenants';




export default {
      
      initTenant({dispatch}) {
            dispatch(tenantReduxActions.initTenant())
      },

      resetStatus({dispatch}) {
            dispatch(tenantReduxActions.resetTenant())
      },

      addTenant({dispatch, StateFlags}, code, description) {


            if (!code) {
                        dispatch(tenantReduxActions.setTenantError('Tenant code is required'))
            }

            if (!description) {                 
                        dispatch(tenantReduxActions.setTenantError('Tenant description is required.'));
            }

            if (!code||!description){
                  return (dispatch(tenantReduxActions.setTenantStatus(StateFlags.ERROR)));
            }

            dispatch(tenantReduxActions.setTenantStatus(StateFlags.ADD));




            let newTenant = {
                  code: code,
                  description: description
            }

            dispatch(tenantReduxActions.createTenant(newTenant))

            Meteor.call('tenant.add', newTenant, (result, error) => {


                  if (error) {

                        let errText = error.error + "  /  " + error.message
                        dispatch(tenantReduxActions.setTenantStatus(StateFlags.ERROR))

                        return (dispatch(tenantReduxActions.setTenantError(errText)));

                  } else {


                        if (result) {

                              dispatch(tenantReduxActions.createTenant(result))
                        }
                  }

                  console.log("SERVER tenant.add - new tenantTd:   " + result);

                  //dispatch(tenantReduxActions.createTenant(result))


            });

      },

      getTenant({dispatch, StateFlags}, tenantId) {
            
            console.log("locicAction getTenant:   " + tenantId);

            if (tenantId){
                  dispatch(tenantReduxActions.setTenantStatus(StateFlags.ERROR))

                  return (dispatch(tenantReduxActions.selectTenantById(tenantId)));

            }else {
                  return (dispatch(tenantReduxActions.setTenantError('Please select a tenant from list')));
            }


      },

      editTenantStatus({dispatch},tenant){
            //TODO test whether Store tenantId = tenant.id
            if (tenant != undefined){
                  dispatch(tenantReduxActions.editTenant(tenant))
            }


      }
}