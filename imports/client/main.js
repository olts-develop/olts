/**
 * Created by martin on 07.03.2016.
 */

//Mantra
import {createApp} from 'mantra-core';
import initContext from './configs/context';

//Redux
import {combineReducers} from 'redux';


//Modules
import coreModule from './modules/core';
import logonModule from './modules/logon';
//import tenantModule from './modules/tenants';



//Reducers
console.log(...logonModule.reducers)
const reducers = combineReducers({
      ...logonModule.reducers
//      ...tenantModule.reducers
})


const context = initContext({reducers});

//create App
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(logonModule);
//app.loadModule(tenantModule);

app.init();