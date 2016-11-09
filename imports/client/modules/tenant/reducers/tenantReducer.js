/**
 * Created by mk on 26.05.16.
 */


import {combineReducers} from 'redux';
import {
      TENANT_STATUS,
      TENANT_ADD,
      TENANT_EDIT,
      TENANT_UPDATE,
      TENANT_DELETE,
      TENANT_SELECT,
      TENANT_FATAL,
      TENANT_RESET,
      TENANT_INIT,
      TENANT_ERROR,
      TENANT_SELECT_BY_ID,
      TENANT_SELECT_BY_SEARCH,
      TENANT_SELECT_ALL
} from '../actions/actionTypes';

import * as StateFlags from '../../../configs/appStateFlags'


function status( state = {}, action) {

      switch(action.type) {
            case TENANT_STATUS:
                  return {
                        ...state,
                        status: action.status
                  };

            case TENANT_FATAL:
                  return {
                        ...state,
                        error: action.fatal
                  };


            case TENANT_ERROR:
                  return {
                        ...state,
                        error: action.error
                  };

            case TENANT_INIT:
                  return {
                        status: StateFlags.INIT,
                        error:{},
                        fatal:{}
                  };

            case TENANT_RESET:
                  return {
                        status: StateFlags.RESET,
                        error:{},
                        fatal:{}
                  };



            default:
                  return state;
      }
}


function select(state = {}, action) {
      switch (action.type) {
            case TENANT_SELECT_BY_ID:
                  return {
                        ...state,
                        tenantId: action.tenantId
                  };

            case TENANT_SELECT_BY_SEARCH:

                  return {
                        ...state,
                        search: action.search
                  };

            case TENANT_SELECT_ALL:
                  return {
                        ...state,
                        selectAll: true
                  };

            case TENANT_SELECT:
                  return {
                        ...state,
                        tenants: action.tenant
                  };

            default:
                  return state;

      }

}

function createOrEdit(state = 0, action) {
      switch (action.type){
            case TENANT_EDIT:
                  return {
                        ...state,
                        tenant: action.tenant
                  };

            case TENANT_UPDATE:
                  return {
                        ...state,
                        tenant: action.tenant
                  };

            case TENANT_ADD:
                  return {
                        ...state,
                        tenant: action.tenant
                  };

            case TENANT_DELETE:
                  return {
                        ...state,
                        tenantId: action.tenant
                  };

            default:
                  return state;
      }

}

export default combineReducers({
      status,
      select,
      createOrEdit
});