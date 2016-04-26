export default {

    create({Meteor, LocalState, FlowRouter, AppConfig, Collections}, username, email, password, password2) {


        if (!username) {
            return LocalState.set('CREATE_USER_ERROR', 'UserID / Email is required.');
        }

        if (!password) {
            return LocalState.set('CREATE_USER_ERROR', 'Password is required.');
        }

        if (password != password2) {
            return LocalState.set('CREATE_USER_ERROR', 'Passwords do not match.');
        }

        LocalState.set('CREATE_USER_ERROR', null);

        const isDevelop = AppConfig.isDevelop();

        if (isDevelop) {
            Accounts.createUser({username, email, password}, (error) => {
                if (error) {
                    return LocalState.set('CREATE_USER_ERROR', 'Could not register user ' + error.message)
                }
                console.log("Current User: "+ users._id)
                

               // FlowRouter.go("/useredit/:userId", {userId: response.newUserId})
            })
        } else {
            Meteor.call('user.create', username, email, (error, response) => {
                if (error) {
                    return LocalState.set('CREATE_USER_ERROR', 'Could not register user ' + error.message)
                }
                if (response.newUserId) {
                    FlowRouter.go("/app/useredit/:userId", {userId: response.newUserId})
                }

            })
        }

    },


    login({Meteor, LocalState, FlowRouter}, user, password) {
        if (!user) {
            return LocalState.set('LOGIN_ERROR', 'UserID / Email is required.');
        }

        if (!password) {
            return LocalState.set('LOGIN_ERROR', 'Password is required.');
        }

        LocalState.set('LOGIN_ERROR', null);

        Meteor.loginWithPassword(user, password, (error) => {
            if (error){
                return LocalState.set('LOGIN_ERROR', 'Login failed with: '+ error)
            }
            FlowRouter.go('/app');
        });
        return false;
    },

    clearErrors({LocalState}) {
        return LocalState.set('SAVING_ERROR', null);
    },


    logout({Meteor, LocalState, FlowRouter}){
        Meteor.logout(function (error) {
            if (error){
                return LocalState.set('LOGOUT_ERROR', 'Logout failed with: '+ error)
            }

        });
    }
}
