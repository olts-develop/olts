/**
 * Created by mk on 26.05.16.
 */


import {combineReducer} from 'redux';
import {
      TENANT_CREATE,
      TENANT_EDIT,
      TENANT_GETALL,
      TENANT_GETONE
} from './actionTypes';
import Tenants from '/lib/schemas/organizations/tenants';

function tenantInfo(state = Tenants, action) {
      switch(action.type) {
            case TENANT_CREATE:
                  return Object.assign({}, state, action.data);
            case TENANT_EDIT:
                  return Object.assign({}, state, action.data);
            default:
                  return state;
      }
}


function tenantGet(state = Tenants, action) {
      switch (action.type) {
            case TENANT_GETALL:
                  return Object.assign({}, state, action.data);
            
            case TENANT_GETONE:
                  return Object.assign({}, state, action.tenantId)
      }
      
}

export default combineReducer({
      tenantInfo,
      tenantGet
});