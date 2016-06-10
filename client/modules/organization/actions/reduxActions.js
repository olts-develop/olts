/**
 * Created by mk on 31.05.16.
 */

import {
      TENANT_CREATE,
      TENANT_EDIT,
      TENANT_GETALL,
      TENANT_GETONE,
      TENANT_SAVING,
      TENANT_SAVE_DONE,
      TENANT_SAVE_ERROR,
      TENANT_SAVE_RESET,
      TENANT_EDIT_ERROR
} from './actionTypes';

export default {

      createTenant(tenant) {
            return {type: TENANT_CREATE, tenant}
      },

      resetTenantSaveStatus(){
            return {type: TENANT_SAVE_RESET}
      },

      createTenantSaving(){
            return {type: TENANT_SAVING};
      },

      createTenantSaved(){
            return {type: TENANT_SAVE_DONE}
      },

      createTenantError(error) {
            return {type: TENANT_SAVE_ERROR, error}
      },

      editTenant(tenantId, tenant){
            return {type: TENANT_EDIT,tenantId,tenant}
      },

      editTenantError(error) {
            return {type: TENANT_EDIT_ERROR, error}

      },
      
      getTenantOne(tenantId){
            return {type: TENANT_GETONE, tenantId}
      }
}