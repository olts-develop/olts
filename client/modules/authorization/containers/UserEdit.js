/**
 * Created by martin on 21.03.2016.
 */
import userEdit from '../components/userEdit.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, userId, clearErrors}, onData) => {
    const {LocalState, Meteor, Collections} = context();
    const error = LocalState.get('USER_EDIT_ERROR')

    let user, baseroles, groups;

    if (userId !== undefined) {
        if (Meteor.subscribe('user.single', userId).ready()) {
            user = Meteor.users.findOne(userId);
        } else {
            user = Meteor.users.findOne(userId);
        }
        if (user) {
            if (Meteor.subscribe('baseRoles.list').ready()) {
                baseroles = Collections.BaseRoles.find().fetch();
            } else {
                baseroles = Collections.BaseRoles.find().fetch();
            }

            if (Meteor.subscribe('groups.list').ready()) {
                groups = Collections.Groups.find().fetch();
            } else {
                groups = Collections.Groups.find().fetch();
            }
        }
        if (user && (baseroles || groups)){
            onData(null, {user, baseroles, groups});
        } else {
            onData();
        }


    } else {
        onData(null, {error});
    }

    // clearErrors when unmounting the component
    return clearErrors;

};

export const depsMapper = (context, actions) => ({
    assignRole: actions.userEdit.assignRole,
    assignGroup: actions.userEdit.assignGroup,
    clearErrors: actions.userEdit.clearErrors,
    context: () => context
})

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(userEdit);