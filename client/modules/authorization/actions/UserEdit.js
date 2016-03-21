/**
 * Created by martin on 21.03.2016.
 */
export default {
    create({Meteor, LocalState, FlowRouter}, userId, role) {
        if (!userId) {
            return LocalState.set('EDIT_USER', 'Item name is required.');
        }

        LocalState.set('EDIT_USER', null);

        Meteor.call('userauth.create', userId, role, (err) => {
            if (err) {
                return LocalState.set('EDIT_USER', err.message);
            }
        });

    },

    clearErrors({LocalState}) {
        return LocalState.set('EDIT_USER', null);
    }
};

