/**
 * Created by martin on 21.03.2016.
 */
import UserEdit from '../components/UserEdit.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, userId, clearErrors}, onData) => {
    const {LocalState, Meteor, Collections} = context();
    const error = LocalState.get('USER_EDIT_ERROR')

    console.log('UserEdit - Composer: ' + userId);

    if (userId !== undefined) {
        if (Meteor.subscribe('user.single').ready()) {
            const user = Meteor.users.findOne(userId);
            onData(null, {user, error});
        } else {
            const user = Meteor.users.findOne(userId);
            if (user) {
                onData(null, {user});
            } else {
                onData();
            }
        }

        if(Meteor.subscribe('baseRoles.list').ready()) {
            const baseroles = Collections.BaseRoles.find();
            console.log('baseroles: ' + Collections.BaseRoles.find().count())
            onData(null,{baseroles, error});
        }

       /* if(Meteor.subscribe('baseRoles.list').ready()) {
            const baseroles = Collections.BaseRoles.find({}, {sort: {role:1}}).fetch();
            onData(null,{baseroles, error});
        }*/

    } else {
        onData(null, {error});
    }

    // clearErrors when unmounting the component
    return clearErrors;

};

export const depsMapper = (context, actions) => ({
    create: actions.UserEdit.create,
    clearErrors: actions.UserEdit.clearErrors,
    context: () => context
})

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(UserEdit);