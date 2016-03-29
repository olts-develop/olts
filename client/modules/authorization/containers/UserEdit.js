/**
 * Created by martin on 21.03.2016.
 */
import UserEdit from '../components/UserEdit.jsx';
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
                //onData(null, {user, baseroles, error});
            } else {
                baseroles = Collections.BaseRoles.find().fetch();
            }

            if (Meteor.subscribe('groups.list').ready()) {
                groups = Collections.Groups.find().fetch();
                //onData(null, {user, baseroles, groups, error});
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
    assignRole: actions.UserEdit.assignRole,
    assignGroup: actions.UserEdit.assignGroup,
    clearErrors: actions.UserEdit.clearErrors,
    context: () => context
})

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(UserEdit);