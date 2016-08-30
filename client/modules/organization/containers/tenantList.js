/**
 * Created by mk on 14.06.16.
 */

import TenantList from '../components/tenantList';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';


export const composer = ({context, clearErrors}, onData) => {
      const {Store, Meteor, Collections} = context();
      const state = Store.getState().tenant.tenantReducer;
      const error = state.status.error;
      //const tenantId = state.select.tenantId;

      let tenants

      if (Meteor.userId() != undefined) {

            //TODO check if user is olt

            if (Meteor.subscribe('tenants.list').ready()) {
               tenants = Collections.Tenants.find({}, {sort: {code: 1}}).fetch();
            } else {
                tenants = Collections.Tenants.find({}, {sort: {code: 1}}).fetch();
            }

            onData(null, {tenants, error})
      } else {
            onData(null,error)
      }

      const unsubscribe = Store.subscribe(() => {

            if (Meteor.userId() != undefined) {
                  
                  //TODO check if user is olt

                  if (Meteor.subscribe('tenants.list').ready()) {
                        tenants = Collections.Tenants.find({}, {sort: {code: 1}}).fetch();
                  } else {
                        tenants = Collections.Tenants.find({}, {sort: {code: 1}}).fetch();
                  }

                  onData(null, {tenants, error})
            } else {
                  onData(null,error)
            }
      });


      const cleanup = () => {
            unsubscribe();
      }

      return cleanup;
};

export const depsMapper = (context, actions) => {
      return {
            ...actions.tenantsLogicActions,
            context: () => context
      }
};

export default composeAll(
      composeWithTracker(composer),
      useDeps(depsMapper)
)(TenantList);
