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
import logonModule from './modules/logon';



//Reducers
const reducers = combineReducers({
      ...logonModule.reducers,
})

const context = initContext({reducers});

//create App
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(logonModule);

app.init();