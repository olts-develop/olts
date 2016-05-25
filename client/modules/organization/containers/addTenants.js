/**
 * Created by mk on 04.05.16.
 */

import addTenants from '../components/addTenants.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors}, onData) => {
      const {LocalState, Meteor, Collections} = context();
      const error = LocalState.get('TENANT_EDIT_ERROR');
      const tenantId = LocalState.get('tenantId');

      let tenants,tenant


      if (Meteor.userId() != undefined){
            // test if user is OLT


            if (Meteor.subscribe('tenants.list').ready()) {
                  tenants = Collections.Tenants.find({}, {sort: {code: 1}}).fetch();
            }else {
                  tenants = Collections.Tenants.find({}, {sort: {code: 1}}).fetch();
            }

            if (tenantId != undefined) {
                  if (Meteor.subscribe('tenant.single', tenantId).ready()) {
                        tenant = Collections.Tenants.findOne(tenantId);
                  } else {

                        tenant = Collections.Tenants.findOne(tenantId);
                  }
            }

            
            console.log("Container.Tenants: tenantsList: " + _.size(tenants))

            onData(null, {tenants, tenant, error})



      }else {

            onData(null, {error})
      }



// clearErrors when unmounting the component
      return clearErrors;

};

export const depsMapper = (context, actions) => ({
      addTenant: actions.addtenants.addTenant,
      getTenant: actions.addtenants.getTenant,
      handleChange: actions.addtenants.handleChange,
      clearErrors: actions.addtenants.clearErrors,
      context: () => context
})

export default composeAll(
      composeWithTracker(composer),
      useDeps(depsMapper)
)(addTenants);
