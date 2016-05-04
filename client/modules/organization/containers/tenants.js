/**
 * Created by mk on 04.05.16.
 */

import tenants from '../components/tenants.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, tenantId, organizationId, clearErrors}, onData) => {
      const {LocalState, Meteor, Collections} = context();
      const error = LocalState.get('TENANT_EDIT_ERROR')

      let tenentsList

      const userId = Meteor.userId();

      if (userId !== undefined ) {

            employee = Collections.Employees.findOne(userID = userId);

            if (employee.tenant == 'olts' && employee.organization == 'developer') {

                  if (Meteor.subscribe('tenants.list').ready()) {
                        tenentsList = Collections.Tenants.find({},{sort: {tenant: 1}}).fetch();
                  }

                  onData(null, {tenantsList})

            } else {
                  onData(null, {error})
            }

      }else {

            onData(null, {error})
      }

      // clearErrors when unmounting the component
      return clearErrors;

};

export const depsMapper = (context, actions) => ({
     
      context: () => context
})

export default composeAll(
      composeWithTracker(composer),
      useDeps(depsMapper)
)(tenants);