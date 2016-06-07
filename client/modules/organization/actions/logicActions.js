/**
 * Created by mk on 31.05.16.
 */


import tenantReduxActions from './reduxActions';
import {Random} from 'meteor/random';
import Tenants from './../../../../lib/schemas/organizations/tenants';


export default {
      
      resetSaveStatus({dispatch}) {
                  dispatch(tenantReduxActions.resetTenantSaveStatus())
      },
      
      addTenant({dispatch, Store}, code, description) {
            
            if (!code) {
                  return() => {
                        dispatch(tenantReduxActions.createTenantError('Tenant code is required.'));
                  }
            }

            if (!description) {
                  return() => {
                        dispatch(tenantReduxActions.createTenantError('Tenant description is required.'));
                  }
            }

            dispatch(tenantReduxActions.createTenantSaving());

            let localState=Store.getState()

            console.log("State addtenant: "+localState)
                                                                                                                                                           

            let newTenant = {
                  code: code,
                  description: description
            }

            Tenants.insert(newTenant, function(error,result){
                        dispatch(tenantReduxActions.createTenant(newTenant))

                        if (error) {

                              let errText = error.error + "  /  " + error.message

                              dispatch(tenantReduxActions.createTenantError(errText));

                        }


                  console.log("SERVER tenant.add - new tenantTd:   " + result);

                  //dispatch(tenantReduxActions.createTenant(result))


            })

            
            Meteor.call('tenant.add', code ,description, (error) => {
                  if (error) {
                        return() => {
                              dispatch(tenantReduxActions.createTenantError( err.message))
                        }
                  } else {
                        //dispatch(tenantReduxActions)
                  }
            
            });
      }
}