export default {

    create({Meteor, LocalState, FlowRouter}, username, email, password, password2) {


        if (!username) {
            return LocalState.set('CREATE_USER_ERROR', 'UserID / Email is required.');
        }

        if (!password) {
            return LocalState.set('CREATE_USER_ERROR', 'Password is required.');
        }

        if (password != password2){
            return LocalState.set('CREATE_USER_ERROR', 'Passwords do not match.');
        }

        LocalState.set('CREATE_USER_ERROR', null);


        console.log(username + ' '+ email+' '+password)


        Accounts.createUser({username, email, password})


            FlowRouter.go('/userauth');

       // FlowRouter.go('/userauth',{userId: user._id});
    },


    login({Meteor, LocalState, FlowRouter, DateHelper}, user, password) {
        if (!user) {
            return LocalState.set('LOGIN_ERROR', 'UserID / Email is required.');
        }

        if (!password) {
            return LocalState.set('LOGIN_ERROR', 'Password is required.');
        }

        LocalState.set('LOGIN_ERROR', null);

        const mydate=DateHelper.currentDate();
        console.log('now: '+ moment().format('DD.MM.YYYY'))
        console.log('currentDate: '+mydate+'   dateMDy String: '+ DateHelper.dateDMy('30.03.2016',false)+'   dateMDy date: '+ DateHelper.dateDMy('31.03.2016',true))

        Meteor.loginWithPassword(user, password);
        FlowRouter.go('/app');
    },

    clearErrors({LocalState}) {
        return LocalState.set('SAVING_ERROR', null);
    },


    logout({Meteor, LocalState, FlowRouter}){
        console.log('logout....................')
        Meteor.logout();
    }
}
