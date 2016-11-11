/**
 * Created by mk on 30.05.16.
 */

import tenantReducer from './tenantReducer';
import {combineReducers} from 'redux';

export default {
      tenant: combineReducers({
            tenantReducer
      })
};
