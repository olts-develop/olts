/**
 * Created by mk on 31.05.16.
 */

import Tenants from '../components/tenants';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import {callMeteorMethod} from '../../../../helpers/callMeteorMethodHelper';
import {tenantsList} from '/appMethods/tenants';



export const composer = ({context, clearErrors}, onData) => {
      const {Store, Meteor, Collections} = context();
      const tenantState = Store.getState();
      const error = tenantState.tenant.tenantReducer.saveStatus.errText

      let tenants
      
      
      const unsubscribe = Store.subscribe(() => {
            //const tenantState = Store.getState();

            if (Meteor.userId() != undefined) {

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


      if (Meteor.userId() != undefined) {

            tenantsList().then((tenants)=>{
                  onData(null,{tenants,error})
            }).catch(( error) => {
                  onData(null, {error})
            })
      }

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
