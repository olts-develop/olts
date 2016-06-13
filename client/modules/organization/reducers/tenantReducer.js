/**
 * Created by mk on 26.05.16.
 */


import {combineReducers} from 'redux';
import {
      TENANT_CREATE,
      TENANT_EDIT,
      TENANT_GETALL,
      TENANT_GETONE,
      TENANT_SAVING,
      TENANT_SAVE_DONE,
      TENANT_SAVE_ERROR,
      TENANT_SAVE_RESET
} from './../actions/actionTypes';

import * as StateFlags from '/client/configs/appStateFlags';

function tenantInfo(state = {}, action) {
      switch(action.type) {
            case TENANT_CREATE:
                  return Object.assign({}, state, action.tenant);
            case TENANT_EDIT:
                  return Object.assign({}, state, action.tenant);
            default:
                  return state;
      }
}


function tenantGet(state = {}, action) {
      switch (action.type) {
            case TENANT_GETALL:
                  return Object.assign({}, state, action.data);
            
            case TENANT_GETONE:
                  console.log('tenantReducer TENANT_GETONE:' +action.tenantId);
                  return Object.assign({}, state, {
                        tenantID: action.tenantId
                  });
            default:
                  return state;
      }
      
}

function saveStatus(state=0, action){
      switch (action.type) {
            case TENANT_SAVING:
                  return StateFlags.CRUD;
            case TENANT_SAVE_DONE:
                  return StateFlags.Done;
            case TENANT_SAVE_ERROR:
                  return Object.assign({}, state, {
                             saveStatus: StateFlags.Error,
                              errText: action.error
                  })


                  
            case TENANT_SAVE_RESET:
                  return StateFlags.Reset
            default:
                  return state;
      }
}

function createOrEdit(state = 0, action) {
      switch (action.type){
            case TENANT_EDIT:
                  return Object.assign({}, state, {
                        editStatus: StateFlags.CRUD,
                        tenantId: action.tenentId,
                        tenant: action.tenant
                  })

            default:
                  return state;
      }

}

export default combineReducers({
      tenantInfo,
      tenantGet,
      saveStatus,
      createOrEdit
});