/**
 * Created by martin on 11.03.2016.
 */
export default {
    selectSingleUser({Meteor, LocalState, FlowRouter}, userId) {

        console.log('selectSingleUser: ' + userId);

        if(!userId) {
            return LocalState.set('USERAUTH_ERROR', 'No user, user is required.');
        }

        LocalState.set('USERAUTH_ERROR', null);


        FlowRouter.go(`/useredit/${userId}`)


    },

    clearErrors({LocalState}) {
        return LocalState.set('USERAUTH_ERROR', null);
    }

};