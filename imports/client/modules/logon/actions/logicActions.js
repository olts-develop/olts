
import userReduxActions from './reduxActions'

export default {

    create({Meteor, dispatch, FlowRouter, AppConfig}, username, email, password, password2) {


        if (!username) {
            return (dispatch(userReduxActions.userLoginError('UserID / Email is required.')));
        }

        if (!password) {
            return (dispatch(userReduxActions.userLoginError('Password is required.')));
        }

        if (password != password2) {
            return (dispatch(userReduxActions.userLoginError('Passwords do not match.')));
        }


        const isDevelop = AppConfig.isDevelop();

        if (isDevelop) {
            Accounts.createUser({username, email, password}, (error) => {
                if (error) {
                    return (dispatch(userReduxActions.createUserError('Passwords do not match.')));
                }

                const createUserRoute = ("/useredit/:userId", {userId: response.newUserId})

                dispatch (userReduxActions.createUserRoute(createUserRoute))

                FlowRouter.go(createUserRoute)
            })
        } else {
            Meteor.call('user.create', username, email, (error, response) => {
                if (error) {
                    return (dispatch(userReduxActions.createUserError('Could not register user ' + error.message)));

                }
                if (response.newUserId) {
                    const createUserRoute = ("/useredit/:userId", {userId: response.newUserId})

                    dispatch (userReduxActions.createUserRoute(createUserRoute))


                    FlowRouter.go(createUserRoute)
                }

            })
        }

    },


    loginUser({Meteor, dispatch, FlowRouter}, user, password) {

        if (!user) {
            return (dispatch(userReduxActions.userLoginError('UserID / Email is required.')));
        }

        if (!password) {
            return (
                  dispatch(userReduxActions.userLoginError('Password is required.'))
                  //LocalState.set('LOGIN_ERROR','Password is required.') 
            );
        }


        Meteor.loginWithPassword(user, password, (error) => {
            if (error){
                return (dispatch(userReduxActions.userLoginError('Login failed with: '+ error)));
            }

            dispatch (userReduxActions.userLogedIn(user,true));
            dispatch (userReduxActions.userLoginRoute('/app'));

            //FlowRouter.go('/app');
            FlowRouter.go('/tenants');
        });
        return false;
    },

    clearErrors({dispatch}) {
        return (
              dispatch (userReduxActions.userLoginError()),
                    dispatch (userReduxActions.createUserError())

        )

    },


    logoutUser({Meteor, dispatch, FlowRouter}){
        Meteor.logout(function (error) {
            if (error){
                return (dispatch(userReduxActions.userLogoutError('Logout failed with: '+ error)));
            }

        });
    },

    back({Meteor, FlowRouter}){
        if (Meteor.userId){
            FlowRouter.go('/app');
        }
        FlowRouter.go('/')
    }
}
