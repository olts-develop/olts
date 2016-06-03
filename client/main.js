/**
 * Created by martin on 07.03.2016.
 */

//Mantra
import {createApp} from 'mantra-core';
import initContext from './configs/context';

//Redux
import {combineReducers} from 'redux'

//Modules
import coreModule from './modules/core';
import layoutModule from './modules/appLayout';
import logonModule from './modules/logon';
import authorizationModule from './modules/authorization';
import orderModule from './modules/order';
import agendaModule from './modules/agenda';
import currentUserModule from './modules/currentUser';
import organizationModule from './modules/organization';
import oltTemplates from './modules/oltTemplates';

//Reducers

const reducers = combineReducers({
      ...organizationModule.reducers
})

/**init context
 * Application Context is available to all actions and containers,
 * so this is the place for shared variables in your app.
 * */
const context = initContext({reducers});

//create App
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(layoutModule);
app.loadModule(logonModule);
app.loadModule(authorizationModule);
app.loadModule(orderModule);
app.loadModule(agendaModule);
app.loadModule(currentUserModule);
app.loadModule(organizationModule);
app.loadModule(oltTemplates);

app.init();