import {testForEmailAdress} from './TestForInputEmail'



export default {

    create({Meteor, LocalState, FlowRouter}, user, email, password, password2) {


        if (!user) {
            return LocalState.set('CREATE_USER_ERROR', 'UserID / Email is required.');
        }

        if (!password) {
            return LocalState.set('CREATE_USER_ERROR', 'Password is required.');
        }

        if (password != password2){
            return LocalState.set('CREATE_USER_ERROR', 'Passwords do not match.');
        }

        LocalState.set('CREATE_USER_ERROR', null);


        Accounts.createUser({user, email, password});
        FlowRouter.go('/userauth');
    },

    login({Meteor, LocalState, FlowRouter}, user, password) {
        if (!user) {
            return LocalState.set('LOGIN_ERROR', 'UserID / Email is required.');
        }

        if (!password) {
            return LocalState.set('LOGIN_ERROR', 'Password is required.');
        }

        LocalState.set('LOGIN_ERROR', null);



        Meteor.loginWithPassword(user, password);
        FlowRouter.go('/app');
    },

    clearErrors({LocalState}) {
        return LocalState.set('SAVING_ERROR', null);
    }

}
