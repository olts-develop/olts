/**
 * Created by martin on 11.03.2016.
 */
export default {
    create({Meteor, LocalState, FlowRouter}, role,userId) {

        if(!userId) {
            return LocalState.set('CREATE_USERAUTH_ERROR', 'No user, user is required.');
        }

        if(!role){
            return LocalState.set('CREATE_USERAUTH_ERROR', 'role is required.');
        }

        Meteor.call('userauth.create', role, userId, (err) => {
            if(err){
                return LocalState.set('CREATE_USERAUTH_ERROR', err.massage);
            }
        });

        FlowRouter.go('/loggin');

    },

    clearErrors({LocalState}) {
        return LocalState.set('SAVING_ERROR', null);
    }

};