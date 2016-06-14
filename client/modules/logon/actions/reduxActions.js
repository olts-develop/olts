/**
 * Created by mk on 14.06.16.
 */


import {
      USER_LOGIN,
      USER_LOGIN_ROUTE,
      USER_LOGIN_ERROR,
      USER_LOGOUT_ERROR,
      CREATE_USER_ERROR,
      CREATE_USER_ROUTE
} from './actionTypes';


export default {
      
      userLogedIn(user, login) {
            return {type: USER_LOGIN, user, login};
      },

      userLoginError(error) {
            return {type: USER_LOGIN_ERROR, error}
      },

      userLogoutError(error) {
            return {type: USER_LOGOUT_ERROR, error}
      },
      
      createUserError(error){
            return {type: CREATE_USER_ERROR, error}
      },
      
      createUserRoute(route){
            return {type: CREATE_USER_ROUTE, route}
      },
      
      userLoginRoute(route){
            return {type: USER_LOGIN_ROUTE, route}
      }
}