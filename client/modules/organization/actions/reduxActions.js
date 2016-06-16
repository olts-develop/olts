/**
 * Created by mk on 31.05.16.
 */

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

} from './actionTypes';

export default {
      
      setTenantStatus(status){
            return {type: TENANT_STATUS, status}
      },

      createTenant(tenant) {
            return {type: TENANT_ADD, tenant}
      },

      editTenant(tenant){
            return {type: TENANT_EDIT,tenant}
      },

      updateTenant(tenant){
            return {type: TENANT_UPDATE,tenant}
      },
      
      deleteTenant(tenant){
            return {type: TENANT_DELETE, tenant}
      },       
      
      selectTenant(tanants){
            return {type: TENANT_SELECT, tenants}
      },

      setTenantFatalError(fatal) {
            return {type: TENANT_FATAL, fatal}
      },
      
      resetTenant(){
            return{type: TENANT_RESET}
      },

      initTenant(){
            return{type: TENANT_INIT}
      },

      setTenantError(error) {
            return {type: TENANT_ERROR, error}
      },

      selectTenantById(tenantId){
            return {type: TENANT_SELECT_BY_ID, tenantId}
      },

      selectTenantBySearch(search){
            return {type: TENANT_SELECT_BY_SEARCH, search}
      },

      selectTenantAll() {
            return {type: TENANT_SELECT_ALL}
      }
}