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

      setUpdateStatus({dispatch, StateFlag}, tenant){
            dispatch(tenantReduxActions.selectTenant(tenant))
      },

      handleChange({dispatch}, tenant) {
            console.log('handleChange: '+tenant.code+'    '+tenant.description)
            dispatch(tenantReduxActions.editTenant(tenant))
      },

      addTenant({dispatch, StateFlags}, code, description) {


            if (!code) {
                        dispatch(tenantReduxActions.setTenantError('code', 'Tenant code is required'))
            }

            if (!description) {                 
                        dispatch(tenantReduxActions.setTenantError('description','Tenant description is required.'));
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

                              dispatch(tenantReduxActions.createTenant(result));
                              dispatch(tenantReduxActions.setTenantStatus(StateFlags.RESET));
                        }
                  }

                  console.log("SERVER tenant.add - new tenantTd:   " + result);

                  


            });

      },
      
      updateTenant({dispatch, StateFlags}, tenant){
            dispatch(tenantReduxActions.setTenantStatus(StateFlags.UPDATE))
            dispatch(tenantReduxActions.editTenant(tenant))
            
      },

      getTenant({dispatch, StateFlags}, tenantId) {
            
            console.log("locicAction getTenant:   " + tenantId);

            if (tenantId){
                  dispatch(tenantReduxActions.setTenantStatus(StateFlags.SELECTED))

                  dispatch(tenantReduxActions.selectTenantById(tenantId));
                  return (tenantId);

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