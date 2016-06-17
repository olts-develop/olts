/**
 * Created by martin on 16.06.2016.
 */
/**
 * Created by mk on 31.05.16.
 */

import TenantDetail from '../components/tenantDetail';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';


export const composer = ({context}, onData) => {
    const {Store, Meteor, Collections} = context();
    const state = Store.getState().tenant.tenantReducer;
    const error = state.status.error;
    const tenantId = state.select.tenantId;
    const tenantState = state.status.status
    
    let tenant

    if (tenantId != undefined) {
        if (Meteor.subscribe('tenants.single', tenantId)){
            tenant = Collections.Tenants.findOne(tenantId);
        }else {
            tenant = Collections.Tenants.findOne(tenantId);
        }
        onData(null, {tenant, tenantId, tenantState, error})
    } else {
        onData(null,{error})
    }


    const unsubscribe = Store.subscribe(() => {

        const state = Store.getState().tenant.tenantReducer;
        const error = state.status.error;
        const tenantState = state.status.status
        const tenantId = state.select.tenantId;

        if (tenantId != undefined && tenant == undefined) {
            const selector = {_id: tenantId};

            if (Meteor.subscribe('tenants.single', tenantId)){
                tenant = Collections.Tenants.find(selector);
            }else {
                tenant = Collections.Tenants.find(selector);
            }
            onData(null, {tenant, tenantState, error})
        } else {
            onData(null, {error})
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
)(TenantDetail);
