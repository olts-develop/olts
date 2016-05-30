/**
 * Created by mk on 30.05.16.
 */

import {
      TENANT_CREATE,
      TENANT_EDIT,
      TENANT_GETALL,
      TENANT_GETONE
} from './actionTypes';

export default {

      getOneTenant(tenantId) {
            console.log('reduxActions - getOneTenant: '+tenantId);
            return {type: TENANT_GETONE, tenantId}
      },

      editTenant(data) {
            console.log('reduxActions - editTenant: '+data);
            return {type: TENANT_EDIT, data}
      },

      createTenant(data) {
            console.log('reduxActions - createTenant: '+data);
            return {type: TENANT_CREATE, data}
      },

      getAllTenant(data) {
            console.log('reduxActions - getAllTenant: '+data);
            return {type: TENANT_GETALL, data}
      }

}