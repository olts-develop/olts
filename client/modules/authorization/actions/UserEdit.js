/**
 * Created by martin on 21.03.2016.
 */
export default {
    assignRole({Meteor, LocalState}, userId, role) {
        if (!userId) {
            return LocalState.set('EDIT_USER_ROLE', 'User is required.');
        }
        
        if (!role){
            return LocalState.set('EDIT_USER_ROLE', 'Role is required.');
        }

        LocalState.set('EDIT_USER_ROLE', null);

        Meteor.call('userauth.setRole', userId, role, (err) => {
            if (err) {
                return LocalState.set('EDIT_USER_ROLE', err.message);
            }
        });

    },

    assignGroup({Meteor, LocalState}, userId, group) {
        if (!userId) {
            return LocalState.set('EDIT_USER_ROLE', 'User is required.');
        }

        if (!group){
            return LocalState.set('EDIT_USER_ROLE', 'Group is required.');
        }

        LocalState.set('EDIT_USER_ROLE', null);

        Meteor.call('userauth.setRole', userId, group, (err) => {
            if (err) {
                return LocalState.set('EDIT_USER_ROLE', err.message);
            }
        });

    },

    clearErrors({LocalState}) {
        return LocalState.set('EDIT_USER_ROLE', null);
    }
};

