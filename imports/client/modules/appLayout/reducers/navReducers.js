/**
 * Created by mk on 15.06.16.
 */

import {combineReducers} from 'redux';
import {
      NAV_MENUE_CLICK
} from '../actions/actionTypes';


function navSelected( state = {}, action) {
      
      switch (action.type) {
            
            case NAV_MENUE_CLICK:
                  return {
                        ...state,
                        menue: action.menu,
                        index: action.index,
                        value: action.value
                  };

            default:
                  return state

      }
}

export default combineReducers({
      navSelected
});