/**
 * Created by mk on 31.05.16.
 */

import Tenants from '../components/tenants';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';


export const composer = ({context}, onData) => {
      const {Store, Meteor, Collections} = context();
      const state = Store.getState().tenant.tenantReducer;
      const error = state.status.error;
      const tenantId = state.select.tenantId;

      onData(null,{error})
      
      
      const unsubscribe = Store.subscribe(() => {

            const state = Store.getState().tenant;
            const error = state.tenantReducer.status.error;

            onData(null,{error})

      });


      // if (Meteor.userId() != undefined) {
      //
      //       if (Meteor.subscribe('tenants.list').ready()) {
      //             tenants = Collections.Tenants.find({}, {sort: {code: 1}}).fetch();
      //       } else {
      //             tenants = Collections.Tenants.find({}, {sort: {code: 1}}).fetch();
      //       }
      //
      //       if (tenantId != undefined) {
      //             if (Meteor.subscribe('tenants.single', tenantId)){
      //                   tenant = Collections.Tenants.findOne(tenantId);
      //       }else {
      //                   tenant = Collections.Tenants.findOne(tenantId);
      //             }
      //
      //       }
      //
      //       onData(null, {tenants, tenant, error})
      // } else {
      //       onData(null,{})
      // }

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
)(Tenants);
