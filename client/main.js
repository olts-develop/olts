/**
 * Created by martin on 07.03.2016.
 */
import {createApp} from 'mantra-core';
import initContext from './configs/context';

//modules
import coreModule from './modules/core';
import layoutModule from './modules/appLayout';
import logonModule from './modules/logon';
import authorizationModule from './modules/authorization';
import orderModule from './modules/order';
import agendaModule from './modules/agenda';
import currentUserModule from './modules/currentUser';
import organizationModule from './modules/organization';



//init context
const context = initContext();

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

app.init();