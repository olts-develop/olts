/**
 * Created by mk on 14.06.16.
 */

import {combineReducers} from 'redux';

import {
      USER_LOGIN,
      USER_LOGIN_ROUTE,
      USER_LOGIN_ERROR,
      USER_LOGOUT_ERROR,
      CREATE_USER_ERROR,
      CREATE_USER_ROUTE
} from '../actions/actionTypes';



function logedin(state = {}, action) {
      switch(action.type) {
            
            case USER_LOGIN:
                  return {
                        ...state,
                        user: action.user,
                        logedIn: action.login
                  };
            
            case USER_LOGIN_ERROR:
                  return {
                        ...state,
                        loginError: action.error
                  };

            case USER_LOGOUT_ERROR:
                  return {
                        ...state,
                        logoutError: action.error
                  };
            
            case USER_LOGIN_ROUTE:
                  return {
                        ...state,
                        loginRoute: action.route
                  };

            default:
                  return state;
      }
}

function createUser(state={}, action) {
      switch(action.type) {
            
            case CREATE_USER_ERROR:
                  return {
                        ...state,
                        createUserError: action.error
                  }
            
            case CREATE_USER_ROUTE:
                  return {
                        ...state,
                        createUserRoute: action.route
                        
                  }
            
            default:
                  return state;
      }
      
}

export default combineReducers({
      logedin,
      createUser
});

