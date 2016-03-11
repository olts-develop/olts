/**
 * Created by martin on 07.03.2016.
 */
import {createApp} from 'mantra-core';
import initContext from './configs/context';

//modules
import coreModule from './modules/core';
import layoutModule from './modules/layout';
import logonModule from './modules/logon';
import authorizationModule from './modules/authorization';

//init context
const context = initContext();

//create App
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(layoutModule);
app.loadModule(logonModule);
app.loadModule(authorizationModule);
app.init();